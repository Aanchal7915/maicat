import DoctorCard from "../components/DoctorCard";

import {doctors} from "../data/doctor-team"

export default function DoctorsGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Top Medical Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {doctors.map((doc, i) => (
          <DoctorCard key={i} {...doc} />
        ))}
      </div>
    </div>
  );
}
