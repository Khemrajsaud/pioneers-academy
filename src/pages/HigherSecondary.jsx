import React from "react";
import image from "../assets/images/highschool.jpg";

const HigherSecondary = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Header */}
      <div className="bg-blue-900 py-6 text-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Higher Secondary (+2)
        </h1>
      </div>

      {/* Section 1: Image + Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={image}
              alt="Higher Secondary"
              className="w-full h-[300px] object-cover rounded-lg shadow"
            />
          </div>

          {/* Introduction */}
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-7">
              The Higher Secondary (+2) program provides students with advanced
              knowledge and specialization in their chosen fields. It prepares
              them for higher education and professional careers by combining
              theoretical understanding with practical application.
              
              <br /><br />

              Our institution offers multiple streams including Management,
              Science, and Law, guided by experienced faculty and supported by
              modern facilities.
            </p>
          </div>
        </div>

        {/* Section 2: Subjects */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Subjects Offered</h2>

          {/* Management */}
          <div className="mb-6">
            <h3 className="text-blue-700 font-semibold mb-2">
              Management Faculty
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Marketing</li>
            </ul>
          </div>

          {/* Science */}
          <div className="mb-6">
            <h3 className="text-green-700 font-semibold mb-2">
              Science Faculty
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology / Computer Science</li>
              <li>Mathematics</li>
            </ul>
          </div>

          {/* Law */}
          <div>
            <h3 className="text-purple-700 font-semibold mb-2">
              Law Faculty
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Legal Studies</li>
              <li>Political Science</li>
              <li>Sociology</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherSecondary;