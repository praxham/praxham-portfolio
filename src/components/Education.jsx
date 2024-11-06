import React from "react";

const Education = ({ education }) => {
  return (
    <div className="w-full flex flex-row gap-3 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] rounded-[15px]">
      <img
        className="w-[80px] h-fit aspect-square object-cover rounded-[8px] grayscale"
        src={education.image}
        alt=""
      />
      <div className="flex flex-col gap-2 items-left">
        <div className="font-semibold">{education.institute}</div>
        <div className="text-[14px] text-gray-400 font-helvetica-light">
          {education.degree}<br/> CGPA: {education.CGPA}
        </div>
      </div>
    </div>
  );
};

export default Education;
