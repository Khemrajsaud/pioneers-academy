import { useState } from "react";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * ChairmanMessage component displaying the Chairman's vision and address
 */
const ChairmanMessage = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  /**
   * Data object for the chairman's message details
   */
  const chairmanData = {
    name: "Dr. Rajesh Kumar Sharma", // Name remains consistent
    title: t.chairman.role,
    image: homepage, // Placeholder for actual chairman image
    message: t.chairman.message,
    date: "February 24, 2026", // Fixed publication date
  };

  /**
   * Platform-specific sharing logic using browser APIs or direct links
   */
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = `Read ${chairmanData.name}'s Message - Pioneers Academy`;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Hero Header Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={homepage}
          alt="Chairman Message"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight">
            {t.chairman.hero}
          </h1>
        </div>
      </div>

      {/* Main Narrative Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="overflow-hidden rounded-2xl bg-(--card) shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-(--border)"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Official Identification Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 p-8 sm:p-12 border-b border-(--border)/50 bg-linear-to-br from-(--primary)/5 to-(--card)">
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shrink-0 shadow-lg border-4 border-white dark:border-(--card)"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={chairmanData.image}
                alt={chairmanData.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex-1 text-center sm:text-left pt-2 sm:pt-4">
              <motion.h2
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-(--text)"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {chairmanData.name}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-(--primary) font-bold mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {chairmanData.title}
              </motion.p>
              <motion.p
                className="text-sm mt-3 inline-block px-3 py-1 rounded-full bg-(--bg-alt) text-(--muted)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t.chairman.publishedOn} {chairmanData.date}
              </motion.p>
            </div>
          </div>

          {/* Detailed Message Article */}
          <div className="p-8 sm:p-12 md:p-16">
            <article className="prose prose-lg prose-invert max-w-none text-(--text) leading-loose">
              {chairmanData.message.split("\n\n").map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="mb-5 text-sm sm:text-base md:text-lg text-(--muted) text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.5) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </article>

            {/* Formal Signature Area */}
            <motion.div
              className="mt-12 pt-8 border-t border-(--border)/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xl font-bold text-(--text)">{chairmanData.name}</p>
              <p className="text-base text-(--primary) font-semibold mt-1">{chairmanData.title}</p>
              <p className="text-sm text-(--muted) mt-1">Pioneers Academy</p>
            </motion.div>
          </div>

          {/* Interactive Share Footer */}
          <div className="bg-(--bg-alt) border-t border-(--border) p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold text-(--text)">
              {t.chairman.shareTitle}
            </p>
            <div className="flex items-center gap-3">
              {[
                { platform: "facebook", icon: <Facebook size={18} />, label: "Facebook" },
                { platform: "twitter", icon: <Twitter size={18} />, label: "Twitter" },
                { platform: "linkedin", icon: <Linkedin size={18} />, label: "LinkedIn" },
                { platform: "copy", icon: <Share2 size={18} />, label: "Copy Link" },
              ].map((item) => (
                <button
                  key={item.platform}
                  onClick={() => handleShare(item.platform)}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-(--card) border border-(--border) text-(--text) hover:border-(--primary) hover:bg-(--primary)/10 hover:text-(--primary) transition-all duration-300 transform hover:scale-110"
                  title={`Share on ${item.label}`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
            {copied && (
              <span className="text-sm text-(--primary) font-medium">{t.chairman.linkCopied}</span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
