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
        max_tokens: 4500
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
  // High-CPC keyword-focused topics for AdSense revenue optimization
  const highCpcTopics = [
    { keyword: 'best sleep tracker 2025', topic: 'Sleep Trackers & Wearables', angle: 'Compare top sleep trackers (Oura Ring, Fitbit, Apple Watch, Garmin) with accuracy data, what metrics matter, and how to use sleep data to actually improve sleep quality' },
    { keyword: 'sleep apnea symptoms and treatment', topic: 'Sleep Apnea Guide', angle: 'Signs of sleep apnea (snoring, daytime fatigue, morning headaches), risk factors, diagnosis process (sleep study), CPAP vs oral appliance vs surgery, and lifestyle changes' },
    { keyword: 'insomnia treatment without medication', topic: 'Insomnia Treatment', angle: 'CBT-I techniques, sleep restriction therapy, stimulus control, relaxation techniques, and when to consider medication — with actionable step-by-step protocols' },
    { keyword: 'best mattress for back pain and sleep', topic: 'Mattress Guide for Better Sleep', angle: 'How mattress type affects sleep quality and spinal alignment, firmness guide by sleep position, what to look for, and top-rated options by budget range' },
    { keyword: 'melatonin dosage timing and effectiveness', topic: 'Melatonin Science', angle: 'Optimal melatonin dosage (research shows 0.5mg beats 5mg), timing relative to bedtime, when it works vs when it does not, interactions, and natural melatonin boosters' },
    { keyword: 'white noise machine for sleep', topic: 'Sound Therapy for Sleep', angle: 'White vs pink vs brown noise, how sound masking works, benefits for light sleepers and babies, comparison of apps vs machines, and which frequencies help most' },
    { keyword: 'sleep deprivation effects on health', topic: 'Sleep Deprivation Health Risks', angle: 'What happens to the body after 24/48/72 hours without sleep, long-term risks (heart disease, diabetes, dementia), cognitive and emotional impact, and recovery timeline' },
    { keyword: 'how to fix sleep schedule quickly', topic: 'Sleep Schedule Reset', angle: 'Science-based methods to shift your circadian rhythm: light therapy, strategic melatonin use, fasting protocols, chronotype assessment, and shift worker strategies' },
    { keyword: 'sleep supplements that actually work', topic: 'Sleep Supplements Reviewed', angle: 'Evidence-based review of magnesium glycinate, L-theanine, ashwagandha, valerian root, and CBD for sleep — with dosage, timing, and what the research actually shows' },
    { keyword: 'children sleep requirements by age', topic: 'Children Sleep Guide', angle: 'Sleep needs by age (newborn to teen), signs of sleep deprivation in kids, bedtime routine strategies, sleep regression phases, and when to consult a pediatrician' },
    { keyword: 'shift work sleep disorder solutions', topic: 'Shift Worker Sleep Guide', angle: 'How rotating and night shifts disrupt circadian rhythms, health risks, light therapy protocols, blackout bedroom setup, strategic napping, and meal timing for shift workers' },
    { keyword: 'sleep and weight loss connection', topic: 'Sleep and Weight Management', angle: 'How poor sleep raises ghrelin, lowers leptin, disrupts insulin sensitivity, and leads to fat gain — with the research, and how improving sleep accelerates fat loss' },
    { keyword: 'bedroom environment for better sleep', topic: 'Bedroom Optimization Guide', angle: 'Ideal temperature (65-68°F), complete darkness, noise control, air quality, EMF and device-free zones, mattress and pillow selection — the complete sleep sanctuary setup' },
    { keyword: 'sleep problems during menopause', topic: 'Menopause and Sleep', angle: 'Why menopause causes insomnia (estrogen, progesterone, hot flashes), night sweats management, HRT considerations, natural remedies, and CBT-I for menopausal women' },
    { keyword: 'anxiety and sleep problems at night', topic: 'Anxiety and Sleep', angle: 'The bidirectional anxiety-insomnia cycle, nighttime anxiety triggers, evidence-based techniques (4-7-8 breathing, body scan, worry journaling), and when to seek therapy' },
  ];

  // Pick a topic not already covered
  const existingLower = existing.map(e => e.toLowerCase());
  const available = highCpcTopics.filter(t =>
    !existingLower.some(e => e.includes(t.topic.toLowerCase().split(' ')[0]) || t.topic.toLowerCase().includes(e.toLowerCase().split('guide')[0].trim()))
  );

  const pick = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : highCpcTopics[Math.floor(Math.random() * highCpcTopics.length)];

  const prompt = `You write detailed, high-quality sleep health blog posts for findsleeptime.com — a sleep calculator website targeting English-speaking adults (US, Canada, UK, Australia).

TARGET KEYWORD: "${pick.keyword}"
TOPIC: ${pick.topic}
CONTENT ANGLE: ${pick.angle}

EXISTING COMPONENTS (avoid duplicating these):
${existing.join(', ')}

REQUIREMENTS — follow ALL of these exactly:
1. Write a COMPREHENSIVE article with minimum 900 words of real, informative content optimized for the target keyword
2. Include at least 6 sections with descriptive H2 headings that naturally include the keyword or related terms
3. Use Tailwind CSS with the site dark theme: bg-[#1a2f45]/50, border-[#7c6aff]/20, text-white, text-gray-300, rounded-2xl, p-8
4. Include at least TWO of: a comparison table, a numbered step-by-step list, an actionable checklist, a pros/cons section, or a product category breakdown
5. Each section must have 2-4 substantial paragraphs OR a rich structured list with detailed explanations
6. Include specific data points, studies, or statistics where relevant (e.g. "A 2023 study in Sleep Medicine found...")
7. Where appropriate, naturally mention product categories (e.g. "sleep trackers", "CPAP machines", "magnesium supplements") that readers might want to research — this helps with monetization
8. End with a "Bottom Line" or "Key Takeaways" section styled with bg-blue-900/20 border border-blue-500/30
9. Use className NOT class in all JSX
10. The component must be a proper React functional component with full Tailwind styling — NO .map() on arrays of strings without keys
11. The outer wrapper: <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
12. Add reading time estimate: "X min read" (calculate honestly based on word count)

Respond with ONLY valid JSON (no markdown, no code fences):
{
  "componentName": "PascalCase e.g. SleepTrackerGuide",
  "slug": "kebab-case-slug",
  "title": "Descriptive SEO-optimized article title including the target keyword naturally",
  "description": "One compelling sentence description for the blog listing (under 120 chars)",
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
