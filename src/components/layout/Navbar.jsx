import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X, ChevronDown, Languages } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // about dropdown
  const [resourcesOpen, setResourcesOpen] = useState(false); // resources dropdown
  const dropdownRef = useRef(null);
  const resourcesRef = useRef(null);
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
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

  // Close everything when clicking link (mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setResourcesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={handleLinkClick}>
            <img className="lg:w-25 w-20" src={logo} alt="logo" />
          </Link>
          <h1 className="text-lg font-semibold text-[color:var(--text)]">
            Pioneers Academy Kailali
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-[color:var(--text)]">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.home}
          </Link>

          {/* About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
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
              className="hover:text-[color:var(--primary)]  flex items-center gap-1"
              title="School Leadership"
            >
              {t.nav.leadership}{" "}
              <ChevronDown className="w-4 h-4 text-[color:var(--text)]  group-hover:text-blue-800 " />
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
                  to="/achievements"
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
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.rules}
          </Link>
          {/* Resources Dropdown */}
          <div className="relative group  text-[color:var(--text)]" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="hover:text-[color:var(--primary)]  flex items-center gap-1"
              title="Resources"
            >
              {t.nav.resources}{" "}
              <ChevronDown className="w-4 h-4 text-[color:var(--text)]  group-hover:text-blue-800 " />
            </button>

            {resourcesOpen && (
              <div className="absolute top-8 left-0 w-56 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--text)] shadow-lg">
                {/* <Link
                  to="/resources"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.overview}
                </Link> */}
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
                <Link
                  to="/resources/routine"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.routine}
                </Link>
                <Link
                  to="/resources/downloads"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.downloads}
                </Link>
                <Link
                  to="/resources/events"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.events}
                </Link>
                <Link
                  to="/resources/exams"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.exams}
                </Link>
                <Link
                  to="/resources/parents"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:bg-[color:var(--bg-alt)]"
                >
                  {t.nav.parents}
                </Link>
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

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 text-[color:var(--text)] shadow-sm hover:text-[color:var(--primary)] font-semibold text-sm"
            aria-label="Toggle language"
          >
            {language === "en" ? "NE" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-2 text-[color:var(--text)] shadow-sm hover:text-[color:var(--primary)]"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[color:var(--text)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-0 top-full w-full border-b border-[color:var(--border)] bg-[color:var(--bg)] text-[color:var(--text)] flex flex-col space-y-3 px-5 py-4 shadow-lg">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.home}
          </Link>

          {/* Mobile About Us Direct Link */}
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.about}
          </Link>

          {/* Mobile Leadership Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left hover:text-[color:var(--primary)]"
            >
              {t.nav.leadership} ▼
            </button>

            {dropdownOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/history"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.principalMessage}
                </Link>
                <Link
                  to="/team"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.board}
                </Link>
                <Link
                  to="/achievements"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.chairman}
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/academic"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.academics}
          </Link>
          <Link
            to="/facilities"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.facilities}
          </Link>
          <Link
            to="/rules"
            onClick={handleLinkClick}
            className="hover:text-[color:var(--primary)]"
          >
            {t.nav.rules}
          </Link>
          {/* Mobile Resources Dropdown */}
          <div>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="w-full text-left hover:text-[color:var(--primary)]"
            >
              {t.nav.resources} ▼
            </button>

            {resourcesOpen && (
              <div className="ml-4 mt-2 flex flex-col space-y-2">
                <Link
                  to="/resources"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.overview}
                </Link>
                <Link
                  to="/resources/gallery"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.gallery}
                </Link>
                <Link
                  to="/resources/news"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.news}
                </Link>
                <Link
                  to="/resources/routine"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.routine}
                </Link>
                <Link
                  to="/resources/downloads"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.downloads}
                </Link>
                <Link
                  to="/resources/events"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.events}
                </Link>
                <Link
                  to="/resources/exams"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.exams}
                </Link>
                <Link
                  to="/resources/parents"
                  onClick={handleLinkClick}
                  className="hover:text-[color:var(--primary)]"
                >
                  {t.nav.parents}
                </Link>
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
      )}
    </nav>
  );
};

export default Navbar;
