import { motion } from 'framer-motion';
import { obdContent } from '../../data/obd-data.tsx';

const FeatureCard = ({ feature, index }: { feature: typeof obdContent.features[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="p-8 border-l-2 border-gray-200 hover:border-blue-600 transition-colors duration-300">
        <div className="mb-4 text-blue-600 transition-colors">
          {feature.icon}
        </div>
        <h3 className="text-lg font-normal text-gray-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 font-light text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mb-20">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          Built for performance
        </h2>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Enterprise-grade features designed to scale with your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {obdContent.features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
