import { motion } from 'framer-motion';
import { Server, Terminal, Globe2, Users } from 'lucide-react';

const stats = [
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Guaranteed reliability for your business',
    icon: Server
  },
  {
    value: '2.5B+',
    label: 'Requests',
    description: 'Processed every month across our network',
    icon: Terminal
  },
  {
    value: '150+',
    label: 'Countries',
    description: 'With local infrastructure for low latency',
    icon: Globe2
  },
  {
    value: '24/7',
    label: 'Support',
    description: 'Expert help whenever you need it',
    icon: Users
  },
];

interface StatsGridProps {
  className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({ className }) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      {/* Decorative geometric elements */}
      <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-blue-200/30 dark:border-blue-600/30 rounded-tl-3xl" />
      <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-blue-200/30 dark:border-blue-600/30 rounded-br-3xl" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="relative group"
            >
              {/* Subtle geometric border */}
              <div className="absolute inset-0 border border-blue-100 dark:border-blue-800/50 rounded-2xl transition-all duration-500 group-hover:border-blue-300 dark:group-hover:border-blue-600" />
              
              <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl">
                {/* Icon container with minimalist styling */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center p-3">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Main statistic value - typography focused */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                  className="mb-4"
                >
                  <h3 className="text-5xl font-light tracking-tight text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                </motion.div>

                {/* Label with generous spacing */}
                <div className="mb-3">
                  <h4 className="text-lg font-normal text-gray-800 dark:text-gray-200">
                    {stat.label}
                  </h4>
                </div>

                {/* Description with refined typography */}
                <p className="text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Subtle interaction indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-px bg-blue-500 dark:bg-blue-400 transition-all duration-500" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsGrid;