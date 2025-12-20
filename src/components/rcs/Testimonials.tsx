import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

const rcsData = {
  testimonials: [
    {
      quote: 'RCS transformed our customer engagement. The rich media capabilities and analytics helped us achieve 8x higher conversion rates compared to SMS.',
      author: 'Sarah Johnson',
      role: 'CMO, RetailChain',
      rating: 5,
    },
    {
      quote: 'Implementation was seamless and the results were immediate. Our customers love the interactive experience and we love the measurable ROI.',
      author: 'Michael Chen',
      role: 'Digital Director, BankGlobal',
      rating: 5,
    },
    {
      quote: 'The support team was exceptional throughout our migration from SMS to RCS. They helped us redesign all our messaging flows for maximum impact.',
      author: 'Emma Rodriguez',
      role: 'Head of CX, TravelNow',
      rating: 4,
    },
  ]
};

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? rcsData.testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === rcsData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/80 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-700/80 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            What Our <span className="text-cyan-300">Clients</span> Say
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-blue-700 shadow-xl"
            >
              <div className="flex mb-4">
                {[...Array(rcsData.testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl text-black dark:text-blue-100 mb-6">"{rcsData.testimonials[currentTestimonial].quote}"</p>
              <div className="text-gray-800 dark:text-blue-200">
                <p className="font-bold">{rcsData.testimonials[currentTestimonial].author}</p>
                <p className="text-sm">{rcsData.testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Testimonials;