import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import FAQs from "../components/FAQs";

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

const sampleFaqs = [
  {
    question: "What is included in this module?",
    answer: "Each module includes personalized consultation, lifestyle management, and ongoing support tailored to your needs."
  },
  {
    question: "How soon can I see results?",
    answer: "Results vary, but many clients see improvements within a few weeks of starting the program."
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);
  const [videoOpen, setVideoOpen] = useState(false);
  if (!service) return <div className="text-center py-20 text-xl">Service not found.</div>;

  // Use service.faqs if available, otherwise use sampleFaqs
  const faqs = service.faqs || sampleFaqs;
  const icon = iconMap[service.id] || "🌟";
  const tagline = service.howWeCure && service.howWeCure.length > 0 ? service.howWeCure[0] : "";

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen py-10 px-2 md:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up border border-blue-100 flex flex-col md:flex-row">
        {/* Left: Banner Image, Video, Icon/Tagline, FAQs */}
        <div className="md:w-1/2 flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-cyan-100 p-0 md:p-8 gap-6 border-b md:border-b-0 md:border-r border-blue-100 min-h-[500px]">
          {service.image && (
            <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mb-4 mt-6 md:mt-0">
              <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
            </div>
          )}
          {service.videoLink && (
            <div className="w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg bg-white/60 mb-4">
              <iframe
                src={service.videoLink.replace("watch?v=", "embed/")}
                title={service.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <div className="flex flex-col items-center w-full mb-4">
            <div className="text-5xl md:text-6xl mb-2 animate-bounce-slow drop-shadow-lg">{icon}</div>
            {tagline && <div className="text-blue-800 font-bold text-base md:text-lg mb-2 text-center px-2">{tagline}</div>}
          </div>
          {service.videoLink && (
            <button
              className="px-6 py-2 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-900 transition text-base"
              onClick={() => setVideoOpen(true)}
            >
              Watch Video (Full Screen)
            </button>
          )}
          {/* FAQs in left column for desktop, below for mobile */}
          <div className="hidden md:block w-full mt-8">
            <FAQs faqs={faqs} />
          </div>
        </div>
        {/* Right: Main Content */}
        <div className="md:w-1/2 flex flex-col justify-center p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 text-center md:text-left">{service.title}</h1>
          <p className="text-gray-700 text-lg mb-6 text-center md:text-left">{service.description}</p>
          <h2 className="text-xl font-semibold text-blue-800 mb-3 mt-6">How We Cure</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            {service.howWeCure.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center md:justify-start items-center">
            <button className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition text-lg w-full md:w-auto">Book Appointment</button>
          </div>
          {/* FAQs for mobile */}
          <div className="block md:hidden w-full mt-8">
            <FAQs faqs={faqs} />
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {videoOpen && service.videoLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300" onClick={() => setVideoOpen(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fade-in-up flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-blue-600 text-2xl font-bold z-10"
              onClick={() => setVideoOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="p-6 pb-0">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{service.title} - Video</h3>
            </div>
            <div className="px-6 pb-6">
              <iframe
                src={service.videoLink.replace("watch?v=", "embed/")}
                title={service.title}
                className="w-full h-80 md:h-96 rounded-xl border"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <Link to="/services" className="text-blue-700 hover:underline font-semibold">&larr; Back to Services</Link>
      </div>
    </div>
  );
};

export default ServiceDetail; 