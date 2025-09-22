import { HeaderSection } from '../components/HeaderSection';
import { SectionHeading } from "../components/SectionHeading";
import { TeamMember } from "../components/TeamMember";

import {
  Mail as MailIcon,
  User,
  School,
} from "lucide-react";

// About Us Page Component
export const ApplicationPage = () => {
  return (
    <div>
      <HeaderSection
        title="Application Process"
        subtitle="Follow these steps to begin your journey with Alismitch Global
            Services."
        parallaxClass="parallax-contact"
      />
      <section className="py-20 px-6 section-fade-in bg-white">
        <div className="container mx-auto">
          <div className="space-y-12">
            {/* Fire & Safety Training */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center space-x-2">
                <School size={32} />
                <span>Fire & Safety Training</span>
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Initial Inquiry:</span>{" "}
                  Applicants contact Alismitch Global Services to express
                  interest in fire and safety training.
                </li>
                <li>
                  <span className="font-semibold">Program Guidance:</span> We
                  provide detailed information on available training programs,
                  schedules, and requirements.
                </li>
                <li>
                  <span className="font-semibold">Application Submission:</span>{" "}
                  Applicants complete and return the application form with
                  necessary supporting documents.
                </li>
                <li>
                  <span className="font-semibold">
                    Verification & Processing:
                  </span>{" "}
                  We review applications to ensure eligibility and forward them
                  to Newcastle Fire Academy.
                </li>
                <li>
                  <span className="font-semibold">
                    Confirmation of Admission:
                  </span>{" "}
                  Successful applicants receive an official training offer and
                  joining instructions.
                </li>
                <li>
                  <span className="font-semibold">Logistics Support:</span> We
                  provide advisory support on travel, accommodation, and other
                  requirements.
                </li>
              </ol>
            </div>

            {/* UK University Admissions */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center space-x-2">
                <User size={32} />
                <span>UK University Admissions Support</span>
              </h3>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">
                    Consultation & Assessment:
                  </span>{" "}
                  We discuss career goals and evaluate academic background to
                  recommend suitable UK universities and courses.
                </li>
                <li>
                  <span className="font-semibold">Document Preparation:</span>{" "}
                  Applicants submit academic transcripts, certificates,
                  references, and other required documents.
                </li>
                <li>
                  <span className="font-semibold">Application Submission:</span>{" "}
                  We assist in completing and submitting applications to
                  selected UK universities.
                </li>
                <li>
                  <span className="font-semibold">Offer Letters:</span>{" "}
                  Applicants receive conditional or unconditional offers from
                  universities.
                </li>
                <li>
                  <span className="font-semibold">Visa Advisory Support:</span>{" "}
                  We guide applicants through the UK student visa process.
                </li>
                <li>
                  <span className="font-semibold">Pre-departure Guidance:</span>{" "}
                  We provide orientation and support for travel, accommodation,
                  and settling in the UK.
                </li>
              </ol>
            </div>

            {/* New section for beginning application */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Application?</h3>
          <p className="text-lg mb-6">
            The first step is to send us an email stating your interest. We will then guide you through the next steps.
          </p>
          <a
            href="mailto:support@alismitch.com"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <MailIcon size={20} />
            <span>Email Us to Get Started</span>
          </a>
        </div>
      
          </div>
        </div>
      </section>
    </div>
  );
};