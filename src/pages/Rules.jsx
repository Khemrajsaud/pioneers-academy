import React from "react";

const Rules = () => {
  return (
    <div>
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          School Rules
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <ul className="list-disc space-y-3 text-gray-700 text-lg">
          <li>Come to school on time every day.</li>
          <li>Wear proper school uniform.</li>
          <li>Respect teachers, staff, and classmates.</li>
          <li>Keep your classroom and school clean.</li>
          <li>Complete homework on time.</li>
          <li>Do not use mobile phones in class.</li>
          <li>Follow instructions given by teachers.</li>
          <li>Do not fight or use bad language.</li>
          <li>Take care of school property.</li>
          <li>Be honest and kind to everyone.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;