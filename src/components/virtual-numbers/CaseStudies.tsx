import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import CaseStudyCard from '../home/CaseStudyCard';

const caseStudiesData = [
  {
    title: 'E-commerce Expansion to Europe',
    challenge: 'Online retailer needed local presence in 5 European countries without physical offices',
    solution: 'Implemented virtual numbers with local area codes and multilingual IVR in each market',
    results: 'Increased customer trust and call conversion rates by 65% while reducing support costs',
    metrics: ['65% increase in conversions', '5 new markets entered', '40% lower support costs'],
    logo: '/logos/ecommerce-expansion.svg'
  },
  {
    title: 'Tech Support Scalability',
    challenge: 'Growing SaaS company needed to scale support operations globally',
    solution: 'Deployed virtual numbers with intelligent routing based on language and timezone',
    results: 'Improved customer satisfaction while reducing support costs by 40%',
    metrics: ['95% customer satisfaction', '24/7 global coverage', '40% cost reduction'],
    logo: '/logos/tech-support.svg'
  },
  {
    title: 'Healthcare Provider Network',
    challenge: 'Medical group needed HIPAA-compliant communication across multiple locations',
    solution: 'Virtual numbers with encrypted call recording and secure messaging',
    results: 'Achieved full compliance while improving patient access to care',
    metrics: ['100% compliance', '30% faster response times', 'Secure patient data'],
    logo: '/logos/healthcare-provider.svg'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
              Success Stories
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Client <span className="font-normal text-blue-600 dark:text-blue-400">Case Studies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            See how businesses are transforming their communications with our virtual number solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((caseStudy, i) => (
            <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
