import { motion } from "framer-motion";

export default function DoctorCard({ name, qualification, description }) {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-md hover:scale-105 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-blue-800 font-bold text-xl mb-1">{name}</div>
      <div className="text-sm text-gray-500 mb-3">{qualification}</div>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}
