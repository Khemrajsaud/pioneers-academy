import { useState } from "react";
import { ChevronDown, BookOpen, Users, ClipboardList, Trophy, Globe } from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

const Academics = () => {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState("primary");
  const [openDropdown, setOpenDropdown] = useState(false);

  const academicLevels = {
    primary: {
      title: t.academics.primary.title,
      subtitle: t.academics.primary.subtitle,
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      overview: t.academics.primary.description,
      features: [
        {
          title: "Language Arts",
          description: "English and Nepali language development with emphasis on communication skills, reading comprehension, and creative writing.",
          icon: <BookOpen className="text-blue-500" size={24} />,
        },
        {
          title: "Mathematics",
          description: "Conceptual understanding of numbers, basic operations, geometry, and problem-solving through hands-on activities.",
          icon: <ClipboardList className="text-blue-500" size={24} />,
        },
        {
          title: "Science & Technology",
          description: "Exploration of natural phenomena through experiments, observation, and practical demonstrations to spark curiosity.",
          icon: <Globe className="text-blue-500" size={24} />,
        },
        {
          title: "Co-curricular Activities",
          description: "Sports, art, music, and clubs to develop well-rounded personalities and discover hidden talents.",
          icon: <Trophy className="text-blue-500" size={24} />,
        },
      ],
      curriculum: t.academics.primary.subjects,
    },
    secondary: {
      title: t.academics.secondary.title,
      subtitle: t.academics.secondary.subtitle,
      icon: "🎓",
      color: "from-green-500 to-green-600",
      overview: t.academics.secondary.description,
      features: [
        {
          title: "Subject Specialization",
          description: "Dedicated teachers for each subject ensuring deep understanding of Science, Mathematics, Languages, and Social Studies.",
          icon: <BookOpen className="text-green-500" size={24} />,
        },
        {
          title: "STEAM Integration",
          description: "Integrated approach combining Science, Technology, Engineering, Arts, and Mathematics for real-world problem solving.",
          icon: <ClipboardList className="text-green-500" size={24} />,
        },
        {
          title: "Critical Thinking",
          description: "Project-based learning, debates, research activities, and case studies to develop analytical skills.",
          icon: <Globe className="text-green-500" size={24} />,
        },
        {
          title: "Leadership Programs",
          description: "Student councils, club leadership, and mentoring programs to develop confidence and responsibility.",
          icon: <Trophy className="text-green-500" size={24} />,
        },
      ],
      curriculum: t.academics.secondary.subjects,
    },
    senior: {
      title: t.academics.senior.title,
      subtitle: t.academics.senior.subtitle,
      icon: "🏆",
      color: "from-purple-500 to-purple-600",
      overview: t.academics.senior.description,
      features: [
        {
          title: "Advanced Curriculum",
          description: "Rigorous coursework aligned with national and international standards, preparing for board exams and university admissions.",
          icon: <BookOpen className="text-purple-500" size={24} />,
        },
        {
          title: "Specialized Labs",
          description: "State-of-the-art Physics, Chemistry, and Biology laboratories for conducting advanced experiments and research.",
          icon: <ClipboardList className="text-purple-500" size={24} />,
        },
        {
          title: "Career Counseling",
          description: "Professional guidance for university selection, scholarship opportunities, and career path planning.",
          icon: <Globe className="text-purple-500" size={24} />,
        },
        {
          title: "Competitive Exam Prep",
          description: "Special coaching for entrance exams, competitive tests, and skill development for career advancement.",
          icon: <Trophy className="text-purple-500" size={24} />,
        },
      ],
      curriculum: t.academics.senior.subjects,
    },
  };

  const currentLevel = academicLevels[activeLevel];

  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setOpenDropdown(false);
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img
          src={homepage}
          alt="Academics"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            {t.academics.hero}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
        {/* Dropdown Menu */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <div className="max-w-sm mx-auto relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-[color:var(--primary)] bg-[color:var(--card)] text-[color:var(--text)] font-semibold hover:bg-[color:var(--bg-alt)] transition hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <span className="text-2xl">{currentLevel.icon}</span>
                <span className="text-sm sm:text-base">{currentLevel.title}</span>
              </span>
              <ChevronDown
                size={20}
                className={`transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown List */}
            {openDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border-2 border-[color:var(--primary)] bg-[color:var(--card)] shadow-xl z-10 animate-slideInDown">
                {Object.entries(academicLevels).map(([key, level]) => (
                  <button
                    key={key}
                    onClick={() => handleLevelChange(key)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 hover:bg-[color:var(--bg-alt)] transition flex items-center gap-3 ${
                      activeLevel === key ? "bg-[color:var(--primary)]/10 border-l-4 border-[color:var(--primary)]" : ""
                    }`}
                  >
                    <span className="text-2xl">{level.icon}</span>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
                        {level.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Overview Section */}
        <div className="rounded-2xl border-2 border-[color:var(--border)] bg-gradient-to-br from-[color:var(--card)] to-[color:var(--bg-alt)] p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            {currentLevel.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] leading-relaxed">
            {currentLevel.overview}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            Key Features & Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {currentLevel.features.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            Curriculum Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentLevel.curriculum.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--primary)]/10 transition"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xs sm:text-sm md:text-base text-[color:var(--text)] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 rounded-2xl border-2 border-[color:var(--primary)] bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 p-8 sm:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Want to Learn More?
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[color:var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a campus visit to see our academic facilities and meet our dedicated faculty members.
          </p>
          <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
            Request Demo Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academics;
