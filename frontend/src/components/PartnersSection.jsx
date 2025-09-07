import React from 'react';
import { motion } from 'framer-motion';

// Import images from src/assets/
import meera from '../assets/zenwellness.png';
import karan from '../assets/peaklab.png';
import rohan from '../assets/fitlife.png';
import anjali from '../assets/flexpro.png';
import expense from '../assets/move.png';

const partners = [
  { name: 'Gold Gym', logo: meera },
  { name: 'Anytime Fitness', logo: karan },
  { name: 'Cult Fit', logo: rohan },
  { name: 'Fit India', logo: expense },
  { name: 'Muscle Blaze', logo: anjali },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          Trusted by Industry Leaders
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-50 hover:bg-gray-100 transition rounded-lg shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
