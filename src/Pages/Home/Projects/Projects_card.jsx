import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Projects_card = ({ project }) => {
  const {
    _id,
    title,
    description,
    liveLink,
    githubClient,
    githubServer,
    image,
  } = project;
  return (
    <div className="relative group ">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img
          className="w-full h-[200px] rounded-lg mt-4 cursor-pointer transform transition-transform hover:scale-105"
          src={image}
          alt={title}
        />
        <h3 className="text-xl font-semibold mb-2 mt-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-600"
          >
            Live Link
          </a>
          <div>
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600 mx-2"
            >
              <AiFillGithub className="mr-1 inline" /> Client
            </a>
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600"
            >
              <AiFillGithub className="mr-1 inline" /> Server
            </a>
          </div>
        </div>
        <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">
          Details
        </button>
      </div>

      {/* <img className="w-full h-auto rounded-lg mt-4 cursor-pointer transform transition-transform hover:scale-105" src={image} alt={title} /> */}
    </div>
  );
};

export default Projects_card;
