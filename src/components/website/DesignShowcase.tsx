import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import BeforeAfterSlider from '../home/BeforeAfterSlider';

const DesignShowcase: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Design <span className="text-blue-600 dark:text-blue-400">Showcase</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we transform outdated designs into modern, high-converting experiences
          </p>
        </motion.div>

        <BeforeAfterSlider />
      </Container>
    </section>
  );
};

export default DesignShowcase;
