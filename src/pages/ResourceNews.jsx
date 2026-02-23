import { Megaphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import homepage from "../assets/images/homepage.png";

const ResourceNews = () => {
  const { t } = useLanguage();
  const newsItems = [
    { title: "Annual Sports Day 2026", date: "Feb 18, 2026" },
    { title: "Grade 10 Pre-Board Schedule", date: "Feb 12, 2026" },
    { title: "Science Exhibition Winners", date: "Feb 05, 2026" },
    { title: "Parent-Teacher Meeting", date: "Jan 30, 2026" },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="News" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.nav.news}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Megaphone size={20} className="text-[color:var(--primary)]" />
            <h2 className="text-xl font-bold">Latest Updates</h2>
          </div>
          <ul className="space-y-3 text-sm text-[color:var(--muted)]">
            {newsItems.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span>{item.title}</span>
                <span className="text-xs">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourceNews;
