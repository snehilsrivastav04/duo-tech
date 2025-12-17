import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import { homeData } from '../../../data/homeData';
import { ArrowRight } from 'lucide-react';

const UseCasesSection: FC = () => (
  <section id="use-cases" className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Solutions for every <span className="font-light text-blue-600 dark:text-blue-400">industry</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
          Discover how our platform can be tailored to meet the unique demands of your business
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeData.useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center rounded-full mb-6">
              {useCase.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{useCase.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-6 flex-grow">{useCase.description}</p>
            <a href="#" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group">
              Learn More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default UseCasesSection;