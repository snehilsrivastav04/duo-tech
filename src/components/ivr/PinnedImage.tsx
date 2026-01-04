import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  benefits: string[];
}

const PinnedImage: React.FC<{ features: Feature[]; activeIndex: number }> = ({ features, activeIndex }) => {
  const { ref } = useParallax({ speed: -10 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="sticky top-20 h-[600px] rounded-2xl overflow-hidden shadow-xl lg:block hidden" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start mb-4"
            >
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg mr-4">
                {features[activeIndex].icon}
              </div>
              <h3 className="text-2xl font-bold">{features[activeIndex].title}</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-2"
            >
              {features[activeIndex].benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PinnedImage;
