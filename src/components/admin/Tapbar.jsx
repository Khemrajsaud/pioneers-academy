import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const Tapbar = () => {
  const { isDarkMode, toggleTheme } = useAdminTheme();

  return (
    <header className={`sticky top-0 z-20 border-b transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0f1729] border-slate-800' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center justify-end px-6 py-4">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className={`p-2.5 rounded-xl transition-all ${
            isDarkMode 
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};

export default Tapbar;
