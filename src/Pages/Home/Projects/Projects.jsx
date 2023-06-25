import React, { useEffect, useState } from "react";
import Projects_card from "./Projects_card";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://protfolio-server-abcmehedi5.vercel.app/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  });
  return (
    <section className="bg-slate-600 py-12" id="projects-section">
      <div className="container mx-auto">
        <h2 className="uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">
          Projects
        </h2>
        {projects.length <= 0 ? (
          <span className="loading loading-spinner flex items-center mx-auto text-warning"></span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Projects_card key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
