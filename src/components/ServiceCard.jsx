import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in-up max-w-xs mx-auto">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-10" />
      </div>
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 text-base mb-2 flex-1">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 