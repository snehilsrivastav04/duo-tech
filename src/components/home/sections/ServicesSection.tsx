import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';

const ServicesSection: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-40 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
              <span className="font-light text-blue-600 dark:text-blue-400">Services</span> tailored to your needs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight mb-10">
              We provide a wide range of services to help you achieve your business goals.
            </p>

            <div className="space-y-4">
              {homeData.services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${activeTab === index
                      ? 'bg-white dark:bg-gray-800 shadow-md'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800/50'
                    }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className={`text-gray-600 dark:text-gray-400 font-light transition-all duration-300 ${activeTab === index ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={homeData.services[activeTab].image}
                alt={homeData.services[activeTab].title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;