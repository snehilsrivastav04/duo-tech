import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import Container from '../ui/Container';
import InteractiveGlobe from '../home/InteractiveGlobe';

const globalReachData = [
  { country: "USA", clients: 45 },
  { country: "Canada", clients: 28 },
  { country: "UK", clients: 32 },
  { country: "Australia", clients: 18 },
  { country: "India", clients: 56 },
  { country: "Germany", clients: 22 }
];

const GlobalReach: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We Work <span className="text-blue-600 dark:text-blue-400">Globally</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Serving clients across multiple continents with localized solutions
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Based in India, Serving Worldwide
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                We've delivered projects for clients in over 15 countries, with a focus on quality and timely delivery regardless of location.
              </p>
              <ul className="space-y-3">
                {globalReachData.map((country, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                      <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{country.country}</span>
                    <span className="ml-auto bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                      {country.clients}+ clients
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 lg:h-96">
              <InteractiveGlobe withMarkers={true} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
