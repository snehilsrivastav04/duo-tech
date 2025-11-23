import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock, Server, Zap } from 'lucide-react';

const statsData = [
  {
    value: '100+',
    label: 'Countries',
    description: 'Covered with local and toll-free numbers',
    icon: <Globe className="w-8 h-8" />
  },
  {
    value: '24/7',
    label: 'Support',
    description: 'Dedicated assistance whenever you need it',
    icon: <Clock className="w-8 h-8" />
  },
  {
    value: '99.99%',
    label: 'Uptime',
    description: 'Guaranteed reliability for your business',
    icon: <Server className="w-8 h-8" />
  },
  {
    value: 'Instant',
    label: 'Activation',
    description: 'Get numbers working in minutes',
    icon: <Zap className="w-8 h-8" />
  }
];

const StatsGrid: React.FC<{ className?: string }> = React.memo(({ className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className ?? ''}`}>
      {statsData.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center group"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500">
                <div className="text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
              </div>
            </div>
            <motion.p
              className="text-5xl font-light text-gray-900 dark:text-white mb-3 tracking-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {stat.value}
            </motion.p>
            <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-2">
              {stat.label}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

export default StatsGrid;
