import React from 'react';
import { motion } from 'framer-motion';
import FAQAccordion from '../home/FAQAccordion';
import Container from '../ui/Container';

const faqsData = [
  {
    question: "How long does Android app development take?",
    answer: "Typically 3-6 months depending on complexity. We deliver MVP in 8-12 weeks."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, we offer 6 months free support and optional annual maintenance plans."
  },
  {
    question: "Can you migrate my existing app to newer Android versions?",
    answer: "Absolutely! We specialize in app modernization and compatibility updates."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer fixed-price projects for defined scope and hourly rates for ongoing work."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our Android development services
          </p>
        </motion.div>

        <FAQAccordion faqs={faqsData} />
      </Container>
    </section>
  );
};

export default FAQ;