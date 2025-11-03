import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-accent-500 opacity-20 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              All-in-One Digital Communication & Technology Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Empower your business with cutting-edge digital communication tools, marketing solutions, 
              and custom software products designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg"
                className="font-semibold"
                icon={<ArrowRight size={20} />}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white/20 font-semibold"
                icon={<MessageSquare size={20} />}
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="absolute -top-6 -right-6 bg-accent-500 rounded-full p-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4">Trusted by Leading Brands</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-center">
                  <span className="inline-block mr-2 text-accent-400">✓</span>
                  <span>500+ Enterprise Clients</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-2 text-accent-400">✓</span>
                  <span>1 Billion+ Messages Delivered Monthly</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-2 text-accent-400">✓</span>
                  <span>99.9% Uptime SLA</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-2 text-accent-400">✓</span>
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block mr-2 text-accent-400">✓</span>
                  <span>Enterprise-Grade Security</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;