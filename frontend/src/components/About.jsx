import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import { motion } from 'framer-motion';
import about1 from '../assets/meera.jpg';
import about2 from '../assets/guided.jpg';
import { FaChartLine, FaCheckCircle, FaBolt } from 'react-icons/fa';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.3 },
  }),
};

const features = [
  { icon: <FaCheckCircle className="text-indigo-600 w-10 h-10" />, text: 'Smart filters & verified certifications' },
  { icon: <FaChartLine className="text-indigo-600 w-10 h-10" />, text: 'Insightful analytics dashboard' },
  { icon: <FaBolt className="text-indigo-600 w-10 h-10" />, text: 'Automated messaging & onboarding' },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#e0f7fa] via-white to-[#e3f2fd]">
      <Navbar />

      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            className="text-5xl font-extrabold text-indigo-900 mb-6 tracking-tight leading-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={0}
          >
            Powering the Future of Fitness Hiring
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={1}
          >
            PowerFlex empowers fitness businesses by transforming the hiring process. We connect the right talent with the right opportunity using smart, modern, and verified workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-7xl mx-auto items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={0}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-indigo-800">Our Mission</h3>
            <motion.p
              className="text-gray-700 text-base leading-relaxed font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              custom={1}
            >
              We’re dedicated to building the most efficient hiring ecosystem for the fitness world. PowerFlex streamlines communication, simplifies application tracking, and ensures verified hiring.
            </motion.p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              {[
                'Custom dashboards for all user roles',
                'Live progress tracking and updates',
                'Frictionless onboarding experience',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                  custom={idx + 2}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={0}
          >
            <img
              src={about1}
              alt="PowerFlex dashboard"
              className="rounded-2xl shadow-lg w-full max-h-[380px] object-cover border border-gray-200"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-24 max-w-7xl mx-auto items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={0}
          >
            <img
              src={about2}
              alt="Trainer profile preview"
              className="rounded-2xl shadow-lg w-full max-h-[380px] object-cover border border-gray-200"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            custom={0}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold text-indigo-800">Why PowerFlex?</h3>
            <motion.p
              className="text-gray-700 text-base leading-relaxed font-medium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              custom={1}
            >
              From startup gyms to national fitness chains, PowerFlex helps teams grow confidently. Automate routine steps, filter candidates with ease, and reduce hiring timelines.
            </motion.p>

            {/* Icon highlights replacing the third image */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
              {features.map(({ icon, text }, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                  custom={idx + 2}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md border border-gray-200"
                >
                  {icon}
                  <p className="mt-4 text-gray-700 font-medium">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
