import { useEffect, useState } from "react";
import axios from "axios";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/gallery`;

function ResourceGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const fetchGallery = async () => {
    try {
      const res = await axios.get(API_URL);
      setGallery(res.data);
      // Preload images for faster display
      res.data.forEach((item, index) => {
        const img = new Image();
        img.src = item.image_url;
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [index]: true }));
        };
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const openImage = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const next = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const prev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  // Loading spinner component - Changed to blue
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
          <Loader2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 w-6 h-6 animate-spin" />
        </div>
        <p className="text-blue-600 font-medium">Loading gallery...</p>
      </div>
    );
  }

  if (gallery.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        No images available
      </div>
    );
  }

  return (
    <div>
      {/* Heading - Changed to blue */}
      <div className="max-w-7xl mx-auto px-6 mb-6 mt-10 flex items-center gap-4">
        <div className="bg-blue-600 h-12 w-1 rounded-full" />
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-(--text)">
          Gallery
        </h1>
      </div>

      {/* Gallery */}
      <div className="p-6 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openImage(index)}
              className="cursor-pointer overflow-hidden rounded-xl relative group"
            >
              {/* Skeleton loader while image loads */}
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
              )}
              
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full object-cover rounded-xl group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              
              {/* Title overlay on hover - centered */}
              {item.title && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                  <p className="text-white text-center font-semibold px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            {/* Close Button - Changed hover to blue */}
            <button
              onClick={closeImage}
              className="absolute top-5 right-5 text-white hover:text-blue-400 transition-colors z-10"
            >
              <X size={30} />
            </button>

            {/* Image Container with Title */}
            <div className="relative max-h-[85vh] max-w-[90%]">
              <img
                src={gallery[selectedIndex].image_url}
                alt={gallery[selectedIndex].title}
                className="max-h-[85vh] max-w-full rounded-lg object-contain"
              />
              {/* Title in lightbox */}
              {gallery[selectedIndex].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                  <p className="text-white text-center font-medium">
                    {gallery[selectedIndex].title}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation - Changed hover to blue */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-5 text-white hover:text-blue-400 transition-colors"
                >
                  <ChevronLeft size={40} />
                </button>

                <button
                  onClick={next}
                  className="absolute right-5 text-white hover:text-blue-400 transition-colors"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}
            
            {/* Image counter */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} / {gallery.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceGallery;