import React, { useEffect, useState } from "react";

const Project = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const fetchUrl = async () => {
    try {
      const response = await fetch(project?.deploymentLink);
      const html = response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      console.log(doc)
    }catch(e){
      console.warn(e)
    }
  }

  useEffect(() => {
    if(!project) return
    fetchUrl()
  }, [])

  return (
    <a
      href={project.deploymentLink}
      target="_blank" rel="noopener noreferrer"
      className="w-full flex flex-col gap-3 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-[10px] rounded-[15px] cursor-pointer"
    >
      <div className="flex flex-row gap-3">
        {imgError ? <div className="w-[80px] aspect-square text-[12px] flex flex-col items-center justify-center rounded-[8px] bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 text-white" />: <img
          className="w-[80px] aspect-square rounded-[8px]"
          src={`${project.deploymentLink}/favicon.svg`}
          alt=""
          onError={() => setImgError(true)}
        />}
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
