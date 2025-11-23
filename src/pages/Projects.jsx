import { useRef } from "react";
import { projects } from "../constants";

const Projects = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15; // lighter tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    const layers = card.querySelectorAll(".layer");
    layers.forEach((layer, i) => {
      const offset = (i + 1) * 2; // subtle depth
      layer.style.transform = `translateZ(${offset}px)`;
    });

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    const layers = card.querySelectorAll(".layer");
    layers.forEach((layer) => (layer.style.transform = `translateZ(0px)`));
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="max-container md:p-[0.5rem] py-10">
      <h1 className="head-text text-4xl font-bold text-center">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 text-slate-600 max-w-3xl mx-auto text-center">
        <p>
          Here are some of the projects I've built. Click on a project to visit
          GitHub or the live website.
        </p>
      </div>

      <div className="flex flex-wrap my-16 gap-[1rem] justify-center">
        {projects.map((project, index) => (
          <div
            key={project.name}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="relative w-80 h-96 rounded-2xl cursor-pointer border border-gray-200 overflow-hidden"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            

            {/* Image Layer */}
            <div
              className=" w-full flex justify-center"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={project.iconUrl}
                alt={project.name}
                className="w-full h-48 object-cover shadow-md"
              />
            </div>

            {/* Content Layer */}
            <div
              className="mt-[15px] w-full px-4 layer"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="flex flex-col justify-between h-[150px]">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              </div>
              
              <div className="flex gap-4">
                {project.link && (
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium hover:underline"
                    >
                      Website
                    </a>
                  </>
                )}
              </div>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
