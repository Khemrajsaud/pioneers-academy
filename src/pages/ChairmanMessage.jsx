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
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-12">
        {/* Chairman Info Card */}
        <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 sm:p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-8 sm:items-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 border-4 border-[color:var(--primary)] shadow-lg">
              <img
                src={chairmanData.image}
                alt={chairmanData.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)]">
                {chairmanData.name}
              </h2>
              <p className="text-base sm:text-lg text-[color:var(--primary)] font-semibold mt-2">
                {chairmanData.title}
              </p>
              <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-2">
                Published on {chairmanData.date}
              </p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mb-6 sm:mb-8 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-4 sm:p-6">
          <p className="text-sm font-semibold text-[color:var(--text)] mb-4">
            Share this message
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleShare("facebook")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-blue-500 hover:text-white transition duration-300"
              title="Share on Facebook"
            >
              <Facebook size={18} />
              <span className="hidden sm:inline text-sm">Facebook</span>
            </button>

            <button
              onClick={() => handleShare("twitter")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-sky-500 hover:text-white transition duration-300"
              title="Share on Twitter"
            >
              <Twitter size={18} />
              <span className="hidden sm:inline text-sm">Twitter</span>
            </button>

            <button
              onClick={() => handleShare("linkedin")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-blue-700 hover:text-white transition duration-300"
              title="Share on LinkedIn"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </button>

            <button
              onClick={() => handleShare("whatsapp")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-green-500 hover:text-white transition duration-300"
              title="Share on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline text-sm">WhatsApp</span>
            </button>

            <button
              onClick={() => handleShare("email")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-red-500 hover:text-white transition duration-300"
              title="Share via Email"
            >
              <Mail size={18} />
              <span className="hidden sm:inline text-sm">Email</span>
            </button>

            <button
              onClick={() => handleShare("copy")}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-auto sm:gap-2 sm:px-4 sm:py-2 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white transition duration-300"
              title="Copy Link"
            >
              <Share2 size={18} />
              <span className="hidden sm:inline text-sm">
                {copied ? "Copied!" : "Copy Link"}
              </span>
            </button>
          </div>
        </div>

        {/* Message Content */}
        <div className="prose prose-invert max-w-none rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 md:p-12 shadow-lg hover:shadow-xl transition duration-300">
          <article className="whitespace-pre-line text-[color:var(--text)] leading-relaxed">
            {chairmanData.message.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-6 text-sm sm:text-base md:text-lg text-[color:var(--muted)] first:mt-0 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Signature */}
          <div className="mt-8 pt-6 border-t border-[color:var(--border)]">
            <p className="text-base sm:text-lg font-bold text-[color:var(--text)]">
              {chairmanData.name}
            </p>
            <p className="text-sm sm:text-base text-[color:var(--primary)] font-semibold">
              {chairmanData.title}
            </p>
            <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1">
              Pioneers Academy
            </p>
          </div>
        </div>

        {/* Footer Share Section */}
        <div className="mt-8 sm:mt-12 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 text-center shadow-md">
          <p className="mb-4 text-sm sm:text-base font-semibold text-[color:var(--text)]">
            Share this message with your network
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                platform: "facebook",
                icon: <Facebook size={20} />,
                label: "Facebook",
              },
              {
                platform: "twitter",
                icon: <Twitter size={20} />,
                label: "Twitter",
              },
              {
                platform: "linkedin",
                icon: <Linkedin size={20} />,
                label: "LinkedIn",
              },
              {
                platform: "whatsapp",
                icon: <MessageCircle size={20} />,
                label: "WhatsApp",
              },
            ].map((item) => (
              <button
                key={item.platform}
                onClick={() => handleShare(item.platform)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] hover:scale-110 hover:shadow-lg transition duration-300"
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

export default ChairmanMessage;
