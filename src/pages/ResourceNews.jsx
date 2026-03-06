import { useEffect, useState } from "react";
import axios from "axios";
import { Newspaper, Loader2, CalendarDays, UserRound, Tag, AlertCircle, Eye } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api/news";

const ResourceNews = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewedNewsIds, setViewedNewsIds] = useState(new Set());

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
        const res = await axios.get(API_URL);
        setNews(res.data || []);
      } catch (fetchError) {
        console.error("Error fetching news:", fetchError);
        setError(language === "ne" ? "समाचार लोड गर्न सकिएन" : "Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [language]);

  const incrementViewCount = async (newsId) => {
    if (viewedNewsIds.has(newsId)) return;
    
    try {
      setViewedNewsIds(prev => new Set([...prev, newsId]));
      await axios.patch(`${API_URL}/${newsId}/view`);
      
      // Update the news list with new view count
      setNews(prevNews =>
        prevNews.map(item =>
          item.id === newsId ? { ...item, view_count: (item.view_count || 0) + 1 } : item
        )
      );
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  const formatDate = (date) => {
    if (!date) return language === "ne" ? "मिति उपलब्ध छैन" : "Date not available";
    return new Date(date).toLocaleDateString(language === "ne" ? "ne-NP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getPreviewText = (html = "") => {
    const plainText = html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    if (plainText.length <= 180) return plainText;
    return `${plainText.slice(0, 180)}...`;
  };

  return (
    <div className={`min-h-screen py-10 px-4 transition-colors ${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f5f7fa]"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <Newspaper size={34} className="text-[#1a73e8]" />
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}`}>
              {language === "ne" ? "समाचार र लेखहरू" : "News & Articles"}
            </h1>
          </div>
          <p className={`text-sm md:text-base ${isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}`}>
            {language === "ne"
              ? "विद्यालयका नवीनतम समाचार, घोषणा र जानकारी"
              : "Latest school updates, announcements and article-style stories"}
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <Loader2 className="animate-spin text-[#1a73e8]" size={40} />
            <p className={isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}>
              {language === "ne" ? "समाचार लोड हुँदैछ..." : "Loading news..."}
            </p>
          </div>
        )}

        {!loading && error && (
          <div className={`rounded-xl p-4 mb-6 border flex items-center gap-3 ${
            isDarkMode ? "bg-red-500/10 border-red-500/30 text-red-300" : "bg-red-50 border-red-200 text-red-700"
          }`}>
            <AlertCircle size={18} />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && news.length === 0 && (
          <div className={`rounded-2xl p-8 border text-center ${
            isDarkMode ? "bg-[#1e1e1e] border-[#2d2d2d] text-[#9aa0a6]" : "bg-white border-[#e8eaed] text-[#5f6368]"
          }`}>
            {language === "ne" ? "अहिलेसम्म कुनै समाचार उपलब्ध छैन।" : "No news available yet."}
          </div>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                onMouseEnter={() => incrementViewCount(item.id)}
                onClick={() => navigate(`/news/${item.id}`)}
                className={`rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-[#1e1e1e] border-[#2d2d2d] hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                    : "bg-white border-[#e8eaed] hover:shadow-[0_8px_16px_rgba(60,64,67,0.2)]"
                } cursor-pointer`}
              >
                <div className="p-5 pb-3">
                  <h2 className={`text-xl font-bold leading-snug mb-2 ${isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}`}>
                    {item.title}
                  </h2>
                  <div className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}`}>
                    <Eye size={14} />
                    <span>{item.view_count || 0} {language === "ne" ? "दृश्य" : "views"}</span>
                  </div>
                </div>

                {item.image_url && (
                  <div className="px-5 pb-4">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                  </div>
                )}

                <div className="px-5 pb-5">
                  <p className={`text-sm leading-7 mb-4 ${isDarkMode ? "text-[#e0e0e0]" : "text-[#1a1a1a]"}`}>
                    {getPreviewText(item.description)}
                  </p>
                  <p className="text-xs font-semibold text-[#1a73e8]">
                    {language === "ne" ? "पूरा समाचार पढ्न क्लिक गर्नुहोस्" : "Click to read full news"}
                  </p>

                  <div className={`grid gap-2 text-xs ${isDarkMode ? "text-[#9aa0a6]" : "text-[#5f6368]"}`}>
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-[#1a73e8]" />
                      <span className="font-medium">
                        {language === "ne" ? "श्रेणी:" : "Category:"}
                      </span>
                      <span>{item.category || (language === "ne" ? "सामान्य" : "General")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <UserRound size={14} className="text-[#1a73e8]" />
                      <span className="font-medium">
                        {language === "ne" ? "प्रकाशित:" : "Published by:"}
                      </span>
                      <span>{item.published_by || (language === "ne" ? "प्रशासन" : "Administration")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#1a73e8]" />
                      <span className="font-medium">
                        {language === "ne" ? "मिति:" : "Date:"}
                      </span>
                      <span>{formatDate(item.published_date)}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default ResourceNews;