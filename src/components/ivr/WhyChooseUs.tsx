import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Users, Activity, Globe, Cpu, ArrowUpRight } from 'lucide-react';

const benchmarks = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'High Reliability',
    metric: '99.99%',
    description: 'Guaranteed uptime via our triple-redundant global network nodes.',
    tag: 'AVAILABILITY',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/20'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security Compliance',
    metric: 'SOC2/PCI',
    description: 'Hardened infrastructure meeting global financial and healthcare standards.',
    tag: 'PROTECTION',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/20'
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Deployment Speed',
    metric: '15m',
    description: 'Rapid orchestration with our zero-config infrastructure setup.',
    tag: 'LATENCY',
    color: 'text-amber-500',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/20'
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Dynamic Scaling',
    metric: '∞ Nodes',
    description: 'Auto-scaling clusters that handle burst traffic without throughput loss.',
    tag: 'ELASTICITY',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/5',
    border: 'border-indigo-500/20'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-[#fafafa] dark:bg-[#020617] overflow-hidden">
      {/* Structural Background Detail */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-slate-400">
                System_Benchmarks
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
              Engineered for <br />
              <span className="font-serif italic text-blue-600 dark:text-blue-400">Mission-Critical</span> Performance.
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">
              We don't just route calls; we provide a high-availability infrastructure 
              layer that powers the communication engines of the world's most demanding enterprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benchmarks.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative p-8 rounded-[2rem] border ${item.border} ${item.bg} hover:bg-white dark:hover:bg-slate-900/50 transition-all duration-500`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className={`p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-sm ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">View_Docs</span>
                  <ArrowUpRight size={12} className="text-slate-400" />
                </div>
              </div>

              <div className="space-y-1 mb-6">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{item.tag}</div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">{item.title}</h3>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-light tracking-tighter text-slate-900 dark:text-white">
                  {item.metric}
                </span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Decorative progress bar detail */}
              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${item.color.replace('text', 'bg')}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">OPTIMAL</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Network Visual */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/20 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex -space-x-3 overflow-hidden">
             {[1,2,3,4].map(i => (
               <div key={i} className="inline-block h-10 w-10 rounded-full ring-4 ring-white dark:ring-[#020617] bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                 <Globe size={16} className="text-slate-400" />
               </div>
             ))}
          </div>
          <div className="text-center md:text-left">
            <div className="text-sm font-medium text-slate-900 dark:text-white">Global Edge Presence</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Active nodes across 24 regions for &lt;50ms latency.</div>
          </div>
          <div className="md:ml-auto flex items-center gap-4">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold tracking-widest uppercase">
               <Activity size={12} />
               All Systems Operational
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;