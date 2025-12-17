import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { Check, Zap, Shield, BarChart } from 'lucide-react';

const FeaturesSection: FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'High Performance',
      description: 'Our infrastructure is optimized for speed and reliability, ensuring your applications run smoothly.',
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Robust Security',
      description: 'We provide multiple layers of security to protect your data and applications from threats.',
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Scalability',
      description: 'Easily scale your resources up or down to meet demand, without any downtime.',
    },
  ];

  return (
    <section id="features" className="py-40 bg-white dark:bg-gray-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
            Why choose <span className="font-light text-blue-600 dark:text-blue-400">our platform?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
            We offer a comprehensive suite of tools and services to help you build and scale your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center rounded-full mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;