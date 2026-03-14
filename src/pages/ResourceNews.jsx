import { useEffect, useState } from "react";
import axios from "axios";
import { Newspaper, Loader2, CalendarDays, UserRound, AlertCircle, Eye, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

/**
 * ResourceNews component for displaying a list of news articles and school updates
 */
const ResourceNews = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [viewedNewsIds, setViewedNewsIds] = useState(new Set());

  /**
   * Fetches news data from the API and handles loading/error states
   */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(API_URL);
        setNews(res.data || []);
      } catch (fetchError) {
        console.error("Error fetching news:", fetchError);
        setError(t.news.error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [t.news.error]);

  /**
   * Tracks and increments view count for a specific news item
   * Utilizes a local Set to prevent multiple increments in a single session
   */
  const incrementViewCount = async (newsId) => {
    if (viewedNewsIds.has(newsId)) return;

    try {
      setViewedNewsIds(prev => new Set([...prev, newsId]));
      await axios.patch(`${API_URL}/${newsId}/view`);

      // Optimistic UI update for the view count
      setNews(prevNews =>
        prevNews.map(item =>
          item.id === newsId ? { ...item, view_count: (item.view_count || 0) + 1 } : item
        )
      );
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  /**
   * Formats a date string according to the current language locale
   */
  const formatDate = (date) => {
    if (!date) return t.news.dateNotAvailable;
    return new Date(date).toLocaleDateString(language === "ne" ? "ne-NP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  /**
   * Cleans HTML content and provides a truncated preview string
   */
  const getPreviewText = (html = "") => {
    const plainText = html.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
    if (plainText.length <= 150) return plainText;
    return `${plainText.slice(0, 150)}...`;
  };

  /**
   * Animation definitions for consistent staggered reveals
   */
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
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-(--bg) transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Page Identity Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-3xl font-extrabold text-(--text) tracking-tight mb-4">
            {t.news.hero}
          </h1>
          <p className="text-sm text-(--muted) max-w-2xl mx-auto leading-relaxed">
            {t.news.subtitle}
          </p>
        </motion.div>

        {/* Dynamic State: Loading Indicator */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
            <Loader2 className="animate-spin text-(--primary)" size={48} />
            <p className="text-lg text-(--muted) animate-pulse">
              {t.news.loading}
            </p>
          </div>
        )}

        {/* Dynamic State: Specific Error Feedback */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto rounded-2xl p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 flex items-center gap-4 text-red-600 dark:text-red-400"
          >
            <AlertCircle size={24} className="shrink-0" />
            <p className="text-base font-medium m-0">{error}</p>
          </motion.div>
        )}

        {/* Dynamic State: Empty Repository Placeholder */}
        {!loading && !error && news.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-center p-12 bg-(--card) rounded-3xl border border-(--border) shadow-sm"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-(--bg-alt) flex items-center justify-center text-(--muted)/50">
              <Newspaper size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-(--text)">
              {t.news.noNews}
            </h3>
            <p className="text-(--muted) text-lg h-auto">
              {t.news.noNewsDetail}
            </p>
          </motion.div>
        )}

        {/* Primary Content: News Articles Grid */}
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
                className="group flex flex-col rounded-3xl border border-(--border) overflow-hidden bg-(--card) hover:border-(--primary)/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Visual Anchor: Article Thumbnail */}
                <div className="relative h-56 md:h-64 w-full overflow-hidden bg-(--bg-alt) shrink-0">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-(--muted)/30">
                      <Newspaper size={64} />
                    </div>
                  )}
                  {/* Categorical Labeling */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-(--primary) text-white shadow-md">
                      {item.category || t.news.general}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-(--card) via-(--card)/10 to-transparent opacity-80"></div>
                </div>

                {/* Article Narrative Container */}
                <div className="flex flex-col grow p-6 sm:p-8 relative z-10 bg-(--card) -mt-6">
                  {/* Article Metadata (Chronology and Engagement) */}
                  <div className="flex items-center justify-between text-xs font-semibold text-(--muted) mb-4">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-(--primary)" />
                      <span>{formatDate(item.published_date)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-(--bg-alt) px-2 py-1 rounded-full">
                      <Eye size={12} className="text-(--primary)" />
                      <span>{item.view_count || 0}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-3 text-(--text) line-clamp-2 group-hover:text-(--primary) transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm md:text-base leading-relaxed text-(--muted) mb-6 grow line-clamp-3">
                    {getPreviewText(item.description)}
                  </p>

                  {/* Contextual Action Link */}
                  <div className="mt-auto pt-4 border-t border-(--border) flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-(--muted) truncate max-w-[60%]">
                      <div className="w-6 h-6 rounded-full bg-(--primary)/10 flex items-center justify-center shrink-0">
                        <UserRound size={12} className="text-(--primary)" />
                      </div>
                      <span className="truncate">{item.published_by || t.news.admin}</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm font-bold text-(--primary) group-hover:translate-x-1 transition-transform">
                      {t.news.readMore}
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