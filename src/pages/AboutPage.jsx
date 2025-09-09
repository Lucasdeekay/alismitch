import { HeaderSection } from '../components/HeaderSection';
import { SectionHeading } from "../components/SectionHeading";
import { TeamMember } from "../components/TeamMember";

// About Us Page Component
export const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="Our Story"
        subtitle="Opening Global Doors for Young Minds"
        parallaxClass="parallax-contact"
      />
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center section-fade-in">
          <div>
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Alismitch Global Services UK was born from a
              simple yet powerful idea: to make international education
              accessible to every young person. We believe that stepping outside
              your comfort zone and immersing yourself in a new culture is the
              most effective way to foster personal growth, empathy, and a
              global perspective.
            </p>
            <p className="text-gray-600">
              Our vision is to build a world where every student has the
              opportunity to become a global citizen, and every teacher is
              empowered to lead them on that journey. We are a trusted partner,
              guiding students and educators through every step of their
              international adventure.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1565425518476-3229123699c5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students in a cultural setting"
              className="w-full h-auto rounded-3xl shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section
        className="py-24 px-6 relative overflow-hidden text-center text-white parallax-bg parallax-map rounded-3xl"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover", // makes it fit the whole section
          backgroundPosition: "center", // centers the image
          backgroundRepeat: "no-repeat", // prevents tiling
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60"></div>
        <div className="relative z-10 container mx-auto section-fade-in">
          <h2 className="text-4xl font-bold mb-4">Our Journey Through Time</h2>
          <div className="relative mt-16 pb-12">
            {/* Simple timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-shadow-custom">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <p className="text-4xl font-extrabold text-white">2010</p>
                <p className="mt-2 text-sm">
                  Founded in London, UK, with a mission to help students study
                  abroad.
                </p>
              </div>
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <p className="text-4xl font-extrabold text-white">2015</p>
                <p className="mt-2 text-sm">
                  Launched our Teacher Exchange Program, expanding our network
                  and impact.
                </p>
              </div>
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <p className="text-4xl font-extrabold text-white">2023</p>
                <p className="mt-2 text-sm">
                  Over 5,000 students and teachers supported, with new programs
                  in Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto py-16 px-6">
        <SectionHeading
          title="Meet Our Leadership"
          subtitle="Our dedicated team is here to guide you every step of the way."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 section-fade-in">
          <TeamMember
            name="Jane Doe"
            title="CEO & Founder"
            imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamMember
            name="John Smith"
            title="Head of Programs"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a562153d865?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamMember
            name="Emily White"
            title="Student Relations"
            imageUrl="https://images.unsplash.com/photo-1596815418105-06a096c46642?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamMember
            name="Mark Johnson"
            title="Finance & Operations"
            imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section> */}
    </div>
  );
};
