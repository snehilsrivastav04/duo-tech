import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, ShieldCheck, Zap, Download } from 'lucide-react';
import Container from '../ui/Container';

const metricsData = [
  {
    value: "<2s",
    label: "App Load Time",
    icon: <Zap className="w-8 h-8 text-blue-500" />
  },
  {
    value: "99.9%",
    label: "Crash-Free Sessions",
    icon: <ShieldCheck className="w-8 h-8 text-green-500" />
  },
  {
    value: "4.7+",
    label: "Avg. App Store Rating",
    icon: <BarChart2 className="w-8 h-8 text-yellow-500" />
  },
  {
    value: "100K+",
    label: "App Installs",
    icon: <Download className="w-8 h-8 text-purple-500" />
  }
];

const Metrics: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_74%,#0ea5e9_75%,#0000_76%,#0000_89%,#0ea5e9_90%)] bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-500">
                    <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                      {metric.icon}
                    </div>
                  </div>
                </div>
                
                <motion.p
                  className="text-5xl font-light text-gray-900 dark:text-white mb-3 tracking-tight"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                >
                  {metric.value}
                </motion.p>
                
                <p className="text-lg font-normal text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {metric.label}
                </p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Metrics;