
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, Briefcase, BarChart2, Megaphone } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { services } from '../data/services';

const iconMap = {
  communication: Briefcase,
  marketing: Megaphone,
  development: Zap,
  design: BarChart2,
};

const HomePage: FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  const handleServiceHover = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setActiveService(service);
    }
  };

  const ActiveIcon = iconMap[activeService.category as keyof typeof iconMap] || Briefcase;

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-80px)]">
            
            {/* Left: Services List */}
            <div className="py-24 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <h1 className="text-6xl font-light text-gray-900 leading-tight tracking-tight mb-4">
                  Solutions for Growth
                </h1>
                <p className="text-lg font-light text-gray-500 mb-12 max-w-lg">
                  Explore our comprehensive range of services designed to elevate your business and drive meaningful engagement.
                </p>
                
                <div className="space-y-2">
                  {services.map(service => {
                    const Icon = iconMap[service.category as keyof typeof iconMap] || Briefcase;
                    return (
                      <motion.div
                        key={service.id}
                        onHoverStart={() => handleServiceHover(service.id)}
                        className="relative p-6 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out"
                        whileHover={{ backgroundColor: '#f3f4f6' }} // bg-gray-100
                      >
                        <div className="flex items-center gap-6">
                          <Icon className={`w-8 h-8 transition-colors duration-300 ${activeService.id === service.id ? 'text-blue-900' : 'text-gray-400'}`} />
                          <div>
                            <h3 className="text-xl font-normal text-gray-900">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        {activeService.id === service.id && (
                          <motion.div
                            layoutId="active-service-indicator"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-900 rounded-r-full"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right: Sticky Showcase */}
            <div className="hidden lg:block sticky top-20 h-[calc(100vh-80px)] py-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="bg-gray-50 rounded-2xl h-full flex flex-col justify-center p-12"
                >
                  <div className="max-w-md mx-auto text-center">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: 'backOut' }}
                      className="mb-8"
                    >
                       <ActiveIcon className='w-16 h-16 text-blue-900 mx-auto' />
                    </motion.div>
                    <h2 className="text-4xl font-light text-gray-900 mb-4">
                      {activeService.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {activeService.description}
                    </p>
                    <button className="flex items-center gap-2 mx-auto text-blue-900 font-normal group">
                      Learn More
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
