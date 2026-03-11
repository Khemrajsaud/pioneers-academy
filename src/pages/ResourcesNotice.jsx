import { useEffect, useState } from "react";
import axios from "axios";
import {
  Calendar,
  FileText,
  Download,
  Loader2,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  User
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = `${import.meta.env.VITE_API_URL}/api/notice`;

const ResourcesNotice = () => {
  const { t, language } = useLanguage();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNotices, setExpandedNotices] = useState({});

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(API_URL);
        setNotices(response.data);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Failed to load notices. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'ne' ? 'ne-NP' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const toggleExpanded = (noticeId) => {
    setExpandedNotices(prev => ({
      ...prev,
      [noticeId]: !prev[noticeId]
    }));
  };

  const truncateText = (text, maxLength = 200) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getInitials = (name) => {
    if (!name) return 'PA';
    const words = name.trim().split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[color:var(--bg)] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Note: User specifically requested not to use an icon here */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[color:var(--text)] tracking-tight mb-4">
            {language === 'ne' ? 'नवीनतम सूचना' : 'Latest Notices'}
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {language === 'ne'
              ? 'विद्यालयका महत्त्वपूर्ण सूचना र घोषणा'
              : 'Important school announcements and updates'}
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
            <Loader2 className="animate-spin text-[color:var(--primary)]" size={48} />
            <p className="text-lg text-[color:var(--muted)] animate-pulse">
              {language === 'ne' ? 'सूचना लोड हुँदैछ...' : 'Loading notices...'}
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto rounded-2xl p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 flex items-center gap-4 text-red-600 dark:text-red-400"
          >
            <AlertCircle size={24} className="flex-shrink-0" />
            <p className="text-base font-medium m-0">{error}</p>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && notices.length === 0 && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-center p-12 bg-[color:var(--card)] rounded-3xl border border-[color:var(--border)] shadow-sm"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[color:var(--bg-alt)] flex items-center justify-center text-[color:var(--muted)]/50">
              <FileText size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[color:var(--text)]">
              {language === 'ne' ? 'कुनै सूचना उपलब्ध छैन' : 'No notices available'}
            </h3>
            <p className="text-[color:var(--muted)] text-lg h-auto">
              {language === 'ne'
                ? 'अहिले कुनै नवीन सूचना छैन। कृपया पछि फर्केर हेर्नुहोस्।'
                : 'There are no notices available at the moment. Please check back later.'}
            </p>
          </motion.div>
        )}

        {/* Notices Grid */}
        {!loading && notices.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {notices.map((notice) => {
              const isExpanded = expandedNotices[notice.id];
              const shouldShowToggle = notice.description && notice.description.length > 200;

              return (
                <motion.article
                  key={notice.id}
                  variants={itemVariants}
                  className="flex flex-col bg-[color:var(--card)] border border-[color:var(--border)] rounded-3xl overflow-hidden hover:border-[color:var(--primary)]/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                >
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-[color:var(--text)] leading-snug line-clamp-2">
                      {notice.title}
                    </h3>

                    {/* Author and Date Row */}
                    <div className="flex items-center gap-3 mb-5 p-3 rounded-2xl bg-[color:var(--bg-alt)]/50 border border-[color:var(--border)]/50">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center text-sm font-bold text-[color:var(--primary)] shrink-0">
                        {notice.author ? getInitials(notice.author) : <User size={18} />}
                      </div>

                      {/* Author and Date Info */}
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm font-semibold text-[color:var(--text)] truncate">
                          {notice.author || (language === 'ne' ? 'पायोनियर्स एकेडेमी' : 'Pioneers Academy')}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[color:var(--primary)]">
                          <Calendar size={12} />
                          <span className="font-medium">{formatDate(notice.notice_date)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-[color:var(--muted)] leading-relaxed text-sm mb-6 flex-grow">
                      {isExpanded || !shouldShowToggle
                        ? notice.description
                        : truncateText(notice.description, 200)
                      }
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-auto pt-4 border-t border-[color:var(--border)] flex items-center justify-between flex-wrap gap-3">
                      {/* See More/Less Button */}
                      {shouldShowToggle ? (
                        <button
                          onClick={() => toggleExpanded(notice.id)}
                          className="flex items-center gap-1 text-[color:var(--primary)] text-sm font-bold hover:opacity-80 transition-opacity p-1 -ml-1"
                        >
                          {isExpanded
                            ? (
                              <>
                                {language === 'ne' ? 'कम देखाउनुहोस्' : 'Read Less'}
                                <ChevronUp size={16} />
                              </>
                            )
                            : (
                              <>
                                {language === 'ne' ? 'थप देखाउनुहोस्' : 'Read More'}
                                <ChevronDown size={16} />
                              </>
                            )
                          }
                        </button>
                      ) : (
                        <div /> // Empty div for flex spacing if no button
                      )}

                      {/* Download Link */}
                      {notice.document_url && (
                        <a
                          href={notice.document_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[color:var(--primary)]/10 hover:bg-[color:var(--primary)]/20 text-[color:var(--primary)] rounded-xl text-sm font-bold transition-colors ml-auto"
                        >
                          <Download size={16} />
                          {language === 'ne' ? 'डाउनलोड' : 'Download'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResourcesNotice;
