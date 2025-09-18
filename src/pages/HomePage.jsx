import {
  Users,
  Globe,
  Star,
  Shield,
  BookOpen,
  Calendar,
  School,
  Plane,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ProgramCard } from "../components/ProgramCard";
import { NavLink as RouterNavLink } from "react-router-dom";

// Home Page Component
export const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Parallax */}
      <section
        className="relative h-screen flex items-center justify-center text-center text-white parallax-bg parallax-hero rounded-b-3xl"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1613896527026-f195d5c818ed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover", // makes it fit the whole section
          backgroundPosition: "center", // centers the image
          backgroundRepeat: "no-repeat", // prevents tiling
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="z-10 px-6 section-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shadow-custom">
            Alismitch Global Services UK — Opening Global Doors for All Minds
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-shadow-custom">
            We connect students and teachers with life-changing study abroad
            opportunities.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <RouterNavLink
              to="/application"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </RouterNavLink>
            <RouterNavLink
              to="/application"
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-full border border-white transition-transform duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Learn More
            </RouterNavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto py-16 px-6">
        <SectionHeading
          title="Why Choose Alismitch Global?"
          subtitle="Our commitment to safety, trust, and global reach sets us apart."
        />
        <div className="grid md:grid-cols-3 gap-8 text-center section-fade-in">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <Shield size={48} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Safe & Trusted
            </h3>
            <p className="text-gray-600">
              Your well-being is our top priority. We partner with vetted
              institutions and provide 24/7 support.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <Globe size={48} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Global Network
            </h3>
            <p className="text-gray-600">
              Access to a wide range of programs across the globe, from Europe
              to Asia and beyond.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
            <Star size={48} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Life-Changing Experiences
            </h3>
            <p className="text-gray-600">
              Our programs are designed to build confidence, cultural awareness,
              and academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities for Teachers Section */}
      <section className="bg-blue-50 py-16 px-6 rounded-3xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 section-fade-in">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573496774379-b930dba17d8b?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Teacher with students abroad"
              className="w-full h-auto rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Opportunities for Teachers
            </h2>
            <p className="text-gray-600 mb-6">
              Empower your students and yourself through our professional Staff/Teacher Exchange
              Program. You'll lead trips, provide mentorship, and travel to new
              countries, enriching your professional and personal life.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <Plane className="text-green-500" size={20} />
                <span>Travel the world with a purpose.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Users className="text-green-500" size={20} />
                <span>Mentor the next generation of global citizens.</span>
              </li>
              <li className="flex items-center space-x-3">
                <BookOpen className="text-green-500" size={20} />
                <span>Gain valuable international teaching experience.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="container mx-auto py-16 px-6">
        <SectionHeading
          title="Our Core Programs"
          subtitle="Explore a world of possibilities through our tailored programs."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 section-fade-in">
          <ProgramCard
            icon={<School size={48} className="text-blue-500" />}
            title="Student Study Abroad"
            description="Full academic year or semester programs at top global universities."
          />
          <ProgramCard
            icon={<Users size={48} className="text-green-500" />}
            title="Teacher Exchange"
            description="Opportunities for educators to lead trips and gain international experience."
          />
          <ProgramCard
            icon={<Calendar size={48} className="text-orange-500" />}
            title="Summer Camps"
            description="Short-term, focused programs for language, culture, or STEM."
          />
          <ProgramCard
            icon={<BookOpen size={48} className="text-purple-500" />}
            title="Language Immersion"
            description="Intensive language programs to boost fluency and cultural understanding."
          />
        </div>
      </section>
    </div>
  );
};
