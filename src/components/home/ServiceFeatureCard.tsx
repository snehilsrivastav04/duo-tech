import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceFeatureCardProps {
  service: {
    icon: React.ReactElement;
    title: string;
    description: string;
    features: string[];
    gradient: string;
  };
  index: number;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`bg-gradient-to-br ${service.gradient} p-8 rounded-xl shadow-lg`}
    >
      <div className="mb-6">
        {React.cloneElement(service.icon, {
          className: 'w-12 h-12 text-gray-900 dark:text-white'
        })}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceFeatureCard;