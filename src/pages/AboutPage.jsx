import { HeaderSection } from "../components/HeaderSection";
import { SectionHeading } from "../components/SectionHeading";
import { TeamMember } from "../components/TeamMember";

// About Us Page Component
export const AboutPage = () => {
  return (
    <div>
      <HeaderSection
        title="Our Story"
        subtitle="Opening Global Doors for All Minds"
        parallaxClass="parallax-contact"
      />
      <section className="py-20 px-6 section-fade-in bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At Alismitch Global Services (UK) Limited, we are dedicated to
                building bridges between the United Kingdom and West Africa in
                the areas of professional training, education, and human capital
                development. Incorporated in September 2024 and based in Derby,
                England, we have quickly established strong networks with
                leading UK training institutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are proud to be the official facilitating agent of Newcastle
                Fire Academy in the West Africa region, connecting individuals
                and organisations to world-class fire rescue and safety
                training. However, our expertise does not stop there; From
                specialized skills development to university admissions in the
                UK, we provide tailored solutions that empower individuals and
                organizations to achieve their goals.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Students collaborating"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="py-20 px-6 relative overflow-hidden text-center text-white parallax-bg parallax-map rounded-3xl mt-16"
            style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover", // makes it fit the whole section
          backgroundPosition: "center", // centers the image
          backgroundRepeat: "no-repeat", // prevents tiling
        }}>
            <div className="absolute inset-0 bg-blue-900/60"></div>
            <div className="relative z-10 container mx-auto section-fade-in">
              <h2 className="text-4xl font-bold mb-4">Our Vision & Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-shadow-custom">
                <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Vision Statement
                  </h3>
                  <p className="mt-2 text-sm">
                    To be a trusted bridge between the United Kingdom and West
                    Africa, empowering individuals and organizations through
                    world-class training, education, and human capital
                    development that drives global opportunities and sustainable
                    growth.
                  </p>
                </div>
                <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mission Statement
                  </h3>
                  <ul className="mt-2 text-sm text-left space-y-2 list-disc list-inside">
                    <li>
                      Facilitating access to globally recognized fire, safety,
                      and rescue training.
                    </li>
                    <li>
                      Supporting students in securing admission into leading UK
                      universities.
                    </li>
                    <li>
                      Creating innovative pathways for skills development and
                      career advancement.
                    </li>
                    <li>
                      Building strong partnerships that enhance knowledge
                      transfer and international collaboration.
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Core Values
                  </h3>
                  <ul className="mt-2 text-sm text-left space-y-2 list-disc list-inside">
                    <li>
                      Excellence - Highest standards in training and service.
                    </li>
                    <li>
                      Integrity - Honesty, transparency, and accountability.
                    </li>
                    <li>Innovation - Forward-thinking solutions.</li>
                    <li>Collaboration - Strong, sustainable partnerships.</li>
                    <li>
                      Empowerment - Enabling individuals to achieve their
                      potential.
                    </li>
                    <li>
                      Global Impact - Bridging local aspirations with
                      international opportunities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
