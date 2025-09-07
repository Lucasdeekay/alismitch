export const TeamMember = ({ name, title, imageUrl }) => (
  <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <img
      src={imageUrl}
      alt={name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-200"
    />
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
    <p className="text-blue-600 font-semibold text-sm">{title}</p>
  </div>
);
