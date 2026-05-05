import React from "react";
import { BookOpen, FlaskConical, Monitor, Bus, Trophy, ShieldCheck } from "lucide-react";

const facilitiesData = [
  {
    title: "Library",
    icon: BookOpen,
    description: "Well-stocked library with academic and reference books.",
  },
  {
    title: "Science Lab",
    icon: FlaskConical,
    description: "Modern labs for practical learning and experiments.",
  },
  {
    title: "Computer Lab",
    icon: Monitor,
    description: "Equipped with latest computers and internet access.",
  },
  {
    title: "Transportation",
    icon: Bus,
    description: "Safe and reliable transport service for students.",
  },
  {
    title: "Sports",
    icon: Trophy,
    description: "Indoor and outdoor sports facilities for students.",
  },
  {
    title: "Security",
    icon: ShieldCheck,
    description: "24/7 security with CCTV monitoring system.",
  },
];

const Facilities = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          School Facilities
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilitiesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-blue-700" />
                </div>

                {/* Title */}
                <h2 className="font-bold text-lg mb-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
