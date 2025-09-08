import { HeaderSection } from "../components/HeaderSection";
import { ProgramDetailsCard } from "../components/ProgramDetailsCard";

// Programs Page Component
export const ProgramsPage = () => {
  const programs = [
    {
      title: "Student Study Abroad",
      description:
        "Full academic year or semester programs at top global universities. We handle admissions, visas, and accommodation.",
      image:
        "https://images.unsplash.com/photo-1498243399066-6468798e1e79?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Teacher Exchange",
      description:
        "Opportunities for educators to lead trips, mentor students, and gain international teaching experience.",
      image:
        "https://images.unsplash.com/photo-1582213782172-e14b093395b1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Summer Camps",
      description:
        "Short-term, focused programs for language, culture, or STEM. Fun, immersive, and educational experiences.",
      image:
        "https://images.unsplash.com/photo-1545620857-7a5658604313?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Language Immersion",
      description:
        "Intensive language programs to boost fluency and cultural understanding in real-world settings.",
      image:
        "https://images.unsplash.com/photo-1550937583-b7787474a055?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeaderSection
        title="Our Programs"
        subtitle="Find the perfect program for your global journey."
        parallaxClass="parallax-contact"
      />
      <section className="container mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-2 gap-12 section-fade-in">
          {programs.map((program, index) => (
            <ProgramDetailsCard key={index} {...program} />
          ))}
        </div>
      </section>

      {/* Parallax section with landmarks */}
      <section className="relative py-24 px-6 text-center text-white parallax-bg parallax-landmarks rounded-3xl">
        <div className="absolute inset-0 bg-orange-600/60"></div>
        <div className="relative z-10 container mx-auto section-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-shadow-custom">
            Your Adventure Awaits
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-shadow-custom">
            Imagine learning in the shadow of the Eiffel Tower or walking the
            historic streets of London.
          </p>
        </div>
      </section>
    </div>
  );
};
