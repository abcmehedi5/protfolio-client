import React from "react";

import Projects_card from "./Projects_card";

const Projects = () => {
    const projects = [
        {
          _id: 1,
          title: "Project 1",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
          liveLink: "https://project1.com",
          githubClient: "https://github.com/project1/client",
          githubServer: "https://github.com/project1/server",
          image: "https://www.webworxx.co.za/wp-content/uploads/2021/01/Bloemfontein-Website-Design.jpg",
        },
        {
          _id: 2,
          title: "Project 2",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
          liveLink: "https://project2.com",
          githubClient: "https://github.com/project2/client",
          githubServer: "https://github.com/project2/server",
          image: "https://www.webworxx.co.za/wp-content/uploads/2021/01/Bloemfontein-Website-Design.jpg",
        },
        {
          _id: 3,
          title: "Project 3",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
          liveLink: "https://project3.com",
          githubClient: "https://github.com/project3/client",
          githubServer: "https://github.com/project3/server",
          image: "https://www.webworxx.co.za/wp-content/uploads/2021/01/Bloemfontein-Website-Design.jpg",
        },
      ];
  return (
    <section className="bg-slate-600 py-12">
      <div className="container mx-auto">
        <h2 className="uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Projects_card key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
