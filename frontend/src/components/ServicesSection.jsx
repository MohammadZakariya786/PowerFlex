import React from 'react';
import { motion } from 'framer-motion';
import { FaIdBadge, FaClipboardList, FaLaptop, FaUsers } from 'react-icons/fa';

// Import local images
import personalImg from '../assets/authentication.jpg';
import nutritionImg from '../assets/meera.jpg';
import groupImg from '../assets/job.jpg';
import onlineImg from '../assets/jobmanagement.jpg';

const services = [
  {
    title: 'Authentication Module',
    description: 'Secure, role-based login for Trainers and Companies using JWT and Bcrypt.js.',
    icon: FaUsers,
    image: personalImg,
  },
  {
    title: 'Trainer Profile Module',
    description: 'Create and manage professional trainer profiles with skills, certifications, and availability.',
    icon: FaIdBadge,
    image: nutritionImg,
  },
  {
    title: 'Job Application Module',
    description: 'Browse listings, apply to roles, and track application status in real time.',
    icon: FaClipboardList,
    image: groupImg,
  },
  {
    title: 'Job Management Module',
    description: 'Post job openings, shortlist candidates, and schedule interviews via an intuitive dashboard.',
    icon: FaLaptop,
    image: onlineImg,
  },
];

const cardMotion = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our Services</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover how we can help you reach and exceed your fitness goals through tailored support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardMotion}
                className="rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 transition shadow-lg hover:shadow-2xl text-center"
              >
                {/* Image Section */}
                <div className="h-48 w-full">
                  <motion.img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="text-4xl text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                  <p className="text-gray-600">{svc.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
