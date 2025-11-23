import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeSnippet: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const codeText = `const response = await fetch('https://api.example.com/sms/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    to: '+1234567890',
    message: 'Your OTP is: 123456',
    type: 'otp'
  })
});`;
    
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative font-mono text-sm">
      {/* Copy Button - Positioned Absolutely */}
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="font-light tracking-wide">Copied</span>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="font-light tracking-wide">Copy</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Code Content */}
      <pre className="overflow-x-auto text-gray-700 dark:text-gray-300 leading-relaxed">
        <code>
          <span className="text-gray-400 dark:text-gray-500">const</span>
          {' '}
          <span className="text-gray-900 dark:text-white">response</span>
          {' '}
          <span className="text-gray-400 dark:text-gray-500">=</span>
          {' '}
          <span className="text-gray-400 dark:text-gray-500">await</span>
          {' '}
          <span className="text-gray-900 dark:text-white">fetch</span>
          <span className="text-gray-400 dark:text-gray-500">(</span>
          <span className="text-blue-900 dark:text-blue-400">'https://api.example.com/sms/send'</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {' '}
          <span className="text-gray-400 dark:text-gray-500">{'{'}</span>
          {'\n  '}
          <span className="text-gray-900 dark:text-white">method</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'POST'</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {'\n  '}
          <span className="text-gray-900 dark:text-white">headers</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-gray-400 dark:text-gray-500">{'{'}</span>
          {'\n    '}
          <span className="text-blue-900 dark:text-blue-400">'Content-Type'</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'application/json'</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {'\n    '}
          <span className="text-blue-900 dark:text-blue-400">'Authorization'</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'Bearer YOUR_API_KEY'</span>
          {'\n  '}
          <span className="text-gray-400 dark:text-gray-500">{'}'}</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {'\n  '}
          <span className="text-gray-900 dark:text-white">body</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-gray-900 dark:text-white">JSON</span>
          <span className="text-gray-400 dark:text-gray-500">.</span>
          <span className="text-gray-900 dark:text-white">stringify</span>
          <span className="text-gray-400 dark:text-gray-500">(</span>
          <span className="text-gray-400 dark:text-gray-500">{'{'}</span>
          {'\n    '}
          <span className="text-gray-900 dark:text-white">to</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'+1234567890'</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {'\n    '}
          <span className="text-gray-900 dark:text-white">message</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'Your OTP is: 123456'</span>
          <span className="text-gray-400 dark:text-gray-500">,</span>
          {'\n    '}
          <span className="text-gray-900 dark:text-white">type</span>
          <span className="text-gray-400 dark:text-gray-500">:</span>
          {' '}
          <span className="text-blue-900 dark:text-blue-400">'otp'</span>
          {'\n  '}
          <span className="text-gray-400 dark:text-gray-500">{'}'}</span>
          <span className="text-gray-400 dark:text-gray-500">)</span>
          {'\n'}
          <span className="text-gray-400 dark:text-gray-500">{'}'}</span>
          <span className="text-gray-400 dark:text-gray-500">)</span>
          <span className="text-gray-400 dark:text-gray-500">;</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;