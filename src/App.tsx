import React, { useState } from 'react';
import { Moon } from 'lucide-react';
import Home from './pages/Home';
import NapCalculator from './pages/NapCalculator';
import CaffeineCutoff from './pages/CaffeineCutoff';
import SleepDebt from './pages/SleepDebt';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Blog from './pages/Blog';
import SleepCyclesGuide from './pages/blog/SleepCyclesGuide';
import WakeUpTime from './pages/blog/WakeUpTime';
import FixSleepSchedule from './pages/blog/FixSleepSchedule';

type Page = 'home' | 'nap' | 'caffeine' | 'debt' | 'about' | 'privacy' | 'blog' | 'blog-sleep-cycles' | 'blog-wake-up-time' | 'blog-fix-sleep-schedule';

function App() {
    const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
        switch (currentPage) {
          case 'nap':
                    return <NapCalculator />;
          case 'caffeine':
                    return <CaffeineCutoff />;
          case 'debt':
                    return <SleepDebt />;
          case 'about':
                    return <About />;
          case 'privacy':
                    return <Privacy />;
          case 'blog':
                    return <Blog onNavigate={setCurrentPage} />;
          case 'blog-sleep-cycles':
                    return <SleepCyclesGuide />;
          case 'blog-wake-up-time':
                    return <WakeUpTime />;
          case 'blog-fix-sleep-schedule':
                    return <FixSleepSchedule />;
          default:
                    return <Home />;
        }
  };

  return (
        <div className="min-h-screen bg-gradient-to-br from-[#0d1b2a] to-[#1a2f45]">
              <nav className="bg-[#0d1b2a]/95 backdrop-blur border-b border-[#7c6aff]/20">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                            <button
                                                            onClick={() => setCurrentPage('home')}
                                                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                                          >
                                                          <Moon className="w-8 h-8 text-[#7c6aff]" />
                                                          <span className="text-white font-bold text-lg">Sleep Cycle Calculator</span>span>
                                            </button>button>
                                            <div className="flex items-center gap-6">
                                                          <button
                                                                            onClick={() => setCurrentPage('home')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'home' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Home
                                                          </button>button>
                                                          <button
                                                                            onClick={() => setCurrentPage('nap')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'nap' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Nap Calculator
                                                          </button>button>
                                                          <button
                                                                            onClick={() => setCurrentPage('caffeine')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'caffeine' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Caffeine Cutoff
                                                          </button>button>
                                                          <button
                                                                            onClick={() => setCurrentPage('debt')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'debt' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Sleep Debt
                                                          </button>button>
                                                          <button
                                                                            onClick={() => setCurrentPage('about')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'about' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          About
                                                          </button>button>
                                                          <button
                                                                            onClick={() => setCurrentPage('blog')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'blog' || currentPage === 'blog-sleep-cycles' || currentPage === 'blog-wake-up-time' || currentPage === 'blog-fix-sleep-schedule' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Blog
                                                          </button>button>
                                            </div>div>
                                </div>div>
                      </div>div>
              </nav>nav>
        
              <main>
                {renderPage()}
              </main>main>
        
              <footer className="bg-[#0d1b2a]/95 border-t border-[#7c6aff]/20 mt-16">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div className="grid grid-cols-3 gap-8 mb-8">
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Sleep Tools</h4>h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('home')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Calculator
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('nap')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Nap Calculator
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('caffeine')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Caffeine Cutoff
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('debt')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Debt Tracker
                                                                                              </button>button>
                                                                          </li>li>
                                                          </ul>ul>
                                            </div>div>
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Blog</h4>h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('blog-fix-sleep-schedule')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Fix Your Sleep Schedule
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('blog-wake-up-time')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Best Wake-Up Times
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('blog-sleep-cycles')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Cycles Guide
                                                                                              </button>button>
                                                                          </li>li>
                                                          </ul>ul>
                                            </div>div>
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Resources</h4>h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('about')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                About Sleep Cycles
                                                                                              </button>button>
                                                                          </li>li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => setCurrentPage('privacy')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Privacy Policy
                                                                                              </button>button>
                                                                          </li>li>
                                                          </ul>ul>
                                            </div>div>
                                </div>div>
                                <div className="border-t border-[#7c6aff]/20 pt-6">
                                            <p className="text-gray-400 text-sm text-center">
                                                          © 2024 Sleep Cycle Calculator. All rights reserved.
                                            </p>p>
                                </div>div>
                      </div>div>
              </footer>footer>
        </div>div>
      );
}

export default App;</div>
