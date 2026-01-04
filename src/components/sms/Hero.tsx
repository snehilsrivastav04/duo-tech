import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import PhoneMockup from './PhoneMockup';

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
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) =>
        prev === data.phoneContent.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [data.phoneContent.length]);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle dot grid texture - more refined */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full opacity-[0.015] dark:opacity-[0.01]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
              backgroundSize: '48px 48px',
              backgroundPosition: 'center center'
            }}
          />
        </div>
        
        {/* Minimal geometric accents */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-96 h-96"
        >
          <div className="absolute top-32 -right-32 w-64 h-64 border border-gray-300 dark:border-gray-700 rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-96 h-96"
        >
          <div className="absolute -bottom-32 -left-32 w-64 h-64 border border-gray-300 dark:border-gray-700 rounded-full" />
        </motion.div>
        
        {/* Thin accent lines */}
        <div className="absolute top-1/3 left-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
        <div className="absolute bottom-1/3 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-gray-900 dark:text-white space-y-8"
          >
            {/* Minimal badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center"
            >
              <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mr-4" />
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">
                Reliable Communication
              </span>
            </motion.div>

            {/* Main Heading - More refined */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-[1.1] tracking-tight"
            >
              {data.title.split(' ').map((word, index) => (
                <span 
                  key={index} 
                  className={`
                    ${word === 'SMS' ? 'text-blue-800 dark:text-blue-400 font-normal' : ''}
                    block lg:inline-block
                  `}
                >
                  {word}{' '}
                </span>
              ))}
            </motion.h1>
            
            {/* Subtitle - More elegant */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed font-light tracking-wide"
            >
              {data.subtitle}
            </motion.p>

            {/* CTA Buttons - More refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button
                variant="accent"
                size="lg"
                className="
                  bg-blue-800 hover:bg-blue-900 
                  text-white 
                  border border-blue-800 hover:border-blue-900 
                  px-8 py-4
                  transition-all duration-300 ease-out
                  hover:translate-x-1
                  group
                "
                icon={<ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
                onClick={handleContactClick}
              >
                <span className="tracking-wide">{data.ctaPrimary}</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="
                  text-gray-700 dark:text-gray-300 
                  border-gray-300 dark:border-gray-600 
                  hover:border-gray-800 dark:hover:border-gray-300 
                  hover:text-gray-900 dark:hover:text-gray-100
                  px-8 py-4
                  transition-all duration-300 ease-out
                  hover:translate-x-1
                  group
                "
                icon={<Code className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />}
                onClick={handleContactClick}
              >
                <span className="tracking-wide">{data.ctaSecondary}</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup - More minimalist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <PhoneMockup message={data.phoneContent[currentMessageIndex]} />
              
              {/* Minimal Live Preview Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-800 dark:bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-light tracking-wider uppercase">
                    Live Preview
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements - More refined */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gray-200 dark:border-gray-700" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-gray-200 dark:border-gray-700" />
          </motion.div>
        </div>
      </Container>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 dark:text-gray-500 mb-2 tracking-wider uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ 
              y: [0, 6, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-px h-8 bg-gray-300 dark:bg-gray-600"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;