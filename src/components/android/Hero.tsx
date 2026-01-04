import React from 'react';
import { motion } from 'framer-motion';
import { Check, Smartphone } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const heroData = {
  title: "Build Powerful Android Apps for the Future",
  subtitle: "We create scalable, fast, and feature-rich Android applications for startups, businesses, and visionaries",
  ctas: [
    { text: "Get a Free App Audit", variant: "primary" },
    { text: "See Our Work", variant: "outline" }
  ],
  features: [
    "100% Custom Development",
    "Google Play Ready",
    "4.7+ Average Rating",
    "Crash-Free Experience"
  ]
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_74%,#0ea5e9_75%,#0000_76%,#0000_89%,#0ea5e9_90%)] bg-[size:100px_100px]" />
      </div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.random() * 40 - 20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute rounded-full bg-blue-600/5 dark:bg-blue-400/5 ${
            i % 4 === 0 ? 'w-24 h-24' : i % 3 === 0 ? 'w-16 h-16' : i % 2 === 0 ? 'w-12 h-12' : 'w-8 h-8'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}

      <Container className="h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/30"
            >
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                Android Development Experts
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              {heroData.title.split(' ').map((word, i) => (
                <span key={i} className={i === heroData.title.split(' ').length - 1 ? "font-normal text-blue-600 dark:text-blue-400" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl">
              {heroData.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              {heroData.ctas.map((cta, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={cta.variant as any}
                    size="lg"
                    className={`
                      ${i === 0 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                        : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }
                      px-8 py-4 rounded-lg font-normal text-base transition-all duration-300
                    `}
                  >
                    {cta.text}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              {heroData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center text-gray-600 dark:text-gray-400 group"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80">
              <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-900">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                
                <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-[2rem] overflow-hidden h-[520px]">
                  <div className="flex justify-between items-center px-6 pt-6 pb-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="px-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h3>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">+</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 mb-6 grid grid-cols-2 gap-3">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">128</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Downloads</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">4.8</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                    </div>
                  </div>

                  <div className="px-6 space-y-3 mb-6">
                    {['Analytics', 'Notifications', 'Settings', 'Profile'].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-lg ${
                            index === 0 ? 'bg-blue-100 dark:bg-blue-900' : 
                            index === 1 ? 'bg-green-100 dark:bg-green-900' :
                            index === 2 ? 'bg-purple-100 dark:bg-purple-900' :
                            'bg-orange-100 dark:bg-orange-900'
                          } flex items-center justify-center mr-3`}>
                            <div className={`w-2 h-2 rounded-full ${
                              index === 0 ? 'bg-blue-500' : 
                              index === 1 ? 'bg-green-500' :
                              index === 2 ? 'bg-purple-500' :
                              'bg-orange-500'
                            }`}></div>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                        </div>
                        <div className="text-gray-400">›</div>
                      </div>
                    ))}
                  </div>

                  <div className="px-6">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Storage</span>
                      <span className="text-gray-900 dark:text-white font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-around py-3">
                      {['🏠', '📊', '🔔', '👤'].map((icon, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-lg ${
                            index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-400'
                          }`}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/10 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600/5 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;