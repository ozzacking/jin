import React, { useState, useEffect } from 'react';
import { Moon } from 'lucide-react';
import Home from './pages/Home';
import NapCalculator from './pages/NapCalculator';
import CaffeineCutoff from './pages/CaffeineCutoff';
import SleepDebt from './pages/SleepDebt';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Recommended from './pages/Recommended';
import Blog from './pages/Blog';
import SleepApneaGuide from './pages/blog/SleepApneaGuide';
import SleepSupplementsReviewed from './pages/blog/SleepSupplementsReviewed';
import SleepScheduleResetGuide from './pages/blog/SleepScheduleResetGuide';
import BestSleepTracker2025 from './pages/blog/BestSleepTracker2025';
import MelatoninDosageTimingEffectiveness from './pages/blog/MelatoninDosageTimingEffectiveness';
import AnxietyAndSleepProblemsAtNight from './pages/blog/AnxietyAndSleepProblemsAtNight';
import ChildrenSleepGuide from './pages/blog/ChildrenSleepGuide';
import ShiftWorkerSleepGuide from './pages/blog/ShiftWorkerSleepGuide';
import MenopauseAndSleepProblems from './pages/blog/MenopauseAndSleepProblems';
import InsomniaTreatmentWithoutMedication from './pages/blog/InsomniaTreatmentWithoutMedication';
import BestMattressForBackPainAndSleepGuide from './pages/blog/BestMattressForBackPainAndSleepGuide';
import BedroomOptimizationGuide from './pages/blog/BedroomOptimizationGuide';
import SoundTherapyForSleep from './pages/blog/SoundTherapyForSleep';
import CircadianBiologyGuide from './pages/blog/CircadianBiologyGuide';
import SleepAndMelatoninScience from './pages/blog/SleepAndMelatoninScience';
import SleepAndElderlyGuide from './pages/blog/SleepAndElderlyGuide';
import SleepTrackingGuide from './pages/blog/SleepTrackingGuide';
import SleepAndJetLagRecovery from './pages/blog/SleepAndJetLagRecovery';
import SleepAndTeenageSleep from './pages/blog/SleepAndTeenageSleep';
import SleepAndWeightLoss from './pages/blog/SleepAndWeightLoss';
import SleepDisordersGuide from './pages/blog/SleepDisordersGuide';
import SleepAndExerciseGuide from './pages/blog/SleepAndExerciseGuide';
import SleepDeprivationEffects from './pages/blog/SleepDeprivationEffects';
import SleepAndPerformanceGuide from './pages/blog/SleepAndPerformanceGuide';
import SleepAndChronotypesGuide from './pages/blog/SleepAndChronotypesGuide';
import SleepAndDreamScience from './pages/blog/SleepAndDreamScience';
import SleepAndDietGuide from './pages/blog/SleepAndDietGuide';
import SleepAndMentalHealthGuide from './pages/blog/SleepAndMentalHealthGuide';
import SleepHygieneTips from './pages/blog/SleepHygieneTips';
import SleepQualityImprovementGuide from './pages/blog/SleepQualityImprovementGuide';
import NappingBenefitsGuide from './pages/blog/NappingBenefitsGuide';
import SleepEnvironmentGuide from './pages/blog/SleepEnvironmentGuide';
import SleepCyclesGuide from './pages/blog/SleepCyclesGuide';
import WakeUpTime from './pages/blog/WakeUpTime';
import FixSleepSchedule from './pages/blog/FixSleepSchedule';

type Page = 'home' | 'nap' | 'caffeine' | 'debt' | 'about' | 'privacy' | 'contact' | 'blog' | 'blog-sleep-cycles' | 'blog-wake-up-time' | 'blog-fix-sleep-schedule' | 'sleep-environment-guide' | 'napping-benefits-guide' | 'sleep-quality-improvement-guide' | 'sleep-hygiene-tips' | 'sleep-and-mental-health-guide' | 'sleep-and-diet-guide' | 'sleep-and-dream-science' | 'sleep-and-chronotypes-guide' | 'sleep-and-performance' | 'sleep-deprivation-effects' | 'sleep-and-exercise-guide' | 'sleep-disorders-guide' | 'sleep-and-diet-connection' | 'sleep-and-weight-loss' | 'sleep-and-teenage-sleep' | 'understanding-chronotypes-and-their-impact-on-sleep' | 'sleep-and-jet-lag-recovery' | 'sleep-tracking-guide' | 'sleep-and-elderly-guide' | 'sleep-and-melatonin-science' | 'circadian-biology-guide' | 'recommended' | 'sound-therapy-for-sleep' | 'bedroom-environment-for-better-sleep' | 'best-mattress-for-back-pain-and-sleep' | 'insomnia-treatment-without-medication' | 'sleep-problems-during-menopause' | 'shift-work-sleep-disorder-solutions' | 'children-sleep-requirements-by-age' | 'anxiety-and-sleep-problems-at-night' | 'melatonin-dosage-timing-effectiveness' | 'sleep-deprivation-health-risks' | 'sleep-and-weight-loss-connection' | 'menopause-and-sleep-problems-guide' | 'melatonin-dosage-timing-effectiveness' | 'best-sleep-tracker-2025' | 'how-to-fix-sleep-schedule-quickly' | 'best-mattress-for-back-pain-and-sleep' | 'sleep-supplements-reviewed' | 'insomnia-treatment-without-medication' | 'best-sleep-tracker-2025' | 'best-sleep-tracker-2025-comparison' | 'children-sleep-requirements-by-age' | 'shift-work-sleep-disorder-solutions-guide' | 'sleep-supplements-that-actually-work' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'sound-therapy-for-sleep' | 'sleep-apnea-symptoms-and-treatment-guide' | 'sleep-supplements-reviewed' | 'melatonin-dosage-timing-effectiveness' | 'mattress-guide-for-back-pain-and-sleep' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'children-sleep-requirements-by-age' | 'how-to-fix-sleep-schedule-quickly' | 'how-to-fix-sleep-schedule-quickly' | 'sleep-supplements-reviewed' | 'how-to-fix-sleep-schedule-quickly' | 'menopause-sleep-problems-guide' | 'sleep-and-weight-loss-connection' | 'white-noise-machine-for-sleep' | 'bedroom-environment-better-sleep' | 'melatonin-dosage-timing-effectiveness-review' | 'melatonin-dosage-timing-effectiveness';

const PATH_ALIASES: Record<string, string> = {
  home: '',
  nap: 'nap-calculator',
  caffeine: 'caffeine-cutoff',
  debt: 'sleep-debt',
};

const pathForPage = (page: Page): string =>
  '/' + (page in PATH_ALIASES ? PATH_ALIASES[page] : page);

const pageForPath = (path: string): Page => {
  const slug = path.replace(/\/+$/, '').replace(/^\//, '');
  if (!slug) return 'home';
  const alias = Object.entries(PATH_ALIASES).find(([, p]) => p === slug);
  return (alias ? alias[0] : slug) as Page;
};

function App() {
    const [currentPage, setCurrentPage] = useState<Page>(() => pageForPath(window.location.pathname));

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({}, '', pathForPage(page));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageForPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const renderPage = () => {
        switch (currentPage) {
          case 'nap':
                    return <NapCalculator />;
          case 'caffeine':
                    return <CaffeineCutoff />;
          case 'debt':
                    return <SleepDebt />;
          case 'contact':
                    return <Contact />;
          case 'about':
                    return <About />;
          case 'privacy':
                    return <Privacy />;
          case 'sleep-environment-guide': return <SleepEnvironmentGuide />;
      case 'napping-benefits-guide': return <NappingBenefitsGuide />;
      case 'sleep-quality-improvement-guide': return <SleepQualityImprovementGuide />;
      case 'sleep-hygiene-tips': return <SleepHygieneTips />;
      case 'sleep-and-mental-health-guide': return <SleepAndMentalHealthGuide />;
      case 'sleep-and-diet-guide': return <SleepAndDietGuide />;
      case 'sleep-and-dream-science': return <SleepAndDreamScience />;
      case 'sleep-and-chronotypes-guide': return <SleepAndChronotypesGuide />;
      case 'sleep-and-performance': return <SleepAndPerformanceGuide />;
      case 'sleep-deprivation-effects': return <SleepDeprivationEffects />;
      case 'sleep-and-exercise-guide': return <SleepAndExerciseGuide />;
      case 'sleep-disorders-guide': return <SleepDisordersGuide />;
      case 'sleep-and-weight-loss': return <SleepAndWeightLoss />;
      case 'sleep-and-teenage-sleep': return <SleepAndTeenageSleep />;
      case 'sleep-and-jet-lag-recovery': return <SleepAndJetLagRecovery />;
      case 'sleep-tracking-guide': return <SleepTrackingGuide />;
      case 'sleep-and-elderly-guide': return <SleepAndElderlyGuide />;
      case 'sleep-and-melatonin-science': return <SleepAndMelatoninScience />;
      case 'circadian-biology-guide': return <CircadianBiologyGuide />;
      case 'recommended': return <Recommended />;
      case 'sound-therapy-for-sleep': return <SoundTherapyForSleep />;
      case 'bedroom-environment-for-better-sleep': return <BedroomOptimizationGuide />;
      case 'best-mattress-for-back-pain-and-sleep': return <BestMattressForBackPainAndSleepGuide />;
      case 'insomnia-treatment-without-medication': return <InsomniaTreatmentWithoutMedication />;
      case 'sleep-problems-during-menopause': return <MenopauseAndSleepProblems />;
      case 'shift-work-sleep-disorder-solutions': return <ShiftWorkerSleepGuide />;
      case 'children-sleep-requirements-by-age': return <ChildrenSleepGuide />;
      case 'anxiety-and-sleep-problems-at-night': return <AnxietyAndSleepProblemsAtNight />;
      case 'melatonin-dosage-timing-effectiveness': return <MelatoninDosageTimingEffectiveness />;
      case 'best-sleep-tracker-2025': return <BestSleepTracker2025 />;
      case 'how-to-fix-sleep-schedule-quickly': return <SleepScheduleResetGuide />;
      case 'sleep-supplements-reviewed': return <SleepSupplementsReviewed />;
      case 'sleep-apnea-symptoms-and-treatment-guide': return <SleepApneaGuide />;
      case 'blog':
                    return <Blog onNavigate={navigate} />;
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
                                                            onClick={() => navigate('home')}
                                                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                                                          >
                                                          <Moon className="w-8 h-8 text-[#7c6aff]" />
                                                          <span className="text-white font-bold text-lg">Sleep Cycle Calculator</span>
                                            </button>
                                                                            <button
                                                                            onClick={() => navigate('contact')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'contact' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                                            }`}
                                                                        >
                                                                                Contact
                                                                            </button>
                                            <div className="flex items-center gap-6">
                                                          <button
                                                                            onClick={() => navigate('home')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'home' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Home
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('nap')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'nap' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Nap Calculator
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('caffeine')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'caffeine' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Caffeine Cutoff
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('debt')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'debt' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Sleep Debt
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('about')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'about' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          About
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('blog')}
                                                                            className={`text-sm font-medium transition-colors ${
                                                                                                currentPage === 'blog' || currentPage === 'blog-sleep-cycles' || currentPage === 'blog-wake-up-time' || currentPage === 'blog-fix-sleep-schedule' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'
                                                                            }`}
                                                                          >
                                                                          Blog
                                                          </button>
                                                          <button
                                                                            onClick={() => navigate('recommended')}
                                                                            className={`text-sm font-medium transition-colors ${currentPage === 'recommended' ? 'text-[#7c6aff]' : 'text-gray-300 hover:text-white'}`}
                                                                          >
                                                                          Shop
                                                          </button>
                                            </div>
                                </div>
                      </div>
              </nav>
        
              <main>
                {renderPage()}
              </main>
        
              <footer className="bg-[#0d1b2a]/95 border-t border-[#7c6aff]/20 mt-16">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                <div className="grid grid-cols-3 gap-8 mb-8">
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Sleep Tools</h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('home')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Calculator
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('nap')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Nap Calculator
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('caffeine')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Caffeine Cutoff
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('debt')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Debt Tracker
                                                                                              </button>
                                                                          </li>
                                                          </ul>
                                            </div>
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Blog</h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('blog-fix-sleep-schedule')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Fix Your Sleep Schedule
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('blog-wake-up-time')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Best Wake-Up Times
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('blog-sleep-cycles')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Sleep Cycles Guide
                                                                                              </button>
                                                                          </li>
                                                          </ul>
                                            </div>
                                            <div>
                                                          <h4 className="text-white font-semibold mb-4">Resources</h4>
                                                          <ul className="space-y-2">
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('about')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                About Sleep Cycles
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('privacy')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Privacy Policy
                                                                                              </button>
                                                                          </li>
                                                                          <li>
                                                                                            <button
                                                                                                                  onClick={() => navigate('recommended')}
                                                                                                                  className="text-gray-300 hover:text-[#7c6aff] text-sm transition-colors"
                                                                                                                >
                                                                                                                Recommended
                                                                                              </button>
                                                                          </li>
                                                          </ul>
                                            </div>
                                </div>
                                <div className="border-t border-[#7c6aff]/20 pt-6">
                                            <p className="text-gray-400 text-sm text-center">
                                                          © 2024 Sleep Cycle Calculator. All rights reserved.
                                            </p>
                                </div>
                      </div>
              </footer>
        </div>
      );
}

export default App;
