import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  message: {
    type: string;
    text: string;
  };
  small?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ message, small }) => {
  return (
    <div className={`relative ${small ? 'scale-75' : ''}`}>
      <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-4 mx-auto shadow-xl">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
        <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-8 bg-gray-100 flex items-center justify-between px-6">
            <span className="text-xs font-medium">9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 bg-gray-400 rounded-full" />
              <div className="w-4 h-4 bg-gray-400 rounded-full" />
              <div className="w-6 h-3 bg-gray-400 rounded-sm" />
            </div>
          </div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <div className={`max-w-[80%] rounded-lg p-3 mb-2 
              ${message.type === 'otp' ? 'bg-blue-100 text-blue-900' : 
               message.type === 'alert' ? 'bg-yellow-100 text-yellow-900' : 
               'bg-green-100 text-green-900'}`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs opacity-60 mt-1 block">Just now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;