import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, ArrowUpRight } from 'lucide-react';

/**
 * Modern minimalist Final CTA component
 * Design Philosophy: 
 * - High-Contrast Architecture: Deep slate backgrounds with electric blue accents
 * - Navigation: Integrated links to the /contact page
 * - Structural Lines: Consistent with the GlobalReach and Industries sections
 */

const FinalCTA = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main CTA Block */}
        <div className="relative bg-slate-900 dark:bg-blue-950/20 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
          {/* Subtle noise and radial gradient for depth */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Content */}
            <div className="p-12 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800/50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-blue-500" />
                  <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-blue-400">
                    Next Phase
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-8">
                  Let's engineer <br />
                  <span className="italic font-normal text-slate-500 text-4xl md:text-6xl">the remarkable.</span>
                </h2>
                
                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md mb-12">
                  Ready to transition from concept to high-performance digital architecture?
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact"
                    className="group px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-900/20"
                  >
                    Start Project
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="group px-8 py-5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    Consultation
                    <Calendar size={18} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Detailed Links/Contact Info */}
            <div className="p-12 md:p-20 bg-slate-950/50 backdrop-blur-sm flex flex-col justify-between">
              <div className="space-y-12">
                <div className="group">
                  <span className="text-[10px] font-mono text-blue-500/50 block mb-4">/DIRECT_INQUIRY</span>
                  <a 
                    href="mailto:hello@example.com" 
                    className="text-2xl md:text-3xl font-light text-white flex items-center gap-4 hover:text-blue-400 transition-colors"
                  >
                    info@duotechsolutions.in
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </div>

                <div className="group">
                  <span className="text-[10px] font-mono text-blue-500/50 block mb-4">/DuoTech Solutions</span>
                  <p className="text-2xl font-light text-slate-400 leading-tight">
                    DuoTech Solutions <br />
                    <span className="text-white">Noida, India 🇮🇳</span>
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Currently accepting new projects</span>
                </div>
                <p className="text-xs text-slate-600 uppercase tracking-[0.2em] leading-loose">
                  UTC +5:30 Alignment • High Capacity Stacks • Rapid Deployment
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Global Footer Sub-link */}
        <div className="mt-12 flex justify-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <a 
              href="/contact" 
              className="flex flex-col items-center gap-3 group opacity-40 hover:opacity-100 transition-opacity"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">Scroll to Top</span>
              <div className="w-[1px] h-12 bg-slate-300 dark:bg-slate-800" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;