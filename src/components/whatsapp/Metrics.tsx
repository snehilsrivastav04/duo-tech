import React from 'react';
import { motion } from 'framer-motion';
import { whatsappData, whatsappColors } from '../../data/whatsapp-data';

// Metrics Component
const Metrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whatsappData.metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
        >
          <div className="relative inline-flex mb-4">
            <div 
              className="absolute inset-0 rounded-full opacity-20 animate-ping"
              style={{ backgroundColor: whatsappColors.primary }}
            />
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: whatsappColors.primary }}
            >
              {metric.value}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{metric.label}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Metrics;