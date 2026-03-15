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


// --- ANIMATION SETTINGS ---
// Standard fade-and-slide animation for sections that appear as the user scrolls.
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};
const About = () => {
  // Use 't' to access our multi-language text content
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

  // List of high-level school commitments shown in the bottom section.
  const commitments = [
    {
      title: t.about.commitments.academic.title,
      points: t.about.commitments.academic.points,
    },
    {
      title: t.about.commitments.character.title,
      points: t.about.commitments.character.points,
    },
    {
      title: t.about.commitments.safety.title,
      points: t.about.commitments.safety.points,
    },
  ];

  const stats = [
    { number: "1000+", label: t.about.stats.students, color: "primary" },
    { number: "20+", label: t.about.stats.teachers, color: "accent" },
    { number: "25+", label: t.about.stats.years, color: "primary" },
    { number: "95%", label: t.about.stats.success, color: "accent" },
  ];


  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Hero Section */}
      <div className="relative h-44 sm:h-56 md:h-64 w-full overflow-hidden group">
        <img
          src={homepage}
          alt="About Pioneers Academy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/55" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-(--primary) h-12 sm:h-14 w-2 rounded-xs" />
              <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold">
                {t.about.hero}
              </h1>
            </div>
          </div>
        </div>
      </div>



      {/* --- CONTENT AREA --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-16 sm:space-y-20">

        {/* WELCOME SECTION
            Displays a small 'About Us' badge and the main academy biography. */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center animate-fadeInUp">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2">
                Pioneers <span className="text-(--primary)">Academy</span>
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm sm:text-base text-(--muted) text-justify leading-relaxed">
                {t.about.intro.description}
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-(--border) animate-slideInRight hover:shadow-2xl transition duration-500">
            <img
              src={homepage}
              alt="School Campus"
              className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-700"
            />
          </div>

         
        </section>

        {/* STATS SECTION
            Displays core school statistics with entry animations. */}
        <motion.section className="grid grid-cols-1 gap-4 sm:grid-cols-3" {...fadeInUp}>
          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm text-(--muted)">{t.home.intro.students}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <Award className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-(--muted)">{t.home.intro.statsLabels.excellence}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-xl border border-(--border) bg-(--card) p-5 shadow-sm"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-(--primary)/10 p-3 text-(--primary)">
                <CalendarDays className="h-7 w-7" />
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-(--muted)">{t.home.intro.years}</div>
              </div>
            </div>
          </motion.div>
        </motion.section>
        {/* mission and vision */}
        {/* MISSION & VISION SECTION
            Detailed view of our core educational philosophy. */}
        <section className="py-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.article
              className="relative overflow-hidden rounded-2xl border border-(--primary)/20 bg-linear-to-br from-(--card) to-(--primary)/5 p-8 shadow-lg transition-all hover:shadow-xl hover:border-(--primary)/40"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-(--primary)/10 blur-3xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-(--primary) to-(--primary-strong) text-white shadow-lg shadow-(--primary)/30">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-(--text)">
                  {t.home.vision.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-(--muted) leading-relaxed text-justify">
                  {t.home.vision.description}
                </p>
              </div>
            </motion.article>

            <motion.article
              className="relative overflow-hidden rounded-2xl border border-(--blue3)/20 bg-linear-to-br from-(--card) to-(--blue3)/5 p-8 shadow-lg transition-all hover:shadow-xl hover:border-(--blue3)/40"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-(--blue3)/10 blur-3xl"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-(--blue3) to-(--accent) text-white shadow-lg shadow-(--blue3)/30">
                  <Lightbulb className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-(--text)">
                  {t.home.mission.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-(--muted) leading-relaxed text-justify">
                  {t.home.mission.description}
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        {/* UNIQUE POINTS SECTION
            What makes Pioneers Academy stand out from other institutions. */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
              {t.about.unique.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-(--muted) max-w-3xl mx-auto leading-relaxed">
              {t.about.unique.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {uniquePoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-(--primary) to-(--primary-strong) flex items-center justify-center text-white mb-4 shadow-md">
                  {point.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* COMMITMENTS SECTION
            Our core promises to our school community and families. */}
        <section className="animate-fadeInUp">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
              {t.about.commitments.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-(--muted) max-w-3xl mx-auto leading-relaxed">
              {t.about.commitments.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {commitments.map((commitment, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-(--border) bg-(--card) p-6 sm:p-8 hover:shadow-lg hover:border-(--primary) transition duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-(--text) mb-5">
                  {commitment.title}
                </h3>
                <ul className="space-y-3">
                  {commitment.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-start gap-3">
                      <CheckCircle
                        className="text-(--primary) shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-xs sm:text-sm text-(--muted)">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION
            Encouraging parents to get in touch for admissions or inquiries. */}
        <section className="rounded-2xl border-2 border-(--primary) bg-linear-to-r from-(--primary)/10 to-(--accent)/10 p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
            {t.about.cta.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-(--muted) mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.about.cta.description}
          </p>

          <Link
            to="/contact"
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-linear-to-r from-(--primary) to-(--primary-strong) text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            {t.about.cta.button}
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
