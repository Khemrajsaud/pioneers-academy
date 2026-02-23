import { useLanguage } from "../contexts/LanguageContext";
import homepage from "../assets/images/homepage.png";
import about from "../assets/images/about.jpg";
import { Heart, Download, Eye } from "lucide-react";
import { useState } from "react";

const ResourceGallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const galleryImages = [
    {
      id: 1,
      src: homepage,
      title: "Annual Sports Day 2026",
      category: "Sports",
      description: "Students competing in athletic events",
    },
    {
      id: 2,
      src: about,
      title: "Science Exhibition",
      category: "Academics",
      description: "Student projects on display",
    },
    {
      id: 3,
      src: homepage,
      title: "School Assembly",
      category: "Events",
      description: "Morning assembly with all students",
    },
    {
      id: 4,
      src: about,
      title: "Library Inauguration",
      category: "Facilities",
      description: "New modern library wing",
    },
    {
      id: 5,
      src: homepage,
      title: "Cultural Program",
      category: "Events",
      description: "Annual cultural celebration",
    },
    {
      id: 6,
      src: about,
      title: "Lab Work",
      category: "Academics",
      description: "Students in science laboratory",
    },
    {
      id: 7,
      src: homepage,
      title: "Team Building",
      category: "Activities",
      description: "Outdoor team activities",
    },
    {
      id: 8,
      src: about,
      title: "Debate Competition",
      category: "Activities",
      description: "Inter-house debate finals",
    },
    {
      id: 9,
      src: homepage,
      title: "Art Workshop",
      category: "Academics",
      description: "Creative art session",
    },
    {
      id: 10,
      src: about,
      title: "Merit Award Ceremony",
      category: "Events",
      description: "Recognition of top performers",
    },
    {
      id: 11,
      src: homepage,
      title: "Sports Training",
      category: "Sports",
      description: "Gymnasium training session",
    },
    {
      id: 12,
      src: about,
      title: "Environmental Drive",
      category: "Community",
      description: "Campus beautification initiative",
    },
  ];

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const toggleLike = (id) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedImages(newLiked);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.nav.gallery}
          </h1>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-[color:var(--bg-alt)] border-b border-[color:var(--border)] sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-[color:var(--card)] text-[color:var(--text)] border border-[color:var(--border)] hover:bg-[color:var(--bg)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="group relative rounded-xl overflow-hidden border border-[color:var(--border)] bg-[color:var(--card)] shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72 bg-[color:var(--bg-alt)]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(img)}
                    className="bg-white/80 hover:bg-white text-[color:var(--text)] p-3 rounded-full opacity-0 group-hover:opacity-100 transition transform scale-75 group-hover:scale-100"
                    title="View"
                  >
                    <Eye size={20} />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[color:var(--primary)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {img.category}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-4">
                <h3 className="font-semibold text-[color:var(--text)] mb-1 group-hover:text-[color:var(--primary)] transition">
                  {img.title}
                </h3>
                <p className="text-xs text-[color:var(--muted)]">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-[color:var(--card)] rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[color:var(--border)]">
              <div>
                <h2 className="text-2xl font-bold text-[color:var(--text)]">{selectedImage.title}</h2>
                <p className="text-sm text-[color:var(--muted)] mt-1">{selectedImage.description}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-[color:var(--muted)] hover:text-[color:var(--text)] text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto flex items-center justify-center bg-black/20">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[calc(90vh-200px)] object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-[color:var(--border)]">
              <span className="text-sm text-[color:var(--muted)]">{selectedImage.category}</span>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleLike(selectedImage.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    likedImages.has(selectedImage.id)
                      ? "bg-red-500 text-white"
                      : "bg-[color:var(--bg-alt)] text-[color:var(--text)] hover:bg-[color:var(--bg)]"
                  }`}
                >
                  <Heart size={18} fill={likedImages.has(selectedImage.id) ? "currentColor" : "none"} />
                  {likedImages.has(selectedImage.id) ? "Liked" : "Like"}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold bg-[color:var(--primary)] text-white hover:opacity-90 transition">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceGallery;
