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
const routes = slugs.filter(Boolean); // non-home routes

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
