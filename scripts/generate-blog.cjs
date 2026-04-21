'use strict';
const fs = require('fs');
const path = require('path');
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) { console.error('ANTHROPIC_API_KEY not set'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src/pages/blog');
const APP_TSX = path.join(ROOT, 'src/App.tsx');
const BLOG_TSX = path.join(ROOT, 'src/pages/Blog.tsx');
function getExistingTopics() {
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.tsx')).map(f => f.replace('.tsx', ''));
}
async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model: 'claude-opus-4-5', max_tokens: 4096, messages: [{ role: 'user', content: prompt }] })
  });
  if (!res.ok) throw new Error('API error ' + res.status + ': ' + await res.text());
  return (await res.json()).content[0].text;
}
async function generatePost(existing) {
  const prompt = 'You write sleep science articles for findsleeptime.com.\n\nEXISTING COMPONENTS (pick a DIFFERENT topic): ' + existing.join(', ') + '\n\nChoose a fresh sleep topic (napping, caffeine, chronotypes, melatonin, REM, blue light, temperature, etc.)\n\nReturn ONLY valid JSON (no markdown):\n{\n  "title": "...",\n  "pageId": "blog-kebab-case",\n  "componentName": "PascalCase",\n  "description": "1-2 sentence summary.",\n  "category": "Sleep Science",\n  "readTime": "5 min read",\n  "date": "April 2025",\n  "tsxContent": "FULL TSX as JSON-escaped string"\n}\n\ntsxContent: React component, no imports, no props, Tailwind CSS, dark theme (text-white, text-gray-300), purple #7c6aff, container max-w-3xl mx-auto px-6 py-12, 5-7 sections 700-900 words, end with: export default ComponentName;\nEscape quotes as \\\\\", newlines as \\\\n';
  const text = await callClaude(prompt);
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON: ' + text.slice(0,200));
  return JSON.parse(match[0]);
}
function createFile(d) {
  const fp = path.join(BLOG_DIR, d.componentName + '.tsx');
  if (fs.existsSync(fp)) { console.log('Exists, skip'); return false; }
  let c = d.tsxContent;
  fs.writeFileSync(fp, c);
  console.log('Created:', fp);
  return true;
}
function updateBlog(d) {
  let c = fs.readFileSync(BLOG_TSX, 'utf8');
  if (c.includes("'" + d.pageId + "'")) { console.log('Already in Blog.tsx'); return; }
  const t = d.title.replace(/'/g, "\\'"), desc = d.description.replace(/'/g, "\\'");
  const entry = "    {\n        id: '" + d.pageId.replace('blog-','') + "',\n        page: '" + d.pageId + "' as Page,\n        title: '" + t + "',\n        description: '" + desc + "',\n        category: '" + d.category + "',\n        readTime: '" + d.readTime + "',\n        date: '" + d.date + "',\n    },";
  c = c.replace(/const posts: BlogPost\[\] = \[/, 'const posts: BlogPost[] = [\n' + entry);
  c = c.replace("'blog-fix-sleep-schedule'", "'blog-fix-sleep-schedule' | '" + d.pageId + "'");
  fs.writeFileSync(BLOG_TSX, c);
  console.log('Updated Blog.tsx');
}
function updateApp(d) {
  let c = fs.readFileSync(APP_TSX, 'utf8');
  if (c.includes("'" + d.pageId + "'")) { console.log('Already in App.tsx'); return; }
  c = c.replace("'blog-fix-sleep-schedule'", "'blog-fix-sleep-schedule' | '" + d.pageId + "'");
  c = c.replace("import FixSleepSchedule from './pages/blog/FixSleepSchedule';", "import FixSleepSchedule from './pages/blog/FixSleepSchedule';\nimport " + d.componentName + " from './pages/blog/" + d.componentName + "';");
  c = c.replace(/case 'blog-fix-sleep-schedule':[\s\S]*?return <FixSleepSchedule \/>/, "case 'blog-fix-sleep-schedule':\n            return <FixSleepSchedule />;\n        case '" + d.pageId + "':\n            return <" + d.componentName + " />");
  fs.writeFileSync(APP_TSX, c);
  console.log('Updated App.tsx');
}
async function main() {
  const existing = getExistingTopics();
  console.log('Existing:', existing.join(', '));
  const d = await generatePost(existing);
  console.log('Generated:', d.title, '(' + d.pageId + ')');
  if (createFile(d)) { updateBlog(d); updateApp(d); }
  console.log('Done!');
}
main().catch(e => { console.error(e.message); process.exit(1); });
