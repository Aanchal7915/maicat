import React from "react";

const testimonials = [
  { name: "Aarav", feedback: "Maicat changed my life with its holistic approach.", image: "https://via.placeholder.com/100" },
  { name: "Priya", feedback: "Their immune treatment really helped me feel energetic again.", image: "https://via.placeholder.com/100" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 shadow-lg rounded-lg">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 italic">"{t.feedback}"</p>
              <p className="mt-2 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
