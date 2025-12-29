import React from 'react';
import { motion } from 'framer-motion';
import { whatsappData, whatsappColors } from '../../data/whatsapp-data.tsx';

// Capability Grid Component
const CapabilityGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whatsappData.capabilities.map((capability, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 group cursor-default"
        >
          <div 
            className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: whatsappColors.light }}
          >
            {React.cloneElement(capability.icon, { 
              className: "w-6 h-6",
              style: { color: whatsappColors.dark }
            })}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{capability.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{capability.description}</p>
          
          {/* Hover effect border */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 pointer-events-none"
            initial={{ opacity: 0, borderColor: whatsappColors.light }}
            whileHover={{ opacity: 1, borderColor: whatsappColors.primary }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CapabilityGrid;