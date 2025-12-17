import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';

const CustomerLogosSection: FC = () => (
  <section className="py-20 bg-white dark:bg-gray-950">
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-400 font-light mb-8">
          Trusted by the world's most innovative companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {homeData.customerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 object-contain contrast-[0] dark:contrast-100 opacity-50 dark:opacity-60"
            />
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);

export default CustomerLogosSection;