import { useEffect, useState } from "react";
import axios from "axios";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${API_BASE}/api/gallery`;

function ResourceGallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(API_URL);
      setGallery(res.data);
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

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
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
  {/* Heading */}
  <div className="max-w-7xl mx-auto px-6 mb-6 mt-10 flex items-center gap-4">
    <div className="bg-(--primary) h-12 w-1 rounded" />
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
          className="cursor-pointer overflow-hidden rounded-xl"
        >
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full object-cover rounded-xl hover:scale-105 transition duration-500"
          />
        </div>
      ))}
    </div>

    {/* Lightbox */}
    {selectedIndex !== null && (
      <div
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        onClick={closeImage}
      >
        {/* Close Button */}
        <button
          onClick={closeImage}
          className="absolute top-5 right-5 text-white"
        >
          <X size={30} />
        </button>

        {/* Image */}
        <img
          src={gallery[selectedIndex].image_url}
          alt=""
          className="max-h-[85vh] max-w-[90%] rounded-lg"
        />

        {/* Navigation */}
        {gallery.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-5 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={next}
              className="absolute right-5 text-white"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}
      </div>
    )}
  </div>
</div>
  );
}

export default ResourceGallery;