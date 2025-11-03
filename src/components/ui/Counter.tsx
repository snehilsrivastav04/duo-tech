import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

type CounterProps = {
  value: string;
  label: string;
  description: string;
};

const Counter: React.FC<CounterProps> = ({ value, label, description }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
  const hasPlus = value.includes('+');
  const hasPercent = value.includes('%');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6"
      ref={ref}
    >
      <span
        ref={spanRef}
        className="block text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
      >
        {inView ? (
          <CountUp
            start={0}
            end={numericValue}
            duration={2}
            decimals={value.includes('.') ? 1 : 0}
            suffix={hasPlus ? '+' : hasPercent ? '%' : ''}
          />
        ) : (
          '0' + (hasPlus ? '+' : hasPercent ? '%' : '')
        )}
      </span>
      <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">{label}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Counter;


