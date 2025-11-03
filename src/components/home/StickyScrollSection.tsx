import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const StickyScrollSection: React.FC = () => {
  return (
    <section className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <ParallaxBanner
          layers={[
            {
              image: '/images/sticky-bg.jpg',
              speed: -30,
              scale: [1, 1.5, 'easeOutCubic'] as unknown as number[],
              opacity: [1, 0.3] as unknown as number[],
              shouldAlwaysCompleteAnimation: true,
            } as any,
          ]}
          className="absolute inset-0"
        />

        <div className="relative z-10 text-white text-center max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Scroll to discover our journey
          </motion.p>
        </div>
      </div>

      <div className="absolute top-0 w-full">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="h-screen flex items-center justify-center">
            <motion.div
              className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md mx-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4">Chapter {index + 1}</h3>
              <p>Content for this section of the story...</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyScrollSection;


