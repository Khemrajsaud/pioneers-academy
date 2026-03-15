import { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";

const LoadingScreen = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 5, 100);
        if (next === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadComplete?.();
          }, 150);
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      <div className="relative flex flex-col items-center gap-8 p-8 md:p-12 rounded-2xl">
        <div className="relative animate-fadeInUp">
          <img
            src={logo}
            alt="Pioneers Academy Logo"
            className="h-28 w-28 sm:h-36 sm:w-36 object-contain"
          />
        </div>

        <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            Pioneers <span className="text-[#033186]">Academy</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium tracking-wide uppercase">
            Excellence & Innovation
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-3 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="w-56 sm:w-72 h-2 bg-white border border-slate-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4f7fd7] rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-slate-500 font-medium">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
