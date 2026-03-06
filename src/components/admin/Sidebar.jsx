import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Newspaper, 
  Bell, 
  ChevronRight,
  GraduationCap,
  Download
} from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const Sidebar = () => {
  const location = useLocation();
  const { isDarkMode } = useAdminTheme();

  // Helper to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`w-64 min-h-screen p-6 border-r transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0f1729] border-slate-800' 
        : 'bg-white border-slate-100'
    }`}>
      {/* Brand Section */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="bg-gradient-to-br from-[#1f4e79] to-[#143654] p-2.5 rounded-xl shadow-lg">
          <GraduationCap className="text-white" size={20} />
        </div>
        <span className={`text-lg font-black tracking-tight ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Pioneers <span className="text-[#1f4e79] dark:text-[#7cb4ff]">Academy</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <SidebarLink 
          to="/admin/dashboard" 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          active={isActive('/admin/dashboard')}
          isDarkMode={isDarkMode}
        />
        <SidebarLink 
          to="/admin/gallery" 
          icon={<ImageIcon size={18} />} 
          label="Gallery" 
          active={isActive('/admin/gallery')}
          isDarkMode={isDarkMode}
        />
        <SidebarLink 
          to="/admin/news" 
          icon={<Newspaper size={18} />} 
          label="News" 
          active={isActive('/admin/news')}
          isDarkMode={isDarkMode}
        />
        <SidebarLink 
          to="/admin/notices" 
          icon={<Bell size={18} />} 
          label="Notices" 
          active={isActive('/admin/notices')}
          isDarkMode={isDarkMode}
        />
        <SidebarLink 
          to="/admin/uploads" 
          icon={<Download size={18} />} 
          label="Uploads" 
          active={isActive('/admin/uploads')}
          isDarkMode={isDarkMode}
        />
      </nav>
    </aside>
  );
};

/* Sub-component for individual links */
const SidebarLink = ({ to, icon, label, active, isDarkMode }) => (
  <Link 
    to={to} 
    className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
      active 
        ? isDarkMode 
          ? 'bg-[#1f4e79] text-white shadow-lg' 
          : 'bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white shadow-md'
        : isDarkMode
          ? 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    }`}
  >
    <div className="flex items-center gap-3">
      <span className={active ? 'text-white' : isDarkMode ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-400 group-hover:text-slate-600'}>
        {icon}
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
    {active && <ChevronRight size={16} className="text-white" />}
  </Link>
);

export default Sidebar;
