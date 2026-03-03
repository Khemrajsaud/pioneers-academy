import React from 'react';
import { Calendar, Plus, Edit, Trash2, MapPin, Clock } from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const AdminEvents = () => {
  const { isDarkMode } = useAdminTheme();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Events Management
          </h1>
          <p className={`text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Schedule and manage school events
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
          <Plus size={18} />
          Create Event
        </button>
      </div>

      <div className={`rounded-2xl p-6 border transition-colors ${
        isDarkMode 
          ? 'bg-[#0f1729] border-slate-800' 
          : 'bg-white border-slate-200'
      }`}>
        <div className="space-y-4">
          {[
            { title: 'Annual Sports Day 2026', date: 'March 15, 2026', time: '9:00 AM', location: 'School Ground', status: 'Upcoming' },
            { title: 'Science Exhibition', date: 'March 20, 2026', time: '10:00 AM', location: 'Science Lab', status: 'Upcoming' },
            { title: 'Parent-Teacher Meeting', date: 'March 25, 2026', time: '2:00 PM', location: 'Auditorium', status: 'Upcoming' },
            { title: 'Cultural Program', date: 'February 28, 2026', time: '5:00 PM', location: 'Main Hall', status: 'Completed' },
            { title: 'Career Guidance Workshop', date: 'February 15, 2026', time: '11:00 AM', location: 'Conference Room', status: 'Completed' }
          ].map((event, idx) => (
            <div key={idx} className={`p-5 rounded-xl border transition-all hover:scale-[1.01] ${
              isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-[#1f4e79]" />
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      event.status === 'Upcoming'
                        ? isDarkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'
                        : isDarkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                      <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                      <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                      <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className={`p-2 rounded-lg transition-all ${
                    isDarkMode ? 'bg-slate-700 text-white hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    <Edit size={16} />
                  </button>
                  <button className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminEvents;
