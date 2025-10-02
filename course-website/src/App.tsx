import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Logo from '@/assets/brand-logo.svg';
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import ModulesPage from './pages/ModulesPage';
import ResourcesPage from './pages/ResourcesPage';
import HomeworkPage from './pages/HomeworkPage';
import GovernancePage from './pages/GovernancePage';

function App() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const baseNavClasses =
    'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border';

  const navLinkClass = (path: string) =>
    isActive(path)
      ? `${baseNavClasses} bg-[#FF930F] text-[#1D2E38] border-[#FF930F] shadow-sm dark:bg-[#FF930F] dark:text-[#0f1b22]`
      : `${baseNavClasses} text-[#1D2E38] border-transparent hover:bg-[#FFE7D0] hover:text-[#1D2E38] dark:text-[#f6f8f9] dark:hover:bg-[#243640] dark:hover:text-[#f6f8f9]`;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1b22]">
      {/* Header */}
      <header className="border-b border-[#FF930F]/20 bg-white/70 backdrop-blur-sm dark:bg-[#13222b]/80">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity min-w-0">
              <img src={Logo} alt="GenAI Analyst Accelerator" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow-sm flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl font-semibold text-[#1D2E38] dark:text-[#f6f8f9] truncate">
                  GenAI Analyst Accelerator
                </h1>
                <p className="text-xs sm:text-sm text-[#4b5a63] dark:text-[#9fb1ba] hidden sm:block">
                  Build confident, responsible automation skills
                </p>
                <p className="text-[11px] text-[#1D2E38] dark:text-[#f6f8f9] sm:hidden">
                  Two 75-minute live sessions + 2h homework path
                </p>
              </div>
            </Link>
            <Badge className="hidden sm:flex bg-[#1D2E38] text-white flex-shrink-0">
              Live Sessions: 2 × 75 min
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/setup" className={navLinkClass('/setup')}>Setup</Link>
            <Link to="/modules" className={navLinkClass('/modules')}>
              Modules
            </Link>
            <Link to="/resources" className={navLinkClass('/resources')}>
              Resources
            </Link>
            <Link to="/homework" className={navLinkClass('/homework')}>
              Homework
            </Link>
            <Link to="/governance" className={navLinkClass('/governance')}>
              Governance
            </Link>
          </nav>
          <div className="mt-3 sm:mt-4 rounded-xl border border-[#FF930F]/40 bg-[#FFE7D0] px-3 sm:px-4 py-2 text-[11px] sm:text-sm text-[#1D2E38] shadow-sm">
            All scenarios use synthetic data; validation is mandatory; PRs must pass lint/tests before acceptance.
          </div>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/modules" element={<ModulesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/homework" element={<HomeworkPage />} />
        <Route path="/governance" element={<GovernancePage />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-[#FF930F]/20 bg-white/70 dark:bg-[#13222b]/80 mt-8 sm:mt-12">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="text-center text-xs sm:text-sm text-[#4b5a63] dark:text-[#9fb1ba] space-y-1">
            <p>GenAI Analyst Accelerator • Hands-on skills for modern analysts</p>
            <p className="hidden sm:block">Every scenario uses synthetic data and traceable review workflows</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
