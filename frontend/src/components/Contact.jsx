import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactIllustration from '../assets/CTA.webp';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Navbar />

      <main className="flex-grow flex flex-col-reverse md:flex-row w-full h-full">
        {/* Form Section */}
        <div className="md:flex-1 flex items-center justify-center p-6 md:p-12 bg-black">
          <div className="w-full max-w-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold  text-white">
              Get in Touch
            </h2>
            <p className="text-white/70">
              We'd love to hear from you! Whether you have a question about features, pricing,
              or anything else, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <FaPhoneAlt className="text-purple-500 w-5 h-5 mr-3" />
                <span className="text-white">(+91) 7376997709</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-purple-500 w-5 h-5 mr-3" />
                <span className="text-white">support@powerflex.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-500 w-5 h-5 mr-3" />
                <span className="text-white">123 Fitness Ave, Lucknow,UP,India</span>
              </div>
            </div>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-gray-100 mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-100 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-100 mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="md:flex-1 h-64 md:h-auto">
          <img
            src={contactIllustration}
            alt="Contact us illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}