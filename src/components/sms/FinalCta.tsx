import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Globe, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const SERVICES = [
  { id: '01', title: 'Global Carrier Network', desc: 'Direct routes to 200+ countries with 99.99% uptime.' },
  { id: '02', title: 'Enterprise Security', desc: 'ISO 27001 certified with end-to-end data encryption.' },
  { id: '03', title: 'Real-time Analytics', desc: 'Deep insights into delivery rates and user engagement.' },
];

const FinalCta = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="py-32 bg-[#FFFFFF] dark:bg-[#0a0a0a] overflow-hidden">
      <Container>
        <div className="relative">
          {/* Minimalist Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-6"
            >
              Ready to Begin
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1]"
            >
              Scale your reach with <br />
              <span className="italic font-serif text-indigo-950 dark:text-indigo-300">precision.</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Linear Service List (Expand on Hover) */}
            <div className="space-y-0 border-t border-slate-100 dark:border-slate-800">
              {SERVICES.map((service) => (
                <motion.div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative py-8 border-b border-slate-100 dark:border-slate-800 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-xs font-mono text-slate-400">{service.id}</span>
                      <h3 className="text-xl font-light text-slate-800 dark:text-slate-200 group-hover:translate-x-2 transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  
                  <AnimatePresence>
                    {hoveredService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-12 text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Showcase / Action Card */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-slate-50 dark:bg-indigo-950/10 rounded-3xl p-12 relative overflow-hidden group">
                {/* Subtle Geometric Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(#1e1b4b 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} 
                />
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-light text-slate-900 dark:text-white mb-8">
                    Start your 14-day trial
                  </h4>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: <Zap className="w-4 h-4" />, text: "Instant API activation" },
                      { icon: <Globe className="w-4 h-4" />, text: "Global compliance ready" },
                      { icon: <ShieldCheck className="w-4 h-4" />, text: "No credit card required" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                        <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                          {item.icon}
                        </div>
                        <span className="text-sm font-light">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      variant="primary"
                      className="w-full bg-indigo-950 hover:bg-black text-white py-6 rounded-xl transition-all duration-300 shadow-xl shadow-indigo-900/10"
                      onClick={handleContactClick}
                    >
                      Create Free Account
                    </Button>
                    <button 
                      className="text-sm font-medium text-slate-500 hover:text-indigo-950 dark:hover:text-indigo-300 transition-colors py-2"
                      onClick={handleContactClick}
                    >
                      Request a Custom Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCta;