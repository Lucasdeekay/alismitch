
// Testimonials Page Component
export const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      title: "Student",
      quote:
        "Studying abroad with Alismitch Global Services UK opened my eyes to new cultures and gave me confidence for the future. The support from the team was incredible.",
      image:
        "https://images.unsplash.com/photo-1549417215-d5c417931398?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mr. James",
      title: "Teacher",
      quote:
        "Accompanying my students was life-changing. I grew alongside them, and the experience broadened my professional and personal horizons in ways I never imagined.",
      image:
        "https://images.unsplash.com/photo-1531123414780-f75f76531d04?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Aisha T.",
      title: "Student",
      quote:
        "The language immersion program was fantastic. My fluency improved so much faster than I ever thought possible, and I made lifelong friends.",
      image:
        "https://images.unsplash.com/photo-1554126802-959c2357d60a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <HeaderSection
        title="What Our Community Says"
        subtitle="Hear from our students and teachers about their unforgettable experiences."
        parallaxClass="parallax-testimonials"
      />
      <section className="container mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 section-fade-in">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

