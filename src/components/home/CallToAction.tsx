import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <motion.div 
          className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-200 dark:bg-accent-900 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
          
          <div className="relative p-8 md:p-12 z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Digital Communication?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Kurodermi for their communication and technology needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="font-semibold"
              >
                Get Started
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="font-semibold"
                  icon={<ArrowRight size={20} />}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;