import React from "react";
import {
  CheckCircle,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
  Award,
  CalendarDays
} from "lucide-react";

import homepage from "../assets/images/contact.png";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react";


const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

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

        </div>
      </div>



      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-16 sm:space-y-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fadeInUp">
          <div className="space-y-6">
            <div>
              {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
                {t.about.intro.title}
              </h2> */}

              <button className="text-sm sm:text-base text-[color:var(--muted)]  bg-gray-200 px-2 py-1 rounded-full">about us</button>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Pioneers <span className="text-[var(--blue3)]">Academy</span>
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm sm:text-base text-[color:var(--muted)] text-justify">
                {t.about.intro.description}
              </p>
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

        <motion.section className="grid grid-cols-1 gap-4 sm:grid-cols-3" {...fadeInUp}>
          <motion.div
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm text-[color:var(--muted)]">{t.home.intro.students}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-[color:var(--muted)]">{t.home.intro.statsLabels.excellence}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-[color:var(--primary)]/10 p-3 text-[color:var(--primary)]">
                <CalendarDays className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-[color:var(--muted)]">{t.home.intro.years}</div>
              </div>
            </div>
          </motion.div>
        </motion.section>
{/* mission and vision */}
                <section className="py-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <motion.article
                      className="relative overflow-hidden rounded-2xl border border-[color:var(--primary)]/20 bg-gradient-to-br from-[color:var(--card)] to-[color:var(--primary)]/5 p-8 shadow-lg transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[color:var(--primary)]/40"
                      whileHover={{ y: -4 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[color:var(--primary)]/10 blur-3xl"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white shadow-[0_4px_14px_0_var(--primary)]/30">
                          <Target className="h-7 w-7" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold tracking-tight text-[color:var(--text)]">
                          Our Vision
                        </h3>
                        <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed text-justify">
                          {t.home.vision.description}
                        </p>
                      </div>
                    </motion.article>
        
                    <motion.article
                      className="relative overflow-hidden rounded-2xl border border-[color:var(--blue3)]/20 bg-gradient-to-br from-[color:var(--card)] to-[color:var(--blue3)]/5 p-8 shadow-lg transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[color:var(--blue3)]/40"
                      whileHover={{ y: -4 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[color:var(--blue3)]/10 blur-3xl"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--blue3)] to-[color:var(--accent)] text-white shadow-[0_4px_14px_0_var(--blue3)]/30">
                          <Lightbulb className="h-7 w-7" />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold tracking-tight text-[color:var(--text)]">
                          Our Mission
                        </h3>
                        <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed text-justify">
                          Provide quality education that nurtures academic excellence and personal growth, while fostering
                          critical thinking, creativity, and problem-solving skills.
                        </p>
                      </div>
                    </motion.article>
                  </div>
                </section>

        {/* What Makes Us Unique */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
              {t.about.unique.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
              Our distinctive approach to education sets us apart and creates
              exceptional learning experiences.
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
              We are dedicated to these core promises to our students and
              families.
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

          <Link
            to="/contact"
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            {t.about.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
