import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Headphones, Mic2, Sparkles, Send } from 'lucide-react';

/**
 * Modern minimalist IVR Hero component
 * Design Philosophy: 
 * - Architectural Depth: Utilizing the established line grid system
 * - Technical Narrative: Combining high-end telephony imagery with engineering-focused overlays
 * - High Contrast: Deep slate backgrounds with electric cyan highlights
 */

const ivrData = {
  hero: {
    title: 'Intelligent Voice Response Systems',
    subtitle: 'Powerful, scalable, and customizable IVR architectures engineered to enhance customer experience and operational efficiency.',
    cta: 'Get Started with IVR',
    demo: 'Schedule Demo',
    image: 'https://images.unsplash.com/photo-1516387933901-8266440cda54?q=80&w=2000&auto=format&fit=crop',
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden pt-20">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-900 dark:bg-white" />
      </div>

      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ivrData.hero.image} 
          alt="IVR Technology"
          className="w-full h-full object-cover opacity-30 dark:opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-[#020617] dark:via-[#020617]/90 dark:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-cyan-500" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-cyan-600 dark:text-cyan-400">
                  Enterprise-Grade Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95] mb-8">
                Architecting <br />
                <span className="italic font-normal text-slate-400 dark:text-slate-700 text-4xl md:text-7xl">Conversational Flow.</span>
              </h1>
              
              <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mb-12 border-l border-slate-200 dark:border-slate-800 pl-8">
                {ivrData.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact"
                  className="group px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-900/20"
                >
                  {ivrData.hero.cta}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact"
                  className="group px-10 py-5 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                >
                  {ivrData.hero.demo}
                  <Headphones size={18} />
                </a>
                {/* Secondary Direct Contact Button */}
                <a 
                  href="/contact"
                  className="group px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300"
                >
                  Contact Us
                  <Send size={16} className="group-hover:-rotate-12 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Features / Stats */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="space-y-6">
              {[
                { icon: <PhoneCall size={18} />, label: "99.99% Uptime SLA", sub: "Redundant node routing" },
                { icon: <Mic2 size={18} />, label: "Natural Language Processing", sub: "Next-gen voice recognition" },
                { icon: <Sparkles size={18} />, label: "AI Auto-Response", sub: "Automated intent detection" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-slate-800/50 rounded-2xl backdrop-blur-sm group hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">{stat.label}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-light">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">(CORE_ENGINE_V2.0)</span>
              <div className="flex gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Infrastructure</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Vertical Title Decoration */}
      <div className="absolute right-12 bottom-12 hidden xl:block">
        <span className="text-[10px] font-bold uppercase tracking-[1em] text-slate-300 dark:text-slate-800 [writing-mode:vertical-lr]">
          TELEPHONY • ARCHITECTURE
        </span>
      </div>

    </section>
  );
};

export default Hero;