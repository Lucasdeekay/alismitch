import React, { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  MapPin,
  Mail as MailIcon,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { NavLink } from "./components/NavLink";

// The main App component that handles routing and layout
export const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add event listener for scroll to handle sticky header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "programs":
        return <ProgramsPage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .parallax-bg {
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .parallax-hero {
          background-image: url('https://images.unsplash.com/photo-1549419137-b4528994a408?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }
        .parallax-testimonials {
          background-image: url('https://images.unsplash.com/photo-1517431267812-78d10459c748?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }
        .text-shadow-custom {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
        }
        .section-fade-in {
            animation: fadeIn 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu-enter {
            opacity: 0;
            transform: translateY(-20px);
        }
        .mobile-menu-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms, transform 300ms;
        }
      `}</style>

      {/* Sticky Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Globe size={32} className="text-blue-600" />
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-blue-800" : "text-white text-shadow-custom"
              }`}
            >
              Alismitch Global
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              page="home"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Home
            </NavLink>
            <NavLink
              page="about"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              About Us
            </NavLink>
            <NavLink
              page="programs"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Programs
            </NavLink>
            <NavLink
              page="testimonials"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Testimonials
            </NavLink>
            <NavLink
              page="contact"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Contact
            </NavLink>
            <button
              onClick={() => handleNavigation("programs")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-white transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6"></div>
        <ul className="flex flex-col items-center justify-center space-y-6 text-xl h-full -mt-20">
          <li>
            <NavLink
              page="home"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              page="about"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              page="programs"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              page="testimonials"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              page="contact"
              currentPage={currentPage}
              onClick={handleNavigation}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("programs")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          </li>
        </ul>
      </div>

      <main>{renderPage()}</main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 mt-16 rounded-t-3xl">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("home")}
                  className="hover:text-blue-300 transition-colors duration-300 bg-transparent"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("about")}
                  className="hover:text-blue-300 transition-colors duration-300 bg-transparent"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("programs")}
                  className="hover:text-blue-300 transition-colors duration-300 bg-transparent"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("contact")}
                  className="hover:text-blue-300 transition-colors duration-300 bg-transparent"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <MailIcon size={16} />
                <span>info@alismitchglobal.co.uk</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+44 1234 567890</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>London, UK</span>
              </p>
            </div>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-pink-500 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-white hover:text-red-500 transition-colors duration-300"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          {/* Copyright */}
          <div className="md:col-span-4 text-center mt-8 pt-8 border-t border-gray-700">
            <p>
              &copy; {new Date().getFullYear()} Alismitch Global Services UK.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
