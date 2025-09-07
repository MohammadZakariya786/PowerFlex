import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaListAlt, FaPaperPlane, FaCheckCircle, FaClock } from 'react-icons/fa';

const steps = [
  {
    title: '1. Register & Login',
    description: 'Trainers and companies create secure accounts with role-based authentication.',
    icon: FaUserPlus,
  },
  {
    title: '2. Post & Browse Jobs',
    description: 'Companies post openings and trainers browse listings matching their expertise.',
    icon: FaListAlt,
  },
  {
    title: '3. Apply & Notify',
    description: 'Trainers apply with one click, and companies receive instant email alerts.',
    icon: FaPaperPlane,
  },
  {
    title: '4. Shortlist & Schedule',
    description: 'HR shortlists candidates and schedules interviews via the dashboard.',
    icon: FaClock,
  },
  {
    title: '5. Hire & Onboard',
    description: 'Finalize hiring and track onboarding progress seamlessly.',
    icon: FaCheckCircle,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="text-4xl text-indigo-600 mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
