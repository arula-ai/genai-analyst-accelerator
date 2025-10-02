import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import Logo from '@/assets/brand-logo.svg';
import HomePage from './pages/HomePage';
import PathAPage from './pages/PathAPage';
import PathBPage from './pages/PathBPage';
import ResourcesPage from './pages/ResourcesPage';
import HomeworkPage from './pages/HomeworkPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const baseNavClasses =
    'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border';

  const navLinkClass = (path: string) =>
    isActive(path)
      ? `${baseNavClasses} bg-[#F2A03D]/20 text-[#1D2E38] border-[#F2A03D]/40 dark:bg-[#F2A03D]/30 dark:text-[#1D2E38]`
      : `${baseNavClasses} text-[#1D2E38] border-transparent hover:bg-[#FBE0B9] hover:text-[#1D2E38] dark:text-[#f6f8f9] dark:hover:bg-[#243640] dark:hover:text-[#f6f8f9]`;

  return (
    <div className="min-h-screen bg-[#fdf8f2] dark:bg-[#0f1b22]">
      {/* Header */}
      <header className="border-b border-[#F2A03D]/20 bg-white/70 backdrop-blur-sm dark:bg-[#13222b]/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={Logo} alt="IR Labs" className="w-12 h-12 rounded-lg shadow-sm" />
              <div>
                <h1 className="text-xl font-semibold text-[#1D2E38] dark:text-[#f6f8f9]">
                  GitHub Copilot Training Lab
                </h1>
                <p className="text-sm text-[#4b5a63] dark:text-[#9fb1ba]">
                  For Business & Systems Analysts
                </p>
              </div>
            </Link>
            <Badge className="hidden sm:flex bg-[#1D2E38] text-white">
              75 Minutes
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-2">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/path-a" className={navLinkClass('/path-a')}>
              Path A: Backlog
            </Link>
            <Link to="/path-b" className={navLinkClass('/path-b')}>
              Path B: Process & Data
            </Link>
            <Link to="/resources" className={navLinkClass('/resources')}>
              Resources
            </Link>
            <Link to="/homework" className={navLinkClass('/homework')}>
              Homework
            </Link>
            <Link to="/security" className={navLinkClass('/security')}>
              Security
            </Link>
          </nav>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/path-a" element={<PathAPage />} />
        <Route path="/path-b" element={<PathBPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/homework" element={<HomeworkPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-[#F2A03D]/20 bg-white/70 dark:bg-[#13222b]/80 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-[#4b5a63] dark:text-[#9fb1ba]">
            <p>GitHub Copilot for Business & Systems Analysts Training Lab</p>
            <p className="mt-1">All examples use synthetic data and are safe for practice</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
