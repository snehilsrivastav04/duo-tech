import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Fingerprint, GitBranch, Settings, Headphones, MailCheck, ArrowRight } from 'lucide-react';

/**
 * Modern Architectural Flowchart
 * Design Philosophy: 
 * - System-Centric: Using a circuit-like path to connect steps.
 * - Progressive Disclosure: Clear numbering and iconography for technical clarity.
 * - Interconnected Layout: Moving from vertical list to an architectural flow.
 */

const ivrSteps = [
  {
    id: 'flow-initiation',
    step: 'Initiation',
    description: 'Customer dials in or receives an automated outbound trigger.',
    icon: <PhoneCall className="w-5 h-5" />,
  },
  {
    id: 'flow-authentication',
    step: 'Auth Phase',
    description: 'Secure validation via biometric PIN or multi-factor tokens.',
    icon: <Fingerprint className="w-5 h-5" />,
  },
  {
    id: 'flow-routing',
    step: 'AI Routing',
    description: 'Dynamic intent analysis routes calls to the optimal path.',
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    id: 'flow-self-service',
    step: 'Self-Service',
    description: 'Automated transactions completed without human overhead.',
    icon: <Settings className="w-5 h-5" />,
  },
  {
    id: 'flow-transfer',
    step: 'Hand-off',
    description: 'Context-aware transfer to specialized live agents.',
    icon: <Headphones className="w-5 h-5" />,
  },
  {
    id: 'flow-postcall',
    step: 'Verification',
    description: 'Automated logging and omnichannel follow-up signals.',
    icon: <MailCheck className="w-5 h-5" />,
  },
];

const Flowchart = () => {
  return (
    <section id="process" className="relative py-40 bg-white dark:bg-[#020617] overflow-hidden">
      {/* Structural Background (Matching Brand Aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-blue-600" />
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-blue-600">
              System Architecture
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
            The IVR <br />
            <span className="italic font-normal text-slate-300 dark:text-slate-700">Lifecycle.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Main Connector Path (Visible on Desktop) */}
          <div className="absolute top-[45px] left-0 right-0 h-[1px] bg-slate-100 dark:bg-slate-800 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-6">
            {ivrSteps.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Visual Node */}
                <div className="relative mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:border-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/10 transition-all duration-500 relative z-10">
                    {item.icon}
                    {/* Node ID Badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
                </div>

                {/* Text Content */}
                <div className="relative">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-3">
                    {item.step}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed pr-4">
                    {item.description}
                  </p>
                </div>

                {/* Desktop Arrow Indicator */}
                {i < ivrSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[45px] -right-3 z-20 text-slate-200 dark:text-slate-800 translate-x-1/2">
                    <ArrowRight size={14} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Summary Footer */}
        <div className="mt-32 p-8 rounded-[2rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(j => (
                <div key={j} className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900" />
              ))}
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Optimization</span>
              <span className="text-xs text-slate-600 dark:text-slate-300">Architecture vetted by lead engineers.</span>
            </div>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col">
              <span className="text-2xl font-light text-blue-600 tabular-nums">1.2s</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Avg. Response</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light text-blue-600 tabular-nums">99%</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowchart;