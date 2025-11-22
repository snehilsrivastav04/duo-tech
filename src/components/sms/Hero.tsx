
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap } from 'lucide-react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => 
        prev === data.phoneContent.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [data.phoneContent.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className={`absolute rounded-full bg-white/10 ${
              i % 3 === 0 ? 'w-6 h-6' : i % 2 === 0 ? 'w-4 h-4' : 'w-2 h-2'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">INSTANT MESSAGING</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {data.title}
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 max-w-lg">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-cyan-400 hover:bg-cyan-500 text-blue-900"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {data.ctaPrimary}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
                icon={<Code className="w-5 h-5" />}
              >
                {data.ctaSecondary}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <PhoneMockup message={data.phoneContent[currentMessageIndex]} />
            
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <ArrowRight className="w-6 h-6 text-white rotate-90 mb-2" />
              <span className="text-sm text-white/80">Live Preview</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
