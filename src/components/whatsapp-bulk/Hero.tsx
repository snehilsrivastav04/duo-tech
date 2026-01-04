import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCheck, MessageSquare, ShieldCheck, Zap, Globe } from 'lucide-react';

/**
 * Refined, minimal background pattern
 */
const GeometricBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] dark:opacity-[0.07]" 
      style={{ backgroundImage: `radial-gradient(#075E54 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
    />
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#25D366]/5 to-transparent" />
  </div>
);

const FEATURES = [
  { 
    id: '01', 
    title: 'Enterprise Messaging', 
    desc: 'Scalable infrastructure designed for millions of concurrent conversations.',
    icon: <Zap className="w-4 h-4" />
  },
  { 
    id: '02', 
    title: 'Verified Business Profiles', 
    desc: 'Establish trust with official green-tick verification and branded profiles.',
    icon: <CheckCheck className="w-4 h-4" />
  },
  { 
    id: '03', 
    title: 'Global Connectivity', 
    desc: 'Direct routes to every major carrier worldwide with zero latency.',
    icon: <Globe className="w-4 h-4" />
  },
];

export const Hero = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const WhatsAppMockup = () => (
    <div className="relative mx-auto w-full max-w-[280px] h-[540px] bg-white dark:bg-[#0b141a] rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Mockup Header */}
        <div className="bg-[#f0f2f5] dark:bg-[#202c33] p-4 pt-10 flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
          <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center text-white shrink-0">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100">Customer Support</p>
            <p className="text-[9px] text-[#25D366] font-medium">Online</p>
          </div>
        </div>

        {/* Mockup Chat Body */}
        <div className="flex-1 p-4 space-y-3 bg-[#efe7de] dark:bg-[#0b141a] overflow-hidden">
          {/* Incoming Message */}
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202c33] p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
              <p className="text-[10px] text-slate-800 dark:text-slate-200 leading-tight">
                Hi! I noticed an item in my cart is out of stock. When will it be back?
              </p>
              <p className="text-[8px] text-slate-400 text-right mt-1">10:42 AM</p>
            </div>
          </div>

          {/* Outgoing Message */}
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] dark:bg-[#005c4b] p-2.5 rounded-lg rounded-tr-none shadow-sm max-w-[85%]">
              <p className="text-[10px] text-slate-800 dark:text-slate-100 leading-tight">
                Hello! That item will be restocked tomorrow at 9 AM. Would you like a notification?
              </p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[8px] text-slate-500 dark:text-slate-300">10:43 AM</p>
                <CheckCheck className="w-3 h-3 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Incoming Message */}
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202c33] p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[85%]">
              <p className="text-[10px] text-slate-800 dark:text-slate-200 leading-tight">
                Yes please! That would be amazing. Thanks for the quick reply!
              </p>
              <p className="text-[8px] text-slate-400 text-right mt-1">10:43 AM</p>
            </div>
          </div>

          {/* Outgoing Message with Interactive Component Feel */}
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] dark:bg-[#005c4b] p-2.5 rounded-lg rounded-tr-none shadow-sm max-w-[85%]">
              <p className="text-[10px] text-slate-800 dark:text-slate-100 leading-tight font-medium mb-2">
                Notification set! ✅
              </p>
              <div className="border-t border-black/5 pt-2 mt-1">
                <p className="text-[9px] text-slate-600 dark:text-slate-200 italic">
                  Is there anything else I can help you with?
                </p>
              </div>
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[8px] text-slate-500 dark:text-slate-300">10:44 AM</p>
                <CheckCheck className="w-3 h-3 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Mockup Footer / Input */}
        <div className="p-3 bg-[#f0f2f5] dark:bg-[#202c33] flex items-center gap-2">
          <div className="flex-1 bg-white dark:bg-[#2a3942] h-7 rounded-full px-3 flex items-center">
            <div className="h-1.5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full" />
          </div>
          <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-white dark:bg-[#0b141a] pt-32 pb-40 overflow-hidden transition-colors duration-500">
      <GeometricBackground />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Left: Typography & Service List */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl font-light tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.05]">
                Conversations <br />
                <span className="font-serif italic text-[#128C7E] dark:text-[#25D366]">redefined.</span>
              </h1>

              <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-lg leading-relaxed font-light">
                Leverage the power of the world’s most trusted messaging platform to build lasting customer relationships.
              </p>

              {/* Linear Service List */}
              <div className="space-y-0 border-t border-slate-100 dark:border-slate-800 max-w-xl">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    className="group py-8 border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="text-[10px] font-mono text-slate-400 tracking-widest">{feature.id}</span>
                        <h3 className="text-lg font-normal text-slate-800 dark:text-slate-200 group-hover:text-[#128C7E] transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                      <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${activeFeature === feature.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                    </div>
                    
                    <AnimatePresence>
                      {activeFeature === feature.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pl-10 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
                            {feature.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Sticky Showcase Section */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Refined Geometric Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 border border-[#25D366]/10 rounded-full -mr-20 -mt-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-slate-100 dark:border-slate-800 rounded-bl-3xl -ml-10 -mb-10" />

              <div className="relative">
                <WhatsAppMockup />
                
                {/* Minimalist Floating Card */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -left-16 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 dark:border-slate-800"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#25D366]/10 flex items-center justify-center rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-[#128C7E]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Secure API</p>
                      <p className="text-[10px] text-slate-400">Meta Authorized Partner</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};