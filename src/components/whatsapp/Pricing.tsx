import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const whatsappColors = {
  primary: '#25D366',
};

const whatsappData = {
  pricing: {
    starter: {
      price: "₹3,999",
      period: "month",
      features: [
        "1,000 template messages",
        "Basic chatbot setup",
        "Email support",
        "CRM integration (1 platform)"
      ],
      cta: "Start Now"
    },
    professional: {
      price: "₹9,999",
      period: "month",
      popular: true,
      features: [
        "5,000 template messages",
        "Advanced AI chatbot",
        "Priority support",
        "CRM integration (3 platforms)",
        "WhatsApp Green Tick assistance"
      ],
      cta: "Get Started"
    },
    enterprise: {
      price: "Custom",
      period: "",
      features: [
        "Unlimited messages",
        "Custom chatbot development",
        "24/7 dedicated support",
        "Multi-CRM integration",
        "Custom analytics dashboard",
        "API access"
      ],
      cta: "Contact Sales"
    }
  }
};

// Pricing Component
const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.starter.price}</span>
          <span className="text-gray-500 ml-1">/{whatsappData.pricing.starter.period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.starter.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:border-green-500 hover:text-green-600"
        >
          {whatsappData.pricing.starter.cta}
        </Button>
      </motion.div>
      
      {/* Professional Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-.bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 relative"
        style={{ borderColor: whatsappColors.primary }}
      >
        {/* Popular badge */}
        <div 
          className="absolute top-0 right-6 transform -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
        >
          MOST POPULAR
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.professional.price}</span>
          <span className="text-gray-500 ml-1">/{whatsappData.pricing.professional.period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.professional.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="primary"
          className="w-full"
          style={{ backgroundColor: whatsappColors.primary }}
        >
          {whatsappData.pricing.professional.cta}
        </Button>
      </motion.div>
      
      {/* Enterprise Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.enterprise.price}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.enterprise.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:border-green-500 hover:text-green-600"
        >
          {whatsappData.pricing.enterprise.cta}
        </Button>
      </motion.div>
    </div>
  );
};

export default Pricing;
