export const ProgramDetailsCard = ({ title, description, image }) => (
  <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row transition-transform duration-300 hover:scale-[1.01]">
    <img
      src={image}
      alt={title}
      className="lg:w-1/2 w-full h-64 object-cover"
    />
    <div className="p-8 lg:w-1/2 flex flex-col justify-center">
      <h3 className="text-3xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full self-start transition-transform duration-300 transform hover:scale-105 shadow-lg">
        Apply Now
      </button>
    </div>
  </div>
);
