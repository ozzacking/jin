import React from 'react';

export default function WakeUpTime() {
    return (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-white mb-4">What Time Should You Wake Up Based on Sleep Cycles?</h1>
                <p className="text-gray-400 text-sm mb-12">April 2024 · 4 min read</p>
                <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p>Waking up at the wrong point in your sleep cycle can leave you feeling groggy for hours — even after a full night of sleep. The secret to waking up refreshed is timing your alarm to the end of a 90-minute sleep cycle.</p>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">The 90-Minute Rule</h2>
                                  <p>Each sleep cycle lasts about 90 minutes. If you fall asleep at 11:00 PM, your natural wake-up windows are:</p>
                                  <ul className="mt-4 space-y-2">
                                              <li className="flex justify-between border-b border-[#7c6aff]/10 py-2"><span className="text-[#7c6aff]">4 cycles</span><span>6:00 AM (6 hours)</span></li>
                                              <li className="flex justify-between border-b border-[#7c6aff]/10 py-2"><span className="text-[#7c6aff]">5 cycles</span><span>7:30 AM (7.5 hours) ✓ Recommended</span></li>
                                              <li className="flex justify-between py-2"><span className="text-[#7c6aff]">6 cycles</span><span>9:00 AM (9 hours)</span></li>
                                  </ul>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Add 14 Minutes to Fall Asleep</h2>
                                  <p>The average person takes about 14 minutes to fall asleep. So if you want to wake up at 7:00 AM after 5 cycles (7.5 hours), you should be in bed by <strong className="text-white">11:16 PM</strong>.</p>
                                  <p className="mt-4">Our <strong className="text-[#7c6aff]">Sleep Cycle Calculator</strong> does this math automatically — just enter your bedtime or desired wake time.</p>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Best Wake Times by Age</h2>
                                  <table className="w-full text-sm">
                                              <thead>
                                                            <tr className="border-b border-[#7c6aff]/20">
                                                                            <th className="text-left py-3 text-[#7c6aff]">Age Group</th>
                                                                            <th className="text-left py-3 text-[#7c6aff]">Recommended Sleep</th>
                                                                            <th className="text-left py-3 text-[#7c6aff]">Ideal Cycles</th>
                                                            </tr>
                                              </thead>
                                              <tbody>
                                                            <tr className="border-b border-[#7c6aff]/10"><td className="py-3 text-white">Teens (14-17)</td><td className="py-3">8–10 hours</td><td className="py-3">5–6 cycles</td></tr>
                                                            <tr className="border-b border-[#7c6aff]/10"><td className="py-3 text-white">Adults (18-64)</td><td className="py-3">7–9 hours</td><td className="py-3">5 cycles</td></tr>
                                                            <tr><td className="py-3 text-white">Seniors (65+)</td><td className="py-3">7–8 hours</td><td className="py-3">4–5 cycles</td></tr>
                                              </tbody>
                                  </table>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Tips for Waking Up Refreshed</h2>
                                  <ul className="space-y-3">
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">1.</span><span><strong className="text-white">Use a gradual alarm.</strong> Sunrise alarm clocks simulate dawn to wake you gently.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">2.</span><span><strong className="text-white">Don't hit snooze.</strong> Snoozing starts a new sleep cycle you won't finish.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">3.</span><span><strong className="text-white">Get light immediately.</strong> Bright light signals your brain to stop melatonin production.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">4.</span><span><strong className="text-white">Move your body.</strong> Even 5 minutes of stretching accelerates wakefulness.</span></li>
                                  </ul>
                        </div>
                </div>
          </div>
        );
}
