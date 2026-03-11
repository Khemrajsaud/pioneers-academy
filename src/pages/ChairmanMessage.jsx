import { useState } from "react";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { motion } from "framer-motion";

const ChairmanMessage = () => {
  const [copied, setCopied] = useState(false);

  const chairmanData = {
    name: "Dr. Rajesh Kumar Sharma",
    title: "Chairman",
    image: homepage, // Replace with actual chairman image
    message: `Dear Students, Parents, and Well-wishers,

It is with great pleasure and pride that I welcome you to Pioneers Academy. As the Chairman of this esteemed institution, I am honored to be part of a community dedicated to shaping future leaders, thinkers, and innovators.

At Pioneers Academy, we believe that education is not just about academic excellence but about holistic development. Our mission is to nurture young minds, instill strong values, and provide an environment where every child can discover their unique potential and thrive.

We are committed to offering world-class educational facilities, experienced faculty, and a curriculum that balances traditional wisdom with modern innovation. Our focus extends beyond textbooks to include character building, critical thinking, creativity, and compassion.

In today's rapidly changing world, we prepare our students not just for examinations, but for life itself. We encourage them to be curious, confident, and responsible global citizens who can contribute meaningfully to society.

I extend my heartfelt gratitude to our dedicated teachers, supportive parents, and enthusiastic students who make this institution truly special. Together, we are building a foundation for excellence that will shape generations to come.

I invite you to join us on this incredible journey of learning, growth, and achievement. Let us work together to create a brighter future for our children and our nation.

With warm regards and best wishes for your success.`,
    date: "February 24, 2026",
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = `Read ${chairmanData.name}'s Message - Pioneers Academy`;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url,
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
          url,
        )}`;
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
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={homepage}
          alt="Chairman Message"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight">
            Chairman's Message
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="overflow-hidden rounded-2xl bg-[color:var(--card)] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[color:var(--border)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header/Info Area */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 p-8 sm:p-12 border-b border-[color:var(--border)]/50 bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--card)]">
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-4 border-white dark:border-[color:var(--card)]"
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
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[color:var(--text)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {chairmanData.name}
              </motion.h2>
              <motion.p
                className="text-lg sm:text-xl text-[color:var(--primary)] font-bold mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {chairmanData.title}
              </motion.p>
              <motion.p
                className="text-sm mt-3 inline-block px-3 py-1 rounded-full bg-[color:var(--bg-alt)] text-[color:var(--muted)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Published on {chairmanData.date}
              </motion.p>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-8 sm:p-12 md:p-16">
            <article className="prose prose-lg prose-invert max-w-none text-[color:var(--text)] leading-loose">
              {chairmanData.message.split("\n\n").map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  className="mb-5 text-sm sm:text-base md:text-lg text-[color:var(--muted)] text-justify leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.5) }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </article>

            {/* Signature */}
            <motion.div
              className="mt-12 pt-8 border-t border-[color:var(--border)]/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xl font-bold text-[color:var(--text)]">{chairmanData.name}</p>
              <p className="text-base text-[color:var(--primary)] font-semibold mt-1">{chairmanData.title}</p>
              <p className="text-sm text-[color:var(--muted)] mt-1">Pioneers Academy</p>
            </motion.div>
          </div>

          {/* Footer Share Section */}
          <div className="bg-[color:var(--bg-alt)] border-t border-[color:var(--border)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
              Share this message
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
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--card)] border border-[color:var(--border)] text-[color:var(--text)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/10 hover:text-[color:var(--primary)] transition-all duration-300 transform hover:scale-110"
                  title={`Share on ${item.label}`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
            {copied && (
              <span className="text-sm text-[color:var(--primary)] font-medium">Link Copied!</span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
