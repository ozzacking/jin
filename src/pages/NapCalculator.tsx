import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { calculateOptimalNapLength } from '../utils/sleepCalculations';

export default function NapCalculator() {
  const [currentTime, setCurrentTime] = useState('14:00');
  const [wakeTime, setWakeTime] = useState('18:00');
  const [napInfo, setNapInfo] = useState(
    calculateOptimalNapLength('14:00', '18:00')
  );

  const handleTimeChange = () => {
    setNapInfo(calculateOptimalNapLength(currentTime, wakeTime));
  };

  React.useEffect(() => {
    handleTimeChange();
  }, [currentTime, wakeTime]);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2">Nap Time Calculator</h1>
        <p className="text-xl text-gray-300 mb-12">
          Find the optimal nap length before your next commitment
        </p>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Current Time
                </label>
                <input
                  type="time"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  When do you need to wake up?
                </label>
                <input
                  type="time"
                  value={wakeTime}
                  onChange={(e) => setWakeTime(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                />
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <p className="text-green-200 text-sm leading-relaxed">
                <strong>Nap guidelines:</strong> Short naps (20-30 minutes) provide an energy boost
                without sleep inertia. Full-cycle naps (90 minutes) offer deeper rest but take
                longer to recover from grogginess.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Recommended Nap Options</h2>

              <div className="bg-gradient-to-r from-[#7c6aff]/10 to-[#7c6aff]/5 border border-[#7c6aff]/20 rounded-lg p-6 hover:border-[#7c6aff]/40 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white font-semibold mb-2">
                      Quick Energy Boost
                    </p>
                    <p className="text-gray-400 mb-3">
                      20-30 minute power nap for quick refreshment
                    </p>
                    <p className="text-[#7c6aff] font-semibold">
                      Wake up at: <span className="text-white">{napInfo.longWakeUp}</span>
                    </p>
                  </div>
                  <Clock className="w-6 h-6 text-[#7c6aff]/60 mt-1" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#7c6aff]/10 to-[#7c6aff]/5 border border-[#7c6aff]/20 rounded-lg p-6 hover:border-[#7c6aff]/40 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white font-semibold mb-2">
                      One Full Sleep Cycle
                    </p>
                    <p className="text-gray-400 mb-3">
                      {napInfo.shortNap} minutes - Complete one sleep cycle
                    </p>
                    <p className="text-[#7c6aff] font-semibold">
                      Wake up at: <span className="text-white">{napInfo.shortWakeUp}</span>
                    </p>
                  </div>
                  <Clock className="w-6 h-6 text-[#7c6aff]/60 mt-1" />
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="text-blue-200 font-semibold mb-2">How to nap effectively:</h3>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>• Find a dark, quiet place to sleep</li>
                <li>• Set an alarm to wake at the recommended time</li>
                <li>• Avoid caffeine at least 6 hours before napping</li>
                <li>• Keep naps before 3 PM to avoid disrupting nighttime sleep</li>
                <li>• Allow 10-15 minutes to fall asleep</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">The Right Way to Think About Napping</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              There's a weird stigma around napping, like it's something only toddlers and cats are
              allowed to do. But a well-timed nap isn't a sign you're falling behind — it's often
              the fastest way to catch back up. The trick is that naps aren't all interchangeable.
              A 20-minute nap and a 90-minute nap send you down completely different paths, and
              picking the wrong one for your situation is how you end up more tired than when you
              started.
            </p>
            <h3 className="text-xl font-semibold text-white pt-2">Why length changes everything</h3>
            <p>
              Short naps — anywhere from 10 to about 25 minutes — keep you in the lighter stages of
              sleep. You get a genuine alertness bump without ever sinking into deep sleep, which
              means there's nothing to wake you out of. That's why you can nap for 20 minutes on
              your lunch break and walk back into a meeting fully functional, whereas a 45-minute
              nap in the same slot can leave you groggier than if you'd just powered through tired.
              That grogginess has a name — sleep inertia — and it happens when your alarm interrupts
              deep sleep before your body's finished with it.
            </p>
            <p>
              A full 90-minute nap sidesteps that problem entirely by giving you time to complete an
              entire sleep cycle, deep sleep and REM included, and land back near the surface before
              waking. It's genuinely restorative — closer to a short night's sleep than a nap — but
              it obviously asks a lot more of your schedule, and it's really only practical if you
              have a solid two-hour block free with nothing urgent on the other side of it.
            </p>
            <h3 className="text-xl font-semibold text-white pt-2">The afternoon cutoff isn't arbitrary</h3>
            <p>
              Napping too late in the day is probably the single most common way people sabotage
              their own nighttime sleep without realizing it. Your body builds up "sleep pressure"
              — basically drowsiness — throughout the day, and it's what makes you tired enough to
              fall asleep easily at night. A late-afternoon or evening nap drains some of that
              pressure right before bed, so you end up lying awake later than usual wondering why
              you can't sleep, without connecting it back to the nap six hours earlier. Keeping naps
              before 3 PM (earlier if you're sensitive to it) sidesteps that whole issue.
            </p>
            <p>
              If you're someone who "can't nap" no matter what, it's often less about ability and
              more about environment and expectations — lying down in full daylight with your phone
              buzzing next to you isn't really giving your body a fair shot. Even 10-15 minutes of
              genuine rest with your eyes closed in a dim, quiet spot does more than most people
              expect, even on the days actual sleep doesn't come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
