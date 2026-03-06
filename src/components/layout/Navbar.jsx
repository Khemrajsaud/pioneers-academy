import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X, ChevronDown, Megaphone } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // about dropdown
  const [resourcesOpen, setResourcesOpen] = useState(false); // resources dropdown
  const [showAdmissionBar, setShowAdmissionBar] = useState(true);
  const dropdownRef = useRef(null);
  const resourcesRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileResourcesRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      const isInsideDesktopLeadership =
        dropdownRef.current && dropdownRef.current.contains(event.target);
      const isInsideDesktopResources =
        resourcesRef.current && resourcesRef.current.contains(event.target);
      const isInsideMobileLeadership =
        mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target);
      const isInsideMobileResources =
        mobileResourcesRef.current && mobileResourcesRef.current.contains(event.target);

      if (!isInsideDesktopLeadership && !isInsideMobileLeadership) {
        setDropdownOpen(false);
      }

      if (!isInsideDesktopResources && !isInsideMobileResources) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setShowAdmissionBar(window.scrollY < 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything when clicking link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/95 backdrop-blur-md shadow-sm">
      {showAdmissionBar && (
        <div className="border-b border-[color:var(--border)] bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="mx-auto flex items-center justify-center gap-2 px-3 py-2 text-center text-xs font-semibold sm:text-sm">
            <Megaphone size={16} className="shrink-0" />
            <span>
              {language === "en" ? "School Admission Open for 2083" : "विद्यालय भर्ना २०८३ का लागि खुला छ"}
            </span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" onClick={handleLinkClick} className="hover:opacity-80 transition-opacity duration-300">
            <img className="w-12 sm:w-14 md:w-16" src={logo} alt="Pioneers Academy Logo" />
          </Link>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-[color:var(--text)]">
              Pioneers Academy
            </h1>
            <p className="hidden sm:block text-xs text-[color:var(--muted)] font-medium">Excellence in Education</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-[color:var(--text)]">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.home}
          </Link>

          {/* About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.about}
          </Link>

          {/* About Dropdown - School Leaders */}
          <div
            className="relative group text-[color:var(--text)]"
            ref={dropdownRef}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200 flex items-center gap-1"
              title="School Leadership"
            >
              {t.nav.leadership}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-1 left-0 w-56 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-lg overflow-hidden animate-fadeInDown">
                <Link
                  to="/history"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.principalMessage}
                </Link>
                <Link
                  to="/team"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.board}
                </Link>
                <Link
                  to="/chairman-message"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.chairman}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/academic"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.rules}
          </Link>
          {/* Resources Dropdown */}
          <div className="relative group text-[color:var(--text)]" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200 flex items-center gap-1"
              title="Resources"
            >
              {t.nav.resources}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full mt-1 left-0 w-56 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] shadow-lg overflow-hidden animate-fadeInDown">
                <Link
                  to="/resources/gallery"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  to="/resources/news"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.news}
                </Link>
                <Link
                  to="/resources/notices"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.notices}
                </Link>
                <Link
                  to="/resources/download"
                  onClick={handleLinkClick}
                  className="block px-4 py-2.5 text-sm hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-colors duration-200"
                >
                  {t.nav.download}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="px-3 py-2 text-sm font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] rounded-md transition-all duration-200"
          >
            {t.nav.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Language and Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] font-semibold text-sm transition-all duration-200"
              aria-label="Toggle language"
            >
              {language === "en" ? "NE" : "EN"}
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-1.5 text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Theme and Menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--card)] p-1.5 text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-[color:var(--text)] hover:text-[color:var(--primary)] transition-all duration-200 p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full border-b border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--text)] flex flex-col space-y-1 px-4 py-3 shadow-lg animate-slideInDown">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.home}
          </Link>

          {/* Mobile About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.about}
          </Link>

          {/* Mobile Leadership Dropdown */}
          <div ref={mobileDropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium flex items-center justify-between"
            >
              {t.nav.leadership}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="ml-4 mt-1 flex flex-col space-y-1 animate-fadeInDown">
                <Link
                  to="/history"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.principalMessage}
                </Link>
                <Link
                  to="/team"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.board}
                </Link>
                <Link
                  to="/chairman-message"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.chairman}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/academic"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.rules}
          </Link>
          {/* Mobile Resources Dropdown */}
          <div ref={mobileResourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="w-full px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium flex items-center justify-between"
            >
              {t.nav.resources}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="ml-4 mt-1 flex flex-col space-y-1 animate-fadeInDown">
                <Link
                  to="/resources/gallery"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  to="/resources/news"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.news}
                </Link>
                <Link
                  to="/resources/notices"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 text-sm"
                >
                  {t.nav.notices}
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="px-4 py-2.5 rounded-md hover:bg-[color:var(--bg-alt)] hover:text-[color:var(--primary)] transition-all duration-200 font-medium"
          >
            {t.nav.contact}
          </Link>

          <div className="mt-2 pt-2 border-t border-[color:var(--border)]">
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-full inline-flex items-center justify-center rounded-md border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2.5 text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white hover:border-[color:var(--primary)] font-semibold text-sm transition-all duration-200"
              aria-label="Toggle language"
            >
              {language === "en" ? "Switch to Nepali (नेपाली)" : "Switch to English (EN)"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
