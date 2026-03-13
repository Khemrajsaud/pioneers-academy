import { AlertTriangle, CheckCircle, Clock, Shield, UserCheck, Users } from "lucide-react";
import homepage from "../assets/images/academy.png";
import { useLanguage } from "../contexts/LanguageContext";

const Rules = () => {
  // Access global translation keys
  const { t } = useLanguage();

  // Array of school rules and their respective categories (Attendance, Dress Code, etc.)
  const rules = [
    {
      title: t.rules.attendance.title,
      icon: <Clock size={24} />,
      points: t.rules.attendance.rules,
    },
    {
      title: t.rules.uniform.title,
      icon: <UserCheck size={24} />,
      points: t.rules.uniform.rules,
    },
    {
      title: t.rules.safety.title,
      icon: <Shield size={24} />,
      points: t.rules.safety.rules,
    },
    {
      title: t.rules.academic.title,
      icon: <CheckCircle size={24} />,
      points: t.rules.academic.rules,
    },
    {
      title: t.rules.behavior.title,
      icon: <Users size={24} />,
      points: t.rules.behavior.rules,
    },
    {
      title: t.rules.prohibited.title,
      icon: <AlertTriangle size={24} />,
      points: t.rules.prohibited.rules,
    },
  ];

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img src={homepage} alt="School Rules" className="w-full h-full object-cover" />

      </div>

      {/* --- CONTENT AREA --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-12">
        {/* HEADER SECTION 
            Brief intro explaining the importance of these guidelines. */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
            {t.rules.hero}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-(--muted) max-w-3xl mx-auto leading-relaxed">
            {t.rules.subtitle}
          </p>
        </section>

        {/* RULES GRID 
            Displays different categories of rules in clean, bordered cards. */}
        <section className="animate-fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-(--primary) to-(--primary-strong) flex items-center justify-center text-white mb-4 shadow-md">
                  {rule.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-4">
                  {rule.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-(--muted)">
                  {rule.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-2">
                      <span className="text-(--primary) font-bold shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rules;
