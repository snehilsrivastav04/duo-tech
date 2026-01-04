import React from 'react';
import { motion } from 'framer-motion';
import { Search, LayoutTemplate, PenTool, Code, Cpu, Zap, LifeBuoy } from 'lucide-react';
import Container from '../ui/Container';

const workflowData = [
  {
    title: "Discovery",
    description: "Deep dive into goals, audience insights, and technical requirements",
    icon: <Search className="w-6 h-6" />,
    step: "01"
  },
  {
    title: "Wireframing",
    description: "Architectural UX flows and information hierarchy mapping",
    icon: <LayoutTemplate className="w-6 h-6" />,
    step: "02"
  },
  {
    title: "UI Design",
    description: "Pixel-perfect visual execution aligned with brand identity",
    icon: <PenTool className="w-6 h-6" />,
    step: "03"
  },
  {
    title: "Development",
    description: "Engineered with clean, scalable, and maintainable code architecture",
    icon: <Code className="w-6 h-6" />,
    step: "04"
  },
  {
    title: "Testing",
    description: "Comprehensive cross-platform validation and performance auditing",
    icon: <Cpu className="w-6 h-6" />,
    step: "05"
  },
  {
    title: "Launch",
    description: "Strategic deployment with performance optimization protocols",
    icon: <Zap className="w-6 h-6" />,
    step: "06"
  },
  {
    title: "Support",
    description: "Continuous maintenance, updates, and performance monitoring",
    icon: <LifeBuoy className="w-6 h-6" />,
    step: "07"
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-0 top-1/3 bottom-1/3 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute right-0 top-1/3 bottom-1/3 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <Container>
        {/* Header Section - Matching TechStack style */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-blue-600" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-blue-600 dark:text-blue-400">
                Methodology
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95] mb-8">
              Systematic <br />
              <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">Approach.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
              A transparent, phased methodology designed to deliver exceptional results at every stage. No surprises, just progress.
            </p>
          </motion.div>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-0 border-t border-slate-100 dark:border-slate-800">
          {workflowData.map((step, index) => (
            <div
              key={step.step}
              className="group relative border-r border-b border-slate-100 dark:border-slate-800 p-8 transition-all hover:bg-slate-50/50 dark:hover:bg-white/[0.02]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10"
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] font-mono text-slate-400 tabular-nums">({step.step})</span>
                  <div className="flex-1 h-[1px] bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors" />
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 group-hover:border-blue-300 dark:group-hover:border-blue-800 transition-colors">
                  <div className="text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-light tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < workflowData.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-slate-200 dark:bg-slate-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors" />
                )}
              </motion.div>

              {/* Background Accent on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/30 group-hover:to-blue-50/10 dark:group-hover:from-blue-900/5 dark:group-hover:to-blue-900/0 transition-all duration-500 -z-10 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Closing Note - Matching TechStack style */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Iterative Refinement</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">Each phase includes client review and feedback integration.</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="text-center md:text-right">
              <span className="block text-2xl font-light text-slate-900 dark:text-white">7</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Phases</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-2xl font-light text-slate-900 dark:text-white">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Collaboration</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-2xl font-light text-slate-900 dark:text-white">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Transparency</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;