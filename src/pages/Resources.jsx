import {
  Calendar,
  ClipboardList,
  Download,
  FileText,
  Image,
  Megaphone,
  School,
  Users,
} from "lucide-react";
import homepage from "../assets/images/homepage.png";
import { useLanguage } from "../contexts/LanguageContext";

/**
 * Resources component acting as a central hub for school documents, news, and schedules
 */
const Resources = () => {
  const { t } = useLanguage();

  // Mapping static icons to data from translation context
  const quickLinks = [
    { title: t.resources.quickLinks.gallery, icon: <Image size={20} /> },
    { title: t.resources.quickLinks.newsNotices, icon: <Megaphone size={20} /> },
    { title: t.resources.quickLinks.routine, icon: <ClipboardList size={20} /> },
    { title: t.resources.quickLinks.downloads, icon: <Download size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-(--bg) text-(--text) transition-colors">
      {/* Visual Identity Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden border-b border-(--border)">
        <img src={homepage} alt="School Resources" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-(--bg)" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 tracking-tight drop-shadow-md">
            {t.resources.hero}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 space-y-16">
        {/* Contextual Introduction */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--text) mb-5">
            {t.resources.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-(--muted) leading-relaxed">
            {t.resources.intro}
          </p>
        </section>

        {/* Tactical Navigation Grid */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {quickLinks.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-(--border) bg-(--card) p-5 flex flex-col sm:flex-row items-center gap-4 hover:border-(--primary)/50 transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-(--primary)/10 flex items-center justify-center text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-sm font-bold text-(--text) text-center sm:text-left leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Primary Updates Grid: News & Events */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Latest News Feed Container */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <Megaphone size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.news.title}</h3>
            </div>
            <ul className="space-y-4 text-sm text-(--muted)">
              {t.resources.newsList.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-(--bg-alt) transition-colors border border-transparent hover:border-(--border)">
                  <span className="font-medium text-(--text)">{item.title}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-(--bg-alt) rounded-md">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Calendar Events Preview */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <Calendar size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.events.title}</h3>
            </div>
            <ul className="space-y-4 text-sm text-(--muted)">
              {t.resources.eventsList.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-(--bg-alt) transition-colors border border-transparent hover:border-(--border)">
                  <span className="font-medium text-(--text)">{item.title}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-(--bg-alt) rounded-md">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Operational Schedules: Routine & Exams */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Class Timetable Overview */}
          <div className="rounded-3xl border border-(--border) bg-(--bg-alt) p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <ClipboardList size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.routine.title}</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-(--text)">
              {t.resources.routineList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-(--card)/50 border border-(--border)/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment Cycles Preview */}
          <div className="rounded-3xl border border-(--border) bg-(--bg-alt) p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <School size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.exams.title}</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-(--text)">
              {t.resources.examsList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-(--card)/50 border border-(--border)/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--primary)" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Document Repository: Downloads & Parent Guides */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Public Document Access */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <Download size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.downloads.title}</h3>
            </div>
            <ul className="space-y-4">
              {t.resources.downloadsList.map((item, idx) => (
                <li key={idx} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-(--bg-alt) transition-all border border-transparent hover:border-(--border) cursor-pointer">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-500 group-hover:scale-110 transition-transform">
                    <FileText size={18} />
                  </div>
                  <span className="text-sm font-semibold text-(--text)">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parental Support Materials */}
          <div className="rounded-3xl border border-(--border) bg-(--card) p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-(--primary)/10 text-(--primary)">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-(--text)">{t.resources.parents.title}</h3>
            </div>
            <ul className="space-y-4">
              {t.resources.parentResourcesList.map((item, idx) => (
                <li key={idx} className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-(--bg-alt) transition-all border border-transparent hover:border-(--border) cursor-pointer">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <FileText size={18} />
                  </div>
                  <span className="text-sm font-semibold text-(--text)">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;
