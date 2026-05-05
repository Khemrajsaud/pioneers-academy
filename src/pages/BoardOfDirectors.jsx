import React from "react";
import {boardMembers} from "../components/data.js";

const BoardOfDirectors = () => {
  return (
    <div className="">
      <div className="w-full bg-blue-900 py-6">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
        Bord Of Directors
        </h1>
        
      </div>

      <div className="grid grid-cols-4 gap-4  mx-15 mt-10">
        {boardMembers.map((member) => (
          <div key={member.id} className="p-4 ">
          <img src={member.image} alt={member.name} className="w-full h-auto" />
            <h2 className="text-xl font-bold text-blue-900">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
