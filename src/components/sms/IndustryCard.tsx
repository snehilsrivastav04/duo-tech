import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  industry: {
    name: string;
    useCases: string[];
    icon: React.ReactNode;
  };
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
        {industry.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
      <ul className="space-y-2 mb-4">
        {industry.useCases.map((useCase, i) => (
          <li key={i} className="text-gray-600 text-sm">• {useCase}</li>
        ))}
      </ul>
      <button className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};

export default IndustryCard;