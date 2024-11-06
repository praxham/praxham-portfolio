import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="w-full flex flex-col gap-3 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] rounded-[15px]">
        <div className="flex flex-row gap-3">
        <img
        className="w-[80px] h-fit grayscale aspect-square rounded-[8px]"
        src={experience.img}
        alt=""
      />
      <div className="flex flex-col justify-between">
          <div className="font-semibold">{experience.company}</div>
          <div>
          <div className="text-[14px] text-gray-400 font-helvetica-light">
            {experience.position}
          </div>
          <div className="text-[14px] text-gray-400 font-helvetica-light">
            {experience.duration}
          </div>
          </div>
        </div>
        </div>
      
      <div className="flex flex-col gap-3 items-left">
        
        <ul className="space-y-2 ml-4 list-disc list-outside text-gray-400 font-helvetica-light">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm leading-relaxed pl-2">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
