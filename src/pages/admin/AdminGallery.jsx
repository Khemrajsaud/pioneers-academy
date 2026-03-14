import { useEffect, useState } from "react";
import axios from "axios";
import {
  Upload,
  Trash2,
  Image as ImageIcon,
  Loader,
  Plus,
  X
} from "lucide-react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";

// const API_URL = `${import.meta.env.VITE_API_URL}/api/gallery`;

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/gallery`;


function AdminGallery() {
  const { isDarkMode } = useAdminTheme();
  const { t } = useLanguage();

  // --- STATE ---
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // --- EFFECTS ---
  useEffect(() => {
    fetchGallery();
  }, []);

  /**
   * Fetches the current list of gallery images from the server.
   */
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setGallery(res.data || []);
    } catch (err) {
      showToast(t.admin.common.error, 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Utility to show brief notification messages.
   */
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  /**
   * Validates and prepares image for upload.
   */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image size must be less than 5MB', 'error');
        return;
      }
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  /**
   * Handles multi-part form submission to the API.
   */
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title.trim() || !image) {
      showToast('Please enter title and select an image', 'error');
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("image", image);

    try {
      setUploading(true);
      await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      showToast(t.admin.gallery.success, 'success');
      setTitle("");
      setImage(null);
      setImagePreview(null);
      setShowForm(false);
      fetchGallery();
    } catch (err) {
      showToast(t.admin.common.error, 'error');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  /**
   * Deletes a record after confirmation.
   */
  const handleDelete = async (id) => {
    if (!window.confirm(t.admin.gallery.deleteConfirm)) {
      return;
    }

    try {
      setDeleting(id);
      await axios.delete(`${API_URL}/${id}`);
      showToast(t.admin.gallery.deleted, 'success');
      fetchGallery();
    } catch (err) {
      showToast(t.admin.common.error, 'error');
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Toast Notification Box */}
      {toast.show && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-bold text-sm shadow-2xl animate-slideIn z-70 border border-white/10 ${toast.type === 'success'
          ? 'bg-emerald-600'
          : 'bg-red-600'
          }`}>
          {toast.message}
        </div>
      )}

      {/* Hero Header Area */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className={`text-3xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {t.admin.gallery.title}
          </h1>
          <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
            }`}>
            {t.admin.gallery.subtitle}
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all shadow-md active:scale-95 ${showForm
            ? isDarkMode
              ? 'bg-slate-800 text-white hover:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-linear-to-r from-blue-700 to-indigo-800 text-white hover:shadow-lg hover:shadow-blue-500/20'
            }`}
        >
          {showForm ? (
            <><X size={18} /> {t.admin.common.cancel}</>
          ) : (
            <><Plus size={18} /> {t.admin.gallery.uploadTitle}</>
          )}
        </button>
      </div>

      {/* Collapsible Form for New Uploads */}
      {showForm && (
        <div className={`rounded-2xl p-6 mb-8 border shadow-sm animate-fadeIn ${isDarkMode
          ? 'bg-[#0f1729] border-slate-800'
          : 'bg-white border-slate-200'
          }`}>
          <h2 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            <Upload size={20} className="text-blue-500" />
            {t.admin.gallery.uploadTitle}
          </h2>

          <form onSubmit={handleUpload}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Image Identity */}
              <div>
                <label className={`block mb-2 font-bold text-xs uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                  {t.admin.gallery.imageTitle} *
                </label>
                <input
                  type="text"
                  placeholder="Enter title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${isDarkMode
                    ? 'bg-slate-800/50 border-slate-700 text-white focus:border-blue-500'
                    : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                />
              </div>

              {/* Resource Source */}
              <div>
                <label className={`block mb-2 font-bold text-xs uppercase tracking-wider ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                  {t.admin.gallery.selectImage} *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-black file:bg-blue-600 file:text-white ${isDarkMode
                    ? 'bg-slate-800/50 border-slate-700 text-slate-400'
                    : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                />
              </div>
            </div>

            {/* Visual Preview Container */}
            {imagePreview && (
              <div className="mb-6 relative inline-block group">
                <img
                  src={imagePreview}
                  alt="Internal Preview"
                  className="max-w-xs max-h-64 rounded-xl border-2 border-dashed border-blue-500/50 p-1"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                  className="absolute -top-3 -right-3 bg-red-600 text-white p-2 rounded-full shadow-lg transition-all scale-0 group-hover:scale-100"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Submission Mechanism */}
            <button
              type="submit"
              disabled={uploading}
              className={`px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${uploading
                ? 'bg-slate-400 text-white cursor-not-allowed opacity-50'
                : 'bg-linear-to-r from-blue-700 to-indigo-800 text-white hover:shadow-lg'
                }`}
            >
              {uploading ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  {t.admin.gallery.uploading}
                </>
              ) : (
                <>
                  <Upload size={16} />
                  {t.admin.common.upload}
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Main Asset Management Section */}
      <div className={`rounded-2xl p-6 border transition-colors ${isDarkMode
        ? 'bg-[#0f1729] border-slate-800'
        : 'bg-white border-slate-200'
        }`}>
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-(--border)">
          <h2 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {t.nav.gallery} <span className="text-sm font-normal text-(--muted) ml-2">({gallery.length})</span>
          </h2>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <Loader size={40} className="text-blue-500 animate-spin" />
            <p className={`text-sm font-bold tracking-widest uppercase opacity-60 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.admin.common.loading}
            </p>
          </div>
        ) : gallery.length === 0 ? (
          <div className={`text-center py-20 rounded-2xl border-2 border-dashed ${isDarkMode ? 'border-slate-800' : 'border-slate-100 bg-slate-50/50'
            }`}>
            <ImageIcon size={64} className={`mx-auto mb-4 opacity-20 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`} />
            <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.admin.gallery.noImages}
            </h3>
            <p className={`text-sm opacity-60 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Upload assets to start building your gallery.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className={`group rounded-2xl border overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px] ${isDarkMode
                  ? 'border-slate-800 bg-slate-900/50'
                  : 'border-slate-100 bg-white shadow-sm'
                  }`}
              >
                {/* Visual Content Module */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Meta & Controls Module */}
                <div className="p-5">
                  <h3 className={`font-bold text-sm mb-5 truncate leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                    {item.title}
                  </h3>

                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleting === item.id}
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${deleting === item.id
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-red-500/10 text-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-500/20'
                      }`}
                  >
                    {deleting === item.id ? (
                      <><Loader size={14} className="animate-spin" /> processing</>
                    ) : (
                      <><Trash2 size={14} /> {t.admin.common.delete}</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
}

export default AdminGallery;