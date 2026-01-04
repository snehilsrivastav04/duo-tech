import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Modern minimalist Hero component
 * Features: 
 * - Neutral palette: Deep blue #0f172a (Dark Mode) and Pure White
 * - Typography-focused: Large, light weights, ample whitespace
 * - Interactive service list with hover-reveal
 */

const heroData = {
  title: "Custom Websites.",
  titleAccent: "Lightning Fast.",
  description: "We orchestrate digital experiences across WordPress, React, Shopify, and Laravel. Minimalist design meets maximum performance.",
  cta: "Get a Free Mockup",
  services: [
    { id: '01', title: 'React Development', desc: 'High-performance web applications built for scale and speed.' },
    { id: '02', title: 'E-commerce Solutions', desc: 'Bespoke Shopify and custom storefronts with seamless checkouts.' },
    { id: '03', title: 'Enterprise CMS', desc: 'Secure, manageable WordPress and Laravel architectures.' },
    { id: '04', title: 'UI/UX Design', desc: 'Pixel-perfect interfaces designed for high conversion and clarity.' },
  ]
};

const StatItem = ({ value, label }) => (
  <div className="flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800 pl-6">
    <span className="text-2xl font-light text-slate-900 dark:text-white leading-none">{value}</span>
    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">{label}</span>
  </div>
);

const Hero = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30 overflow-hidden flex flex-col justify-center">
      
      {/* Structural Background Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-slate-900/50" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-slate-900/50" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-slate-900/50" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-100 dark:bg-slate-900/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[2px] bg-blue-600" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-blue-600 dark:text-blue-400">
                  Digital Architecture
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-10">
                {heroData.title} <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700">{heroData.titleAccent}</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mb-14">
                {heroData.description}
              </p>

              <div className="flex flex-wrap items-center gap-10">
                <button className="group relative flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full transition-all hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
                  <span className="font-medium tracking-tight">{heroData.cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <div className="flex gap-10">
                  <StatItem value="95+" label="Lighthouse" />
                  <StatItem value="2.5s" label="Load" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Service List */}
          <div className="lg:col-span-5 pt-4">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-0 border-t border-slate-100 dark:border-slate-800"
            >
              {heroData.services.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  className="group relative border-b border-slate-100 dark:border-slate-800 py-8 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-8">
                      <span className="text-[10px] font-mono text-slate-400 tabular-nums">({service.id})</span>
                      <h3 className="text-xl font-light text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="overflow-hidden w-6 h-6 flex items-center justify-center">
                      <motion.div
                        animate={{ x: activeService === service.id ? 0 : -20, opacity: activeService === service.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 pl-14 text-base text-slate-500 dark:text-slate-400 max-w-xs font-light leading-relaxed">
                          {service.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 -z-10" />
                </div>
              ))}
            </motion.div>

            {/* Trusted Badge */}
            <div className="mt-16 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Client Trust</span>
                <span className="text-xs text-slate-500">240+ Delivered Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edge Gradient Finish */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#020617] to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;