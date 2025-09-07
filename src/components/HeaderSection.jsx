export const HeaderSection = ({ title, subtitle, parallaxClass }) => (
  <header
    className={`relative h-96 flex items-center justify-center text-center text-white parallax-bg ${parallaxClass} rounded-b-3xl`}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="z-10 px-6 section-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-shadow-custom">
        {title}
      </h1>
      <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-shadow-custom">
        {subtitle}
      </p>
    </div>
  </header>
);
