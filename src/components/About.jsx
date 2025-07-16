import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1500&q=80"
        alt="About Maicat"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60 scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-400/30 z-10" />
      <div className="relative z-20 max-w-2xl mx-auto text-center p-8 rounded-3xl shadow-2xl bg-white/80 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 drop-shadow-lg">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">We are dedicated to providing advanced metabolic and immune correction therapies, personalized for your health journey. Our team combines science, compassion, and innovation to help you restore, revive, and reclaim your well-being.</p>
      </div>
    </section>
  );
};

export default About;
