import React from "react";
import cover from "../../../assets/cover.png";

const Cover = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center container mx-auto">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Hello , It's Me</h3>
          <h2 className="text-5xl font-bold uppercase">Mehedi Hassan</h2>
          <h4 className="text-2xl font-bold uppercase">
            And i'm a Mern stack Developer
          </h4>
          <p>
            An experienced web developer is proficient in HTML, CSS, JavaScript,
            Node.js, Express, Tailwind, Bootstrap, and more. Crafting
            exceptional websites with a passion for seamless user experiences.
          </p>
          <div className="flex gap-10">
            <button className="primaryBtn">
              <a
                href="/Mehedi_Hassan_Resume.pdf"
                download="Mehedi_Hassan_Resume.pdf"
              >
                Download Resume
              </a>
            </button>
            <button className="btn btn-outline btn-info">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mehedilinkdin/"
              >
                Hire Me
              </a>
            </button>
          </div>
        </div>
        <div>
          <img className="w-full md:w-[600px] mx-auto" src={cover} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cover;
