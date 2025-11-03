import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const FeatureShowcase: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features: Feature[] = [
    {
      title: 'Real-time Communication',
      description: 'Enable instant messaging and live updates across your application.',
      icon: '🚀'
    },
    {
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with effortless scaling capabilities.',
      icon: '🔒'
    },
    {
      title: 'Global Infrastructure',
      description: 'Distributed servers ensuring low latency worldwide.',
      icon: '🌍'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Container>
        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to scale your communication infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>
      </Container>
    </section>
  );
};

export default FeatureShowcase;