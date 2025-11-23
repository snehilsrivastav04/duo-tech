import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import FAQAccordion from '../home/FAQAccordion';

const faqsData = [
  {
    question: 'How quickly can I get a virtual number?',
    answer: 'Most numbers are activated instantly. For certain countries requiring verification, activation typically takes 1-2 business days.'
  },
  {
    question: 'Can I port my existing business number?',
    answer: 'Yes, we can port most existing business numbers to our platform. The process typically takes 7-10 business days to complete.'
  },
  {
    question: 'What call features are included?',
    answer: 'All plans include call forwarding, voicemail, business hours settings, and basic analytics. Advanced features like IVR menus, call recording, and CRM integrations are available as add-ons.'
  },
  {
    question: 'How does call quality compare to traditional phones?',
    answer: 'We use Tier-1 carriers with HD voice technology to ensure call quality that meets or exceeds traditional landline quality.'
  },
  {
    question: 'Can I use virtual numbers for SMS?',
    answer: 'Yes, many of our virtual numbers support both voice and SMS capabilities, allowing you to communicate with customers through their preferred channel.'
  },
  {
    question: 'How many devices can receive calls from one virtual number?',
    answer: 'You can route calls to an unlimited number of devices simultaneously, with advanced options for sequential ringing, time-based routing, and more.'
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
              FAQ
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Common <span className="font-normal text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Answers to frequently asked questions about our virtual number solutions
          </p>
        </motion.div>

        <FAQAccordion faqs={faqsData} />
      </Container>
    </section>
  );
};

export default FAQ;
