'use strict';
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) { console.error('GITHUB_TOKEN not set'); process.exit(1); }

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'src/pages/blog');
const APP_TSX = path.join(ROOT, 'src/App.tsx');
const BLOG_TSX = path.join(ROOT, 'src/pages/Blog.tsx');
const USED_TOPICS_FILE = path.join(__dirname, 'used-topics.json');

// High-CPC keyword-focused topics for AdSense revenue optimization.
// Each topic is used AT MOST ONCE (tracked in used-topics.json) to avoid
// the near-duplicate content that previously triggered an AdSense rejection.
const TOPICS = [
  { keyword: 'best sleep tracker 2025', topic: 'Sleep Trackers & Wearables', angle: 'Compare top sleep trackers (Oura Ring, Fitbit, Apple Watch, Garmin) with accuracy data, what metrics matter, and how to use sleep data to actually improve sleep quality' },
  { keyword: 'sleep apnea symptoms and treatment', topic: 'Sleep Apnea Guide', angle: 'Signs of sleep apnea (snoring, daytime fatigue, morning headaches), risk factors, diagnosis process (sleep study), CPAP vs oral appliance vs surgery, and lifestyle changes' },
  { keyword: 'insomnia treatment without medication', topic: 'Insomnia Treatment', angle: 'CBT-I techniques, sleep restriction therapy, stimulus control, relaxation techniques, and when to consider medication — with actionable step-by-step protocols' },
  { keyword: 'best mattress for back pain and sleep', topic: 'Mattress Guide for Better Sleep', angle: 'How mattress type affects sleep quality and spinal alignment, firmness guide by sleep position, what to look for, and top-rated options by budget range' },
  { keyword: 'melatonin dosage timing and effectiveness', topic: 'Melatonin Science', angle: 'Optimal melatonin dosage (research shows 0.5mg beats 5mg), timing relative to bedtime, when it works vs when it does not, interactions, and natural melatonin boosters' },
  { keyword: 'white noise and sound therapy for sleep', topic: 'Sound Therapy for Sleep', angle: 'White vs pink vs brown noise, how sound masking works, benefits for light sleepers and babies, comparison of apps vs machines, and which frequencies help most' },
  { keyword: 'sleep deprivation effects on health', topic: 'Sleep Deprivation Health Risks', angle: 'What happens to the body after 24/48/72 hours without sleep, long-term risks (heart disease, diabetes, dementia), cognitive and emotional impact, and recovery timeline' },
  { keyword: 'how to fix your sleep schedule quickly', topic: 'Sleep Schedule Reset', angle: 'Science-based methods to shift your circadian rhythm: light therapy, strategic melatonin use, fasting protocols, chronotype assessment, and shift worker strategies' },
  { keyword: 'sleep supplements that actually work', topic: 'Sleep Supplements Reviewed', angle: 'Evidence-based review of magnesium glycinate, L-theanine, ashwagandha, valerian root, and CBD for sleep — with dosage, timing, and what the research actually shows' },
  { keyword: 'children sleep requirements by age', topic: 'Children Sleep Guide', angle: 'Sleep needs by age (newborn to teen), signs of sleep deprivation in kids, bedtime routine strategies, sleep regression phases, and when to consult a pediatrician' },
  { keyword: 'shift work sleep disorder solutions', topic: 'Shift Worker Sleep Guide', angle: 'How rotating and night shifts disrupt circadian rhythms, health risks, light therapy protocols, blackout bedroom setup, strategic napping, and meal timing for shift workers' },
  { keyword: 'sleep and weight loss connection', topic: 'Sleep and Weight Management', angle: 'How poor sleep raises ghrelin, lowers leptin, disrupts insulin sensitivity, and leads to fat gain — with the research, and how improving sleep accelerates fat loss' },
  { keyword: 'bedroom environment for better sleep', topic: 'Bedroom Optimization Guide', angle: 'Ideal temperature (65-68°F), complete darkness, noise control, air quality, EMF and device-free zones, mattress and pillow selection — the complete sleep sanctuary setup' },
  { keyword: 'sleep problems during menopause', topic: 'Menopause and Sleep', angle: 'Why menopause causes insomnia (estrogen, progesterone, hot flashes), night sweats management, HRT considerations, natural remedies, and CBT-I for menopausal women' },
  { keyword: 'anxiety and sleep problems at night', topic: 'Anxiety and Sleep', angle: 'The bidirectional anxiety-insomnia cycle, nighttime anxiety triggers, evidence-based techniques (4-7-8 breathing, body scan, worry journaling), and when to seek therapy' },
  { keyword: 'jet lag recovery strategies', topic: 'Jet Lag Recovery', angle: 'Pre-flight circadian shifting, light exposure timing at the destination, strategic melatonin and caffeine use, and how many days recovery actually takes by timezone distance' },
  { keyword: 'best sleep apps compared 2025', topic: 'Sleep Apps Comparison', angle: 'Compare leading sleep tracking and meditation apps (Calm, Headspace, Sleep Cycle, Pillow), what they actually measure vs. wearables, pricing, and which ones are worth it' },
  { keyword: 'polyphasic sleep schedules explained', topic: 'Polyphasic Sleep', angle: 'How biphasic and polyphasic schedules work, the research on whether they are sustainable long-term, who might benefit, and the health risks to know about' },
  { keyword: 'blue light and sleep quality', topic: 'Blue Light and Sleep', angle: 'How blue light suppresses melatonin production, screen curfew recommendations, blue-light glasses vs. night mode settings, and what the research actually shows' },
  { keyword: 'pregnancy sleep problems by trimester', topic: 'Pregnancy and Sleep', angle: 'How sleep changes trimester by trimester, safe sleep positions, managing insomnia and restless leg syndrome, and postpartum sleep recovery strategies' },
  { keyword: 'caffeine and sleep half life explained', topic: 'Caffeine and Sleep Science', angle: 'How caffeine half-life affects sleep onset, individual metabolism differences, ideal cutoff times by body weight, and hidden caffeine sources that disrupt sleep' },
  { keyword: 'alcohol effects on sleep quality', topic: 'Alcohol and Sleep', angle: 'How alcohol fragments REM sleep even though it speeds sleep onset, the rebound insomnia effect, safe drinking windows before bed, and long-term impacts on sleep architecture' },
  { keyword: 'sleep divorce separate bedrooms benefits', topic: 'Sleep Divorce', angle: 'Why couples choose separate sleep spaces, the research on partner sleep disruption, how to bring it up without hurt feelings, and alternatives like separate blankets or mattresses' },
  { keyword: 'best pillow for neck pain and sleep', topic: 'Pillow Guide', angle: 'How pillow loft and firmness affect spinal alignment by sleep position, memory foam vs. down vs. cervical pillows, and when to replace your pillow' },
  { keyword: 'REM sleep behavior disorder symptoms', topic: 'REM Sleep Disorders', angle: 'What REM sleep behavior disorder looks like, how it differs from nightmares and sleepwalking, diagnosis, treatment options, and when it signals a neurological risk' },
  { keyword: 'exercise timing and sleep quality', topic: 'Exercise and Sleep Timing', angle: 'Best time of day to work out for sleep quality, how intense evening exercise affects core temperature and sleep onset, and recovery-focused evening routines' },
  { keyword: 'sleep temperature and thermoregulation', topic: 'Sleep Temperature Science', angle: 'Why core body temperature drop triggers sleep onset, ideal bedroom and bedding temperature, cooling mattress technology, and temperature tips for hot sleepers' },
  { keyword: 'lucid dreaming techniques for beginners', topic: 'Lucid Dreaming', angle: 'Reality testing methods, the MILD and WBTB techniques, dream journaling, supplements linked to dream vividness, and the safety considerations around lucid dreaming practice' },
  { keyword: 'sleep and immune system connection', topic: 'Sleep and Immunity', angle: 'How sleep deprivation weakens immune response, the research on vaccine effectiveness and sleep, cytokine production during deep sleep, and sleep strategies during illness' },
  { keyword: 'college students sleep deprivation crisis', topic: 'College Sleep Health', angle: 'Why students chronically undersleep, the academic performance cost, dorm-room sleep hygiene strategies, and balancing social life with a sustainable sleep schedule' },
];

function loadUsedTopics() {
  if (fs.existsSync(USED_TOPICS_FILE)) {
    return new Set(JSON.parse(fs.readFileSync(USED_TOPICS_FILE, 'utf8')));
  }
  return new Set();
}

function saveUsedTopics(used) {
  fs.writeFileSync(USED_TOPICS_FILE, JSON.stringify([...used], null, 2) + '\n', 'utf8');
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

async function generatePost(pick, existingComponentNames) {
  const prompt = `You write detailed, high-quality sleep health blog posts for findsleeptime.com — a sleep calculator website targeting English-speaking adults (US, Canada, UK, Australia).

TARGET KEYWORD: "${pick.keyword}"
TOPIC: ${pick.topic}
CONTENT ANGLE: ${pick.angle}

EXISTING COMPONENT NAMES (your componentName must not collide with these):
${existingComponentNames.join(', ')}

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
13. This is the ONLY article that will ever be written on this exact topic — do not hedge language as if other articles cover related angles

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
    console.log('Component file already exists, skip:', d.componentName);
    return false;
  }
  fs.writeFileSync(filePath, d.tsxContent, 'utf8');
  console.log('Created', filePath);
  return true;
}

function updateBlog(d, readTime) {
  let src = fs.readFileSync(BLOG_TSX, 'utf8');
  src = src.replace(/type Page = ([^;]+);/, (m, inner) => `type Page = ${inner.trimEnd()} | '${d.slug}';`);
  const entry = `  {\n        id: '${d.slug}',\n        page: '${d.slug}',\n        title: ${JSON.stringify(d.title)},\n        description: ${JSON.stringify(d.description)},\n        category: 'Sleep Science',\n        readTime: '${readTime}',\n        date: '${new Date().toISOString().slice(0, 10)}',\n  },`;
  src = src.replace(/(const posts: BlogPost\[\] = \[)/, `$1\n${entry}`);
  fs.writeFileSync(BLOG_TSX, src, 'utf8');
  console.log('Updated Blog.tsx');
}

function updateApp(d) {
  let src = fs.readFileSync(APP_TSX, 'utf8');
  src = src.replace(/type Page = ([^;]+);/, (m, inner) => `type Page = ${inner.trimEnd()} | '${d.slug}';`);
  const importLine = `import ${d.componentName} from './pages/blog/${d.componentName}';`;
  src = src.replace(/(import.*Blog.*from.*\r?\n)/, `$1${importLine}\n`);
  src = src.replace(/(case 'blog':)/, `case '${d.slug}': return <${d.componentName} />;\n      $1`);
  fs.writeFileSync(APP_TSX, src, 'utf8');
  console.log('Updated App.tsx');
}

async function main() {
  const used = loadUsedTopics();
  const available = TOPICS.filter((t) => !used.has(t.keyword));

  if (available.length === 0) {
    console.log('All', TOPICS.length, 'topics already covered. Skipping this run — add more TOPICS entries to continue growing the blog.');
    return;
  }

  const pick = available[Math.floor(Math.random() * available.length)];
  const existingComponentNames = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.tsx')).map((f) => f.replace('.tsx', ''));

  console.log('Picked topic:', pick.keyword);
  const d = await generatePost(pick, existingComponentNames);
  console.log('Generated:', d.componentName, d.slug);

  if (createFile(d)) {
    const rt = d.tsxContent.match(/(\d+)\s*min read/);
    updateBlog(d, rt ? rt[1] + ' min read' : '6 min read');
    updateApp(d);
    used.add(pick.keyword);
    saveUsedTopics(used);
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
