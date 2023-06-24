import React from "react";
import cover from "../../../assets/cover.png";

const Cover = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Hello , It's Me</h3>
        <h2 className="text-5xl font-bold">Mehedi Hassan</h2>
        <h4 className="text-2xl font-bold">And i'm a Mern stack Developer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eligendi
          rerum dicta vero quaerat officiis deleniti aperiam harum non quo?
        </p>
        <button className="btn btn-secondary ">Download Resume</button>
      </div>
      <div>
        <img className="w-full md:w-[600px] mx-auto" src={cover} alt="" />
      </div>
    </div>
  );
};

export default Cover;
