import React from "react";

const MaicatModuleModal = ({ isOpen, onClose, title, pdf }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative animate-fade-in-up flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-blue-600 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-6 pb-0">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{title}</h3>
        </div>
        <div className="px-6 pb-6">
          <iframe
            src={pdf}
            title={title}
            className="w-full h-[70vh] rounded-xl border"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MaicatModuleModal; 