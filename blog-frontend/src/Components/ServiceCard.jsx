import React from "react";

const ServiceCard = ({ icon: Icon, title, description, points }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 flex w-sm">
      <div className="mb-4">
        <Icon className="w-10 h-10 text-blue-500" />
      </div>
      <div className="text-left pl-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <ul className="list-disc list-inside text-gray-600 ">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
