import React from "react";

const MaicatModuleCard = ({ title, image, onOpen }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center text-blue-900 mb-4 uppercase tracking-wide">{title}</h2>
      <div className="w-full h-80 flex items-center justify-center border-2 border-gray-300 rounded-xl overflow-hidden mb-6 bg-gray-50">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
      <button
        className="mt-auto px-8 py-2 bg-blue-900 text-white rounded font-semibold shadow hover:bg-blue-700 transition text-lg tracking-widest"
        onClick={onOpen}
      >
        OPEN
      </button>
    </div>
  );
};

export default MaicatModuleCard; 