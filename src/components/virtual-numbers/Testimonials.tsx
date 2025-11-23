import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import TestimonialCarousel from '../home/TestimonialCarousel';

const testimonialsData = [
  {
    quote: 'The virtual numbers transformed our international expansion. We established local presence in 8 countries without any physical offices, and our customer response rates improved dramatically.',
    author: 'Sarah Johnson',
    role: 'Director of Operations, Global Retail',
    rating: 5,
  },
  {
    quote: 'As a distributed team, virtual numbers give us the flexibility to work from anywhere while maintaining professional local numbers in all our markets. The call analytics help us optimize our support operations.',
    author: 'Michael Chen',
    role: 'CTO, SaaS Platform',
    rating: 5,
  },
  {
    quote: 'We reduced our communication costs by 60% while improving our customer service metrics. The ability to record and analyze calls has been invaluable for training our team.',
    author: 'Emma Rodriguez',
    role: 'Customer Support Manager',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
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
              Testimonials
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Client <span className="font-normal text-blue-600 dark:text-blue-400">Feedback</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Hear from businesses that have transformed their communications with our solutions
          </p>
        </motion.div>

        <TestimonialCarousel testimonials={testimonialsData} />
      </Container>
    </section>
  );
};

export default Testimonials;
