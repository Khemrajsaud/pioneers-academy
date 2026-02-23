import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <Navbar />
      <main className="px-10">
        {children}
      </main>
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--primary)] shadow-lg transition hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <span className="text-lg">↑</span>
        </button>
      )}
    </>
  )
}

export default Layout
