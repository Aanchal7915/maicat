import React from "react";

const treatments = [
  {
    title: "Metabolic Correction Therapy",
    description: "Personalized metabolic interventions to restore optimal cellular function and energy production.",
    icon: "💊"
  },
  {
    title: "Immune Modulation",
    description: "Advanced therapies to balance and strengthen the immune system for better health outcomes.",
    icon: "🛡️"
  },
  {
    title: "Nutritional Counseling",
    description: "Expert guidance on diet and supplements tailored to your unique metabolic and immune needs.",
    icon: "🥗"
  },
  {
    title: "Detoxification Programs",
    description: "Safe and effective detox plans to eliminate toxins and support overall wellness.",
    icon: "🧪"
  },
  {
    title: "Lifestyle Medicine",
    description: "Holistic approaches including stress management, sleep optimization, and physical activity.",
    icon: "🌱"
  },
  {
    title: "Chronic Disease Management",
    description: "Comprehensive care for chronic conditions using integrative and evidence-based methods.",
    icon: "❤️"
  }
];

const TreatmentSection = () => {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-12 drop-shadow-lg">Our Treatments</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-t-4 border-blue-400"
            >
              <div className="text-5xl mb-4 animate-bounce-slow">{treatment.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{treatment.title}</h3>
              <p className="text-gray-600 text-base mb-2">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
