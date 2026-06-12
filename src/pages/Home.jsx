import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";

import { CheckCircle } from "lucide-react";

import laboratories from "../assets/images/personaldevelopment.jpg";
import digitalclassroom from "../assets/images/digitalclassroom.jpg";
import seminarhall from "../assets/images/seminarhall.jpg";
import homepage from "../assets/images/school-homepage.jpeg";

import gallary1 from "../assets/images/gallary1.jpeg";
import gallary2 from "../assets/images/gallary2.jpeg";
import gallary3 from "../assets/images/gallary3.jpeg";
import gallary4 from "../assets/images/gallary4.jpeg";

import primary from "../assets/images/primary.jpeg";
import secondary from "../assets/images/secondary.jpeg";
import highlevel from "../assets/images/higher-secondary.jpeg";
import principal from "../assets/images/principle.jpeg";
import {
  ArrowRight,
  Loader2,
  CalendarDays,
  Award,
  BookOpen,
  GraduationCap,
  Image,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { statsData, newsData } from "../components/data.js";

const API_URL = "http://localhost:5000/api/news";

const revealSection = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const facilities = [
  {
    name: "Well-equipped Laboratories",
    description:
      "Modern science and computer laboratories for practical learning and innovation.",
    image: laboratories,
  },
  {
    name: "Digital Classrooms",
    description:
      "Smart classrooms with digital teaching tools for interactive learning.",
    image: digitalclassroom,
  },
  {
    name: "Conference & Seminar Hall",
    description:
      "Spacious hall for seminars, workshops, presentations, and events.",
    image: seminarhall,
  },
];

const academyLevels = [
  {
    title: "Primary Level",
    image: primary,
    icon: BookOpen,
    accent: "bg-blue-800 ",
    description:
      "Strong foundations through active learning and daily guidance.",
  },
  {
    title: "Secondary Level",
    image: secondary,
    icon: Award,
    accent: "bg-amber-600 ",
    description: "Balanced academic growth with discipline and confidence.",
  },
  {
    title: "High School Level",
    image: highlevel,
    icon: GraduationCap,
    accent: "bg-blue-800 ",
    description: "Focused preparation for exams, careers, and future study.",
  },
];

const galleryItems = [
  { img: gallary1, alt: "School building" },
  { img: gallary2, alt: "Campus view" },
  { img: gallary3, alt: "Students" },
  { img: gallary4, alt: "Activities" },
];

const SectionHeading = ({ eyebrow, title, description, action }) => (
  <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="max-w-2xl space-y-2">
      <p className="text-xs font-bold uppercase tracking-widest text-sky-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
    {action ? <div>{action}</div> : null}
  </div>
);

const Home = () => {
  const { t } = useLanguage();
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
    <div className="bg-slate-50 text-slate-900">
      <section className="bg-linear-to-b from-sky-50 via-white to-slate-50 pb-6">
        <div className=" w-full ">
          <div className="relative overflow-hidden h-[70vh] sm:h-[80vh] lg:h-screen">
            {/* Image */}
            <img
              src={homepage}
              alt="homepage"
              className="w-full h-full object-cover"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-950/50 z-10"></div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-end md:items-center pb-14 md:pb-0">
              <div className="max-w-4xl px-4 sm:px-8 md:px-16">
                {/* Small Heading */}
                <p className="text-yellow-400 text-sm sm:text-lg md:text-xl font-bold mb-3 md:mb-4">
                  Nurturing Young Minds, Building Bright Futures
                </p>

                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-3xl">
                  Choose Your Path. Shape Your Future
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <motion.section
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          variants={revealSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {statsData.map((item) => (
            <motion.article
              key={item.id}
              variants={revealItem}
              className="rounded-3xl border border-white/70 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-3xl font-black tracking-tight text-sky-800 sm:text-4xl">
                {item.number}
              </p>
              <p className="mt-3 text-lg font-bold text-amber-600">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center"
          variants={revealSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={revealItem} className="space-y-6">
            <SectionHeading
              eyebrow="About the Academy"
              title="School Profile"
              description="Established in 1999 AD (2056 BS), Pioneers’ Academy, Kailali is a reputed private educational institution in Lamkichuha-1, Lamki, Kailali. We focus on quality education, character building, and a learning environment that helps students grow with confidence."
            />

            <div className="hidden gap-3 sm:grid sm:grid-cols-3">
              {[
                "Supportive faculty",
                "Modern facilities",
                "Strong academic culture",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl"
          >
            <div className="absolute inset-x-6 top-6 h-20 rounded-full bg-sky-100 blur-3xl" />
            <img
              src={homepage}
              alt="Pioneers' Academy campus"
              className="relative h-64 w-full rounded-2xl object-cover shadow-lg sm:h-80"
            />
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-16 rounded-3xl bg-sky-50/80 px-5 py-8 sm:px-8 sm:py-10"
          variants={revealSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading
            eyebrow="Academy Levels"
            title="A clear path for every stage of learning"
            description="Each level is designed with focused support so students can move forward with confidence and purpose."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {academyLevels.map((level) => {
              const Icon = level.icon;

              return (
                <motion.article
                  key={level.title}
                  variants={revealItem}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div>
                    <img
                      src={level.image}
                      alt={level.title}
                      className="h-48 sm:h-52 md:h-56 w-full object-cover rounded-t-2xl"
                    />

                    <p
                      className={`${level.accent} py-3 px-2 text-white text-base sm:text-lg text-center`}
                    >
                      {level.title}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/*         

        <motion.section
          className="mt-16 mb-20 grid gap-8 lg:grid-cols-2 lg:items-start"
          variants={revealSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={revealItem}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-sky-100 blur-2xl" />
            <div className="relative mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-sky-700">
              Principal Message
            </div>
            <div className="grid gap-5 sm:grid-cols-2 sm:items-start">
              <img
                src={principal}
                alt={t.principal.message}
                className="h-56 w-full rounded-2xl object-cover shadow-md sm:h-72"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                  Principal Message
                </h3>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  At Pioneers' Academy, we believe every student has the
                  potential to excel We provide a supportive environment that
                  nurtures curiosity, creativity and character, preparing our
                  students for a successful future
                </p>
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  Our goal is to create an environment where curiosity is
                  encouraged, individual strengths can flourish, and students
                  are inspired to dream big while working steadily toward their
                  goals.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.section> */}

        <motion.div
          variants={revealItem}
          className="relative overflow-hidden rounded-3xl border border-slate-200 my-20 bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-sky-100 blur-2xl" />

        

          <div className="grid items-center gap-8 md:grid-cols-[320px_1fr]">
            {/* Principal Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={principal}
                alt={t.principal.message}
                className="h-64 w-full rounded-2xl object-cover shadow-md md:h-80"
              />
            </motion.div>

            {/* Principal Message */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
                Principal Message
              </h3>

              <p className="text-sm leading-7 text-balance text-slate-600 md:text-base">
                At Pioneers' Academy, we believe every student has the potential
                to excel. We provide a supportive environment that nurtures
                curiosity, creativity, and character, preparing our students for
                a successful future. Our goal is to create an environment where curiosity is
                encouraged, individual strengths can flourish, and students are
                inspired to dream big while working steadily toward their goals.
              </p>

             
              <p className="hidden sm:block text-sm leading-7 text-balance text-slate-600 md:text-base">
                We are committed to fostering academic excellence, personal
                growth, and a lifelong love of learning. Through dedicated
                teaching, innovative learning experiences, and strong
                partnerships with parents, we strive to empower our students to
                become responsible, confident, and compassionate members of
                society.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* News */}

        <motion.div variants={revealItem}>
          <SectionHeading
            eyebrow="News & Articles"
            title="Fresh updates from the academy"
            description="Catch the latest activities, announcements, and academic updates from the school."
          />

          {homeNews.length === 0 && newsLoading && newsData.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200 bg-white py-16 shadow-sm">
              <Loader2 className="h-10 w-10 animate-spin text-sky-700" />
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Loading news
              </p>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {(homeNews.length ? homeNews : newsData).map((item) => {
                const imageSrc = item.image_url || item.image;

                return (
                  <motion.article
                    key={item.id}
                    variants={revealItem}
                    whileHover={{ y: -6 }}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {imageSrc ? (
                        <img
                          src={imageSrc}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                          <Image size={40} />
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 p-5">
                      <h3 className="line-clamp-2 text-lg font-black leading-tight text-slate-900 transition-colors group-hover:text-sky-700">
                        {item.title}
                      </h3>

                      <p className="line-clamp-3 text-sm leading-7 text-slate-600">
                        {getPreviewText(item.description)}
                      </p>

                      <button
                        onClick={() => navigate(`/news/${item.id}`)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition-transform hover:translate-x-1"
                      >
                        Read more
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

          <div className="flex items-end mt-10">
            <button
              onClick={() => navigate("/resources/news")}
              className="inline-flex mt-5 ml-auto gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              View all
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <motion.section
          className="mt-16"
          variants={revealSection}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeading eyebrow="Gallery" title="Moments from School life" />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, idx) => (
              <motion.article
                key={item.alt}
                variants={revealItem}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56"
                />
              </motion.article>
            ))}
          </div>

          <div className=" flex items-end">
            <button
              onClick={() => navigate("/resources/gallery")}
              className="inline-flex mt-5 ml-auto gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              View all
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.section>

        <div className=" py-6">
          <h1 className=" text-blue-900  text-xl font-semibold">
            Our Facilities
          </h1>
        </div>

        {/* Facilities Grid */}
        <div className="  pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-bold text-lg text-blue-900">
                      {facility.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-6">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex items-end">
          <button
            onClick={() => navigate("/resources/gallery")}
            className="inline-flex mt-5 ml-auto gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            View all
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="bg-blue-900 text-white py-12 mt-6">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              A Complete Learning Environment
            </h2>

            <p className="leading-7 text-gray-200">
              Our facilities are designed to support academic excellence,
              creativity, leadership, and holistic development, ensuring that
              every student receives the best opportunities to learn and grow.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
