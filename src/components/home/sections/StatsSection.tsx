import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';

const StatsSection: FC = () => (
  <section className="bg-gray-950 py-16">
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {homeData.stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl md:text-5xl font-extralight text-white">{stat.value}</p>
            <p className="text-sm text-gray-400 font-light mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </Container>
  </section>
);

export default StatsSection;