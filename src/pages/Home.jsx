import React from "react";
import homepage from "../assets/images/homepage.png";
import about from "../assets/images/about.jpg";
import vision from "../assets/images/vision.png";
import mision from "../assets/images/mision.png";
import {
  CheckCircle,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-10 bg-[color:var(--bg)]">
      {/* Hero Section */}
      <div className="w-full h-64 sm:h-96 md:h-[500px] overflow-hidden relative group">
        <img
          src={homepage}
          alt="School Building"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[color:var(--bg)]"></div> */}
      </div>

      {/* Introduction Section */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)] mb-3 sm:mb-4 leading-tight">
                {t.home.intro.welcome}{" "}
                <span className="text-[color:var(--primary)]">{t.home.intro.title}</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] leading-relaxed">
                {t.home.intro.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                "K-12 Education",
                "Modern Facilities",
                "International Standards",
                "Experienced Faculty"
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-2 sm:p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] hover:shadow-md transition duration-300 transform hover:scale-105"
                >
                  <CheckCircle
                    className="text-[color:var(--primary)] flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-xs sm:text-sm md:text-base text-[color:var(--muted)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[color:var(--border)] hover:shadow-xl transition duration-300 animate-slideInRight">
            <img
              src={about}
              alt="School Campus"
              className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Buttons - Responsive */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <button className="w-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] hover:shadow-lg text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition transform hover:scale-105 duration-300 flex items-center justify-center gap-2 shadow-md">
            <span className="text-xl sm:text-2xl">👥</span>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold">1,000+</div>
              <div className="text-xs sm:text-sm opacity-90">{t.home.intro.students}</div>
            </div>
          </button>
          <button className="w-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--primary)] hover:shadow-lg text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition transform hover:scale-105 duration-300 flex items-center justify-center gap-2 shadow-md">
            <span className="text-xl sm:text-2xl">⭐</span>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold">100%</div>
              <div className="text-xs sm:text-sm opacity-90">Excellence</div>
            </div>
          </button>
          <button className="w-full bg-gradient-to-r from-[color:var(--primary-strong)] to-[color:var(--primary)] hover:shadow-lg text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition transform hover:scale-105 duration-300 flex items-center justify-center gap-2 shadow-md">
            <span className="text-xl sm:text-2xl">🛡️</span>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold">20+</div>
              <div className="text-xs sm:text-sm opacity-90">{t.home.intro.years}</div>
            </div>
          </button>
        </div>
      </div>

      {/* Our Vision + Mission */}
      <div className="bg-[color:var(--bg)] text-[color:var(--text)] py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center animate-fadeInUp">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[color:var(--bg-alt)] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[color:var(--primary-strong)] transition">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[color:var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[color:var(--text)]">
                  {t.home.vision.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] leading-relaxed">
                {t.home.vision.description}
              </p>
            </div>

            <div className="flex justify-center md:justify-end animate-slideInRight">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-[color:var(--primary)] hover:scale-105 transition duration-500">
                <img
                  src={vision}
                  alt="Students learning together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center animate-fadeInUp">
            <div className="flex justify-center md:justify-start md:order-1 order-2 animate-slideInLeft">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-[color:var(--primary)] hover:scale-105 transition duration-500">
                <img
                  src={mision}
                  alt="Students exploring together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 md:order-2 order-1 animate-slideInRight">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[color:var(--bg-alt)] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[color:var(--primary-strong)] transition">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[color:var(--primary)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12c-3.3 0-6-2.7-6-5s2.7-5 6-5 6 2.7 6 5-2.7 5-6 5zm0-8a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[color:var(--text)]">
                  {t.home.mission.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] leading-relaxed">
                {t.home.mission.points[0]}
              </p>

              <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] leading-relaxed">
                {t.home.mission.points[1]}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center animate-fadeInUp">
            <div className="space-y-4 sm:space-y-6 animate-slideInLeft">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[color:var(--bg-alt)] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[color:var(--primary-strong)] transition">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[color:var(--accent)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.3 4.7 5.2.8-3.8 3.7.9 5.2L12 14.8 7.4 16.4l.9-5.2L4.5 7.5l5.2-.8L12 2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[color:var(--text)]">
                  {t.home.values.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] leading-relaxed">
                {t.home.mission.points[2]}
              </p>

              <ul className="space-y-2 sm:space-y-3 text-[color:var(--text)]">
                {[
                  t.home.values.excellence.title,
                  t.home.values.integrity.title,
                  t.home.values.innovation.title,
                  t.home.values.respect.title,
                ].map((value, idx) => (
                  <li 
                    key={value} 
                    className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-[color:var(--bg-alt)] hover:bg-[color:var(--card)] hover:shadow-md transition transform hover:scale-105 duration-300"
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[color:var(--primary)] flex-shrink-0">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
                      </svg>
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center md:justify-end animate-slideInRight">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-[48px] overflow-hidden shadow-lg border-4 border-[color:var(--primary)] hover:scale-105 transition duration-500">
                <img
                  src={homepage}
                  alt="Students performing together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
