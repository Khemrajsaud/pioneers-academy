import { ClipboardList } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import homepage from "../assets/images/homepage.png";

const ResourceRoutine = () => {
  const { t } = useLanguage();
  const routineItems = [
    "Primary Section (Grade 1-5)",
    "Lower Secondary (Grade 6-8)",
    "Secondary (Grade 9-10)",
    "Higher Secondary (Grade 11-12)",
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="Routine" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.nav.routine}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList size={20} className="text-[color:var(--primary)]" />
            <h2 className="text-xl font-bold">Class Timetables</h2>
          </div>
          <ul className="space-y-2 text-sm text-[color:var(--text)]">
            {routineItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-[color:var(--primary)]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourceRoutine;
