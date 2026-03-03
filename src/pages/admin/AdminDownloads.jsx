import React from 'react';
import { Download, Plus, Edit, Trash2, FileText, File } from 'lucide-react';
import { useAdminTheme } from '../../contexts/AdminThemeContext';

const AdminDownloads = () => {
  const { isDarkMode } = useAdminTheme();

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Downloads Management
          </h1>
          <p className={`text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Upload and manage downloadable files
          </p>
        </div>
        <button className="bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
          <Plus size={18} />
          Upload File
        </button>
      </div>

      <div className={`rounded-2xl p-6 border transition-colors ${
        isDarkMode 
          ? 'bg-[#0f1729] border-slate-800' 
          : 'bg-white border-slate-200'
      }`}>
        <div className="space-y-4">
          {[
            { title: 'Exam Schedule 2026', category: 'Academic', size: '2.5 MB', date: 'March 1, 2026', downloads: 234 },
            { title: 'Admission Form', category: 'Forms', size: '1.2 MB', date: 'February 28, 2026', downloads: 456 },
            { title: 'School Calendar 2026', category: 'Academic', size: '3.1 MB', date: 'February 25, 2026', downloads: 189 },
            { title: 'Fee Structure', category: 'Financial', size: '890 KB', date: 'February 20, 2026', downloads: 567 },
            { title: 'Student Handbook', category: 'General', size: '5.4 MB', date: 'February 15, 2026', downloads: 892 },
            { title: 'Syllabus - Grade 10', category: 'Academic', size: '4.2 MB', date: 'February 10, 2026', downloads: 345 }
          ].map((file, idx) => (
            <div key={idx} className={`p-5 rounded-xl border transition-all hover:scale-[1.01] ${
              isDarkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-xl ${
                    isDarkMode ? 'bg-[#1f4e79]' : 'bg-[#1f4e79]/10'
                  }`}>
                    <FileText size={24} className={isDarkMode ? 'text-white' : 'text-[#1f4e79]'} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`text-lg font-bold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {file.title}
                      </h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {file.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                        Size: {file.size}
                      </span>
                      <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                        Uploaded: {file.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download size={12} className={isDarkMode ? 'text-slate-500' : 'text-slate-400'} />
                        <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                          {file.downloads} downloads
                        </span>
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

export default AdminDownloads;
