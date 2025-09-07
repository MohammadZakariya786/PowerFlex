import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 pt-16 pb-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInVariants}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">
        {/* Logo and About */}
        <motion.div variants={fadeInVariants}>
          <h2 className="text-3xl font-extrabold text-white mb-4">PowerFlex</h2>
          <p className="text-sm leading-relaxed">
            PowerFlex simplifies the hiring of certified gym trainers through a centralized platform.
            Companies can post requirements, and trainers can apply with verified profiles and certifications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInVariants}>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="/jobs" className="hover:text-indigo-400 transition">Find Trainers</a></li>
            <li><a href="/contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Features */}
        <motion.div variants={fadeInVariants}>
          <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>Certified Trainer Profiles</li>
            <li>Application Status Tracking</li>
            <li>Real-Time Communication</li>
            <li>Secure Login & Role Access</li>
            <li>Easy Onboarding Process</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={fadeInVariants}>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-indigo-600 rounded-full hover:scale-110 transition">
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-3 bg-indigo-600 rounded-full hover:scale-110 transition">
              <FaTwitter className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-3 bg-indigo-600 rounded-full hover:scale-110 transition">
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-3 bg-indigo-600 rounded-full hover:scale-110 transition">
              <FaInstagram className="text-white w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="mt-16 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 z-10 relative"
        variants={fadeInVariants}
      >
        <p>© {new Date().getFullYear()} PowerFlex. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
