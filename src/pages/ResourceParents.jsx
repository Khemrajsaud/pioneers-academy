import { FileText, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import homepage from "../assets/images/homepage.png";

const ResourceParents = () => {
  const { t } = useLanguage();
  const parentResources = [
    "Student Handbook",
    "Code of Conduct",
    "Attendance Policy",
    "Safety Guidelines",
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="Parent Resources" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.nav.parents}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} className="text-[color:var(--primary)]" />
            <h2 className="text-xl font-bold">Useful Guides</h2>
          </div>
          <ul className="space-y-3 text-sm text-[color:var(--muted)]">
            {parentResources.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FileText size={16} className="text-[color:var(--primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourceParents;
