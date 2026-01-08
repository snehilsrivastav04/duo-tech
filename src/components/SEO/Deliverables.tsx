import React from 'react';
import { motion } from 'framer-motion';

const deliverables = [
  {
    id: "DLV-001",
    title: "Comprehensive SEO Audit",
    desc: "A deep-dive technical health check identifying critical vulnerabilities and infrastructure gaps.",
    tag: "Technical",
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "DLV-002",
    title: "Custom Strategy Document",
    desc: "Your bespoke roadmap for organic dominance, tailored to your specific market authority goals.",
    tag: "Strategic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "DLV-003",
    title: "Keyword Intelligence",
    desc: "Granular research targeting high-intent, low-competition opportunities across the search landscape.",
    tag: "Intelligence",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "DLV-004",
    title: "Performance Analytics",
    desc: "Transparent, ROI-focused reporting with actionable growth data and multi-channel attribution.",
    tag: "Reporting",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  }
];

const Deliverables = () => {
  return (
    <section className="relative py-32 lg:py-48 bg-white dark:bg-slate-950 overflow-hidden px-6 font-sans">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 dark:border-slate-900" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <pattern id="deliverables-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#deliverables-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 lg:mb-32 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
              Tangible Assets
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-extralight tracking-tight leading-[1.05] text-slate-900 dark:text-white mb-8">
            Precision <span className="font-normal italic text-slate-700 dark:text-slate-300">Deliverables</span><br />
            & Strategic Output
          </h2>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Eliminating ambiguity through data-backed assets. Every engagement produces a core set of 
            technical documents designed for execution and scale.
          </p>
        </motion.div>

        {/* Deliverables Grid - No Icons, Pure Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none">
          {deliverables.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-900 p-8 lg:p-14 relative flex flex-col justify-between min-h-[500px]"
            >
              <div>
                <div className="flex justify-between items-baseline mb-12">
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.5em] uppercase">
                    {item.id}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300 dark:text-slate-600">
                    Type // {item.tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-light tracking-tighter text-slate-900 dark:text-white mb-6 group-hover:italic transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-sm text-lg">
                  {item.desc}
                </p>
              </div>

              {/* Asset Preview Container */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Minimal Overlay Grid */}
                <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none z-20">
                  <svg width="100%" height="100%">
                    <pattern id={`img-grid-${i}`} width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#img-grid-${i})`} />
                  </svg>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[8px] font-bold tracking-widest uppercase text-slate-900 dark:text-white border border-white/20">
                     Active_Asset
                   </div>
                </div>
              </div>

              {/* Interactive Line-Base Footer */}
              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-blue-600" />
                  <div className="w-12 h-px bg-slate-200 dark:bg-slate-800 my-auto" />
                </div>
                <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-[0.3em] cursor-pointer">
                  Request Documentation →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer System Meta */}
      <div className="mt-32 border-t border-slate-100 dark:border-slate-900 max-w-7xl mx-auto pt-8 flex justify-between items-center opacity-30">
        <p className="text-[9px] font-bold tracking-[0.5em] text-slate-400 uppercase font-mono">Output_Hash: 882x_SEA</p>
        <div className="flex gap-6 items-center">
          <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Protocol 4.2.0</div>
          <div className="w-2 h-2 rounded-full border border-slate-300 dark:border-slate-700" />
        </div>
      </div>
    </section>
  );
};

export default Deliverables;