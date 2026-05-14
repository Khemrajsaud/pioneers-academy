import React from "react";
import home from "../assets/images/principle.jpeg";

const ChairmanMessage = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          From Chairman Message
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={home}
              alt="Principal"
              className="w-[300px] h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-7 text-justify">
              It is with great pride and joy that I welcome you to Pioneers Academy.
              As an institution dedicated to excellence in education, we stand committed
              to nurturing not just academic brilliance, but also strong character,
              critical thinking, and compassionate citizenship.

              <br /><br />

              At Pioneers Academy, we believe that every child is unique, with their own
              talents, interests, and potential. Our mission is to create an environment
              where these individual strengths can flourish, where curiosity is encouraged,
              and where students are inspired to dream big and work hard to achieve their goals.

              <br /><br />

              Our experienced and dedicated faculty members work tirelessly to provide a
              learning experience that goes beyond textbooks. We emphasize hands-on learning,
              collaborative projects, and real-world applications of knowledge.
            </p>
          </div>
        </div>

        {/* Second Paragraph */}
        <div className="mt-6">
          <p className="text-gray-700 leading-7 text-justify">
            Through various co-curricular activities, sports programs, and community service
            initiatives, we ensure that our students grow into well-rounded individuals.

            <br /><br />

            I encourage all our students to be curious, creative, and courageous. Don’t be afraid
            to ask questions and challenge yourselves. Success is not just about grades—it’s about
            becoming the best version of yourself.

            <br /><br />

            With warm regards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;