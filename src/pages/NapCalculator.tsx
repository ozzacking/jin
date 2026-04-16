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
