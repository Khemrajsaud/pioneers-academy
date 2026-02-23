import { School } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import homepage from "../assets/images/homepage.png";

const ResourceExams = () => {
  const { t } = useLanguage();
  const exams = [
    "Unit Test I Schedule",
    "Mid-Term Exam Routine",
    "Final Exam Routine",
    "Result Publication Dates",
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="Exams" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.nav.exams}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <School size={20} className="text-[color:var(--primary)]" />
            <h2 className="text-xl font-bold">Exam Information</h2>
          </div>
          <ul className="space-y-2 text-sm text-[color:var(--text)]">
            {exams.map((item, idx) => (
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

export default ResourceExams;
