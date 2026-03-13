import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Image as ImageIcon,
  Newspaper,
  Bell,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const navItems = [
  { to: '/admin/dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { to: '/admin/gallery', icon: <ImageIcon size={18} />, label: 'Gallery' },
  { to: '/admin/news', icon: <Newspaper size={18} />, label: 'News' },
  { to: '/admin/notices', icon: <Bell size={18} />, label: 'Notices' },
];

const Sidebar = () => {
  const location = useLocation();
  const { isDarkMode } = useAdminTheme();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`w-64 min-h-screen flex flex-col relative border-r transition-colors duration-300 ${isDarkMode
      ? 'bg-[#080e1e] border-slate-800/60'
      : 'bg-white border-slate-100'
      }`}>
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-blue-700" />

      {/* Brand */}
      <div className="flex items-center gap-3 px-6 pt-8 pb-8">
        <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
          <GraduationCap className="text-white" size={20} />
        </div>
        <div>
          <p className={`text-sm font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Pioneers
          </p>
          <p className="text-xs font-semibold text-blue-500">Admin Panel</p>
        </div>
      </div>

      {/* Nav label */}
      <div className="px-6 mb-2">
        <p className={`text-[10px] uppercase font-bold tracking-widest ${isDarkMode ? 'text-slate-600' : 'text-slate-400'
          }`}>
          Management
        </p>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ to, icon, label }) => {
          const active = isActive(to);
          return (
            <Link
              key={to}
              to={to}
              className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${active
                ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                : isDarkMode
                  ? 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={`transition-colors ${active ? 'text-white' :
                  isDarkMode ? 'text-slate-500 group-hover:text-slate-300' :
                    'text-slate-400 group-hover:text-slate-600'
                  }`}>
                  {icon}
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
              {active && <ChevronRight size={15} className="text-white/70" />}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
