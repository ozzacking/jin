import React from 'react';

export default function SleepCyclesGuide() {
    return (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-white mb-4">How Many Sleep Cycles Do You Need Per Night?</h1>
                <p className="text-gray-400 text-sm mb-12">April 2024 · 5 min read</p>
                <div className="space-y-8 text-gray-300 leading-relaxed">
                        <p>Most sleep experts recommend 5 to 6 complete sleep cycles per night — which translates to 7.5 to 9 hours of sleep for the average adult.</p>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">What Is a Sleep Cycle?</h2>
                                  <p>A single sleep cycle lasts approximately 90 minutes and consists of four stages:</p>
                                  <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                                              <li><strong className="text-white">Stage 1 (NREM 1):</strong> Light sleep, 1–5 minutes.</li>
                                              <li><strong className="text-white">Stage 2 (NREM 2):</strong> Body temperature drops, heart rate slows.</li>
                                              <li><strong className="text-white">Stage 3 (NREM 3):</strong> Deep sleep. Most restorative stage.</li>
                                              <li><strong className="text-white">Stage 4 (REM):</strong> Dreams occur. Memory consolidation.</li>
                                  </ul>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Cycles vs. Sleep Duration</h2>
                                  <table className="w-full text-sm">
                                              <thead>
                                                            <tr className="border-b border-[#7c6aff]/20">
                                                                            <th className="text-left py-3 text-[#7c6aff]">Cycles</th>
                                                                            <th className="text-left py-3 text-[#7c6aff]">Duration</th>
                                                                            <th className="text-left py-3 text-[#7c6aff]">Best For</th>
                                                            </tr>
                                              </thead>
                                              <tbody>
                                                            <tr className="border-b border-[#7c6aff]/10">
                                                                            <td className="py-3 text-white">4 cycles</td>
                                                                            <td className="py-3">6 hours</td>
                                                                            <td className="py-3">Minimum (short-term)</td>
                                                            </tr>
                                                            <tr className="border-b border-[#7c6aff]/10">
                                                                            <td className="py-3 text-white">5 cycles</td>
                                                                            <td className="py-3">7.5 hours</td>
                                                                            <td className="py-3">Most adults ✓</td>
                                                            </tr>
                                                            <tr>
                                                                            <td className="py-3 text-white">6 cycles</td>
                                                                            <td className="py-3">9 hours</td>
                                                                            <td className="py-3">Athletes, teens, recovery</td>
                                                            </tr>
                                              </tbody>
                                  </table>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Why Waking Mid-Cycle Feels Awful</h2>
                                  <p>If you wake up during deep sleep (Stage 3), you experience <strong className="text-white">sleep inertia</strong> — that heavy, groggy feeling that can last 30–60 minutes. This is why 7 hours can feel worse than 7.5 hours: you woke up mid-cycle.</p>
                        </div>
                        <div className="bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-2xl p-8">
                                  <h2 className="text-2xl font-bold text-white mb-4">Tips to Maximize Sleep Quality</h2>
                                  <ul className="space-y-3">
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">1.</span><span><strong className="text-white">Keep a consistent schedule.</strong> Same bedtime every night maximizes full cycles.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">2.</span><span><strong className="text-white">Avoid alcohol before bed.</strong> It suppresses REM sleep.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">3.</span><span><strong className="text-white">Use a sleep calculator.</strong> Plan wake time at end of a 90-min cycle.</span></li>
                                              <li className="flex items-start gap-3"><span className="text-[#7c6aff] font-bold">4.</span><span><strong className="text-white">Keep room cool.</strong> Ideal temp: 65–68°F (18–20°C).</span></li>
                                  </ul>
                        </div>
                </div>
          </div>
        );
}
