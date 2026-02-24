import React from "react";
import {
  CheckCircle,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const uniquePoints = [
    {
      icon: <Lightbulb size={24} />,
      title: t.about.unique.innovative.title,
      description: t.about.unique.innovative.description,
    },
    {
      icon: <Users size={24} />,
      title: t.about.unique.holistic.title,
      description: t.about.unique.holistic.description,
    },
    {
      icon: <Heart size={24} />,
      title: t.about.unique.experienced.title,
      description: t.about.unique.experienced.description,
    },
    {
      icon: <Star size={24} />,
      title: t.about.unique.global.title,
      description: t.about.unique.global.description,
    },
    {
      icon: <Target size={24} />,
      title: t.about.unique.modern.title,
      description: t.about.unique.modern.description,
    },
    {
      icon: <Users size={24} />,
      title: t.about.unique.values.title,
      description: t.about.unique.values.description,
    },
  ];

  const commitments = [
    {
      title: t.about.commitments.academic,
      points: [
        "Rigorous curriculum aligned with international standards",
        "Regular assessment and personalized feedback",
        "Continuous professional development for teachers",
        "Investment in modern learning resources",
      ],
    },
    {
      title: t.about.commitments.character,
      points: [
        "Nurturing core values through experiential learning",
        "Leadership and citizenship programs",
        "Moral and ethical education integrated throughout",
        "Mentorship and role modeling",
      ],
    },
    {
      title: t.about.commitments.safety,
      points: [
        "Safe and inclusive learning environment",
        "Mental health and counseling services",
        "Sports, arts, and extracurricular programs",
        "Nutritious meals and health care facilities",
      ],
    },
  ];

  const stats = [
    { number: "1000+", label: t.about.stats.students, color: "primary" },
    { number: "20+", label: t.about.stats.teachers, color: "accent" },
    { number: "25+", label: t.about.stats.years, color: "primary" },
    { number: "95%", label: t.about.stats.success, color: "accent" },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img
          src={homepage}
          alt="About Pioneers Academy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            {t.about.hero}
          </h1> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-16 sm:space-y-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fadeInUp">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
                {t.about.intro.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
                {t.about.intro.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] transition">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0 mt-1"
                  size={20}
                />
                <span className="text-sm sm:text-base text-[color:var(--muted)]">K-12 Education</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] transition">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0 mt-1"
                  size={20}
                />
                <span className="text-sm sm:text-base text-[color:var(--muted)]">Modern Facilities</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] transition">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0 mt-1"
                  size={20}
                />
                <span className="text-sm sm:text-base text-[color:var(--muted)]">International Standards</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] transition">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0 mt-1"
                  size={20}
                />
                <span className="text-sm sm:text-base text-[color:var(--muted)]">Experienced Faculty</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[color:var(--border)] animate-slideInRight hover:shadow-2xl transition duration-500">
            <img
              src={homepage}
              alt="School Campus"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fadeInUp">
          {/* Mission */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-[color:var(--primary)] transition duration-300 animate-slideInLeft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center shadow-md">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[color:var(--text)]">
                {t.about.mission.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
              {t.about.mission.description}
            </p>

            <div className="mt-6 space-y-3 pt-6 border-t border-[color:var(--border)]">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Academic excellence through innovation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Character and values-based education
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--primary)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Student-centered and inclusive learning
                </span>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl hover:border-[color:var(--accent)] transition duration-300 animate-slideInRight">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--primary)] flex items-center justify-center shadow-md">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-[color:var(--text)]">
                {t.about.vision.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[color:var(--muted)] leading-relaxed">
              {t.about.vision.description}
            </p>

            <div className="mt-6 space-y-3 pt-6 border-t border-[color:var(--border)]">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--accent)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Global perspective with local roots
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--accent)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Sustainable and inclusive excellence
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-[color:var(--accent)] shrink-0"
                  size={18}
                />
                <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                  Empowered and compassionate leaders
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="gradient-border rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--bg-alt)] p-8 sm:p-10 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition duration-300">
                <p
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                    stat.color === "primary"
                      ? "text-[color:var(--primary)]"
                      : "text-[color:var(--accent)]"
                  }`}
                >
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
              {t.about.unique.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
              Our distinctive approach to education sets us apart and creates exceptional learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {uniquePoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center text-white mb-4 shadow-md">
                  {point.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Commitment */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
              {t.about.commitments.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
              We are dedicated to these core promises to our students and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-5">
                  {commitment.title}
                </h3>
                <ul className="space-y-3">
                  {commitment.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-[color:var(--primary)] shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-xs sm:text-sm text-[color:var(--muted)]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="rounded-2xl border-2 border-[color:var(--primary)] bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            {t.about.cta.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.about.cta.description}
          </p>
          <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
            {t.about.cta.button}
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
