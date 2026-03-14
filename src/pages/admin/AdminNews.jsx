import { useEffect, useState } from "react";
import axios from "axios";
import {
  Newspaper,
  Plus,
  X,
  Loader2,
  Pencil,
  Trash2,
  CalendarDays,
  User,
  Tag,
  ImageIcon,
  Eye,
  CheckCircle2,
  XCircle,
  Upload,
  ChevronDown,
} from "lucide-react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import RichTextEditor from "../../components/admin/RichTextEditor";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/news`;

/* ──────────────────────────────────── Notification Component ─── */
const Toast = ({ toasts }) => (
  <div className="fixed top-5 right-5 z-80 flex flex-col gap-2">
    {toasts.map((t) => (
      <div
        key={t.id}
        className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold text-white min-w-[280px] animate-slideInRight border-b-4 ${t.type === "error"
          ? "bg-red-600 border-red-800"
          : t.type === "warning"
            ? "bg-amber-500 border-amber-700"
            : "bg-emerald-600 border-emerald-800"
          }`}
      >
        {t.type === "error" ? (
          <XCircle size={18} className="shrink-0" />
        ) : (
          <CheckCircle2 size={18} className="shrink-0" />
        )}
        <span className="flex-1">{t.message}</span>
      </div>
    ))}
    <style>{`
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      .animate-slideInRight { animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
    `}</style>
  </div>
);

/* ──────────────────────────────────── Deletion Logic Context ─── */
const DeleteModal = ({ isDarkMode, item, onConfirm, onCancel, deleting, t }) => (
  <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-md">
    <div className={`rounded-3xl p-8 shadow-2xl max-w-sm w-full mx-4 border animate-scaleIn ${isDarkMode ? "bg-[#0f1729] border-slate-700" : "bg-white border-slate-200"
      }`}>
      <div className="w-16 h-16 rounded-3xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center mx-auto mb-5 shadow-inner">
        <Trash2 size={28} className="text-red-600" />
      </div>
      <h3 className={`text-xl font-black text-center mb-3 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        {t.admin.common.delete} article
      </h3>
      <p className={`text-sm text-center mb-8 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
        Are you sure you want to delete <span className="font-bold text-(--primary)">"{item?.title}"</span>? This action is permanent.
      </p>
      <div className="flex gap-4">
        <button
          onClick={onCancel}
          className={`flex-1 py-3.5 rounded-2xl text-sm font-bold transition-all active:scale-95 ${isDarkMode ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
        >
          {t.admin.common.cancel}
        </button>
        <button
          onClick={onConfirm}
          disabled={deleting}
          className="flex-1 py-3.5 rounded-2xl text-sm font-bold bg-red-600 text-white hover:bg-red-700 shadow-xl shadow-red-600/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {deleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
          {t.admin.common.delete}
        </button>
      </div>
    </div>
  </div>
);

/* ──────────────────────────────────── NEWS MANAGEMENT SUITE ─── */
const AdminNews = () => {
  const { isDarkMode } = useAdminTheme();
  const { t } = useLanguage();

  // --- COMPONENT STATE ---
  const [newsList, setNewsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [fetchingNews, setFetchingNews] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [toasts, setToasts] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    published_by: "",
    published_date: new Date().toISOString().split("T")[0],
  });

  // --- NOTIFICATION HANDLERS ---
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((toast) => toast.id !== id)), 4000);
  };

  // --- DATA FLOW HANDLERS ---
  const fetchNews = async () => {
    try {
      setFetchingNews(true);
      const { data } = await axios.get(API_URL);
      setNewsList(data || []);
    } catch {
      addToast(t.admin.common.error, "error");
    } finally {
      setFetchingNews(false);
    }
  };

  useEffect(() => { fetchNews(); }, []);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      published_by: "",
      published_date: new Date().toISOString().split("T")[0]
    });
    setImageFile(null);
    setImagePreview(null);
    setEditingNews(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, category, published_by } = formData;

    if (!title.trim()) return addToast("Title is required", "error");
    if (!category.trim()) return addToast("Category is required", "error");
    if (!published_by.trim()) return addToast("Author name is required", "error");
    if (!description || description === "<p><br></p>")
      return addToast("Description cannot be empty", "error");

    const payload = new FormData();
    Object.entries(formData).forEach(([k, v]) => payload.append(k, v));
    if (imageFile) payload.append("image", imageFile);

    try {
      setSubmitting(true);
      if (editingNews) {
        await axios.put(`${API_URL}/${editingNews.id}`, payload, { headers: { "Content-Type": "multipart/form-data" } });
        addToast("Article updated successfully ✓");
      } else {
        await axios.post(API_URL, payload, { headers: { "Content-Type": "multipart/form-data" } });
        addToast("Article published successfully ✓");
      }
      resetForm();
      fetchNews();
    } catch (err) {
      addToast(t.admin.common.error, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingNews(item);
    setFormData({
      title: item.title || "",
      description: item.description || "",
      category: item.category || "",
      published_by: item.published_by || "",
      published_date: item.published_date ? new Date(item.published_date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    });
    setImageFile(null);
    setImagePreview(item.image_url || null);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const confirmDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete(`${API_URL}/${deleteTarget.id}`);
      addToast("Article deleted successfully");
      setDeleteTarget(null);
      fetchNews();
    } catch {
      addToast(t.admin.common.error, "error");
    } finally {
      setDeleting(false);
    }
  };

  // Theme variable bindings
  const fieldStyles = isDarkMode
    ? "bg-slate-800/60 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
    : "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500";

  const cardStyles = isDarkMode
    ? "bg-[#0f1729] border-slate-800 shadow-none"
    : "bg-white border-slate-200 shadow-sm shadow-black/5";

  return (
    <div className="animate-fadeIn">
      <Toast toasts={toasts} />
      {deleteTarget && (
        <DeleteModal
          isDarkMode={isDarkMode}
          item={deleteTarget}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
          deleting={deleting}
          t={t}
        />
      )}

      {/* Hero Management Header */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            {t.admin.news.title}
          </h1>
          <p className={`text-sm font-medium mt-1 ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
            <Tag size={14} className="inline mr-1" />
            {newsList.length} total publications found
          </p>
        </div>

        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-black text-sm transition-all shadow-md active:scale-95 ${showForm
            ? isDarkMode ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            : "bg-linear-to-r from-blue-600 to-indigo-700 text-white hover:shadow-lg hover:shadow-blue-500/30"
            }`}
        >
          {showForm ? <><X size={18} /> {t.admin.common.cancel}</> : <><Plus size={18} className="group-hover:rotate-90 transition-transform" /> {t.admin.news.createNew}</>}
        </button>
      </div>

      {/* Collapsible Article Editor */}
      {showForm && (
        <div className={`rounded-3xl p-8 mb-10 border-2 transition-all animate-fadeInDown ${cardStyles}`}>
          <h2 className="text-xl font-black mb-8 pb-5 border-b flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
              <Newspaper size={22} />
            </div>
            {editingNews ? "Update Article" : "Compose New Article"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-2.5 ml-1">Article Headline *</label>
                  <input
                    type="text" value={formData.title}
                    onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                    className={`w-full rounded-2xl px-5 py-4 border text-sm font-bold outline-none transition-all ${fieldStyles}`}
                    placeholder="e.g., Annual Excellence Awards 2083"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-2.5 ml-1">Classification *</label>
                  <input
                    type="text" value={formData.category}
                    onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                    className={`w-full rounded-2xl px-5 py-4 border text-sm font-bold outline-none transition-all ${fieldStyles}`}
                    placeholder="e.g., Announcement, Event, Sports"
                  />
                </div>
              </div>

              {/* Media Upload Container */}
              <div className="space-y-6">
                <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-2.5 ml-1">Asset Management</label>
                <label className={`flex flex-col items-center justify-center gap-4 p-8 rounded-3xl border-3 border-dashed cursor-pointer transition-all group ${isDarkMode
                  ? "border-slate-800 hover:border-blue-500 hover:bg-slate-800/50"
                  : "border-slate-100 hover:border-blue-400 bg-slate-50"
                  }`}>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                    <Upload size={28} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-black text-(--text)">{imageFile ? imageFile.name : "Click to select feature image"}</p>
                    <p className="text-xs font-medium text-(--muted) mt-1">Maximum file size: 5MB</p>
                  </div>
                  <input type="file" accept="image/*" onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    setImageFile(f);
                    setImagePreview(URL.createObjectURL(f));
                  }} className="hidden" />
                </label>
              </div>
            </div>

            {/* Rich Text Matrix */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-3 ml-1">Primary Content *</label>
              <RichTextEditor
                value={formData.description}
                onChange={(html) => setFormData(p => ({ ...p, description: html }))}
                isDarkMode={isDarkMode}
              />
            </div>

            {/* Meta Attributes Panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-(--border)">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-2.5 ml-1 flex items-center gap-2">
                  <User size={14} /> Author / Office *
                </label>
                <input
                  type="text" value={formData.published_by}
                  onChange={(e) => setFormData(p => ({ ...p, published_by: e.target.value }))}
                  className={`w-full rounded-2xl px-5 py-4 border text-sm font-bold outline-none transition-all ${fieldStyles}`}
                  placeholder="e.g., Administration Office"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-(--muted) mb-2.5 ml-1 flex items-center gap-2">
                  <CalendarDays size={14} /> Published Date
                </label>
                <input
                  type="date" value={formData.published_date}
                  onChange={(e) => setFormData(p => ({ ...p, published_date: e.target.value }))}
                  className={`w-full rounded-2xl px-5 py-4 border text-sm font-bold outline-none transition-all ${fieldStyles}`}
                />
              </div>
            </div>

            {/* Submission Logic Footer */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit" disabled={submitting}
                className="flex-1 bg-linear-to-r from-blue-700 to-indigo-800 text-white py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20 active:scale-95 transition-all disabled:opacity-50"
              >
                {submitting ? <><Loader2 size={18} className="animate-spin" /> saving changes</> : <><CheckCircle2 size={18} /> {editingNews ? "Update Article" : "Publish Article"}</>}
              </button>
              <button
                type="button" onClick={resetForm}
                className={`px-10 py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all active:scale-95 ${isDarkMode ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
              >
                {t.admin.common.cancel}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Publication Ledger */}
      <div className={`rounded-3xl border-2 overflow-hidden shadow-xl shadow-black/5 ${cardStyles}`}>
        <div className="px-8 py-6 border-b border-(--border) flex items-center justify-between">
          <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
            <Newspaper size={22} className="text-blue-500" />
            Article Ledger
          </h2>
          <div className="px-5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase">
            {newsList.length} total
          </div>
        </div>

        {fetchingNews ? (
          <div className="py-32 flex flex-col items-center justify-center gap-5">
            <Loader2 size={42} className="text-blue-600 animate-spin" />
            <p className="text-sm font-black tracking-widest uppercase opacity-40">Synchronizing records...</p>
          </div>
        ) : newsList.length === 0 ? (
          <div className="py-32 flex flex-col items-center justify-center gap-6 text-center px-8">
            <div className="w-24 h-24 rounded-[32px] bg-slate-50 dark:bg-slate-800/40 flex items-center justify-center shadow-inner">
              <Newspaper size={40} className="opacity-20" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-black tracking-tight">System silence detected</p>
              <p className="text-sm font-medium text-(--muted)">Your news database is currently empty. Start by publishing your first update.</p>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-(--border)">
            {newsList.map((item) => {
              const expanded = expandedId === item.id;
              return (
                <div key={item.id} className="group transition-all">
                  <div className={`px-8 py-6 flex flex-col md:flex-row md:items-center gap-6 ${isDarkMode ? "hover:bg-slate-800/40" : "hover:bg-slate-50/80"} transition-all`}>

                    {/* Visual Anchor */}
                    <div className="w-full md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-100 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      {item.image_url
                        ? <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                          <ImageIcon size={28} className="opacity-20 shadow-sm" />
                        </div>
                      }
                    </div>

                    {/* Meta Payload */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className={`text-lg font-black truncate leading-none mb-3 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                            {item.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-5 text-xs font-bold tracking-tight text-(--muted) uppercase">
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-(--bg-alt) border border-(--border)">
                              <Tag size={12} className="text-blue-500" /> {item.category || "General"}
                            </span>
                            <span className="flex items-center gap-1.5"><User size={13} className="text-slate-400" /> {item.published_by}</span>
                            <span className="flex items-center gap-1.5"><CalendarDays size={13} className="text-slate-400" /> {new Date(item.published_date).toLocaleDateString()}</span>
                            <span className="flex items-center gap-1.5"><Eye size={13} className="text-slate-400" /> {item.view_count || 0}</span>
                          </div>
                        </div>

                        {/* Control Matrix */}
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => setExpandedId(expanded ? null : item.id)}
                            className={`h-11 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 border ${isDarkMode ? "border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700" : "border-slate-100 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300 shadow-sm"}`}
                          >
                            {expanded ? "Collapse" : "Review"}
                            <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                          </button>
                          <button
                            onClick={() => handleEdit(item)}
                            className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm transition-all"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteTarget(item)}
                            className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-500/10 text-red-600 hover:bg-red-600 hover:text-white shadow-sm transition-all"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contextual Deep Review Panel */}
                  {expanded && (
                    <div className={`px-8 pb-8 pt-2 animate-fadeIn ${isDarkMode ? "bg-slate-900/30" : "bg-white"}`}>
                      <div className="mx-auto max-w-4xl space-y-8">
                        {item.image_url && (
                          <div className="relative h-64 overflow-hidden rounded-[32px] border-4 border-white dark:border-slate-800 shadow-2xl">
                            <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px]" />
                          </div>
                        )}
                        <div
                          className={`text-base leading-relaxed news-rich-content ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        .news-rich-content ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 1.5rem; }
        .news-rich-content ol { list-style-type: decimal; padding-left: 2rem; margin-bottom: 1.5rem; }
        .news-rich-content li { margin-bottom: 0.5rem; }
        .news-rich-content h1, .news-rich-content h2, .news-rich-content h3 { font-weight: 900; color: var(--text); margin-top: 1.5rem; margin-bottom: 1rem; }
        .news-rich-content p { margin-bottom: 1rem; }
      `}</style>
    </div>
  );
};

export default AdminNews;