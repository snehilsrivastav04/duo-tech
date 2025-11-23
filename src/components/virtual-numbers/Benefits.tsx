import React from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard, GitBranch, Users, Server
} from 'lucide-react';
import Container from '../ui/Container';

const benefitsData = [
  {
    title: 'Cost Efficiency',
    description: 'Eliminate expensive hardware and reduce international call costs by up to 70%',
    icon: <CreditCard className="w-8 h-8" />
  },
  {
    title: 'Operational Flexibility',
    description: 'Add, remove or change numbers instantly as your business needs evolve',
    icon: <GitBranch className="w-8 h-8" />
  },
  {
    title: 'Professional Image',
    description: 'Present a local presence even when operating remotely or internationally',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Advanced Features',
    description: 'Access capabilities like IVR, call recording, and analytics not available with traditional lines',
    icon: <Server className="w-8 h-8" />
  }
];

const BenefitCard: React.FC<{ benefit: any }> = ({ benefit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 h-full text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500">
          <div className="text-blue-600 dark:text-blue-400">
            {benefit.icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-4 tracking-tight">
        {benefit.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
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
              Benefits
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Strategic <span className="font-normal text-blue-600 dark:text-blue-400">Advantages</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Why businesses choose our virtual number solutions for their communication needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
