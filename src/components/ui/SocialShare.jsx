import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
} from "lucide-react";
import { useState } from "react";

const SocialShare = ({ title, isDarkMode, newsId }) => {
  const [copied, setCopied] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const currentUrl = `${window.location.origin}`;

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleLinkedinShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const handleEmailShare = () => {
    const subject = `Check out: ${title}`;
    const body = `I found this interesting: ${title}\n\n${currentUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`p-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium ${
          isDarkMode
            ? "bg-slate-700 hover:bg-slate-600 text-slate-200"
            : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300"
        }`}
      >
        <Share2 size={16} />
        Share
      </button>

      {showMenu && (
        <div
          className={`absolute top-full mt-2 right-0 rounded-lg border shadow-lg z-50 overflow-hidden min-w-max ${
            isDarkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <button
            onClick={() => {
              handleFacebookShare();
              setShowMenu(false);
            }}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
              isDarkMode
                ? "hover:bg-slate-700 text-slate-200"
                : "hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Facebook size={16} className="text-blue-600" />
            Facebook
          </button>
          <button
            onClick={() => {
              handleTwitterShare();
              setShowMenu(false);
            }}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
              isDarkMode
                ? "hover:bg-slate-700 text-slate-200"
                : "hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Twitter size={16} className="text-sky-400" />
            Twitter
          </button>
          <button
            onClick={() => {
              handleLinkedinShare();
              setShowMenu(false);
            }}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
              isDarkMode
                ? "hover:bg-slate-700 text-slate-200"
                : "hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Linkedin size={16} className="text-blue-700" />
            LinkedIn
          </button>
          <button
            onClick={() => {
              handleEmailShare();
              setShowMenu(false);
            }}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
              isDarkMode
                ? "hover:bg-slate-700 text-slate-200"
                : "hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Mail size={16} className="text-orange-600" />
            Email
          </button>
          <div className={`${isDarkMode ? "bg-slate-700" : "bg-slate-100"} h-px`} />
          <button
            onClick={() => {
              handleCopyLink();
              setShowMenu(false);
            }}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${
              isDarkMode
                ? "hover:bg-slate-700 text-slate-200"
                : "hover:bg-slate-50 text-slate-700"
            }`}
          >
            <Copy size={16} className="text-gray-600" />
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialShare;
