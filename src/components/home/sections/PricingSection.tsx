import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Check } from 'lucide-react';
import { homeData } from '../../../data/homeData';

const PricingSection: FC = () => (
  <section id="pricing" className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Simple, <span className="font-light text-blue-600 dark:text-blue-400">transparent</span> pricing
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
          Choose the plan that's right for you
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {homeData.pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`bg-white dark:bg-gray-950 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 ${plan.isFeatured ? 'border-4 border-blue-500 transform lg:scale-105' : 'border dark:border-gray-800'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mt-2 mb-8">{plan.description}</p>

            <div className="mb-8">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
              <span className="text-lg text-gray-500 font-light">{plan.priceSuffix}</span>
            </div>

            <Button
              variant={plan.isFeatured ? 'solid' : 'outline'}
              className={`w-full font-semibold rounded-full text-lg py-3 transition-colors duration-300 ${
                plan.isFeatured
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}>
              {plan.buttonText}
            </Button>

            <ul className="mt-10 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300 font-light">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default PricingSection;