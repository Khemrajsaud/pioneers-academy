
import React from "react";
import { CheckCircle } from "lucide-react";

import laboratories from "../assets/images/personaldevelopment.jpg";
import digitalclassroom from "../assets/images/digitalclassroom.jpg";
import seminarhall from "../assets/images/seminarhall.jpg";
import sports from "../assets/images/activities.jpeg";
import trainingkitchen from "../assets/images/traningkitchen.jpg";

const Facilities = () => {
  const facilities = [
    {
      name: "Well-equipped Laboratories",
      description:
        "Modern science and computer laboratories for practical learning and innovation.",
      image: laboratories,
    },
    {
      name: "Digital Classrooms",
      description:
        "Smart classrooms with digital teaching tools for interactive learning.",
      image: digitalclassroom,
    },
    {
      name: "Conference & Seminar Hall",
      description:
        "Spacious hall for seminars, workshops, presentations, and events.",
      image: seminarhall,
    },
    {
      name: "Sports & Extracurricular Activities",
      description:
        "Facilities that encourage physical fitness, teamwork, and creativity.",
      image: sports,
    },
    {
      name: "Training Kitchen",
      description:
        "Well-managed kitchen facility for practical learning and training.",
      image: trainingkitchen,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 py-6">
        <h1 className="text-center text-white text-2xl md:text-3xl font-bold">
          Our Facilities
        </h1>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Learning Beyond Classrooms
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          We provide modern facilities and a supportive environment that
          enhances learning, creativity, personal development, and overall
          student success.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <h3 className="font-bold text-lg text-blue-900">
                    {facility.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-900 text-white py-12 mt-6">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A Complete Learning Environment
          </h2>

          <p className="leading-7 text-gray-200">
            Our facilities are designed to support academic excellence,
            creativity, leadership, and holistic development, ensuring that
            every student receives the best opportunities to learn and grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;