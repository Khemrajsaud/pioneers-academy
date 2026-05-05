// import React from 'react'

// const Primary = () => {
//   return (
//     <div>
//       hrtyrt
//     </div>
//   )
// }

// export default Primary




import React from "react";

const Primary = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Primary Section
        </h1>
      </div>

      {/* INTRO */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
          Welcome to Primary Level
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our primary section focuses on building a strong foundation for young learners through fun, creativity, and interactive learning.
        </p>
      </section>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Quality Education
            </h3>
            <p className="text-gray-600 text-sm">
              We provide strong basic education in reading, writing, and math.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Creative Activities
            </h3>
            <p className="text-gray-600 text-sm">
              Drawing, music, and games to develop creativity and imagination.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Smart Learning
            </h3>
            <p className="text-gray-600 text-sm">
              Interactive teaching methods to make learning fun and effective.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Friendly Environment
            </h3>
            <p className="text-gray-600 text-sm">
              Safe and caring environment for every child to grow confidently.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🏃</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Physical Activities
            </h3>
            <p className="text-gray-600 text-sm">
              Sports and outdoor games to keep children active and healthy.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg text-blue-900 mb-2">
              Personality Development
            </h3>
            <p className="text-gray-600 text-sm">
              Helping students build confidence, discipline, and good habits.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Primary;