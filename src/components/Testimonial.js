import { useEffect, useState } from "react";
import testimonialsData from "../data/testimonialsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialShowcase() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalTime = 6000;

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, intervalTime);
    return () => clearInterval(interval);
  }, [index, autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div className="bg-gradient-to-r from-white to-blue-50 py-20 px-6 mb-10">
      <h2 className="text-4xl text-center font-bold text-blue-700 mb-12">
        Voices That Inspire
      </h2>

      <div className="max-w-4xl mx-auto relative h-[340px] group">
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              i === index ? "opacity-100 scale-100 z-20" : "opacity-0 scale-95 z-10"
            }`}
          >
            <div className="flex flex-col items-center bg-white shadow-2xl rounded-3xl px-6 py-10 md:p-12 gap-4 border border-blue-100">
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md object-cover"
              />
              <h3 className="text-xl font-semibold text-blue-900">{t.name}</h3>
              <p className="text-sm text-gray-500">
                {t.role && `${t.role}, `}
                {t.age && `${t.age} yrs, `}
                {t.location}
              </p>
              <p className="text-gray-700 text-center italic max-w-xl">
                “{t.testimonial}”
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300 text-blue-600 z-30 hidden group-hover:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:scale-110 transition-all duration-300 text-blue-600 z-30 hidden group-hover:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
