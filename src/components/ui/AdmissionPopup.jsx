import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import logo from "../../assets/logo/logo.png";

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("admissionPopupDismissed");
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    window.sessionStorage.setItem("admissionPopupDismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-start justify-center bg-black/60 px-4 pt-8 sm:pt-10 pb-3">
      <div className="relative w-full max-w-3xl h-[calc(100vh-2.75rem)] sm:h-[calc(100vh-3.25rem)] overflow-hidden rounded-2xl border-2 border-(--primary) bg-(--card) shadow-2xl animate-fadeIn">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--primary) text-white hover:bg-(--primary)/90 transition-colors shadow-lg"
          aria-label="Close popup"
        >
          <X size={22} />
        </button>

        <div className="absolute top-0 right-0 w-40 h-40 bg-(--primary)/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-(--accent)/5 rounded-full -ml-12 -mb-12"></div>

        <div className="relative px-6 py-7 sm:py-8 text-center space-y-4 sm:space-y-5">
          <div className="flex justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg p-3 border-4 border-(--primary)/30">
              <img src={logo} alt="School Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-(--primary) text-white rounded-full text-xs sm:text-sm font-bold tracking-wider shadow-md">
              <Sparkles size={14} />
              NEW ADMISSION OPEN
              <Sparkles size={14} />
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-(--text) leading-tight">
              Join Us for
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-(--text)">
              Academic Session
            </p>
            <p className="text-5xl sm:text-6xl font-black text-(--muted)">
              2083
            </p>
            <p className="text-3xl sm:text-4xl font-black text-(--muted)">
              2023
            </p>
            <p className="text-lg sm:text-xl font-semibold text-(--primary)">
              (2026-27)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
