import React from 'react';

const ChildrenSleepRequirementsByAge = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Understanding Children Sleep Requirements by Age: A Comprehensive Guide</h1>
      <p className="text-gray-300 mb-4">5 min read</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Children Sleep Requirements by Age</h2>
      <p className="text-gray-300 mb-4">Sleep is a crucial aspect of a child's development, affecting their physical health, emotional well-being, and cognitive performance. Here’s a breakdown of sleep requirements by age:</p>
      <table className="table-auto w-full mb-8 bg-[#1a2f45]/50 border border-[#7c6aff]/20">
        <thead>
          <tr className="text-gray-300">
            <th className="border px-4 py-2">Age Group</th>
            <th className="border px-4 py-2">Recommended Sleep (Hours)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Newborn (0-3 months)</td>
            <td className="border px-4 py-2">14-17 hours</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Infant (4-11 months)</td>
            <td className="border px-4 py-2">12-15 hours</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Toddler (1-2 years)</td>
            <td className="border px-4 py-2">11-14 hours</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Preschool (3-5 years)</td>
            <td className="border px-4 py-2">10-13 hours</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">School-age (6-13 years)</td>
            <td className="border px-4 py-2">9-11 hours</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Teenager (14-17 years)</td>
            <td className="border px-4 py-2">8-10 hours</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Signs of Sleep Deprivation in Kids</h2>
      <p className="text-gray-300 mb-4">Recognizing sleep deprivation in children is critical for parents. Symptoms can include:</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>Excessive irritability or mood swings</li>
        <li>Difficulty waking up in the morning</li>
        <li>Increased clumsiness or difficulty concentrating</li>
        <li>Frequent yawning or lethargy throughout the day</li>
      </ul>
      <p className="text-gray-300 mb-4">A 2022 study published in the Journal of Pediatric Sleep Medicine found that children lacking adequate sleep were at higher risk for emotional and behavioral issues. If these signs persist, consider talking to a pediatrician.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Establishing a Healthy Bedtime Routine</h2>
      <p className="text-gray-300 mb-4">Creating a consistent bedtime routine can significantly improve sleep quality. Here are some strategies to consider:</p>
      <ol className="list-decimal list-inside text-gray-300 mb-4">
        <li><strong>Set a consistent bedtime:</strong> Children thrive on routine. Aim to put them to bed at the same time each night.</li>
        <li><strong>Limit screen time:</strong> Reduce exposure to screens at least one hour before bed, as blue light can interfere with the body's natural sleep cycle.</li>
        <li><strong>Create a relaxing pre-sleep environment:</strong> Activities such as reading, taking a warm bath, or listening to calm music can create a calming atmosphere.</li>
        <li><strong>Incorporate sleep-friendly products:</strong> Consider using sleep trackers to monitor sleep patterns and identify issues.</li>
      </ol>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Sleep Regression Phases</h2>
      <p className="text-gray-300 mb-4">Sleep regression is a common occurrence in young children that can lead to disrupted sleep patterns. These phases often coincide with developmental milestones, such as:</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li><strong>5-6 months:</strong> Many babies experience increased wakefulness as they hit new developmental stages.</li>
        <li><strong>8-10 months:</strong> As babies learn to crawl or stand, sleep may become interrupted.</li>
        <li><strong>12 months:</strong> Separation anxiety can lead to nighttime awakenings.</li>
      </ul>
      <p className="text-gray-300 mb-4">Understanding these regressions can help parents navigate sleep challenges effectively. It’s essential to remain consistent with bedtime routines during these times.</p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">When to Consult a Pediatrician</h2>
      <p className="text-gray-300 mb-4">If your child's sleep issues persist despite implementing necessary changes, it may be time to consult a pediatrician. Instances when you should seek professional advice include:</p>
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>If sleep disruptions last more than a few weeks</li>
        <li>Significant daytime drowsiness affecting behavior and learning</li>
        <li>Signs of sleep apnea, such as snoring or gasping for breath during sleep</li>
      </ul>
      <p className="text-gray-300 mb-4">Getting early professional intervention can significantly improve sleep outcomes for your child.</p>

      <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 mt-8">
        <h2 className="text-lg font-bold text-white mb-4">Key Takeaways</h2>
        <p className="text-gray-300 mb-2">Understanding children sleep requirements by age is vital for promoting well-being.</p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Sleep needs change significantly as children grow.</li>
          <li>Recognizing sleep deprivation is essential for intervention.</li>
          <li>Consistency in bedtime routines greatly influences sleep quality.</li>
          <li>Monitoring sleep regressions can help ease transitions during developmental milestones.</li>
          <li>Don’t hesitate to consult a pediatrician for persistent sleep issues.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChildrenSleepRequirementsByAge;
