import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
  textClass?: string;
  descClass?: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -5 },
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative"
    >
      <motion.div
        variants={cardAnimation}
        initial="initial"
        whileInView="animate"
        whileHover="hover"
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-blue-700 hover:border-gray-300 dark:hover:border-blue-600 transition-all shadow-lg hover:shadow-xl"
      >
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-6">
          {feature.icon}
        </div>
        <h3 className={`text-xl font-bold mb-3 ${feature.textClass || 'text-gray-900 dark:text-white'}`}>{feature.title}</h3>
        <p className={feature.descClass || 'text-gray-600 dark:text-gray-300'}>{feature.description}</p>
      </motion.div>
    </motion.div>
  );
};

interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className || ''}`}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeatureGrid;