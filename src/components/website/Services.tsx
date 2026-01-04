import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Layout, Database, ShoppingBag, Shield, Cpu } from 'lucide-react';

/**
 * Modern minimalist Services component
 * Design Philosophy: 
 * - Neutral palette: Deep blue #0f172a (Dark Mode) and Pure White
 * - Layout: Structured list with dynamic hover reveals
 * - Typography: Light weights with high-contrast accents
 */

const servicesData = [
  {
    id: '01',
    icon: <Layout className="w-5 h-5" />,
    title: "UI/UX Design",
    description: "Strategic design thinking focusing on clarity and conversion.",
    features: ["Design Systems", "User Research", "Prototyping"],
    color: "blue"
  },
  {
    id: '02',
    icon: <Code className="w-5 h-5" />,
    title: "Frontend Engineering",
    description: "High-performance React and Next.js applications.",
    features: ["Animation", "Responsive", "SEO Ready"],
    color: "slate"
  },
  {
    id: '03',
    icon: <Database className="w-5 h-5" />,
    title: "Backend & API",
    description: "Scalable server architectures and secure data handling.",
    features: ["Node.js", "GraphQL", "Auth Systems"],
    color: "blue"
  },
  {
    id: '04',
    icon: <ShoppingBag className="w-5 h-5" />,
    title: "E-commerce Solutions",
    description: "Bespoke storefronts optimized for global commerce.",
    features: ["Shopify", "Custom Checkout", "Analytics"],
    color: "slate"
  },
  {
    id: '05',
    icon: <Cpu className="w-5 h-5" />,
    title: "CMS Architecture",
    description: "Empowering your team with intuitive content tools.",
    features: ["WordPress", "Headless CMS", "Tailored UX"],
    color: "blue"
  },
  {
    id: '06',
    icon: <Shield className="w-5 h-5" />,
    title: "Optimization",
    description: "Security hardening and industry-leading performance.",
    features: ["Core Web Vitals", "Security", "Accessibility"],
    color: "slate"
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Geometry (Matches Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-blue-600" />
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-blue-600 dark:text-blue-400">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
              Comprehensive <br />
              <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">Web Solutions.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-500 dark:text-slate-400 font-light max-w-xs leading-relaxed"
          >
            We blend technical precision with aesthetic clarity to deliver digital products that scale.
          </motion.p>
        </div>

        {/* Services List - Refined Grid/List Hybrid */}
        <div className="border-t border-slate-100 dark:border-slate-800">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-slate-100 dark:border-slate-800 py-10 md:py-14 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start relative z-10">
                
                {/* ID and Title */}
                <div className="lg:col-span-4 flex items-center gap-8">
                  <span className="text-[10px] font-mono text-slate-400 tabular-nums">({service.id})</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl md:text-3xl font-light text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <div className="lg:hidden">
                      <p className="text-sm text-slate-500 dark:text-slate-400">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Description - Desktop */}
                <div className="hidden lg:col-span-4 lg:flex items-center">
                  <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>

                {/* Features & Action */}
                <div className="lg:col-span-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {service.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-600 font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <motion.div 
                    animate={{ x: hoveredIndex === index ? 0 : -10, opacity: hoveredIndex === index ? 1 : 0 }}
                    className="hidden lg:block"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </div>
              </div>

              {/* Reveal interaction for desktop description depth */}
              <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-blue-600 transition-colors">
            Explore our process
            <div className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800 transition-all group-hover:w-12 group-hover:bg-blue-600" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;