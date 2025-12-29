import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const whatsappData = {
  testimonials: [
    {
      quote: "Our customer response times improved from hours to seconds after implementing this WhatsApp solution. The automated flows handle 80% of queries without human intervention.",
      author: "Priya Sharma",
      role: "Head of CX, UrbanKart",
      rating: 5
    },
    {
      quote: "Getting the green tick verification was seamless with their help. Now our messages have much higher open and conversion rates.",
      author: "Rahul Mehta",
      role: "Founder, HealthFit",
      rating: 5
    },
    {
      quote: "The Shopify integration saved us hundreds of hours. Order confirmations and shipping updates are now fully automated.",
      author: "Neha Patel",
      role: "E-commerce Manager, TrendStyle",
      rating: 4
    }
  ],
};

// Testimonials Component with WhatsApp UI
const WhatsAppTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === whatsappData.testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? whatsappData.testimonials.length - 1 : prev - 1));
  };
  
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Testimonial in WhatsApp-style bubble */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg relative"
      >
        {/* WhatsApp bubble tail */}
        <div className="absolute -left-3 top-6 w-6 h-6 overflow-hidden">
          <div className="w-6 h-6 bg-white dark:bg-gray-800 transform rotate-45 origin-bottom-right shadow-sm"></div>
        </div>
        
        {/* Rating stars */}
        <div className="flex mb-3">
          {[...Array(whatsappData.testimonials[currentIndex].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-800 dark:text-gray-200 mb-4">"{whatsappData.testimonials[currentIndex].quote}"</p>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white">{whatsappData.testimonials[currentIndex].author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{whatsappData.testimonials[currentIndex].role}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default WhatsAppTestimonials;
