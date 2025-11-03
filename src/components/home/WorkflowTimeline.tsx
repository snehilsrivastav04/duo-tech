import React from 'react';
import { motion } from 'framer-motion';

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface WorkflowTimelineProps {
  workflow: WorkflowStep[];
}

const WorkflowTimeline: React.FC<WorkflowTimelineProps> = ({ workflow }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-[15px] sm:left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

        {/* Timeline Items */}
        {workflow.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
          >
            {/* Icon */}
            <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 z-10">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                {React.cloneElement(step.icon, { className: 'w-4 h-4 text-white' })}
              </div>
            </div>

            {/* Content */}
            <div
              className={`ml-12 sm:ml-0 sm:w-1/2 ${
                index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowTimeline;