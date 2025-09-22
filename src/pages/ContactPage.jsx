import { HeaderSection } from "../components/HeaderSection";

import { Mail as MailIcon, Phone, Building } from "lucide-react";
import { useState } from "react";

// Contact Page Component
export const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form after submission
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <HeaderSection
        title="Get in Touch"
        subtitle="Let's start your journey with Alismitch Global Services UK."
        parallaxClass="parallax-contact"
      />
      <section className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 section-fade-in">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details and Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg section-fade-in">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <MailIcon
                    size={24}
                    className="text-green-500 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold block">Email:</span>
                    <span>support@alismitch.com</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone
                    size={24}
                    className="text-green-500 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold block">Phone:</span>
                    <span>+44 7944 853988</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building
                    size={24}
                    className="text-green-500 flex-shrink-0 mt-1"
                  />
                  <div>
                    <span className="font-semibold block">Office:</span>
                    <span>Derby, UK</span>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-xl font-semibold text-gray-600">
                Reach out today — Let’s build your future abroad with Alismitch
                Global Services UK!
              </p>
            </div>
            {/* Embedded Google Map */}
            <div className="rounded-2xl shadow-lg overflow-hidden section-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83893663117!2d-0.2416801837119131!3d51.528558241477145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sng!4v1716386821817!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map showing the location of London, UK"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
