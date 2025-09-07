import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

// Video category options
const categories = ['strength', 'weightLoss', 'muscleGain'];
const categoryLabels = {
  strength: 'Strength Training',
  weightLoss: 'Weight Loss',
  muscleGain: 'Muscle Gain',
};

// Video data grouped by category
const fitnessVideos = {
  strength: [
    { id: 1, title: 'Full Body Home Workout', url: 'https://www.youtube.com/embed/5ARgeR1rMTo?si=ZBIVlY9H9vZCnbMx" title="YouTube video player' },
    { id: 4, title: 'HIIT Workout for Beginners', url: 'https://www.youtube.com/embed/O6olj0O3h4w?si=rjyB7WPRrYCdEa-g' },
    { id: 6, title: 'Mobility Routine', url: 'https://www.youtube.com/embed/t2jel6q1GRk?si=3pdJrAmEsf9VqCkS" title="YouTube video player' },
  ],
  weightLoss: [
    { id: 2, title: '15 Min Fat Burning Workout', url: 'https://www.youtube.com/embed/ml6cT4AZdqI' },
    { id: 5, title: 'Beginner Ab Workout', url: 'https://www.youtube.com/embed/1f8yoFFdkcY' },
  ],
  muscleGain: [
    { id: 7, title: 'Muscle Gain Basics', url: 'https://www.youtube.com/embed/xW79HPiyidk?si=Q5esqgAwtn1lcyYk" title="YouTube video player' },
    { id: 8, title: 'High-Calorie Workout', url: 'https://www.youtube.com/embed/gyHUvbVfhdw?si=m1BSEG6KdTi_pZWo" title="YouTube video player' },
  ],
};

export default function Watchvideo() {
  const [category, setCategory] = useState('strength');
  const videos = fitnessVideos[category] || [];

  return (
    <div>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Fitness Training Videos
        </motion.h2>

        {/* Category Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                category === cat ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {categoryLabels[cat]}
            </motion.button>
          ))}
        </div>

        {/* Videos Grid with Animated Presence */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {videos.map(video => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-center">{video.title}</h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="100%"
                      height="215"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
