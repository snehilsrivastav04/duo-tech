import { FC } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-950/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-1 mb-4 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-light mb-6">{testimonial.quote}</p>
          <div className="flex items-center gap-4">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialCarousel;