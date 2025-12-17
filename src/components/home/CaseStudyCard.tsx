
import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: string[];
  logo: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.challenge}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.solution}</p>
        <p className="text-gray-600 dark:text-gray-300 font-semibold mb-4">{caseStudy.results}</p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.metrics.map((metric, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
