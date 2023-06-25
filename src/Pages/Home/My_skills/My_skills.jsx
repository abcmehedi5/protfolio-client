import React from "react";
import { FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiFirebase,
  DiMongodb,
} from "react-icons/di";
const My_skills = () => {
  return (
    <section
    id="skills-section"
      className="py-12"
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <h2 className=" uppercase text-3xl font-bold text-center mb-8 text-[#09CEFF]">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* HTML */}
          <div className="flex flex-col items-center">
            <div className="bg-indigo-500 rounded-full p-4">
              <DiHtml5 className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">HTML</h3>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <div className="bg-purple-500 rounded-full p-4">
              <DiCss3 className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">CSS</h3>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 rounded-full p-4">
              <DiJavascript1 className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">JavaScript</h3>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 rounded-full p-4">
              <DiReact className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">React</h3>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-4">
              <DiNodejs className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Node.js</h3>
          </div>

          {/* Firebase */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-600 rounded-full p-4">
              <DiFirebase className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Firebase</h3>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <div className="bg-green-600 rounded-full p-4">
              <DiMongodb className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">MongoDB</h3>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center">
            <div className="bg-red-500 rounded-full p-4">
              <FiServer className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Express.js</h3>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <div className="bg-teal-500 rounded-full p-4">
              <FiCode className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Tailwind CSS</h3>
          </div>

          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 rounded-full p-4">
              <FiLayout className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Bootstrap</h3>
          </div>

          {/* React Native */}
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 rounded-full p-4">
              <DiReact className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">React Native</h3>
          </div>

          {/* Next.js */}
          <div className="flex flex-col items-center">
            <div className="bg-cyan-500 rounded-full p-4">
              <FiCode className="text-white text-4xl" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Next.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default My_skills;
