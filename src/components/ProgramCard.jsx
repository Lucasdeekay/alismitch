import { NavLink as RouterNavLink } from "react-router-dom";

export const ProgramCard = ({ icon, title, description }) => (
    <RouterNavLink to="/application" className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center">
        <div className="p-4 rounded-full bg-gray-100 inline-block mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </RouterNavLink>

);
