// Post-build: generate a static index.html for every route so GitHub Pages
// serves HTTP 200 for all sitemap URLs, and regenerate sitemap.xml from the
// routes actually defined in src/App.tsx (kept in sync with the auto-blog bot).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

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

const dist = 'dist';
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf8');

// SPA fallback for unknown paths
writeFileSync(join(dist, '404.html'), indexHtml);

const routes = slugs.filter(Boolean);
for (const slug of routes) {
  const dir = join(dist, slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), indexHtml);
}

const today = new Date().toISOString().slice(0, 10);
const urlEntries = ['', ...routes]
  .map(
    (s) =>
      `  <url>\n    <loc>${SITE}/${s}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`
);

console.log(`postbuild: ${routes.length} static routes + 404.html + sitemap.xml`);
