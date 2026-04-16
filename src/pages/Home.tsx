import React, { useState } from 'react';
import { Clock, ChevronDown } from 'lucide-react';
import { calculateSleepOptions } from '../utils/sleepCalculations';

export default function Home() {
  const [inputTime, setInputTime] = useState('23:00');
  const [isWakeTime, setIsWakeTime] = useState(false);
  const [sleepOptions, setSleepOptions] = useState(calculateSleepOptions('23:00', false));
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setInputTime(newTime);
    setSleepOptions(calculateSleepOptions(newTime, isWakeTime));
  };

  const toggleMode = () => {
    setIsWakeTime(!isWakeTime);
    setSleepOptions(calculateSleepOptions(inputTime, !isWakeTime));
  };

  const faqs = [
    {
      question: 'What is a sleep cycle?',
      answer:
        'A sleep cycle is a complete progression through different stages of sleep, lasting approximately 90 minutes. Each cycle includes light sleep (stages 1-2), deep sleep (stage 3), and REM sleep. Most people go through 4-6 cycles per night.',
    },
    {
      question: 'Why do 90-minute cycles matter?',
      answer:
        'Waking up at the end of a sleep cycle (rather than in the middle) helps you feel more refreshed and alert. Interrupting deep sleep stages can leave you feeling groggy, even if you slept longer.',
    },
    {
      question: 'How many sleep cycles do I need?',
      answer:
        'Most adults need 4-6 complete sleep cycles per night, which equals 6-9 hours of sleep. Individual needs vary, but most people feel best with 5-6 cycles (7.5-9 hours).',
    },
    {
      question: 'Does this work for everyone?',
      answer:
        'Sleep cycle duration varies between 80-100 minutes for different people. This calculator uses the average of 90 minutes, but you may need to adjust based on how you feel. Track your sleep patterns to find your optimal cycle length.',
    },
    {
      question: 'Can I use this for naps?',
      answer:
        'Yes! Short naps of 20-30 minutes won\'t interrupt sleep cycles. For longer naps, try 90 minutes (one full cycle) or 180 minutes (two cycles) to avoid waking during deep sleep.',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-white mb-2 text-center">
          Sleep Cycle Calculator
        </h1>
        <p className="text-xl text-gray-300 text-center mb-12">
          Find Your Perfect Bedtime
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">
                    {isWakeTime ? 'When do you want to wake up?' : 'When do you want to sleep?'}
                  </label>
                  <input
                    type="time"
                    value={inputTime}
                    onChange={handleTimeChange}
                    className="w-full px-4 py-3 bg-[#0d1b2a] border border-[#7c6aff]/30 rounded-lg text-white focus:outline-none focus:border-[#7c6aff] focus:ring-2 focus:ring-[#7c6aff]/20"
                  />
                </div>

                <button
                  onClick={toggleMode}
                  className="w-full bg-[#7c6aff]/20 hover:bg-[#7c6aff]/30 border border-[#7c6aff]/50 text-[#7c6aff] font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  {isWakeTime
                    ? 'Switch to Bedtime Mode'
                    : 'Switch to Wake Time Mode'}
                </button>

                <div className="bg-[#0d1b2a]/50 rounded-lg p-4 border border-[#7c6aff]/10">
                  <p className="text-gray-400 text-sm">
                    {isWakeTime
                      ? 'Based on your wake time, here are optimal bedtimes that align with 90-minute sleep cycles.'
                      : 'Based on your bedtime, here are optimal wake times that align with 90-minute sleep cycles.'}
                  </p>
                </div>

                <div className="space-y-3">
                  {sleepOptions.map((option, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-[#7c6aff]/10 to-[#7c6aff]/5 border border-[#7c6aff]/20 rounded-lg p-4 hover:border-[#7c6aff]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-white font-semibold mb-1">
                            {option.cycles} cycles ({option.duration} minutes)
                          </p>
                          <p className="text-gray-400 text-sm">
                            Bedtime: <span className="text-[#7c6aff]">{option.bedtime}</span>
                            {' | '}
                            Wake time: <span className="text-[#7c6aff]">{option.wakeTime}</span>
                          </p>
                        </div>
                        <Clock className="w-5 h-5 text-[#7c6aff]/60" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-200 text-sm leading-relaxed">
                    <strong>How it works:</strong> Sleep cycles last approximately 90 minutes each. By
                    waking at the end of a cycle (rather than during deep sleep), you'll feel more
                    refreshed and alert, even with less sleep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 sticky top-20">
              <h3 className="text-white font-semibold mb-4">Ad Zone</h3>
              <div className="bg-[#0d1b2a]/50 rounded-lg h-64 border border-amber-500/20 flex items-center justify-center">
                <p className="text-gray-400 text-sm text-center px-4">
                  Google AdSense
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-semibold text-center">Ad Zone</h3>
            <div className="bg-[#0d1b2a]/50 rounded-lg h-24 border border-amber-500/20 flex items-center justify-center mt-4">
              <p className="text-gray-400 text-sm">Google AdSense</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2f45]/50 backdrop-blur border border-[#7c6aff]/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0d1b2a]/50 border border-[#7c6aff]/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0d1b2a]/80 transition-colors"
                >
                  <h3 className="text-white font-semibold text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7c6aff] transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 border-t border-[#7c6aff]/10 bg-[#0d1b2a]/30">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
