// import { useState } from "react";
// import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
// import homepage from "../assets/images/homepage.png";
// import { useLanguage } from "../contexts/LanguageContext";

// const BoardOfDirectors = () => {
//   const { t } = useLanguage();
//   const [selectedMember, setSelectedMember] = useState(null);

//   const boardMembers = [
//     {
//       id: 1,
//       name: "Rajesh Kumar Singh",
//       title: "Chairperson",
//       department: "Board Leadership",
//       image: homepage,
//       email: "rajesh@pioneersacademy.edu.np",
//       phone: "+977 01-4234567",
//       bio: "Visionary leader with 20+ years of experience in educational management and organizational development.",
//       specialization: "Educational Leadership",
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       title: "Vice Chairperson",
//       department: "Academic Affairs",
//       image: homepage,
//       email: "priya@pioneersacademy.edu.np",
//       phone: "+977 01-4234568",
//       bio: "Expert in curriculum development and student-centered learning approaches.",
//       specialization: "Curriculum Development",
//     },
//     {
//       id: 3,
//       name: "Amit Bikram Supaek",
//       title: "Principal",
//       department: "School Administration",
//       image: homepage,
//       email: "amit@pioneersacademy.edu.np",
//       phone: "+977 01-4234569",
//       bio: "Dedicated educator focused on academic excellence and holistic student development.",
//       specialization: "Academic Excellence",
//     },
//     {
//       id: 4,
//       name: "Dr. Deepak Bhattarai",
//       title: "Board Member",
//       department: "Research & Innovation",
//       image: homepage,
//       email: "deepak@pioneersacademy.edu.np",
//       phone: "+977 01-4234570",
//       bio: "Researcher and innovator committed to modernizing educational practices.",
//       specialization: "Educational Research",
//     },
//     {
//       id: 5,
//       name: "Sarah Mitchell",
//       title: "Board Member",
//       department: "International Relations",
//       image: homepage,
//       email: "sarah@pioneersacademy.edu.np",
//       phone: "+977 01-4234571",
//       bio: "International education specialist fostering global partnerships and cultural exchange.",
//       specialization: "Global Education",
//     },
//     {
//       id: 6,
//       name: "Anita Devi Poudel",
//       title: "Board Member",
//       department: "Community Engagement",
//       image: homepage,
//       email: "anita@pioneersacademy.edu.np",
//       phone: "+977 01-4234572",
//       bio: "Community advocate dedicated to bridging school, families, and society.",
//       specialization: "Community Relations",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
//       {/* Hero Section */}
//       <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
//         <img
//           src={homepage}
//           alt="Board of Directors"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
//             {t.board.hero}
//           </h1>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
//         {/* Introduction */}
//         <div className="mb-8 sm:mb-12 text-center">
//           <p className="text-base sm:text-lg text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
//             {t.board.subtitle}
//           </p>
//         </div>

//         {/* Board Members Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {boardMembers.map((member) => (
//             <div
//               key={member.id}
//               onClick={() => setSelectedMember(member)}
//               className="group rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
//             >
//               {/* Image Container */}
//               <div className="relative h-48 sm:h-56 overflow-hidden bg-[color:var(--bg-alt)]">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--card)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
//               </div>

//               {/* Info Section */}
//               <div className="p-4 sm:p-6">
//                 <h3 className="text-lg sm:text-xl font-bold text-[color:var(--text)] line-clamp-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm sm:text-base text-[color:var(--primary)] font-semibold mt-1">
//                   {member.title}
//                 </p>
//                 <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1">
//                   {member.department}
//                 </p>

//                 {/* Contact Icons */}
//                 <div className="flex gap-3 mt-4">
//                   <a
//                     href={`mailto:${member.email}`}
//                     className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-alt)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white transition"
//                     title="Send Email"
//                   >
//                     <Mail size={16} />
//                   </a>
//                   <a
//                     href={`tel:${member.phone}`}
//                     className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-alt)] text-[color:var(--text)] hover:bg-[color:var(--primary)] hover:text-white transition"
//                     title="Call"
//                   >
//                     <Phone size={16} />
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[color:var(--border)] bg-[color:var(--bg-alt)] text-[color:var(--text)] hover:bg-blue-600 hover:text-white transition"
//                     title="LinkedIn"
//                   >
//                     <Linkedin size={16} />
//                   </a>
//                 </div>

//                 {/* View Details Button */}
//                 <button
//                   className="w-full mt-4 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white transition"
//                 >
//                   {t.board.viewBio}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//           <div className="max-w-2xl w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
//             {/* Modal Header */}
//             <div className="relative h-48 sm:h-64 overflow-hidden">
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 className="w-full h-full object-cover"
//               />
//               <button
//                 onClick={() => setSelectedMember(null)}
//                 className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center text-2xl transition"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6 sm:p-8">
//               <h2 className="text-2xl sm:text-3xl font-bold text-[color:var(--text)]">
//                 {selectedMember.name}
//               </h2>
//               <p className="text-lg text-[color:var(--primary)] font-semibold mt-2">
//                 {selectedMember.title}
//               </p>
//               <p className="text-sm text-[color:var(--muted)] mt-1">
//                 {selectedMember.department}
//               </p>

//               {/* Specialization */}
//               <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--bg-alt)] border border-[color:var(--border)]">
//                 <span className="text-xs font-semibold text-[color:var(--primary)]">
//                   {selectedMember.specialization}
//                 </span>
//               </div>

//               {/* Bio */}
//               <p className="mt-6 text-base text-[color:var(--muted)] leading-relaxed">
//                 {selectedMember.bio}
//               </p>

//               {/* Contact Information */}
//               <div className="mt-8 space-y-3 pt-6 border-t border-[color:var(--border)]">
//                 <div className="flex items-center gap-3 text-sm">
//                   <Mail className="text-[color:var(--primary)]" size={18} />
//                   <a
//                     href={`mailto:${selectedMember.email}`}
//                     className="text-[color:var(--muted)] hover:text-[color:var(--primary)]"
//                   >
//                     {selectedMember.email}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3 text-sm">
//                   <Phone className="text-[color:var(--primary)]" size={18} />
//                   <a
//                     href={`tel:${selectedMember.phone}`}
//                     className="text-[color:var(--muted)] hover:text-[color:var(--primary)]"
//                   >
//                     {selectedMember.phone}
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-3 text-sm">
//                   <MapPin className="text-[color:var(--primary)]" size={18} />
//                   <span className="text-[color:var(--muted)]">Kathmandu, Nepal</span>
//                 </div>
//               </div>

//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedMember(null)}
//                 className="w-full mt-8 py-2.5 px-4 font-semibold rounded-lg bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary-strong)] transition"
//               >
//                 {t.board.close}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoardOfDirectors;

import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import homepage from "../assets/images/about.png";
import { useLanguage } from "../contexts/LanguageContext";

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
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop",
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
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop",
      email: "anita@pioneersacademy.edu.np",
      phone: "+977 01-4234572",
      bio: "Community advocate dedicated to bridging school, families, and society.",
      specialization: "Community Relations",
    },
  ];

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero Section */}
      <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
        <img
          src={homepage}
          alt="Board of Directors"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[color:var(--bg)]"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            {t.board.hero}

    
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-base sm:text-lg text-[color:var(--muted)] max-w-2xl mx-auto leading-relaxed">
            {t.board.subtitle}
          </p>
        </div>

        {/* Board Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group rounded-xl sm:rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden bg-[color:var(--bg-alt)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[color:var(--primary)] font-semibold mt-1">
                  {member.title}
                </p>
                <p className="text-xs sm:text-sm text-[color:var(--muted)] mt-1">
                  {member.department}
                </p>

                <div className="flex gap-3 mt-4">
                  <Mail size={16} />
                  <Phone size={16} />
                  <Linkedin size={16} />
                </div>

                <button className="w-full mt-4 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg border border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white transition">
                  {t.board.viewBio}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-2xl w-full rounded-2xl bg-[color:var(--card)] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center text-2xl transition"
              >
                ×
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {selectedMember.name}
              </h2>
              <p className="text-lg text-[color:var(--primary)] font-semibold mt-2">
                {selectedMember.title}
              </p>
              <p className="text-sm text-[color:var(--muted)] mt-1">
                {selectedMember.department}
              </p>

              <p className="mt-6 text-base text-[color:var(--muted)] leading-relaxed">
                {selectedMember.bio}
              </p>

              <button
                onClick={() => setSelectedMember(null)}
                className="w-full mt-8 py-2.5 px-4 font-semibold rounded-lg bg-[color:var(--primary)] text-white hover:bg-[color:var(--primary-strong)] transition"
              >
                {t.board.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardOfDirectors;
