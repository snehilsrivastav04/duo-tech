
import React from 'react';
import { motion } from 'framer-motion';
import { Code, BarChart2, Check, Download } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import CodeSnippet from './CodeSnippet';

interface ApiFeature {
  title: string;
  description: string;
  icon: React.ReactElement;
}

interface ApiDashboardProps {
  apiFeatures: ApiFeature[];
  dashboardFeatures: string[];
}

const ApiDashboard: React.FC<ApiDashboardProps> = ({ apiFeatures, dashboardFeatures }) => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Developer-Friendly <span className="text-blue-600 dark:text-blue-400">Integration</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Powerful tools for developers and marketers alike
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Code className="w-6 h-6 mr-3 text-blue-600" />
              API Access
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {apiFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <CodeSnippet />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <BarChart2 className="w-6 h-6 mr-3 text-blue-600" />
              Dashboard Features
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
              <ul className="space-y-3">
                {dashboardFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
              <div className="relative z-10">
                <div className="flex mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 mb-4">
                  <div className="h-4 bg-gray-600/30 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-600/30 rounded mb-2 w-1/2"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-800/30 rounded-lg p-3">
                    <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                    <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                  </div>
                  <div className="bg-blue-800/30 rounded-lg p-3">
                    <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                    <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                  </div>
                  <div className="bg-blue-800/30 rounded-lg p-3">
                    <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                    <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
                <div className="bg-blue-800/30 rounded-lg p-3 h-40"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            icon={<Download className="w-5 h-5" />}
          >
            Download Full API Documentation
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default ApiDashboard;
