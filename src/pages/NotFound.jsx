import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-(--bg)">
      <div className="w-full max-w-xl text-center rounded-2xl border border-(--border) bg-(--card) p-8 sm:p-10 shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-(--primary)/10 text-(--primary)">
          <AlertTriangle size={28} />
        </div>

        <p className="text-sm font-semibold tracking-wide text-(--muted) mb-2">404 ERROR</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-(--text) mb-3">Page Not Found</h1>
        <p className="text-sm sm:text-base text-(--muted) mb-7">
          The page you are looking for does not exist or the URL is incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-(--primary) text-white font-semibold hover:opacity-90 transition-opacity"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
