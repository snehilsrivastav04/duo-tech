import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappData, whatsappColors } from '../../data/whatsapp-data';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(whatsappData.useCases.categories[0].name);

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {whatsappData.useCases.categories.map((category) => (
          <button 
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === category.name ? 'text-white' : 'text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800'}`}
            style={activeTab === category.name ? { backgroundColor: whatsappColors.primary } : {}}
          >
            <div className="flex items-center gap-2">
              {React.cloneElement(category.icon, { className: "w-4 h-4" })}
              {category.name}
            </div>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          {whatsappData.useCases.examples[activeTab].map((example, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-700 dark:text-gray-300">{example}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
};

export default UseCases;