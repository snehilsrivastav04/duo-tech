import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

export const FlipCard = ({ industry }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full rounded-xl shadow-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
              {industry.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {industry.name}
            </h3>
          </div>
          
          <ul className="space-y-2 mb-4">
            {industry.useCases.map((useCase, j) => (
              <li key={j} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
              <p className="text-green-600 dark:text-green-400 font-medium">{industry.stats}</p>
            </div>
            <div className="text-center text-sm text-green-600 dark:text-green-400 font-medium flex items-center justify-center">
              <span>View details</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-10"
            style={{ backgroundImage: `url(${industry.image})` }}
          />
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full p-4">
              <img src={industry.mockup} alt={industry.name} className="w-full h-full object-contain" />
            </div>
            <p className="relative z-10 text-gray-700 dark:text-gray-300 text-sm">
              {industry.backContent}
            </p>
            <button className="mt-4 text-green-600 dark:text-green-400 text-sm font-medium flex items-center justify-center mx-auto">
              <span>Flip back</span>
              <ChevronLeft className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};