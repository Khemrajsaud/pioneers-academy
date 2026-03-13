import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import Nepal from "../../assets/icons/NP.png";
import English from "../../assets/icons/US.png";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X, ChevronDown, Megaphone } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

/**
 * Navbar Component
 * The main navigational hub for the website.
 * Includes admission marquee, multi-language support, theme switching, and responsive mobile controls.
 */
const Navbar = () => {
  // --- STATE & CONTEXT ---
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navRef = useRef(null);

  // Refs for outside click detection
  const dropdownRef = useRef(null);
  const resourcesRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileResourcesRef = useRef(null);

  // Initialize theme from storage or system preference
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // --- HANDLERS ---

  // Close various navigation elements when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      const isInsideDesktopLeadership = dropdownRef.current?.contains(event.target);
      const isInsideDesktopResources = resourcesRef.current?.contains(event.target);
      const isInsideMobileLeadership = mobileDropdownRef.current?.contains(event.target);
      const isInsideMobileResources = mobileResourcesRef.current?.contains(event.target);
      const isInsideNav = navRef.current?.contains(event.target);

      if (!isInsideDesktopLeadership && !isInsideMobileLeadership) setDropdownOpen(false);
      if (!isInsideDesktopResources && !isInsideMobileResources) setResourcesOpen(false);
      if (!isInsideNav) setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Persist theme changes to HTML attribute and LocalStorage
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Utility to close all overlays when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setResourcesOpen(false);
  };

  return (
    <>
      {/* ADMISSION ANNOUNCEMENT MARQUEE
          A scrolling bar for high-priority news like admissions. */}
      <div className="overflow-hidden border-b border-(--border) bg-linear-to-r from-(--primary) to-(--primary-strong) text-white">
        <div className="admission-marquee">
          {[0, 1].map((item) => (
            <div key={item} className="flex shrink-0 items-center gap-2 px-8 py-2 text-xs font-semibold sm:text-sm">
              {/* <Megaphone size={20} className="shrink-0 animate-pulse-subtle" /> */}
              <span>🎓 School Admission Open for 2026!</span>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY NAVIGATION BAR
          Primary navigation with desktop links and mobile hamburger menu. */}
      <nav ref={navRef} className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">

          {/* BRANDING (Logo & School Name) */}
          <div className="flex items-center gap-3">
            <Link to="/" onClick={handleLinkClick} className="hover:opacity-80 transition-opacity duration-300">
              <img className="w-12 sm:w-14" src={logo} alt="Logo" />
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-black text-(--text) tracking-tight">
                {t.nav.brandTitle}
              </h1>
              <p className="hidden sm:block text-[10px] sm:text-xs text-(--muted) font-bold uppercase tracking-widest leading-none">
                {t.nav.brandSubtitle}
              </p>
            </div>
          </div>

          {/* DESKTOP LINKS (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-(--text)">
            <Link to="/" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.home}</Link>
            <Link to="/about" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.about}</Link>

            {/* Leadership Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-3 py-2 text-sm font-semibold hover:text-(--primary) flex items-center gap-1 transition-colors"
              >
                {t.nav.leadership}
                <ChevronDown size={14} className={dropdownOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 left-0 w-52 rounded-xl border border-(--border) bg-(--card) shadow-xl overflow-hidden animate-fadeInDown">
                  <Link to="/history" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.principalMessage}</Link>
                  <Link to="/team" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.board}</Link>
                  <Link to="/chairman-message" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.chairman}</Link>
                </div>
              )}
            </div>

            <Link to="/academic" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.academics}</Link>
            <Link to="/facilities" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.facilities}</Link>
            <Link to="/rules" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.rules}</Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="px-3 py-2 text-sm font-semibold hover:text-(--primary) flex items-center gap-1 transition-colors"
              >
                {t.nav.resources}
                <ChevronDown size={14} className={resourcesOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full mt-2 left-0 w-52 rounded-xl border border-(--border) bg-(--card) shadow-xl overflow-hidden animate-fadeInDown">
                  <Link to="/resources/gallery" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.gallery}</Link>
                  <Link to="/resources/news" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.news}</Link>
                  <Link to="/resources/notices" onClick={handleLinkClick} className="block px-4 py-3 text-sm hover:bg-(--bg-alt) hover:text-(--primary)">{t.nav.notices}</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="px-3 py-2 text-sm font-semibold hover:text-(--primary) transition-colors">{t.nav.contact}</Link>
          </div>

          {/* CONTROLS (Theme & Language) */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Desktop Settings */}
            <div className="hidden lg:flex items-center gap-2">
              <button onClick={toggleLanguage} className="p-2 rounded-lg border border-(--border) bg-(--card) hover:bg-(--bg-alt) flex items-center gap-2 transition-all">
                <img src={language === "ne" ? Nepal : English} alt="flag" className="w-5 h-5 rounded-sm object-cover" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </button>
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg border border-(--border) bg-(--card) hover:bg-(--bg-alt) text-(--text) transition-all">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Actions Container */}
            <div className="lg:hidden flex items-center gap-2">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg bg-(--bg-alt) text-(--text)">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-(--primary) text-white shadow-lg shadow-blue-500/20">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {isOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full border-b border-(--border) bg-(--bg) text-(--text) p-4 shadow-2xl animate-slideInDown flex flex-col gap-1">
            <Link to="/" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.home}</Link>
            <Link to="/about" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.about}</Link>

            {/* Mobile Leadership */}
            <div ref={mobileDropdownRef}>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="w-full p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm flex justify-between items-center">
                {t.nav.leadership}
                <ChevronDown size={16} className={dropdownOpen ? 'rotate-180' : ''} />
              </button>
              {dropdownOpen && (
                <div className="ml-4 pl-4 border-l-2 border-(--border) flex flex-col gap-1 py-1">
                  <Link to="/history" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.principalMessage}</Link>
                  <Link to="/team" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.board}</Link>
                  <Link to="/chairman-message" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.chairman}</Link>
                </div>
              )}
            </div>

            <Link to="/academic" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.academics}</Link>
            <Link to="/facilities" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.facilities}</Link>
            <Link to="/rules" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.rules}</Link>

            {/* Mobile Resources */}
            <div ref={mobileResourcesRef}>
              <button onClick={() => setResourcesOpen(!resourcesOpen)} className="w-full p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm flex justify-between items-center">
                {t.nav.resources}
                <ChevronDown size={16} className={resourcesOpen ? 'rotate-180' : ''} />
              </button>
              {resourcesOpen && (
                <div className="ml-4 pl-4 border-l-2 border-(--border) flex flex-col gap-1 py-1">
                  <Link to="/resources/gallery" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.gallery}</Link>
                  <Link to="/resources/news" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.news}</Link>
                  <Link to="/resources/notices" onClick={handleLinkClick} className="p-2.5 text-sm hover:text-(--primary)">{t.nav.notices}</Link>
                </div>
              )}
            </div>

            <Link to="/contact" onClick={handleLinkClick} className="p-3 rounded-xl hover:bg-(--bg-alt) font-bold text-sm">{t.nav.contact}</Link>

            <div className="mt-2 pt-4 border-t border-(--border)">
              <button onClick={toggleLanguage} className="w-full p-4 rounded-xl border border-(--border) bg-(--card) flex items-center justify-center gap-3 font-black text-sm uppercase tracking-tighter shadow-sm active:scale-95 transition-transform">
                <img src={language === "ne" ? Nepal : English} alt="flag" className="w-6 h-6 rounded-md shadow-sm" />
                {language === "ne" ? "English Version" : "नेपाली संस्करण"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
