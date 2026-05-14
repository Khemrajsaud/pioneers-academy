// import React from "react";
// import home from "../assets/images/school-homepage.jpeg";

// const About = () => {
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
//               alt="About"
//               className=" object-contain rounded-lg "
//             />
//           </div>

//           {/* Text */}
//           <div className="md:w-2/3 text-gray-700 leading-7 text-justify">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//               natus saepe voluptatibus repellat iste perspiciatis facere
//               exercitationem aperiam tempora illum? Modi harum possimus, hic
//               libero enim explicabo quam id ipsum!
//             </p>

//             <p className="mt-4">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Repellat natus enim, eaque, et, maxime necessitatibus molestiae ab
//               sit voluptate rem atque nobis quidem deserunt ipsum cum nihil
//               adipisci tempora facere?
//             </p>
//           </div>
//         </div>

//         {/* Second Section */}
//         <div className="mt-8 text-gray-700 leading-7 text-justify">
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
//             numquam possimus adipisci maxime non fuga eius quasi, vel, enim
//             blanditiis ab impedit recusandae reprehenderit itaque voluptatibus,
//             rerum saepe id harum.
//           </p>

//           <p className="mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil
//             aliquam voluptas maxime vitae quod nisi voluptates quas velit ad.
//             Magnam rem aliquid fuga totam, a incidunt nisi doloribus soluta?
//           </p>

//           <p className="mt-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos
//             nulla provident illo voluptates quam in veniam porro minima alias
//             libero itaque natus exercitationem reprehenderit voluptate
//             dignissimos dolor, fuga quasi?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import home from "../assets/images/school-homepage.jpeg";
import { GraduationCap, Users, Award, BookOpen, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Introduction
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={home}
              alt="Pioneers' Academy Campus"
              className="w-full object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3 text-gray-700 leading-7 text-justify">
            <p>
              Established in 1999 AD (2056 BS), <span className="font-semibold text-blue-900">Pioneers' Academy, Kailali</span> is a reputed private educational institution in Lamkichuha-1, Lamki, Kailali. With over two decades of excellence in education, we have established ourselves as a trusted name in the region.
            </p>

            <p className="mt-4">
              We focus on <span className="font-semibold">quality education, character building, and a learning environment</span> that helps students grow with confidence. Our institution believes in nurturing young minds through a balanced approach of academic rigor and extracurricular activities.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
            <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education that empowers students with knowledge, skills, and values necessary to become responsible global citizens and future leaders.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-900">
            <h2 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" /> Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be a center of excellence in education that produces competent, confident, and compassionate individuals who contribute positively to society.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Why Choose Pioneers' Academy?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Education</h3>
              <p className="text-gray-500 text-sm">Experienced faculty and modern teaching methodologies</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Faculty</h3>
              <p className="text-gray-500 text-sm">Dedicated and highly qualified teachers</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Modern Curriculum</h3>
              <p className="text-gray-500 text-sm">Updated syllabus with practical learning approach</p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
              <p className="text-gray-500 text-sm">Excellent academic track record and achievements</p>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="mt-12 text-gray-700 leading-7 text-justify space-y-4">
          <p>
            At <span className="font-semibold">Pioneers' Academy</span>, we understand that education extends beyond textbooks. Our holistic approach combines academic excellence with co-curricular activities, sports, arts, and community service. We provide state-of-the-art facilities including well-equipped science laboratories, a comprehensive library, computer labs, and sports grounds to ensure all-round development of our students.
          </p>

          <p>
            Our dedicated team of educators works tirelessly to create an engaging learning environment where every student feels valued and motivated to achieve their full potential. We maintain an optimal student-teacher ratio to ensure personalized attention and support for each child's unique learning journey.
          </p>

          <p>
            Character building is at the heart of our educational philosophy. Through various programs and activities, we instill values such as integrity, respect, responsibility, and compassion in our students. We believe that these core values, combined with academic knowledge, prepare our students for success in all aspects of life.
          </p>

          <p>
            The school has consistently produced outstanding results in board examinations, and our alumni have gone on to excel in various fields including medicine, engineering, business, civil services, and academia. Many have secured admissions in prestigious universities in Nepal and abroad.
          </p>

          <p>
            We invite you to be a part of the <span className="font-semibold">Pioneers' Academy family</span>, where we nurture tomorrow's leaders, innovators, and responsible citizens. Together, let's build a brighter future through quality education and character development.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-blue-900 text-white rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">21+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold">700+</div>
              <div className="text-sm opacity-90">Students Graduated</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4+</div>
              <div className="text-sm opacity-90">Dedicated Faculty</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-90">Exam Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;