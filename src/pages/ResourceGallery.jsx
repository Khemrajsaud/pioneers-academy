// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Image as ImageIcon,
//   Loader2,
//   AlertCircle,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   Maximize2,
//   WifiOff,
//   RefreshCw,
//   ServerOff,
//   Phone,
//   Mail
// } from "lucide-react";
// import { useLanguage } from "../contexts/LanguageContext";
// import { motion, AnimatePresence } from "framer-motion";

// const API_URL = `${import.meta.env.VITE_API_URL}/api/gallery`;

// /**
//  * ResourceGallery component for displaying and managing a visual showcase of the school
//  */
// function ResourceGallery() {
//   const { t } = useLanguage();
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   /**
//    * Fetches gallery data from the backend API
//    */
//   const fetchGallery = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await axios.get(API_URL);
//       setGallery(res.data);
//     } catch (error) {
//       console.error("Error fetching gallery:", error);
//       setError(t.gallery.errorTitle);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   /**
//    * Opens the lightbox modal for a specific image
//    */
//   const openLightbox = (index) => {
//     setCurrentImageIndex(index);
//     setSelectedImage(gallery[index]);
//     document.body.style.overflow = "hidden"; // Trap scroll
//   };

//   /**
//    * Closes the lightbox modal
//    */
//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = "auto";
//   };

//   /**
//    * Navigation: Next image in sequence
//    */
//   const nextImage = (e) => {
//     if (e) e.stopPropagation();
//     const newIndex = (currentImageIndex + 1) % gallery.length;
//     setCurrentImageIndex(newIndex);
//     setSelectedImage(gallery[newIndex]);
//   };

//   /**
//    * Navigation: Previous image in sequence
//    */
//   const prevImage = (e) => {
//     if (e) e.stopPropagation();
//     const newIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
//     setCurrentImageIndex(newIndex);
//     setSelectedImage(gallery[newIndex]);
//   };

//   /**
//    * Keyboard accessibility for lightbox navigation
//    */
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (!selectedImage) return;
//       if (e.key === 'Escape') closeLightbox();
//       if (e.key === 'ArrowRight') nextImage();
//       if (e.key === 'ArrowLeft') prevImage();
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [selectedImage, currentImageIndex, gallery.length]);

//   /**
//    * Framer motion variant for grid container
//    */
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   /**
//    * Framer motion variant for grid items
//    */
//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-(--bg) text-(--text) py-12 px-4 sm:px-6 lg:px-8">
//       {/* Narrative Header */}
//       <motion.div
//         className="max-w-4xl mx-auto text-center mb-16"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
//           {t.gallery.hero}
//         </h1>
//         <p className="text-lg md:text-xl text-(--muted) max-w-2xl mx-auto leading-relaxed">
//           {t.gallery.subtitle}
//         </p>
//       </motion.div>

//       {/* State Management: Active Loading */}
//       {loading && (
//         <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
//           <Loader2 size={48} className="text-(--primary) animate-spin" />
//           <p className="text-lg text-(--muted) animate-pulse">
//             {t.gallery.loading}
//           </p>
//         </div>
//       )}

//       {/* State Management: Connection Error Display */}
//       {error && !loading && (
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="max-w-2xl mx-auto text-center px-4 py-16"
//         >
//           <div className="relative w-32 h-32 mx-auto mb-8">
//             <motion.div
//               className="absolute inset-0 rounded-full bg-red-100 dark:bg-red-900/30"
//               animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0.3, 0.7] }}
//               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//             />
//             <motion.div
//               className="absolute inset-4 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center"
//               animate={{ scale: [1, 1.08, 1] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
//             >
//               <ServerOff size={44} className="text-red-500 dark:text-red-400" />
//             </motion.div>
//             <motion.div
//               className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-orange-100 dark:bg-orange-900/40 border-2 border-(--bg) flex items-center justify-center"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
//             >
//               <WifiOff size={18} className="text-orange-500" />
//             </motion.div>
//           </div>

//           <motion.h2
//             className="text-2xl md:text-3xl font-extrabold mb-3 text-(--text)"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             {t.gallery.errorTitle}
//           </motion.h2>

//           <motion.p
//             className="text-(--muted) text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {t.gallery.errorDetail}
//           </motion.p>

//           <motion.div
//             className="flex flex-wrap justify-center gap-2 mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             {[
//               { icon: <WifiOff size={13} />, label: t.gallery.noInternet },
//               { icon: <ServerOff size={13} />, label: t.gallery.serverOffline },
//               { icon: <AlertCircle size={13} />, label: t.gallery.dbError },
//             ].map((cause, i) => (
//               <span
//                 key={i}
//                 className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-(--card) border border-(--border) text-(--muted)"
//               >
//                 {cause.icon} {cause.label}
//               </span>
//             ))}
//           </motion.div>

//           <motion.button
//             onClick={fetchGallery}
//             className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-(--primary) text-white font-semibold text-sm shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <RefreshCw size={16} />
//             {t.gallery.tryAgain}
//           </motion.button>

//           <motion.div
//             className="mt-12 pt-8 border-t border-(--border)"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <p className="text-sm text-(--muted) mb-4">
//               {t.gallery.contactPersist}
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a
//                 href="tel:+977"
//                 className="inline-flex items-center gap-2 text-sm text-(--primary) hover:underline font-medium"
//               >
//                 <Phone size={14} /> +977-XXXX-XXXX
//               </a>
//               <a
//                 href="mailto:info@pioneersacademy.edu.np"
//                 className="inline-flex items-center gap-2 text-sm text-(--primary) hover:underline font-medium"
//               >
//                 <Mail size={14} /> info@pioneersacademy.edu.np
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}

//       {/* State Management: Empty Content Placeholder */}
//       {!loading && gallery.length === 0 && !error && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="max-w-2xl mx-auto text-center p-12 bg-(--card) rounded-3xl border border-(--border) shadow-sm"
//         >
//           <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-(--bg-alt) flex items-center justify-center">
//             <ImageIcon size={40} className="text-(--muted)/50" />
//           </div>
//           <h3 className="text-2xl font-bold mb-3">
//             {t.gallery.noImages}
//           </h3>
//           <p className="text-(--muted) text-lg h-auto">
//             {t.gallery.noImagesDetail}
//           </p>
//         </motion.div>
//       )}

//       {/* Main Content: Masonry-style Grid */}
//       {!loading && gallery.length > 0 && (
//         <motion.div
//           className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {gallery.map((item, index) => (
//             <motion.div
//               key={item.id}
//               variants={itemVariants}
//               onClick={() => openLightbox(index)}
//               className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-(--card) border border-(--border) shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer transform will-change-transform"
//             >
//               <div className="relative overflow-hidden w-full bg-(--bg-alt)">
//                 <img
//                   src={item.image_url}
//                   alt={item.title}
//                   className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 ease-out">
//                   <Maximize2 size={20} />
//                 </div>

//                 <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
//                   <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 drop-shadow-md">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       )}

//       {/* Full-Screen Exploration Modal (Lightbox) */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             onClick={closeLightbox}
//           >
//             {/* Modal Controls Bar */}
//             <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-10 bg-linear-to-b from-black/60 to-transparent">
//               <div className="text-white/80 font-medium tracking-widest text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
//                 {currentImageIndex + 1} / {gallery.length}
//               </div>
//               <button
//                 onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
//                 className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110"
//                 aria-label="Close"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             {/* Visual Display Center */}
//             <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
//               <motion.img
//                 key={selectedImage.id}
//                 src={selectedImage.image_url}
//                 alt={selectedImage.title}
//                 className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: -20 }}
//                 transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
//                 onClick={(e) => e.stopPropagation()}
//               />

//               <motion.div
//                 className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/50 backdrop-blur-md rounded-2xl max-w-[90%] md:max-w-2xl text-center shadow-lg border border-white/10"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <h3 className="text-white text-lg md:text-xl font-medium m-0">
//                   {selectedImage.title}
//                 </h3>
//               </motion.div>
//             </div>

//             {/* Sequence Navigation Triggers */}
//             {gallery.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:-translate-x-1"
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={32} />
//                 </button>

//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 transform hover:scale-110 hover:translate-x-1"
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={32} />
//                 </button>
//               </>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ResourceGallery;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Image as ImageIcon,
  Loader2,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  WifiOff,
  RefreshCw,
  ServerOff,
  Phone,
  Mail,
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
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-3xl font-extrabold tracking-tight mb-4">
          {t.gallery.hero}
        </h1>
        <p className=" text-sm text-(--muted) max-w-2xl mx-auto leading-relaxed">
          {t.gallery.subtitle}
        </p>
      </motion.div>

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
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
