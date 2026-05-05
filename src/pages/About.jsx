import React from "react";
import home from "../assets/images/home.jpg";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Introduction
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src={home}
              alt="About"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text */}
          <div className="md:w-2/3 text-gray-700 leading-7 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              natus saepe voluptatibus repellat iste perspiciatis facere
              exercitationem aperiam tempora illum? Modi harum possimus, hic
              libero enim explicabo quam id ipsum!
            </p>

            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellat natus enim, eaque, et, maxime necessitatibus molestiae ab
              sit voluptate rem atque nobis quidem deserunt ipsum cum nihil
              adipisci tempora facere?
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-8 text-gray-700 leading-7 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            numquam possimus adipisci maxime non fuga eius quasi, vel, enim
            blanditiis ab impedit recusandae reprehenderit itaque voluptatibus,
            rerum saepe id harum.
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil
            aliquam voluptas maxime vitae quod nisi voluptates quas velit ad.
            Magnam rem aliquid fuga totam, a incidunt nisi doloribus soluta?
          </p>

          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos
            nulla provident illo voluptates quam in veniam porro minima alias
            libero itaque natus exercitationem reprehenderit voluptate
            dignissimos dolor, fuga quasi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;