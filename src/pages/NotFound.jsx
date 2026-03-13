import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * NotFound component for rendering the 404 Error page
 */
const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-(--bg) transition-colors">
      {/* Centered Error Container */}
      <div className="w-full max-w-xl text-center rounded-2xl border border-(--border) bg-(--card) p-8 sm:p-10 shadow-sm transition-colors">
        {/* Warning Indicator Icon */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-(--primary)/10 text-(--primary) shadow-sm">
          <AlertTriangle size={28} />
        </div>

        {/* Semantic Error Status */}
        <p className="text-sm font-semibold tracking-widest text-(--muted) mb-2 uppercase">
          {t.notFound.hero}
        </p>

        {/* Primary Identity: Resource Not Located */}
        <h1 className="text-3xl sm:text-4xl font-bold text-(--text) mb-3 tracking-tight leading-tight">
          {t.notFound.title}
        </h1>

        {/* Helpful Context and Recovery Path Illustration */}
        <p className="text-sm sm:text-base text-(--muted) mb-7 leading-relaxed max-w-md mx-auto">
          {t.notFound.subtitle}
        </p>

        {/* Primary Navigation Recovery Action */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-(--primary) text-white font-semibold hover:opacity-95 transition-opacity shadow-md"
        >
          <Home size={18} />
          {t.notFound.backToHome}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
