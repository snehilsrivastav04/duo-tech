import React from 'react';
import { motion } from 'framer-motion';
import { Check, Cpu, BarChart3, Globe2, ShieldAlert, ArrowUpRight } from 'lucide-react';

/**
 * Modern minimalist Advanced Features component
 * Design Philosophy: 
 * - Architectural Layout: Using 2-column asymmetric grids and vertical line motifs
 * - Visual Narrative: Contextual imagery with high-contrast technical overlays
 * - High-End Aesthetic: Dark slate backgrounds with electric blue/cyan accents
 */

const ivrData = {
  advancedFeatures: [
    {
      title: 'AI-Powered Call Routing',
      tag: 'LOGIC_ENGINE',
      description: 'Our intelligent routing system analyzes caller history and intent to connect them with the most appropriate agent or department.',
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      icon: <Cpu size={20} />,
      benefits: [
        'Reduces misrouted calls by 75%',
        'Learns from historical data',
        'Integrates with CRM systems',
      ],
      id: 'advanced-routing',
    },
    {
      title: 'Real-time Analytics',
      tag: 'DATA_VISUALS',
      description: 'Monitor call center performance with dashboards that update in real-time, showing IVR effectiveness and caller behavior patterns.',
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
      icon: <BarChart3 size={20} />,
      benefits: [
        'Customizable reporting',
        'Identifies IVR bottlenecks',
        'Measures customer satisfaction',
      ],
      id: 'advanced-analytics',
    },
    {
      title: 'Omnichannel Integration',
      tag: 'UNIFIED_SYNC',
      description: 'Connect your IVR with other communication channels for seamless transitions between voice, chat, email, and social media.',
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop",
      icon: <Globe2 size={20} />,
      benefits: [
        'Unified customer journey',
        'Context preservation',
        'First-contact resolution',
      ],
      id: 'advanced-omnichannel',
    },
    {
      title: 'Disaster Recovery',
      tag: 'CORE_SECURITY',
      description: 'Geographically redundant failover systems ensure your IVR remains operational during outages or high-traffic events.',
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      icon: <ShieldAlert size={20} />,
      benefits: [
        'Geographic redundancy',
        'Automatic traffic rerouting',
        'Zero service interruption',
      ],
      id: 'advanced-recovery',
    },
  ],
};

const AdvancedFeatures = () => {
  return (
    <section id="advanced-features" className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
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
                  Infrastructure
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Enterprise <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">Capabilities.</span>
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
              Architected for mission-critical voice operations, our IVR infrastructure supports global scale with sub-millisecond latency.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
          {ivrData.advancedFeatures.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] bg-white dark:bg-[#020617] overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-10 group-hover:opacity-30 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-[#020617] dark:via-[#020617]/90 dark:to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold tracking-widest">(MODULE_0{i + 1})</span>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors border border-slate-100 dark:border-slate-800">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2 block">{feature.tag}</span>
                  <h3 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light max-w-sm mb-6">
                    {feature.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <ul className="grid grid-cols-1 gap-3">
                    {feature.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 font-light">
                        <div className="w-1 h-1 rounded-full bg-blue-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all whitespace-nowrap">
                      Explore Technical Spec <ArrowUpRight size={14} />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                       <Check size={12} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Global Performance Footer */}
        <div className="mt-20 p-12 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-slate-800 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold tracking-widest uppercase">Global Latency Map</h4>
              <p className="text-xs text-slate-500 font-light">All IVR nodes are distributed across major data centers in USA, India, and Germany for sub-20ms routing.</p>
           </div>
           <div className="flex gap-12 grayscale opacity-40">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">T-Mobile</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Twilio</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Vonage</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">MessageBird</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AdvancedFeatures;