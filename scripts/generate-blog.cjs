'use strict';
const fs = require('fs');
const path = require('path');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error('GEMINI_API_KEY not set'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src/pages/blog');
const APP_TSX = path.join(ROOT, 'src/App.tsx');
const BLOG_TSX = path.join(ROOT, 'src/pages/Blog.tsx');
function getExistingTopics() {
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.tsx')).map(f => f.replace('.tsx', ''));
}
async function callGemini(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  if (!res.ok) throw new Error('API error ' + res.status + ': ' + await res.text());
  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}
async function generatePost(existing) {
  const prompt = `You write sleep science articles for findsleeptime.com.\n\nEXISTING COMPONENTS (pick a DIFFERENT topic):\n${existing.join(', ')}\n\nRespond with ONLY valid JSON (no markdown, no code fences):\n{\n  "componentName": "PascalCase unique name e.g. SleepDebtGuide",\n  "slug": "kebab-case-slug",\n  "title": "Article title",\n  "description": "One sentence description",\n  "tsxContent": "FULL valid React TSX string — import React from 'react'; ... export default ComponentName;"\n}`;
  const text = await callGemini(prompt);
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON found in response');
  return JSON.parse(match[0]);
}
function createFile(d) {
  const filePath = path.join(BLOG_DIR, d.componentName + '.tsx');
  if (fs.existsSync(filePath)) { console.log('File exists, skip'); return false; }
  fs.writeFileSync(filePath, d.tsxContent, 'utf8');
  console.log('Created', filePath);
  return true;
}
function updateBlog(d) {
  let src = fs.readFileSync(BLOG_TSX, 'utf8');
  src = src.replace(/type Page = ([^;]+);/, (m, inner) => `type Page = ${inner.trimEnd()} | '${d.slug}';`);
  src = src.replace(/(const posts = \[)/, `$1\n  { slug: '${d.slug}', title: '${d.title}', description: '${d.description}', component: '${d.componentName}' },`);
  fs.writeFileSync(BLOG_TSX, src, 'utf8');
  console.log('Updated Blog.tsx');
}
function updateApp(d) {
  let src = fs.readFileSync(APP_TSX, 'utf8');
  src = src.replace(/type Page = ([^;]+);/, (m, inner) => `type Page = ${inner.trimEnd()} | '${d.slug}';`);
  const importLine = `import ${d.componentName} from './pages/blog/${d.componentName}';`;
  src = src.replace(/(import.*Blog.*from.*\n)/, `$1${importLine}\n`);
  src = src.replace(/(case 'blog':)/, `case '${d.slug}': return <${d.componentName} />;\n      $1`);
  fs.writeFileSync(APP_TSX, src, 'utf8');
  console.log('Updated App.tsx');
}
async function main() {
  const existing = getExistingTopics();
  console.log('Existing:', existing.join(', '));
  const d = await generatePost(existing);
  console.log('Generated:', d.componentName, d.slug);
  if (createFile(d)) { updateBlog(d); updateApp(d); }
}
main().catch(e => { console.error(e.message); process.exit(1); });
