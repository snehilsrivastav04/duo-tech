import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { ArrowRight } from 'lucide-react';

const NewsletterSection: FC = () => (
  <section className="py-40 bg-white dark:bg-gray-950">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-600 dark:bg-blue-500/10 text-white dark:text-inherit p-16 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/10 rounded-full" />
        <div className="absolute -top-10 -right-20 w-40 h-40 bg-white/10 rounded-full" />
        <h2 className="text-5xl md:text-6xl font-extrabold text-white dark:text-white mb-6 leading-tight">
          Stay Ahead
        </h2>
        <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 font-light max-w-xl mx-auto mb-10">
          Subscribe to our newsletter for the latest industry news, product updates, and special offers.
        </p>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:focus:ring-blue-400"
            required
          />
          <Button
            type="submit"
            variant="solid"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-600 dark:hover:bg-blue-100 group shadow-lg"
          >
            Subscribe <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </form>
      </motion.div>
    </Container>
  </section>
);

export default NewsletterSection;