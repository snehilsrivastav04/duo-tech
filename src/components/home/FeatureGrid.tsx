
import { motion } from 'framer-motion';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
  }

  const FeatureGrid: React.FC<{ features: Feature[], className?: string }> = ({ features, className }) => {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className ?? ''}`}>
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 rounded-xl bg-white dark:bg-blue-900/50 border border-gray-200 dark:border-blue-800 shadow-sm overflow-hidden group"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
            <div className="relative z-10">
              <div className="mb-4 p-3 inline-block bg-blue-100 dark:bg-blue-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

export default FeatureGrid;
