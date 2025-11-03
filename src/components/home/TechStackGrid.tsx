import React from 'react';
import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: React.ReactElement;
}

interface TechStackGridProps {
  techStack: Record<string, TechItem[]>;
}

const TechStackGrid: React.FC<TechStackGridProps> = ({ techStack }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(techStack).map(([category, items], i) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 capitalize">
            {category}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {items.map((item, j) => (
              <motion.div
                key={j}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                {React.cloneElement(item.icon, {
                  className: 'w-8 h-8 text-gray-600 dark:text-gray-300 mb-2'
                })}
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackGrid;