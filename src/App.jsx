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
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { inject } from "@vercel/analytics";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { NavLink } from "./components/NavLink";

export const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  inject();

  return (
    <Router basename="/">
      <div className="bg-gray-50 font-sans text-gray-800 antialiased">
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
              <img
                src="/logo.png"
                alt="Alismitch Global Logo"
                className="w-10 h-10 object-contain"
              />
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-blue-800" : "text-white text-shadow-custom"
                }`}
              >
                Alismitch Global
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink to="/" scrolled={scrolled}>
                Home
              </NavLink>
              <NavLink to="/about" scrolled={scrolled}>
                About Us
              </NavLink>
              <NavLink to="/programs" scrolled={scrolled}>
                Programs
              </NavLink>
              <NavLink to="/testimonials" scrolled={scrolled}>
                Testimonials
              </NavLink>
              <NavLink to="/contact" scrolled={scrolled}>
                Contact
              </NavLink>
              <button
                to="/programs"
                scrolled={scrolled}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>

        
      {/* Mobile Navigation Menu */}
      
{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
    <div className="absolute top-0 right-0 h-full w-1/2 max-w-sm bg-white shadow-lg animate-slide-in">
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-gray-600 hover:text-red-500 text-2xl font-bold"
          aria-label="Close menu"
>
          <X size={20} />
        </button>
      </div>
      <ul className="flex flex-col justify-center h-full px-6 py-12 space-y-8 text-lg font-medium text-gray-800">
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/programs" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">
            Programs
          </Link>
        </li>
        <li>
          <Link to="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)}

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-16 rounded-t-3xl">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Contact Us
              </h3>
              <p className="flex items-center space-x-2">
                <MailIcon size={16} /> info@alismitchglobal.co.uk
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} /> +44 1234 567890
              </p>
              <p className="flex items-center space-x-2">
                <MapPin size={16} /> London, UK
              </p>
            </div>
            {/* Socials */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Facebook size={24} />
                <Instagram size={24} />
                <Linkedin size={24} />
                <Youtube size={24} />
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-700">
            <p>
              &copy; {new Date().getFullYear()} Alismitch Global Services UK.
              All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};
