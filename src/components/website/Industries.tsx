import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Cloud, GraduationCap, HeartPulse, Palette, MapPin, ArrowUpRight } from 'lucide-react';

/**
 * Modern minimalist Industries component
 * Design Philosophy: 
 * - Visual Narratives: Using high-quality placeholder images with dark overlays
 * - Architectural Grid: Asymmetric card scaling and clean borders
 * - Subtle Interactivity: Image zoom and reveal on hover
 */

const industriesData = [
  {
    name: "E-commerce",
    description: "High-performance digital storefronts engineered for conversion and global scale.",
    icon: <ShoppingCart className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    slug: "01"
  },
  {
    name: "SaaS & Tech",
    description: "Complex web applications and intuitive dashboards for modern software ecosystems.",
    icon: <Cloud className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1518433278983-5150a50199b9?auto=format&fit=crop&q=80&w=800",
    slug: "02"
  },
  {
    name: "Education",
    description: "Advanced learning management systems and collaborative digital classrooms.",
    icon: <GraduationCap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1523050338691-c1e53d076efd?auto=format&fit=crop&q=80&w=800",
    slug: "03"
  },
  {
    name: "Healthcare",
    description: "Secure, compliant, and patient-centric platforms designed for the medical sector.",
    icon: <HeartPulse className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1576091160550-2173bdd99802?auto=format&fit=crop&q=80&w=800",
    slug: "04"
  },
  {
    name: "Creative Portfolios",
    description: "Immersive digital galleries that showcase work with uncompromising visual fidelity.",
    icon: <Palette className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    slug: "05"
  },
  {
    name: "Service Industry",
    description: "Strategic digital presences for professional service providers and local brands.",
    icon: <MapPin className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    slug: "06"
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
                  Specialization
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Solutions across <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">diverse verticals.</span>
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
              We apply our technical rigor to solve industry-specific challenges through customized architecture.
            </motion.p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
          {industriesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] bg-white dark:bg-[#020617] overflow-hidden cursor-pointer"
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110 opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#020617] dark:via-[#020617]/80 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600">({item.slug})</span>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg text-slate-400 group-hover:text-blue-600 transition-colors duration-500">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-light tracking-tight text-slate-900 dark:text-white mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 max-w-[80%]">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  View Case Study
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Hover Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities Banner */}
        <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-12 flex flex-wrap gap-x-16 gap-y-8 justify-center opacity-40">
          {['HIPAA Compliant', 'PCI DSS Ready', 'GDPR Unified', 'ISO 27001 Stacks'].map((spec) => (
            <span key={spec} className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 dark:text-slate-400">
              {spec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;