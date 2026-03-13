import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import logo from "../../assets/logo/logo.png";
import { useLanguage } from "../../contexts/LanguageContext";

/**
 * AdmissionPopup Component
 * Displays a stylish overlay for new admissions.
 * Automatically dismisses after one view per session.
 */
const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if the user has already seen and closed the popup in this session.
    const dismissed = window.sessionStorage.getItem("admissionPopupDismissed");
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    // Hide the popup and save preference so it doesn't show again until next browser session.
    setIsOpen(false);
    window.sessionStorage.setItem("admissionPopupDismissed", "true");
  };

  // Do not render anything if the state is closed.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-start justify-center bg-black/60 px-4 pt-8 sm:pt-10 pb-3 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl h-[calc(100vh-2.75rem)] sm:h-[calc(100vh-3.25rem)] overflow-hidden rounded-2xl border-2 border-(--primary) bg-(--card) shadow-2xl">

        {/* Close Button - Large and easy to tap on mobile */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--primary) text-white hover:bg-(--primary)/90 transition-colors shadow-lg active:scale-95"
          aria-label={t.admission.popup.closeAria}
        >
          <X size={22} />
        </button>

        {/* Decorative background elements for premium feel */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-(--primary)/5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-(--accent)/5 rounded-full -ml-12 -mb-12"></div>

        {/* Main content grid or column */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 py-7 sm:py-8 text-center space-y-6 sm:space-y-8 overflow-y-auto">

          {/* School Identity */}
          <div className="flex justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white shadow-xl p-3 border-4 border-(--primary)/20 relative">
              <img src={logo} alt="School Logo" className="w-full h-full object-contain" />
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-md animate-bounce">
                <Sparkles size={16} className="text-white" />
              </div>
            </div>
          </div>

          {/* New Admission Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-linear-to-r from-(--primary) to-(--primary-strong) text-white rounded-full text-sm sm:text-base font-black tracking-widest shadow-lg transform hover:scale-105 transition-transform cursor-default">
              <Sparkles size={18} />
              {t.admission.popup.title}
              <Sparkles size={18} />
            </div>
          </div>

          {/* Session Details */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-(--text) leading-tight tracking-tight">
              {t.admission.popup.joinUs}
            </h2>
            <div className="space-y-1">
              <p className="text-lg sm:text-xl font-bold text-(--muted) uppercase tracking-widest">
                {t.admission.popup.sessionLabel}
              </p>
              <p className="text-6xl sm:text-8xl font-black text-(--primary) drop-shadow-sm">
                {t.admission.popup.year}
              </p>
            </div>
          </div>

          {/* Call to action text/subtext could go here */}
          <p className="text-(--muted) text-sm sm:text-base max-w-sm mx-auto leading-relaxed italic">
            "Your journey towards a brighter future starts here."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup;
