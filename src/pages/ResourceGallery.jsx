import { useEffect, useState } from "react";
import axios from "axios";
import {
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = `${import.meta.env.VITE_API_URL}/api/gallery`;

function ResourceGallery() {
  const { language } = useLanguage();
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
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
  }, [selectedImage, currentImageIndex, gallery.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
       
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          {language === 'ne' ? 'विद्यालय ग्यालेरी' : 'School Gallery'}
        </h1>
        <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
          {language === 'ne'
            ? 'हाम्रो क्याम्पसको जीवन्त क्षणहरू र सुविधाहरू देखनुहोस्'
            : 'Explore the vibrant moments, activities, and facilities of our beautiful campus.'}
        </p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Loader2 size={48} className="text-[color:var(--primary)] animate-spin" />
          <p className="text-lg text-[color:var(--muted)] animate-pulse">
            {language === 'ne' ? 'ग्यालेरी लोड हुँदैछ...' : 'Loading gallery...'}
          </p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-2xl flex items-center gap-4 text-red-600 dark:text-red-400"
        >
          <AlertCircle size={28} className="flex-shrink-0" />
          <p className="text-base font-medium m-0">{error}</p>
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && gallery.length === 0 && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto text-center p-12 bg-[color:var(--card)] rounded-3xl border border-[color:var(--border)] shadow-sm"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[color:var(--bg-alt)] flex items-center justify-center">
            <ImageIcon size={40} className="text-[color:var(--muted)]/50" />
          </div>
          <h3 className="text-2xl font-bold mb-3">
            {language === 'ne' ? 'कुनै चित्र उपलब्ध छैन' : 'No Images Available'}
          </h3>
          <p className="text-[color:var(--muted)] text-lg h-auto">
            {language === 'ne'
              ? 'अहिले कुनै चित्र अपलोड गरिएको छैन। कृपया पछि फर्केर हेर्नुहोस्।'
              : 'Our gallery is currently empty. Beautiful moments will be shared here soon.'}
          </p>
        </motion.div>
      )}

      {/* Gallery Grid */}
      {!loading && gallery.length > 0 && (
        <motion.div
          className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-[color:var(--card)] border border-[color:var(--border)] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform will-change-transform"
            >
              <div className="relative overflow-hidden w-full bg-[color:var(--bg-alt)]">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
                  <Maximize2 size={20} />
                </div>

                {/* Text inside image on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            {/* Top Bar Navigation */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
              <div className="text-white/80 font-medium tracking-widest text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
                {currentImageIndex + 1} / {gallery.length}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
              <motion.img
                key={selectedImage.id}
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              />

              {/* Title overlay at bottom */}
              <motion.div
                className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 backdrop-blur-md rounded-2xl max-w-[90%] md:max-w-2xl text-center shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-white text-lg md:text-xl font-medium m-0">
                  {selectedImage.title}
                </h3>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:-translate-x-1"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:translate-x-1"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ResourceGallery;