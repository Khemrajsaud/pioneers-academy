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
import { motion } from "framer-motion";

const API_URL = `${import.meta.env.VITE_API_URL}/api/news`;

/**
 * DetailedNews component for rendering a single, comprehensive news article
 */
const DetailedNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /**
   * Fetches the specific news article and updates view count
   */
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(`${API_URL}/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(t.detailedNews.error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNews();
      // Asynchronous non-blocking update for analytics
      axios.patch(`${API_URL}/${id}/view`).catch(err => console.error(err));
    }
  }, [id, t.detailedNews.error]);

  /**
   * Locale-aware date formatting
   */
  const formatDate = (date) => {
    if (!date) return t.news.dateNotAvailable;
    return new Date(date).toLocaleDateString(language === "ne" ? "ne-NP" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const currentUrl = `${window.location.origin}/news/${id}`;

  /**
   * Social integration configuration for external sharing
   */
  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600 hover:bg-blue-600 hover:text-white",
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "text-sky-500 hover:bg-sky-500 hover:text-white",
      onClick: () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(news?.title)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700 hover:bg-blue-700 hover:text-white",
      onClick: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Email",
      icon: Mail,
      color: "text-orange-600 hover:bg-orange-600 hover:text-white",
      onClick: () => {
        const subject = `Check out: ${news?.title}`;
        const body = `I found this interesting article: ${news?.title}\n\n${currentUrl}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      },
    },
  ];

  /**
   * UI State: Interstitial Loading Screen
   */
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-(--bg) transition-colors">
        <Loader2 className="animate-spin text-(--primary)" size={48} />
        <p className="mt-4 text-lg text-(--muted) animate-pulse">
          {t.detailedNews.loading}
        </p>
      </div>
    );
  }

  /**
   * UI State: Fault Resolution Screen
   */
  if (error || !news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-(--bg) transition-colors">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl p-6 border flex flex-col items-center text-center gap-4 max-w-md bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/50 text-red-700 dark:text-red-400"
        >
          <AlertCircle size={48} />
          <p className="text-lg font-medium">{error}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate("/resources/news")}
          className="mt-8 flex items-center gap-2 px-6 py-3 rounded-xl bg-(--primary) text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg"
        >
          <ArrowLeft size={18} />
          <span className="font-semibold">{t.detailedNews.backToNews}</span>
        </motion.button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-(--bg) text-(--text) transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Control */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/resources/news")}
          className="group flex items-center gap-2 mb-8 px-4 py-2 rounded-xl text-(--muted) hover:text-(--primary) hover:bg-(--primary)/10 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          {t.detailedNews.allArticles}
        </motion.button>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-(--border) overflow-hidden bg-(--card) shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
        >
          {/* Header Focal Point: Article Title and Source Info */}
          <div className="p-6 sm:p-10 md:p-14 pb-8 md:pb-10 border-b border-(--border)/50">
            <div className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase bg-(--primary)/10 text-(--primary)">
                <Tag size={14} />
                {news.category || t.news.general}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold mb-8 leading-[1.15] text-(--text) tracking-tight">
              {news.title}
            </h1>

            {/* Semantic Meta Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-base font-medium text-(--muted)">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-(--bg-alt) flex items-center justify-center shrink-0">
                  <UserRound size={18} className="text-(--primary)" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-70 mb-0.5">{t.detailedNews.author}</p>
                  <p className="text-(--text)">{news.published_by || t.news.admin}</p>
                </div>
              </div>

              <div className="hidden sm:block h-10 w-[1px] bg-(--border)"></div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-(--bg-alt) flex items-center justify-center shrink-0">
                  <CalendarDays size={18} className="text-(--primary)" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider font-bold opacity-70 mb-0.5">{t.detailedNews.publishedDate}</p>
                  <p className="text-(--text)">{formatDate(news.published_date)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Visual Element */}
          {news.image_url && (
            <div className="w-full relative bg-(--bg-alt)">
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-auto max-h-[600px] object-cover"
                loading="lazy"
              />
            </div>
          )}

          {/* Narrative Body Section */}
          <div className="p-6 sm:p-10 md:p-14 pt-8">
            <div
              className={`news-content prose prose-sm sm:prose-base md:prose-lg max-w-none leading-[1.8] text-(--text) selection:bg-(--primary)/30`}
              dangerouslySetInnerHTML={{ __html: news.description }}
            />
          </div>

          {/* Footer Integration: Viral Loops and Community Sharing */}
          <div className="bg-(--bg-alt)/50 border-t border-(--border) py-10 px-6 sm:px-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
                <Share2 size={20} className="text-(--primary)" />
                {t.detailedNews.shareArticle}
              </h3>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {shareButtons.map((btn) => {
                  const Icon = btn.icon;
                  return (
                    <button
                      key={btn.name}
                      onClick={btn.onClick}
                      title={`Share on ${btn.name}`}
                      className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full font-semibold text-sm border border-(--border) bg-(--card) transition-all duration-300 shadow-sm ${btn.color}`}
                    >
                      <Icon size={18} />
                      <span className="hidden sm:inline">{btn.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      <style>{`
        .news-content {
          color: var(--text);
        }
        .news-content h1, 
        .news-content h2, 
        .news-content h3, 
        .news-content h4, 
        .news-content h5, 
        .news-content h6 {
          color: var(--text);
          font-weight: 800;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.3;
        }
        .news-content h2 { font-size: 1.875rem; }
        .news-content h3 { font-size: 1.5rem; }
        
        .news-content p {
          margin-bottom: 1.5em;
          color: var(--text);
          opacity: 0.9;
        }
        .news-content ul, .news-content ol {
          margin-left: 1.5em;
          margin-bottom: 1.5em;
        }
        .news-content ul { list-style-type: disc; }
        .news-content ol { list-style-type: decimal; }
        .news-content li { margin-bottom: 0.5em; }
        .news-content li::marker { color: var(--primary); }
        
        .news-content blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1.5em;
          font-style: italic;
          color: var(--muted);
          margin: 2em 0;
          background: var(--bg-alt);
          padding-block: 1em;
          padding-right: 1em;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        
        .news-content a {
          color: var(--primary);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .news-content a:hover {
          text-decoration-thickness: 2px;
        }
        
        .news-content img {
          border-radius: 1rem;
          margin: 2em auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default DetailedNews;
