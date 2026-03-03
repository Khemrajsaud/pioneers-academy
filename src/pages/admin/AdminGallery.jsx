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

const API_URL = "http://localhost:5000/api/gallery";

function AdminGallery() {
  const { isDarkMode } = useAdminTheme();
  
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Fetch gallery images
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setGallery(res.data);
    } catch (err) {
      showToast('Error loading gallery images', 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000);
  };

  // Handle image selection
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

  // Upload Image
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
      
      showToast('Image uploaded successfully!', 'success');
      setTitle("");
      setImage(null);
      setImagePreview(null);
      setShowForm(false);
      fetchGallery();
    } catch (err) {
      showToast('Failed to upload image', 'error');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  // Delete Image with confirmation
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      setDeleting(id);
      await axios.delete(`${API_URL}/${id}`);
      showToast('Image deleted successfully!', 'success');
      fetchGallery();
    } catch (err) {
      showToast('Failed to delete image', 'error');
      console.error(err);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div>
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-medium text-sm animate-slideIn z-50 ${
          toast.type === 'success' 
            ? 'bg-green-500' 
            : 'bg-red-500'
        }`}>
          {toast.message}
        </div>
      )}

      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Gallery Management
          </h1>
          <p className={`text-sm ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Upload and manage school gallery images
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
            showForm
              ? isDarkMode
                ? 'bg-slate-700 text-white hover:bg-slate-600'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              : 'bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white hover:shadow-lg'
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
              Upload Image
            </>
          )}
        </button>
      </div>

      {/* Upload Form Section */}
      {showForm && (
        <div className={`rounded-2xl p-6 mb-8 border transition-colors ${
          isDarkMode 
            ? 'bg-[#0f1729] border-slate-800' 
            : 'bg-white border-slate-200'
        }`}>
          <h2 className={`text-lg font-bold mb-6 flex items-center gap-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <Upload size={20} />
            Upload New Image
          </h2>

          <form onSubmit={handleUpload}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Title Input */}
              <div>
                <label className={`block mb-2 font-medium text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Image Title *
                </label>
                <input
                  type="text"
                  placeholder="Enter image title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={`w-full px-4 py-2 rounded-lg border text-sm transition-all ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700 text-white focus:border-[#1f4e79]'
                      : 'bg-white border-slate-300 text-slate-900 focus:border-[#1f4e79]'
                  } focus:outline-none`}
                />
              </div>

              {/* File Input */}
              <div>
                <label className={`block mb-2 font-medium text-sm ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Select Image *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={`w-full px-4 py-2 rounded-lg border text-sm transition-all cursor-pointer ${
                    isDarkMode
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-6 relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs max-h-64 rounded-lg border-2 border-[#1f4e79]"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setImagePreview(null);
                  }}
                  className="absolute -top-3 -right-3 bg-red-500/20 hover:bg-red-500/30 text-red-600 p-2 rounded-full transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Upload Button */}
            <button
              type="submit"
              disabled={uploading}
              className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                uploading
                  ? 'bg-slate-400 text-white cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#1f4e79] to-[#143654] text-white hover:shadow-lg'
              }`}
            >
              {uploading ? (
                <>
                  <Loader size={16} className="animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload Image
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Gallery Section */}
      <div className={`rounded-2xl p-6 border transition-colors ${
        isDarkMode 
          ? 'bg-[#0f1729] border-slate-800' 
          : 'bg-white border-slate-200'
      }`}>
        <h2 className={`text-lg font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Gallery Images ({gallery.length})
        </h2>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-64 gap-4">
            <Loader size={40} className="text-[#1f4e79] animate-spin" />
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Loading gallery...
            </p>
          </div>
        ) : gallery.length === 0 ? (
          <div className={`text-center py-12 rounded-lg ${
            isDarkMode ? 'bg-slate-800/50' : 'bg-slate-50'
          }`}>
            <ImageIcon size={48} className={`mx-auto mb-4 opacity-40 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-400'
            }`} />
            <h3 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              No Images Yet
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Upload your first image to get started
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl border overflow-hidden transition-all hover:scale-[1.02] ${
                  isDarkMode
                    ? 'border-slate-700 bg-slate-800/50'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full pt-[75%] bg-slate-300 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className={`font-bold text-sm mb-4 truncate ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleting === item.id}
                    className={`w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      deleting === item.id
                        ? 'bg-slate-400 text-white cursor-not-allowed'
                        : 'bg-red-500/10 text-red-600 hover:bg-red-500/20'
                    }`}
                  >
                    {deleting === item.id ? (
                      <>
                        <Loader size={14} className="animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 size={14} />
                        Delete
                      </>
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

        @media (max-width: 640px) {
          .grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminGallery;