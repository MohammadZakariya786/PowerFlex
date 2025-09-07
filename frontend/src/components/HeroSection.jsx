import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-24 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
          Find the Right Trainer. <br />
          <span className="text-indigo-700">Power Your Fitness Team</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-xl">
          PowerFlex is your digital hiring solution for gym trainers. Post job openings, 
          review applications, and onboard certified professionals with ease.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-2xl flex bg-white shadow-lg border border-gray-200 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500">
          <input
            type="text"
            placeholder="Search trainers, certifications, locations..."
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <Button
            onClick={searchJobHandler}
            className="bg-indigo-600 text-white px-6 py-3 rounded-l-none hover:bg-indigo-700 transition"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
