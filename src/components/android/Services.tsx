import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaGooglePlay } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { PenTool, Server, Zap, Check } from 'lucide-react';
import Container from '../ui/Container';

const servicesData = [
  {
    title: "Native Android Development",
    icon: <FaAndroid className="w-8 h-8 text-green-500" />,
    description: "High-performance apps using Kotlin and Java with Material Design principles",
    features: [
      "Kotlin-first approach",
      "Jetpack Components",
      "Material Design 3",
      "Android 14 Ready"
    ]
  },
  {
    title: "Cross-Platform Apps",
    icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
    description: "Single codebase for Android and iOS using Flutter framework",
    features: [
      "Flutter 3.0+",
      "Custom Widgets",
      "Platform Channels",
      "60fps Performance"
    ]
  },
  {
    title: "UI/UX Design",
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    description: "Pixel-perfect interfaces that follow Google's design guidelines",
    features: [
      "Figma Prototypes",
      "Motion Design",
      "Dark/Light Mode",
      "Accessibility Ready"
    ]
  },
  {
    title: "Backend Integration",
    icon: <Server className="w-8 h-8 text-orange-500" />,
    description: "Secure cloud infrastructure for your app's backend needs",
    features: [
      "Firebase Services",
      "REST/GraphQL APIs",
      "Real-time Database",
      "Serverless Functions"
    ]
  },
  {
    title: "Advanced Features",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    description: "Implement complex functionality with ease",
    features: [
      "In-App Purchases",
      "Push Notifications",
      "Biometric Auth",
      "AR/VR Integration"
    ]
  },
  {
    title: "Play Store Deployment",
    icon: <FaGooglePlay className="w-8 h-8 text-red-500" />,
    description: "Full publishing support including store optimization",
    features: [
      "ASO Strategy",
      "Screenshot Prep",
      "Release Management",
      "Closed Testing"
    ]
  }
];

const Services: React.FC = () => {
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
              Our Expertise
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Comprehensive <span className="font-normal text-blue-600 dark:text-blue-400">Android Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            End-to-end solutions from concept to Play Store deployment and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-blue-700/30 transition-all duration-500 mr-5">
                    <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 dark:text-white pt-1 tracking-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-center group/item"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;