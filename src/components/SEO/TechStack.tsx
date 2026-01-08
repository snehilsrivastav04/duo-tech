import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom SVG Icons for Precision & Brand Consistency ---
const Icons = {
  GoogleAnalytics: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19.5,19.5H4.5V17.25L10.5,11.25L13.5,14.25L19.5,8.25V19.5Z" opacity=".3" />
      <path d="M4.5,19.5V17.25L10.5,11.25L13.5,14.25L19.5,8.25V5.25L13.5,11.25L10.5,8.25L4.5,14.25V19.5Z" />
    </svg>
  ),
  SearchConsole: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,2L4,5V11C4,16.19 7.41,20.89 12,22C16.59,20.89 20,16.19 20,11V5L12,2M12,11.5A2.5,2.5 0 0,1 14.5,14C14.5,15.38 13.38,16.5 12,16.5A2.5,2.5 0 0,1 9.5,14C9.5,12.62 10.62,11.5 12,11.5Z" />
    </svg>
  ),
  TagManager: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6M11,10V14H13V10H11M11,16V18H13V16H11Z" />
    </svg>
  ),
  DataStudio: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.89,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V12H17V17Z" />
    </svg>
  ),
  LucideSearch: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  LucideTrending: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  LucideTarget: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  )
};

const techStackData = {
  analytics: {
    title: "Google Ecosystem",
    items: [
      { name: "Google Analytics 4", icon: <Icons.GoogleAnalytics />, color: "#F9AB00" },
      { name: "Search Console", icon: <Icons.SearchConsole />, color: "#4285F4" },
      { name: "Tag Manager", icon: <Icons.TagManager />, color: "#246FDB" },
      { name: "Looker Studio", icon: <Icons.DataStudio />, color: "#FBBC04" }
    ]
  },
  intelligence: {
    title: "SEO Intelligence",
    items: [
      { name: "SEMrush Data", icon: <Icons.LucideSearch />, color: "#FF6424" },
      { name: "Ahrefs Insights", icon: <Icons.LucideTrending />, color: "#5A43F0" },
      { name: "Screaming Frog", icon: <Icons.LucideTarget />, color: "#24C281" },
      { name: "Keyword Gap", icon: <Icons.LucideSearch />, color: "#00C3E6" }
    ]
  },
  performance: {
    title: "Vitals & Tracking",
    items: [
      { name: "Rank Tracking", icon: <Icons.LucideTarget />, color: "#EF4444" },
      { name: "Core Web Vitals", icon: <Icons.LucideTrending />, color: "#8B5CF6" },
      { name: "Conversion Ops", icon: <Icons.LucideTarget />, color: "#10B981" },
      { name: "UX Heatmaps", icon: <Icons.LucideSearch />, color: "#3B82F6" }
    ]
  }
};

export const TechStack = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden px-6 bg-[#F8FAFC] dark:bg-slate-950">
      {/* Architectural Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-200/50 dark:border-slate-800/50" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-blue-600 dark:bg-blue-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Technology Infrastructure
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-tight mb-8 text-slate-900 dark:text-slate-100">
            Precision <span className="font-medium">Instruments</span><br />
            for the Digital Landscape
          </h2>
          
          <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            We leverage an elite stack of analytical tools to transform raw data into 
            competitive market dominance.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 overflow-hidden rounded-2xl">
          {Object.entries(techStackData).map(([key, group], idx) => (
            <motion.div
              key={key}
              className="bg-white dark:bg-slate-900 p-8 lg:p-12 relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Category Label */}
              <div className="mb-12">
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 block mb-2">
                  Tier 0{idx + 1}
                </span>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
              </div>

              {/* Tools List */}
              <div className="space-y-6">
                {group.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="flex items-center gap-4 group/item cursor-default"
                  >
                    <div 
                      className="w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-500 group-hover/item:scale-110"
                      style={{ 
                        backgroundColor: `${item.color}15`,
                        color: item.color 
                      }}
                    >
                      <div className="w-5 h-5">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors group-hover/item:text-slate-900 dark:group-hover/item:text-white">
                        {item.name}
                      </p>
                    </div>
                    <div 
                      className="w-1 h-1 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                ))}
              </div>

              {/* Decorative Hover Effect */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-8 h-8 border-t border-r border-slate-200 dark:border-slate-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Data Accuracy", value: "99.9%" },
            { label: "Uptime Sync", value: "24/7" },
            { label: "Total Integrations", value: "64+" },
            { label: "API Latency", value: "<120ms" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="text-center lg:text-left border-l border-slate-200 dark:border-slate-800 pl-6"
            >
              <p className="text-2xl font-light text-slate-900 dark:text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Default export for the preview system to work
const App = () => (
  <div className="min-h-screen font-sans selection:bg-blue-100 dark:selection:bg-blue-900/30">
    <TechStack />
    <footer className="py-12 border-t border-slate-200 dark:border-slate-900 px-6 bg-[#F8FAFC] dark:bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">
          Standard Operating Stack v4.2.0
        </p>
        <div className="flex gap-8">
          {["Security", "API Access", "Docs"].map(link => (
            <a key={link} href="#" className="text-xs text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-widest font-bold">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  </div>
);

export default App;