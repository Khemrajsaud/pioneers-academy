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
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/95 backdrop-blur shadow-sm">
      {showAdmissionBar && (
        <div className="border-b border-[color:var(--border)] bg-[color:var(--primary)] text-white">
          <div className="mx-auto flex items-center justify-center gap-2 px-3 py-2 text-center text-xs font-semibold sm:text-sm">
            <Megaphone size={16} className="shrink-0" />
            <span>{language === "en" ? "School Admission Open for 8083" : "विद्यालय भर्ना ८०८३ का लागि खुला छ"}</span>
          </div>
        </div>
      )}

      <div className="mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/" onClick={handleLinkClick} className="hover:scale-105 transition duration-300">
            <img className="w-14 sm:w-16 md:w-20" src={logo} alt="logo" />
          </Link>
          <h1 className=" sm:block text-base sm:text-lg font-bold text-[color:var(--text)]">
            Pioneers Academy
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[color:var(--text)]">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] transition duration-300 font-medium"
          >
            {t.nav.home}
          </Link>

          {/* About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] transition duration-300 font-medium"
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
              className="hover:text-[color:var(--primary)] transition duration-300 flex items-center gap-1 font-medium group-hover:scale-105"
              title="School Leadership"
            >
              {t.nav.leadership}{" "}
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition duration-300" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-8 left-0 w-52 rounded-lg  border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] shadow-lg">
                <Link
                  to="/history"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.principalMessage}
                </Link>
                <Link
                  to="/team"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.board}
                </Link>
                <Link
                  to="/chairman-message"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.chairman}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/academic"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] transition duration-300 font-medium"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] transition duration-300 font-medium"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] transition duration-300 font-medium"
          >
            {t.nav.rules}
          </Link>
          {/* Resources Dropdown */}

          
          <div className="relative group text-[color:var(--text)]" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="hover:text-[color:var(--primary)] transition duration-300 flex items-center gap-1 font-medium group-hover:scale-105"
              title="Resources"
            >
              {t.nav.resources}{" "}
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition duration-300" />
            </button>

            {resourcesOpen && (
              <div className="absolute top-8 left-0 w-56 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] shadow-lg animate-slideInDown">
               
                <Link
                  to="/resources/gallery"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  to="/resources/news"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.news}
                </Link>
                {/* <Link
                  to="/resources/routine"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.routine}
                </Link> */}
                {/* <Link
                  to="/resources/downloads"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.downloads}
                </Link> */}
                {/* <Link
                  to="/resources/events"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.events}
                </Link>
                 */}
                <Link
                  to="/resources/notices"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.notices}
                </Link>
                {/* <Link
                  to="/resources/exams"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.exams}
                </Link> */}
              </div>
            )}
          </div>





          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
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
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 text-[color:var(--text)] shadow-sm hover:bg-[color:var(--primary)] hover:text-white font-semibold text-sm transition duration-300"
              aria-label="Toggle language"
            >
              {language === "en" ? "NE" : "EN"}
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-1.5 text-[color:var(--text)] shadow-sm hover:bg-[color:var(--primary)] hover:text-white transition duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Theme and Menu (Theme First) */}
          <div className="md:hidden flex items-center gap-1">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-1 text-[color:var(--text)] shadow-sm hover:bg-[color:var(--primary)] hover:text-white transition duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-[color:var(--text)] hover:text-[color:var(--primary)] transition duration-300 p-1"
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
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.home}
          </Link>

          {/* Mobile About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.about}
          </Link>

          {/* Mobile Leadership Dropdown */}
          <div ref={mobileDropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300 flex items-center justify-between"
            >
              {t.nav.leadership}
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="ml-4 mt-1 flex flex-col space-y-1 animate-slideInDown">
                <Link
                  to="/history"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.principalMessage}
                </Link>
                <Link
                  to="/team"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.board}
                </Link>
                <Link
                  to="/chairman-message"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.chairman}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/academic"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.rules}
          </Link>
          {/* Mobile Resources Dropdown */}
          <div ref={mobileResourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="w-full text-left hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300 flex items-center justify-between"
            >
              {t.nav.resources}
              <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {resourcesOpen && (
              <div className="ml-4 mt-1 flex flex-col space-y-1 animate-slideInDown">
                <Link
                  to="/resources/gallery"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  to="/resources/news"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.news}
                </Link>
                <Link
                  to="/resources/notices"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
                >
                  {t.nav.notices}
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)] hover:bg-[color:var(--bg-alt)] px-3 py-2 rounded-lg transition duration-300"
          >
            {t.nav.contact}
          </Link>

          <div className="mt-2 border-t border-[color:var(--border)] pt-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-full inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--text)] shadow-sm hover:bg-[color:var(--primary)] hover:text-white font-semibold text-sm transition duration-300"
              aria-label="Toggle language"
            >
              {language === "en" ? "Switch to Nepali (NE)" : "Switch to English (EN)"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
