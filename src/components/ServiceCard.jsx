import React from "react";

const iconMap = {
  "module-weight-loss": "🍏",
  "module-diabetes-cure": "💉",
  "module-gestational-diabetes": "🤰",
  "module-pcos-reversal": "🩺",
  "module-infertility": "👶",
  "module-hair-skin": "💇‍♀️",
  "module-thyroid": "🦋",
  "module-autoimmune": "🛡️",
  "module-anti-cancer": "🎗️"
};

const ServiceCard = ({ id, title, description, cta }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mx-auto animate-fade-in-up">
      <div className="text-5xl mb-4 animate-bounce-slow">{iconMap[id] || "🌟"}</div>
      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 text-center uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 text-base mb-6 text-center flex-1">{description}</p>
      <button className="mt-auto px-6 py-2 bg-blue-900 text-white rounded font-semibold shadow hover:bg-blue-700 transition text-base w-full">{cta || "Learn More"}</button>
    </div>
  );
};

export default ServiceCard; 