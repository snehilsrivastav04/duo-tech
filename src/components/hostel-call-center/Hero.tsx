import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center"
        >
          <h1 className="text-4xl font-extrabold sm:text-6xl text-gray-900 dark:text-white">
            Hostel Call Center
            <strong className="font-extrabold text-blue-600 sm:block"> Increase Bookings. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600 dark:text-gray-300">
            Never miss a booking again. Our 24/7 call center ensures you capture every lead and provide exceptional guest service.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contact">
              <a
                className="flex items-center gap-2 rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                <Phone size={16} />
                Get a Quote
              </a>
            </Link>
            <Link to="/contact">
              <a
                className="flex items-center gap-2 rounded border border-blue-600 px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
