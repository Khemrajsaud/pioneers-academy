import { useEffect, useState } from "react";
import axios from "axios";
import {
  Image as ImageIcon,
  Loader2,
  X,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  ServerOff,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";


const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/gallery`;


function ResourceGallery() {
  const { t } = useLanguage();
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * Fetches gallery data from the backend API
   */
  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching from:", API_URL);

      const res = await axios.get(API_URL);
      setGallery(res.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setError(t.gallery.errorTitle);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(gallery[index]);
    document.body.style.overflow = "hidden";
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

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex, gallery.length]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-12">
        <div className="flex items-center gap-4">
          <div className="bg-(--primary) h-14 w-2 rounded-xs" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-(--text)">
            {t.gallery.hero}
          </h1>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-100 gap-4">
          <Loader2 size={48} className="text-(--primary) animate-spin" />
          <p className="text-lg text-(--muted) animate-pulse">
            {t.gallery.loading}
          </p>
        </div>
      )}

      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center px-4 py-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <ServerOff size={44} className="text-red-500 mx-auto" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            {t.gallery.errorTitle}
          </h2>
          <button
            onClick={fetchGallery}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-(--primary) text-white font-semibold"
          >
            <RefreshCw size={16} /> {t.gallery.tryAgain}
          </button>
        </motion.div>
      )}

      {!loading && gallery.length === 0 && !error && (
        <div className="max-w-2xl mx-auto text-center p-12 bg-(--card) rounded-3xl border border-(--border)">
          <ImageIcon size={40} className="text-(--muted)/50 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-3">{t.gallery.noImages}</h3>
          <p className="text-(--muted)">{t.gallery.noImagesDetail}</p>
        </div>
      )}

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
              className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-(--card) border border-(--border) cursor-pointer"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white font-bold">
                  {item.title}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage.image_url}
              className="max-w-[90%] max-h-[85vh] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 text-white"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 text-white"
                >
                  <ChevronRight size={48} />
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
