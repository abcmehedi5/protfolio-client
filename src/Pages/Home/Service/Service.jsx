import React from "react";
import { FiCode, FiLayout, FiServer } from "react-icons/fi";
import Service_card from "./Service_card";
const Service = () => {
  const services = [
    {
      _id: 1,
      icon: <FiCode className="text-white text-4xl" />,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
    },
    {
      _id: 2,
      icon: <FiLayout className="text-white text-4xl" />,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
    },
    {
      _id: 3,
      icon: <FiServer className="text-white text-4xl" />,
      title: "Backend Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper metus euismod tellus aliquam, vitae.",
    },
  ];
  return (
    <section className="py-12">
     
        <h2 className=" uppercase text-3xl font-bold text-center mb-4 text-[#09CEFF]">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {services.map((service) => (
            <Service_card
              key={service._id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

    </section>
  );
};

export default Service;
