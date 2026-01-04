import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'This platform transformed our business operations. The API integration was seamless and the performance is outstanding.',
    author: 'Vaibhav Jain',
    role: 'Chief Technology Officer',
    rating: 5,
  },
  {
    quote: 'We reduced our operational costs by 40% while improving delivery times. The analytics dashboard is incredibly insightful.',
    author: 'Swapnil Kumar',
    role: 'Product Director',
    rating: 5,
  },
  {
    quote: 'The customer support team is exceptional. They helped us migrate our legacy systems with zero downtime.',
    author: 'Neeraj Laishram',
    role: 'Engineering Lead',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Decorative Quote Icon */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-5 dark:opacity-10 pointer-events-none">
        <Quote size={120} className="text-blue-900 dark:text-white" />
      </div>

      <div className="relative overflow-hidden min-h-[360px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="w-full text-center"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-slate-800 dark:text-slate-100 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              {/* Star Rating */}
              <div className="flex justify-center mt-8 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400 mx-1"
                  />
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 space-y-2"
              >
                <h4 className="text-lg font-semibold tracking-wider uppercase text-blue-900 dark:text-blue-300">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sophisticated Controls */}
      <div className="flex flex-col items-center mt-12 space-y-8">
        {/* Progress Indicators */}
        <div className="flex items-center space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className="group relative py-4 focus:outline-none"
              aria-label={`View testimonial ${i + 1}`}
            >
              <div className={`h-[2px] transition-all duration-500 rounded-full ${
                i === currentIndex 
                ? 'w-12 bg-blue-900 dark:bg-blue-400' 
                : 'w-6 bg-slate-200 dark:bg-slate-700 group-hover:bg-slate-400'
              }`} />
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center space-x-12">
          <button
            onClick={() => paginate(-1)}
            className="p-4 border border-slate-200 dark:border-slate-800 rounded-full text-slate-400 hover:text-blue-900 dark:hover:text-white hover:border-blue-900 dark:hover:border-white transition-all duration-300 group hover:scale-110 active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-4 border border-slate-200 dark:border-slate-800 rounded-full text-slate-400 hover:text-blue-900 dark:hover:text-white hover:border-blue-900 dark:hover:border-white transition-all duration-300 group hover:scale-110 active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white dark:bg-slate-950 py-24 lg:py-40 relative">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight text-slate-900 dark:text-white tracking-tight">
            Voices of <span className="font-semibold italic">Innovation</span>
          </h2>
          <div className="mt-8 h-px w-24 bg-blue-900 dark:bg-blue-400 mx-auto" />
        </motion.div>

        <TestimonialCarousel />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
    </section>
  );
};

export default Testimonials;