import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
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
    <div className="relative group  "  data-aos="flip-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-duration="1000">
      <div className="bg-black hover:bg-slate-800 shadow-lg rounded-lg p-6">
        <img
          className="w-full h-[200px] rounded-lg mt-4 cursor-pointer transform transition-transform hover:scale-105"
          src={image}
          alt={title}
        />
        <h3 className="text-xl font-semibold mb-2 mt-2">{title}</h3>
        <p className=" text-gray-400 mb-4">{description.slice(0 ,80)}...</p>
        <hr />
        <div className="flex justify-between mt-6">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-indigo-600"
          >
            Live Link
          </a>
          <div>
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600 mx-2"
            >
              <AiFillGithub className="mr-1 inline" /> Client
            </a>
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-indigo-600"
            >
              <AiFillGithub className="mr-1 inline" /> Server
            </a>
          </div>
        </div>
        <Link to={"/project/" + _id}>
          <button className="primaryBtn w-full mt-4">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects_card;
