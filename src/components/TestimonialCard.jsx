import {
  Quote,
} from "lucide-react";

export const TestimonialCard = ({ name, title, quote, image }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center mb-4 space-x-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
      />
      <div>
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    <Quote size={24} className="text-gray-300 mb-2" />
    <p className="text-gray-700 italic">"{quote}"</p>
  </div>
);
