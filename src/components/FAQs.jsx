import React, { useState } from "react";

const FAQs = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            <button
              className="w-full text-left flex justify-between items-center font-semibold text-blue-900 text-base focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <span className={`ml-2 transition-transform ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
            </button>
            {openIndex === idx && (
              <div className="mt-3 text-gray-700 text-sm animate-fade-in-up">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs; 