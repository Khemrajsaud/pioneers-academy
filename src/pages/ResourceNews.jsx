import { useEffect, useState } from "react";
import axios from "axios";
import { Newspaper, Loader2, CalendarDays, UserRound, Tag, AlertCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/news";

const ResourceNews = () => {
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
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

  const formatDate = (date) => {
    if (!date) return language === "ne" ? "मिति उपलब्ध छैन" : "Date not available";
    return new Date(date).toLocaleDateString(language === "ne" ? "ne-NP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className={`min-h-screen py-10 px-4 transition-colors ${isDarkMode ? "bg-[#0b1220]" : "bg-slate-100"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-3">
            <Newspaper size={34} className="text-[#1f4e79]" />
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
              {language === "ne" ? "समाचार र लेखहरू" : "News & Articles"}
            </h1>
          </div>
          <p className={`text-sm md:text-base ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
            {language === "ne"
              ? "विद्यालयका नवीनतम समाचार, घोषणा र जानकारी"
              : "Latest school updates, announcements and article-style stories"}
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <Loader2 className="animate-spin text-[#1f4e79]" size={40} />
            <p className={isDarkMode ? "text-slate-300" : "text-slate-700"}>
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
            isDarkMode ? "bg-[#111a2e] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
          }`}>
            {language === "ne" ? "अहिलेसम्म कुनै समाचार उपलब्ध छैन।" : "No news available yet."}
          </div>
        )}

        {!loading && !error && news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className={`rounded-2xl border overflow-hidden transition-all hover:-translate-y-1 ${
                  isDarkMode
                    ? "bg-[#111a2e] border-slate-800 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                    : "bg-white border-slate-200 hover:shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
                }`}
              >
                <div className="p-5 pb-3">
                  <h2 className={`text-xl font-bold leading-snug ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h2>
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
                  <p className={`text-sm leading-7 mb-4 ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {item.description}
                  </p>

                  <div className={`grid gap-2 text-xs ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-[#1f4e79]" />
                      <span className="font-medium">
                        {language === "ne" ? "श्रेणी:" : "Category:"}
                      </span>
                      <span>{item.category || (language === "ne" ? "सामान्य" : "General")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <UserRound size={14} className="text-[#1f4e79]" />
                      <span className="font-medium">
                        {language === "ne" ? "प्रकाशित:" : "Published by:"}
                      </span>
                      <span>{item.published_by || (language === "ne" ? "प्रशासन" : "Administration")}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays size={14} className="text-[#1f4e79]" />
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