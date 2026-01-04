import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Smartphone, Zap, Shield, Sparkles } from 'lucide-react';

/**
 * Modern minimalist Android CTA component
 * Design Philosophy: 
 * - High-Contrast Technicality: Deep slate backgrounds with cyan/blue accents
 * - Structural Integrity: Background line grids and asymmetric layouts
 * - Value-Driven: Focuses on the competitive entry price (₹3999) and premium engineering
 */

const CTA = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="relative bg-slate-900 dark:bg-slate-950 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl">
          
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 p-8 md:p-20 border-b lg:border-b-0 lg:border-r border-slate-800/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-[2px] bg-cyan-400" />
                  <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-cyan-400">
                    Application Development
                  </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.95] mb-8">
                  Architecting your <br />
                  <span className="italic font-normal text-slate-500 text-4xl md:text-6xl">Android presence.</span>
                </h2>

                <p className="text-xl text-slate-400 font-light leading-relaxed max-w-lg mb-12">
                  High-performance mobile experiences engineered for scalability. Development starting from <span className="text-white font-medium">₹9,999</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact"
                    className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-900/20"
                  >
                    Get Started Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="/contact"
                    className="group px-10 py-5 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    Consultation
                    <MessageSquare size={18} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visual Features */}
            <div className="lg:col-span-5 p-12 md:p-20 bg-slate-950/50 flex flex-col justify-center">
              <div className="space-y-10">
                {[
                  { icon: <Zap size={20} />, title: "Rapid Deployment", desc: "Production-ready builds in record time." },
                  { icon: <Smartphone size={20} />, title: "Native Performance", desc: "Optimized for the latest Android SDKs." },
                  { icon: <Shield size={20} />, title: "Secure Architecture", desc: "Enterprise-grade data encryption." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-tight mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-500 font-light">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-slate-800/50 flex items-center gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <Sparkles size={16} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                  Special Launch Offer: Free UI Kit with every project
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Localized Engineering Note */}
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400 opacity-40">
            Engineered in Noida • Deployed Worldwide • UTC +5:30
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTA;