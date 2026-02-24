import { useState } from "react";
import { ChevronDown, BookOpen, Users, ClipboardList, Trophy, Globe } from "lucide-react";
import homepage from "../assets/images/homepage.png";

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState("preprimary");
  const [openDropdown, setOpenDropdown] = useState(false);

  const academicLevels = {
    preprimary: {
      title: "Pre-Primary (Early Childhood Education)",
      subtitle: "Play-Based Learning",
      icon: "🎨",
      color: "from-pink-500 to-pink-600",
      overview: "Our Pre-Primary program focuses on holistic early childhood development through play-based and Montessori-inspired learning. We nurture young minds in a safe, engaging environment that fosters creativity, social skills, and a love for learning.",
      features: [
        {
          title: "Theme-Based Learning",
          description: "Integrated topics like seasons, animals, and community explored through stories, art, and music to make learning fun and meaningful.",
          icon: <BookOpen className="text-pink-500" size={24} />,
        },
        {
          title: "Montessori-Inspired Activities",
          description: "Hands-on activities including sand play, puzzles, and building blocks to develop fine and gross motor skills.",
          icon: <Users className="text-pink-500" size={24} />,
        },
        {
          title: "Language Development",
          description: "Phonics-based learning with bilingual exposure (English/Nepali) and engaging storytelling sessions.",
          icon: <Globe className="text-pink-500" size={24} />,
        },
        {
          title: "Social-Emotional Growth",
          description: "Group activities designed to foster sharing, empathy, and teamwork among young learners.",
          icon: <Trophy className="text-pink-500" size={24} />,
        },
      ],
      facilities: [
        {
          title: "Child-Safe Classrooms",
          description: "Colorful, interactive spaces with low-height furniture designed specifically for young children.",
          icon: <ClipboardList className="text-pink-500" size={24} />,
        },
        {
          title: "Outdoor Play Area",
          description: "Sandpit, swings, and mini-gardening patches for physical activity and nature exploration.",
          icon: <Globe className="text-pink-500" size={24} />,
        },
      ],
      curriculum: [
        "Phonics & Early Reading",
        "Bilingual Exposure (English/Nepali)",
        "Number Recognition & Counting",
        "Arts & Crafts",
        "Music & Movement",
        "Story Time Sessions",
        "Nature Exploration",
        "Social Skills Development"
      ],
      specialPrograms: ["Little Explorers", "Annual Talent Show"],
    },
    primary: {
      title: "Primary (Grades 1-5)",
      subtitle: "Foundational Literacy & Numeracy",
      icon: "📚",
      color: "from-blue-500 to-blue-600",
      overview: "Our Primary program builds strong foundational skills in literacy and numeracy while nurturing curiosity and creativity. We use activity-based learning and modern teaching tools to make education engaging and effective.",
      features: [
        {
          title: "English",
          description: "Comprehensive grammar instruction, creative writing workshops, and vibrant reading clubs to develop strong communication skills.",
          icon: <BookOpen className="text-blue-500" size={24} />,
        },
        {
          title: "Mathematics",
          description: "Practical applications like measuring and budgeting, with optional Abacus and Vedic Math programs for enhanced calculation skills.",
          icon: <ClipboardList className="text-blue-500" size={24} />,
        },
        {
          title: "Science",
          description: "Hands-on experiments exploring concepts like plant growth and magnetism to spark scientific curiosity.",
          icon: <Globe className="text-blue-500" size={24} />,
        },
        {
          title: "Social Studies",
          description: "Learning about local culture, map skills, and engaging in meaningful community projects.",
          icon: <Users className="text-blue-500" size={24} />,
        },
      ],
      teachingTools: [
        {
          title: "Smart Classrooms",
          description: "Animated videos and interactive content for complex concepts like the water cycle.",
          icon: <Globe className="text-blue-500" size={24} />,
        },
        {
          title: "Activity-Based Learning",
          description: "Math labs with manipulatives and Science Fair opportunities for young innovators.",
          icon: <ClipboardList className="text-blue-500" size={24} />,
        },
      ],
      coScholastic: [
        {
          title: "Arts",
          description: "Drawing, clay modeling, and drama to develop creative expression.",
          icon: <Trophy className="text-blue-500" size={24} />,
        },
        {
          title: "Physical Education",
          description: "Yoga, martial arts, and traditional games for physical fitness and cultural awareness.",
          icon: <Users className="text-blue-500" size={24} />,
        },
      ],
      curriculum: [
        "English (Grammar & Creative Writing)",
        "Mathematics (Abacus/Vedic Math)",
        "Science (Experiments & Labs)",
        "Social Studies (Culture & Geography)",
        "Computer Basics",
        "Art & Craft",
        "Physical Education",
        "Music & Dance"
      ],
      specialPrograms: ["Reading Club", "Science Fair", "Math Olympiad"],
    },
    secondary: {
      title: "Secondary (Grades 6-10)",
      subtitle: "Preparing for SEE & Beyond",
      icon: "🎓",
      color: "from-green-500 to-green-600",
      overview: "Our Secondary program provides rigorous academic preparation for the SEE examination while developing critical thinking and practical skills. Students can choose between Science and Management tracks based on their interests and career goals.",
      features: [
        {
          title: "Science Track",
          description: "In-depth study of Physics, Chemistry, Biology, and Computer Science with practical laboratory work.",
          icon: <BookOpen className="text-green-500" size={24} />,
        },
        {
          title: "Management Track",
          description: "Comprehensive courses in Accountancy, Business Studies, and Economics for future business leaders.",
          icon: <ClipboardList className="text-green-500" size={24} />,
        },
        {
          title: "Common Core Subjects",
          description: "English, Nepali, Mathematics, and Social Studies ensuring well-rounded education for all students.",
          icon: <Globe className="text-green-500" size={24} />,
        },
        {
          title: "SEE Preparation",
          description: "Regular mock tests and intensive revision camps to ensure excellent board exam results.",
          icon: <Trophy className="text-green-500" size={24} />,
        },
      ],
      practicalLabs: [
        {
          title: "Fully Equipped Laboratories",
          description: "Chemistry lab for titration experiments, Biology lab for microscopy, and IT lab for coding practice.",
          icon: <ClipboardList className="text-green-500" size={24} />,
        },
      ],
      curriculum: [
        "English (Advanced)",
        "Nepali",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies",
        "Computer Science/Coding",
        "Accountancy (Management)",
        "Business Studies (Management)",
        "Economics (Management)"
      ],
      specialPrograms: ["SEE Mock Tests", "Revision Camps", "Career Counseling"],
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
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            Academic Excellence
          </h1> */}
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

        {/* Core Subjects/Features Grid */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            {activeLevel === 'preprimary' ? 'Curriculum & Approach' : 'Core Subjects'}
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

        {/* Facilities Section (Pre-Primary) */}
        {currentLevel.facilities && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
              Facilities & Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20">
                      {facility.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                        {facility.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teaching Tools Section (Primary) */}
        {currentLevel.teachingTools && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
              Teaching Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.teachingTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                        {tool.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Co-Scholastic Section (Primary) */}
        {currentLevel.coScholastic && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
              Co-Scholastic Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {currentLevel.coScholastic.map((activity, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practical Labs Section (Secondary) */}
        {currentLevel.practicalLabs && (
          <div className="mb-8 sm:mb-12 animate-fadeInUp">
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
              Academic Rigor
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:gap-6">
              {currentLevel.practicalLabs.map((lab, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[color:var(--primary)]/20 to-[color:var(--accent)]/20">
                      {lab.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                        {lab.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                        {lab.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curriculum Highlights */}
        <div className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--card)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp mb-8 sm:mb-12">
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

        {/* Special Programs */}
        {currentLevel.specialPrograms && (
          <div className="rounded-2xl border-2 border-[color:var(--border)] bg-gradient-to-br from-[color:var(--card)] to-[color:var(--bg-alt)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-6">
              Special Programs
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {currentLevel.specialPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                  {program}
                </div>
              ))}
            </div>
          </div>
        )}

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

