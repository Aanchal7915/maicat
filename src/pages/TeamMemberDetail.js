import { useParams } from "react-router-dom";
import { ourTeamData } from "../data/our-team";
import { FaGlobe, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function MemberDetail() {
  const { slug } = useParams();
  const profile = ourTeamData.find((p) => p.slug === slug);

  if (!profile || !profile.detail) return <p className="text-center py-10 text-red-500">Profile not found.</p>;

  const { name, title, education, age, workExperience, alumnus, guestAppearances, about, aboutMe, imageDetail } = profile.detail;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={profile.image} className="w-40 h-40 rounded-full border-4 border-blue-200 shadow-lg" alt={name} />
        <div>
          <h1 className="text-3xl font-bold text-blue-800">{name}</h1>
          {title && <p className="text-md text-blue-600 mb-2">{title}</p>}
          {age && <p className="text-sm text-gray-600">Age: {age}</p>}
          {workExperience && <p className="text-sm text-gray-600">Experience: {workExperience}</p>}
        </div>
      </div>

      {/* About Me */}
      {aboutMe && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">About Me</h2>
          <p className="text-gray-700">{aboutMe}</p>
        </div>
      )}

      {/* About Blocks */}
      {Array.isArray(about) &&
        about.map((section, idx) => (
          <div key={idx}>
            {section.title && <h2 className="text-xl font-semibold text-blue-700">{section.title}</h2>}
            {section.description?.map((para, index) => (
              <p key={index} className="text-gray-700 mb-2">{para}</p>
            ))}
          </div>
        ))}

      {/* Education */}
      {education?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            {education.map((item, i) => <li key={i}>{item.degree} from {item.institution} in {item.year}</li>)}
          </ul>
        </div>
      )}

      {/* Alumnus */}
      {alumnus?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">Alumnus</h2>
          <ul className="list-disc list-inside text-gray-700">
            {alumnus.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Guest Appearances */}
      {guestAppearances?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-blue-700">Guest Appearances</h2>
          <ul className="list-disc list-inside text-gray-700">
            {guestAppearances.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {/* Image Details */}
      {imageDetail?.length > 0 && (
        <div className="space-y-8">
          {imageDetail.map((img, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={img.url} alt={img.title} className="w-full h-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800">{img.title}</h3>
                <p className="text-gray-600">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Social Icons if present */}
      {profile.links && (
        <div className="flex gap-4 text-blue-600 text-xl">
          {profile.links.website && <a href={profile.links.website} target="_blank" rel="noreferrer"><FaGlobe /></a>}
          {profile.links.youtube && <a href={profile.links.youtube} target="_blank" rel="noreferrer"><FaYoutube /></a>}
          {profile.links.facebook && <a href={profile.links.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>}
          {profile.links.instagram && <a href={profile.links.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>}
        </div>
      )}
    </div>
  );
}
