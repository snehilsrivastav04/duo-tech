import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Book, CreditCard, Users, MapPin, ArrowUpRight } from 'lucide-react';

/**
 * Modern minimalist Industries component
 * Design Philosophy: 
 * - Visual Narrative: Combining high-quality industry imagery with technical overlays
 * - Structural Consistency: Using the established grid and line system
 * - Indian Hub Branding: Subtle reinforcement of global delivery standards
 */

const industriesData = [
  { 
    name: "E-commerce", 
    icon: <ShoppingCart size={20} />, 
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
    tag: "Retail Tech"
  },
  { 
    name: "Healthcare", 
    icon: <Heart size={20} />, 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
    tag: "MedTech"
  },
  { 
    name: "Education", 
    icon: <Book size={20} />, 
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    tag: "EdTech"
  },
  { 
    name: "Finance", 
    icon: <CreditCard size={20} />, 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tag: "FinTech"
  },
  { 
    name: "Social", 
    icon: <Users size={20} />, 
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
    tag: "Connect"
  },
  { 
    name: "Travel", 
    icon: <MapPin size={20} />, 
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
    tag: "Logistics"
  }
];

const Industries = () => {
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
                  Domain Expertise
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Sectors we <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">transform.</span>
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
              Tailored Android solutions architected for high-compliance and high-scale business environments across the globe.
            </motion.p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden">
          {industriesData.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden bg-white dark:bg-[#020617] transition-all duration-700"
            >
              {/* Industry Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60 grayscale group-hover:grayscale-0"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#020617] dark:via-[#020617]/90 dark:to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold tracking-widest">(0{i + 1})</span>
                    <div className="p-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-xl text-slate-900 dark:text-white border border-white/20">
                      {industry.icon}
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-2 block">{industry.tag}</span>
                  <h3 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform">
                    {industry.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-12 h-[1px] bg-slate-200 dark:bg-slate-800 group-hover:w-full transition-all duration-700" />
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all ml-4 whitespace-nowrap">
                    View Case Studies <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Decorative Line on Hover */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Note */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between p-10 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl opacity-60">
          <div className="flex items-center gap-6 mb-6 lg:mb-0">
             <div className="text-blue-600 dark:text-blue-400">
                <MapPin size={24} />
             </div>
             <p className="text-xs tracking-[0.2em] font-bold uppercase text-slate-500 max-w-sm">
                Engineering hubs in India serving highly regulated markets in USA, EU, and APAC.
             </p>
          </div>
          <div className="flex gap-8 grayscale">
             <span className="text-[9px] font-bold tracking-[0.3em] uppercase">ISO 27001</span>
             <span className="text-[9px] font-bold tracking-[0.3em] uppercase">HIPAA Ready</span>
             <span className="text-[9px] font-bold tracking-[0.3em] uppercase">PCI Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Industries;