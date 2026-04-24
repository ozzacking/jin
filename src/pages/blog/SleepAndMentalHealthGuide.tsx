import React from 'react';

export default function SleepAndMentalHealthGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Sleep and Mental Health: The Bidirectional Connection</h1>
      <p className="text-gray-400 text-sm mb-4">April 2025 · 8 min read</p>
      <p className="text-gray-300 leading-relaxed mb-12">
        Sleep and mental health are deeply intertwined — not in a simple cause-and-effect way, but in a complex, bidirectional relationship. Poor sleep worsens anxiety and depression; anxiety and depression worsen sleep. Understanding how this cycle works — and how to break it — is one of the most powerful things you can do for your mental well-being.
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">How Sleep Deprivation Affects Your Brain</h2>
          <p className="mb-4">
            When you don't get enough sleep, the prefrontal cortex — the brain's rational decision-making center — becomes significantly less active. At the same time, the amygdala, which processes fear and emotional responses, becomes hyperreactive.
          </p>
          <p className="mb-4">
            A landmark study by Matthew Walker at UC Berkeley found that sleep-deprived brains showed a 60% increase in amygdala reactivity compared to well-rested brains. This means your emotional responses become more intense, less controlled, and harder to regulate.
          </p>
          <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
            <p className="text-sm"><strong className="text-white">What this feels like:</strong> Irritability, emotional overreaction to small stressors, difficulty concentrating, and a general sense that everything feels harder than it should.</p>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">REM Sleep and Emotional Processing</h2>
          <p className="mb-4">
            REM (Rapid Eye Movement) sleep serves a critical psychological function: it allows your brain to process and reframe emotional memories. During REM, the stress hormone norepinephrine shuts off completely — the only time this happens in the 24-hour cycle.
          </p>
          <p className="mb-4">
            This creates a unique neurochemical window where your brain can "replay" painful or difficult experiences without the accompanying emotional charge. It's essentially overnight therapy. REM sleep helps you wake up feeling less distressed about the same event you found overwhelming the night before.
          </p>
          <p>
            People who get insufficient REM sleep lose this processing window, causing emotional memories to remain raw and unresolved — contributing to conditions like PTSD, chronic anxiety, and emotional dysregulation.
          </p>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The Anxiety–Insomnia Cycle</h2>
          <p className="mb-4">
            Anxiety is both a cause and consequence of poor sleep, creating a self-reinforcing loop that can be difficult to escape:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { step: '1', title: 'Anxiety activates the nervous system', desc: 'Cortisol and adrenaline keep you alert, making it hard to fall or stay asleep.' },
              { step: '2', title: 'Poor sleep worsens anxiety', desc: 'Sleep deprivation increases amygdala reactivity, making you more prone to anxious thoughts.' },
              { step: '3', title: 'Anticipatory anxiety develops', desc: 'You start worrying about whether you'll be able to sleep, which itself prevents sleep.' },
              { step: '4', title: 'The cycle deepens', desc: 'The bedroom becomes associated with stress and wakefulness rather than rest.' },
            ].map(item => (
              <div key={item.step} className="flex items-start gap-3">
                <span className="text-[#7c6aff] font-bold mt-0.5">{item.step}.</span>
                <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
            <p className="text-sm"><strong className="text-white">Breaking the cycle:</strong> Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold standard treatment — more effective than sleep medications, with lasting results. It addresses the thoughts and behaviors that perpetuate insomnia.</p>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Depression and Sleep Architecture</h2>
          <p className="mb-4">
            Depression profoundly disrupts sleep architecture in specific, measurable ways. People with depression tend to experience:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Reduced slow-wave (deep) sleep — the stage most critical for physical restoration and memory consolidation',
              'Earlier onset of the first REM period (sometimes within 60 minutes of sleep onset instead of the normal 90 minutes)',
              'Increased time in lighter sleep stages, leading to less restorative sleep overall',
              'Early morning awakening — waking 2–3 hours before desired wake time and being unable to return to sleep',
              'Hypersomnia in some cases — sleeping excessively but still feeling unrefreshed',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#7c6aff] font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Treating sleep problems is now recognized as a key component of depression treatment. Studies show that improving sleep quality can reduce depressive symptoms even before antidepressants take full effect.
          </p>
        </div>

        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Practical Strategies to Protect Your Sleep–Mental Health Connection</h2>
          <p className="mb-4">Science-backed habits that support both sleep quality and mental resilience:</p>
          <div className="space-y-4">
            {[
              { emoji: '🕐', title: 'Keep a consistent sleep schedule', desc: 'Go to bed and wake at the same time every day — even weekends. Irregular sleep timing disrupts circadian rhythms and increases depression risk.' },
              { emoji: '🌅', title: 'Get morning sunlight within 30 minutes of waking', desc: 'Light exposure resets your circadian clock and triggers a healthy cortisol awakening response, boosting mood and daytime alertness.' },
              { emoji: '📵', title: 'Establish a digital sunset', desc: 'Avoid screens 60 minutes before bed. Blue light suppresses melatonin, and emotionally stimulating content raises cortisol — both working against sleep.' },
              { emoji: '✍️', title: 'Use expressive writing before bed', desc: 'Write down worries or tomorrow's tasks for 10–15 minutes before sleep. Research shows this "offloads" cognitive load and reduces pre-sleep rumination.' },
              { emoji: '🧘', title: 'Practice 4-7-8 breathing for anxiety', desc: 'Inhale for 4 counts, hold for 7, exhale for 8. This activates the parasympathetic nervous system, reducing cortisol and preparing the body for sleep.' },
              { emoji: '🚶', title: 'Exercise regularly — but time it right', desc: 'Regular exercise reduces anxiety, depression, and sleep latency. Aim for at least 150 minutes per week, but avoid intense workouts within 3 hours of bedtime.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-[#0d1b2a]/50 rounded-xl border border-[#7c6aff]/10">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">When to Seek Professional Help</h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            Self-help strategies are powerful, but sometimes the sleep–mental health cycle requires professional support. Consider reaching out to a healthcare provider if you experience:
          </p>
          <ul className="space-y-2 text-blue-200 text-sm">
            {[
              'Persistent insomnia lasting more than 3 weeks',
              'Sleep difficulties accompanied by persistent low mood, hopelessness, or loss of interest',
              'Nightmares or hypervigilance interfering with sleep (possible PTSD)',
              'Sleep problems affecting your ability to function at work or in relationships',
              'Use of alcohol or substances to help you sleep',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-blue-400 font-bold mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-blue-200 text-sm mt-4">
            CBT-I (Cognitive Behavioral Therapy for Insomnia) delivered by a trained therapist is the most effective long-term treatment for chronic insomnia — more effective than sleep medications, with no side effects.
          </p>
        </div>

      </div>
    </div>
  );
}
