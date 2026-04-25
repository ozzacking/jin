type Page = 'home' | 'nap' | 'caffeine' | 'debt' | 'about' | 'privacy' | 'blog' | 'blog-sleep-cycles' | 'blog-wake-up-time' | 'blog-fix-sleep-schedule' | 'sleep-environment-guide' | 'napping-benefits-guide' | 'sleep-quality-improvement-guide' | 'sleep-hygiene-tips' | 'sleep-and-mental-health-guide' | 'sleep-and-diet-guide' | 'sleep-and-dream-science' | 'sleep-and-chronotypes-guide';

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
