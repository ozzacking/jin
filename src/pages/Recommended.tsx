import React from 'react';

// ============================================================
// AFFILIATE TAG: Replace 'findsleeptime-20' with your actual
// Amazon Associates tag after approval at affiliate-program.amazon.com
// ============================================================
const AFFILIATE_TAG = 'findsleeptime-20';

function amazonLink(keyword: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}&tag=${AFFILIATE_TAG}`;
}

const categories = [
  {
    title: '😴 Sleep Trackers & Wearables',
    description: 'Monitor your sleep stages, heart rate, and HRV to understand your sleep quality and find patterns.',
    products: [
      { name: 'Oura Ring (Gen 3)', desc: 'Most accurate sleep staging. Tracks HRV, SpO2, body temp. Ring form factor — no wrist discomfort.', tag: 'Best Overall', search: 'Oura Ring Gen 3 sleep tracker' },
      { name: 'Fitbit Sense 2', desc: 'Affordable smartwatch with detailed sleep stages, skin temperature sensor, and stress tracking.', tag: 'Best Value', search: 'Fitbit Sense 2 sleep tracker' },
      { name: 'Garmin Fenix 7', desc: 'Advanced sleep tracking for athletes. Accurate REM/deep sleep detection and body battery score.', tag: 'Best for Athletes', search: 'Garmin Fenix 7 sleep tracking' },
      { name: 'Withings Sleep Analyzer', desc: 'Under-mattress pad — no wearable needed. Tracks sleep cycles and detects sleep apnea patterns.', tag: 'No-Wearable Option', search: 'Withings Sleep Analyzer mat' },
    ],
  },
  {
    title: '🛏️ Mattresses for Better Sleep',
    description: 'Your mattress is the single biggest factor in sleep quality. These are the top-rated options across price ranges.',
    products: [
      { name: 'Saatva Classic', desc: 'Luxury hybrid innerspring. Best for back pain relief. Choose Plush Soft, Luxury Firm, or Firm.', tag: 'Luxury Pick', search: 'Saatva Classic mattress' },
      { name: 'Nectar Memory Foam', desc: 'Medium-firm memory foam with excellent pressure relief. Great 365-night trial and lifetime warranty.', tag: 'Best Memory Foam', search: 'Nectar Memory Foam mattress' },
      { name: 'Purple Mattress', desc: 'Unique GelFlex Grid adapts to your body. Stays cool and isolates motion. Excellent for hot sleepers.', tag: 'Best for Hot Sleepers', search: 'Purple mattress original' },
      { name: 'DreamCloud Premier', desc: 'Hybrid coil + foam for support and bounce. Excellent edge support. Good for couples.', tag: 'Best Hybrid', search: 'DreamCloud Premier hybrid mattress' },
    ],
  },
  {
    title: '💊 Sleep Supplements (Evidence-Based)',
    description: 'Supplements that have real research behind them — with recommended dosages and timing.',
    products: [
      { name: 'Magnesium Glycinate', desc: '200–400mg before bed. Relaxes muscles and nervous system. The most bioavailable form for sleep.', tag: '#1 Recommended', search: 'magnesium glycinate supplement sleep' },
      { name: 'L-Theanine', desc: '100–200mg before bed. Reduces anxiety and promotes calm without sedation. Pairs well with magnesium.', tag: 'Best for Anxiety', search: 'L-theanine supplement 200mg' },
      { name: 'Melatonin (Low Dose)', desc: '0.5–1mg taken 90 min before bed. Research shows low doses outperform high doses for sleep onset.', tag: 'Circadian Reset', search: 'melatonin 0.5mg low dose sleep' },
      { name: 'Ashwagandha (KSM-66)', desc: '300–600mg daily. Reduces cortisol, improves sleep quality, and reduces stress-related insomnia.', tag: 'Best Adaptogen', search: 'ashwagandha KSM-66 sleep stress' },
    ],
  },
  {
    title: '🔊 Sound & Light for Sleep',
    description: 'Control your sleep environment with the right sound masking and light management tools.',
    products: [
      { name: 'LectroFan White Noise Machine', desc: 'Ten fan sounds + ten white/pink/brown noise variations. No looping. Compact and travel-friendly.', tag: 'Best White Noise', search: 'LectroFan white noise machine' },
      { name: 'Manta Sleep Mask', desc: 'Fully adjustable eye cups for complete blackout without pressure on eyelids. Best for light sleepers.', tag: 'Best Sleep Mask', search: 'Manta Sleep Mask blackout' },
      { name: 'Philips Wake-Up Light', desc: 'Simulates sunrise 30 min before alarm. Proven to reduce morning grogginess and cortisol spike.', tag: 'Best Wake-Up Light', search: 'Philips HF3520 wake up light sunrise' },
      { name: 'Blackout Curtains (Deconovo)', desc: '100% blackout curtains at a fraction of luxury prices. Essential for shift workers and city dwellers.', tag: 'Best Budget Blackout', search: 'Deconovo blackout curtains bedroom' },
    ],
  },
  {
    title: '🧘 Relaxation & Wind-Down Tools',
    description: 'Gear that helps activate your parasympathetic nervous system before bed.',
    products: [
      { name: 'Theragun Mini', desc: 'Percussive massage before bed reduces muscle tension and lowers heart rate. Quieter than full-size models.', tag: 'Best Massager', search: 'Theragun Mini percussive massager' },
      { name: 'Weighted Blanket (Bearaby)', desc: '15–20 lb weighted blanket reduces anxiety and improves deep sleep through deep pressure stimulation.', tag: 'Best Weighted Blanket', search: 'Bearaby weighted blanket cotton' },
      { name: 'Dodow Sleep Aid Device', desc: 'Metronome light system that slows your breathing to 6 breaths/min, activating the vagal response.', tag: 'Best Breathing Aid', search: 'Dodow sleep aid breathing device' },
      { name: 'ŌURA Guided Meditation', desc: 'Calm or Headspace app subscription — CBT-I style sleep programs are the most evidence-backed option.', tag: 'Best App', search: 'Calm app sleep meditation subscription' },
    ],
  },
];

export default function Recommended() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-3 text-center">Sleep Product Recommendations</h1>
      <p className="text-gray-400 text-center mb-3">Evidence-based picks across every sleep category</p>
      <p className="text-gray-500 text-xs text-center mb-12">
        As an Amazon Associate, findsleeptime.com earns from qualifying purchases. Prices and availability may vary.
      </p>

      <div className="space-y-12">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <h2 className="text-2xl font-bold text-white mb-2">{cat.title}</h2>
            <p className="text-gray-400 text-sm mb-5">{cat.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {cat.products.map((p, pi) => (
                <a
                  key={pi}
                  href={amazonLink(p.search)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1a2f45]/50 border border-[#7c6aff]/20 rounded-xl p-5 hover:border-[#7c6aff]/50 hover:bg-[#1a2f45]/80 transition-all group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-semibold group-hover:text-[#7c6aff] transition-colors">{p.name}</h3>
                    <span className="text-xs bg-[#7c6aff]/20 text-[#7c6aff] px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{p.tag}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <p className="text-[#7c6aff] text-xs font-medium group-hover:underline">View on Amazon →</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[#1a2f45]/30 border border-[#7c6aff]/10 rounded-xl p-6 text-center">
        <p className="text-gray-500 text-xs leading-relaxed">
          <strong className="text-gray-400">Disclosure:</strong> findsleeptime.com participates in the Amazon Services LLC Associates Program.
          We may earn a small commission when you purchase through our links, at no extra cost to you.
          All product recommendations are based on research and editorial judgment, not commission rates.
        </p>
      </div>
    </div>
  );
}
