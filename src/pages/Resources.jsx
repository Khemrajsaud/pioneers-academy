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

const Resources = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { title: "Gallery", icon: <Image size={20} /> },
    { title: "News & Notices", icon: <Megaphone size={20} /> },
    { title: "Routine", icon: <ClipboardList size={20} /> },
    { title: "Downloads", icon: <Download size={20} /> },
  ];

  const newsItems = [
    { title: "Annual Sports Day 2026", date: "Feb 18, 2026" },
    { title: "Grade 10 Pre-Board Schedule", date: "Feb 12, 2026" },
    { title: "Science Exhibition Winners", date: "Feb 05, 2026" },
    { title: "Parent-Teacher Meeting", date: "Jan 30, 2026" },
  ];

  const routineItems = [
    "Primary Section (Grade 1-5)",
    "Lower Secondary (Grade 6-8)",
    "Secondary (Grade 9-10)",
    "Higher Secondary (Grade 11-12)",
  ];

  const downloads = [
    "Admission Form",
    "Fee Structure",
    "School Calendar",
    "Syllabus Overview",
    "Transport Policy",
  ];

  const events = [
    { title: "Art & Craft Week", date: "Mar 04, 2026" },
    { title: "Inter-School Debate", date: "Mar 12, 2026" },
    { title: "Field Trip - Grade 8", date: "Mar 20, 2026" },
  ];

  const exams = [
    "Unit Test I Schedule",
    "Mid-Term Exam Routine",
    "Final Exam Routine",
    "Result Publication Dates",
  ];

  const parentResources = [
    "Student Handbook",
    "Code of Conduct",
    "Attendance Policy",
    "Safety Guidelines",
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img src={homepage} alt="Resources" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.resources.hero}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16 space-y-12">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-4">
            {t.resources.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-[color:var(--muted)] max-w-3xl mx-auto">
            Access school updates, schedules, downloads, and helpful resources for students and parents.
          </p>
        </section>

        {/* Quick Links */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickLinks.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[color:var(--bg-alt)] flex items-center justify-center text-[color:var(--primary)]">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-[color:var(--text)]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* News + Events */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.news.title}</h3>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {newsItems.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.events.title}</h3>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {events.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <span className="text-xs">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Routine + Exams */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <ClipboardList size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.routine.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--text)]">
              {routineItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[color:var(--primary)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <School size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.exams.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--text)]">
              {exams.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[color:var(--primary)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Downloads + Parent Resources */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Download size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.downloads.title}</h3>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {downloads.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FileText size={16} className="text-[color:var(--primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-[color:var(--primary)]" />
              <h3 className="text-xl font-bold text-[color:var(--text)]">{t.resources.parents.title}</h3>
            </div>
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {parentResources.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FileText size={16} className="text-[color:var(--primary)]" />
                  <span>{item}</span>
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
