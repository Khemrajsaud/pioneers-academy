import React from "react";
import { CheckCircle } from "lucide-react";

const Rules = () => {
  const rules = [
    "Come to school on time every day.",
    "Wear proper school uniform.",
    "Respect teachers, staff, and classmates.",
    "Keep your classroom and school clean.",
    "Complete homework on time.",
    "Do not use mobile phones in class.",
    "Follow instructions given by teachers.",
    "Do not fight or use bad language.",
    "Take care of school property.",
    "Be honest and kind to everyone.",
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-8 md:px-12 min-h-screen">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="inline-block bg-[#1e3a8a] text-white font-bold text-lg sm:text-xl md:text-2xl py-3 px-6 rounded-r-full">
          SCHOOL RULES
        </h1>
      </div>

      {/* Rules List */}
      <div className="max-w-4xl">
        <ul className="space-y-4">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 text-sm sm:text-base md:text-lg font-medium"
            >
              <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;