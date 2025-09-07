import React from 'react';
import { motion } from 'framer-motion';
import blog1 from '../assets/meera.jpg';
import blog2 from '../assets/loss.jpg';
import blog3 from '../assets/rohan.jpg';

const blogs = [
  {
    title: 'Smart Hiring for Fitness Centers',
    date: 'May 10, 2025',
    image: blog1,
    excerpt: 'Learn how PowerFlex helps gyms hire certified trainers faster and smarter with real-time tracking and filters.',
  },
  {
    title: 'Top 5 Skills Every Gym Trainer Needs',
    date: 'April 22, 2025',
    image: blog2,
    excerpt: 'Discover what companies are looking for in gym trainer candidates today.',
  },
  {
    title: 'Streamlining HR in Fitness Hiring',
    date: 'March 30, 2025',
    image: blog3,
    excerpt: 'How PowerFlex simplifies onboarding and interview scheduling for HR professionals.',
  },
];

const blogVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={blogVariants}
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={blogVariants}
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
