import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, Terminal, ShieldCheck, Zap, MessageSquare, Phone } from 'lucide-react';

/**
 * Modern minimalist CTA Section
 * Design Philosophy: 
 * - Split-Architecture: Contrast between deep slate (dark) and pure white (light).
 * - Command Center Aesthetic: Right-side visual representing system readiness.
 * - Precision Navigation: Clear paths to the /contact page.
 */

const CTA = () => {
  return (
    <section id="cta" className="relative py-40 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-blue-600" />
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-blue-600 dark:text-blue-400">
                  Ready to Transform
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-12">
                Let's build your <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700">Digital Edge.</span>
              </h2>

              <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mb-14 border-l-2 border-slate-100 dark:border-slate-800 pl-8">
                Connect with our engineering team to audit your current infrastructure and deploy high-performance IVR or web architectures.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                {/* Primary Contact Button */}
                <a 
                  href="/contact"
                  className="group relative px-12 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white flex items-center gap-4 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                >
                  <span className="font-bold uppercase tracking-widest text-xs">Start a Project</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                {/* Secondary Demo Button */}
                <a 
                  href="/demo"
                  className="group px-10 py-6 border border-slate-200 dark:border-slate-800 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-3"
                >
                  <Phone size={14} />
                  Book a Demo
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: System Status / Technical Interface */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-slate-800 rounded-[3rem] p-10 overflow-hidden"
            >
              {/* Animated Core */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-64 h-64 border border-blue-600/30 rounded-full animate-ping duration-[3000ms]" />
                <div className="absolute w-48 h-48 border border-blue-400/20 rounded-full animate-pulse" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Node_Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <span className="text-xs font-bold">OPERATIONAL</span>
                    </div>
                  </div>
                  <Terminal size={20} className="text-slate-300 dark:text-slate-700" />
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Global Routing", val: "Optimal" },
                    { label: "API Latency", val: "14ms" },
                    { label: "Data Integrity", val: "100%" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200/50 dark:border-slate-800/50">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</span>
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">{stat.val}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-[#020617] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:border-blue-500/50 transition-colors">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engineering Support</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300">Talk directly to an architect.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float Element: User Activity */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 px-6 py-4 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-100 dark:border-slate-800 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900" />)}
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">8 Devs Online</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Verification Footer */}
        <div className="mt-32 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">AWS_Partner</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Azure_Stack</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Google_Cloud</span>
           </div>
           <div className="flex items-center gap-4">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest italic">Security_Audit_Pass_2026</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;