import React from "react";

export const NavLink = ({ page, currentPage, onClick, scrolled, children }) => {
  const isSelected = currentPage === page;

  // Base classes for all states
  const baseClasses =
    "font-semibold px-3 py-1 rounded-md transition-all duration-300 bg-white/50";

  // Active state classes
  const activeClasses = "text-blue-600 shadow-sm";

  // Inactive state classes based on scroll position
  const inactiveClasses = scrolled
    ? "text-blue-800 hover:text-blue-600" // Darker color for sticky white header
    : "hover:text-blue-300"; // White for transparent hero header

  return (
    <button
      onClick={() => onClick(page)}
      className={`${baseClasses} ${
        isSelected ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  );
};
