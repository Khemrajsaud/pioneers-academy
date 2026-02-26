import { 
  Building2, BookOpen, Bus, Coffee, Dumbbell, FlaskConical, Monitor, Shield, Trophy,
  Music, Users, Brain, Wifi, Microscope, Presentation, Award
} from "lucide-react";
import homepage from "../assets/images/about.png";
import { useLanguage } from "../contexts/LanguageContext";

const Facilities = () => {
  const { t } = useLanguage();
  
  const facilities = [
    {
      title: "Classrooms",
      description: "Modern, spacious classrooms equipped with smart boards, comfortable seating, and natural lighting for optimal learning environment.",
      icon: <Building2 size={24} />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Science Lab",
      description: "Fully equipped laboratories with modern apparatus for Physics, Chemistry, and Biology experiments with safety protocols.",
      icon: <FlaskConical size={24} />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Computer Lab",
      description: "High-speed computers with internet connectivity for coding, digital literacy, and computer-aided learning.",
      icon: <Monitor size={24} />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Library",
      description: "Extensive collection of books, digital resources, and reading zones for research and knowledge exploration.",
      icon: <BookOpen size={24} />,
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Sports Facilities",
      description: "Basketball court, badminton, cricket pitch, and outdoor play area for physical fitness and sports training.",
      icon: <Dumbbell size={24} />,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cafeteria",
      description: "Hygienic, spacious cafeteria serving nutritious meals prepared under strict health and safety standards.",
      icon: <Coffee size={24} />,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Transport",
      description: "Safe and reliable school transport with GPS tracking and professional drivers for student safety.",
      icon: <Bus size={24} />,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Music Room",
      description: "Dedicated music studio with instruments and training for vocal and instrumental music education.",
      icon: <Music size={24} />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Dance Studio",
      description: "Mirror-equipped dance studio with sound system for dance, choreography, and cultural performances.",
      icon: <Trophy size={24} />,
      color: "from-fuchsia-500 to-fuchsia-600"
    },
    {
      title: "Multimedia Room",
      description: "Advanced multimedia lab with audio-visual equipment for content creation and digital media projects.",
      icon: <Presentation size={24} />,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Counselling Center",
      description: "Professional counselling services for academic guidance, career counseling, and emotional support.",
      icon: <Brain size={24} />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Conference Hall",
      description: "Spacious auditorium for assemblies, seminars, presentations, and cultural programs with modern AV setup.",
      icon: <Presentation size={24} />,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Internet Connectivity",
      description: "High-speed WiFi throughout campus enabling seamless access to digital learning resources.",
      icon: <Wifi size={24} />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "ECA (Extra-Curricular Activities)",
      description: "Diverse clubs and programs including debate, arts, sports, science, and social welfare initiatives.",
      icon: <Award size={24} />,
      color: "from-sky-500 to-sky-600"
    },
    {
      title: "Infrastructure",
      description: "Well-maintained buildings with proper ventilation, sanitation, and emergency safety measures.",
      icon: <Building2 size={24} />,
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Scholarships Support",
      description: "Merit and need-based scholarships to support deserving students with financial assistance.",
      icon: <Award size={24} />,
      color: "from-lime-500 to-lime-600"
    },
  ];

  const highlights = [
    "24/7 WiFi Internet Coverage",
    "Spacious Playground & Sports Courts",
    "Medical Clinic with First Aid",
    "Parking Facilities",
    "Wheelchair Accessibility",
    "Purified Drinking Water",
    "CCTV Security System",
    "Emergency Response Team",
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero */}
      <div className="relative h-48 sm:h-64 md:h-96 w-full overflow-hidden group">
        <img 
          src={homepage} 
          alt="Facilities" 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight animate-fadeInUp">
            World-Class Facilities
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 md:space-y-20">
        {/* Intro */}
        <section className="text-center animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Infrastructure Designed for Excellence
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Pioneers Academy is equipped with comprehensive, modern facilities to ensure a holistic and enriching learning experience for all students.
          </p>
        </section>

        {/* Facilities Grid */}
        <section className="animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            Our Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 sm:p-6 hover:shadow-lg hover:border-[color:var(--primary)] transition duration-300 transform hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${facility.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:shadow-lg transition`}>
                  {facility.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[color:var(--text)] mb-2">
                  {facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="rounded-2xl border-2 border-[color:var(--border)] bg-[color:var(--bg-alt)] p-6 sm:p-8 shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)] mb-8">
            Key Features & Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-[color:var(--card)] border border-[color:var(--border)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/5 transition duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-xs sm:text-sm text-[color:var(--text)] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="rounded-2xl border-2 border-[color:var(--primary)] bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 p-6 sm:p-8 md:p-12 text-center shadow-lg hover:shadow-xl transition duration-300 animate-fadeInUp">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[color:var(--text)] mb-4 leading-tight">
            Explore Our Campus
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[color:var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art facilities or schedule an in-person visit to experience the Pioneers Academy learning environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-strong)] text-white font-semibold hover:shadow-lg transform hover:scale-105 transition duration-300">
              🎥 Virtual Tour
            </button>
            <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[color:var(--primary)] text-[color:var(--text)] font-semibold hover:bg-[color:var(--primary)] hover:text-white transition duration-300">
              📅 Schedule Visit
            </button>
          </div>
        </section>

        {/* Info Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeInUp">
          <div className="rounded-xl bg-[color:var(--card)] border border-[color:var(--border)] p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-2">
              Award-Winning Infrastructure
            </h4>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">
              Recognized for excellence in educational facilities and student amenities.
            </p>
          </div>
          <div className="rounded-xl bg-[color:var(--card)] border border-[color:var(--border)] p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-2">
              Safe & Secure
            </h4>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">
              24/7 CCTV surveillance and trained security personnel ensure student safety.
            </p>
          </div>
          <div className="rounded-xl bg-[color:var(--card)] border border-[color:var(--border)] p-6 sm:p-8 text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">♿</div>
            <h4 className="text-lg sm:text-xl font-bold text-[color:var(--text)] mb-2">
              Inclusive Access
            </h4>
            <p className="text-xs sm:text-sm text-[color:var(--muted)]">
              Wheelchair accessible facilities ensuring equal access for all students.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Facilities;
