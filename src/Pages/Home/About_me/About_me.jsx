import React from "react";
import cover from "../../../assets/cover.png";
const About_me = () => {
  return (
    <section className="bg-slate-600">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center container mx-auto">
        <div>
          <img className="w-full md:w-[600px] mx-auto" src={cover} alt="" />
        </div>
        <div className="space-y-4">
          <h2 className="text-5xl font-bold uppercase">About Me</h2>
          <h4 className="text-2xl font-bold uppercase">Mern stack Developer</h4>
          <p className="text-justify">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae dolores commodi, voluptatem similique culpa quisquam consectetur cupiditate doloremque eligendi mollitia velit aperiam inventore atque architecto est numquam laudantium necessitatibus maiores facilis iure provident possimus! Nemo ipsa tenetur consequuntur dolores.
          </p>
          <button className="btn btn-outline btn-info ">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About_me;
