import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// Mock UI Components
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const faqs = [
  {
    question: 'How quickly can I get started?',
    answer: 'Most customers are up and running in under 15 minutes with our quick-start guides and pre-built templates. Integration is designed for immediate deployment.'
  },
  {
    question: 'What regions do you support?',
    answer: 'We maintain presence in North America, Europe, Asia, and Australia with 150+ points of presence worldwide, ensuring sub-millisecond latency globally.'
  },
  {
    question: 'Can I upgrade or downgrade plans?',
    answer: 'Yes. Scalability is at our core. You can transition between service tiers at any time with zero downtime or service interruption.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Our enterprise architectural team can design fully bespoke solutions tailored to specific high-density requirements and regulatory frameworks.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sidebar Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-6 block">
              Inquiry Support
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
              Common <span className="font-medium italic text-gray-400">queries</span> <br />
              addressed.
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10">
              Everything you need to know about our operational framework and integration protocols.
            </p>
            
            <div className="p-8 border border-gray-100 dark:border-gray-900 bg-gray-50/30 dark:bg-gray-900/10">
              <HelpCircle className="text-blue-600 mb-4" size={24} />
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Need a custom brief?</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-light mb-6">Contact our architecture team for a technical consultation.</p>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">
                Contact Sales →
              </a>
            </div>
          </motion.div>

          {/* Accordion Content */}
          <div className="lg:col-span-8">
            <div className="border-t border-gray-100 dark:border-gray-800">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-100 dark:border-gray-800"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left group"
                  >
                    <span className={`text-xl md:text-2xl font-light transition-colors duration-300 ${activeIndex === index ? 'text-blue-600' : 'text-gray-900 dark:text-white'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 ml-4 w-10 h-10 border border-gray-100 dark:border-gray-800 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-blue-950 text-white rotate-90' : 'text-gray-400 group-hover:border-gray-400'}`}>
                      {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pr-12">
                          <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Subtle Footer Detail */}
            <div className="mt-12 flex justify-between items-center opacity-30">
              <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold mx-6 text-gray-400">
                End of Section
              </span>
              <div className="h-px flex-grow bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;