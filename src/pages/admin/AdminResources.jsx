import { useEffect, useState } from "react";
import axios from "axios";
import {
  Plus,
  X,
  Loader,
  Pencil,
  Trash2,
  Download as DownloadIcon,
  FileText,
  Calendar,
} from "lucide-react";
import { useAdminTheme } from "../../contexts/AdminThemeContext";

const API_URL = "http://localhost:5000/api/resources";

// Helper to format date for <input type="date">
const getDateInputValue = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

// Helper to extract file type label
const getFileTypeLabel = (fileUrl = "") => {
  const cleanUrl = fileUrl.split("?")[0];
  const fileName = cleanUrl.split("/").pop() || "";
  const extension = fileName.includes(".") ? fileName.split(".").pop().toUpperCase() : "";
  return extension || "FILE";
};

const AdminResources = () => {
  const { isDarkMode } = useAdminTheme();
  const [resources, setResources] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingResource, setEditingResource] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    uploaded_date: "",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "success", message: "" }), 3000);
  };

  const fetchResources = async () => {
    try {
      setFetching(true);
      const response = await axios.get(API_URL);
      setResources(response.data || []);
    } catch (error) {
      console.error("Error fetching resources:", error);
      showToast("Error loading resources", "error");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      uploaded_date: "",
    });
    setFileData(null);
    setEditingResource(null);
    setShowForm(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileData(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title) return showToast("Please fill title", "error");
    if (!editingResource && !fileData) return showToast("Please select a file", "error");

    const payload = new FormData();
    payload.append("title", formData.title);
    if (formData.description) payload.append("description", formData.description);
    payload.append("uploaded_date", formData.uploaded_date || new Date().toISOString());
    if (fileData) payload.append("file", fileData);

    try {
      setSubmitting(true);
      if (editingResource) {
        await axios.put(`${API_URL}/${editingResource.id}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("Resource updated successfully");
      } else {
        await axios.post(API_URL, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        showToast("Resource uploaded successfully");
      }
      resetForm();
      fetchResources();
    } catch (error) {
      console.error("Error saving resource:", error);
      showToast(
        `Error ${editingResource ? "updating" : "uploading"} resource: ${
          error.response?.data?.message || error.message
        }`,
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingResource(item);
    setFormData({
      title: item.title || "",
      description: item.description || "",
      uploaded_date: getDateInputValue(item.uploaded_date || item.created_at),
    });
    setFileData(null);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      await axios.delete(`${API_URL}/${id}`);
      showToast("Resource deleted successfully");
      fetchResources();
    } catch (error) {
      console.error("Error deleting resource:", error);
      showToast("Error deleting resource", "error");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}>
      {/* Toast */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white font-medium text-sm animate-slideIn z-50 ${
            toast.type === "error" ? "bg-red-500" : "bg-emerald-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              Resource Management
            </h1>
            <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              Upload, edit, and manage downloadable resources for students
            </p>
          </div>
          <button
            onClick={() => (showForm ? resetForm() : setShowForm(true))}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              showForm
                ? isDarkMode
                  ? "bg-slate-700 text-white hover:bg-slate-600"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
          >
            {showForm ? (
              <>
                <X size={18} /> Cancel
              </>
            ) : (
              <>
                <Plus size={18} /> Upload Resource
              </>
            )}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className={`rounded-lg p-6 mb-8 border transition-colors ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
            <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              {editingResource ? "Edit Resource" : "Upload Resource"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Physics Notes Class 10"
                  className={`w-full rounded-lg px-4 py-2.5 border text-sm outline-none transition-colors ${
                    isDarkMode ? "bg-slate-800 border-slate-700 text-white focus:border-blue-500" : "bg-white border-slate-300 text-slate-900 focus:border-blue-500"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Add a brief description about this resource"
                  className={`w-full rounded-lg px-4 py-2.5 border text-sm outline-none transition-colors resize-none ${
                    isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>Upload Date</label>
                <input
                  type="date"
                  name="uploaded_date"
                  value={formData.uploaded_date}
                  onChange={handleChange}
                  className={`w-full rounded-lg px-4 py-2.5 border text-sm outline-none transition-colors ${
                    isDarkMode ? "bg-slate-800 border-slate-700 text-white focus:border-blue-500" : "bg-white border-slate-300 text-slate-900 focus:border-blue-500"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 font-medium ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>File (PDF, DOC, etc) {!editingResource && "*"}</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${isDarkMode ? "border-slate-700 bg-slate-800/50 hover:border-blue-500 hover:bg-slate-800/70" : "border-slate-300 bg-slate-50 hover:border-blue-500 hover:bg-blue-50"}`}
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  <FileText size={32} className="mx-auto mb-2 text-blue-500" />
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv"
                  />
                  {fileData ? (
                    <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>{fileData.name} ({(fileData.size / 1024 / 1024).toFixed(2)} MB)</p>
                  ) : (
                    <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>Click to upload or drag and drop</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-2.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 ${
                  submitting ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
                }`}
              >
                {submitting && <Loader size={16} className="animate-spin" />}
                {editingResource ? "Update Resource" : "Upload Resource"}
              </button>
            </form>
          </div>
        )}

        {/* Resource List */}
        <div className={`rounded-lg border transition-colors ${isDarkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
          <div className="p-6 border-b">
            <h2 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>All Resources ({resources.length})</h2>
          </div>

          {fetching ? (
            <div className="py-16 flex flex-col items-center justify-center gap-3">
              <Loader size={32} className={`${isDarkMode ? "text-blue-400" : "text-blue-600"} animate-spin`} />
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>Loading resources...</p>
            </div>
          ) : resources.length === 0 ? (
            <div className={`p-10 text-center ${isDarkMode ? "bg-slate-800/40" : "bg-slate-50"}`}>
              <FileText size={40} className={`mx-auto mb-3 ${isDarkMode ? "text-slate-600" : "text-slate-400"}`} />
              <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>No resources uploaded yet.</p>
            </div>
          ) : (
            <div className="divide-y" style={{ borderColor: isDarkMode ? "#1e293b" : "#e2e8f0" }}>
              {resources.map((item) => (
                <div key={item.id} className={`p-5 transition-colors ${isDarkMode ? "hover:bg-slate-800/50" : "hover:bg-slate-50"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3">
                        <FileText size={20} className={`mt-1 shrink-0 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-base font-semibold mb-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                          {item.description && (
                            <p className={`text-sm mb-2 line-clamp-1 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{item.description}</p>
                          )}
                          <div className="flex flex-wrap gap-3 items-center text-xs">
                            <div className={`flex items-center gap-1 px-3 py-1.5 rounded ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
                              <Calendar size={12} />
                              <span>{item.uploaded_date || item.created_at ? new Date(item.uploaded_date || item.created_at).toLocaleDateString() : "N/A"}</span>
                            </div>
                            {item.file_url && (
                              <a
                                href={item.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors ${isDarkMode ? "bg-blue-900/30 text-blue-300 hover:bg-blue-900/50" : "bg-blue-50 text-blue-700 hover:bg-blue-100"}`}
                              >
                                <DownloadIcon size={12} />
                                <span>{getFileTypeLabel(item.file_url)}</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <button onClick={() => handleEdit(item)} className={`p-2 rounded-lg transition-colors ${isDarkMode ? "bg-slate-800 text-blue-400 hover:bg-slate-700" : "bg-slate-100 text-blue-600 hover:bg-slate-200"}`} title="Edit">
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                        className={`p-2 rounded-lg transition-colors ${deletingId === item.id ? "bg-slate-400 text-white cursor-not-allowed" : isDarkMode ? "bg-slate-800 text-red-400 hover:bg-slate-700" : "bg-slate-100 text-red-600 hover:bg-slate-200"}`}
                        title="Delete"
                      >
                        {deletingId === item.id ? <Loader size={18} className="animate-spin" /> : <Trash2 size={18} />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slideIn { animation: slideIn 0.3s ease-out; }
      `}</style>
    </div>
  );
};

export default AdminResources;