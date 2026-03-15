import {
  Building2, BookOpen, Bus, Coffee, Dumbbell, FlaskConical, Monitor, Shield, Trophy,
  Music, Users, Brain, Wifi, Microscope, Presentation, Award
} from "lucide-react";
import homepage from "../assets/images/about.png";
import { useLanguage } from "../contexts/LanguageContext";

const Facilities = () => {
  // Access global translations via our custom language context
  const { t } = useLanguage();

  // Array of all school services. These map directly to translation keys
  // for easy maintenance of both English and Nepali versions.
  const facilities = [
    {
      title: t.facilities.list.classroom.title,
      description: t.facilities.list.classroom.description,
      icon: <Building2 size={24} />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t.facilities.list.science.title,
      description: t.facilities.list.science.description,
      icon: <FlaskConical size={24} />,
      color: "from-green-500 to-green-600"
    },
    {
      title: t.facilities.list.computer.title,
      description: t.facilities.list.computer.description,
      icon: <Monitor size={24} />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: t.facilities.list.library.title,
      description: t.facilities.list.library.description,
      icon: <BookOpen size={24} />,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: t.facilities.list.sports.title,
      description: t.facilities.list.sports.description,
      icon: <Dumbbell size={24} />,
      color: "from-red-500 to-red-600"
    },
    {
      title: t.facilities.list.cafeteria.title,
      description: t.facilities.list.cafeteria.description,
      icon: <Coffee size={24} />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: t.facilities.list.transport.title,
      description: t.facilities.list.transport.description,
      icon: <Bus size={24} />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: t.facilities.list.music.title,
      description: t.facilities.list.music.description,
      icon: <Music size={24} />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: t.facilities.list.dance.title,
      description: t.facilities.list.dance.description,
      icon: <Trophy size={24} />,
      color: "from-fuchsia-500 to-fuchsia-600"
    },
    {
      title: t.facilities.list.multimedia.title,
      description: t.facilities.list.multimedia.description,
      icon: <Presentation size={24} />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: t.facilities.list.counselling.title,
      description: t.facilities.list.counselling.description,
      icon: <Brain size={24} />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: t.facilities.list.auditorium.title,
      description: t.facilities.list.auditorium.description,
      icon: <Presentation size={24} />,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: t.facilities.list.wifi.title,
      description: t.facilities.list.wifi.description,
      icon: <Wifi size={24} />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: t.facilities.list.eca.title,
      description: t.facilities.list.eca.description,
      icon: <Award size={24} />,
      color: "from-sky-500 to-sky-600"
    },
    {
      title: t.facilities.list.infrastructure.title,
      description: t.facilities.list.infrastructure.description,
      icon: <Building2 size={24} />,
      color: "from-slate-500 to-slate-600"
    },
    {
      title: t.facilities.list.scholarships.title,
      description: t.facilities.list.scholarships.description,
      icon: <Award size={24} />,
      color: "from-lime-500 to-lime-600"
    },
  ];

  // Mini features shown in the highlight section.
  const highlights = [
    t.facilities.highlights.wifi,
    t.facilities.highlights.playground,
    t.facilities.highlights.medical,
    t.facilities.highlights.parking,
    t.facilities.highlights.accessibility,
    t.facilities.highlights.purified,
    t.facilities.highlights.cctv,
    t.facilities.highlights.emergency,
  ];

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Hero */}
      <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden group">
        <img
          src={homepage}
          alt="Facilities"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/55" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-(--primary) h-12 sm:h-14 w-2 rounded-xs" />
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold">
                {t.facilities.hero}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 md:space-y-20">
        {/* WELCOME AREA
            Quick intro title about school infrastructure. */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
            {t.facilities.hero}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-(--muted) max-w-3xl mx-auto leading-relaxed">
            {t.facilities.subtitle}
          </p>
        </section>

        {/* FACILITIES GRID
            The main list of services displayed in interactive cards. */}
        <section className="animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
            {t.facilities.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-(--border) bg-(--card) p-4 sm:p-6 hover:shadow-lg hover:border-(--primary) transition duration-300 transform hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-full bg-linear-to-br ${facility.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:shadow-lg transition`}>
                  {facility.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HIGHLIGHTS BAR
            Short list of secondary features with a simple checkmark style. */}
        <section className="rounded-2xl border-2 border-(--border) bg-(--bg-alt) p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
            {t.facilities.highlights.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-(--card) border border-(--border) hover:border-(--primary) hover:bg-(--primary)/5 transition duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-linear-to-r from-(--primary) to-(--primary-strong) flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xs sm:text-sm text-(--text) font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* INFO GRID
            Additional information about safety, inclusivity, and recognition. */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeInUp">
          <div className="rounded-xl bg-(--card) border border-(--border) p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-lg sm:text-xl font-bold text-(--text) mb-2">
              {t.facilities.extra.awardTitle}
            </h4>
            <p className="text-xs sm:text-sm text-(--muted)">
              {t.facilities.extra.awardDesc}
            </p>
          </div>
          <div className="rounded-xl bg-(--card) border border-(--border) p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-lg sm:text-xl font-bold text-(--text) mb-2">
              {t.facilities.extra.securityTitle}
            </h4>
            <p className="text-xs sm:text-sm text-(--muted)">
              {t.facilities.extra.securityDesc}
            </p>
          </div>
          <div className="rounded-xl bg-(--card) border border-(--border) p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">♿</div>
            <h4 className="text-lg sm:text-xl font-bold text-(--text) mb-2">
              {t.facilities.extra.inclusiveTitle}
            </h4>
            <p className="text-xs sm:text-sm text-(--muted)">
              {t.facilities.extra.inclusiveDesc}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
