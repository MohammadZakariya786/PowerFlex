import React from 'react';
import { motion } from 'framer-motion';
import anjali from '../assets/aaa.jpg';
import rohan from '../assets/rohan.jpg';
import karan from '../assets/karan.jpg';
import meera from '../assets/meera.jpg';

const teamMembers = [
  {
    name: 'Mohammad Zakariya',
    role: 'Project Lead',
    photo: anjali,
  },
  {
    name: 'Rohan Gupta',
    role: 'Frontend Developer',
    photo: rohan,
  },
  {
    name: 'Karan Mehta',
    role: 'Backend Developer',
    photo: karan,
  },
  {
    name: 'Meera Sharma',
    role: 'UI/UX Designer',
    photo: meera,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
