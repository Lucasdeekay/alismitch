export const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12 section-fade-in">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">
      {title}
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);
