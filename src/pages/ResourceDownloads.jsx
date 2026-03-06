import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, Download, FileText, Loader, Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

function ResourceDownloads() {
  const { language } = useLanguage();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadingId, setDownloadingId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof document !== "undefined") {
      const attrTheme = document.documentElement.getAttribute("data-theme");
      if (attrTheme) return attrTheme === "dark";
    }
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const updateThemeFromNavbar = () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") ||
        localStorage.getItem("theme") ||
        "light";
      setIsDarkMode(currentTheme === "dark");
    };

    updateThemeFromNavbar();

    const observer = new MutationObserver(updateThemeFromNavbar);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/resources");
      setResources(res.data || []);
    } catch (error) {
      console.error("Error fetching resources:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const getFileTypeLabel = (fileUrl = "") => {
    const cleanUrl = fileUrl.split("?")[0];
    const fileName = cleanUrl.split("/").pop() || "";
    if (!fileName.includes(".")) return "FILE";
    return fileName.split(".").pop().toUpperCase();
  };

  const getFileTypeColor = (fileUrl = "") => {
    const ext = getFileTypeLabel(fileUrl).toLowerCase();
    const colorMap = {
      pdf: "bg-red-500",
      doc: "bg-blue-500",
      docx: "bg-blue-500",
      xls: "bg-emerald-500",
      xlsx: "bg-emerald-500",
      ppt: "bg-orange-500",
      pptx: "bg-orange-500",
      txt: "bg-slate-500",
      zip: "bg-amber-600",
      rar: "bg-amber-600",
      jpg: "bg-fuchsia-500",
      jpeg: "bg-fuchsia-500",
      png: "bg-fuchsia-500",
    };
    return colorMap[ext] || "bg-blue-600";
  };

  const handleDownload = async (item) => {
    if (!item?.file_url) return;

    try {
      setDownloadingId(item.id);
      const response = await axios.get(item.file_url, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", item.title || "resource-file");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resource:", error);
    } finally {
      setDownloadingId(null);
    }
  };

  const filteredResources = resources.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item?.title?.toLowerCase().includes(query) ||
      item?.description?.toLowerCase().includes(query)
    );
  });

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? "bg-slate-950" : "bg-slate-50"}`}>
      <section className={`border-b transition-colors ${isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                {language === "ne" ? "स्रोत डाउनलोड" : "Resource Downloads"}
              </h1>
              <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                {language === "ne"
                  ? "अध्ययनका लागि आवश्यक फाइलहरू डाउनलोड गर्नुहोस्"
                  : "Download important study files and materials"}
              </p>
              <div className={`mt-4 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm ${isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"}`}>
                {language === "ne" ? "कुल स्रोत:" : "Total resources:"} {resources.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="max-w-2xl mb-8">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`} size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={language === "ne" ? "स्रोत खोज्नुहोस्..." : "Search resources..."}
              className={`w-full rounded-lg border pl-11 pr-4 py-3 text-sm outline-none transition-colors ${
                isDarkMode
                  ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500"
                  : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500"
              }`}
            />
          </div>
        </div>

        {loading ? (
          <div className="py-20 flex flex-col items-center gap-3">
            <Loader className="animate-spin text-blue-500" size={34} />
            <p className={`${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              {language === "ne" ? "स्रोत लोड हुँदैछ..." : "Loading resources..."}
            </p>
          </div>
        ) : filteredResources.length === 0 ? (
          <div className={`rounded-lg border-2 border-dashed p-12 text-center ${isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-300 bg-white"}`}>
            <FileText size={40} className={`mx-auto mb-3 ${isDarkMode ? "text-slate-600" : "text-slate-400"}`} />
            <p className={`${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
              {searchQuery
                ? language === "ne"
                  ? "मिल्ने स्रोत भेटिएन"
                  : "No matching resources found"
                : language === "ne"
                ? "अहिले कुनै स्रोत उपलब्ध छैन"
                : "No resources available right now"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <article
                key={item.id}
                className={`rounded-lg border p-5 transition-all ${
                  isDarkMode
                    ? "border-slate-700 bg-slate-900 hover:bg-slate-800"
                    : "border-slate-200 bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`${getFileTypeColor(item.file_url)} rounded-lg p-2.5 text-white`}>
                    <FileText size={18} />
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold text-white ${getFileTypeColor(item.file_url)}`}>
                    {getFileTypeLabel(item.file_url)}
                  </span>
                </div>

                <h3 className={`mt-4 text-base font-bold line-clamp-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                  {item.title}
                </h3>

                {item.description ? (
                  <p className={`mt-2 text-sm line-clamp-2 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                ) : null}

                <div className={`mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"}`}>
                  <Calendar size={14} />
                  <span>
                    {new Date(item.uploaded_date || item.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <button
                  onClick={() => handleDownload(item)}
                  disabled={downloadingId === item.id}
                  className={`mt-5 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2 ${
                    downloadingId === item.id
                      ? "bg-slate-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {downloadingId === item.id ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      <span>{language === "ne" ? "डाउनलोड हुँदैछ..." : "Downloading..."}</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>{language === "ne" ? "डाउनलोड" : "Download"}</span>
                    </>
                  )}
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default ResourceDownloads;