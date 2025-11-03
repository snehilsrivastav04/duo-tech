import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  metric: {
    value: string;
    label: string;
    icon: React.ReactNode;
  };
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center text-cyan-300">
        {metric.icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
      <p className="text-blue-200">{metric.label}</p>
    </motion.div>
  );
};

export default MetricCard;