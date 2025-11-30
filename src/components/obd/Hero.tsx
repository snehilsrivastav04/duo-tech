import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';
import { obdContent } from '../../data/obd-data.tsx';
import Button from '../ui/Button';

const Hero = () => {
  const { title, subtitle, description, stats } = obdContent.hero;

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-light mb-6 tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="text-xl lg:text-2xl font-light text-gray-600 mb-8">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              <Button variant="secondary" size="lg" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-blue-600/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-light mb-2 text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
