import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const pricingData = {
  basic: {
    price: "$2,499",
    features: [
      "Custom WordPress Website",
      "5-7 Page Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "1 Month Support"
    ],
    bestFor: "Small businesses, startups"
  },
  professional: {
    price: "$5,999",
    features: [
      "Custom React/Next.js Site",
      "10-15 Page Design",
      "CMS Integration",
      "Advanced SEO",
      "3 Months Support",
      "Performance Optimization"
    ],
    bestFor: "Growing businesses, professionals"
  },
  enterprise: {
    price: "$12,999+",
    features: [
      "Custom Web Application",
      "Unlimited Pages",
      "E-commerce Functionality",
      "API Integrations",
      "6 Months Support",
      "Dedicated Team"
    ],
    bestFor: "Large businesses, complex needs"
  }
};

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, <span className="text-blue-600 dark:text-blue-400">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No hidden fees. Quality work at fair prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(pricingData).map(([plan, details], i) => (
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                plan === 'professional' ? 'ring-2 ring-blue-500 transform hover:scale-[1.02]' : ''
              }`}
            >
              {plan === 'professional' && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 capitalize">{plan}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{details.price}</span>
                {details.price.includes('+') && (
                  <span className="text-gray-500 dark:text-gray-400 ml-1">starting at</span>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{details.bestFor}</p>
              <ul className="space-y-3 mb-8">
                {details.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan === 'professional' ? 'primary' : 'outline'}
                size="lg"
                className={`w-full ${plan === 'professional' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'border-gray-300 dark:border-gray-700'}`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need something custom?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer completely custom solutions tailored to your specific requirements and budget.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
            >
              Get a Custom Quote
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;
