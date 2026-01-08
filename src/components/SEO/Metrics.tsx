import React from 'react';
import { motion } from 'framer-motion';

// --- Custom Minimalist Icons for Precision Metrics ---
const Icons = {
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
};

const metrics = [
  {
    value: "3-6",
    suffix: "Months",
    label: "To First Page Velocity",
    icon: <Icons.Calendar />,
    color: "blue"
  },
  {
    value: "85",
    suffix: "%+",
    label: "Strategic Partnership Retention",
    icon: <Icons.Heart />,
    color: "rose"
  },
  {
    value: "200",
    suffix: "%+",
    label: "Average Organic Scale",
    icon: <Icons.TrendingUp />,
    color: "emerald"
  },
  {
    value: "24/7",
    suffix: "Live",
    label: "Autonomous Rank Monitoring",
    icon: <Icons.Eye />,
    color: "indigo"
  }
];

export const Metrics = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24 lg:py-32 px-6 font-sans relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 p-10 lg:p-12 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Icon Header */}
                <div className="mb-12 flex justify-between items-start">
                  <div className={`w-10 h-10 text-slate-400 group-hover:text-${metric.color}-500 transition-colors duration-500`}>
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-300 dark:text-slate-600">
                    KPI_0{i + 1}
                  </span>
                </div>

                {/* Metric Value */}
                <div className="mb-4 flex items-baseline gap-1">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="text-5xl lg:text-6xl font-extralight tracking-tighter text-slate-900 dark:text-white"
                  >
                    {metric.value}
                  </motion.span>
                  <span className="text-xl font-light text-slate-400 dark:text-slate-500">
                    {metric.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-sm font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-auto leading-relaxed">
                  {metric.label}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-8 h-0.5 w-8 bg-slate-100 dark:bg-slate-800 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Context */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6 px-4"
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">
            Performance Verified Data / Q1 2026
          </p>
          <div className="flex gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
              ))}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Trusted by <span className="text-slate-900 dark:text-white">50+ Global Brands</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Default export for the preview system
const App = () => (
  <div className="min-h-screen bg-white">
    <div className="h-20 bg-white" /> {/* Spacer for visual context */}
    <Metrics />
  </div>
);

export default App;