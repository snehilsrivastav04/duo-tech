
import React from 'react';

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
      <div className="bg-gray-900 rounded-[3rem] p-2 shadow-xl">
        <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 h-[600px]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl" />
          
          {/* Message content */}
          <div className="mt-12 p-4">
            <div className={`p-4 rounded-lg max-w-[80%] ${
              message.type === 'otp' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100' :
              message.type === 'alert' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100' :
              'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
