import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { Check } from 'lucide-react';

const ivrData = {
  caseStudies: [
    {
      id: 'case-retail',
      title: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High call volume with long wait times',
      solution: 'Implemented multi-level IVR with AI routing',
      results: [
        '40% reduction in wait times',
        '25% increase in customer satisfaction',
        '30% decrease in operational costs',
      ],
      logo: '/images/case-studies/retail-logo.png',
      quote: 'The IVR system transformed our customer service operations.',
      author: 'Jane Smith, Retail Operations Manager',
    },
    {
      id: 'case-healthcare',
      title: 'Regional Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Complex appointment scheduling process',
      solution: 'HIPAA-compliant IVR with voice recognition',
      results: [
        '50% faster appointment booking',
        '20% increase in patient satisfaction',
        'Automated reminder system reduced no-shows by 35%',
      ],
      logo: '/images/case-studies/healthcare-logo.png',
      quote: 'Patients love the seamless booking experience.',
      author: 'Dr. Michael Lee, Clinic Director',
    },
    {
      id: 'case-banking',
      title: 'National Bank',
      industry: 'Banking',
      challenge: 'Secure transaction processing over phone',
      solution: 'PCI-compliant IVR with voice authentication',
      results: [
        '60% faster transaction processing',
        'Enhanced security with voice biometrics',
        '45% reduction in fraud attempts',
      ],
      logo: '/images/case-studies/bank-logo.png',
      quote: 'Our customers feel safer with the new IVR system.',
      author: 'Emma Brown, Banking Operations Head',
    },
  ],
};

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  quote: string;
  author: string;
}

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
      role="region"
      aria-labelledby={caseStudy.id}
    >
      <div className="flex items-center mb-4">
        <img
          src={caseStudy.logo}
          alt={`${caseStudy.title} logo`}
          className="w-12 h-12 object-contain mr-4"
          loading="lazy"
        />
        <h3 id={caseStudy.id} className="text-xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Industry:</strong> {caseStudy.industry}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Challenge:</strong> {caseStudy.challenge}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Solution:</strong> {caseStudy.solution}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Results:</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{caseStudy.quote}"</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.author}</p>
    </motion.div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="case-studies-title">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="case-studies-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Success <span className="text-blue-600 dark:text-blue-400">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Real-world examples of how our IVR solutions drive business success.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ivrData.caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
