import React from 'react';

export default function NappingBenefitsGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">The Science of Napping: Benefits, Types, and How to Nap Perfectly</h1>
      <p className="text-gray-400 text-sm mb-4">April 2025 · 7 min read</p>
      <p className="text-gray-300 leading-relaxed mb-12">
        Napping is one of the most misunderstood tools in human performance. Done right, a nap can restore alertness and boost creativity as effectively as a full night's extra sleep. Done wrong, it leaves you groggy and ruins your nighttime sleep. Here's exactly how to nap like a pro.
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Napping Works: The Biology</h2>
          <p className="mb-4">Sleepiness is driven by two forces: your circadian rhythm and sleep pressure (adenosine buildup). Adenosine — a byproduct of brain activity — accumulates throughout the day and creates the urge to sleep. A nap clears some of this adenosine, temporarily restoring alertness.</p>
          <p className="mb-4">Humans are naturally biphasic sleepers — biologically wired for two sleep periods per day. The post-lunch energy dip (1–3 PM) isn't caused by your meal; it's a built-in circadian signal. Many high-performing cultures have traditionally incorporated afternoon rest for this reason.</p>
          <p>NASA research on military pilots found that a 40-minute nap improved performance by 34% and alertness by 100%. Even a 10-minute nap produces cognitive benefits that last 2–3 hours.</p>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">The Three Types of Naps</h2>
          <div className="space-y-5">
            <div className="bg-[#0d1b2a]/50 rounded-xl p-5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500/20 text-green-300 text-sm font-semibold px-3 py-1 rounded-full">10–20 min</span>
                <h3 className="text-white font-bold">The Power Nap ⭐ Best for most people</h3>
              </div>
              <p className="text-sm">Stays in light sleep (Stage 1–2). You wake before reaching deep sleep, so there's no grogginess. Provides immediate alertness boost, improved mood, and enhanced motor performance. Ideal during work breaks.</p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-5 border border-yellow-500/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-500/20 text-yellow-300 text-sm font-semibold px-3 py-1 rounded-full">30 min</span>
                <h3 className="text-white font-bold">The Full Stage Nap ⚠️ Risk of grogginess</h3>
              </div>
              <p className="text-sm">Enters deeper sleep stages. More restorative, but you may experience sleep inertia (grogginess) for 10–30 minutes after waking. Good for shift workers or the severely sleep-deprived.</p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-5 border border-[#7c6aff]/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#7c6aff]/20 text-[#7c6aff] text-sm font-semibold px-3 py-1 rounded-full">90 min</span>
                <h3 className="text-white font-bold">The Full Cycle Nap 🔄 For sleep debt recovery</h3>
              </div>
              <p className="text-sm">A complete sleep cycle including REM sleep. Enhances creativity, emotional memory, and procedural learning. Minimal grogginess because you complete a full cycle. Best when recovering from significant sleep debt.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Proven Benefits of Napping</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20">
              <p className="text-[#7c6aff] font-semibold text-sm mb-2">🧠 Cognitive Performance</p>
              <p className="text-xs">Improves reaction time, working memory, logical reasoning, and decision-making. A 20-min nap restores performance to morning levels.</p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20">
              <p className="text-[#7c6aff] font-semibold text-sm mb-2">😊 Mood & Emotional Regulation</p>
              <p className="text-xs">Reduces irritability, improves frustration tolerance. Even a 10-minute nap significantly lifts mood for 2–4 hours.</p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20">
              <p className="text-[#7c6aff] font-semibold text-sm mb-2">💪 Physical Recovery</p>
              <p className="text-xs">Athletes who nap show improved sprint times, reaction speed, and reduced perceived effort — ideal for two-a-day training.</p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20">
              <p className="text-[#7c6aff] font-semibold text-sm mb-2">❤️ Cardiovascular Health</p>
              <p className="text-xs">A Greek study of 23,000 people found regular nappers had a 37% lower risk of coronary death compared to non-nappers.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The Coffee Nap: A Counterintuitive Hack</h2>
          <p className="mb-4">The "coffee nap" — drinking coffee immediately before a 20-minute nap — is one of the most effective alertness strategies available. Here's why:</p>
          <p className="mb-4">Caffeine takes 20–30 minutes to enter the bloodstream. During a 20-minute nap, your brain clears adenosine. When you wake, caffeine kicks in — now blocking the freshly cleared adenosine receptors. Result: dramatically enhanced alertness compared to either coffee or a nap alone.</p>
          <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
            <p className="text-sm"><strong className="text-white">How to do it:</strong> Drink a full cup of coffee, set a 20-minute alarm, immediately lie down. The caffeine won't interfere with falling asleep because it hasn't absorbed yet. Wake up to double alertness.</p>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Rules for Napping Without Ruining Night Sleep</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold mt-0.5">1.</span><span><strong className="text-white">Nap before 3 PM.</strong> Later naps reduce adenosine buildup, making it harder to fall asleep at night. The circadian dip (1–3 PM) is your optimal nap window.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold mt-0.5">2.</span><span><strong className="text-white">Keep it under 30 minutes</strong> (unless doing a full 90-min cycle). Waking mid-deep-sleep is what causes grogginess.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold mt-0.5">3.</span><span><strong className="text-white">Create a dark, quiet environment.</strong> Even a brief nap benefits greatly from darkness and silence or white noise.</span></li>
            <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold mt-0.5">4.</span><span><strong className="text-white">Don't nap if you have chronic insomnia.</strong> Napping reduces sleep pressure, which can worsen nighttime insomnia in those who already struggle to sleep at night.</span></li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">The Bottom Line</h2>
          <p className="text-blue-200 leading-relaxed">A 10–20 minute power nap between 1–3 PM is the sweet spot for most people — quick, effective, and won't interfere with nighttime sleep. For maximum sleep performance, combine strategic napping with cycle-timed nighttime sleep using our <strong>Sleep Cycle Calculator</strong>.</p>
        </div>

      </div>
    </div>
  );
      }
