import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";
import school from "../assets/images/school.png";
import homepage from "../assets/images/academy.png";
import gallary1 from "../assets/images/gallary1.jpg";
import gallary2 from "../assets/images/gallary2.jpg";
import gallary3 from "../assets/images/gallary3.jpg";
import gallary4 from "../assets/images/gallary4.jpg";
import {
  Target,
  Users,
  Lightbulb,
  FlaskConical,
  Monitor,
  Dumbbell,
  Building2,
  Coffee,
  ArrowRight,
  Loader2,
  CalendarDays,
  Award,
  BookOpen,
  GraduationCap,
  Image,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * API configuration for fetching the latest news
 */
const API_URL = "http://localhost:5000/api/news";

/**
 * Standard animation variant for entrance transitions
 */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/**
 * Home component serving as the landing page of Pioneers Academy
 */
const Home = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // State for managing dynamic news feed
  const [homeNews, setHomeNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetches the 3 most recent news items for the home page preview
     */
    const fetchHomeNews = async () => {
      try {
        setNewsLoading(true);
        const res = await axios.get(API_URL);
        // We only show the top 3 items on the home page for clean layout
        setHomeNews((res.data || []).slice(0, 3));
      } catch (error) {
        console.error("Error fetching home news:", error);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchHomeNews();
  }, []);

  /**
   * Sanitizes HTML content and returns a truncated plain text preview
   * @param {string} html - The HTML string from the news description
   * @returns {string} Cleaned and truncated text
   */
  const getPreviewText = (html = "") => {
    const plainText = html
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (plainText.length <= 150) return plainText;
    return `${plainText.slice(0, 150)}...`;
  };

  return (
    <div className="bg-(--bg) text-(--text) pb-16 transition-colors">
      {/* Visual Identity Hero Section with immersive banner */}
      <section className="group relative h-[260px] sm:h-[380px] md:h-[500px] overflow-hidden border-b border-(--border)">
        <img
          src={homepage}
          alt="Pioneers Academy Building"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white drop-shadow-lg"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              {t.home.hero.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium opacity-90">
              {t.home.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:space-y-16 sm:px-6 sm:py-14">
        {/* Academic Introduction and Welcome Message */}
        <motion.section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center" {...fadeInUp}>
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {t.home.intro.welcome} <span className="text-(--primary) drop-shadow-sm">{t.home.intro.welcomeMessage}</span>
            </h2>
            <p className="text-sm sm:text-base text-(--muted) leading-relaxed text-justify opacity-90">
              {t.home.intro.description}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={school}
              alt="Pioneers Academy Main Campus"
              className="h-[300px] sm:h-[400px] w-full rounded-2xl border border-(--border) object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </motion.section>

        {/* Dynamic Growth Statistics Indicators */}
        <motion.section className="grid grid-cols-1 gap-4 sm:grid-cols-3" {...fadeInUp}>
          {[
            { id: 1, val: "1,000+", label: t.home.intro.students, icon: <Users size={28} />, delay: 0 },
            { id: 2, val: "100%", label: t.home.intro.statsLabels.excellence, icon: <Award size={28} />, delay: 0.1 },
            { id: 3, val: "20+", label: t.home.intro.years, icon: <CalendarDays size={28} />, delay: 0.2 },
          ].map((stat) => (
            <motion.div
              key={stat.id}
              className="rounded-2xl border border-(--border) bg-(--card) p-6 shadow-sm hover:shadow-md transition-all border-b-4 border-b-(--primary)/30"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: stat.delay }}
            >
              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-(--primary)/10 p-4 text-(--primary) shadow-inner">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold tracking-tight">{stat.val}</div>
                  <div className="text-sm font-semibold text-(--muted) uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Philosophical Alignment: Vision & Mission Cards */}
        <section className="py-2">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.article
              className="relative overflow-hidden rounded-3xl border border-(--primary)/10 bg-linear-to-br from-(--card) to-(--primary)/5 p-10 shadow-lg hover:border-(--primary)/30 transition-all group"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-(--primary)/5 blur-3xl group-hover:bg-(--primary)/10 transition-colors" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-(--primary) to-(--primary-strong) text-white shadow-lg shadow-(--primary)/20">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-(--text)">
                  {t.home.vision.title}
                </h3>
                <p className="text-sm sm:text-base text-(--muted) leading-relaxed text-justify opacity-90">
                  {t.home.vision.description}
                </p>
              </div>
            </motion.article>

            <motion.article
              className="relative overflow-hidden rounded-3xl border border-blue-500/10 bg-linear-to-br from-(--card) to-blue-500/5 p-10 shadow-lg hover:border-blue-500/30 transition-all group"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-(--text)">
                  {t.home.mission.title}
                </h3>
                <p className="text-sm sm:text-base text-(--muted) leading-relaxed text-justify opacity-90">
                  {t.home.mission.description}
                </p>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Academic Hierarchy and Educational Framework Highlights */}
        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t.home.academics.title1} <span className="text-(--primary)">{t.home.academics.title2}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm sm:text-base text-(--muted) opacity-90">
              {t.home.academics.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: t.home.academics.prePrimary.title, icon: <Lightbulb size={28} />, desc: t.home.academics.prePrimary.description },
              { title: t.home.academics.primary.title, icon: <BookOpen size={28} />, desc: t.home.academics.primary.description },
              { title: t.home.academics.secondary.title, icon: <GraduationCap size={28} />, desc: t.home.academics.secondary.description },
            ].map((level, idx) => (
              <motion.article
                key={level.title}
                className="group h-full rounded-2xl border border-(--border) bg-(--card) p-8 shadow-sm hover:border-(--primary)/40 hover:shadow-md transition-all flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-all duration-300">
                  {level.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{level.title}</h3>
                <p className="text-sm text-(--muted) leading-relaxed opacity-90">{level.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/academic")}
              className="inline-flex items-center gap-2 rounded-xl bg-(--primary) px-8 py-4 text-sm font-bold text-white shadow-lg shadow-(--primary)/20 hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] transition-all"
            >
              {t.home.academics.explorePrograms}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        {/* Content Streams: Latest News and School Media Briefings */}
        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t.home.news.title1} <span className="text-(--primary)">{t.home.news.title2}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm sm:text-base text-(--muted) opacity-90">
              {t.home.news.subtitle}
            </p>
          </div>

          {newsLoading ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-(--border) bg-(--card) py-20 shadow-sm">
              <Loader2 className="h-10 w-10 animate-spin text-(--primary)" />
              <p className="font-semibold text-(--muted) tracking-wide">{t.home.news.loading}</p>
            </div>
          ) : homeNews.length === 0 ? (
            <div className="rounded-3xl border border-(--border) bg-(--card) py-16 text-center font-medium text-(--muted) italic shadow-sm">
              {t.home.news.noNews}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {homeNews.map((item, idx) => (
                <motion.article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-sm hover:shadow-xl transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="h-full w-full bg-(--bg-alt) flex items-center justify-center text-(--muted)">
                        <Image size={40} className="opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-(--primary) text-xs font-bold rounded-lg shadow-sm uppercase tracking-wider">
                        Update
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="line-clamp-2 text-xl font-bold leading-tight group-hover:text-(--primary) transition-colors">
                      {item.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-(--muted) leading-relaxed opacity-90">
                      {getPreviewText(item.description)}
                    </p>
                    <button
                      onClick={() => navigate(`/news/${item.id}`)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-(--primary) border-b-2 border-transparent hover:border-(--primary) transition-all pb-1 pt-2"
                    >
                      {t.home.news.readMore}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/resources/news")}
              className="px-8 py-3 rounded-xl border-2 border-(--primary) text-(--primary) font-bold hover:bg-(--primary) hover:text-white transition-all shadow-md active:scale-95"
            >
              {t.home.news.viewAll}
            </button>
          </div>
        </motion.section>

        {/* Infrastructure Assets: Class Facilities Highlights */}
        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t.home.facilities.title1} <span className="text-(--primary)">{t.home.facilities.title2}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm sm:text-base text-(--muted) opacity-90">
              {t.home.facilities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {[
              { icon: <Building2 size={24} />, title: t.home.facilities.smartClassrooms },
              { icon: <FlaskConical size={24} />, title: t.home.facilities.scienceLabs },
              { icon: <Monitor size={24} />, title: t.home.facilities.computerLab },
              { icon: <BookOpen size={24} />, title: t.home.facilities.library },
              { icon: <Dumbbell size={24} />, title: t.home.facilities.sportsComplex },
              { icon: <Coffee size={24} />, title: t.home.facilities.cafeteria },
            ].map((facility, idx) => (
              <motion.article
                key={facility.title}
                className="rounded-2xl border border-(--border) bg-(--card) p-5 text-center shadow-sm hover:border-(--primary) hover:bg-(--primary)/5 transition-all cursor-default group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary) group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-bold leading-tight uppercase tracking-tight text-(--text)">
                  {facility.title}
                </h4>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/facilities")}
              className="text-sm font-bold text-(--primary) flex items-center gap-2 mx-auto hover:gap-3 transition-all underline-offset-4 hover:underline"
            >
              {t.home.facilities.viewAll}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        {/* Visual Record: Curated Campus Gallery Preview */}
        <motion.section {...fadeInUp}>
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {t.home.gallery.title1} <span className="text-(--primary)">{t.home.gallery.title2}</span>
            </h2>
            <p className="mx-auto max-w-3xl text-sm sm:text-base text-(--muted) opacity-90">
              {t.home.gallery.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { img: gallary1, alt: t.home.gallery.images.schoolBuilding },
              { img: gallary2, alt: t.home.gallery.images.campusView },
              { img: gallary3, alt: t.home.gallery.images.students },
              { img: gallary4, alt: t.home.gallery.images.activities },
            ].map((item, idx) => (
              <motion.div
                key={item.alt}
                className="group relative overflow-hidden rounded-2xl border border-(--border) bg-(--card) shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-44 w-full object-cover sm:h-56 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest px-4 py-2 border border-white/40 rounded-full backdrop-blur-xs">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate("/resources/gallery")}
              className="inline-flex items-center gap-3 rounded-xl bg-linear-to-br from-(--primary) to-(--primary-strong) px-10 py-4 text-sm font-bold text-white shadow-xl shadow-(--primary)/25 hover:shadow-2xl hover:translate-y-[-2px] transition-all"
            >
              <Image size={20} />
              {t.home.gallery.viewMore}
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
