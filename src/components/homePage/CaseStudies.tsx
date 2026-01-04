import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

// Mock UI Components
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const Button = ({ children, variant = "primary", className = "", icon }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 transition-all duration-300 font-medium tracking-tight rounded-none";
  const variants = {
    primary: "bg-blue-950 text-white hover:bg-blue-900",
    outline: "border border-gray-200 text-gray-900 hover:border-gray-900 dark:border-gray-800 dark:text-white dark:hover:border-gray-400"
  };
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {icon && <span className="ml-3">{icon}</span>}
    </button>
  );
};

const caseStudies = [
  {
    category: 'Architecture',
    title: 'E-commerce Platform Scaling',
    metrics: ['+300% Speed', '99.99% Uptime'],
    description: 'Structural overhaul for a global marketplace to sustain a 10x surge in transactional density.',
    tags: ['Next.js', 'Auto-scaling', 'Edge']
  },
  {
    category: 'Security',
    title: 'Fintech Compliance Solution',
    metrics: ['12 Markets', 'Zero Latency'],
    description: 'Implementing high-fidelity encryption protocols for a pan-European financial services provider.',
    tags: ['Encryption', 'Logistics', 'Security']
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 space-y-8 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-6 block">
              Case Archives
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Operational <span className="font-medium italic">impact</span> <br />
              documented.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 dark:text-gray-400 font-light max-w-xs leading-relaxed"
          >
            An analytical look at how we resolve complex infrastructure challenges for high-growth organizations.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white dark:bg-slate-950 p-10 lg:p-16 flex flex-col justify-between min-h-[500px] hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors duration-500"
            >
              <div className="space-y-12">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-400">
                    Case Study 0{i + 1} // {study.category}
                  </span>
                  <div className="w-10 h-10 border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:bg-blue-950 group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-gray-900 dark:text-white leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-sm">
                    {study.description}
                  </p>
                </div>
              </div>

              <div className="mt-16 space-y-8">
                <div className="flex flex-wrap gap-3">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-3 py-1 border border-gray-100 dark:border-gray-800 text-gray-500 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-12 border-t border-gray-100 dark:border-gray-800 pt-8">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-blue-600 mb-1">{metric.split(' ')[0]}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400">{metric.split(' ')[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-800 mb-12" />
          <Button 
            variant="outline" 
            className="group"
            icon={<Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />}
          >
            Access Full Library
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;