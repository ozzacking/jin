// Post-build: prerender every route to real static HTML (so crawlers that
// don't execute JS — including AdSense's review bot — see actual title,
// meta description, and visible text, not an empty SPA shell), regenerate
// sitemap.xml with meaningful per-page dates, and keep a raw-shell 404.html
// as the SPA fallback for genuinely unknown paths.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import http from 'node:http';
import { createReadStream } from 'node:fs';
import { extname } from 'node:path';
import { chromium } from 'playwright';

const SITE = 'https://findsleeptime.com';
const PATH_ALIASES = {
  home: '',
  nap: 'nap-calculator',
  caffeine: 'caffeine-cutoff',
  debt: 'sleep-debt',
};

const app = readFileSync('src/App.tsx', 'utf8');
const caseSlugs = [...app.matchAll(/case '([^']+)':/g)].map((m) => m[1]);
const ids = [...new Set(['home', 'nap', 'caffeine', 'debt', ...caseSlugs])];
const slugs = [...new Set(ids.map((id) => PATH_ALIASES[id] ?? id))];
const EXCLUDED = ['recommended']; // affiliate/Amazon page — kept off nav, sitemap, AND out of the
// static content build until real Amazon Associates approval exists, so it never becomes a
// crawlable "mostly outbound links" page during AdSense review.
const routes = slugs.filter((s) => s && !EXCLUDED.includes(s)); // non-home, non-excluded routes

const dist = 'dist';
const rawShell = readFileSync(join(dist, 'index.html'), 'utf8');

// SPA fallback for genuinely unknown paths — keep the raw (unrendered) shell here.
writeFileSync(join(dist, '404.html'), rawShell);

// ---- pull real dates for blog posts from Blog.tsx (falls back to a fixed
// evergreen date for calculator/static pages so the sitemap stops claiming
// every single URL was "updated today" on every single build) ----
const blogSrc = readFileSync('src/pages/Blog.tsx', 'utf8');
const postDates = {};
for (const m of blogSrc.matchAll(/page:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'/g)) {
  const [, page, date] = m;
  const slug = PATH_ALIASES[page] ?? page;
  const parsed = Date.parse(date);
  if (!Number.isNaN(parsed)) postDates[slug] = new Date(parsed).toISOString().slice(0, 10);
}
const EVERGREEN_DATE = '2026-04-01'; // fixed launch-era date for calculator/static pages

// ---- tiny static file server with SPA fallback, used only during prerendering ----
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml' };
function serveStatic(root, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let path = decodeURIComponent(req.url.split('?')[0]);
      let filePath = join(root, path);
      if (path.endsWith('/') || !extname(path)) {
        const indexPath = join(root, path, 'index.html');
        filePath = existsSync(indexPath) ? indexPath : join(root, 'index.html');
      }
      if (!existsSync(filePath)) filePath = join(root, 'index.html');
      res.setHeader('Content-Type', MIME[extname(filePath)] || 'application/octet-stream');
      createReadStream(filePath).pipe(res);
    });
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

const PORT = 5799;
const server = await serveStatic(dist, PORT);
const browser = await chromium.launch();
const page = await browser.newPage();

// Block real AdSense/ad-network requests during prerendering — the adsbygoogle
// script tag in <head> fires real page-level ad requests as soon as it loads,
// and Google's response injects DOM (with this localhost prerender URL baked
// into it) that would otherwise get captured into the "static" snapshot.
await page.route(/googlesyndication\.com|doubleclick\.net|googleadservices\.com|google-analytics\.com|googletagmanager\.com/, (route) => route.abort());

async function renderRoute(slug) {
  const url = `http://127.0.0.1:${PORT}/${slug}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  // give the app's per-route title/meta effect a beat to run after paint
  await page.waitForTimeout(150);
  const html = await page.content();
  return html;
}

console.log(`Prerendering ${routes.length + 1} routes...`);

// homepage
const homeHtml = await renderRoute('');
writeFileSync(join(dist, 'index.html'), homeHtml);

// every other route
for (const slug of routes) {
  const html = await renderRoute(slug);
  const dir = join(dist, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
}

await browser.close();
server.close();

const today = new Date().toISOString().slice(0, 10);
const urlEntries = ['', ...routes]
  .map((s) => `  <url>\n    <loc>${SITE}/${s}</loc>\n    <lastmod>${postDates[s] ?? EVERGREEN_DATE}</lastmod>\n  </url>`)
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
);

console.log(`postbuild: prerendered ${routes.length + 1} routes to static HTML, 404.html (SPA shell), sitemap.xml (${routes.length + 1} URLs, real dates)`);
