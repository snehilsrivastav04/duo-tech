import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  GitBranch, 
  Server, 
  Terminal, 
  Globe2, 
  Users,
  ArrowUpRight
} from 'lucide-react';

// Mock UI Components
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const features = [
  {
    icon: <Zap size={20} />,
    title: 'High-Density Performance',
    description: 'Optimized for sub-millisecond execution with a 99.9% availability commitment.',
    category: 'Speed'
  },
  {
    icon: <Shield size={20} />,
    title: 'Enterprise Security',
    description: 'Advanced encryption standards and global compliance frameworks integrated at the core.',
    category: 'Security'
  },
  {
    icon: <GitBranch size={20} />,
    title: 'Universal Integration',
    description: 'Connect with existing architectural stacks through our refined API and SDK ecosystem.',
    category: 'Connectivity'
  },
  {
    icon: <Server size={20} />,
    title: 'Global Infrastructure',
    description: 'Distributed network across 150+ regions for low-latency localized delivery.',
    category: 'Network'
  }
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA', icon: <Server size={16} /> },
  { value: '2.5B+', label: 'Monthly Requests', icon: <Terminal size={16} /> },
  { value: '150+', label: 'Global Regions', icon: <Globe2 size={16} /> },
  { value: '24/7', label: 'Priority Support', icon: <Users size={16} /> }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <Container>
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 space-y-8 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-6 block">
              Core Capabilities
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Engineering <span className="font-medium italic">excellence</span> <br />
              at scale.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-500 dark:text-gray-400 font-light max-w-sm leading-relaxed"
          >
            A suite of professional tools designed to stabilize and accelerate modern digital infrastructure.
          </motion.p>
        </div>

        {/* Feature Grid - Minimalist Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-950 p-10 flex flex-col justify-between min-h-[320px] hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-all duration-500"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="p-3 border border-gray-100 dark:border-gray-800 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                    {feature.category}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="pt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 cursor-pointer">
                Learn More <ArrowUpRight size={14} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Stats - Refined */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  {stat.icon}
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
                    {stat.label}
                  </span>
                </div>
                <div className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tighter">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Accent Line */}
          <div className="mt-24 flex items-center justify-between opacity-20">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-900 dark:via-white to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;