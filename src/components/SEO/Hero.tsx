import React from 'react';
import { motion } from 'framer-motion';

// --- Custom Minimalist Icons for the Hero Nodes ---
const Icons = {
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Google: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.96-1.9 2.62l2.36 1.84c2.18-2 3.44-4.94 3.44-8.46 0-.58-.06-1.14-.18-1.7h-8.46zM12 21c2.43 0 4.47-.8 5.96-2.18l-2.36-1.84c-.66.44-1.5.7-2.6.7-2 0-3.7-1.35-4.3-3.15l-2.43 1.88C7.77 18.9 9.68 21 12 21z" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
};

const heroData = {
  label: "Performance Search Marketing",
  title: "Dominate Search Rankings with",
  titleAccent: "Expert Precision",
  subtitle: "Data-driven SEO strategies that increase visibility, drive qualified traffic, and boost conversions through technical excellence.",
  features: [
    "Google #1 Ranking Focus",
    "Transparent Reporting",
    "ROI-Driven Strategies"
  ]
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6 overflow-hidden font-sans">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Soft Radial Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4" />
      </div>

      {/* Floating Data Nodes */}
      <div className="absolute inset-0 hidden lg:block overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              y: [0, -40, 0],
              x: [0, 20, 0]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity,
              delay: i * 1.5 
            }}
            className="absolute p-4 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
            style={{ 
              left: `${15 + i * 15}%`, 
              top: `${20 + (i % 3) * 20}%`,
              transform: `scale(${0.8 + (i * 0.1)})`
            }}
          >
            <div className="w-6 h-6 text-slate-400">
              {i % 4 === 0 ? <Icons.Search /> : i % 4 === 1 ? <Icons.TrendingUp /> : i % 4 === 2 ? <Icons.Google /> : <Icons.Globe />}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
                  {heroData.label}
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-extralight tracking-tight leading-[1.05] text-slate-900 dark:text-white mb-8">
                {heroData.title} <br />
                <span className="font-normal italic text-slate-800 dark:text-slate-200">{heroData.titleAccent}</span>
              </h1>

              <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mb-12">
                {heroData.subtitle}
              </p>

              <div className="flex flex-wrap gap-6 mb-16">
                <a href="/contact" className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white shadow-xl shadow-slate-200/50 dark:shadow-none">
                  Get Free Audit
                </a>
                <button className="group px-10 py-5 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-slate-900">
                  Case Studies
                </button>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {heroData.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="relative z-20 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-100 dark:bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-100 dark:bg-slate-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-100 dark:bg-slate-800" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Live_Analytics</span>
                </div>

                <div className="space-y-8">
                  {[
                    { label: "Organic Reach", val: "+217%", color: "emerald", width: "82%" },
                    { label: "Market Authority", val: "94.2", color: "blue", width: "94%" },
                    { label: "Conversion Rate", val: "5.4%", color: "indigo", width: "68%" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                        <span className={`text-xl font-light text-${stat.color}-600 dark:text-${stat.color}-400 tracking-tight`}>{stat.val}</span>
                      </div>
                      <div className="h-1 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: stat.width }}
                          transition={{ duration: 1.5, delay: 1 + i * 0.2 }}
                          className={`h-full bg-${stat.color}-500 rounded-full`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Ranking</p>
                    <p className="text-xl font-light text-slate-900 dark:text-white tracking-tighter">Global #1</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accents */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;