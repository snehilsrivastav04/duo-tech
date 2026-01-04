import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const ivrData = {
  stats: [
    { value: '90%', label: 'Call Resolution Rate', id: 'stats-resolution' },
    { value: '24/7', label: 'Customer Support', id: 'stats-support' },
    { value: '50%', label: 'Cost Reduction', id: 'stats-cost' },
    { value: '99.9%', label: 'Uptime Guarantee', id: 'stats-uptime' },
  ],
};

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-16 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="stats-title">
      <Container>
        <h2 id="stats-title" className="sr-only">IVR Service Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ivrData.stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
              role="region"
              aria-labelledby={stat.id}
            >
              <div id={stat.id} className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
