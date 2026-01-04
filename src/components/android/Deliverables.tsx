import React from 'react';
import { motion } from 'framer-motion';
import { Check, Code2, Layout, FileJson, PenTool, LifeBuoy, UploadCloud } from 'lucide-react';

/**
 * Modern minimalist Deliverables component
 * Design Philosophy: 
 * - Structural Grid: Clean border-based layout with high-contrast typography
 * - Technical Documentation Style: Mono-spaced indexes and clear iconography
 * - Interactive Depth: Subtle hover reveals and border transitions
 */

const deliverablesData = [
  { 
    title: "Full Source Code", 
    desc: "Clean, documented, and production-ready repository access.",
    icon: <Code2 size={20} /> 
  },
  { 
    title: "Admin Dashboard", 
    desc: "Internal tooling for seamless content and user management.",
    icon: <Layout size={20} /> 
  },
  { 
    title: "API Documentation", 
    desc: "Comprehensive swagger/postman specs for future scaling.",
    icon: <FileJson size={20} /> 
  },
  { 
    title: "Design Assets", 
    desc: "Full Figma architectural files and brand guidelines.",
    icon: <PenTool size={20} /> 
  },
  { 
    title: "Technical Support", 
    desc: "6 months of proactive monitoring and maintenance.",
    icon: <LifeBuoy size={20} /> 
  },
  { 
    title: "Deployment", 
    desc: "Complete Play Store lifecycle and CI/CD setup.",
    icon: <UploadCloud size={20} /> 
  }
];

const Deliverables = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
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
                  Project Assets
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                What you <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">actually receive.</span>
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
              Every engineering cycle concludes with a comprehensive handoff of all technical and creative property.
            </motion.p>
          </div>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
          {deliverablesData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-[#020617] p-10 flex flex-col justify-between h-[320px] hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600">(HANDOFF_0{i + 1})</span>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-slate-400 group-hover:text-blue-600 transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white mb-4 group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Check size={14} />
                Guaranteed Inclusion
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Standards Footer */}
        <div className="mt-16 flex flex-wrap justify-between items-center gap-8 px-4 opacity-50">
          <div className="flex gap-12">
             <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Scalable Code</span>
             <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Full IP Ownership</span>
             <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Performance Audited</span>
          </div>
          <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-800 mx-8 hidden lg:block" />
          <span className="text-[9px] font-mono">REV_2024.V1</span>
        </div>

      </div>
    </section>
  );
};

export default Deliverables;