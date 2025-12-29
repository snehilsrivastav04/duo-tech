import React from 'react';
import { motion } from 'framer-motion';
import { whatsappData, whatsappColors } from '../../data/whatsapp-data';

// How It Works Timeline Component
const HowItWorks = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600 transform translate-x-1/2"></div>
      
      <div className="space-y-12">
        {whatsappData.howItWorks.map((step, i) => (
          <div key={i} className="relative pl-16">
            {/* Step number */}
            <div 
              className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10"
              style={{ backgroundColor: whatsappColors.primary }}
            >
              {step.step}
            </div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;