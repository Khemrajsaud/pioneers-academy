import React from "react";
import image from "../assets/images/highschool.jpg";

const faculties = [
  {
    faculty: "Management",
    color: "bg-blue-900",
    classes: [
      {
        className: "Class 11",
        subjects: [
          "English",
          "Nepali",
          "Accountancy",
          "Business Studies",
          "Economics",
          "Hotel Management / Computer Science",
          "Marketing",
        ],
      },
      {
        className: "Class 12",
        subjects: [
          "English",
          "Nepali",
          "Accountancy",
          "Business Studies",
          "Economics",
          "Hotel Management / Computer Science",
          "Marketing",
        ],
      },
    ],
  },

  {
    faculty: "Science",
    color: "bg-green-700",
    classes: [
      {
        className: "Class 11",
        subjects: [
          "English",
          "Nepali",
          "Physics",
          "Chemistry",
          "Mathematics",
          "Biology / Computer Science",
        ],
      },
      {
        className: "Class 12",
        subjects: [
          "English",
          "Nepali",
          "Physics",
          "Chemistry",
          "Mathematics",
          "Biology / Computer Science",
        ],
      },
    ],
  },

  {
    faculty: "Law",
    color: "bg-purple-700",
    classes: [
      {
        className: "Class 11",
        subjects: [
          "English",
          "Nepali",
          "Legal Studies",
          "Political Science",
          "Sociology",
          "Mass Communication",
        ],
      },
      {
        className: "Class 12",
        subjects: [
          "English",
          "Nepali",
          "Legal Studies",
          "Political Science",
          "Sociology",
          "Mass Communication",
        ],
      },
    ],
  },
];

const HigherSecondary = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-blue-900 py-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Higher Secondary (+2)
        </h1>
      </div>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Higher Secondary"
              className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Intro */}
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-7">
              The Higher Secondary (+2) program provides students with
              specialized education in Management, Science, and Law streams.
              Our curriculum is designed to develop academic excellence,
              practical skills, leadership qualities, and career readiness.

              <br /><br />

              Students are guided by experienced faculty members with access
              to modern classrooms, laboratories, and learning resources to
              prepare them for university education and professional success.
            </p>
          </div>
        </div>

        {/* Faculties */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
            Faculties & Subjects
          </h2>

          {/* Faculty Sections */}
          <div className="space-y-12">
            {faculties.map((facultyItem, index) => (
              <div key={index}>
                
                {/* Faculty Title */}
                <div
                  className={`${facultyItem.color} text-white py-3 rounded-2xl text-center mb-6`}
                >
                  <h3 className="text-2xl font-bold">
                    {facultyItem.faculty} Faculty
                  </h3>
                </div>

                {/* Class Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {facultyItem.classes.map((cls, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
                    >
                      {/* Class Header */}
                      <div
                        className={`${facultyItem.color} text-white text-center py-3 rounded-xl mb-5`}
                      >
                        <h4 className="text-xl font-semibold">
                          {cls.className}
                        </h4>
                      </div>

                      {/* Subjects */}
                      <ul className="space-y-3">
                        {cls.subjects.map((subject, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-gray-700"
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${facultyItem.color}`}
                            ></span>

                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HigherSecondary;