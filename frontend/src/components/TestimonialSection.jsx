import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

// Import local testimonial avatars
import avatar1 from '../assets/anjali.jpg';
import avatar2 from '../assets/rohan.jpg';
import avatar3 from '../assets/karan.jpg';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Senior Fitness Manager',
    feedback: 'PowerFlex streamlined our trainer hiring process. We filled 5 positions in just two weeks!',
    avatar: avatar1,
    rating: 5,
  },
  {
    name: 'John Smith',
    role: 'Certified Trainer',
    feedback: 'I found my dream job through PowerFlex. The application tracking kept me informed every step of the way.',
    avatar: avatar2,
    rating: 4,
  },
  {
    name: 'Emily Chen',
    role: 'HR Specialist',
    feedback: 'The real-time notifications and filtering features saved us countless hours in screening candidates.',
    avatar: avatar3,
    rating: 5,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const prevSlide = () => setCurrent((current - 1 + length) % length);
  const nextSlide = () => setCurrent((current + 1) % length);

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-r from-indigo-50 via-white to-green-50">
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="relative max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          What Our Users Say
        </motion.h2>
      </div>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition z-10"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="w-full max-w-2xl mx-auto px-4 bg-white rounded-2xl shadow-2xl p-8 relative z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-lg"
              />
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`w-5 h-5 mx-0.5 ${idx < testimonials[current].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                “{testimonials[current].feedback}”
              </p>
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonials[current].name}
              </h3>
              <span className="text-sm text-gray-500">
                {testimonials[current].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextSlide}
          className="absolute right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition z-10"
        >
          <FaChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
