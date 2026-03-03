import { useEffect, useState } from "react";
import axios from "axios";
import { 
  Image as ImageIcon, 
  Loader,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/gallery";

function ResourceGallery() {
  const { language } = useLanguage();
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Determine theme from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') || localStorage.getItem('adminTheme');
      return saved === 'dark';
    }
    return false;
  });

  // Watch for theme changes
  useEffect(() => {
    const checkTheme = () => {
      const saved = localStorage.getItem('theme') || localStorage.getItem('adminTheme');
      const newTheme = saved === 'dark';
      if (newTheme !== isDarkMode) {
        setIsDarkMode(newTheme);
      }
    };

    checkTheme();
    window.addEventListener('storage', checkTheme);
    document.addEventListener('visibilitychange', checkTheme);
    const interval = setInterval(checkTheme, 500);

    return () => {
      window.removeEventListener('storage', checkTheme);
      document.removeEventListener('visibilitychange', checkTheme);
      clearInterval(interval);
    };
  }, [isDarkMode]);

  // Fetch gallery images
  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(API_URL);
      setGallery(res.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setError("Failed to load gallery. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Handle lightbox navigation
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  // Theme colors
  const containerBg = isDarkMode ? '#0f0f0f' : '#f5f7fa';
  const containerText = isDarkMode ? '#e0e0e0' : '#1a1a1a';
  const cardBg = isDarkMode ? '#1e1e1e' : '#ffffff';
  const cardBorder = isDarkMode ? '#2d2d2d' : '#e8eaed';
  const accentColor = '#1a73e8';
  const mutedText = isDarkMode ? '#9aa0a6' : '#5f6368';

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
        maxWidth: '1400px',
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
          <ImageIcon size={36} color={accentColor} />
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            margin: 0,
            color: accentColor
          }}>
            {language === 'ne' ? 'विद्यालय ग्यालेरी' : 'School Gallery'}
          </h1>
        </div>
        <p style={{
          fontSize: '1rem',
          color: mutedText,
          margin: '0.5rem 0 0',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {language === 'ne' 
            ? 'हाम्रो क्याम्पसको जीवन्त क्षणहरू र सुविधाहरू देखनुहोस्' 
            : 'Explore the vibrant moments and facilities of our campus'}
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
            {language === 'ne' ? 'ग्यालेरी लोड हो रहेको छ...' : 'Loading gallery...'}
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
      {!loading && gallery.length === 0 && !error && (
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: cardBg,
          borderRadius: '12px',
          border: `1px solid ${cardBorder}`
        }}>
          <ImageIcon size={48} color={mutedText} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
            {language === 'ne' ? 'कुनै चित्र उपलब्ध छैन' : 'No Images Available'}
          </h3>
          <p style={{ color: mutedText }}>
            {language === 'ne' 
              ? 'अहिले कुनै चित्र अपलोड गरिएको छैन। कृपया पछि फर्केर हेर्नुहोस्।' 
              : 'No images have been uploaded yet. Please check back later.'}
          </p>
        </div>
      )}

      {/* Gallery Grid */}
      {!loading && gallery.length > 0 && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                boxShadow: isDarkMode 
                  ? '0 1px 3px rgba(0, 0, 0, 0.4)' 
                  : '0 1px 3px rgba(60, 64, 67, 0.15)',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 8px 16px rgba(0, 0, 0, 0.5)' 
                  : '0 8px 16px rgba(60, 64, 67, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 1px 3px rgba(0, 0, 0, 0.4)' 
                  : '0 1px 3px rgba(60, 64, 67, 0.15)';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                paddingBottom: '75%',
                background: isDarkMode ? '#2d2d2d' : '#f0f2f5',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image_url}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              {/* Title Overlay */}
              <div style={{
                padding: '1rem',
                background: cardBg,
                minHeight: '60px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <h3 style={{
                  margin: 0,
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: containerText,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#ffffff',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />

            {/* Navigation Buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '-60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '-60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    color: '#ffffff',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#ffffff',
            fontSize: '0.875rem',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '0.5rem 1rem',
            borderRadius: '20px'
          }}>
            {currentImageIndex + 1} / {gallery.length}
          </div>
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

        @media (max-width: 640px) {
          [style*="left: -60px"],
          [style*="right: -60px"] {
            position: absolute !important;
            left: auto !important;
            right: auto !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ResourceGallery;