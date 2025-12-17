import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';

const TestimonialsSection: FC = () => (
  <section id="testimonials" className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          What our <span className="font-light text-blue-600 dark:text-blue-400">customers</span> are saying
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {homeData.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm"
          >
            <p className="text-gray-700 dark:text-gray-300 font-light text-lg mb-6 before:content-['\201C'] before:mr-1 before:text-3xl before:font-serif before:text-blue-500 after:content-['\201D'] after:ml-1 after:text-3xl after:font-serif after:text-blue-500">
              {testimonial.quote}
            </p>
            <div className="flex items-center">
              <img src={testimonial.author.avatar} alt={testimonial.author.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author.name}</p>
                <p className="text-gray-500 dark:text-gray-400 font-light">{testimonial.author.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsSection;