import React from "react";
import testimonialsData from "../data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-green-50 overflow-hidden">
      {/* Decorative background waves */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full h-48 opacity-60">
          <path fill="#22c55e" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,181.3C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full h-32 opacity-40">
          <path fill="#22c55e" fillOpacity="0.15" d="M0,64L60,80C120,96,240,128,360,133.3C480,139,600,117,720,117.3C840,117,960,139,1080,154.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-blue-700 mb-2 tracking-wide animate-fade-in">What People Say</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-400 mx-auto mb-4 rounded-full animate-pulse"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">Testimonials</h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-100">If you are looking for a treatment that gives guaranteed results, look no further. MAICAT brings to you a <span className="text-green-600 font-semibold">life-changing experience</span>.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-green-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow-md mb-4 transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-1">{t.name}</h4>
              <p className="text-green-600 font-medium mb-3">({t.title})</p>
              <p className="text-gray-700 text-base leading-relaxed">“{t.testimonial}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 