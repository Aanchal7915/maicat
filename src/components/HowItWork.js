import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BsPatchCheckFill, BsSearch } from "react-icons/bs";

const steps = [
  {
    icon: <FaCalendarAlt className="text-3xl text-green-600" />,
    title: "Talk To The Doctor",
    description: "Set up a time slot and reserve a session via call or WhatsApp.",
  },
  {
    icon: <BsPatchCheckFill className="text-3xl text-green-600" />,
    title: "Start With 1ˢᵗ Session",
    description: "Schedule a meeting by talking to our health consultants.",
  },
  {
    icon: <BsSearch className="text-3xl text-green-600" />,
    title: "See The Result's Within The 1ˢᵗ Week",
    description:
      "Understand the entire treatment with our doctor in the 1ˢᵗ intro consultation session and get started.",
  },
];

export default function MedicineLessTreatment() {
  return (
    <section className="text-center py-16 bg-white px-4 md:px-16">
      <motion.h2
        className="text-sm text-blue-800 font-semibold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        How It Works
      </motion.h2>

      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Our Medicineless Treatment
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        MAICAT as a Non-pharmacological intervention offers alternative methods for managing health conditions without medication.
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500">{step.description}</p>
            {index !== steps.length - 1 && (
              <FaArrowRight className="mx-auto my-6 text-xl text-blue-800" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
