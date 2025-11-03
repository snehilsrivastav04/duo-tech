import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { services } from '../data/services';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <MainLayout>
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Service not found
            </h1>
            <Link 
              to="/services"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Back to Services
            </Link>
          </div>
        </Container>
      </MainLayout>
    );
  }

  const benefits = [
    'Increased customer engagement',
    'Higher conversion rates',
    'Cost-effective solution',
    'Real-time analytics',
    'Seamless integration',
    '24/7 support'
  ];

  const features = [
    {
      title: 'Advanced Analytics',
      description: 'Track and analyze performance metrics in real-time'
    },
    {
      title: 'API Integration',
      description: 'Easy integration with your existing systems'
    },
    {
      title: 'Automated Workflows',
      description: 'Set up automated processes for efficiency'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions to meet your specific needs'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-primary-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/services"
              className="inline-flex items-center text-gray-100 hover:text-white mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.description}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-700">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="inline-flex mr-3 text-primary-500">
                    <Check size={20} />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-primary-700 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Transform your business with our {service.title.toLowerCase()}. Contact us today for a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent"
                size="lg"
                icon={<ExternalLink size={20} />}
              >
                Schedule Demo
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ServiceDetailPage;