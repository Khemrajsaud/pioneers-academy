import { useEffect, useState } from "react";
import axios from "axios";
import { Newspaper, Loader2, CalendarDays, UserRound, Tag, AlertCircle, Eye, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

const ResourceNews = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewedNewsIds, setViewedNewsIds] = useState(new Set());

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
    if (plainText.length <= 150) return plainText;
    return `${plainText.slice(0, 150)}...`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg)] transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[color:var(--text)] tracking-tight mb-4">
            {language === "ne" ? "समाचार र लेखहरू" : "News & Articles"}
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {language === "ne"
              ? "विद्यालयका नवीनतम समाचार, घोषणा र जानकारी"
              : "Latest school updates, announcements, and insightful article-style stories."}
          </p>
        </motion.div>

        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
            <Loader2 className="animate-spin text-[color:var(--primary)]" size={48} />
            <p className="text-lg text-[color:var(--muted)] animate-pulse">
              {language === "ne" ? "समाचार लोड हुँदैछ..." : "Loading news..."}
            </p>
          </div>
        )}

        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto rounded-2xl p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 flex items-center gap-4 text-red-600 dark:text-red-400"
          >
            <AlertCircle size={24} className="flex-shrink-0" />
            <p className="text-base font-medium m-0">{error}</p>
          </motion.div>
        )}

        {!loading && !error && news.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-center p-12 bg-[color:var(--card)] rounded-3xl border border-[color:var(--border)] shadow-sm"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[color:var(--bg-alt)] flex items-center justify-center text-[color:var(--muted)]/50">
              <Newspaper size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[color:var(--text)]">
              {language === "ne" ? "अहिलेसम्म कुनै समाचार छैन" : "No news available yet"}
            </h3>
            <p className="text-[color:var(--muted)] text-lg h-auto">
              {language === "ne" ? "कृपया पछि फर्केर हेर्नुहोस्।" : "Check back later for updates and articles."}
            </p>
          </motion.div>
        )}

        {!loading && !error && news.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {news.map((item) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                onMouseEnter={() => incrementViewCount(item.id)}
                onClick={() => navigate(`/news/${item.id}`)}
                className="group flex flex-col rounded-3xl border border-[color:var(--border)] overflow-hidden bg-[color:var(--card)] hover:border-[color:var(--primary)]/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-56 md:h-64 w-full overflow-hidden bg-[color:var(--bg-alt)] shrink-0">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[color:var(--muted)]/30">
                      <Newspaper size={64} />
                    </div>
                  )}
                  {/* Category Badge overlaying image */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[color:var(--primary)] text-white shadow-md">
                      {item.category || (language === "ne" ? "सामान्य" : "General")}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-[color:var(--card)]/10 to-transparent opacity-80"></div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6 sm:p-8 relative z-10 bg-[color:var(--card)] -mt-6">
                  {/* Date and Views */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[color:var(--muted)] mb-4">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-[color:var(--primary)]" />
                      <span>{formatDate(item.published_date)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[color:var(--bg-alt)] px-2 py-1 rounded-full">
                      <Eye size={12} className="text-[color:var(--primary)]" />
                      <span>{item.view_count || 0}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-3 text-[color:var(--text)] line-clamp-2 group-hover:text-[color:var(--primary)] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-[color:var(--muted)] mb-6 flex-grow line-clamp-3">
                    {getPreviewText(item.description)}
                  </p>

                  {/* Footer of Card */}
                  <div className="mt-auto pt-4 border-t border-[color:var(--border)] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-[color:var(--muted)] truncate max-w-[60%]">
                      <div className="w-6 h-6 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center shrink-0">
                        <UserRound size={12} className="text-[color:var(--primary)]" />
                      </div>
                      <span className="truncate">{item.published_by || (language === "ne" ? "प्रशासन" : "Administration")}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-bold text-[color:var(--primary)] group-hover:translate-x-1 transition-transform">
                      {language === "ne" ? "पढ्नुहोस्" : "Read More"}
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResourceNews;