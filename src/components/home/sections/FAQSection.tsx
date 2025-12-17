import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import FAQAccordion from '../FAQAccordion';
import { homeData } from '../../../data/homeData';

const FAQSection: FC = () => (
  <section id="faq" className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Frequently asked <span className="font-light text-blue-600 dark:text-blue-400">questions</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
          Everything you need to know about our platform
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <FAQAccordion faqs={homeData.faqs} />
      </div>
    </Container>
  </section>
);

export default FAQSection;