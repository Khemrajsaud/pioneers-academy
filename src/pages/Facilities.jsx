import React from "react";
import { CheckCircle } from "lucide-react";

const Facilities = () => {
  const facilities = [
    "Well-equipped laboratories",
    "Digital classrooms",
    "Conference & seminar hall",
    "Sports & extracurricular activities",
    "Training Kitchen",
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-8 md:px-12">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="inline-block bg-[#1e3a8a] text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-r-full">
          OUR FACILITIES
        </h1>
      </div>

      {/* Facilities List */}
      <ul className="space-y-4">
        {facilities.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-700 text-sm sm:text-base md:text-lg font-medium"
          >
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facilities;