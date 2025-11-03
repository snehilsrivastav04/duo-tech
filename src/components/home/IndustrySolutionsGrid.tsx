import React from 'react';
import { motion } from 'framer-motion';

interface Industry {
  name: string;
  description: string;
  icon: React.ReactElement;
}

interface IndustrySolutionsGridProps {
  industries: Industry[];
}

const IndustrySolutionsGrid: React.FC<IndustrySolutionsGridProps> = ({ industries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
            {React.cloneElement(industry.icon, {
              className: 'w-6 h-6 text-blue-600 dark:text-blue-400'
            })}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {industry.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{industry.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default IndustrySolutionsGrid;