import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavLink = ({ to, scrolled, children }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `
          font-semibold px-3 py-1 rounded-md transition-all duration-300 
          ${isActive ? "text-blue-600 shadow-sm bg-white/50" : ""}
          ${
            scrolled
              ? "text-black-800 hover:text-blue-600"
              : "text-white hover:text-blue-300"
          }
        `
      }
    >
      {children}
    </RouterNavLink>
  );
};
