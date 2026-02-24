import { Building2, BookOpen, Bus, Coffee, Dumbbell, FlaskConical, Monitor, Shield, Trophy } from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

const Facilities = () => {
  const { t } = useLanguage();
  
  const facilities = [
    {
      title: t.facilities.classroom.title,
      description: t.facilities.classroom.description,
      icon: <Building2 size={24} />,
    },
    {
      title: t.facilities.science.title,
      description: t.facilities.science.description,
      icon: <FlaskConical size={24} />,
    },
    {
      title: t.facilities.computer.title,
      description: t.facilities.computer.description,
      icon: <Monitor size={24} />,
    },
    {
      title: t.facilities.library.title,
      description: t.facilities.library.description,
      icon: <BookOpen size={24} />,
    },
    {
      title: t.facilities.sports.title,
      description: t.facilities.sports.description,
      icon: <Dumbbell size={24} />,
    },
    {
      title: t.facilities.cafeteria.title,
      description: t.facilities.cafeteria.description,
      icon: <Coffee size={24} />,
    },
    {
      title: t.facilities.transport.title,
      description: t.facilities.transport.description,
      icon: <Bus size={24} />,
    },
    {
      title: t.facilities.security.title,
      description: t.facilities.security.description,
      icon: <Shield size={24} />,
    },
    {
      title: t.facilities.auditorium.title,
      description: t.facilities.auditorium.description,
      icon: <Trophy size={24} />,
    },
  ];

  const highlights = [
    t.facilities.highlights.wifi,
    t.facilities.highlights.playground,
    t.facilities.highlights.medical,
    t.facilities.highlights.parking,
    t.facilities.highlights.accessibility,
    t.facilities.highlights.purified,
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img src={homepage} alt="Facilities" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            {t.facilities.hero}
          </h1> */}
          
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-14 sm:space-y-20">
        {/* Intro */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            A Campus Built for Learning
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            {t.facilities.subtitle}
          </p>
        </section>

        {/* Facilities Grid */}
        <section className="animate-fadeInUp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
                  {facility.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            {t.facilities.highlights.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] hover:border-[color:var(--primary)] transition"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-xs sm:text-sm text-[color:var(--text)] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl border-2 border-[color:var(--primary)] bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Visit Our Campus
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our facilities in person and experience the Pioneers Academy learning environment.
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
            Book a Tour
          </button>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
