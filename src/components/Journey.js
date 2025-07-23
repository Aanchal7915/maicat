import React from "react";

const Journey = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200 relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80"
        alt="Journey"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-60 scale-105 transition-transform duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 to-blue-400/30 z-10" />
      <div className="relative z-20 max-w-2xl mx-auto text-center p-8 rounded-3xl shadow-2xl bg-white/80 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-800 mb-6 drop-shadow-lg">Your Journey</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">Start your personalized health journey with us. We guide you through every step, from assessment to ongoing support, ensuring you achieve your wellness goals with confidence and care.</p>
      </div>
    </section>
  );
};

export default Journey;
