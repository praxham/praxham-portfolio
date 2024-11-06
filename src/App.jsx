import React, { useState, useRef, useEffect } from "react";
import Experience from "./components/Experience";
import naayachannel from "./assets/naayachannel-logo.png";
import naayatrade from "./assets/naayatrade-logo.png";
import Project from "./components/Project.jsx";
import mivlogo from "./assets/mivlogo.png";
import sharepdfslogo from "./assets/sharepdfslogo.png";
import Education from "./components/Education.jsx";
import sidcolglogo from "./assets/sidcolglogo.jpeg";

const Experiences = [
  {
    img: naayachannel,
    company: "Naayachannel",
    position: "Front-End Developer",
    duration: "May 2024 - Current (5 Months)",
    responsibilities: [
      "Designed, developed & hosted fully responsive company's website within a month",
      "Implemented interactive user interfaces using React.js, improving user engagement by 30%.",
      "Built 3 dynamic forms using Front-End JavaScript libraries, eliminating 2+ weeks of backend setup and development time",
      "Designed & developed fully responsive property e-commerce platforms for client",
    ],
  },
  {
    img: naayatrade,
    company: "Naayatrade",
    position: "Front-End Developer & UX Designer",
    duration: "March 2024 - Current (7 Months)",
    responsibilities: [
      "Delivered 10+ responsive website pages within a week, meeting tight deadlines without compromising quality.",
      "Developed an internal AI tool that significantly streamlined sales team operations, reducing workload by 50%.",
      "Architected and implemented critical user flows for a complex B2B marketplace application, combining technical expertise with a deep understanding of user needs.",
    ],
  },
];

const Projects = [
  {
    image: mivlogo,
    name: "Made in Vikhroli",
    desc: "Digital e-commerce store for digital products with UPI payment integration.",
    deploymentLink: "https://madeinvikhroli.vercel.app",
    stack: ["Mongo DB", "Express", "React"],
  },
  {
    image: sharepdfslogo,
    name: "SharePDFs",
    desc: "Web app for sending documents to print shops via whatsapp, optimized for speed and privacy.",
    deploymentLink: "https://sharepdfs.vercel.app",
    stack: ["React"],
  },
];

const Educations = [
  {
    image: sidcolglogo,
    institute: "Siddharth College (University of Mumbai)",
    degree: "Bachelor of Science (IT)",
    CGPA: "8.52",
  },
];

function App() {
  const [skew, setSkew] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const skewX = (y - centerY) / 20;
      const skewY = (centerX - x) / 20;
      setSkew({ x: skewX, y: skewY });
    };

    const handleMouseLeave = () => {
      setSkew({ x: 0, y: 0 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-fit p-4 lg:w-[600px] font-helvetica mx-auto my-4 font-semibold flex flex-col gap-4 text-4">
      <div
        ref={cardRef}
        className="aspect-video bg-gradient-to-br from-slate-800 via-zinc-500 to-slate-700 rounded-[16px] p-4 flex flex-row justify-between items-end transition-transform duration-200 ease-out hover:shadow-xl"
        style={{
          transform: `perspective(1000px) rotateX(${skew.x}deg) rotateY(${skew.y}deg)`,
        }}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <div className="text-[24px] font-helvetica-bold">
              Pratham Patankar
            </div>
            <div className="text-gray-800">Frontend Developer</div>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href="mailto:prathampatankar1234@gmail.com?subject=Frontend%20Developer%20Portfolio%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20your%20frontend%20developer%20portfolio.%20Could%20we%20discuss%20further%3F%0A%0ARegards%2C%0A[Your%20Name]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1Mc0og5QAncEjKl65zR-KpD7bUsq0x7jX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
              aria-label="Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
              </svg>
            </a>
            <a
              href="https://github.com/praxham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/prathampatankar1234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white font-helvetica">
        <div className="text-[24px] px-4">Projects</div>
        <div className="flex flex-col gap-2">
          {Projects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-white">
        <div className="text-[24px] px-4">Experience</div>
        {Experiences.map((experience, index) => {
          return <Experience key={index} experience={experience} />;
        })}
      </div>

      <div className="flex flex-col gap-2 text-white">
        <div className="text-[24px] px-4">Education</div>
        {Educations.map((education, index) => {
          return <Education key={index} education={education} />;
        })}
      </div>
    </div>
  );
}

export default App;
