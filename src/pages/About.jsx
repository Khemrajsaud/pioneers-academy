// import React from "react";
// import home from "../assets/images/school-homepage.jpeg";
// import {
//   GraduationCap,
//   Users,
//   Award,
//   BookOpen,
//   Target,
//   Heart,
// } from "lucide-react";
// import { Eye } from "lucide-react";
// import { CheckCircle } from "lucide-react";
// const About = () => {
//   const features = [
//     "Qualified, Experienced & Caring Teachers",
//     "Child-Friendly & Safe Learning Environment",
//     "Modern Teaching Methods & Smart Classes",
//     "Regular counselling, career orientation & mentorship",
//     "Extra-Curricular Activities (ECA) & Clubs",
//     "Focus on academics, co-curricular, leadership and values.",
//     "Focus on Discipline, Values & Moral Education",
//     "Individual Attention to Every Student",
//   ];

//   const differenc = [
//     "Student-Centred Learning",
//     "Focus on Life Skills & Values",
//     "Use of Technology in Education",
//     "Continuous Parent-Teacher Interaction",
//     "Safe, Secure & Inclusive Environment",
//   ];
//   return (
//     <div className="bg-gray-50">
//       {/* Header */}
//       <div className="w-full bg-blue-900 py-6">
//         <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
//           Introduction
//         </h1>
//       </div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Image */}
//           <div className="w-full md:w-1/3">
//             <img
//               src={home}
//               alt="Pioneers' Academy Campus"
//               className="w-full object-contain rounded-lg shadow-md"
//             />
//           </div>

//           {/* Text */}
//           <div className="md:w-2/3 text-gray-700 leading-7 text-justify">
//             <p>
//               Pioneers' Academy Kailali is committed to providing quality
//               education from Play Group (PG) to Grade 12 in a nurturing,
//               inspiring, and student-centered environment. We believe that
//               education goes beyond academic achievement and focuses on
//               developing character, creativity, leadership, critical thinking,
//               and essential life skills in every child
//             </p>

//             <p className="mt-4">
//               Established in 1999 AD (2056 BS), Pioneers' Academy is a reputed
//               private educational institution located in Lamkichuha
//               Municipality–1, Lamki, Kailali, Nepal. With over two decades of
//               excellence in education, we have earned the trust of parents and
//               the community as one of the region's leading educational
//               institutions.
//             </p>
//           </div>
//         </div>

//         {/* Mission & Vision Section */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
//             <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
//               <Target className="w-5 h-5  uppercase" /> Our Mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               To impact quality education and number young minds to become
//               knowledgeable, responsible global citizen.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
//             <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
//               <Eye className="w-5 h-5" /> Our Vision
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               To be leading institutional recognized for academic excellence,
//               innovation and holistic development.{" "}
//             </p>
//           </div>
//         </div>

//         <div clssName="   mt-12 flex gap-10">
//           <div className="mb-6 mt-12">
//             <h1 className="inline-block  bg-[#1e3a8a] text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-full">
//               WHY CHOOSE US?
//             </h1>

//             {/* features List */}
//             <ul className="space-y-4">
//               {features.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center text-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg font-medium"
//                 >
//                   <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="">
//             <h1 className="inline-block  bg-[#4fb342] text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-full">
//               WHAT MAKES US DIFFERENT?
//             </h1>

//             {/* features List */}
//             <ul className="space-y-4">
//               {differenc.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center text-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg font-medium"
//                 >
//                   <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

       

//         {/* Detailed Content */}
//         <div className="mt-12 text-gray-700 leading-7 text-justify space-y-4">
//           <p>
//             Our mission is to empower students with knowledge, confidence, and
//             values that prepare them for future success. We foster a balanced
//             approach to learning by combining academic excellence with
//             extracurricular activities, sports, cultural programs, and
//             leadership opportunities. At Pioneers' Academy, we are dedicated to
//             creating a safe, inclusive, and motivating learning environment
//             where every student is encouraged to discover their potential,
//             pursue their passions, and become responsible global citizens.
//             Established: 1999 AD (2056 BS) Location: Lamkichuha Municipality–1,
//             Lamki, Kailali, Nepal
//           </p>

          
//         </div>

//         {/* Stats Section */}
//         <div className="mt-12 bg-blue-900 text-white rounded-lg p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             <div>
//               <div className="text-3xl font-bold">21+</div>
//               <div className="text-sm opacity-90">Years of Excellence</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">1700+</div>
//               <div className="text-sm opacity-90">Students Graduated</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">4+</div>
//               <div className="text-sm opacity-90">Dedicated Faculty</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold">100%</div>
//               <div className="text-sm opacity-90">Exam Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from "react";
import home from "../assets/images/school-homepage.jpeg";
import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Qualified, Experienced & Caring Teachers",
    "Safe, Child-Friendly Learning Environment",
    "Modern Teaching Methods & Smart Classrooms",
    "Regular Career Guidance & Mentorship",
    "Rich ECA, Sports & Club Activities",
    "Strong Focus on Academic Excellence",
    "Discipline, Values & Moral Education",
    "Individual Attention for Every Student",
  ];

  const differenc = [
     "Student-Centred Learning",
    "Focus on Life Skills & Values",
    "Use of Technology in Education",
    "Continuous Parent-Teacher Interaction",
    "Safe, Secure & Inclusive Environment",
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Introduction
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <img
              src={home}
              alt="Pioneers Academy Campus"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 text-gray-700 leading-8 text-justify">
            <p>
              Pioneers' Academy Kailali is committed to providing quality
              education from Play Group (PG) to Grade 12 in a nurturing,
              inspiring, and student-centered environment. We believe that
              education goes beyond academic achievement and focuses on
              developing character, creativity, leadership, critical thinking,
              and essential life skills in every child.
            </p>

            <p className="mt-4">
              Established in 1999 AD (2056 BS), Pioneers' Academy is a reputed
              private educational institution located in Lamkichuha
              Municipality–1, Lamki, Kailali, Nepal. With over two decades of
              excellence in education, we have earned the trust of parents and
              the community as one of the region’s leading educational
              institutions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900">
            <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              To impart quality education and nurture young minds to become
              knowledgeable, responsible, compassionate, and globally competent
              citizens.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
            <h2 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              To be a leading educational institution recognized for academic
              excellence, innovation, character development, and holistic
              growth.
            </p>
          </div>
        </div>

        {/* Why Choose Us & Difference */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="inline-block bg-blue-900 text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-full mb-8">
              WHY CHOOSE US?
            </h2>

            <ul className="space-y-4 max-w-lg mx-auto">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Makes Us Different */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="inline-block bg-green-600 text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-full mb-8">
              WHAT MAKES US DIFFERENT?
            </h2>

            <ul className="space-y-4 max-w-lg mx-auto">
              {differenc.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg"
                >
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700 leading-8 text-justify">
            Our mission is to empower students with knowledge, confidence, and
            values that prepare them for future success. We foster a balanced
            approach to learning by combining academic excellence with
            extracurricular activities, sports, cultural programs, and
            leadership opportunities.
          </p>

          <p className="mt-4 text-gray-700 leading-8 text-justify">
            At Pioneers' Academy, we are dedicated to creating a safe,
            inclusive, and motivating learning environment where every student
            is encouraged to discover their potential, pursue their passions,
            and become responsible global citizens.
          </p>

      
        </div>

        {/* Statistics */}
        <div className="mt-12 bg-blue-900 text-white rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>

            <div>
              <div className="text-3xl font-bold">1700+</div>
              <div className="text-sm opacity-90">Students Graduated</div>
            </div>

            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="text-sm opacity-90">Dedicated Faculty</div>
            </div>

            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Commitment to Success</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;