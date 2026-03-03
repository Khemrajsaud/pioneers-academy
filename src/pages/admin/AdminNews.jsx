import { useEffect, useState } from "react";
import axios from "axios";
import {
  Newspaper,
  Plus,
  X,
  Loader,
  Pencil,
  Trash2,
  CalendarDays,
  User,
  Tag,
  Image as ImageIcon,
} from "lucide-react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";

const API_URL = "http://localhost:5000/api/news";

const AdminNews = () => {
  const { isDarkMode } = useAdminTheme();
  const [newsList, setNewsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [fetchingNews, setFetchingNews] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    published_by: "",
    published_date: new Date().toISOString().split("T")[0],
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "success", message: "" });
    }, 3000);
  };

  const fetchNews = async () => {
    try {
      setFetchingNews(true);
      const response = await axios.get(API_URL);
      setNewsList(response.data || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      showToast("Error loading news", "error");
    } finally {
      setFetchingNews(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      published_by: "",
      published_date: new Date().toISOString().split("T")[0],
    });
    setImageFile(null);
    setImagePreview(null);
    setEditingNews(null);
    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.description || !formData.category || !formData.published_by) {
      showToast("Please fill all required fields", "error");
      return;
    }

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("description", formData.description);
    payload.append("category", formData.category);
    payload.append("published_by", formData.published_by);
    payload.append("published_date", formData.published_date);
    if (imageFile) payload.append("image", imageFile);

    try {
      setSubmitting(true);
      if (editingNews) {
        await axios.put(`${API_URL}/${editingNews.id}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("News updated successfully");
      } else {
        await axios.post(API_URL, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("News created successfully");
      }

      resetForm();
      fetchNews();
    } catch (error) {
      console.error("Error saving news:", error);
      showToast(`Error ${editingNews ? "updating" : "creating"} news`, "error");
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
      published_date: item.published_date
        ? new Date(item.published_date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
    });
    setImageFile(null);
    setImagePreview(item.image_url || null);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this news article?")) return;

    try {
      setDeletingId(id);
      await axios.delete(`${API_URL}/${id}`);
      showToast("News deleted successfully");
      fetchNews();
    } catch (error) {
      console.error("Error deleting news:", error);
      showToast("Error deleting news", "error");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      {toast.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-medium text-sm animate-slideIn z-50 ${
            toast.type === "error" ? "bg-red-500" : "bg-emerald-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            News Management
          </h1>
          <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            Create, edit, and manage school news articles
          </p>
        </div>

        <button
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
            showForm
              ? isDarkMode
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              : "bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white hover:shadow-lg"
          }`}
        >
          {showForm ? (
            <>
              <X size={18} />
              Cancel
            </>
          ) : (
            <>
              <Plus size={18} />
              Create News
            </>
          )}
        </button>
      </div>

      {showForm && (
        <div
          className={`rounded-2xl p-6 mb-8 border transition-colors ${
            isDarkMode ? "bg-[#0f1729] border-slate-800" : "bg-white border-slate-200"
          }`}
        >
          <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            {editingNews ? "Edit News" : "Create News"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]"
                      : "bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]"
                  }`}
                  placeholder="Enter news title"
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]"
                      : "bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]"
                  }`}
                  placeholder="e.g. Announcement"
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors resize-y ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]"
                    : "bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]"
                }`}
                placeholder="Write full article content"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Published By *
                </label>
                <input
                  type="text"
                  name="published_by"
                  value={formData.published_by}
                  onChange={handleChange}
                  className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]"
                      : "bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]"
                  }`}
                  placeholder="e.g. Principal Office"
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Published Date
                </label>
                <input
                  type="date"
                  name="published_date"
                  value={formData.published_date}
                  onChange={handleChange}
                  className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors ${
                    isDarkMode
                      ? "bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]"
                      : "bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Feature Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={`w-full rounded-lg px-4 py-2 border text-sm outline-none transition-colors ${
                  isDarkMode
                    ? "bg-slate-800 border-slate-700 text-white"
                    : "bg-white border-slate-300 text-slate-900"
                }`}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="News preview"
                  className="mt-3 w-40 h-28 object-cover rounded-lg border border-slate-300"
                />
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                submitting
                  ? "bg-slate-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white hover:shadow-lg"
              }`}
            >
              {submitting ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Newspaper size={16} />
                  {editingNews ? "Update News" : "Publish News"}
                </>
              )}
            </button>
          </form>
        </div>
      )}

      <div
        className={`rounded-2xl p-6 border transition-colors ${
          isDarkMode ? "bg-[#0f1729] border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
          All News ({newsList.length})
        </h2>

        {fetchingNews ? (
          <div className="py-14 flex flex-col items-center justify-center gap-3">
            <Loader size={30} className="text-[#1f4e79] animate-spin" />
            <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>Loading news...</p>
          </div>
        ) : newsList.length === 0 ? (
          <div className={`rounded-xl p-10 text-center ${isDarkMode ? "bg-slate-800/40" : "bg-slate-50"}`}>
            <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>No news created yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {newsList.map((item) => (
              <article
                key={item.id}
                className={`rounded-xl border overflow-hidden transition-all ${
                  isDarkMode ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                        {item.title}
                      </h3>

                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full max-w-md h-48 object-cover rounded-lg mb-4 border border-slate-300/40"
                        />
                      )}

                      <p className={`text-sm leading-6 mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                        {item.description}
                      </p>

                      <div className={`grid md:grid-cols-3 gap-2 text-xs ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                        <div className="flex items-center gap-2">
                          <Tag size={14} className="text-[#1f4e79]" />
                          <span className="font-semibold">Category:</span>
                          <span>{item.category || "General"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-[#1f4e79]" />
                          <span className="font-semibold">Published by:</span>
                          <span>{item.published_by || "Administration"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays size={14} className="text-[#1f4e79]" />
                          <span className="font-semibold">Date:</span>
                          <span>
                            {item.published_date
                              ? new Date(item.published_date).toLocaleDateString()
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => handleEdit(item)}
                        className={`p-2 rounded-lg transition-all ${
                          isDarkMode
                            ? "bg-slate-700 text-white hover:bg-slate-600"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                        title="Edit"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className={`p-2 rounded-lg transition-all ${
                          deletingId === item.id
                            ? "bg-slate-400 text-white cursor-not-allowed"
                            : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                        }`}
                        title="Delete"
                      >
                        {deletingId === item.id ? <Loader size={16} className="animate-spin" /> : <Trash2 size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdminNews;