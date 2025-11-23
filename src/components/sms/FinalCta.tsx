import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const FinalCta = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          style={{ scale, opacity }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-16 border border-gray-100 dark:border-gray-700 overflow-hidden relative text-center"
        >
          {/* Geometric Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-40" />
            
            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
            
            {/* Border Accents */}
            <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 flex items-center justify-center"
            >
              <MessageSquare className="w-8 h-8 text-blue-800 dark:text-blue-300" strokeWidth={1.5} />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight"
            >
              Ready to Boost Your{' '}
              <span className="text-blue-800 dark:text-blue-300 font-normal">Business</span>{' '}
              with SMS?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed font-light"
            >
              Start sending messages in minutes with our reliable SMS gateway platform.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button
                variant="accent"
                size="lg"
                className="bg-blue-800 hover:bg-blue-900 text-white border-blue-800 hover:border-blue-900 px-12 transition-all duration-500"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-800 dark:hover:border-blue-300 hover:text-blue-800 dark:hover:text-blue-300 px-12 transition-all duration-500"
                icon={<MessageSquare className="w-5 h-5" />}
              >
                Contact Sales
              </Button>
            </motion.div>

            {/* Supplemental Text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-500 dark:text-gray-500 mt-8 font-light tracking-wide"
            >
              No credit card required • 14-day free trial • Setup in minutes
            </motion.p>
          </div>

          {/* Corner Geometric Elements */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-gray-300 dark:border-gray-600 rounded-tl-lg" />
          <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-gray-300 dark:border-gray-600 rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-gray-300 dark:border-gray-600 rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-gray-300 dark:border-gray-600 rounded-br-lg" />
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCta;