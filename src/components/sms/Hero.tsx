import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import PhoneMockup from './PhoneMockup';
import ContactForm from './ContactForm';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    phoneContent: {
      type: string;
      text: string;
    }[];
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev === data.phoneContent.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [data.phoneContent.length]);

  return (
    <>
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Grid Texture */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Geometric Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl"
          />
          
          {/* Accent Lines */}
          <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-700 to-transparent" />
          <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-blue-200 dark:via-blue-700 to-transparent" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-900 dark:text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-8 border border-blue-100 dark:border-blue-800"
              >
                <Zap className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-light text-blue-700 dark:text-blue-300 tracking-wide">
                  INSTANT MESSAGING
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight tracking-tight"
              >
                {data.title.split(' ').map((word, index) => (
                  <span key={index} className={word === 'SMS' ? 'text-blue-800 dark:text-blue-300 font-normal' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg leading-relaxed font-light"
              >
                {data.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-blue-800 hover:bg-blue-900 text-white border-blue-800 hover:border-blue-900 transition-all duration-500"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => setContactFormOpen(true)}
                >
                  {data.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-800 dark:hover:border-blue-300 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-500"
                  icon={<Code className="w-5 h-5" />}
                  onClick={() => setContactFormOpen(true)}
                >
                  {data.ctaSecondary}
                </Button>
              </motion.div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <PhoneMockup message={data.phoneContent[currentMessageIndex]} />
                
                {/* Live Preview Indicator */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                  <div className="w-1 h-8 bg-blue-800 dark:bg-blue-300 rounded-full mb-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
                    Live Preview
                  </span>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-blue-200 dark:border-blue-700 rounded-tr-2xl" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-2 border-l-2 border-blue-200 dark:border-blue-700 rounded-bl-2xl" />
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-px h-12 bg-gray-300 dark:bg-gray-600 rounded-full"
          />
        </motion.div>
      </section>

      <AnimatePresence>
        {isContactFormOpen && (
          <ContactForm onClose={() => setContactFormOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
