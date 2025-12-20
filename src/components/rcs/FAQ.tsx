import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare, Smartphone, Clock } from 'lucide-react';
import Container from '../ui/Container';

const rcsData = {
  faqs: [
    {
      id: 1,
      question: 'How is RCS different from SMS?',
      answer: 'RCS offers rich media, branding, interactivity, and analytics—all within the native messaging app. Unlike SMS, it supports images, videos, buttons, carousels, and read receipts without additional applications.',
      icon: <MessageSquare size={20} />,
      category: 'technology'
    },
    {
      id: 2,
      question: 'Do customers need to install an app?',
      answer: 'No installation required. RCS operates through default messaging applications on Android devices, covering 85% of global smartphones. The experience is native and seamless.',
      icon: <Smartphone size={20} />,
      category: 'implementation'
    },
    {
      id: 3,
      question: 'What if a customer doesn\'t have RCS?',
      answer: 'Our platform intelligently falls back to SMS delivery when RCS is unavailable. This ensures message delivery regardless of device capabilities or network conditions.',
      icon: <Smartphone size={20} />,
      category: 'implementation'
    },
    {
      id: 4,
      question: 'How quickly can we begin implementation?',
      answer: 'Most organizations commence messaging within 24 hours. Our implementation team guides you through verification, template approval, and campaign configuration.',
      icon: <Clock size={20} />,
      category: 'onboarding'
    }
  ]
};

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-100 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-start space-x-6 text-left">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-100 transition-colors">
            {faq.icon}
          </div>
          <div>
            <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
              {faq.question}
            </h3>
            <div className="mt-2">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {faq.category}
              </span>
            </div>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors"
        >
          <ChevronDown 
            size={20} 
            className={`transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}`} 
          />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-16 pr-8">
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>{faq.answer}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">Need specific details about implementation?</p>
                  <button className="mt-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                    Contact our solutions team →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-50 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-50 to-transparent" />
        
        {/* Geometric Accents */}
        <div className="absolute -right-40 top-1/4 w-80 h-80 bg-blue-50 rounded-full" />
        <div className="absolute -left-40 bottom-1/4 w-80 h-80 bg-gray-50 rounded-full" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
              <HelpCircle size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Common Inquiries</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-[1.1]">
              Questions
              <span className="block text-blue-600 font-normal">Answered</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-xl mx-auto font-light">
              Clarifying the essentials of modern business messaging
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {rcsData.faqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFaq === faq.id}
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                index={index}
              />
            ))}
          </div>

          {/* Additional Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-6">
              Have a specific question not covered here?
            </p>
            <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors group">
              <span className="font-medium">Contact our messaging specialists</span>
              <ChevronDown 
                size={16} 
                className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" 
              />
            </button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
};

export default FAQ;