type Page = 'home' | 'nap' | 'caffeine' | 'debt' | 'about' | 'privacy' | 'blog' | 'blog-sleep-cycles' | 'blog-wake-up-time' | 'blog-fix-sleep-schedule' | 'sleep-environment-guide' | 'napping-benefits-guide' | 'sleep-quality-improvement-guide' | 'sleep-hygiene-tips' | 'sleep-and-mental-health-guide' | 'sleep-and-diet-guide' | 'sleep-and-dream-science' | 'sleep-and-chronotypes-guide' | 'sleep-and-performance' | 'sleep-deprivation-effects' | 'sleep-and-exercise-guide' | 'sleep-disorders-guide' | 'sleep-and-diet-connection' | 'sleep-and-weight-loss' | 'sleep-and-teenage-sleep' | 'understanding-chronotypes-and-their-impact-on-sleep' | 'sleep-and-jet-lag-recovery' | 'sleep-tracking-guide' | 'sleep-and-elderly-guide' | 'sleep-and-melatonin-science' | 'circadian-biology-guide' | 'sound-therapy-for-sleep' | 'bedroom-environment-for-better-sleep' | 'best-mattress-for-back-pain-and-sleep' | 'insomnia-treatment-without-medication' | 'sleep-problems-during-menopause' | 'shift-work-sleep-disorder-solutions' | 'children-sleep-requirements-by-age' | 'anxiety-and-sleep-problems-at-night' | 'melatonin-dosage-timing-effectiveness' | 'sleep-deprivation-health-risks' | 'sleep-and-weight-loss-connection' | 'menopause-and-sleep-problems-guide' | 'melatonin-dosage-timing-effectiveness' | 'best-sleep-tracker-2025' | 'how-to-fix-sleep-schedule-quickly' | 'best-mattress-for-back-pain-and-sleep' | 'sleep-supplements-reviewed' | 'insomnia-treatment-without-medication' | 'best-sleep-tracker-2025' | 'best-sleep-tracker-2025-comparison' | 'children-sleep-requirements-by-age' | 'shift-work-sleep-disorder-solutions-guide' | 'sleep-supplements-that-actually-work' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'sound-therapy-for-sleep' | 'sleep-apnea-symptoms-and-treatment-guide' | 'sleep-supplements-reviewed' | 'melatonin-dosage-timing-effectiveness' | 'mattress-guide-for-back-pain-and-sleep' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'children-sleep-requirements-by-age' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'sleep-supplements-reviewed' | 'how-to-fix-sleep-schedule-quickly' | 'menopause-sleep-problems-guide' | 'sleep-and-weight-loss-connection' | 'white-noise-machine-for-sleep' | 'bedroom-environment-better-sleep' | 'melatonin-dosage-timing-effectiveness-review' | 'melatonin-dosage-timing-effectiveness' | 'sleep-environment-guide' | 'napping-benefits-guide' | 'sleep-quality-improvement-guide' | 'sleep-hygiene-tips' | 'sleep-and-mental-health-guide' | 'sleep-and-diet-guide' | 'sleep-and-dream-science' | 'sleep-and-chronotypes-guide' | 'sleep-and-performance' | 'sleep-deprivation-effects' | 'sleep-and-exercise-guide' | 'sleep-disorders-guide' | 'sleep-and-weight-loss' | 'sleep-and-teenage-sleep' | 'sleep-and-jet-lag-recovery' | 'sleep-tracking-guide' | 'sleep-and-elderly-guide' | 'sleep-and-melatonin-science' | 'circadian-biology-guide' | 'sound-therapy-for-sleep' | 'bedroom-environment-for-better-sleep' | 'best-mattress-for-back-pain-and-sleep' | 'insomnia-treatment-without-medication' | 'sleep-problems-during-menopause' | 'shift-work-sleep-disorder-solutions' | 'children-sleep-requirements-by-age' | 'anxiety-and-sleep-problems-at-night' | 'melatonin-dosage-timing-effectiveness' | 'best-sleep-tracker-2025' | 'how-to-fix-sleep-schedule-quickly' | 'sleep-supplements-reviewed' | 'sleep-apnea-symptoms-and-treatment-guide';

interface BlogPost {
    id: string;
    page: Page;
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
}

const posts: BlogPost[] = [
  {
        id: 'sleep-environment-guide',
        page: 'sleep-environment-guide',
        title: "Creating the Perfect Sleep Environment: A Complete Guide",
        description: "Creating the Perfect Sleep Environment: A Complete Guide.",
        category: 'Sleep Science',
        readTime: '8 min read',
        date: '2026',
  },
  {
        id: 'napping-benefits-guide',
        page: 'napping-benefits-guide',
        title: "The Science of Napping: Benefits, Types, and How to Nap Perfectly",
        description: "The Science of Napping: Benefits, Types, and How to Nap Perfectly.",
        category: 'Sleep Science',
        readTime: '7 min read',
        date: '2026',
  },
  {
        id: 'sleep-quality-improvement-guide',
        page: 'sleep-quality-improvement-guide',
        title: "Enhancing Your Sleep Quality: Tips and Techniques",
        description: "Enhancing Your Sleep Quality: Tips and Techniques.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-hygiene-tips',
        page: 'sleep-hygiene-tips',
        title: "15 Sleep Hygiene Tips That Actually Work",
        description: "15 Sleep Hygiene Tips That Actually Work.",
        category: 'Sleep Science',
        readTime: '9 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-mental-health-guide',
        page: 'sleep-and-mental-health-guide',
        title: "Sleep and Mental Health: The Bidirectional Connection",
        description: "Sleep and Mental Health: The Bidirectional Connection.",
        category: 'Sleep Science',
        readTime: '8 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-diet-guide',
        page: 'sleep-and-diet-guide',
        title: "The Interconnection of Sleep and Diet: How Nutrition Influences Sleep Quality",
        description: "The Interconnection of Sleep and Diet: How Nutrition Influences Sleep Quality.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-dream-science',
        page: 'sleep-and-dream-science',
        title: "Exploring the Fascinating Science of Sleep and Dreams",
        description: "Exploring the Fascinating Science of Sleep and Dreams.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-chronotypes-guide',
        page: 'sleep-and-chronotypes-guide',
        title: "Understanding Chronotypes: How Your Internal Clock Influences Sleep and Performance",
        description: "Understanding Chronotypes: How Your Internal Clock Influences Sleep and Performance.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-performance',
        page: 'sleep-and-performance',
        title: "The Impact of Sleep on Cognitive Performance: Unlocking Your Potential",
        description: "The Impact of Sleep on Cognitive Performance: Unlocking Your Potential.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-deprivation-effects',
        page: 'sleep-deprivation-effects',
        title: "The Profound Effects of Sleep Deprivation on Your Health",
        description: "The Profound Effects of Sleep Deprivation on Your Health.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-exercise-guide',
        page: 'sleep-and-exercise-guide',
        title: "The Intricate Relationship Between Sleep and Exercise",
        description: "The Intricate Relationship Between Sleep and Exercise.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-disorders-guide',
        page: 'sleep-disorders-guide',
        title: "Understanding Sleep Disorders: Types, Causes, and Management",
        description: "Understanding Sleep Disorders: Types, Causes, and Management.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-weight-loss',
        page: 'sleep-and-weight-loss',
        title: "The Link Between Sleep and Weight Loss: Unraveling the Science",
        description: "The Link Between Sleep and Weight Loss: Unraveling the Science.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-teenage-sleep',
        page: 'sleep-and-teenage-sleep',
        title: "The Crucial Role of Sleep in Teenagers: Understanding Patterns and Needs",
        description: "The Crucial Role of Sleep in Teenagers: Understanding Patterns and Needs.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-jet-lag-recovery',
        page: 'sleep-and-jet-lag-recovery',
        title: "Mastering Sleep: Effective Strategies for Jet Lag Recovery",
        description: "Mastering Sleep: Effective Strategies for Jet Lag Recovery.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-tracking-guide',
        page: 'sleep-tracking-guide',
        title: "The Ultimate Guide to Sleep Tracking: Enhancing Your Sleep Quality",
        description: "The Ultimate Guide to Sleep Tracking: Enhancing Your Sleep Quality.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-elderly-guide',
        page: 'sleep-and-elderly-guide',
        title: "Understanding Sleep Patterns in the Elderly: A Comprehensive Guide",
        description: "Understanding Sleep Patterns in the Elderly: A Comprehensive Guide.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sleep-and-melatonin-science',
        page: 'sleep-and-melatonin-science',
        title: "The Science of Melatonin: Understanding Its Role in Sleep Regulation",
        description: "The Science of Melatonin: Understanding Its Role in Sleep Regulation.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'circadian-biology-guide',
        page: 'circadian-biology-guide',
        title: "Understanding Circadian Biology: The Science Behind Your Body Clock",
        description: "Understanding Circadian Biology: The Science Behind Your Body Clock.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'sound-therapy-for-sleep',
        page: 'sound-therapy-for-sleep',
        title: "The Ultimate Guide to White Noise Machines for Sleep: Benefits, Types, and More",
        description: "The Ultimate Guide to White Noise Machines for Sleep: Benefits, Types, and More.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'bedroom-environment-for-better-sleep',
        page: 'bedroom-environment-for-better-sleep',
        title: "Ultimate Bedroom Environment for Better Sleep: Your Complete Optimization Guide",
        description: "Ultimate Bedroom Environment for Better Sleep: Your Complete Optimization Guide.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'best-mattress-for-back-pain-and-sleep',
        page: 'best-mattress-for-back-pain-and-sleep',
        title: "The Best Mattress for Back Pain and Sleep: A Comprehensive Guide",
        description: "The Best Mattress for Back Pain and Sleep: A Comprehensive Guide.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'insomnia-treatment-without-medication',
        page: 'insomnia-treatment-without-medication',
        title: "Effective Insomnia Treatment Without Medication: Techniques for Better Sleep",
        description: "Effective Insomnia Treatment Without Medication: Techniques for Better Sleep.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'sleep-problems-during-menopause',
        page: 'sleep-problems-during-menopause',
        title: "Understanding Sleep Problems During Menopause: Causes and Solutions",
        description: "Understanding Sleep Problems During Menopause: Causes and Solutions.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'shift-work-sleep-disorder-solutions',
        page: 'shift-work-sleep-disorder-solutions',
        title: "Shift Work Sleep Disorder Solutions: A Comprehensive Guide for Shift Workers",
        description: "Shift Work Sleep Disorder Solutions: A Comprehensive Guide for Shift Workers.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'children-sleep-requirements-by-age',
        page: 'children-sleep-requirements-by-age',
        title: "Children Sleep Requirements by Age: A Comprehensive Sleep Guide",
        description: "Children Sleep Requirements by Age: A Comprehensive Sleep Guide.",
        category: 'Sleep Science',
        readTime: '6 min read',
        date: '2026',
  },
  {
        id: 'anxiety-and-sleep-problems-at-night',
        page: 'anxiety-and-sleep-problems-at-night',
        title: "Understanding the Bidirectional Cycle of Anxiety and Sleep Problems at Night",
        description: "Understanding the Bidirectional Cycle of Anxiety and Sleep Problems at Night.",
        category: 'Sleep Science',
        readTime: '8 min read',
        date: '2026',
  },
  {
        id: 'melatonin-dosage-timing-effectiveness',
        page: 'melatonin-dosage-timing-effectiveness',
        title: "The Science Behind Melatonin Dosage Timing and Effectiveness",
        description: "The Science Behind Melatonin Dosage Timing and Effectiveness.",
        category: 'Sleep Science',
        readTime: '10 min read',
        date: '2026',
  },
  {
        id: 'best-sleep-tracker-2025',
        page: 'best-sleep-tracker-2025',
        title: "The Best Sleep Trackers of 2025: A Comparative Guide to Enhance Sleep Quality",
        description: "The Best Sleep Trackers of 2025: A Comparative Guide to Enhance Sleep Quality.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'how-to-fix-sleep-schedule-quickly',
        page: 'how-to-fix-sleep-schedule-quickly',
        title: "How to Fix Your Sleep Schedule Quickly: Science-Based Strategies to Reset Your Circadian Rhythm",
        description: "How to Fix Your Sleep Schedule Quickly: Science-Based Strategies to Reset Your Circadian Rhythm.",
        category: 'Sleep Science',
        readTime: '5 min read',
        date: '2026',
  },
  {
        id: 'sleep-supplements-reviewed',
        page: 'sleep-supplements-reviewed',
        title: "Evidence-Based Review of Sleep Supplements That Actually Work",
        description: "Evidence-Based Review of Sleep Supplements That Actually Work.",
        category: 'Sleep Science',
        readTime: '10 min read',
        date: '2026',
  },
  {
        id: 'sleep-apnea-symptoms-and-treatment-guide',
        page: 'sleep-apnea-symptoms-and-treatment-guide',
        title: "Understanding Sleep Apnea Symptoms and Treatment Options: A Comprehensive Guide",
        description: "Understanding Sleep Apnea Symptoms and Treatment Options: A Comprehensive Guide.",
        category: 'Sleep Science',
        readTime: '8 min read',
        date: '2026',
  },
  {
        id: 'fix-sleep-schedule',
        page: 'blog-fix-sleep-schedule',
        title: 'How to Fix Your Sleep Schedule: A Step-by-Step Guide',
        description: 'Whether you stay up too late or work night shifts, learn the science-backed steps to reset your circadian rhythm and finally get consistent sleep.',
        category: 'Sleep Science',
        readTime: '7 min read',
        date: 'April 2025',
  },
  {
        id: 'wake-up-time',
        page: 'blog-wake-up-time',
        title: 'What Time Should You Wake Up Based on Sleep Cycles?',
        description: 'Discover how aligning your alarm with 90-minute sleep cycles can eliminate morning grogginess and help you wake up feeling genuinely refreshed.',
        category: 'Sleep Timing',
        readTime: '5 min read',
        date: 'April 2025',
  },
  {
        id: 'sleep-cycles-guide',
        page: 'blog-sleep-cycles',
        title: 'How Many Sleep Cycles Do You Need Per Night?',
        description: 'Most adults need 4–6 complete sleep cycles per night. Learn what happens during each 90-minute cycle and why cutting one short ruins your morning.',
        category: 'Sleep Basics',
        readTime: '6 min read',
        date: 'April 2025',
  },
  ];

interface BlogProps {
    onNavigate: (page: Page) => void;
}

const Blog = ({ onNavigate }: BlogProps) => {
    return (
          <div className="min-h-screen bg-[#0f0f1a] text-white">
                <div className="max-w-3xl mx-auto px-4 py-12">
                
                        <div className="mb-10">
                                  <h1 className="text-3xl md:text-4xl font-bold mb-3">Sleep Science Blog</h1>
                                  <p className="text-gray-400 text-lg">
                                              Evidence-based guides to help you sleep better, wake up refreshed, and understand your body's natural rhythms.
                                  </p>
                        </div>
                
                        <div className="space-y-6">
                          {posts.map((post) => (
                        <button
                                        key={post.id}
                                        onClick={() => onNavigate(post.page)}
                                        className="w-full text-left bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 hover:border-[#7c6aff]/50 transition-all group"
                                      >
                                      <div className="flex items-center gap-3 mb-3">
                                                      <span className="text-xs font-semibold uppercase tracking-widest text-[#7c6aff] bg-[#7c6aff]/10 px-3 py-1 rounded-full">
                                                        {post.category}
                                                      </span>
                                                      <span className="text-gray-500 text-xs">{post.date} &bull; {post.readTime}</span>
                                      </div>
                                      <h2 className="text-xl font-bold mb-2 group-hover:text-[#7c6aff] transition-colors">
                                          {post.title}
                                      </h2>
                                      <p className="text-gray-400 leading-relaxed text-sm">
                                        {post.description}
                                      </p>
                                      <div className="mt-4 text-[#7c6aff] text-sm font-medium">
                                                      Read article &rarr;
                                      </div>
                        </button>
                      ))}
                        </div>
                
                        <div className="mt-12 bg-[#1a1a2e] rounded-2xl p-6 border border-[#7c6aff]/20 text-center">
                                  <h2 className="text-xl font-bold mb-2">Ready to sleep better tonight?</h2>
                                  <p className="text-gray-400 mb-4 text-sm">
                                              Use our free sleep cycle calculator to find the perfect bedtime or wake-up time.
                                  </p>
                                  <button
                                                onClick={() => onNavigate('home')}
                                                className="bg-[#7c6aff] hover:bg-[#6b5aee] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                                              >
                                              Try the Sleep Calculator
                                  </button>
                        </div>
                
                </div>
          </div>
        );
};

export default Blog;
