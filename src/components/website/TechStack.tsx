import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaShopify, FaWordpress, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVuedotjs, SiPython, SiPhp, SiLaravel, SiWebflow, SiWix, SiFirebase, SiCloudflare, SiMongodb } from 'react-icons/si';
import { LayoutTemplate, Terminal, Globe, Server, Database, Cloud, Cpu } from 'lucide-react';

/**
 * Modern minimalist TechStack component
 * Design Philosophy: 
 * - Neutral palette: Deep blue #0f172a and Pure White
 * - Architectural layout: Horizontal categories with light dividers
 * - Colored iconography for better visual recognition
 */

const techStackData = [
  {
    category: "Frontend",
    id: "FE",
    techs: [
      { name: "React", icon: <FaReact className="w-6 h-6" style={{ color: '#61DAFB' }} /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" style={{ color: '#000000' }} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" style={{ color: '#06B6D4' }} /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" style={{ color: '#3178C6' }} /> },
      { name: "Vue.js", icon: <SiVuedotjs className="w-6 h-6" style={{ color: '#4FC08D' }} /> }
    ]
  },
  {
    category: "Backend",
    id: "BE",
    techs: [
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" style={{ color: '#339933' }} /> },
      { name: "Python", icon: <SiPython className="w-6 h-6" style={{ color: '#3776AB' }} /> },
      { name: "PHP", icon: <SiPhp className="w-6 h-6" style={{ color: '#777BB4' }} /> },
      { name: "Laravel", icon: <SiLaravel className="w-6 h-6" style={{ color: '#FF2D20' }} /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" style={{ color: '#47A248' }} /> }
    ]
  },
  {
    category: "Platforms & CMS",
    id: "CMS",
    techs: [
      { name: "WordPress", icon: <FaWordpress className="w-6 h-6" style={{ color: '#21759B' }} /> },
      { name: "Shopify", icon: <FaShopify className="w-6 h-6" style={{ color: '#7AB55C' }} /> },
      { name: "Webflow", icon: <SiWebflow className="w-6 h-6" style={{ color: '#4353FF' }} /> },
      { name: "Wix", icon: <SiWix className="w-6 h-6" style={{ color: '#0C6EFC' }} /> },
      { name: "Firebase", icon: <SiFirebase className="w-6 h-6" style={{ color: '#FFCA28' }} /> }
    ]
  },
  {
    category: "Infrastructure",
    id: "INF",
    techs: [
      { name: "Cloudflare", icon: <SiCloudflare className="w-6 h-6" style={{ color: '#F38020' }} /> },
      { name: "Vercel", icon: <SiNextdotjs className="w-6 h-6" style={{ color: '#000000' }} /> },
      { name: "AWS", icon: <Cloud className="w-6 h-6" style={{ color: '#FF9900' }} /> },
      { name: "API Architecture", icon: <Database className="w-6 h-6" style={{ color: '#5282FF' }} /> }
    ]
  }
];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
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
                The Stack
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95] mb-8">
              Engineered with <br />
              <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">Modern Standards.</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl">
              We leverage battle-tested technologies to build solutions that are as stable as they are scalable. No legacy debt, just performance.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack List */}
        <div className="border-t border-slate-100 dark:border-slate-800">
          {techStackData.map((group, index) => (
            <div
              key={group.id}
              onMouseEnter={() => setActiveCategory(group.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group relative border-b border-slate-100 dark:border-slate-800 py-12 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Category Title */}
                <div className="lg:col-span-4 flex items-center gap-6">
                  <span className="text-[10px] font-mono text-slate-400 tabular-nums">({group.id})</span>
                  <h3 className="text-2xl font-light tracking-tight text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>

                {/* Tech Icons Grid */}
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap gap-x-12 gap-y-6 lg:justify-end">
                    {group.techs.map((tech, tIdx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0.6, filter: 'grayscale(20%)' }}
                        animate={{ 
                          opacity: activeCategory === group.id ? 1 : 0.6,
                          filter: activeCategory === group.id ? 'grayscale(0%)' : 'grayscale(20%)',
                          y: activeCategory === group.id ? -2 : 0
                        }}
                        className="flex items-center gap-3 group/item transition-all"
                      >
                        <div className="text-2xl transition-transform group-hover/item:scale-110">
                          {tech.icon}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-600 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Background Finish */}
              <div className="absolute inset-0 bg-slate-50/50 dark:bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Continuous Innovation</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">We update our stack quarterly to ensure peak performance.</p>
            </div>
          </div>
          <div className="flex gap-12">
            <div className="text-center md:text-right">
              <span className="block text-2xl font-light text-slate-900 dark:text-white">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Security Patching</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-2xl font-light text-slate-900 dark:text-white">99+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Performance Scores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;