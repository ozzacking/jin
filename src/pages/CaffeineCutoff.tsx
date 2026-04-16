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

        <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4 text-center">Ad Zone</h3>
          <div className="bg-[#0d1b2a]/50 rounded-lg h-64 border border-amber-500/20 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Google AdSense</p>
          </div>
        </div>
      </div>
    </div>
  );
}
