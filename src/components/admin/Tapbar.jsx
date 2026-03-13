import React from 'react';
import { Moon, Sun, GraduationCap } from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';
import { useLocation } from 'react-router-dom';

const pageTitles = {
  '/admin/dashboard': { title: 'Dashboard', subtitle: 'Overview of your school content' },
  '/admin/gallery': { title: 'Gallery', subtitle: 'Manage school photos and albums' },
  '/admin/news': { title: 'News', subtitle: 'Create and manage news articles' },
  '/admin/notices': { title: 'Notices', subtitle: 'Manage school notices and announcements' },
};

const Topbar = () => {
  const { isDarkMode, toggleTheme } = useAdminTheme();
  const location = useLocation();
  const page = pageTitles[location.pathname] || { title: 'Admin', subtitle: '' };

  return (
    <header className={`sticky top-0 z-20 border-b transition-colors duration-300 ${isDarkMode
        ? 'bg-[#080e1e]/90 border-slate-800/60 backdrop-blur-md'
        : 'bg-white/90 border-slate-100 backdrop-blur-md'
      }`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Page Title */}
        <div>
          <h2 className={`text-lg font-extrabold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {page.title}
          </h2>
          {page.subtitle && (
            <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              {page.subtitle}
            </p>
          )}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Date/Time */}
          <div className={`hidden sm:block text-xs font-medium px-3 py-1.5 rounded-lg ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
            }`}>
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all ${isDarkMode
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden sm:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
