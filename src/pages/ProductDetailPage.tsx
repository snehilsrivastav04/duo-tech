import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ExternalLink, Shield, Clock, Award } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <MainLayout>
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Product not found
            </h1>
            <Link 
              to="/products"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Back to Products
            </Link>
          </div>
        </Container>
      </MainLayout>
    );
  }

  const technicalSpecs = [
    {
      title: 'System Requirements',
      items: [
        'Windows 10/11 or macOS 10.15+',
        '4GB RAM minimum',
        '2.0 GHz Processor',
        'Internet connection'
      ]
    },
    {
      title: 'Supported Platforms',
      items: [
        'Web Browsers',
        'Android',
        'iOS',
        'Windows Desktop'
      ]
    },
    {
      title: 'Security Features',
      items: [
        'End-to-end encryption',
        'Two-factor authentication',
        'Regular security updates',
        'Data backup'
      ]
    }
  ];

  const pricing = [
    {
      title: 'Basic',
      price: '$29',
      period: 'per month',
      features: [
        'Basic features',
        '5 users',
        '10GB storage',
        'Email support'
      ]
    },
    {
      title: 'Professional',
      price: '$99',
      period: 'per month',
      features: [
        'All Basic features',
        'Unlimited users',
        '100GB storage',
        '24/7 support',
        'API access'
      ],
      recommended: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'All Pro features',
        'Custom integration',
        'Dedicated support',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-primary-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/products"
              className="inline-flex items-center text-gray-100 hover:text-white mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Products
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    variant="accent"
                    size="lg"
                    icon={<ExternalLink size={20} />}
                  >
                    Try Demo
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                  >
                    Documentation
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <span className="inline-flex mr-3 text-primary-500">
                    <Check size={20} />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-dark-700">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bank-grade security with end-to-end encryption and compliance
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex p-3 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Round-the-clock technical support and maintenance
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex p-3 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Industry Leading
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Award-winning solution trusted by top enterprises
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {spec.title}
                </h3>
                <ul className="space-y-2">
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-flex mr-2 text-primary-500">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50 dark:bg-dark-700">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white dark:bg-dark-600 rounded-xl p-6 shadow-md relative ${
                  plan.recommended ? 'border-2 border-primary-500' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {plan.price}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {plan.period}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="inline-flex mr-2 text-primary-500">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Container>
          <div className="bg-primary-700 rounded-2xl text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers using {product.title}. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent"
                size="lg"
                icon={<ExternalLink size={20} />}
              >
                Start Free Trial
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default ProductDetailPage;