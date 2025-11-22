
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface WorkflowProps {
  workflow: WorkflowStep[];
}

const Workflow: React.FC<WorkflowProps> = ({ workflow }) => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Our <span className="text-blue-600">SMS Gateway</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps from message creation to delivery
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;
