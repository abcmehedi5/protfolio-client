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
        "Expert web development services to create stunning websites that captivate and engage your audience.",
    },
    {
      _id: 2,
      icon: <FiLayout className="text-white text-4xl" />,
      title: "UI/UX Design",
      description:
        "Custom web development solutions for a seamless online presence that drives results.",
    },
    {
      _id: 3,
      icon: <FiServer className="text-white text-4xl" />,
      title: "Backend Development",
      description:
        "Robust backend development solutions for powering scalable and secure web applications with optimal performance.",
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
