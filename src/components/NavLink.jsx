export const NavLink = ({ page, currentPage, onClick, children }) => (
  <button
    onClick={() => onClick(page)}
    className={`
      font-semibold px-3 py-1 rounded-md transition-all duration-300
      ${
        currentPage === page
          ? "text-blue-600 bg-white/50 shadow-sm"
          : "text-white hover:text-blue-300 text-shadow-custom"
      }
    `}
  >
    {children}
  </button>
);
