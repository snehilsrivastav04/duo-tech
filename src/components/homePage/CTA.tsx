import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

/**
 * Redesigned CTA Section
 * Focus: Minimalism, Typography, Whitespace, and Sophisticated Geometric Elements.
 * Palette: Deep Blue (#0F172A), Pure White (#FFFFFF), and Soft Gray Neutrals (#F8FAFC).
 */

const services = [
  { id: '01', title: 'Strategic Consulting', description: 'Deep market analysis and operational scaling strategies designed for high-growth ventures.' },
  { id: '02', title: 'Digital Transformation', description: 'Modernizing legacy systems with cloud-native architectures and intuitive interface design.' },
  { id: '03', title: 'Experience Design', description: 'Crafting premium digital touchpoints that resonate with a global, design-conscious audience.' }
];

const CTA = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // Helper for navigation
  const navigateToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative py-32 bg-[#F8FAFC] text-[#0F172A] overflow-hidden">
      {/* Background Decorative Elements - Subtle Grid in Deep Blue */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 60H0V0h60v60zM1 1v58h58V1H1z' fill='%230F172A' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Typography & Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-900/40 mb-8 block">
              The Path Forward
            </span>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-10 text-[#0F172A]">
              Transform your <br />
              <span className="italic font-serif text-blue-800">business</span> today.
            </h2>
            <p className="text-lg text-slate-500 max-w-md mb-12 font-light leading-relaxed">
              We provide the architectural foundation for businesses ready to transition from growth to legacy. 
              Refined, scalable, and uncompromising.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-8">
              <motion.button
                onClick={navigateToContact}
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-lg font-medium border-b-2 border-[#0F172A] pb-1 transition-colors text-[#0F172A]"
              >
                Start the transition
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>
              
              <button 
                onClick={navigateToContact}
                className="text-slate-400 hover:text-[#0F172A] transition-colors text-lg font-light"
              >
                Request a dossier
              </button>
            </div>
          </motion.div>

          {/* Right Column: Linear Service List (Sticky feel) */}
          <div className="space-y-0 border-t border-slate-200">
            {services.map((service) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative border-b border-slate-200 py-8 cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-mono text-blue-900/30">{service.id}</span>
                    <h3 className="text-2xl font-light tracking-tight text-[#0F172A] group-hover:pl-4 transition-all duration-500">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-slate-300 group-hover:text-[#0F172A] transition-colors">
                    {hoveredService === service.id ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                  </div>
                </div>

                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pl-12 pt-4 text-slate-500 max-w-sm font-light leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Background Accent - Pure White */}
                <motion.div 
                  className="absolute inset-0 bg-white -z-10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Accent Decoration */}
        <div className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-12">
              <div className="text-center md:text-left">
                <p className="text-2xl font-light text-[#0F172A]">2.4k+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">Global Partners</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl font-light text-[#0F172A]">98%</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">Retention Rate</p>
              </div>
           </div>
           <p className="text-[10px] uppercase tracking-[0.3em] text-slate-300">
             Est. MMXXIV — All Rights Reserved
           </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
