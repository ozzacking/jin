'use strict';
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) { console.error('GITHUB_TOKEN not set'); process.exit(1); }

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src/pages/blog');
const APP_TSX = path.join(ROOT, 'src/App.tsx');
const BLOG_TSX = path.join(ROOT, 'src/pages/Blog.tsx');

function getExistingTopics() {
  return fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.tsx')).map(f => f.replace('.tsx', ''));
}

async function callAI(prompt, retries = 3) {
  const url = 'https://models.inference.ai.azure.com/chat/completions';
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 4000
      })
    });
    if (res.ok) {
      const data = await res.json();
      return data.choices[0].message.content;
    }
    const errText = await res.text();
    if (res.status === 429 && i < retries - 1) {
      console.log('Rate limit, retrying in 30s... (' + (i+1) + '/' + retries + ')');
      await new Promise(r => setTimeout(r, 30000));
      continue;
    }
    throw new Error('API error ' + res.status + ': ' + errText);
  }
}

async function generatePost(existing) {
  const prompt = `You write detailed, high-quality sleep science blog posts for findsleeptime.com — a sleep calculator website.

EXISTING COMPONENTS (you MUST pick a completely different topic):
${existing.join(', ')}

REQUIREMENTS — follow ALL of these exactly:
1. Write a COMPREHENSIVE article with minimum 900 words of real, informative content
2. Include at least 6 sections with H2 headings
3. Use Tailwind CSS with the site dark theme: bg-[#1a2f45]/50, border-[#7c6aff]/20, text-white, text-gray-300, rounded-2xl, p-8
4. Include at least one of: a data table, a numbered list, an actionable checklist, or a tips section
5. Each section must have 2-4 substantial paragraphs or a rich list with detailed explanations
6. End with a "Bottom Line" or conclusion section styled with bg-blue-900/20 border border-blue-500/30
7. Use className NOT class in all JSX
8. The component must be a proper React functional component with full Tailwind styling
9. DO NOT write placeholder or thin content — every section must have real, practical information
10. The outer wrapper: <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

Topics to consider (pick one not already covered): sleep disorders, melatonin science, dream science, chronotypes, jet lag recovery, sleep and exercise, sleep and diet, teenage sleep, elderly sleep, sleep tracking, power naps, sleep deprivation effects, cognitive performance and sleep, sleep and weight loss, circadian biology, etc.

Respond with ONLY valid JSON (no markdown, no code fences):
{
  "componentName": "PascalCase e.g. SleepAndExerciseGuide",
  "slug": "kebab-case-slug",
  "title": "Descriptive article title",
  "description": "One sentence description for blog listing",
  "tsxContent": "COMPLETE valid React TSX — import React from 'react'; ... export default ComponentName; — with full Tailwind styling and 900+ words of content"
}`;
  const text = await callAI(prompt);
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON found in response');
  return JSON.parse(match[0]);
}

function createFile(d) {
  const filePath = path.join(BLOG_DIR, d.componentName + '.tsx');
  if (fs.existsSync(filePath)) {
    console.log('File exists, skip');
    return false;
  }
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
  if (createFile(d)) {
    updateBlog(d);
    updateApp(d);
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
