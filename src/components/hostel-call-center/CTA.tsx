import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 text-center bg-gray-100 rounded-lg dark:bg-gray-700 md:p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Ready to boost your hostel bookings?</h2>
          <p className="max-w-md mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Our friendly team is here to answer your questions and get you set up.
          </p>
          <div className="mt-8">
          <Link to="/contact">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700">
              Contact Us
            </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
