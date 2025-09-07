import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is PowerFlex?',
    answer: 'PowerFlex is a recruitment platform tailored for fitness professionals and companies to post jobs, manage applications, and hire gym trainers efficiently.',
  },
  {
    question: 'How do trainers apply for jobs?',
    answer: 'Trainers can create a profile, browse listings, and apply to positions with just one click. Real-time updates keep them informed throughout the process.',
  },
  {
    question: 'Can companies manage job postings?',
    answer: 'Yes, companies can post job openings, shortlist applicants, and schedule interviews through a dedicated dashboard.',
  },
  {
    question: 'Is PowerFlex free to use?',
    answer: 'Basic features are free, but premium tools such as advanced filtering and promoted listings may require a subscription.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}