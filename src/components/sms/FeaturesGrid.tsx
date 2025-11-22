
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
    <section className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need for <span className="text-blue-600 dark:text-blue-400">Effective SMS Communication</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our platform provides all the tools to send, track and optimize your SMS campaigns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                {React.cloneElement(feature.icon, { className: `w-6 h-6 ${feature.color}` })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid;
