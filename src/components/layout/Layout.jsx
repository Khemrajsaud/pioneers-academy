import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdmissionPopup from "../ui/AdmissionPopup";
import { IoIosArrowRoundUp } from "react-icons/io";

function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AdmissionPopup />
      <Navbar />
      <main className="">
        {children || <Outlet />}
      </main>
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-yellow-600 text-(--primary) shadow-lg transition hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <IoIosArrowRoundUp className="h-6 w-6 text-white" />
        </button>
      )}
    </>
  )
}

export default Layout
