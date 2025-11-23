import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  color: string;
}

interface FeaturesGridProps {
  features: Feature[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features }) => {
  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <Container>
        {/* Header Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need for{' '}
            <span className="text-blue-800 dark:text-blue-300 font-normal">
              Effective SMS Communication
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our platform provides all the tools to send, track and optimize your SMS campaigns
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Feature Card */}
              <div className="relative bg-transparent p-8 rounded-2xl border border-gray-100 dark:border-gray-800 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all duration-500">
                
                {/* Icon Container */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-8 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all duration-500`}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={feature.color}>
                    {React.cloneElement(feature.icon, { 
                      className: `w-7 h-7 ${feature.color.includes('text-') ? '' : 'text-blue-800 dark:text-blue-300'}`,
                      strokeWidth: 1.5 
                    })}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 tracking-wide group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light">
                  {feature.description}
                </p>

                {/* Subtle Bottom Border */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-100 dark:via-gray-800 to-transparent group-hover:via-blue-200 dark:group-hover:via-blue-800 transition-all duration-500" />
              </div>

              {/* Geometric Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-gray-200 dark:border-gray-700 rounded-tl-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gray-200 dark:border-gray-700 rounded-tr-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-gray-200 dark:border-gray-700 rounded-br-lg opacity-0 group-hover:opacity-100 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Background Geometric Elements */}
        <div className="absolute left-0 top-1/3 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-1/3 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </Container>
    </section>
  );
};

export default FeaturesGrid;