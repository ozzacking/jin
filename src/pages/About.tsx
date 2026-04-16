import React from 'react';
import { Brain, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2">About Sleep Cycles</h1>
        <p className="text-xl text-gray-300 mb-12">
          Understanding the science behind better sleep
        </p>

        <div className="space-y-8">
          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">What Are Sleep Cycles?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A sleep cycle is a complete progression through different stages of sleep, lasting
              approximately 90 minutes on average. During each cycle, your body moves through light
              sleep, deep sleep, and REM (rapid eye movement) sleep, each serving important
              biological functions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Most adults experience 4-6 complete cycles per night, totaling 6-9 hours of sleep.
              The quality of sleep improves when you wake naturally at the end of a cycle rather
              than in the middle of deep sleep.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6">
              <Brain className="w-8 h-8 text-[#7c6aff] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Light Sleep (Stages 1-2)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your body begins to relax, heart rate slows, and temperature drops. You can be
                easily awakened during this stage. Light sleep makes up about 50% of sleep time.
              </p>
            </div>

            <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6">
              <Heart className="w-8 h-8 text-[#7c6aff] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Deep Sleep (Stage 3)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your body repairs muscle tissue, consolidates memories, and strengthens the immune
                system. Deep sleep is crucial for physical restoration and typically lasts 20-40
                minutes per cycle.
              </p>
            </div>

            <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-6">
              <Zap className="w-8 h-8 text-[#7c6aff] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">REM Sleep</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your brain is highly active with dreams and emotional processing. REM sleep is
                essential for cognitive function, creativity, and mental health. REM periods get
                longer throughout the night.
              </p>
            </div>
          </div>

          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why 90 Minutes?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The 90-minute cycle duration is based on extensive sleep research. This is the
              average time it takes to progress through all sleep stages from light sleep back to
              light sleep, completing one full cycle.
            </p>
            <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20 mb-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong>Important:</strong> Sleep cycle duration varies between 80-100 minutes for
                different individuals. This calculator uses 90 minutes as the standard, but if you
                consistently feel best waking at different intervals, you may have a slightly
                different cycle length.
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Waking at the end of a cycle (when your body is naturally closer to consciousness)
              leaves you feeling refreshed. Waking during deep sleep causes grogginess and sleep
              inertia, even if you've had more total sleep time.
            </p>
          </div>

          <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Sleep Recommendations</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#7c6aff]/20 text-[#7c6aff] font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">7-9 Hours (4-6 Cycles)</h3>
                  <p className="text-gray-300 text-sm">
                    Recommended for most adults. This provides adequate deep sleep for physical
                    restoration and REM sleep for cognitive function.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#7c6aff]/20 text-[#7c6aff] font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Teen Requirements</h3>
                  <p className="text-gray-300 text-sm">
                    Teenagers need 8-10 hours (approximately 5-6 cycles) due to biological changes
                    in their sleep-wake cycle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#7c6aff]/20 text-[#7c6aff] font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Older Adults</h3>
                  <p className="text-gray-300 text-sm">
                    Adults 65+ need 7-8 hours, though sleep architecture changes with age and
                    sleep quality may differ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#7c6aff]/20 text-[#7c6aff] font-semibold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Individual Variation</h3>
                  <p className="text-gray-300 text-sm">
                    While these are averages, some people need 6 hours while others need 10.
                    Genetics, age, and lifestyle all influence sleep needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-green-200 mb-4">Tips for Better Sleep</h2>
            <ul className="text-green-200 space-y-2">
              <li>• Maintain a consistent sleep schedule (even on weekends)</li>
              <li>• Keep your bedroom cool (around 65°F / 18°C)</li>
              <li>• Avoid screens 30-60 minutes before bed</li>
              <li>• Limit caffeine after 2 PM</li>
              <li>• Exercise regularly (but not close to bedtime)</li>
              <li>• Avoid alcohol 3+ hours before sleep</li>
              <li>• Create a dark, quiet sleeping environment</li>
              <li>• Try relaxation techniques like meditation or deep breathing</li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Health Impact of Sleep</h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              Quality sleep is fundamental to your health. Chronic sleep deprivation is linked to:
            </p>
            <ul className="text-blue-200 space-y-2 mb-4">
              <li>• Weakened immune system</li>
              <li>• Increased risk of heart disease and stroke</li>
              <li>• Impaired cognitive function and memory</li>
              <li>• Weight gain and metabolic issues</li>
              <li>• Mood disorders and anxiety</li>
              <li>• Reduced productivity and performance</li>
            </ul>
            <p className="text-blue-200 leading-relaxed">
              This Sleep Cycle Calculator is a tool to help you optimize your sleep schedule and
              understand your natural sleep patterns. If you consistently struggle with sleep,
              consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
