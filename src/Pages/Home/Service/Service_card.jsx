import React from "react";
const Service_card = ({ icon, title, description }) => {
  return (
    <div
      className="bg-slate-600 shadow-lg rounded-lg p-6"
      data-aos="flip-down"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-duration="1000"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className=" text-white text-justify">{description}</p>
    </div>
  );
};

export default Service_card;
