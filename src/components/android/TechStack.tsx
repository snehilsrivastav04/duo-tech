import React from 'react';
import { motion } from 'framer-motion';
import { SiKotlin, SiFlutter, SiFirebase, SiReact, SiMongodb, SiNodedotjs, SiStripe, SiTwilio } from 'react-icons/si';
import { FaAndroid, FaGooglePlay } from 'react-icons/fa';
import { GitBranch, Server, Terminal, RefreshCw, MapPin, CreditCard, Database, Layers } from 'lucide-react';
import Container from '../ui/Container';

const techStackData = {
  frontend: [
    { name: "Kotlin", icon: <SiKotlin className="w-6 h-6" /> },
    { name: "Java", icon: <FaAndroid className="w-6 h-6" /> },
    { name: "Flutter", icon: <SiFlutter className="w-6 h-6" /> },
    { name: "Jetpack Compose", icon: <Layers className="w-6 h-6" /> }
  ],
  backend: [
    { name: "Firebase", icon: <SiFirebase className="w-6 h-6" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
    { name: "GraphQL", icon: <Database className="w-6 h-6" /> }
  ],
  devops: [
    { name: "GitHub Actions", icon: <GitBranch className="w-6 h-6" /> },
    { name: "Play Console", icon: <FaGooglePlay className="w-6 h-6" /> },
    { name: "Fastlane", icon: <Terminal className="w-6 h-6" /> },
    { name: "CI/CD Pipelines", icon: <RefreshCw className="w-6 h-6" /> }
  ],
  apis: [
    { name: "Google Maps", icon: <MapPin className="w-6 h-6" /> },
    { name: "Razorpay", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Stripe", icon: <SiStripe className="w-6 h-6" /> },
    { name: "Twilio", icon: <SiTwilio className="w-6 h-6" /> }
  ]
};

const TechStack: React.FC = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
              Technology
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Our <span className="font-normal text-blue-600 dark:text-blue-400">Technology Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Modern tools and frameworks we leverage to build exceptional Android applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(techStackData).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 h-full">
                <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-8 capitalize tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                
                <div className="space-y-4">
                  {items.map((tech, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 group/item"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300">
                          {tech.icon}
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300 font-normal">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStack;