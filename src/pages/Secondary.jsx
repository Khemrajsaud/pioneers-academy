import React from "react";
import { secondaryData } from "../components/data.js";
import secondary from "../assets/images/secondary.jpeg";

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
      </div>
    </div>
  );
};

export default Secondary;
