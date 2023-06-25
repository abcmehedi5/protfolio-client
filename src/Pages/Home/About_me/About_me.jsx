import React from "react";
import cover from "../../../assets/cover.png";
const About_me = () => {
  return (
    <section id="about-section" className="bg-slate-600 "
    
    data-aos="flip-up"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-duration="1000"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center container mx-auto ">
        <div>
          <img className="w-full md:w-[600px] mx-auto" src={cover} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-5xl font-bold uppercase text-[#09CEFF]">About Me</h2>
          <h4 className="text-2xl font-bold uppercase">Mern stack Developer</h4>
          <p className="text-justify">
          Hi, I'm Mehedi Hassan, a MERN Stack Developer. I have experience in JavaScript, React.js, Node.js, Express.js, Mongo DB, and other related technologies. I am dedicated to solving problems and strive to complete tasks efficiently. I am constantly learning new skills to stay updated and improve my full-stack development capabilities in the future.
          </p>
          <button className="btn btn-outline btn-info ">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About_me;
