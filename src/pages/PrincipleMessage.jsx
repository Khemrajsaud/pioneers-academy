import { useEffect, useState } from "react";
import { Share2, Facebook, Twitter, Linkedin, Mail, MessageCircle } from "lucide-react";
import principle from "../assets/images/principle.jpg";
import homepage from "../assets/images/about.png";
import { useLanguage } from "../contexts/LanguageContext";

const PrincipleMessage = () => {
  const { t } = useLanguage();
  const [views, setViews] = useState(0);
  const [shares, setShares] = useState(0);
  const [copied, setCopied] = useState(false);

  // Simulate view counting
  useEffect(() => {
    const timer = setTimeout(() => {
      setViews((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const principalData = {
    name: "Amit Bikram Supaek",
    title: t.principal.role,
    image: principle,
    message: t.principal.message,
    date: "02-21-2026",
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = `Read ${principalData.name}'s Message - Pioneers Academy`;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
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
          url
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
    setShares((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
        //   src={principalData.image}
        src={homepage}
          alt="Principal"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-[color:var(--bg)]"></div> */}
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-12">
        {/* Principal Info Card */}
        <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 sm:p-8 shadow-lg">
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-8 sm:items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[color:var(--primary)]">
              <img
                src={principalData.image}
                alt={principalData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] line-clamp-2">
                {principalData.name}
              </h1>
              <p className="text-base sm:text-lg text-[color:var(--primary)] font-semibold mt-1">
                {principalData.title}
              </p>
              <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-2">
                Published on {principalData.date}
              </p>
            </div>
          </div>
        </div>

        {/* Stats and Share Section */}
        <div className="mb-6 sm:mb-8 flex flex-col gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-4 sm:p-6">
          {/* <div className="flex justify-center sm:justify-start gap-6 sm:gap-8">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[color:var(--primary)]">
                {views}
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1">{t.principal.views}</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[color:var(--accent)]">
                {shares}
              </p>
              <p className="text-xs text-[color:var(--muted)] mt-1">{t.principal.share}</p>
            </div>
          </div> */}

          {/* Share Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            <button
              onClick={() => handleShare("facebook")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-blue-500 hover:text-white transition"
              title="Share on Facebook"
            >
              <Facebook size={16} />
              <span className="hidden sm:inline text-xs">Facebook</span>
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-sky-500 hover:text-white transition"
              title="Share on Twitter"
            >
              <Twitter size={16} />
              <span className="hidden sm:inline text-xs">Twitter</span>
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-blue-700 hover:text-white transition"
              title="Share on LinkedIn"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline text-xs">LinkedIn</span>
            </button>

            <button
              onClick={() => handleShare("whatsapp")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-green-500 hover:text-white transition"
              title="Share on WhatsApp"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline text-xs">WhatsApp</span>
            </button>

            <button
              onClick={() => handleShare("email")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-red-500 hover:text-white transition"
              title="Share via Email"
            >
              <Mail size={16} />
              <span className="hidden sm:inline text-xs">Email</span>
            </button>

            <button
              onClick={() => handleShare("copy")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-3 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white transition"
              title="Copy Link"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline text-xs">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>
        </div>

        {/* Message Content */}
        <div className="prose prose-invert max-w-none rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 sm:p-8 md:p-12">
          <article className="whitespace-pre-line text-[color:var(--text)] leading-relaxed">
            {principalData.message.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-[color:var(--muted)]">
                {paragraph}
              </p>
            ))}
          </article>
        </div>

        {/* Footer Share Section */}
        <div className="mt-8 sm:mt-12 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-4 sm:p-6 text-center">
          <p className="mb-4 text-xs sm:text-sm font-semibold text-[color:var(--text)]">
            Share this message with your network
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { platform: "facebook", icon: <Facebook size={18} />, label: "Facebook" },
              { platform: "twitter", icon: <Twitter size={18} />, label: "Twitter" },
              { platform: "linkedin", icon: <Linkedin size={18} />, label: "LinkedIn" },
              { platform: "whatsapp", icon: <MessageCircle size={18} />, label: "WhatsApp" },
            ].map((item) => (
              <button
                key={item.platform}
                onClick={() => handleShare(item.platform)}
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:scale-110 transition"
                title={`Share on ${item.label}`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleMessage;
