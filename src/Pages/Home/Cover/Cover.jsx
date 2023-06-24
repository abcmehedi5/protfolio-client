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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
            eligendi rerum dicta vero quaerat officiis deleniti aperiam harum
            non quo?
          </p>
          <div className="flex gap-10">
            {/* <button className="p-3 rounded-md text-black font-bold hover:bg-sky-700 hover:text-white bg-[#09CEFF] ">Download Resume</button> */}
            <button className="primaryBtn">Download Resume</button>
            <button className="btn btn-outline btn-info">Hire Me</button>
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
