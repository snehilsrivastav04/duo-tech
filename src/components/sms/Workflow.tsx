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
    <section className="py-32 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            How Our <span className="text-blue-800 dark:text-blue-300 font-normal">SMS Gateway</span> Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Simple steps from message creation to delivery
          </motion.p>
        </div>

        <div className="relative">
          {/* Subtle connecting line */}
          <div className="hidden lg:block absolute top-24 left-12 right-12 h-px bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                {/* Step indicator */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-800 dark:bg-blue-300 text-white dark:text-gray-900 rounded-full flex items-center justify-center font-light text-sm z-20">
                  {step.step}
                </div>

                {/* Main card */}
                <div className="relative bg-transparent pt-12 pb-8 px-6 text-center border-l border-r border-gray-100 dark:border-gray-800 group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-all duration-500">
                  
                  {/* Icon container with geometric border */}
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-gray-100 dark:border-gray-800 text-blue-800 dark:text-blue-300 flex items-center justify-center group-hover:border-blue-800 dark:group-hover:border-blue-300 transition-all duration-500">
                    <div className="scale-110 group-hover:scale-125 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>

                  {/* Subtle hover indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-px bg-blue-800 dark:bg-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Geometric decorative elements */}
        <div className="absolute left-0 top-1/4 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
      </Container>
    </section>
  );
};

export default Workflow;