import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import healthJourneyData from "../data/healthJourneyData";
import VideoModal from "./VideoModal";

const HealthJourneySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState({ url: '', title: '' });

  const handleCardClick = (videoUrl, title) => {
    setActiveVideo({ url: videoUrl, title });
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-12 drop-shadow-lg relative">
          Your Health Journey Starts Here
          <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-3 rounded-full animate-pulse"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {healthJourneyData.map((card, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
              onClick={() => handleCardClick(card.videoUrl, card.title)}
            >
              {/* Video Banner */}
              <div className={`relative h-56 bg-gradient-to-r ${card.videoColor} flex items-center justify-center`}>  
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 z-10" />
                <div className="relative z-20 flex flex-col items-start justify-center h-full p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <FaPlayCircle className="text-white text-5xl drop-shadow-lg animate-pulse-slow" />
                    <span className="text-white text-lg font-bold leading-tight drop-shadow-md">{card.videoText}</span>
                  </div>
                  <span className="bg-blue-800 text-white text-xs px-3 py-1 rounded-full shadow-md mt-2 font-semibold animate-fade-in">
                    {card.videoAuthor}
                  </span>
                </div>
              </div>
              {/* Card Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-base mb-6 flex-1">{card.desc}</p>
                {/* <button
                  className="mt-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg font-semibold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 animate-fade-in"
                  onClick={e => { e.stopPropagation(); handleCardClick(card.videoUrl, card.title); }}
                >
                  {card.btn}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
      />
    </section>
  );
};

export default HealthJourneySection; 