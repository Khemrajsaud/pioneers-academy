import { useState, useEffect, useRef } from "react";
import { ChevronDown, BookOpen, Users, ClipboardList, Trophy, Globe, GraduationCap, Microscope, Briefcase, Scale } from "lucide-react";
import Academy from "../assets/images/academy.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * fadeInUp configuration for section animations
 */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/**
 * Academics component showcasing the school's educational programs
 */
const Academics = () => {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState("preprimary");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  /**
   * Close dropdown when clicking outside
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /**
   * Structure containing academic level metadata and icons
   * Uses translation objects from LanguageContext
   */
  const academicLevels = {
    preprimary: {
      title: t.academics.levels.preprimary.title,
      subtitle: t.academics.levels.preprimary.subtitle,
      icon: "🎨",
      color: "from-(--primary) to-(--primary-strong)",
      overview: t.academics.levels.preprimary.overview,
      features: [
        {
          title: t.academics.levels.preprimary.features[0].title,
          description: t.academics.levels.preprimary.features[0].description,
          icon: <BookOpen className="text-(--primary)" size={24} />,
        },
        {
          title: t.academics.levels.preprimary.features[1].title,
          description: t.academics.levels.preprimary.features[1].description,
          icon: <Users className="text-(--primary)" size={24} />,
        },
        {
          title: t.academics.levels.preprimary.features[2].title,
          description: t.academics.levels.preprimary.features[2].description,
          icon: <Globe className="text-(--primary)" size={24} />,
        },
        {
          title: t.academics.levels.preprimary.features[3].title,
          description: t.academics.levels.preprimary.features[3].description,
          icon: <Trophy className="text-(--primary)" size={24} />,
        },
      ],
      facilities: [
        {
          title: t.academics.levels.preprimary.facilities[0].title,
          description: t.academics.levels.preprimary.facilities[0].description,
          icon: <ClipboardList className="text-(--primary)" size={24} />,
        },
        {
          title: t.academics.levels.preprimary.facilities[1].title,
          description: t.academics.levels.preprimary.facilities[1].description,
          icon: <Globe className="text-(--primary)" size={24} />,
        },
      ],
      curriculum: t.academics.levels.preprimary.curriculum,
    },
    primary: {
      title: t.academics.levels.primary.title,
      subtitle: t.academics.levels.primary.subtitle,
      icon: "📚",
      color: "from-(--accent) to-(--accent)",
      overview: t.academics.levels.primary.overview,
      features: [
        {
          title: t.academics.levels.primary.features[0].title,
          description: t.academics.levels.primary.features[0].description,
          icon: <BookOpen className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.primary.features[1].title,
          description: t.academics.levels.primary.features[1].description,
          icon: <ClipboardList className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.primary.features[2].title,
          description: t.academics.levels.primary.features[2].description,
          icon: <Globe className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.primary.features[3].title,
          description: t.academics.levels.primary.features[3].description,
          icon: <Users className="text-(--blue3)" size={24} />,
        },
      ],
      teachingTools: [
        {
          title: t.academics.levels.primary.teachingTools[0].title,
          description: t.academics.levels.primary.teachingTools[0].description,
          icon: <Globe className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.primary.teachingTools[1].title,
          description: t.academics.levels.primary.teachingTools[1].description,
          icon: <ClipboardList className="text-(--blue3)" size={24} />,
        },
      ],
      coScholastic: [
        {
          title: t.academics.levels.primary.coScholastic[0].title,
          description: t.academics.levels.primary.coScholastic[0].description,
          icon: <Trophy className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.primary.coScholastic[1].title,
          description: t.academics.levels.primary.coScholastic[1].description,
          icon: <Users className="text-(--blue3)" size={24} />,
        },
      ],
      curriculum: t.academics.levels.primary.curriculum,
    },
    secondary: {
      title: t.academics.levels.secondary.title,
      subtitle: t.academics.levels.secondary.subtitle,
      icon: "🎓",
      color: "from-(--secondary) to-(--secondary)",
      overview: t.academics.levels.secondary.overview,
      features: [
        {
          title: t.academics.levels.secondary.features[0].title,
          description: t.academics.levels.secondary.features[0].description,
          icon: <BookOpen className="text-(--secondary)" size={24} />,
        },
        {
          title: t.academics.levels.secondary.features[1].title,
          description: t.academics.levels.secondary.features[1].description,
          icon: <ClipboardList className="text-(--secondary)" size={24} />,
        },
        {
          title: t.academics.levels.secondary.features[2].title,
          description: t.academics.levels.secondary.features[2].description,
          icon: <Globe className="text-(--secondary)" size={24} />,
        },
        {
          title: t.academics.levels.secondary.features[3].title,
          description: t.academics.levels.secondary.features[3].description,
          icon: <Trophy className="text-(--secondary)" size={24} />,
        },
      ],
      practicalLabs: [
        {
          title: t.academics.levels.secondary.practicalLabs[0].title,
          description: t.academics.levels.secondary.practicalLabs[0].description,
          icon: <ClipboardList className="text-(--secondary)" size={24} />,
        },
      ],
      curriculum: t.academics.levels.secondary.curriculum,
    },
    senior: {
      title: t.academics.levels.senior.title,
      subtitle: t.academics.levels.senior.subtitle,
      icon: "🏛️",
      color: "from-(--blue3) to-(--blue3)",
      overview: t.academics.levels.senior.overview,
      features: [
        {
          title: t.academics.levels.senior.features[0].title,
          description: t.academics.levels.senior.features[0].description,
          icon: <Microscope className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.senior.features[1].title,
          description: t.academics.levels.senior.features[1].description,
          icon: <Briefcase className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.senior.features[2].title,
          description: t.academics.levels.senior.features[2].description,
          icon: <Scale className="text-(--blue3)" size={24} />,
        },
        {
          title: t.academics.levels.senior.features[3].title,
          description: t.academics.levels.senior.features[3].description,
          icon: <GraduationCap className="text-(--blue3)" size={24} />,
        },
      ],
      practicalLabs: [
        {
          title: t.academics.levels.senior.practicalLabs[0].title,
          description: t.academics.levels.senior.practicalLabs[0].description,
          icon: <ClipboardList className="text-(--blue3)" size={24} />,
        },
      ],
      curriculum: t.academics.levels.senior.curriculum,
    },
  };

  const currentLevel = academicLevels[activeLevel];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setOpenDropdown(false);
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Page Hero Section */}
      <section className="group relative h-[260px] sm:h-[380px] md:h-[500px] overflow-hidden border-b border-(--border)">
        <img src={Academy} alt="Pioneers Academy Academics" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <button className="mb-4 text-sm sm:text-base text-white bg-white/20 px-3 py-1 rounded-full backdrop-blur-md border border-white/30 shadow-sm">
              {t.academics.hero.tag}
            </button>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {t.academics.hero.title1} <br /> <span className="text-(--primary)">{t.academics.hero.title2}</span>
            </motion.h1>
            <motion.p
              className="mt-3 text-sm sm:text-base md:text-lg text-slate-100 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t.academics.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Level Selection & Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
        {/* Mobile-Friendly Level Dropdown */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <div className="max-w-sm mx-auto relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-(--primary) bg-(--card) text-(--text) font-semibold hover:bg-(--bg-alt) transition hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl">{currentLevel.icon}</span>
                <span className="text-sm sm:text-base">{currentLevel.title}</span>
              </span>
              <ChevronDown
                size={20}
                className={`transition-transform ${openDropdown ? "rotate-180" : ""}`}
              />
            </button>

            {/* Selection Dropdown List */}
            {openDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border-2 border-(--primary) bg-(--card) shadow-xl z-10 animate-slideInDown">
                {Object.entries(academicLevels).map(([key, level]) => (
                  <button
                    key={key}
                    onClick={() => handleLevelChange(key)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-(--bg-alt) transition flex items-center gap-3 ${activeLevel === key ? "bg-(--primary)/10 border-l-4 border-(--primary)" : ""}`}
                  >
                    <span className="text-2xl">{level.icon}</span>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-(--text)">
                        {level.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Level Overview Card */}
        <div className="rounded-2xl border-2 border-(--border) bg-linear-to-br from-(--card) to-(--bg-alt) p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
            {currentLevel.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-(--muted) leading-relaxed text-justify">
            {currentLevel.overview}
          </p>
        </div>

        {/* Feature Grid: Subjects or Approach */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
            {activeLevel === 'preprimary' ? t.academics.sections.curriculumApproach : t.academics.sections.coreSubjects}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {currentLevel.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-3 rounded-lg bg-linear-to-br from-(--primary)/20 to-(--accent)/20">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities Section (Specific to Pre-Primary) */}
        {currentLevel.facilities && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
              {t.academics.sections.facilitiesActivities}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-linear-to-br from-(--primary)/20 to-(--accent)/20">
                      {facility.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                        {facility.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teaching Tools Section (Specific to Primary) */}
        {currentLevel.teachingTools && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
              {t.academics.sections.teachingTools}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.teachingTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-linear-to-br from-(--primary)/20 to-(--accent)/20">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                        {tool.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Co-Scholastic Section (Specific to Primary) */}
        {currentLevel.coScholastic && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
              {t.academics.sections.coScholastic}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.coScholastic.map((activity, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-linear-to-br from-(--primary)/20 to-(--accent)/20">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                        {activity.title}
                      </h4>
                      <p className="mt-4 text-sm sm:text-base text-(--muted) leading-relaxed text-justify">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic Rigor Section (Specific to Secondary/Senior) */}
        {currentLevel.practicalLabs && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
              {t.academics.sections.academicRigor}
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:gap-6">
              {currentLevel.practicalLabs.map((lab, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-(--border) bg-(--card) p-6 hover:shadow-lg hover:border-(--primary) transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-linear-to-br from-(--primary)/20 to-(--accent)/20">
                      {lab.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-(--text) mb-2">
                        {lab.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-(--muted) leading-relaxed">
                        {lab.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curriculum Bullet Points */}
        <div className="rounded-2xl border-2 border-(--border) bg-(--card) p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-(--text) mb-8">
            {t.academics.sections.curriculumHighlights}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(currentLevel.curriculum) && currentLevel.curriculum.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-(--bg-alt) hover:bg-(--primary)/10 transition"
              >
                <div className="w-6 h-6 rounded-full bg-linear-to-r from-(--primary) to-(--primary-strong) flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-(--text) font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 sm:mt-16 rounded-2xl border-2 border-(--primary) bg-linear-to-r from-(--primary)/10 to-(--accent)/10 p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text) mb-4 leading-tight">
            {t.academics.cta.title}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-(--muted) mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.academics.cta.description}
          </p>
          <Link to="/contact" className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-linear-to-r from-(--primary) to-(--primary-strong) text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
            {t.academics.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Academics;
