import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { obdContent } from '../../data/obd-data.tsx';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const { title, quotes } = obdContent.testimonials;

  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-xl text-gray-600 font-light">
          Organizations worldwide rely on our platform.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-2xl font-light text-gray-900 mb-8 leading-relaxed">
              "{quotes[current].quote}"
            </p>
            <div className="border-t border-blue-600/20 pt-6">
              <p className="text-base font-normal text-gray-900">
                {quotes[current].author}
              </p>
              <p className="text-sm text-gray-600 font-light">
                {quotes[current].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => setCurrent((prev) => (prev === 0 ? quotes.length - 1 : prev - 1))}
            className="p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 transition-colors ${
                  current === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev === quotes.length - 1 ? 0 : prev + 1))}
            className="p-2 border border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
