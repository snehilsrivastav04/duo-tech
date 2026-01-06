import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Phone,
  Video,
  Paperclip,
  Mic,
  Send
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappColors = {
  primary: '#25D366',
  dark: '#128C7E',
  light: '#DCF8C6',
  blue: '#34B7F1'
};

type WhatsAppMessage = {
  id: number;
  text: string;
  sender: string;
  time: string;
  buttons?: string[];
};

export const WhatsAppMockup = ({
  messages,
  autoAnimate = true,
  title = "DuoTech"
}: {
  messages?: WhatsAppMessage[];
  autoAnimate?: boolean;
  title?: string;
}) => {
  const defaultMessages: WhatsAppMessage[] = [
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

  const chatMessages = messages || defaultMessages;

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-sm mx-auto"
    >
      <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-10"></div>
        
        <div className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden" style={{ height: 'auto' }}>
          <div 
            className="h-16 p-3 flex items-center justify-between text-white"
            style={{ backgroundColor: whatsappColors.dark }}
          >
            <div className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-3" />
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Phone className="w-5 h-5" />
              <Video className="w-5 h-5" />
            </div>
          </div>
          
          <div className="overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-900" style={{ height: 'calc(100% - 128px)' }}>
            {chatMessages.map((message: WhatsAppMessage, i: number) => (
              <motion.div
                key={message.id}
                initial={autoAnimate ? { opacity: 0, y: 10 } : false}
                animate={autoAnimate ? { opacity: 1, y: 0 } : false}
                transition={autoAnimate ? { delay: i * 0.2 } : undefined}
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
                          className="block w-full text-left px-3 py-1 text-sm rounded border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-800 text-green-800 dark:text-green-200"
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
          
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                type="text" 
                placeholder="Type a message"
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-white"
              />
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <Mic className="w-5 h-5" />
              </button>
              <button 
                className="p-2 rounded-full ml-1"
                style={{ backgroundColor: whatsappColors.primary }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -right-3 -top-3 bg-white p-2 rounded-full shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" style={{ color: whatsappColors.primary }} />
      </motion.div>
    </motion.div>
  );
};