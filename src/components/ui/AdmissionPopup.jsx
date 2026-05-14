
import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import logo from "../../assets/logo/logo.png";
import popupimage from "../../assets/images/popup-image1.jpeg"
import popupimage2 from "../../assets/images/popup-image3.jpeg" // Second popup image

const AdmissionPopup = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  // Handle body scroll locking
  useEffect(() => {
    if (isFirstOpen || isSecondOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFirstOpen, isSecondOpen]);

  // Initial load - check session storage
  useEffect(() => {
    const dismissed = window.sessionStorage.getItem("admissionPopupDismissed");
    if (!dismissed) {
      setIsFirstOpen(true);
    }
  }, []);

  const handleCloseFirst = () => {
    setIsFirstOpen(false);
    // Open second popup immediately after closing first
    setIsSecondOpen(true);
  };

  const handleCloseSecond = () => {
    setIsSecondOpen(false);
    // Mark both as dismissed in session storage
    window.sessionStorage.setItem("admissionPopupDismissed", "true");
  };

  return (
    <>
      {/* First Popup */}
      {isFirstOpen && (
        <div className="fixed inset-0 z-70 flex items-start justify-center bg-black/60 px-4 pt-8 sm:pt-10 pb-3 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl h-[calc(100vh-2.75rem)] sm:h-[calc(100vh-3.25rem)] overflow-scroll rounded-2xl bg-(--card) shadow-2xl">
            <button
              type="button"
              onClick={handleCloseFirst}
              className="absolute right-0 top-0 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white transition-colors shadow-lg active:scale-95"
            >
              <X size={22} />
            </button>
            <img src={popupimage} alt="Popup 1" className=" object-contain" />
          </div>
        </div>
      )}

      {/* Second Popup */}
      {isSecondOpen && (
        <div className="fixed inset-0 z-80 flex items-start justify-center bg-black/60 px-4 pt-8 sm:pt-10 pb-3 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl h-[calc(100vh-2.75rem)] sm:h-[calc(100vh-3.25rem)] overflow-scroll rounded-2xl bg-(--card) shadow-2xl">
            <button
              type="button"
              onClick={handleCloseSecond}
              className="absolute right-3 top-3 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-900 text-white transition-colors shadow-lg active:scale-95"
            >
              <X size={22} />
            </button>
            <img src={popupimage2} alt="Popup 2" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionPopup;
