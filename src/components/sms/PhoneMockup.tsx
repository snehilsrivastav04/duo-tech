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
    <div className={`relative ${small ? 'scale-90' : ''} transition-all duration-500`}>
      {/* Phone Frame */}
      <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl border border-gray-800">
        <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 h-[600px] border border-gray-200 dark:border-gray-700">
          
          {/* Minimal Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-gray-900 rounded-b-lg border-b border-gray-800" />
          
          {/* Screen Content */}
          <div className="mt-16 flex flex-col h-[calc(100%-4rem)]">
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 mb-8">
              <div className="text-xs text-gray-900 dark:text-white font-light">9:41</div>
              <div className="flex space-x-1">
                <div className="w-1 h-4 bg-gray-900 dark:bg-gray-300 rounded-sm"></div>
                <div className="w-1 h-4 bg-gray-900 dark:bg-gray-300 rounded-sm"></div>
                <div className="w-1 h-4 bg-gray-900 dark:bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className={`p-6 rounded-2xl w-full max-w-[85%] border transition-all duration-500 ${
                message.type === 'otp' 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/50 text-blue-900 dark:text-blue-100' 
                  : message.type === 'alert' 
                  ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/50 text-yellow-900 dark:text-yellow-100'
                  : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100'
              }`}>
                <p className="text-lg leading-relaxed font-light tracking-wide text-center">
                  {message.text}
                </p>
                
                {/* OTP Specific Styling */}
                {message.type === 'otp' && (
                  <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700/50">
                    <div className="flex justify-center space-x-3">
                      {[1, 2, 3, 4, 5, 6].map((digit) => (
                        <div 
                          key={digit}
                          className="w-8 h-12 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-lg flex items-center justify-center"
                        >
                          <span className="text-blue-900 dark:text-blue-100 font-light text-lg">
                            •
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Bar */}
            <div className="flex justify-around items-center pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
              <div className="w-8 h-1 bg-gray-900 dark:bg-gray-300 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
            </div>
          </div>

          {/* Physical Buttons */}
          <div className="absolute left-0 top-1/4 w-1 h-16 bg-gray-900 rounded-r-sm"></div>
          <div className="absolute left-0 top-1/3 w-1 h-16 bg-gray-900 rounded-r-sm"></div>
          <div className="absolute right-0 top-1/4 w-1 h-24 bg-gray-900 rounded-l-sm"></div>
        </div>
      </div>

      {/* Subtle Reflection Effect */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-to-t from-gray-200/50 to-transparent dark:from-gray-800/30 rounded-full blur-sm" />
    </div>
  );
};

export default PhoneMockup;