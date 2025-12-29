import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, ShoppingCart, Clock, BarChart2 } from 'lucide-react';
import { FaRegLightbulb } from 'react-icons/fa';

const whatsappColors = {
  primary: '#25D366',
};

const whatsappData = {
  useCases: {
    categories: [
      { name: "E-commerce", icon: <ShoppingCart className="w-5 h-5" /> },
      { name: "Customer Support", icon: <MessageSquare className="w-5 h-5" /> },
      { name: "Services", icon: <Clock className="w-5 h-5" /> },
      { name: "Education", icon: <FaRegLightbulb className="w-5 h-5" /> },
      { name: "Finance", icon: <BarChart2 className="w-5 h-5" /> }
    ],
    examples: {
      "E-commerce": [
        "COD payment confirmations",
        "Shipping updates with tracking",
        "Personalized product recommendations",
        "Post-purchase feedback collection"
      ],
      "Customer Support": [
        "Instant ticket creation",
        "Automated issue resolution",
        "Live agent transfer",
        "Customer satisfaction surveys"
      ],
      "Services": [
        "Appointment scheduling",
        "Booking confirmations",
        "Service reminders",
        "Feedback collection"
      ],
      "Education": [
        "Assignment reminders",
        "Course updates",
        "Fee payment reminders",
        "Parent-teacher communication"
      ],
      "Finance": [
        "Account statements",
        "Payment reminders",
        "Fraud alerts",
        "Investment updates"
      ]
    }
  },
};

// Use Cases Tabs Component
const UseCasesTabs = () => {
  const [activeTab, setActiveTab] = useState("E-commerce");
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Tabs */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 dark:border-gray-700">
        {whatsappData.useCases.categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`px-6 py-4 flex items-center space-x-2 whitespace-nowrap ${
              activeTab === category.name 
                ? 'border-b-2 font-medium text-gray-900 dark:text-white' 
                : 'text-gray-500 hover:text-gray-700'}`}
            style={{ 
              borderBottomColor: activeTab === category.name ? whatsappColors.primary : 'transparent' 
            }}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Tab content */}
      <div className="p-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(whatsappData.useCases.examples as Record<string, string[]>)[activeTab].map((example: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start"
            >
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: whatsappColors.primary }} />
              <span className="text-gray-700 dark:text-gray-300">{example}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCasesTabs;
