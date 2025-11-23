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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-32 bg-white dark:bg-gray-900">
      <Container>
        {/* Header Section */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Types of{' '}
            <span className="text-blue-800 dark:text-blue-300 font-normal">SMS We Support</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the right SMS type for your business needs
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="mb-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <TabSwitcher
            tabs={[
              { id: 'transactional', label: 'Transactional SMS' },
              { id: 'promotional', label: 'Promotional SMS' }
            ]}
            activeTab={activeTab}
            onChange={(tabId) => setActiveTab(tabId as 'transactional' | 'promotional')}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <motion.div
            key={activeTab + '-left'}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Title & Description */}
            <div>
              <motion.h3 
                className="text-4xl font-light text-gray-900 dark:text-white mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {data[activeTab].title}
              </motion.h3>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {data[activeTab].description}
              </motion.p>
            </div>
            
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">Key Features</h4>
              <ul className="space-y-4">
                {data[activeTab].features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    className="flex items-start group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                      <Check className="w-3 h-3 text-blue-800 dark:text-blue-300" strokeWidth={3} />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed flex-1">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Examples Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-light text-gray-900 dark:text-white tracking-wide">Example Messages</h4>
              </div>
              <div className="space-y-4">
                {data[activeTab].examples.map((example, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                    className="group relative"
                  >
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
                      <p className="text-gray-700 dark:text-gray-300 font-light leading-relaxed text-lg">
                        {example}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(example, i)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      {copiedIndex === i ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Phone Mockup & Tags */}
          <motion.div
            key={activeTab + '-right'}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-12 border border-gray-100 dark:border-gray-700">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60" />
              
              {/* Phone Mockup */}
              <div className="relative z-10 flex justify-center mb-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
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
              </div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <h4 className="text-2xl font-light text-gray-900 dark:text-white mb-6 tracking-wide">Best For</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {activeTab === 'transactional' ? (
                    <>
                      <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-light border border-blue-100 dark:border-blue-800">OTP Verification</span>
                      <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-light border border-blue-100 dark:border-blue-800">Order Updates</span>
                      <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-light border border-blue-100 dark:border-blue-800">Account Alerts</span>
                    </>
                  ) : (
                    <>
                      <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-light border border-purple-100 dark:border-purple-800">Sales Promotions</span>
                      <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-light border border-purple-100 dark:border-purple-800">Newsletters</span>
                      <span className="px-4 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-light border border-purple-100 dark:border-purple-800">Lead Generation</span>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SmsTypes;