import { AlertTriangle, CheckCircle, Clock, Shield, UserCheck, Users } from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

const Rules = () => {
  const { t } = useLanguage();
  
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
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img src={homepage} alt="School Rules" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            {t.rules.hero}
          </h1> */}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-12">
        {/* Intro */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Building a Safe and Respectful Learning Environment
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            {t.rules.subtitle}
          </p>
        </section>

        {/* Rules Grid */}
        <section className="animate-fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
                  {rule.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-4">
                  {rule.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[color:var(--muted)]">
                  {rule.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-2">
                      <span className="text-[color:var(--primary)] font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Notice */}
        <section className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Note for Parents & Students
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Consistent adherence to these rules supports a healthy learning atmosphere. For questions or concerns, please contact the school administration.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Rules;
