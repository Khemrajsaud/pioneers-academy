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
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/news";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Home = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [homeNews, setHomeNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeNews = async () => {
      try {
        setNewsLoading(true);
        const res = await axios.get(API_URL);
        setHomeNews((res.data || []).slice(0, 3));
      } catch (error) {
        console.error("Error fetching home news:", error);
      } finally {
        setNewsLoading(false);
      }
    };

    fetchHomeNews();
  }, []);

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
    <div className="bg-[color:var(--bg)] text-[color:var(--text)] pb-16">
      <section className="group relative h-[260px] sm:h-[380px] md:h-[500px] overflow-hidden border-b border-[color:var(--border)]">
        <img src={homepage} alt="Pioneers Academy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Pioneers Academy Kailali
            </motion.h1>
            <motion.p
              className="mt-3 text-sm sm:text-base md:text-lg text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Quality education, disciplined learning, and complete student development.
            </motion.p>
            <motion.div
              className="mt-5 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <button
                onClick={() => navigate("/contact")}
                className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate("/academic")}
                className="rounded-md border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t.home.academics.explorePrograms}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:space-y-16 sm:px-6 sm:py-14">
        <motion.section className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 items-center" {...fadeInUp}>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Welcome <span className="text-[var(--blue3)]">Message</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed text-justify">
              Welcome to Pioneers Academy, Kailali. Established in 1999 AD (2056 BS) and located in Lamkichuha-1, Lamki,
              Kailali, our school is a reputed educational institution affiliated with the National Examination Board and
              approved by the Ministry of Education, Nepal. We provide quality education from Play Group to Grade 10,
              along with Plus Two in Management and Law streams.
            </p>
            <p className="mt-3 text-sm sm:text-base text-[color:var(--muted)] leading-relaxed text-justify">
              We are committed to academic excellence, disciplined learning, and holistic development. Our goal is to
              nurture responsible, confident, and capable individuals.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.img
              src={school}
              alt="School Building"
              className="h-[300px] w-full rounded-xl border border-[color:var(--border)] object-cover shadow-md transition-transform duration-700 hover:scale-[1.03]"
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </motion.section>

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

        <motion.section {...fadeInUp}>
          <div className="mb-7 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Academy <span className="text-[var(--blue3)]">Excellence</span>
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base text-[color:var(--muted)]">{t.home.academics.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: t.home.academics.prePrimary.title,
                icon: <Lightbulb size={28} className="text-[color:var(--primary)]" />,
                description: t.home.academics.prePrimary.description,
              },
              {
                title: t.home.academics.primary.title,
                icon: <BookOpen size={28} className="text-[color:var(--primary)]" />,
                description: t.home.academics.primary.description,
              },
              {
                title: t.home.academics.secondary.title,
                icon: <GraduationCap size={28} className="text-[color:var(--primary)]" />,
                description: t.home.academics.secondary.description,
              },
            ].map((level, idx) => (
              <motion.article
                key={level.title}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 * (idx + 1) }}
                whileHover={{ y: -4 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[color:var(--primary)]/10">
                  {level.icon}
                </div>
                <h3 className="text-center text-lg font-semibold">{level.title}</h3>
                <p className="mt-2 text-center text-sm text-[color:var(--muted)] leading-relaxed">{level.description}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/academic")}
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t.home.academics.explorePrograms}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="mb-7 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              News & <span className="text-[var(--blue3)]">Articles</span>
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base text-[color:var(--muted)]">
              {language === "ne" ? "ताजा समाचार र लेखहरूको छोटो झलक" : "Latest updates and article previews from our school"}
            </p>
          </div>

          {newsLoading ? (
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] py-12">
              <Loader2 className="h-8 w-8 animate-spin text-[color:var(--primary)]" />
              <p className="text-sm text-[color:var(--muted)]">{language === "ne" ? "समाचार लोड हुँदैछ..." : "Loading news..."}</p>
            </div>
          ) : homeNews.length === 0 ? (
            <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] py-10 text-center text-[color:var(--muted)]">
              {language === "ne" ? "अहिलेसम्म समाचार छैन" : "No news available yet"}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {homeNews.map((item, idx) => (
                <motion.article
                  key={item.id}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.08 * (idx + 1) }}
                  whileHover={{ y: -4 }}
                >
                  {item.image_url && <img src={item.image_url} alt={item.title} className="mb-4 h-44 w-full rounded-lg object-cover" />}
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold">{item.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[color:var(--muted)]">{getPreviewText(item.description)}</p>
                  <button
                    onClick={() => navigate(`/news/${item.id}`)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] transition-opacity hover:opacity-80"
                  >
                    {language === "ne" ? "पूरा पढ्नुहोस्" : "Read Full"}
                    <ArrowRight size={16} />
                  </button>
                </motion.article>
              ))}
            </div>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/resources/news")}
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {language === "ne" ? "सबै समाचार हेर्नुहोस्" : "View All News"}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="mb-7 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Class <span className="text-[var(--blue3)]">Facilities</span>
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base text-[color:var(--muted)]">{t.home.facilities.subtitle}</p>
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
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 text-center shadow-sm transition-colors hover:border-[color:var(--primary)]"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.05 * (idx + 1) }}
                whileHover={{ y: -2 }}
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                  {facility.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold leading-snug">{facility.title}</h4>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/facilities")}
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t.home.facilities.viewAll}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>

        <motion.section {...fadeInUp}>
          <div className="mb-7 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              School <span className="text-[var(--blue3)]">Gallery</span>
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm sm:text-base text-[color:var(--muted)]">{t.home.gallery.subtitle}</p>
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
                className="overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.07 * (idx + 1) }}
              >
                <motion.img
                  src={item.img}
                  alt={item.alt}
                  className="h-40 w-full object-cover sm:h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/resources/gallery")}
              className="inline-flex items-center gap-2 rounded-md bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t.home.gallery.viewMore}
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
