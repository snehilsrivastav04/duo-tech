import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageSquare, Headphones, PhoneOutgoing, ArrowRight
} from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const howItWorksData = [
  {
    step: '1',
    title: 'Select Your Number',
    description: 'Choose from available local, toll-free, or international numbers in our dashboard',
    icon: <Phone className="w-6 h-6" />
  },
  {
    step: '2',
    title: 'Configure Settings',
    description: 'Set up call routing rules, business hours, voicemail, and other preferences',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    step: '3',
    title: 'Connect Your Team',
    description: 'Forward calls to existing phones or use our mobile/web applications',
    icon: <Headphones className="w-6 h-6" />
  },
  {
    step: '4',
    title: 'Go Live',
    description: 'Start receiving calls immediately with your new professional number',
    icon: <PhoneOutgoing className="w-6 h-6" />
  }
];

const HowItWorksStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start space-x-8 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 group"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 flex items-center justify-center transition-colors duration-500">
        <span className="text-2xl font-light text-blue-600 dark:text-blue-400">{step.step}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            {step.icon}
          </div>
          <h3 className="text-xl font-normal text-gray-900 dark:text-white tracking-tight">
            {step.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
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
              Process
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            How It <span className="font-normal text-blue-600 dark:text-blue-400">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get started with professional business numbers in just a few simple steps
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {howItWorksData.map((step, i) => (
            <HowItWorksStep key={i} step={step} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            variant="primary"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-normal text-base transition-all duration-300"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Get Started Now
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorks;
