import React from "react";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-700 hover:text-blue-600 text-2xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="aspect-w-16 aspect-h-9 w-full rounded-t-2xl overflow-hidden">
          <iframe
            src={videoUrl.replace("watch?v=", "embed/")}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-80 md:h-96 border-0 rounded-t-2xl"
          ></iframe>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoModal; 