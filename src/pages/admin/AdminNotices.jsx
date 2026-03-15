import { useState, useEffect } from "react";
import axios from "axios";
import {
  BellRing,
  Type,
  AlignLeft,
  Link as LinkIcon,
  User,
  Calendar,
  Send,
  Pencil,
  Trash2,
  Plus,
  X,
  FileText,
  Clock,
  ExternalLink,
  Loader
} from "lucide-react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/notice`;


const AdminNotices = () => {
  const { isDarkMode } = useAdminTheme();
  const { t } = useLanguage();

  // --- COMPONENT STATE ---
  const [notices, setNotices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingNotices, setFetchingNotices] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    document_url: "",
    author: "",
    notice_date: new Date().toISOString().split('T')[0]
  });

  // --- DATA FLOW ---
  const fetchNotices = async () => {
    try {
      setFetchingNotices(true);
      const response = await axios.get(API_URL);
      setNotices(response.data || []);
    } catch (err) {
      console.error("Error fetching notices:", err);
    } finally {
      setFetchingNotices(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      document_url: "",
      author: "",
      notice_date: new Date().toISOString().split('T')[0]
    });
    setEditingNotice(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingNotice) {
        await axios.put(`${API_URL}/${editingNotice.id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      resetForm();
      fetchNotices();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      description: notice.description,
      document_url: notice.document_url || "",
      author: notice.author || "",
      notice_date: notice.notice_date ? new Date(notice.notice_date).toISOString().split('T')[0] : ""
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t.admin.notices.deleteConfirm)) return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchNotices();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Dynamic Header */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.admin.notices.title}
          </h1>
          <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            {t.admin.notices.subtitle}
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-black text-sm transition-all shadow-md active:scale-95 ${showForm
            ? isDarkMode
              ? 'bg-slate-800 text-white hover:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-linear-to-r from-blue-700 to-indigo-800 text-white hover:shadow-lg'
            }`}
        >
          {showForm ? (
            <><X size={18} /> {t.admin.common.cancel}</>
          ) : (
            <><Plus size={18} /> {t.admin.notices.postNew}</>
          )}
        </button>
      </div>

      {/* Notice Composition Suite */}
      {showForm && (
        <div className={`mb-10 rounded-3xl p-8 border-2 transition-all animate-fadeInDown ${isDarkMode ? 'bg-[#0f1729] border-slate-800' : 'bg-white border-slate-100'
          }`}>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-(--border)">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
              <BellRing size={22} />
            </div>
            <h2 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {editingNotice ? 'Edit Notice' : 'Broadcast New Notice'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InputGroup
                label="Headline"
                name="title"
                value={formData.title}
                icon={<Type size={16} />}
                placeholder="e.g., Annual Sports Meet 2026"
                onChange={handleChange}
                isDarkMode={isDarkMode}
                required
              />
              <InputGroup
                label="Effective Date"
                name="notice_date"
                type="date"
                value={formData.notice_date}
                icon={<Calendar size={16} />}
                onChange={handleChange}
                isDarkMode={isDarkMode}
                required
              />
            </div>

            <div className="space-y-2.5">
              <label className={`text-xs font-black uppercase tracking-widest ml-1 flex items-center gap-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                <AlignLeft size={14} /> Full Context
              </label>
              <textarea
                name="description"
                value={formData.description}
                rows="6"
                placeholder="Compose detailed notice content here..."
                className={`w-full p-5 rounded-3xl focus:ring-4 focus:outline-none transition-all text-sm font-bold leading-relaxed ${isDarkMode
                  ? 'bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 focus:ring-blue-500/20 focus:border-blue-500'
                  : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-blue-500/10 focus:border-blue-500'
                  }`}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InputGroup
                label="Authority"
                name="author"
                value={formData.author}
                icon={<User size={16} />}
                placeholder="e.g., Principal Office"
                onChange={handleChange}
                isDarkMode={isDarkMode}
              />
              <InputGroup
                label="Supporting Document URL"
                name="document_url"
                value={formData.document_url}
                icon={<LinkIcon size={16} />}
                placeholder="https://..."
                onChange={handleChange}
                isDarkMode={isDarkMode}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-linear-to-r from-blue-700 to-indigo-800 text-white py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <><Loader className="animate-spin" size={18} /> processing</>
                ) : (
                  <>{editingNotice ? 'Update Broadcast' : 'Post Broadcast'} <Send size={18} /></>
                )}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className={`px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all active:scale-95 ${isDarkMode
                  ? 'bg-slate-800 text-white hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 shadow-sm'
                  }`}
              >
                {t.admin.common.cancel}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Historical Dispatch Ledger */}
      <div className={`rounded-3xl p-8 border-2 shadow-xl shadow-black/5 ${isDarkMode ? 'bg-[#0f1729] border-slate-800' : 'bg-white border-slate-50'
        }`}>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-(--border)">
          <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
            <FileText size={22} className="text-blue-500" />
            Notices
          </h2>
          <div className="px-5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase">
            {notices.length} active
          </div>
        </div>

        {fetchingNotices ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader className="animate-spin text-blue-600" size={40} />
            <p className="text-sm font-black tracking-widest uppercase opacity-40">Synchronizing data...</p>
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center py-20 border-3 border-dashed border-(--border) rounded-[40px]">
            <BellRing className={`mx-auto mb-5 opacity-20 ${isDarkMode ? 'text-slate-400' : 'text-slate-300'}`} size={64} />
            <p className="text-lg font-black tracking-tight mb-1">No Active Notices</p>
            <p className="text-xs font-medium text-(--muted)">Click "Post Broadcast" to send your first alert.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
                isDarkMode={isDarkMode}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* --- Visual Fragments --- */

const NoticeCard = ({ notice, isDarkMode, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={`group p-6 rounded-[32px] border-2 transition-all hover:shadow-2xl hover:translate-y-[-4px] ${isDarkMode
      ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50'
      : 'bg-white border-slate-100 hover:border-blue-500/50 shadow-sm shadow-black/5'
      }`}>
      <div className="flex flex-col h-full">
        {/* Status Line */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <span className={`px-4 py-1.5 rounded-xl text-[9px] font-black tracking-widest uppercase ${isDarkMode ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-blue-500 text-white'
              }`}>
              official
            </span>
            <div className={`flex items-center gap-1 text-[10px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
              <Clock size={12} />
              {formatDate(notice.notice_date)}
            </div>
          </div>

          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(notice)}
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              <Pencil size={15} />
            </button>
            <button
              onClick={() => onDelete(notice.id)}
              className="w-10 h-10 flex items-center justify-center rounded-2xl bg-red-500/10 text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <h3 className={`text-lg font-black mb-3 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
          {notice.title}
        </h3>
        <p className={`text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
          {notice.description}
        </p>

        {/* Action Tray */}
        <div className="pt-5 border-t border-(--border) flex items-center justify-between">
          <div className={`flex items-center gap-2 text-[11px] font-bold ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
            }`}>
            <User size={14} className="opacity-50" />
            {notice.author || "Admin Unit"}
          </div>
          {notice.document_url && (
            <a
              href={notice.document_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-black text-blue-600 hover:underline hover:gap-3 transition-all"
            >
              DOCUMENT <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, icon, isDarkMode, ...props }) => (
  <div className="space-y-2.5">
    <label className={`text-xs font-black uppercase tracking-widest ml-1 flex items-center gap-2 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
      }`}>
      {icon} {label}
    </label>
    <input
      {...props}
      className={`w-full px-5 py-4 rounded-2xl focus:ring-4 focus:outline-none transition-all text-sm font-bold ${isDarkMode
        ? 'bg-slate-800/60 border border-slate-700 text-white placeholder-slate-600 focus:ring-blue-500/20 focus:border-blue-500'
        : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-blue-500/10 focus:border-blue-500'
        }`}
    />
  </div>
);

export default AdminNotices;