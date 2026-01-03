import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { whatsappData } from '../../data/whatsapp-data';
import Button from '../ui/Button';


// Hero Component
const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      {/* Left Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          {whatsappData.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          {whatsappData.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button 
            variant="primary" 
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            {whatsappData.hero.cta}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="dark:text-white dark:border-gray-600"
          >
            {whatsappData.hero.secondaryCta}
          </Button>
        </div>
        <div className="space-y-3">
          {whatsappData.hero.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Right Content (Image) */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative aspect-square w-full max-w-lg mx-auto">
          <img
            src="/src/assets/logo-dark.jpg"
            alt={whatsappData.hero.imageAlt}
            className="object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
