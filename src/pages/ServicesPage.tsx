import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCategories from '../components/services/ServiceCategories';

const ServicesPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive digital communication and technology solutions tailored 
              to meet your business needs and drive results.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <SectionTitle 
            title="Explore Our Services" 
            subtitle="From bulk messaging to custom software development, find the perfect solution for your business"
            centered
          />
          
          <ServiceCategories />
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50 dark:bg-dark-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Not Sure Which Service You Need?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our team of experts is ready to help you find the perfect solution for your business.
              Contact us today for a free consultation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/contact" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;