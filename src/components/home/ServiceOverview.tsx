import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { services } from '../../data/services';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

// Get the first 4 services for the overview
const overviewServices = services.slice(0, 4);

const ServiceOverview: React.FC = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-700">
      <Container>
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive digital solutions to power your business communication and growth"
          centered
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {overviewServices.map((service) => {
            // Dynamically get the icon from Lucide
            const IconComponent = (LucideIcons as any)[service.icon.charAt(0).toUpperCase() + service.icon.slice(1)];
            
            return (
              <motion.div 
                key={service.id}
                className="bg-white dark:bg-dark-600 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                variants={item}
              >
                <div className="inline-flex p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
          >
            View all services
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOverview;