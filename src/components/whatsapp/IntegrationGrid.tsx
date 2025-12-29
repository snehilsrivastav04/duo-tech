import React from 'react';
import { motion } from 'framer-motion';
import { whatsappData } from '../../data/whatsapp-data';

// Integration Grid Component
const IntegrationGrid = () => {
  return (
    <div className="space-y-8">
      {/* CRM Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">CRM Integrations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.crms.map((crm, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(crm.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{crm.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Platform Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">E-commerce Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.platforms.map((platform, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(platform.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Channel Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Integration Channels</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.channels.map((channel, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(channel.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{channel.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationGrid;