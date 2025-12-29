import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappColors = {
  primary: '#25D366',
  dark: '#075E54',
};

// WhatsApp Phone Mockup Component
const WhatsAppMockup = () => {
  const messages = [
    {
      id: 1,
      text: "Hi there! I'd like to check my order status",
      sender: "customer",
      time: "10:30 AM"
    },
    {
      id: 2,
      text: "Sure! Please share your order ID",
      sender: "bot",
      time: "10:30 AM"
    },
    {
      id: 3,
      
      text: "Your order #12345 is shipped and will arrive tomorrow. Track here: [link]",
      sender: "bot",
      time: "10:32 AM",
      buttons: ["Track Package", "Contact Support"]
    }
  ];

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-xs mx-auto lg:max-w-md"
    >
      {/* Phone frame */}
      <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden h-96">
          {/* WhatsApp header */}
          <div 
            className="h-16 p-3 flex items-center justify-between text-white"
            style={{ backgroundColor: whatsappColors.dark }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
              <div>
                <div className="font-semibold">Business Name</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Chat area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-900">
            {messages.map((message, i) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'customer' 
                      ? 'bg-green-100 dark:bg-green-900 rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="text-sm dark:text-white">{message.text}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">{message.time}</div>
                  
                  {message.buttons && (
                    <div className="mt-2 space-y-1">
                      {message.buttons.map((button, i) => (
                        <button 
                          key={i}
                          className="block w-full text-left px-3 py-1 text-sm rounded border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-800"
                          style={{ 
                            color: whatsappColors.dark
                          }}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
              </button>
              <input 
                type="text" 
                placeholder="Type a message"
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-white"
              />
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating buttons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -right-5 top-1/4 bg-white p-2 rounded-full shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" style={{ color: whatsappColors.primary }} />
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppMockup;
