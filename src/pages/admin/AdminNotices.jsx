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

const API_URL = "http://localhost:5000/api/notice";

const AdminNotices = () => {
  const { isDarkMode } = useAdminTheme();
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

  // Fetch all notices
  const fetchNotices = async () => {
    try {
      setFetchingNotices(true);
      const response = await axios.get(API_URL);
      setNotices(response.data);
    } catch (err) {
      console.error("Error fetching notices:", err);
      alert("Error loading notices ❌");
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

  // Create or Update Notice
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingNotice) {
        // Update existing notice
        await axios.put(`${API_URL}/${editingNotice.id}`, formData);
        alert("Notice updated successfully! ✅");
      } else {
        // Create new notice
        await axios.post(API_URL, formData);
        alert("Notice published successfully! ✅");
      }
      resetForm();
      fetchNotices();
    } catch (err) {
      console.error(err);
      alert(`Error ${editingNotice ? 'updating' : 'creating'} notice ❌`);
    } finally {
      setLoading(false);
    }
  };

  // Edit Notice
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
  };

  // Delete Notice
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this notice?")) return;
    
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Notice deleted successfully! ✅");
      fetchNotices();
    } catch (err) {
      console.error(err);
      alert("Error deleting notice ❌");
    }
  };

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Notice Management
          </h1>
          <p className={`text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Create, edit, and manage school notices
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
            showForm 
              ? isDarkMode 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-red-50 text-red-600 hover:bg-red-100'
              : 'bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white hover:shadow-lg'
          }`}
        >
          {showForm ? (
            <>
              <X size={18} /> Cancel
            </>
          ) : (
            <>
              <Plus size={18} /> New Notice
            </>
          )}
        </button>
      </div>

      {/* Form Section - Shown when creating/editing */}
      {showForm && (
        <div className={`mb-8 rounded-2xl p-8 border ${
          isDarkMode ? 'bg-[#0f1729] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-[#1f4e79]' : 'bg-[#1f4e79]/10'
            }`}>
              <BellRing className={isDarkMode ? 'text-white' : 'text-[#1f4e79]'} size={20} />
            </div>
            <h2 className={`text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              {editingNotice ? 'Edit Notice' : 'Create New Notice'}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup 
                label="Notice Title" 
                name="title" 
                value={formData.title}
                icon={<Type size={16}/>} 
                placeholder="e.g., Annual Sports Meet 2026" 
                onChange={handleChange}
                isDarkMode={isDarkMode}
                required 
              />
              <InputGroup 
                label="Publish Date" 
                name="notice_date" 
                type="date" 
                value={formData.notice_date}
                icon={<Calendar size={16}/>} 
                onChange={handleChange}
                isDarkMode={isDarkMode}
                required 
              />
            </div>

            <div className="space-y-2">
              <label className={`text-xs font-semibold ml-1 flex items-center gap-2 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <AlignLeft size={14}/> Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                rows="5"
                placeholder="Detailed information about the notice..."
                className={`w-full p-4 rounded-xl focus:ring-2 focus:outline-none transition-all text-sm ${
                  isDarkMode 
                    ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-[#1f4e79]/50 focus:border-[#1f4e79]'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1f4e79]/20 focus:border-[#1f4e79]'
                }`}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup 
                label="Author / Department" 
                name="author" 
                value={formData.author}
                icon={<User size={16}/>} 
                placeholder="e.g., Principal's Office"
                onChange={handleChange}
                isDarkMode={isDarkMode}
              />
              <InputGroup 
                label="Document Link (Optional)" 
                name="document_url" 
                value={formData.document_url}
                icon={<LinkIcon size={16}/>} 
                placeholder="https://drive.google.com/..."
                onChange={handleChange}
                isDarkMode={isDarkMode}
              />
            </div>

            <div className="flex gap-4">
              <button 
                type="submit" 
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={16} />
                    Processing...
                  </>
                ) : (
                  <>
                    {editingNotice ? 'Update Notice' : 'Publish Notice'} <Send size={16} />
                  </>
                )}
              </button>
              <button 
                type="button"
                onClick={resetForm}
                className={`px-6 py-4 rounded-xl font-semibold text-sm transition-all ${
                  isDarkMode 
                    ? 'bg-slate-800 text-white hover:bg-slate-700' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notices List */}
      <div className={`rounded-2xl p-8 border ${
        isDarkMode ? 'bg-[#0f1729] border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            All Notices ({notices.length})
          </h2>
        </div>

        {fetchingNotices ? (
          <div className="flex items-center justify-center py-12">
            <Loader className={`animate-spin ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} size={32} />
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center py-12">
            <FileText className={`mx-auto mb-4 ${isDarkMode ? 'text-slate-600' : 'text-slate-300'}`} size={48} />
            <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No notices found. Create your first notice!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
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

/* Notice Card Component */
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
    <div className={`p-6 rounded-xl border transition-all hover:shadow-lg ${
      isDarkMode 
        ? 'bg-slate-800/50 border-slate-700 hover:border-[#1f4e79]' 
        : 'bg-slate-50 border-slate-200 hover:border-[#1f4e79]'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-3 py-1 rounded-lg text-[10px] font-bold ${
              isDarkMode ? 'bg-[#1f4e79] text-white' : 'bg-[#1f4e79]/10 text-[#1f4e79]'
            }`}>
              NOTICE
            </span>
            <div className={`flex items-center gap-1 text-xs ${
              isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <Clock size={12} />
              {formatDate(notice.notice_date)}
            </div>
          </div>
          <h3 className={`text-lg font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {notice.title}
          </h3>
          <p className={`text-sm leading-relaxed mb-3 line-clamp-2 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {notice.description}
          </p>
          <div className="flex items-center gap-4">
            {notice.author && (
              <div className={`flex items-center gap-1 text-xs ${
                isDarkMode ? 'text-slate-500' : 'text-slate-500'
              }`}>
                <User size={12} />
                {notice.author}
              </div>
            )}
            {notice.document_url && (
              <a 
                href={notice.document_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-[#1f4e79] hover:underline"
              >
                <ExternalLink size={12} />
                View Document
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => onEdit(notice)}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode 
                ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30' 
                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
            }`}
            title="Edit Notice"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(notice.id)}
            className={`p-2 rounded-lg transition-all ${
              isDarkMode 
                ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                : 'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
            title="Delete Notice"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* Reusable Input Component */
const InputGroup = ({ label, icon, isDarkMode, ...props }) => (
  <div className="space-y-2">
    <label className={`text-xs font-semibold ml-1 flex items-center gap-2 ${
      isDarkMode ? 'text-slate-400' : 'text-slate-600'
    }`}>
      {icon} {label}
    </label>
    <input
      {...props}
      className={`w-full p-4 rounded-xl focus:ring-2 focus:outline-none transition-all text-sm ${
        isDarkMode 
          ? 'bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:ring-[#1f4e79]/50 focus:border-[#1f4e79]'
          : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-[#1f4e79]/20 focus:border-[#1f4e79]'
      }`}
    />
  </div>
);

export default AdminNotices;