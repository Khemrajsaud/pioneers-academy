import React from "react";
import { lowerSecondaryData } from "../components/data.js";
import lowersecondary from "../assets/images/secondary.jpg"; // add your image

const LowerSecondary = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Header */}
      <div className="bg-blue-900 py-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          {lowerSecondaryData.title}
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={lowersecondary}
              alt="Lower Secondary"
              className="w-full h-[300px] object-cover rounded-lg shadow"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-7 mb-4">
              {lowerSecondaryData.description}
            </p>

            {/* Features */}
            <h3 className="font-bold text-lg mb-2">Key Features</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              {lowerSecondaryData.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Subjects */}
            <h3 className="font-bold text-lg mb-2">Subjects Offered</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {lowerSecondaryData.subjects.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowerSecondary;