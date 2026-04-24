import React from 'react';

export default function SleepHygieneTips() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">15 Sleep Hygiene Tips That Actually Work</h1>
      <p className="text-gray-400 text-sm mb-4">April 2025 · 9 min read</p>
      <p className="text-gray-300 leading-relaxed mb-12">
        Sleep hygiene refers to the habits and practices that promote consistent, uninterrupted sleep. Unlike medications, good sleep hygiene works with your body's natural rhythms. Here are 15 evidence-backed strategies that make a real difference.
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Fix Your Sleep Schedule First</h2>
          <p className="mb-4">Your circadian rhythm thrives on consistency. Going to bed and waking at the same time every day — weekends included — is the single most impactful sleep hygiene change you can make. Research shows irregular sleep schedules are associated with obesity, depression, and cardiovascular problems independent of total sleep time.</p>
          <p className="mb-4">Even one night of sleeping in can shift your circadian rhythm by up to 45 minutes. This "social jet lag" compounds over time into chronic sleep disruption.</p>
          <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
            <p className="text-sm"><strong className="text-white">Action:</strong> Choose a wake time that works every day and stick to it for 3 weeks. Your body will start making you sleepy at the right bedtime automatically.</p>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Build a 30-Minute Wind-Down Routine</h2>
          <p className="mb-4">Your brain needs a transition period between daily demands and sleep. A consistent pre-sleep routine signals your nervous system to shift from alert to relaxed — lowering cortisol and allowing melatonin to rise.</p>
          <p className="mb-4">The best wind-down activities are low-stimulation: reading a physical book, light stretching, journaling, or taking a warm bath or shower. The subsequent body temperature drop after bathing actively triggers sleepiness.</p>
          <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
            <p className="text-sm"><strong className="text-white">Avoid in the 60 min before bed:</strong> Stressful conversations, work emails, news, social media, or anything requiring active problem-solving.</p>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">3–7. The Five Environment Essentials</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">3.</span>
              <div><strong className="text-white">Total darkness.</strong> Even tiny LED lights suppress melatonin. Use blackout curtains and tape over indicator lights. A sleep mask works as an easy alternative.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">4.</span>
              <div><strong className="text-white">Cool temperature (65–68°F / 18–20°C).</strong> Body temperature needs to drop 1–2°F to initiate sleep. A warm room fights this process all night long.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">5.</span>
              <div><strong className="text-white">Consistent background sound.</strong> A fan or white noise machine masks disruptive sudden sounds that cause micro-arousals throughout the night.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">6.</span>
              <div><strong className="text-white">Reserve bed for sleep only.</strong> Working or watching TV in bed trains your brain to associate bed with wakefulness. Keep bed exclusively for sleep.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">7.</span>
              <div><strong className="text-white">Phone out of the bedroom.</strong> The bedroom should be a phone-free sanctuary. Use a traditional alarm clock instead.</div>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">8. The Caffeine Cutoff Rule</h2>
          <p className="mb-4">Caffeine has a half-life of 5–7 hours — half of it is still in your bloodstream hours after consumption. A coffee at 3 PM means significant caffeine is still active at 9 PM, suppressing adenosine (the sleep-pressure chemical) and delaying sleep onset.</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20 text-center">
              <p className="text-white font-bold">Bedtime: 10 PM</p>
              <p className="text-gray-400 text-sm mt-1">Last caffeine: <span className="text-[#7c6aff] font-semibold">2:00 PM</span></p>
            </div>
            <div className="bg-[#0d1b2a]/50 rounded-xl p-4 border border-[#7c6aff]/20 text-center">
              <p className="text-white font-bold">Bedtime: 11 PM</p>
              <p className="text-gray-400 text-sm mt-1">Last caffeine: <span className="text-[#7c6aff] font-semibold">3:00 PM</span></p>
            </div>
          </div>
          <p className="text-sm">Hidden caffeine sources: tea, energy drinks, pre-workout, certain pain relievers, and dark chocolate all contain meaningful amounts.</p>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">9–11. Food, Alcohol & Exercise</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-1">9. Avoid large meals within 3 hours of bed</h3>
              <p className="text-sm">Digestion raises core body temperature and keeps your metabolism active — opposite of what sleep requires.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">10. Alcohol disrupts sleep — it's not a sleep aid</h3>
              <p className="text-sm">Alcohol helps you fall asleep faster but fragments the second half, suppresses REM sleep, and causes early waking. Net result: less restorative sleep overall.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">11. Exercise regularly — but not within 2–3 hours of bed</h3>
              <p className="text-sm">Regular exercise is one of the strongest natural sleep aids. However, intense late exercise raises adrenaline and body temperature, delaying sleep onset for many people.</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">12–15. Managing Your Mind at Night</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">12.</span>
              <div><strong className="text-white">Get up if awake 20+ minutes.</strong> Lying awake in bed trains your brain to associate bed with frustration. Get up, do something calm in dim light, return when sleepy.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">13.</span>
              <div><strong className="text-white">Write tomorrow's to-do list before bed.</strong> A Baylor University study found spending 5 minutes writing specific next-day tasks helped people fall asleep significantly faster.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">14.</span>
              <div><strong className="text-white">Try 4-7-8 breathing.</strong> Inhale 4 counts, hold 7, exhale 8. This activates the parasympathetic system, reducing heart rate and anxiety — ideal when your mind won't stop.</div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7c6aff] font-bold text-lg mt-0.5">15.</span>
              <div><strong className="text-white">Get morning sunlight within 30 minutes of waking.</strong> Bright light resets your circadian clock, making you alert earlier and genuinely sleepy at the right bedtime.</div>
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-200 mb-4">The High-Impact Shortlist</h2>
          <p className="text-green-200 text-sm mb-3">If you can only change a few things, start with these:</p>
          <ul className="space-y-2 text-green-200 text-sm">
            <li className="flex items-center gap-2"><span className="text-green-400 font-bold">1.</span> Same wake time every single day</li>
            <li className="flex items-center gap-2"><span className="text-green-400 font-bold">2.</span> Bedroom completely dark and cool</li>
            <li className="flex items-center gap-2"><span className="text-green-400 font-bold">3.</span> No caffeine after 2 PM</li>
            <li className="flex items-center gap-2"><span className="text-green-400 font-bold">4.</span> Phone out of the bedroom</li>
            <li className="flex items-center gap-2"><span className="text-green-400 font-bold">5.</span> 30-minute screen-free wind-down routine</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">How Long Until Results?</h2>
          <p className="text-blue-200 leading-relaxed">Most people notice improvements within 1–2 weeks of consistently applying these habits. Full circadian rhythm adjustment takes 3–4 weeks. Pair these habits with cycle-timed sleep using our <strong>Sleep Cycle Calculator</strong> for maximum benefit.</p>
        </div>

      </div>
    </div>
  );
                }
