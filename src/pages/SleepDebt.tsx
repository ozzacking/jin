import React, { useState } from 'react';
import { TrendingDown, AlertCircle } from 'lucide-react';
import { calculateSleepDebt } from '../utils/sleepCalculations';

export default function SleepDebt() {
  const [actualSleep, setActualSleep] = useState(6);
  const [neededSleep, setNeededSleep] = useState(8);
  const [days, setDays] = useState(7);
  const [debt, setDebt] = useState(calculateSleepDebt(6, 8, 7));

  const handleCalculate = () => {
    setDebt(calculateSleepDebt(actualSleep, neededSleep, days));
  };

  React.useEffect(() => {
    handleCalculate();
  }, [actualSleep, neededSleep, days]);

  const getDebtStatus = () => {
    if (debt.totalDebt === 0) {
      return { status: 'Excellent', color: 'green', message: 'You\'re getting enough sleep!' };
    } else if (debt.totalDebt < 5) {
      return { status: 'Good', color: 'blue', message: 'Your sleep debt is manageable.' };
    } else if (debt.totalDebt < 15) {
      return {
        status: 'Concerning',
        color: 'yellow',
        message: 'Consider improving your sleep habits.',
      };
    } else {
      return {
        status: 'Critical',
        color: 'red',
        message: 'Significant sleep debt - prioritize rest.',
      };
    }
  };

  const status = getDebtStatus();

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2">Sleep Debt Calculator</h1>
        <p className="text-xl text-gray-300 mb-12">
          Track how much sleep you're falling short
        </p>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8 mb-8">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-semibold mb-3">
                  Actual Sleep (hours)
                </label>
                <input
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"
                  value={actualSleep}
                  onChange={(e) => setActualSleep(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  Needed Sleep (hours)
                </label>
                <input
                  type="number"
                  min="0"
                  max="24"
                  step="0.5"
                  value={neededSleep}
                  onChange={(e) => setNeededSleep(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">
                  Number of Days
                </label>
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
                <p className="text-gray-400 text-sm mb-1">Sleep Deficit Per Night</p>
                <p className="text-3xl font-bold text-[#7c6aff]">
                  {Math.abs(debt.debtPerNight).toFixed(1)} hrs
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {debt.debtPerNight > 0 ? 'Short per night' : 'Surplus per night'}
                </p>
              </div>

              <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/20">
                <p className="text-gray-400 text-sm mb-1">Total Sleep Debt</p>
                <p className="text-3xl font-bold text-[#7c6aff]">
                  {Math.abs(debt.totalDebt).toFixed(1)} hrs
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {debt.totalDebt > 0 ? 'Owed' : 'Surplus'}
                </p>
              </div>
            </div>

            <div
              className={`${
                status.color === 'green'
                  ? 'bg-green-900/20 border-green-500/30'
                  : status.color === 'blue'
                    ? 'bg-blue-900/20 border-blue-500/30'
                    : status.color === 'yellow'
                      ? 'bg-yellow-900/20 border-yellow-500/30'
                      : 'bg-red-900/20 border-red-500/30'
              } border rounded-lg p-6`}
            >
              <div className="flex items-start gap-3">
                <AlertCircle
                  className={`w-6 h-6 flex-shrink-0 mt-1 ${
                    status.color === 'green'
                      ? 'text-green-400'
                      : status.color === 'blue'
                        ? 'text-blue-400'
                        : status.color === 'yellow'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                  }`}
                />
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      status.color === 'green'
                        ? 'text-green-200'
                        : status.color === 'blue'
                          ? 'text-blue-200'
                          : status.color === 'yellow'
                            ? 'text-yellow-200'
                            : 'text-red-200'
                    }`}
                  >
                    Status: {status.status}
                  </h3>
                  <p
                    className={
                      status.color === 'green'
                        ? 'text-green-200'
                        : status.color === 'blue'
                          ? 'text-blue-200'
                          : status.color === 'yellow'
                            ? 'text-yellow-200'
                            : 'text-red-200'
                    }
                  >
                    {status.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h3 className="text-purple-200 font-semibold mb-2">How to pay off sleep debt:</h3>
              <ul className="text-purple-200 text-sm space-y-2">
                <li>
                  • <strong>Weekend recovery:</strong> Get 1-2 extra hours on weekends
                </li>
                <li>• <strong>Early bedtimes:</strong> Move bedtime 15 minutes earlier</li>
                <li>
                  • <strong>Naps:</strong> Strategic 20-90 minute naps can help recover
                </li>
                <li>
                  • <strong>Consistency:</strong> Regular sleep schedule prevents debt buildup
                </li>
                <li>
                  • <strong>Timeline:</strong> It takes 1-2 weeks of good sleep to recover
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <h3 className="text-blue-200 font-semibold mb-2">Sleep debt facts:</h3>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>• Most adults need 7-9 hours per night</li>
                <li>• Sleep debt accumulates over days and weeks</li>
                <li>
                  • You can't store sleep (getting extra isn't "banking" sleep)
                </li>
                <li>• Chronic sleep debt increases health risks</li>
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
