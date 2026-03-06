import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import hero1 from "../assets/video/hero1.mp4";
import vision from "../assets/images/vision.png";
import mision from "../assets/images/mision.png";
import school from "../assets/images/school.png";
import about from "../assets/images/about1.jpeg";
import about1 from "../assets/images/about1.jpeg";
import gallary1 from "../assets/images/gallary1.jpg";
import gallary2 from "../assets/images/gallary2.jpg";
import gallary3 from "../assets/images/gallary3.jpg";
import gallary4 from "../assets/images/gallary4.jpg";


import {
  CheckCircle,
  Heart,
  Star,
  Target,
  Users,
  Lightbulb,
  BookOpen,
  FlaskConical,
  Monitor,
  Dumbbell,
  Building2,
  Coffee,
  ArrowRight,
  GraduationCap,
  Newspaper,
  Loader2,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const API_URL = "http://localhost:5000/api/news";

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
    <div className="mb-10 bg-[color:var(--bg)]">
      {/* Hero Section */}
      <div className="w-full h-64 sm:h-96 md:h-[500px] overflow-hidden relative group shadow-lg">
         <video
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        src={hero1}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fadeIn">
        {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
          Welcome to Pioneers Academy
        </h1> */}
      </div>
      </div>

      {/* Introduction Section */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fadeIn">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)] mb-3 sm:mb-4 leading-tight animate-slideIn">
                {t.home.intro.welcome}{" "}
                <span className="text-[color:var(--primary)]">{t.home.intro.title}</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] leading-relaxed">
                {t.home.intro.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {[
                {text: t.home.intro.highlights[0], Icon: Star},
                {text: t.home.intro.highlights[1], Icon: GraduationCap},
                {text: t.home.intro.highlights[2], Icon: Heart},
                {text: t.home.intro.highlights[3], Icon: Lightbulb}
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)] hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-fadeIn"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <item.Icon className="w-5 h-5 text-[color:var(--primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm md:text-base text-[color:var(--text)] font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-fadeIn border border-[color:var(--border)]">
           <img src={school} alt="School Building" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Stats Buttons - Responsive */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="w-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 sm:px-6 py-6 sm:py-8 rounded-lg hover:border-[color:var(--primary)] hover:shadow-lg transition-all duration-300 animate-fadeIn">
            <div className="flex items-center justify-center gap-4">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--primary)]" />
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[color:var(--text)]">1,000+</div>
                <div className="text-xs sm:text-sm font-medium text-[color:var(--muted)]">{t.home.intro.students}</div>
              </div>
            </div>
          </div>
          <div className="w-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 sm:px-6 py-6 sm:py-8 rounded-lg hover:border-[color:var(--primary)] hover:shadow-lg transition-all duration-300 animate-fadeIn" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center justify-center gap-4">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--accent)]" />
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[color:var(--text)]">100%</div>
                <div className="text-xs sm:text-sm font-medium text-[color:var(--muted)]">{t.home.intro.statsLabels.excellence}</div>
              </div>
            </div>
          </div>
          <div className="w-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 sm:px-6 py-6 sm:py-8 rounded-lg hover:border-[color:var(--primary)] hover:shadow-lg transition-all duration-300 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-center gap-4">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[color:var(--primary)]" />
              <div>
                <div className="text-2xl sm:text-4xl font-bold text-[color:var(--text)]">20+</div>
                <div className="text-xs sm:text-sm font-medium text-[color:var(--muted)]">{t.home.intro.years}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision + Mission */}
      <div className="bg-[color:var(--bg-alt)] text-[color:var(--text)] py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 relative z-10">
          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fadeInUp">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[color:var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[color:var(--text)]">
                  {t.home.vision.title}
                </h2>
              </div>

              <div className="p-5 sm:p-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)]">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--text)] leading-relaxed font-medium">
                  {t.home.vision.description}
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end animate-fadeIn">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-[color:var(--border)] hover:shadow-xl transition-all duration-500">
               <img src={vision} alt="Vision" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="flex justify-center md:justify-start md:order-1 order-2 animate-fadeIn">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg border-2 border-[color:var(--border)] hover:shadow-xl transition-all duration-500">
                <img src={mision} alt="Mission" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 md:order-2 order-1 animate-fadeInUp">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[color:var(--accent)] rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[color:var(--text)]">
                  {t.home.mission.title}
                </h2>
              </div>

              <div className="space-y-3">
                {[t.home.mission.points[0], t.home.mission.points[1]].map((point, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--accent)] hover:shadow-md transition-all duration-300">
                    <p className="text-xs sm:text-sm md:text-base text-[color:var(--text)] leading-relaxed font-medium flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[color:var(--accent)] flex-shrink-0 mt-0.5" />
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="py-8 sm:py-12 md:py-16">
            <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)] mb-3">
                {t.home.gallery.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] font-medium">
                {t.home.gallery.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                { img: gallary1, alt: t.home.gallery.images.schoolBuilding },
                { img: gallary2, alt: t.home.gallery.images.campusView },
                { img: gallary3, alt: t.home.gallery.images.students },
                { img: gallary4, alt: t.home.gallery.images.activities },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square border border-[color:var(--border)] animate-fadeIn"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <span className="text-white text-xs sm:text-sm font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {item.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center animate-fadeInUp">
              <button
                onClick={() => navigate("/resources/gallery")}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[color:var(--primary)] text-white font-semibold hover:bg-[color:var(--primary)]/90 hover:shadow-lg rounded-md text-sm sm:text-base transition-all duration-300"
              >
                {t.home.gallery.viewMore}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Academics Section */}
          <div className="py-8 sm:py-12 md:py-16">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)]/80 backdrop-blur-sm p-5 sm:p-7 md:p-10 shadow-sm">
              <div className="text-center mb-7 sm:mb-10 animate-fadeIn">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary)] flex items-center justify-center">
                    <GraduationCap size={22} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)]">
                    {t.home.academics.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] max-w-3xl mx-auto font-medium leading-relaxed">
                  {t.home.academics.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 animate-fadeInUp">
                {[
                  {
                    title: t.home.academics.prePrimary.title,
                    icon: <Lightbulb size={30} />,
                    description: t.home.academics.prePrimary.description,
                  },
                  {
                    title: t.home.academics.primary.title,
                    icon: <BookOpen size={30} />,
                    description: t.home.academics.primary.description,
                  },
                  {
                    title: t.home.academics.secondary.title,
                    icon: <FlaskConical size={30} />,
                    description: t.home.academics.secondary.description,
                  },
                ].map((level, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden p-6 sm:p-7 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[color:var(--primary)]/5"></div>
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-[color:var(--primary)] text-white flex items-center justify-center mb-5 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-md">
                      {level.icon}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-3 text-center leading-tight">
                      {level.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed text-center font-medium">
                      {level.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center animate-fadeInUp">
                <button
                  onClick={() => navigate("/academic")}
                  className="btn-professional inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base"
                >
                  <GraduationCap size={22} />
                  {t.home.academics.explorePrograms}
                </button>
              </div>
            </div>
          </div>

          <div className="py-8 sm:py-12 md:py-16">
            <div className="text-center mb-6 sm:mb-8 animate-fadeIn">
              <div className="inline-flex items-center gap-3 mb-3">
                <Newspaper className="w-8 h-8 text-[color:var(--primary)]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)]">
                  {language === "ne" ? "समाचार र लेख" : "News & Articles"}
                </h2>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] max-w-3xl mx-auto font-medium">
                {language === "ne"
                  ? "ताजा समाचार र लेखहरूको छोटो झलक"
                  : "Latest updates and article previews from our school"}
              </p>
            </div>

            {newsLoading ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <Loader2 className="w-8 h-8 text-[color:var(--primary)] animate-spin" />
                <p className="text-sm text-[color:var(--muted)]">
                  {language === "ne" ? "समाचार लोड हुँदैछ..." : "Loading news..."}
                </p>
              </div>
            ) : homeNews.length === 0 ? (
              <div className="text-center py-8 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--muted)]">
                {language === "ne" ? "अहिलेसम्म समाचार छैन" : "No news available yet"}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                {homeNews.map((item, idx) => (
                  <article
                    key={item.id}
                    className="p-5 sm:p-6 rounded-lg border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)] hover:shadow-lg transition-all duration-300"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {item.image_url && (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-44 object-cover rounded-lg mb-4"
                      />
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed mb-4">
                      {getPreviewText(item.description)}
                    </p>
                    <button
                      onClick={() => navigate(`/news/${item.id}`)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] hover:opacity-80 transition-opacity"
                    >
                      {language === "ne" ? "पूरा पढ्नुहोस्" : "Read Full"}
                      <ArrowRight size={16} />
                    </button>
                  </article>
                ))}
              </div>
            )}

            <div className="text-center animate-fadeInUp">
              <button
                onClick={() => navigate("/resources/news")}
                className="btn-professional inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base"
              >
                {language === "ne" ? "सबै समाचार हेर्नुहोस्" : "View All News"}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Facilities Section */}
          <div className="py-8 sm:py-12 md:py-16">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)]/80 backdrop-blur-sm p-5 sm:p-7 md:p-10 shadow-sm">
              <div className="text-center mb-7 sm:mb-10 animate-fadeIn">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[color:var(--primary)]/10 text-[color:var(--primary)] flex items-center justify-center">
                    <Building2 size={22} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[color:var(--text)]">
                    {t.home.facilities.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-[color:var(--muted)] max-w-3xl mx-auto font-medium leading-relaxed">
                  {t.home.facilities.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-8 animate-fadeInUp">
              {[
                { icon: <Building2 size={26} />, title: t.home.facilities.smartClassrooms },
                { icon: <FlaskConical size={26} />, title: t.home.facilities.scienceLabs },
                { icon: <Monitor size={26} />, title: t.home.facilities.computerLab },
                { icon: <BookOpen size={26} />, title: t.home.facilities.library },
                { icon: <Dumbbell size={26} />, title: t.home.facilities.sportsComplex },
                { icon: <Coffee size={26} />, title: t.home.facilities.cafeteria },
              ].map((facility, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] hover:border-[color:var(--primary)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[color:var(--primary)]/10 text-[color:var(--primary)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[color:var(--primary)] group-hover:text-white transition-all duration-300">
                    {facility.icon}
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[color:var(--text)] leading-snug min-h-[2.5rem] flex items-center justify-center">
                    {facility.title}
                  </h4>
                </div>
              ))}
              </div>

              <div className="text-center animate-fadeInUp">
                <button
                  onClick={() => navigate("/facilities")}
                  className="btn-professional inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base"
                >
                  {t.home.facilities.viewAll}
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
