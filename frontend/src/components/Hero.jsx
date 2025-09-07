import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hh.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const textVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' }
  })
};

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative h-screen flex items-center text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ background: `url(${heroBg}) center/cover no-repeat` }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-6 lg:px-16 text-left">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          PowerFlex
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-md"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Simplify and streamline gym trainer recruitment with secure profiles,
          real-time applications, and role-based dashboards.
        </motion.p>
        <motion.div
          className="flex gap-4"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Link
            to="/login"
            className="px-6 py-3 bg-green-700 hover:bg-green-600 rounded-full font-semibold transition"
          >
            Post a Job
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 rounded-full font-semibold transition"
          >
            Find Trainers
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <span className="block w-3 h-3 border-b-2 border-r-2 border-white transform rotate-45"></span>
      </motion.div>
    </motion.section>
  );
}
