import React from 'react';
import { motion } from 'framer-motion';

// --- Custom Minimalist Icons for Process Steps ---
const Icons = {
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Layers: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Pen: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l5 5" />
    </svg>
  ),
  Activity: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  BarChart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
};

const processSteps = [
  {
    id: "01",
    title: "Discovery & Audit",
    description: "Deep-dive analysis of technical infrastructure and market positioning to identify high-impact opportunities.",
    icon: <Icons.Search />,
    color: "blue"
  },
  {
    id: "02",
    title: "Strategy Architecture",
    description: "Developing a custom SEO roadmap that aligns your technical needs with commercial growth targets.",
    icon: <Icons.Target />,
    color: "indigo"
  },
  {
    id: "03",
    title: "Precision Implementation",
    description: "Executing technical resolutions and architectural optimizations to ensure peak search engine visibility.",
    icon: <Icons.Layers />,
    color: "violet"
  },
  {
    id: "04",
    title: "Authority Content",
    description: "Crafting semantic-rich content that establishes your brand as a primary information leader in your niche.",
    icon: <Icons.Pen />,
    color: "emerald"
  },
  {
    id: "05",
    title: "Iterative Optimization",
    description: "Continuous monitoring and dynamic adjustments to maintain performance amidst algorithm shifts.",
    icon: <Icons.Activity />,
    color: "rose"
  },
  {
    id: "06",
    title: "Intelligence Reporting",
    description: "Advanced data visualization and attribution modeling to measure true ROI and business impact.",
    icon: <Icons.BarChart />,
    color: "cyan"
  }
];

export const Process = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-24 lg:py-40 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-slate-100 dark:border-slate-900 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400 dark:text-slate-500 mb-6">
                Our Methodology
              </p>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Operational <br />
                <span className="font-normal italic text-slate-800 dark:text-slate-200">Excellence</span>
              </h2>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-slate-500 dark:text-slate-400 font-light text-lg leading-relaxed"
          >
            A systematic, data-driven approach to scaling organic growth and market authority.
          </motion.p>
        </div>

        {/* Vertical Process List */}
        <div className="relative">
          {/* Central Line - Decorative */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-900 hidden lg:block" />

          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative grid grid-cols-1 lg:grid-cols-[120px_1fr_400px] gap-8 items-start"
              >
                {/* ID and Numbering */}
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-full border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-center text-xs font-bold tracking-tighter text-slate-900 dark:text-white relative z-10 transition-colors duration-500 group-hover:border-${step.color}-500 group-hover:bg-${step.color}-50 dark:group-hover:bg-${step.color}-900/10`}>
                    {step.id}
                  </div>
                </div>

                {/* Content Side */}
                <div className="pt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 text-slate-300 dark:text-slate-700 transition-colors duration-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {step.icon}
                    </div>
                    <h3 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-slate-500 dark:text-slate-400 font-light text-xl leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Accent (Right Side) */}
                <div className="hidden lg:flex items-center justify-end pt-4">
                  <div className="w-full h-px bg-slate-50 dark:bg-slate-900 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors duration-500" />
                  <div className="pl-8 text-[10px] font-bold tracking-widest uppercase text-slate-300 dark:text-slate-700 transition-colors duration-500 group-hover:text-blue-600">
                    Phase_{step.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
          
          <h4 className="text-3xl md:text-5xl font-extralight tracking-tight text-slate-900 dark:text-white mb-8 relative z-10">
            Ready to scale your <span className="font-normal italic">visibility?</span>
          </h4>
          
          {/* Linked to /contact */}
          <a 
            href="/contact"
            className="inline-block relative z-10 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:px-14 hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            Consult our Strategists
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Default export for the preview system
const App = () => (
  <div className="min-h-screen bg-white">
    <Process />
  </div>
);

export default App;