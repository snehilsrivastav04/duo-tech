import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { whatsappData, whatsappColors } from '../../data/whatsapp-data';
import { motion } from 'framer-motion';

// Features Checklist Component
const FeaturesChecklist = () => {
  const features = whatsappData.features;
  const midPoint = Math.ceil(features.length / 2);
  const featuresCol1 = features.slice(0, midPoint);
  const featuresCol2 = features.slice(midPoint);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      <ul className="space-y-4">
        {featuresCol1.map((feature, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start"
          >
            <CheckCircle2 
              className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
              style={{ color: whatsappColors.primary }}
            />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <ul className="space-y-4">
        {featuresCol2.map((feature, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + featuresCol1.length) * 0.1 }}
            className="flex items-start"
          >
            <CheckCircle2 
              className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
              style={{ color: whatsappColors.primary }}
            />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesChecklist;