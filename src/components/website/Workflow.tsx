import React from 'react';
import { motion } from 'framer-motion';
import { Search, LayoutTemplate, PenTool, Code, Cpu, Zap, LifeBuoy } from 'lucide-react';

/**
 * Modern minimalist Workflow component
 * Fix: Updated import from 'motion/react' to 'framer-motion' to resolve build errors.
 * Design Philosophy: 
 * - Linear progression: Vertical flow with structural connecting lines
 * - High-contrast: Slate-900 / Pure White / Electric Blue
 * - Interaction: Progressive reveal on scroll
 */

const workflowData = [
  {
    title: "Discovery",
    description: "Deep dive into project architecture, audience personas, and technical requirements.",
    icon: <Search className="w-5 h-5" />
  },
  {
    title: "Wireframing",
    description: "Structural blueprints focused on user logic and frictionless information architecture.",
    icon: <LayoutTemplate className="w-5 h-5" />
  },
  {
    title: "UI Design",
    description: "High-fidelity digital experiences crafted with precision and brand alignment.",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    title: "Development",
    description: "Translation of design into production-grade, optimized code structures.",
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "Testing",
    description: "Rigorous QA across browsers and devices to ensure absolute stability.",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Launch",
    description: "Seamless deployment with performance tuning and CDN optimization.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Support",
    description: "Active monitoring and iterative updates to ensure long-term scalability.",
    icon: <LifeBuoy className="w-5 h-5" />
  }
];

const Workflow = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
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
                  The Method
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                A systematic <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">path to launch.</span>
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
              Building excellence requires a disciplined sequence. We leave nothing to chance.
            </motion.p>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-slate-100 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {workflowData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
              >
                {/* Step Number & Icon */}
                <div className="md:col-span-1 relative flex md:justify-center">
                  <div className="z-10 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                    {step.icon}
                  </div>
                  {/* Active segment indicator */}
                  <div className="absolute top-12 bottom-[-48px] left-1/2 w-[2px] bg-blue-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 hidden md:block" />
                </div>

                {/* Content */}
                <div className="md:col-span-11 pt-2 md:pl-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 opacity-50">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Conclusion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-900 dark:bg-blue-950/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white"
        >
          <div>
            <h4 className="text-2xl font-light mb-2">Ready to start the process?</h4>
            <p className="text-blue-200/60 font-light">Average project lifecycle: 4-8 weeks.</p>
          </div>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full text-sm font-semibold tracking-wide hover:bg-blue-50 transition-colors">
            Initiate Discovery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;