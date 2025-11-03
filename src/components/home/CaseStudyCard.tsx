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
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl border border-gray-200 dark:border-blue-800 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="p-8">
        <div className="flex items-center mb-6">
          <img 
            src={caseStudy.logo} 
            alt={caseStudy.title} 
            className="h-12 w-12 object-contain mr-4"
          />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">CHALLENGE</h4>
            <p className="text-gray-600 dark:text-gray-300">{caseStudy.challenge}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">SOLUTION</h4>
            <p className="text-gray-600 dark:text-gray-300">{caseStudy.solution}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">RESULTS</h4>
            <p className="text-gray-600 dark:text-gray-300">{caseStudy.results}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {caseStudy.metrics.map((metric, i) => (
                <div key={i} className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                  <p className="text-sm text-blue-600 dark:text-blue-400">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;