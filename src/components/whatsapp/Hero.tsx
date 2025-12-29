import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { whatsappData } from '../../data/whatsapp-data';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';


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

        <ul className="space-y-3 mb-8">
          {whatsappData.hero.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700 dark:text-gray-200">
              <Check className="w-5 h-5 mr-3 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <Button size="lg">{whatsappData.hero.ctaPrimary}</Button>
          <Button size="lg" variant="outline">{whatsappData.hero.ctaSecondary}</Button>
        </div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <Image 
          src="/images/whatsapp-hero.png"
          alt="WhatsApp API Integration"
          width={500}
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;