import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const projectID = useParams();
  console.log(project);
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${projectID.id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="py-12 bg-slate-600">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#09CEFF]">
          {project.title}
        </h2>
        <div className="flex flex-col gap-10 md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={project.image}
              alt="Project Photo"
              className="w-full mb-4 h-[350px]"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-white text-justify mb-4">
              {showFullDescription
                ? project?.description
                : `${project.description?.slice(0, 600)} `}
              {project.description && project.description?.length > 600 && (
                <span
                  className="link text-blue-500"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "See less" : "See more"}
                </span>
              )}
            </p>
            <div className="flex mb-4 mt-10">
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-white hover:text-gray-400 primaryBtn"
              >
                GitHub (Client)
              </a>
              <a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-white hover:text-gray-400 primaryBtn "
              >
                GitHub (Server)
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 primaryBtn"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
