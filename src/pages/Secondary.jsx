
import React from "react";
import { secondaryData } from "../components/data.js";
import secondary from "../assets/images/secondary.jpg";

const classSubjects = [
  {
    className: "Class 9",
    subjects: [
      "Compulsory English",
      "Compulsory Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Health & Physical Education",
      "Computer Science",
      "Optional Mathematics",
    ],
  },
  {
    className: "Class 10",
    subjects: [
      "Compulsory English",
      "Compulsory Nepali",
      "Mathematics",
      "Science",
      "Social Studies",
      "Health & Physical Education",
      "Computer Science",
      "Optional Mathematics",
    ],
  },
];

const Secondary = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-blue-900 py-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          {secondaryData.title}
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={secondary}
              alt="Secondary"
              className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-7 mb-5">
              {secondaryData.description}
            </p>

            {/* Features */}
            <h3 className="font-bold text-xl text-blue-900 mb-3">
              Key Features
            </h3>

            <ul className="space-y-2 text-gray-700">
              {secondaryData.features.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subjects Section */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
            Subjects Offered
          </h2>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classSubjects.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
              >
                {/* Card Header */}
                <div className="bg-blue-900 text-white text-center py-3 rounded-xl mb-5">
                  <h3 className="text-xl font-semibold">
                    {item.className}
                  </h3>
                </div>

                {/* Subjects */}
                <ul className="space-y-3">
                  {item.subjects.map((subject, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Secondary;