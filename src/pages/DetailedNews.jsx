import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  Loader2,
  CalendarDays,
  UserRound,
  Tag,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Share2,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/news";

const DetailedNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") || localStorage.getItem("adminTheme");
      return saved === "dark";
    }
    return false;
  });

  useEffect(() => {
    const syncTheme = () => {
      const saved = localStorage.getItem("theme") || localStorage.getItem("adminTheme");
      setIsDarkMode(saved === "dark");
    };

    syncTheme();
    window.addEventListener("storage", syncTheme);
    document.addEventListener("visibilitychange", syncTheme);
    const timer = setInterval(syncTheme, 500);

    return () => {
      window.removeEventListener("storage", syncTheme);
      document.removeEventListener("visibilitychange", syncTheme);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(`${API_URL}/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(language === "ne" ? "समाचार लोड गर्न सकिएन" : "Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNews();
      // Increment view count
      axios.patch(`${API_URL}/${id}/view`).catch(err => console.error(err));
    }
  }, [id, language]);

  const formatDate = (date) => {
    if (!date) return language === "ne" ? "मिति उपलब्ध छैन" : "Date not available";
    return new Date(date).toLocaleDateString(language === "ne" ? "ne-NP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const currentUrl = `${window.location.origin}/news/${id}`;

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600 hover:bg-blue-600/10",
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "text-sky-400 hover:bg-sky-400/10",
      onClick: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(news?.title)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700 hover:bg-blue-700/10",
      onClick: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Email",
      icon: Mail,
      color: "text-orange-600 hover:bg-orange-600/10",
      onClick: () => {
        const subject = `Check out: ${news?.title}`;
        const body = `I found this interesting article: ${news?.title}\n\n${currentUrl}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      },
    },
  ];

  if (loading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors ${
          isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f5f7fa]"
        }`}
      >
        <Loader2 className="animate-spin text-[#1a73e8]" size={40} />
        <p className={`mt-3 ${isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}`}>
          {language === "ne" ? "समाचार लोड हुँदैछ..." : "Loading news..."}
        </p>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors ${
          isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f5f7fa]"
        }`}
      >
        <div
          className={`rounded-lg p-6 border flex items-center gap-3 max-w-md ${
            isDarkMode
              ? "bg-red-500/10 border-red-500/30 text-red-300"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
        <button
          onClick={() => navigate("/resources/news")}
          className="mt-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a73e8] text-white hover:bg-[#1765cc] transition-colors"
        >
          <ArrowLeft size={18} />
          Back to News
        </button>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-8 px-4 transition-colors ${
        isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f5f7fa]"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/resources/news")}
          className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "bg-[#1e1e1e] border border-[#2d2d2d] text-[#e0e0e0] hover:bg-[#252525]"
              : "bg-white text-[#1a1a1a] hover:bg-[#fafbfc] border border-[#e8eaed]"
          }`}
        >
          <ArrowLeft size={18} />
          {language === "ne" ? "पछाडि" : "Back"}
        </button>

        {/* Article Container */}
        <article
          className={`rounded-2xl border overflow-hidden transition-colors ${
            isDarkMode
              ? "bg-[#1e1e1e] border-[#2d2d2d]"
              : "bg-white border-[#e8eaed]"
          }`}
        >
          {/* Featured Image */}
          {news.image_url && (
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full h-96 object-cover"
            />
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${
                isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"
              }`}
            >
              {news.title}
            </h1>

            {/* Meta Info */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pb-8 border-b ${
                isDarkMode ? "border-[#2d2d2d] text-[#9aa0a6]" : "border-[#e8eaed] text-[#5f6368]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-[#1a73e8]" />
                <div>
                  <div
                    className={`text-xs font-medium uppercase tracking-wide ${
                      isDarkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {language === "ne" ? "श्रेणी" : "Category"}
                  </div>
                  <div className={isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}>
                    {news.category || (language === "ne" ? "सामान्य" : "General")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <UserRound size={16} className="text-[#1a73e8]" />
                <div>
                  <div
                    className={`text-xs font-medium uppercase tracking-wide ${
                      isDarkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {language === "ne" ? "प्रकाशित" : "Published By"}
                  </div>
                  <div className={isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}>
                    {news.published_by || (language === "ne" ? "प्रशासन" : "Administration")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-[#1a73e8]" />
                <div>
                  <div
                    className={`text-xs font-medium uppercase tracking-wide ${
                      isDarkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {language === "ne" ? "मिति" : "Date"}
                  </div>
                  <div className={isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}>
                    {formatDate(news.published_date)}
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div
              className={`news-content prose prose-sm md:prose-base max-w-none mb-12 leading-relaxed ${
                isDarkMode
                  ? "text-[#e0e0e0] prose-invert"
                  : "text-[#1a1a1a]"
              }`}
              dangerouslySetInnerHTML={{ __html: news.description }}
            />
          </div>

          {/* Social Share Section */}
          <div
            className={`border-t py-12 px-8 md:px-12 ${
              isDarkMode ? "border-[#2d2d2d] bg-[#252525]" : "border-[#e8eaed] bg-[#fafbfc]"
            }`}
          >
            <div className="text-center mb-8">
              <h2
                className={`text-2xl font-bold mb-2 flex items-center justify-center gap-2 ${
                  isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"
                }`}
              >
                <Share2 size={24} className="text-[#1a73e8]" />
                {language === "ne" ? "साझेदारी गर्नुहोस्" : "Share this article"}
              </h2>
              <p className={isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}>
                {language === "ne"
                  ? "यो रोचक लेख साझेदारी गर्नुहोस्"
                  : "Share this interesting article with your network"}
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {shareButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <button
                    key={btn.name}
                    onClick={btn.onClick}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all transform hover:scale-105 ${
                      isDarkMode
                        ? `bg-[#1e1e1e] border border-[#2d2d2d] ${btn.color} hover:shadow-lg`
                        : `bg-white border-2 border-[#e8eaed] ${btn.color} hover:shadow-lg`
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-semibold text-sm">{btn.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </article>
      </div>

      <style>{`
        .news-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .news-content ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .news-content li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }
        .news-content strong {
          font-weight: 700;
          color: ${isDarkMode ? "#f1f5f9" : "#0f172a"};
        }
        .news-content em {
          font-style: italic;
        }
        .news-content u {
          text-decoration: underline;
        }
        .news-content p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
      `}</style>
    </div>
  );
};

export default DetailedNews;
