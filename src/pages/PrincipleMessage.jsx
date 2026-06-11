import React from "react";
import home from "../assets/images/principle.jpeg";

const PrincipleMessage = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          From Principal Message
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Image */}
          <div className="w-full md:w-1/4 text-center ">
            <img
              src={home}
              alt="Principal"
              className="] object-contain rounded-md"
            />

            {/* Name + Designation */}
            <h2 className="mt-4 font-bold text-lg text-gray-800">
              Mr. Chakra Prasad Neupane
            </h2>
            <p className="text-sm text-gray-600">
              Principal
            </p>
          </div>

          {/* Text */}
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-7 text-justify">
             At Pioneers' Academy, we believe every student has the
                  potential to excel We provide a supportive environment that
                  nurtures curiosity, creativity and character, preparing our
                  students for a successful future
                  <br />
                  <br />

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  Our goal is to create an environment where curiosity is
                  encouraged, individual strengths can flourish, and students
                  are inspired to dream big while working steadily toward their
                  goals.
                </p>
              
            </p>
          </div>
        </div>

        </div>
    </div>
  );
};

export default PrincipleMessage;