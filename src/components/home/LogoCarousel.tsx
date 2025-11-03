import React from 'react';
import { motion } from 'framer-motion';

interface Logo {
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-blue-950/50 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-blue-950/50 to-transparent z-10" />
      
      <motion.div
        className="flex gap-12"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex-shrink-0">
            <div className="h-16 w-40 flex items-center justify-center">
              <img 
                src={logo.logo} 
                alt={logo.name} 
                className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;