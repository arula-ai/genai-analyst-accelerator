import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import HomePage from './pages/HomePage';
import PathAPage from './pages/PathAPage';
import PathBPage from './pages/PathBPage';
import ResourcesPage from './pages/ResourcesPage';
import HomeworkPage from './pages/HomeworkPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                GC
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
                  GitHub Copilot Training Lab
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  For Business & Systems Analysts
                </p>
              </div>
            </Link>
            <Badge variant="secondary" className="hidden sm:flex">
              75 Minutes
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 overflow-x-auto pb-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/')
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/path-a"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/path-a')
                  ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Path A: Backlog
            </Link>
            <Link
              to="/path-b"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/path-b')
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Path B: Process & Data
            </Link>
            <Link
              to="/resources"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/resources')
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/homework"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/homework')
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Homework
            </Link>
            <Link
              to="/security"
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                isActive('/security')
                  ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
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
      <footer className="border-t bg-white/50 dark:bg-slate-950/50 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            <p>GitHub Copilot for Business & Systems Analysts Training Lab</p>
            <p className="mt-1">All examples use synthetic data and are safe for practice</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
