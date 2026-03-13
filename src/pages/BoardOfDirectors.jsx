import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import homepage from "../assets/images/contact.png";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

/**
 * BoardOfDirectors component showcasing the school's leadership team
 */
const BoardOfDirectors = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState(null);

  /**
   * Animation variants for the grid container
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  /**
   * Animation variants for individual member cards
   */
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  /**
   * Animation variants for the detail modal
   */
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

  /**
   * Enrich translation member data with static assets like images and contact info
   */
  const boardMembers = t.board.members.map(member => ({
    ...member,
    // Note: These image URLs are placeholders from Unsplash
    image: member.id === 1 ? "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" :
      member.id === 2 ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop" :
        member.id === 3 ? "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=800&fit=crop" :
          member.id === 4 ? "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&h=800&fit=crop" :
            member.id === 5 ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop" :
              "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
    email: `${member.name.toLowerCase().replace(/\s+/g, '')}@pioneersacademy.edu.np`,
    phone: `+977 01-42345${66 + member.id}`,
  }));

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      {/* Visual Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={homepage}
          alt="Board of Directors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/40"></div>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 leading-tight shadow-sm">
            {t.board.hero}
          </h1>
        </div> */}
      </div>

      {/* Primary Narrative Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-(--muted) max-w-3xl mx-auto leading-relaxed">
            {t.board.subtitle}
          </p>
        </motion.div>

        {/* Member Showcase Grid */}
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
              className="group flex flex-col rounded-2xl border border-(--border) bg-(--card) overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-(--primary)/50 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              {/* Profile Image & Role Ribbon */}
              <div className="relative aspect-square w-full overflow-hidden bg-(--bg-alt) flex items-end justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--card) via-transparent to-transparent opacity-60"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-white uppercase bg-(--primary) rounded-full shadow-md">
                    {member.title}
                  </span>
                </div>
              </div>

              {/* Identity & Quick Actions Section */}
              <div className="flex flex-col flex-1 p-6 relative z-10 bg-(--card)">
                <h3 className="text-xl sm:text-2xl font-bold text-(--text) line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-(--muted) mt-1">
                  {member.department}
                </p>

                {/* Engagement Icons */}
                <div className="flex gap-3 mt-5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-(--bg-alt) text-(--muted) group-hover:text-(--primary) group-hover:bg-(--primary)/10 transition-colors">
                    <Mail size={14} />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-(--bg-alt) text-(--muted) group-hover:text-(--primary) group-hover:bg-(--primary)/10 transition-colors">
                    <Phone size={14} />
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button className="w-full py-2.5 px-4 text-sm font-semibold rounded-xl border border-(--primary) text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition-colors duration-300">
                    {t.board.viewBio}
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Detailed Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Layer */}
            <motion.div
              className="fixed inset-0 bg-(--bg)/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Body */}
            <motion.div
              className="relative w-full max-w-4xl bg-(--card) rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Escape Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Portrait Side */}
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--card) md:from-transparent md:bg-linear-to-r md:to-(--card)/90 via-transparent opacity-100"></div>
              </div>

              {/* Biographical Content Side */}
              <div className="w-full md:w-3/5 p-8 sm:p-10 md:p-12 overflow-y-auto custom-scrollbar">
                <div>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-(--primary) uppercase bg-(--primary)/10 rounded-full">
                    {selectedMember.specialization}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-(--text) mb-2">
                    {selectedMember.name}
                  </h2>
                  <p className="text-xl text-(--primary) font-semibold">
                    {selectedMember.title}
                  </p>
                  <p className="text-sm text-(--muted) mt-1 font-medium">
                    {selectedMember.department}
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-(--muted) mb-3">Biography</h4>
                  <p className="text-base text-(--text) leading-relaxed opacity-90">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Full Contact Directory */}
                <div className="mt-10 pt-8 border-t border-(--border)">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-(--muted) mb-6">Contact & Info</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-(--bg-alt) transition-colors group/link"
                    >
                      <div className="w-10 h-10 rounded-full bg-(--primary)/10 flex items-center justify-center text-(--primary) group-hover/link:bg-(--primary) group-hover/link:text-white transition-colors">
                        <Mail size={18} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-semibold text-(--muted) uppercase tracking-wider">Email</p>
                        <p className="text-sm text-(--text) truncate">{selectedMember.email}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${selectedMember.phone}`}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-(--bg-alt) transition-colors group/link"
                    >
                      <div className="w-10 h-10 rounded-full bg-(--primary)/10 flex items-center justify-center text-(--primary) group-hover/link:bg-(--primary) group-hover/link:text-white transition-colors">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-(--muted) uppercase tracking-wider">Phone</p>
                        <p className="text-sm text-(--text)">{selectedMember.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-3 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-(--primary)/10 flex items-center justify-center text-(--primary)">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-(--muted) uppercase tracking-wider">Location</p>
                        <p className="text-sm text-(--text)">Kathmandu, Nepal</p>
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
