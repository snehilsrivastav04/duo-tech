import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ivrData = {
  testimonials: [
    {
      quote: 'Implementing this IVR reduced our call center costs by 40% while improving customer satisfaction scores. The ROI was evident within the first quarter.',
      author: 'Sarah Johnson',
      role: 'Customer Service Director, FinTech Corp',
      avatar: '/images/avatars/sarah-johnson.jpg',
      id: 'testimonial-sarah',
    },
    {
      quote: 'The natural language processing understands our customers better than our previous system. We\'ve seen a 30% reduction in misrouted calls.',
      author: 'Michael Chen',
      role: 'IT Manager, HealthPlus',
      avatar: '/images/avatars/michael-chen.jpg',
      id: 'testimonial-michael',
    },
    {
      quote: 'Setting up holiday hours and special menus is so intuitive. What used to take our team days now takes minutes with this IVR platform.',
      author: 'David Rodriguez',
      role: 'Operations Lead, RetailChain',
      avatar: '/images/avatars/david-rodriguez.jpg',
      id: 'testimonial-david',
    },
  ],
};

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm"
      role="region"
      aria-labelledby={testimonial.id}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h4 id={testimonial.id} className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex space-x-1" aria-label="5 star rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
        ))}
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
            Trusted by businesses of all sizes across industries.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ivrData.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
