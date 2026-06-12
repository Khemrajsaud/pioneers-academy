import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.png";
import Nepal from "../../assets/icons/NP.png";
import English from "../../assets/icons/US.png";
import { useLanguage } from "../../contexts/LanguageContext";

import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const aboutLinks = [
  { label: "Introduction", to: "/about" },
  { label: "Principal Message", to: "/history" },
  // { label: "Board of Directors", to: "/team" },
  // { label: "Chairman Message", to: "/chairman-message" },
  { label: "School Rules", to: "/rules" },
];

const academicLinks = [
  { label: "Primary", to: "/primary" },
  { label: "Lower Secondary", to: "/lower-secondary" },
  { label: "Secondary (SEE)", to: "/secondary" },
  { label: "Higher Secondary (+2)", to: "/higher-secondary" },
];

const resourceLinks = [
  { label: "Gallery", to: "/resources/gallery" },
  { label: "News", to: "/resources/news" },
  { label: "Notices", to: "/resources/notices" },
];

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const resourcesRef = useRef(null);
  const mobileAboutRef = useRef(null);
  const mobileAcademicsRef = useRef(null);
  const mobileResourcesRef = useRef(null);

  const carouselItems = [
    {
      type: "email",
      icon: <IoMailOutline className="text-lg" />,
      text: "contact@pioneers.edu.np",
      href: "mailto:contact@pioneers.edu.np",
    },
    {
      type: "phone",
      icon: <IoCallOutline className="text-lg" />,
      text: "+977-91-540488",
      href: "tel:+97791540488",
    },
    {
      type: "location",
      icon: <IoLocationOutline className="text-lg" />,
      text: "Lamkichuha-1, Lamki, Kailali",
      href: null,
    },
  ];

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideNav = navRef.current?.contains(event.target);
      const isInsideAbout = aboutRef.current?.contains(event.target);
      const isInsideAcademics = academicsRef.current?.contains(event.target);
      const isInsideResources = resourcesRef.current?.contains(event.target);
      const isInsideMobileAbout = mobileAboutRef.current?.contains(
        event.target,
      );
      const isInsideMobileAcademics = mobileAcademicsRef.current?.contains(
        event.target,
      );
      const isInsideMobileResources = mobileResourcesRef.current?.contains(
        event.target,
      );

      if (!isInsideAbout && !isInsideMobileAbout) setAboutOpen(false);
      if (!isInsideAcademics && !isInsideMobileAcademics)
        setAcademicsOpen(false);
      if (!isInsideResources && !isInsideMobileResources)
        setResourcesOpen(false);
      if (!isInsideNav) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setAboutOpen(false);
    setAcademicsOpen(false);
    setResourcesOpen(false);
  };

  const menuItemClass =
    "rounded-xl p-3 text-sm font-bold transition-colors hover:bg-(--bg-alt)";
  const dropdownClass =
    "absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-xl animate-fadeInDown";

  return (
    <>
      <div className="bg-[#1e3a8a] text-white py-2 overflow-hidden">
        <div className="marquee-track flex items-center gap-16 text-sm font-medium">
          {[0, 1].map((item) => (
            <div key={item} className="flex items-center gap-12 px-6">
              {/* Contact Info */}
              <a
                href="mailto:pioneerskailali@gmail.com"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <IoMailOutline />
                <span>pioneerskailali@gmail.com</span>
              </a>

              <a
                href="tel:+97791540488"
                className="flex items-center gap-2 hover:text-orange-400 transition"
              >
                <IoCallOutline />
                <span>+091-540488</span>
              </a>

              <div className="flex items-center gap-2">
                <IoLocationOutline />
                <span>Lamkichuha-1, Lamki, Kailali</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 border-l border-blue-400 pl-6">
                <a
                  href="https://www.facebook.com/pioneers.academy.lamki.kailali"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav
        ref={navRef}
        className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/95 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex min-w-0 items-center gap-3 transition-opacity duration-300 hover:opacity-80"
          >
            <img
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              src={logo}
              alt="Logo"
            />
            <div className="min-w-0">
              <h1 className="truncate text-lg font-black tracking-tight text-(--text) sm:text-xl">
                {t.nav.brandTitle}
              </h1>
            </div>
          </Link>

          <div className="hidden items-center gap-1 text-(--text) lg:flex xl:gap-2">
            <Link
              to="/"
              className="px-3 py-2 text-lg font-bold transition-colors hover:text-(--primary)"
            >
              {t.nav.home}
            </Link>

            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((value) => !value)}
                className="flex items-center gap-1 px-3 py-2 text-lg font-bold transition-colors hover:text-(--primary)"
              >
                {t.nav.about}
                <ChevronDown
                  size={14}
                  className={
                    aboutOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {aboutOpen && (
                <div className={dropdownClass}>
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg transition-colors hover:bg-blue-500 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" ref={academicsRef}>
              <button
                onClick={() => setAcademicsOpen((value) => !value)}
                className="flex items-center gap-1 px-3 py-2 text-lg font-bold transition-colors hover:text-(--primary)"
              >
                {t.nav.academics}
                <ChevronDown
                  size={14}
                  className={
                    academicsOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {academicsOpen && (
                <div className={dropdownClass}>
                  {academicLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg transition-colors hover:bg-blue-500 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/facilities"
              className="px-3 py-2 text-lg font-bold transition-colors hover:text-(--primary)"
            >
              {t.nav.facilities}
            </Link>

            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen((value) => !value)}
                className="flex items-center gap-1 px-3 py-2 text-lg font-bold transition-colors hover:text-(--primary)"
              >
                {t.nav.resources}
                <ChevronDown
                  size={14}
                  className={
                    resourcesOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {resourcesOpen && (
                <div className={dropdownClass}>
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-lg transition-colors hover:bg-blue-500 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="rounded-full bg-(--primary) px-4 py-2.5 text-lg font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Inquiry Open
            </Link>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-3 py-2 transition-all hover:bg-(--bg-alt)"
            >
              <img
                src={language === "ne" ? Nepal : English}
                alt="flag"
                className="h-5 w-5 rounded-sm object-cover"
              />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-(--border) bg-(--card) p-2 transition-all hover:bg-(--bg-alt)"
            >
              <img
                src={language === "ne" ? Nepal : English}
                alt="flag"
                className="h-5 w-5 rounded-sm object-cover"
              />
            </button>
            <button
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-full bg-(--primary) p-2.5 text-white shadow-lg shadow-blue-500/20"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full flex w-full flex-col gap-1 border-b border-(--border) bg-(--bg) p-4 text-(--text) shadow-2xl animate-slideInDown lg:hidden">
            <Link to="/" className= "rounded-xl p-3 text-lg font-bold hover:bg-(--bg-alt)" onClick={handleLinkClick}>
              {t.nav.home}
            </Link>

            <div ref={mobileAboutRef} className="rounded-xl">
              <button
                onClick={() => setAboutOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-xl p-3 text-lg font-bold hover:bg-(--bg-alt)"
              >
                {t.nav.about}
                <ChevronDown
                  size={16}
                  className={
                    aboutOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {aboutOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-(--border) py-1 pl-4">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="p-2.5 text-sm transition-colors hover:text-(--primary)"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div ref={mobileAcademicsRef} className="rounded-xl">
              <button
                onClick={() => setAcademicsOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-xl p-3 text-lg font-bold hover:bg-(--bg-alt)"
              >
                {t.nav.academics}
                <ChevronDown
                  size={16}
                  className={
                    academicsOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {academicsOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-(--border) py-1 pl-4">
                  {academicLinks.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="p-2.5 text-sm transition-colors hover:text-(--primary)"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/facilities"
              onClick={handleLinkClick}
              className="rounded-xl p-3 text-lg font-bold hover:bg-(--bg-alt)"
            >
              {t.nav.facilities}
            </Link>

            <div ref={mobileResourcesRef} className="rounded-xl">
              <button
                onClick={() => setResourcesOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-xl p-3 text-lg font-bold hover:bg-(--bg-alt)"
              >
                {t.nav.resources}
                <ChevronDown
                  size={16}
                  className={
                    resourcesOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              {resourcesOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l-2 border-(--border) py-1 pl-4">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="p-2.5 text-sm transition-colors hover:text-(--primary)"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="rounded-xl bg-(--primary) p-3 text-lg font-bold text-white"
            >
              Inquiry Open
            </Link>

            <div className="mt-2 border-t border-(--border) pt-4">
              <button
                onClick={toggleLanguage}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-(--border) bg-(--card) p-4 text-lg font-black uppercase tracking-tight shadow-sm transition-transform active:scale-95"
              >
                <img
                  src={language === "ne" ? Nepal : English}
                  alt="flag"
                  className="h-6 w-6 rounded-md shadow-sm"
                />
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
