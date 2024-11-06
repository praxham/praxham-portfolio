import React from "react";

const Project = ({ project }) => {
  return (
    <a
      href={project.deploymentLink}
      target="_blank" rel="noopener noreferrer"
      className="w-full flex flex-col gap-3 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] rounded-[15px] cursor-pointer"
    >
      <div className="flex flex-row gap-3">
        <img
          className="w-[80px] h-fit aspect-square rounded-[8px]"
          src={project.image}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <div>{project.name}</div>
          <div className="text-gray-400 font-helvetica-light">
            {project.desc}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        {project.stack.map((tech,index)=>{
            return (
                <div className="text-[14px] px-2 py-1 border-gray-400 border-[2px] rounded-[50px]">
                    {tech}
                </div>
            )
        })}
      </div>
    </a>
  );
};

export default Project;
