import { ourTeamData } from '../data/our-team';
import { useNavigate } from 'react-router-dom';

export default function OurTeam() {
  const navigate = useNavigate();
  return (
    <section className="px-6 md:px-16 py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-12">
        Meet Our Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ourTeamData.map((member, index) => (
          <div
            onClick={() => navigate(`/team-member/${member.slug}`)}
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 border border-blue-100"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 text-center bg-white">
              <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
            </div>

            {/* Gradient overlay hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
