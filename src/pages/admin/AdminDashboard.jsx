import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Image as ImageIcon,
  Newspaper,
  Bell,
  Plus,
  Loader2,
} from 'lucide-react';
import axios from 'axios';
import { useAdminTheme } from '../../contexts/AdminThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';

/**
 * AdminDashboard Component
 * Provides a high-level overview of site content statistics and shortcuts.
 */
const AdminDashboard = () => {
  const { isDarkMode } = useAdminTheme();
  const { t } = useLanguage();

  // --- STATE ---
  const [stats, setStats] = useState({ gallery: 0, news: 0, notices: 0 });
  const [loading, setLoading] = useState(true);

  // --- EFFECTS ---
  useEffect(() => {
    const base = import.meta.env.VITE_API_URL;

    /**
     * Fetches real-time counts for gallery, news, and notices from the backend.
     */
    const fetchAll = async () => {
      try {
        const [gRes, nRes, ntRes] = await Promise.allSettled([
          axios.get(`${base}/api/gallery`),
          axios.get(`${base}/api/news`),
          axios.get(`${base}/api/notice`),
        ]);

        setStats({
          gallery: gRes.status === 'fulfilled' ? (gRes.value.data?.length ?? 0) : 0,
          news: nRes.status === 'fulfilled' ? (nRes.value.data?.length ?? 0) : 0,
          notices: ntRes.status === 'fulfilled' ? (ntRes.value.data?.length ?? 0) : 0,
        });
      } catch {
        /* Silently fail — counts stay 0 if API is unreachable */
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  // Theme-aware card styling
  const cardStyles = isDarkMode
    ? 'bg-[#0f1729] border-slate-800'
    : 'bg-white border-slate-200';

  return (
    <div className="animate-fadeIn">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className={`text-2xl font-extrabold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {t.admin.dashboard.title}
        </h1>
        <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
          {t.admin.dashboard.subtitle}
        </p>
      </div>

      {/* Statistics Grid (Real Counts) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <StatCard
          label={t.admin.dashboard.stats.gallery}
          value={loading ? null : stats.gallery}
          icon={<ImageIcon size={22} />}
          color="blue"
          to="/admin/gallery"
          isDarkMode={isDarkMode}
        />
        <StatCard
          label={t.admin.dashboard.stats.news}
          value={loading ? null : stats.news}
          icon={<Newspaper size={22} />}
          color="green"
          to="/admin/news"
          isDarkMode={isDarkMode}
        />
        <StatCard
          label={t.admin.dashboard.stats.notices}
          value={loading ? null : stats.notices}
          icon={<Bell size={22} />}
          color="orange"
          to="/admin/notices"
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Quick Access Actions */}
      <div className={`rounded-2xl p-6 border ${cardStyles}`}>
        <h2 className={`text-base font-bold mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {t.admin.dashboard.quickActions.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <QuickAction
            label={t.admin.dashboard.quickActions.uploadImg}
            sub={t.admin.dashboard.quickActions.uploadImgSub}
            to="/admin/gallery"
            icon={<ImageIcon size={20} />}
            isDarkMode={isDarkMode}
          />
          <QuickAction
            label={t.admin.dashboard.quickActions.createNews}
            sub={t.admin.dashboard.quickActions.createNewsSub}
            to="/admin/news"
            icon={<Newspaper size={20} />}
            isDarkMode={isDarkMode}
          />
          <QuickAction
            label={t.admin.dashboard.quickActions.postNotice}
            sub={t.admin.dashboard.quickActions.postNoticeSub}
            to="/admin/notices"
            icon={<Bell size={20} />}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

/* ── Stat Card Component ── */
const colors = {
  blue: { bg: 'bg-blue-50/50 dark:bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  green: { bg: 'bg-green-50/50 dark:bg-green-500/10', text: 'text-green-600 dark:text-green-400' },
  orange: { bg: 'bg-orange-50/50 dark:bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400' },
};

const StatCard = ({ label, value, icon, color, to, isDarkMode }) => {
  const c = colors[color] || colors.blue;
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg cursor-pointer transform hover:translate-y-[-2px] ${isDarkMode ? 'bg-[#0f1729] border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
        }`}
    >
      <div className={`p-4 rounded-xl ${c.bg}`}>
        <span className={c.text}>{icon}</span>
      </div>
      <div>
        <p className={`text-xs font-bold mb-0.5 tracking-tight uppercase opacity-80 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
          {label}
        </p>
        {value === null ? (
          <Loader2 size={18} className="text-blue-400 animate-spin mt-1" />
        ) : (
          <p className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {value}
          </p>
        )}
      </div>
    </Link>
  );
};

/* ── Quick Action Component ── */
const QuickAction = ({ label, sub, to, icon, isDarkMode }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:shadow-md group ${isDarkMode
      ? 'bg-slate-800/40 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
      : 'bg-slate-50 border-slate-100 hover:bg-white hover:border-slate-200 shadow-sm shadow-black/5'
      }`}
  >
    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
      {icon}
    </div>
    <div>
      <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{label}</p>
      <p className={`text-xs opacity-70 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{sub}</p>
    </div>
    <Plus size={16} className={`ml-auto transition-transform group-hover:rotate-90 ${isDarkMode ? 'text-slate-600' : 'text-slate-300'}`} />
  </Link>
);

export default AdminDashboard;