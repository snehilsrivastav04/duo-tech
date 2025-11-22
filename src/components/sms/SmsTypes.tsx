
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import Container from '../ui/Container';
import TabSwitcher from '../ui/TabSwitcher';
import PhoneMockup from './PhoneMockup';

interface SmsTypeData {
  title: string;
  description: string;
  features: string[];
  examples: string[];
}

interface SmsTypesProps {
  data: {
    transactional: SmsTypeData;
    promotional: SmsTypeData;
  };
}

const SmsTypes: React.FC<SmsTypesProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'transactional' | 'promotional'>('transactional');

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Types of <span className="text-blue-600">SMS We Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right SMS type for your business needs
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <TabSwitcher
            tabs={[
              { id: 'transactional', label: 'Transactional SMS' },
              { id: 'promotional', label: 'Promotional SMS' }
            ]}
            activeTab={activeTab}
            onChange={(tabId) => setActiveTab(tabId as 'transactional' | 'promotional')}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeTab + '-left'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {data[activeTab].title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {data[activeTab].description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {data[activeTab].features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Example Messages</span>
                <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
              <div className="space-y-2">
                {data[activeTab].examples.map((example, i) => (
                  <div key={i} className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 text-sm font-mono">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            key={activeTab + '-right'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <PhoneMockup 
                    message={{
                      type: activeTab,
                      text: data[activeTab].examples[0]
                    }} 
                    small
                  />
                </motion.div>
              </AnimatePresence>

              <div className="mt-8">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Best for:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTab === 'transactional' ? (
                    <>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OTP Verification</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Order Updates</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Account Alerts</span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Sales Promotions</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Newsletters</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Lead Generation</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SmsTypes;
