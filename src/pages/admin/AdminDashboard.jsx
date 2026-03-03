import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Image as ImageIcon,
  Newspaper,
  Calendar,
  TrendingUp,
  Bell,
  FileText,
  Download,
  Eye
} from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const AdminDashboard = () => {
  const { isDarkMode } = useAdminTheme();

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Welcome to Admin Dashboard
        </h1>
        <p className={`text-sm ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Manage your school's content and view activity statistics
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          label="Gallery Images" 
          value="156" 
          trend="+12 this week" 
          icon={<ImageIcon />} 
          color="blue"
          isDarkMode={isDarkMode}
        />
        <StatCard 
          label="News Articles" 
          value="42" 
          trend="+5 this month" 
          icon={<Newspaper />} 
          color="green"
          isDarkMode={isDarkMode}
        />
        <StatCard 
          label="Active Notices" 
          value="18" 
          trend="3 pending" 
          icon={<Bell />} 
          color="orange"
          isDarkMode={isDarkMode}
        />
        <StatCard 
          label="Total Events" 
          value="24" 
          trend="2 upcoming" 
          icon={<Calendar />} 
          color="purple"
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className={`lg:col-span-2 rounded-2xl p-6 border transition-colors ${
          isDarkMode 
            ? 'bg-[#0f1729] border-slate-800' 
            : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Recent Content Updates
            </h3>
            <button className="text-[#1f4e79] dark:text-[#7cb4ff] text-sm font-semibold hover:underline">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            <ActivityItem 
              type="Gallery"
              title="Added new school event photos"
              time="2 hours ago"
              icon={<ImageIcon size={16} />}
              isDarkMode={isDarkMode}
            />
            <ActivityItem 
              type="News"
              title="Published: Academic Excellence Award 2026"
              time="5 hours ago"
              icon={<Newspaper size={16} />}
              isDarkMode={isDarkMode}
            />
            <ActivityItem 
              type="Notice"
              title="Holiday announcement for March 2026"
              time="1 day ago"
              icon={<Bell size={16} />}
              isDarkMode={isDarkMode}
            />
            <ActivityItem 
              type="Event"
              title="Scheduled: Science Fair March 15"
              time="2 days ago"
              icon={<Calendar size={16} />}
              isDarkMode={isDarkMode}
            />
            <ActivityItem 
              type="Downloads"
              title="Uploaded: Exam Schedule 2026"
              time="3 days ago"
              icon={<Download size={16} />}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`rounded-2xl p-6 border transition-colors ${
          isDarkMode 
            ? 'bg-[#0f1729] border-slate-800' 
            : 'bg-gradient-to-br from-[#1f4e79] to-[#143654]'
        }`}>
          <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionButton 
              label="Add New Image" 
              icon={<ImageIcon size={16} />}
              isDarkMode={isDarkMode}
            />
            <QuickActionButton 
              label="Create News" 
              icon={<Newspaper size={16} />}
              isDarkMode={isDarkMode}
            />
            <QuickActionButton 
              label="Post Notice" 
              icon={<Bell size={16} />}
              isDarkMode={isDarkMode}
            />
            <QuickActionButton 
              label="Add Event" 
              icon={<Calendar size={16} />}
              isDarkMode={isDarkMode}
            />
            <QuickActionButton 
              label="Upload File" 
              icon={<Download size={16} />}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className={`mt-8 rounded-2xl p-6 border transition-colors ${
        isDarkMode 
          ? 'bg-[#0f1729] border-slate-800' 
          : 'bg-white border-slate-200'
      }`}>
        <h3 className={`text-lg font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Content Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentStat 
            label="Most Viewed News"
            value="Annual Sports Day 2026"
            views="1,234 views"
            isDarkMode={isDarkMode}
          />
          <ContentStat 
            label="Popular Gallery Album"
            value="Science Exhibition"
            views="890 views"
            isDarkMode={isDarkMode}
          />
          <ContentStat 
            label="Latest Notice"
            value="Exam Schedule Released"
            views="2 days ago"
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
};

/* Reusable Components */

const StatCard = ({ label, value, trend, icon, color, isDarkMode }) => {
  const colorClasses = {
    blue: isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600',
    green: isDarkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600',
    orange: isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-orange-50 text-orange-600',
    purple: isDarkMode ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600',
  };

  return (
    <div className={`rounded-2xl p-6 border transition-colors ${
      isDarkMode 
        ? 'bg-[#0f1729] border-slate-800' 
        : 'bg-white border-slate-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <p className={`text-sm font-medium mb-1 ${
        isDarkMode ? 'text-slate-400' : 'text-slate-600'
      }`}>
        {label}
      </p>
      <p className={`text-3xl font-bold mb-1 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {value}
      </p>
      <p className={`text-xs font-medium ${
        isDarkMode ? 'text-slate-500' : 'text-slate-500'
      }`}>
        {trend}
      </p>
    </div>
  );
};

const ActivityItem = ({ type, title, time, icon, isDarkMode }) => (
  <div className={`flex items-start gap-4 p-4 rounded-xl transition-all hover:scale-[1.02] ${
    isDarkMode 
      ? 'bg-slate-800/50 hover:bg-slate-800' 
      : 'bg-slate-50 hover:bg-slate-100'
  }`}>
    <div className={`p-2 rounded-lg ${
      isDarkMode ? 'bg-[#1f4e79]' : 'bg-[#1f4e79]/10'
    }`}>
      <span className={isDarkMode ? 'text-white' : 'text-[#1f4e79]'}>
        {icon}
      </span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-xs font-bold px-2 py-1 rounded ${
          isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'
        }`}>
          {type}
        </span>
      </div>
      <p className={`text-sm font-medium mb-1 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </p>
      <p className={`text-xs ${
        isDarkMode ? 'text-slate-500' : 'text-slate-500'
      }`}>
        {time}
      </p>
    </div>
  </div>
);

const QuickActionButton = ({ label, icon, isDarkMode }) => (
  <button className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
    isDarkMode 
      ? 'bg-slate-800 hover:bg-slate-700 text-white' 
      : 'bg-white/20 hover:bg-white/30 text-white'
  }`}>
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

const ContentStat = ({ label, value, views, isDarkMode }) => (
  <div className={`p-4 rounded-xl border ${
    isDarkMode 
      ? 'bg-slate-800/50 border-slate-700' 
      : 'bg-slate-50 border-slate-200'
  }`}>
    <p className={`text-xs font-medium mb-2 ${
      isDarkMode ? 'text-slate-400' : 'text-slate-600'
    }`}>
      {label}
    </p>
    <p className={`text-sm font-bold mb-1 ${
      isDarkMode ? 'text-white' : 'text-slate-900'
    }`}>
      {value}
    </p>
    <div className="flex items-center gap-1">
      <Eye size={12} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
      <p className={`text-xs ${
        isDarkMode ? 'text-slate-500' : 'text-slate-500'
      }`}>
        {views}
      </p>
    </div>
  </div>
);

export default AdminDashboard;