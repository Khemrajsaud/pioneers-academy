import React from "react";
import {
  FaAtom,
  FaBalanceScale,
  FaHotel,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";

import bannerImage from "../assets/images/gallary4.jpeg";

// Course Images
import scienceImg from "../assets/images/science.jpg";
import managementImg from "../assets/images/management.jpg";
import hotelImg from "../assets/images/hotel.jpg";
import lawImg from "../assets/images/law.jpg";

const HigherSecondary = () => {
  const faculties = [
    {
      title: "SCIENCE",
      icon: <FaAtom />,
      color: "text-blue-700",
      border: "border-blue-500",
      iconBg: "bg-blue-700",
      image: scienceImg,
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Computer Science",
      ],
    },
    {
      title: "MANAGEMENT",
      icon: <FaLaptopCode />,
      color: "text-indigo-700",
      border: "border-indigo-500",
      iconBg: "bg-indigo-700",
      image: managementImg,
      subjects: [
        "Accountancy",
        "Business Studies",
        "Computer Science",
        "Economics",
        "Finance",
      ],
    },
    {
      title: "HOTEL MANAGEMENT",
      icon: <FaHotel />,
      color: "text-orange-600",
      border: "border-orange-400",
      iconBg: "bg-orange-500",
      image: hotelImg,
      subjects: [
        "Tourism & Mountaineering",
        "Hotel Management",
        "Business Studies",
      ],
    },
    {
      title: "LAW",
      icon: <FaBalanceScale />,
      color: "text-green-700",
      border: "border-green-500",
      iconBg: "bg-green-600",
      image: lawImg,
      subjects: [
        "Constitutional Law",
        "Procedural Law",
        "Jurisprudence & Legal Theories",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 py-8">
        <h1 className="text-center text-white text-3xl md:text-4xl font-bold">
          Higher Secondary (+2)
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={bannerImage}
              alt="Higher Secondary"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-5">
              Higher Secondary Education
            </h2>

            <p className="text-gray-700 leading-8">
              Our Higher Secondary (+2) program provides students with
              comprehensive academic education and practical skills needed for
              future success. Students can choose from Science, Management,
              Hotel Management, and Law streams according to their interests and
              career goals.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              With experienced faculty members, modern classrooms, laboratories,
              and extracurricular opportunities, we ensure a balanced learning
              environment that prepares students for university education and
              professional careers.
            </p>
          </div>
        </div>

        {/* Course Structure */}
        <div className="mt-20">
          <div className="flex justify-center mb-12">
            <div className="bg-blue-900 px-12 py-3 rounded-full">
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                COURSE STRUCTURE
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className={`bg-white border-2 ${faculty.border} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300`}
              >
                {/* Icon */}
                <div className="flex justify-center mt-6">
                  <div
                    className={`${faculty.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl`}
                  >
                    {faculty.icon}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-center font-bold text-xl mt-4 px-3 ${faculty.color}`}
                >
                  {faculty.title}
                </h3>

                {/* Subjects */}
                <div className="px-5 py-5 min-h-[180px]">
                  {faculty.subjects.map((subject, i) => (
                    <div key={i} className="flex items-start gap-2 mb-3">
                      <FaCheckCircle className="text-green-500 mt-1 text-sm" />
                      <span className="text-gray-700 text-sm">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Image */}
                <img
                  src={faculty.image}
                  alt={faculty.title}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherSecondary;