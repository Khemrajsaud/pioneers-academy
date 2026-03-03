import { useEffect, useState } from "react";
import axios from "axios";
import { 
  BellRing, 
  Calendar, 
  FileText, 
  Download, 
  Loader,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  User
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/notice";

const ResourcesNotice = () => {
  const { t, language } = useLanguage();
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedNotices, setExpandedNotices] = useState({});

  // Determine theme from body background or default to light
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') || localStorage.getItem('adminTheme');
      return saved === 'dark';
    }
    return false;
  });

  // Watch for theme changes - check localStorage periodically and on visibility change
  useEffect(() => {
    const checkTheme = () => {
      const saved = localStorage.getItem('theme') || localStorage.getItem('adminTheme');
      const newTheme = saved === 'dark';
      if (newTheme !== isDarkMode) {
        setIsDarkMode(newTheme);
      }
    };

    // Check immediately
    checkTheme();

    // Check on storage event (for other tabs)
    window.addEventListener('storage', checkTheme);
    
    // Check on visibility change (when tab becomes visible)
    document.addEventListener('visibilitychange', checkTheme);
    
    // Poll for changes every 500ms (for same-window changes)
    const interval = setInterval(checkTheme, 500);

    return () => {
      window.removeEventListener('storage', checkTheme);
      document.removeEventListener('visibilitychange', checkTheme);
      clearInterval(interval);
    };
  }, [isDarkMode]);

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

  const containerBg = isDarkMode ? '#0f0f0f' : '#f5f7fa';
  const containerText = isDarkMode ? '#e0e0e0' : '#1a1a1a';
  const cardBg = isDarkMode ? '#1e1e1e' : '#ffffff';
  const cardBorder = isDarkMode ? '#2d2d2d' : '#e8eaed';
  const hoverBg = isDarkMode ? '#252525' : '#fafbfc';
  const accentColor = '#1a73e8';
  const mutedText = isDarkMode ? '#9aa0a6' : '#5f6368';
  const lightBlueBg = isDarkMode ? '#1a3a52' : '#e8f0fe';
  const avatarBg = isDarkMode ? '#2d4a5f' : '#d2e3fc';

  return (
    <div style={{
      minHeight: '100vh',
      background: containerBg,
      color: containerText,
      padding: '2rem 1rem',
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      {/* Header Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 3rem',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '1rem'
        }}>
          <BellRing size={32} color={accentColor} />
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            margin: 0,
            color: accentColor
          }}>
            {language === 'ne' ? 'नवीनतम सूचना' : 'Latest Notices'}
          </h1>
        </div>
        <p style={{
          fontSize: '1rem',
          color: mutedText,
          margin: '0.5rem 0 0'
        }}>
          {language === 'ne' 
            ? 'विद्यालयका महत्त्वपूर्ण सूचना र घोषणा' 
            : 'Important school announcements and updates'}
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          minHeight: '400px'
        }}>
          <Loader size={48} color={accentColor} style={{ animation: 'spin 1s linear infinite' }} />
          <p style={{ fontSize: '1.1rem', color: mutedText }}>
            {language === 'ne' ? 'सूचना लोड हो रहेको छ...' : 'Loading notices...'}
          </p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          background: isDarkMode ? '#3d2d2d' : '#ffe0e0',
          border: `1px solid ${isDarkMode ? '#5d3d3d' : '#ffcccc'}`,
          borderRadius: '12px',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>
          <AlertCircle size={24} color="#f44336" />
          <p style={{ margin: 0, color: isDarkMode ? '#ffcccc' : '#d32f2f', fontSize: '1rem' }}>
            {error}
          </p>
        </div>
      )}

      {/* Empty State */}
      {!loading && notices.length === 0 && !error && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: cardBg,
          borderRadius: '12px',
          border: `1px solid ${cardBorder}`
        }}>
          <FileText size={48} color={mutedText} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
            {language === 'ne' ? 'कुनै सूचना उपलब्ध छैन' : 'No notices available'}
          </h3>
          <p style={{ color: mutedText }}>
            {language === 'ne' 
              ? 'अहिले कुनै नवीन सूचना छैन। कृपया पछि फर्केर हेर्नुहोस्।' 
              : 'There are no notices available at the moment. Please check back later.'}
          </p>
        </div>
      )}

      {/* Notices Grid */}
      {!loading && notices.length > 0 && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '1.5rem'
        }}>
          {notices.map((notice) => {
            const isExpanded = expandedNotices[notice.id];
            const shouldShowToggle = notice.description && notice.description.length > 200;
            
            return (
              <div
                key={notice.id}
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: '16px',
                  padding: '0',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  boxShadow: isDarkMode 
                    ? '0 1px 3px rgba(0, 0, 0, 0.4)' 
                    : '0 1px 3px rgba(60, 64, 67, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 4px 12px rgba(0, 0, 0, 0.5)' 
                    : '0 4px 12px rgba(60, 64, 67, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDarkMode 
                    ? '0 1px 3px rgba(0, 0, 0, 0.4)' 
                    : '0 1px 3px rgba(60, 64, 67, 0.15)';
                }}
              >
                {/* Card Content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    margin: '0 0 1rem',
                    color: containerText,
                    lineHeight: '1.5'
                  }}>
                    {notice.title}
                  </h3>

                  {/* Author and Date Row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    {/* Avatar */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: avatarBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: accentColor,
                      flexShrink: 0
                    }}>
                      {notice.author ? getInitials(notice.author) : <User size={20} />}
                    </div>

                    {/* Author and Date Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: containerText,
                        marginBottom: '2px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {notice.author || (language === 'ne' ? 'पायोनियर्स एकेडेमी' : 'Pioneers Academy')}
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontSize: '0.75rem',
                        color: mutedText
                      }}>
                        <Calendar size={12} />
                        <span>{formatDate(notice.notice_date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div style={{
                    color: containerText,
                    lineHeight: '1.6',
                    fontSize: '0.938rem',
                    marginBottom: shouldShowToggle || notice.document_url ? '1rem' : '0'
                  }}>
                    {isExpanded || !shouldShowToggle 
                      ? notice.description 
                      : truncateText(notice.description, 200)
                    }
                  </div>

                  {/* See More/Less and Download Section */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {/* See More/Less Button */}
                    {shouldShowToggle && (
                      <button
                        onClick={() => toggleExpanded(notice.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: accentColor,
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          cursor: 'pointer',
                          padding: '0.5rem 0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
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
                    )}

                    {/* Download Link */}
                    {notice.document_url && (
                      <a 
                        href={notice.document_url} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          padding: '0.5rem 1rem',
                          background: lightBlueBg,
                          color: accentColor,
                          textDecoration: 'none',
                          borderRadius: '8px',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = isDarkMode ? '#234a66' : '#d2e3fc';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = lightBlueBg;
                        }}
                      >
                        <Download size={14} />
                        {language === 'ne' ? 'डाउनलोड' : 'Download'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem !important;
          }
          
          [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResourcesNotice;
