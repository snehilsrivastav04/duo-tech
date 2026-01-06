import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowUpRight, FileText, ImageIcon, List, MapPin } from 'lucide-react';

const messageTypesData = [
  {
    id: '01',
    type: 'Text & Rich Media',
    description: 'Send messages with bold, italics, and monospace formatting to emphasize key information.',
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-[#128C7E]"
  },
  {
    id: '02',
    type: 'Visual Assets',
    description: 'Capture attention with engaging high-resolution images and product showcases.',
    icon: <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-[#25D366]"
  },
  {
    id: '03',
    type: 'Interactive UI',
    description: 'Guide users with quick reply buttons, list pickers, and custom calls to action.',
    icon: <List className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-slate-900"
  },
  {
    id: '04',
    type: 'Geolocation',
    description: 'Share precise store locations or track active deliveries with real-time maps.',
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-blue-500"
  }
];

export const MessageTypes = () => {
  const [activeType, setActiveType] = useState(messageTypesData[0]);

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-slate-50 dark:bg-black/20 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-8 sm:gap-12">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#128C7E] dark:text-[#25D366] block mb-6"
            >
              Rich Capabilities
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Engage through <span className="italic font-serif text-[#128C7E] dark:text-[#25D366]">multi-dimensional</span> content.
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed font-light"
          >
            Go beyond standard text. Utilize native interactive elements to build high-conversion customer journeys.
          </motion.p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          
          {/* Menu Selection */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2 sm:space-y-4">
            {messageTypesData.map((item) => {
              const isActive = activeType.id === item.id;
              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActiveType(item)}
                  className={`relative group p-6 sm:p-8 cursor-pointer border rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none lg:translate-x-4' 
                      : 'border-transparent hover:bg-white/50 dark:hover:bg-white/[0.02] hover:border-slate-100 dark:hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6 relative z-10">
                    <span className={`text-[10px] font-mono mt-1 transition-colors duration-300 ${isActive ? 'text-[#128C7E] dark:text-[#25D366]' : 'text-slate-300 dark:text-slate-600'}`}>
                      {item.id}
                    </span>
                    <div>
                      <h3 className={`text-base sm:text-lg font-medium mb-1 sm:mb-2 transition-colors duration-300 ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                        {item.type}
                      </h3>
                      <AnimatePresence mode="popLayout">
                        {isActive && (
                          <motion.p
                            layout
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual Showcase Area */}
          <div className="lg:col-span-7 relative">
            <div className="h-full min-h-[400px] sm:min-h-[500px] bg-slate-200/30 dark:bg-slate-800/20 rounded-2xl sm:rounded-[3rem] border border-slate-200/50 dark:border-slate-700/30 flex items-center justify-center p-6 sm:p-12 overflow-hidden">
              {/* Dynamic Background Element */}
              <motion.div 
                key={activeType.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                  opacity: 0.1
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute w-72 h-72 sm:w-96 sm:h-96 blur-[80px] sm:blur-[100px] rounded-full ${activeType.color}`}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType.id}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full max-w-[280px] sm:max-w-[320px]"
                >
                  {/* Mock Phone / Message UI Component */}
                  <div className="bg-white dark:bg-[#202c33] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 p-2">
                    <div className="bg-[#efe7de] dark:bg-[#0b141a] rounded-xl sm:rounded-2xl p-4 min-h-[250px] sm:min-h-[300px] flex flex-col justify-end">
                      <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl rounded-tl-none shadow-sm max-w-[90%] bg-white dark:bg-[#202c33]`}>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg text-white ${activeType.color}`}>
                            {activeType.icon}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Preview</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          This is a visualization of <span className="font-bold text-slate-900 dark:text-white">{activeType.type}</span> being delivered via the official API.
                        </p>
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                          <span className="text-[10px] text-slate-400">12:00 PM</span>
                          <Plus className="w-3 h-3 text-[#128C7E]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MessageTypes;