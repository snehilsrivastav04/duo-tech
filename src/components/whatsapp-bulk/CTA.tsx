import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, MessageCircle } from 'lucide-react';

/**
 * Modern minimalist WhatsApp CTA component
 * Design Philosophy: 
 * - Brand Integration: Utilizing WhatsApp's #25D366 within a technical slate framework
 * - Structural Depth: Asymmetric grid with a focus on conversational engineering
 * - Conversational UI: Sophisticated messaging-themed visual elements
 */

export const CTA = () => {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative bg-slate-900 dark:bg-[#071a14] rounded-2xl md:rounded-[3rem] overflow-hidden border border-slate-800/50 shadow-2xl">
          
          {/* WhatsApp Brand Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#25D366]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#25D366]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-800/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="w-8 h-[2px] bg-[#25D366]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#25D366]">
                    Conversational Commerce
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tighter text-white leading-[1] sm:leading-[0.95] mb-6 sm:mb-8">
                  Engineer your <br />
                  <span className="italic font-normal text-slate-500 text-3xl sm:text-4xl md:text-6xl">customer dialogue.</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg mb-10 sm:mb-12">
                  Transform how your business communicates using our high-performance WhatsApp Business solutions. 
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact"
                    className="group px-8 sm:px-10 py-4 sm:py-5 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-green-900/20"
                  >
                    Get Started Free
                    <ArrowRight size={16} sm:size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="group px-8 sm:px-10 py-4 sm:py-5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    Schedule Demo
                    <MessageSquare size={16} sm:size={18} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Technical Stats & Mockup Space */}
            <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 lg:p-20 bg-slate-950/40 flex flex-col justify-center">
              <div className="space-y-10 sm:space-y-12">
                <div className="group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#25D366]/10 rounded-lg text-[#25D366]">
                      <Zap size={18} sm:size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-[#25D366]/50 uppercase tracking-widest">Performance Metrics</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-light text-slate-400">Delivery Rate</span>
                      <span className="text-lg sm:text-xl text-white font-mono">99.9%</span>
                    </div>
                    <div className="w-full h-[1px] bg-slate-800">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '99.9%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-[#25D366]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                  <div className="flex gap-4 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] flex items-center justify-center text-slate-950">
                      <MessageCircle size={18} sm:size={20} />
                    </div>
                    <div className="space-y-1 pt-1">
                      <div className="w-24 h-2 bg-slate-700 rounded" />
                      <div className="w-16 h-2 bg-slate-800 rounded" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    "Welcome! Let's set up your WhatsApp Business account. You'll be able to send messages in minutes."
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 sm:pt-6">
                  <ShieldCheck size={18} sm:size={20} className="text-slate-600" />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                    Official Meta Business Partner • End-to-End Encrypted
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Localized Engineering Note */}
        <div className="mt-12 text-center opacity-40">
           <span className="text-[9px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase">Built for Scale • UTC +5:30 Deployment • Global Reach</span>
        </div>

      </div>
    </section>
  );
};

export default CTA;