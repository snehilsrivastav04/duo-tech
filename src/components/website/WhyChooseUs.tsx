import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Zap, Smartphone, Search, GitPullRequest, LifeBuoy } from 'lucide-react';

/**
 * Modern minimalist WhyChooseUs component
 * Design Philosophy: 
 * - Neutral palette: Pure White and Deep Blue accents
 * - Layout: Asymmetric grid with focus on whitespace
 * - Typography: Light weights, editorial spacing
 */

const whyChooseUsData = [
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Strategic Design",
    description: "Every pixel serves a purpose in our conversion-focused, logic-driven designs."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Blazing Fast",
    description: "Performance is a feature. We deliver load times under 2.5s via optimized core code."
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Fully Responsive",
    description: "Fluid architectures that adapt seamlessly across every possible screen resolution."
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO-Ready",
    description: "Semantic structures built from the ground up to ensure maximum search visibility."
  },
  {
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "Scalable Code",
    description: "Modular foundations designed to evolve alongside your business growth."
  },
  {
    icon: <LifeBuoy className="w-5 h-5" />,
    title: "Dedicated Support",
    description: "Direct access to our engineering team for specialized, human assistance."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-slate-50/50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines (Consistent with Services/Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-blue-600" />
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-blue-600 dark:text-blue-400">
                  The Edge
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Why partner <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">with us?</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed border-l border-slate-200 dark:border-slate-800 pl-6"
            >
              We prioritize longevity and performance over fleeting trends. Our work is built to endure.
            </motion.p>
          </div>
        </div>

        {/* Feature Grid - Minimalist approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {whyChooseUsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col items-start"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 scale-0 group-hover:scale-110 transition-transform duration-500 rounded-full -z-10" />
                <div className="text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:-translate-y-1">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-light text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm max-w-[260px]">
                {item.description}
              </p>
              
              <div className="mt-6 w-4 h-[1px] bg-slate-200 dark:bg-slate-800 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Closing Visual / Metric */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-xs uppercase tracking-[0.4em] font-bold text-slate-300 dark:text-slate-700">
            Engineered for growth
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-light text-slate-900 dark:text-white">99.9%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Uptime Stability</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-4xl font-light text-slate-900 dark:text-white">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Expert Monitoring</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;