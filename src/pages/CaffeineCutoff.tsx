import React, { useState } from 'react';
import { Clock, AlertCircle } from 'lucide-react';
import { calculateCaffeineCutoff, subtractMinutes } from '../utils/sleepCalculations';

export default function CaffeineCutoff() {
  const [bedtime, setBedtime] = useState('23:00');
  const [cutoffTime, setCutoffTime] = useState(calculateCaffeineCutoff('23:00'));
  const [caffeineLevels, setCaffeineLevels] = useState(calculateCaffeineLevels('23:00'));

  const handleBedtimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBedtime = e.target.value;
    setBedtime(newBedtime);
    setCutoffTime(calculateCaffeineCutoff(newBedtime));
    setCaffeineLevels(calculateCaffeineLevels(newBedtime));
  };

  function calculateCaffeineLevels(bedtime: string) {
    const times: Array<{ time: string; percentage: number }> = [];
    const currentTime = new Date();
    const [bedHours, bedMins] = bedtime.split(':').map(Number);
    const bedDate = new Date();
    bedDate.setHours(bedHours, bedMins, 0);

    for (let i = 0; i <= 12; i++) {
      const checkTime = new Date(bedDate.getTime() - (i * 60) * 60000);
      const minutesUntilBed = (bedDate.getTime() - checkTime.getTime()) / 60000;
      const percentage = Math.pow(0.5, minutesUntilBed / 300) * 100;

      const hours = String(checkTime.getHours()).padStart(2, '0');
      const mins = String(checkTime.getMinutes()).padStart(2, '0');

      times.push({
        time: `${hours}:${mins}`,
        percentage: Math.max(0, Math.round(percentage)),
      });
    }

    return times.reverse();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2">Caffeine Cutoff Calculator</h1>
        <p className="text-xl text-gray-300 mb-12">
          Know when to stop drinking coffee for better sleep
        </p>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-white font-semibold mb-3">
                What time do you want to sleep?
              </label>
              <input
                type="time"
                value={bedtime}
                onChange={handleBedtimeChange}
                className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
              />
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-red-200 font-semibold mb-2">Your Caffeine Cutoff Time</h3>
                  <p className="text-red-100 text-2xl font-bold mb-2">{cutoffTime}</p>
                  <p className="text-red-200 text-sm">
                    Avoid caffeine after this time for optimal sleep quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="text-blue-200 font-semibold mb-2">How caffeine affects sleep:</h3>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>• Caffeine has a half-life of ~5 hours</li>
                <li>• After 5 hours, 50% of caffeine remains in your system</li>
                <li>• After 10 hours, 25% still affects your sleep</li>
                <li>• Individual sensitivity varies; some need earlier cutoff times</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Caffeine Levels by Time</h2>
              <div className="space-y-3">
                {caffeineLevels.map((level, index) => (
                  <div key={index} className="bg-[#0d1b2a]/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{level.time}</span>
                      <span className="text-[#7c6aff]">{level.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#0d1b2a] rounded-full h-2 overflow-hidden border border-[#7c6aff]/20">
                      <div
                        className="bg-gradient-to-r from-[#7c6aff] to-[#9d8aff] h-full transition-all"
                        style={{ width: `${level.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h3 className="text-green-200 font-semibold mb-2">Tips for caffeine management:</h3>
              <ul className="text-green-200 text-sm space-y-2">
                <li>• Drink caffeine earlier in the day (before noon)</li>
                <li>• Limit intake to before your calculated cutoff time</li>
                <li>• Remember: Tea, energy drinks, and chocolate also contain caffeine</li>
                <li>• Consider gradually reducing caffeine for better adaptation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why Caffeine Sticks Around Longer Than You Think</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I used to think caffeine was basically gone from my system a couple hours after my
              last cup. It's not even close. Caffeine has a half-life of roughly five hours in most
              adults, which means five hours after your last sip, about half of it is still active
              in your bloodstream. Ten hours out, a quarter of it is still there, quietly keeping
              your nervous system a little more alert than it would otherwise be — right when
              you're trying to wind down for bed.
            </p>
            <p>
              That's the part people underestimate. A 3 PM coffee doesn't feel like it's doing
              anything by 10 PM — no jitters, no buzz — but "not feeling it" and "not affecting
              your sleep" are two different things. Caffeine can delay the onset of sleep, cut into
              your deep sleep, and fragment the night with more brief wake-ups than you'd notice
              without a sleep tracker, even when you don't consciously feel wired.
            </p>
            <h3 className="text-xl font-semibold text-white pt-2">Why the cutoff time isn't the same for everyone</h3>
            <p>
              Genetics play a real role here — specifically a gene involved in how fast your liver
              metabolizes caffeine. Some people clear it noticeably faster than others, which is
              part of why your friend can have an espresso after dinner and sleep fine while the
              same cup would wreck your night. Age matters too; caffeine sensitivity tends to
              increase as you get older, and hormonal factors (pregnancy, for instance, roughly
              doubles caffeine's half-life) can shift things considerably. If you already know
              you're sensitive, treat the calculator's cutoff time as a floor, not a target — push
              it even earlier.
            </p>
            <h3 className="text-xl font-semibold text-white pt-2">The sources people forget about</h3>
            <p>
              Coffee gets all the attention, but it's rarely the only caffeine source in a person's
              day. Black and green tea, most sodas, energy drinks (often far more concentrated than
              people expect), chocolate, and even some pain relievers and pre-workout supplements
              carry meaningful amounts. If you're strict about your coffee cutoff but still have a
              square of dark chocolate or a scoop of pre-workout in the evening, you may still be
              undermining the exact thing you're trying to protect.
            </p>
            <p>
              None of this means cutting caffeine out entirely — for most people that's neither
              necessary nor realistic. It just means being honest about the timeline: caffeine is a
              slow fade, not an on/off switch, and building your afternoon and evening around that
              reality tends to pay off in noticeably better sleep within a week or two.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
