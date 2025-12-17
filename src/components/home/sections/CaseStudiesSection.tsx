import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';
import { ArrowRight } from 'lucide-react';

const CaseStudiesSection: FC = () => (
  <section id="case-studies" className="py-40 bg-white dark:bg-gray-950">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Driving <span className="font-light text-blue-600 dark:text-blue-400">real results</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
          See how our customers are leveraging our platform to achieve their goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {homeData.caseStudies.map((caseStudy, index) => (
          <motion.a
            key={index}
            href={caseStudy.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="block bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="relative h-64">
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light mb-6">{caseStudy.description}</p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                Read Case Study <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Container>
  </section>
);

export default CaseStudiesSection;