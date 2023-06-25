import React from 'react';
const Service_card = ({ icon, title, description }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
};

export default Service_card;