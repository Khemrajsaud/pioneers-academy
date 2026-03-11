import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, X } from "lucide-react";
import homepage from "../assets/images/contact.png";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const BoardOfDirectors = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState(null);

  const boardMembers = [
    {
      id: 1,
      name: "Rajesh Kumar Singh",
      title: "Chairperson",
      department: "Board Leadership",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop",
      email: "rajesh@pioneersacademy.edu.np",
      phone: "+977 01-4234567",
      bio: "Visionary leader with 20+ years of experience in educational management and organizational development.",
      specialization: "Educational Leadership",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Vice Chairperson",
      department: "Academic Affairs",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
      email: "priya@pioneersacademy.edu.np",
      phone: "+977 01-4234568",
      bio: "Expert in curriculum development and student-centered learning approaches.",
      specialization: "Curriculum Development",
    },
    {
      id: 3,
      name: "Amit Bikram Supaek",
      title: "Principal",
      department: "School Administration",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=800&fit=crop",
      email: "amit@pioneersacademy.edu.np",
      phone: "+977 01-4234569",
      bio: "Dedicated educator focused on academic excellence and holistic student development.",
      specialization: "Academic Excellence",
    },
    {
      id: 4,
      name: "Dr. Deepak Bhattarai",
      title: "Board Member",
      department: "Research & Innovation",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&h=800&fit=crop",
      email: "deepak@pioneersacademy.edu.np",
      phone: "+977 01-4234570",
      bio: "Researcher and innovator committed to modernizing educational practices.",
      specialization: "Educational Research",
    },
    {
      id: 5,
      name: "Sarah Mitchell",
      title: "Board Member",
      department: "International Relations",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
      email: "sarah@pioneersacademy.edu.np",
      phone: "+977 01-4234571",
      bio: "International education specialist fostering global partnerships and cultural exchange.",
      specialization: "Global Education",
    },
    {
      id: 6,
      name: "Anita Devi Poudel",
      title: "Board Member",
      department: "Community Engagement",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
      email: "anita@pioneersacademy.edu.np",
      phone: "+977 01-4234572",
      bio: "Community advocate dedicated to bridging school, families, and society.",
      specialization: "Community Relations",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={homepage}
          alt="Board of Directors"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-[color:var(--muted)] max-w-3xl mx-auto leading-relaxed">
            {t.board.subtitle}
          </p>
        </motion.div>

        {/* Board Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {boardMembers.map((member) => (
            <motion.article
              key={member.id}
              variants={itemVariants}
              onClick={() => setSelectedMember(member)}
              className="group flex flex-col rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[color:var(--primary)]/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Container - Aspect ratio adjusted to fit full image properly */}
              <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--bg-alt)] flex items-end justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-transparent to-transparent opacity-60"></div>

                {/* Overlay Content mapping directly on image bottom slightly */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-[color:var(--primary)] rounded-full shadow-md">
                    {member.title}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col flex-1 p-6 relative z-10 bg-[color:var(--card)]">
                <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--text)] line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[color:var(--muted)] mt-1">
                  {member.department}
                </p>

                {/* Contact Icons Mini */}
                <div className="flex gap-3 mt-5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--bg-alt)] text-[color:var(--muted)] group-hover:text-[color:var(--primary)] group-hover:bg-[color:var(--primary)]/10 transition-colors">
                    <Mail size={14} />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--bg-alt)] text-[color:var(--muted)] group-hover:text-[color:var(--primary)] group-hover:bg-[color:var(--primary)]/10 transition-colors">
                    <Phone size={14} />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[color:var(--bg-alt)] text-[color:var(--muted)] group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                    <Linkedin size={14} />
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button className="w-full py-2.5 px-4 text-sm font-semibold rounded-xl border border-[color:var(--primary)] text-[color:var(--primary)] group-hover:bg-[color:var(--primary)] group-hover:text-white transition-colors duration-300">
                    {t.board.viewBio || "View Profile"}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-[color:var(--bg)]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Dialog */}
            <motion.div
              className="relative w-full max-w-4xl bg-[color:var(--card)] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Side (Left on desktop, Top on mobile) */}
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] md:from-transparent md:bg-gradient-to-r md:to-[color:var(--card)]/90 via-transparent opacity-100"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 sm:p-10 md:p-12 overflow-y-auto custom-scrollbar">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-[color:var(--primary)] uppercase bg-[color:var(--primary)]/10 rounded-full">
                    {selectedMember.specialization}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[color:var(--text)] mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-xl text-[color:var(--primary)] font-semibold">
                    {selectedMember.title}
                  </p>
                  <p className="text-sm text-[color:var(--muted)] mt-1 font-medium">
                    {selectedMember.department}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--muted)] mb-3">Biography</h4>
                  <p className="text-base text-[color:var(--text)] leading-relaxed opacity-90">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-10 pt-8 border-t border-[color:var(--border)]">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--muted)] mb-6">Contact & Info</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[color:var(--bg-alt)] transition-colors group/link"
                    >
                      <div className="w-10 h-10 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)] group-hover/link:bg-[color:var(--primary)] group-hover/link:text-white transition-colors">
                        <Mail size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider">Email</p>
                        <p className="text-sm text-[color:var(--text)] truncate">{selectedMember.email}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[color:var(--bg-alt)] transition-colors group/link"
                    >
                      <div className="w-10 h-10 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)] group-hover/link:bg-[color:var(--primary)] group-hover/link:text-white transition-colors">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider">Phone</p>
                        <p className="text-sm text-[color:var(--text)]">{selectedMember.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-3 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-[color:var(--primary)]/10 flex items-center justify-center text-[color:var(--primary)]">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-wider">Location</p>
                        <p className="text-sm text-[color:var(--text)]">Kathmandu, Nepal</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoardOfDirectors;
