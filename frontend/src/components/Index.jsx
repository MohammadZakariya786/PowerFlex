import React from 'react';

// Importing all the section components from the home folder
import Hero from './Hero';

import ServicesSection from './ServicesSection';

import HowItWorksSection from './HowItWorksSection';
import TestimonialSection from './TestimonialSection';


import FAQSection from './FAQSection';
import PartnersSection from './PartnersSection';
import TeamSection from './TeamSection';
import BlogSection from './BlogSection';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const Index = () => {
  return (
    <div>
      {/* 1. Navbar Section */}
      <Navbar />
      {/* 1. Hero Section */}
      <Hero />

     

      {/* 3. Services/Features Section */}
      <ServicesSection />

      

      {/* 5. How It Works Section */}
      <HowItWorksSection />

      {/* 6. Testimonial Section */}
      <TestimonialSection />

    


      {/* 9. FAQ Section */}
      <FAQSection />

      {/* 10. Partners/Clients Section */}
      <PartnersSection />

      {/* 11. Team Section */}
      <TeamSection />

      {/* 12. Blog/News Section */}
      <BlogSection />
      {/* 12. Footer Section */}
      <Footer/>
    </div>
  );
};

export default Index;
