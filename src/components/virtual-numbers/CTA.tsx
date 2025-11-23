import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
              Get Started
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
            Ready to Transform Your <span className="font-normal text-blue-600 dark:text-blue-400">Communications?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Join thousands of businesses using our virtual numbers to establish global presence and improve customer communications
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-normal text-base transition-all duration-300"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-12 py-4 rounded-lg font-normal text-base transition-all duration-300"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
