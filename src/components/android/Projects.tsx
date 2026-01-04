import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const projectsData = [
  {
    name: "E-Commerce App",
    description: "Complete shopping solution with AR product preview",
    features: ["Payment Gateway", "Order Tracking", "Wishlist", "Reviews"],
    platform: "Kotlin + Firebase",
    rating: 4.8
  },
  {
    name: "Fitness Tracker",
    description: "Workout planner with AI recommendations",
    features: ["Health Data", "Video Guides", "Progress Charts", "Community"],
    platform: "Flutter + Node.js",
    rating: 4.9
  },
  {
    name: "Food Delivery",
    description: "Restaurant ordering system with real-time tracking",
    features: ["Live Tracking", "Chat Support", "Multi-Payment", "Promotions"],
    platform: "Kotlin + MongoDB",
    rating: 4.7
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-blue-600 dark:bg-blue-400 mb-2"></div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-light">
              Our Work
            </h3>
          </div>
          <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
            Android <span className="font-normal text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Featured applications we've crafted for clients across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500"
            >
              <div className="absolute top-6 left-6 z-10">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-full">
                  {i + 1}
                </div>
              </div>
              
              <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-56 bg-gray-900 rounded-2xl border-4 border-gray-900 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  <div className="h-5 flex items-center justify-center relative bg-gray-900">
                    <div className="absolute left-3 w-1 h-1 bg-gray-700 rounded-full" />
                    <div className="w-10 h-0.5 bg-gray-700 rounded-full" />
                    <div className="absolute right-3 w-2 h-2 bg-gray-700 rounded-full" />
                  </div>
                  <div className="h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center px-2">
                      <span className="text-white font-medium text-xs block">{project.name}</span>
                      <div className="mt-2 flex justify-center">
                        <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                        <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 dark:bg-blue-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>
              </div>
              
              <div className="p-7">
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-xl font-normal text-gray-900 dark:text-white tracking-tight">{project.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.slice(0, 3).map((feature, j) => (
                    <span 
                      key={j} 
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    {project.platform}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-20"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-normal tracking-wide group"
            icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
          >
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;