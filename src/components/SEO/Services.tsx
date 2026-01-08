import React from 'react';
import { motion } from 'framer-motion';

// --- Custom Minimalist Icons ---
const Icons = {
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
  )
};

const services = [
  {
    title: "Technical SEO",
    description: "The architectural foundation of your digital presence. We optimize for speed, crawlability, and indexing.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366d7a?q=80&w=800&auto=format&fit=crop",
    features: ["Core Web Vitals", "Site Architecture", "Schema Markup"],
    accent: "blue"
  },
  {
    title: "Content Strategy",
    description: "Data-led editorial planning that aligns user intent with commercial objectives and authority.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
    features: ["Keyword Clusters", "Topic Authority", "Content Audits"],
    accent: "emerald"
  },
  {
    title: "On-Page SEO",
    description: "Precise calibration of page elements to maximize topical relevance and user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    features: ["UX Alignment", "Internal Linking", "Meta Calibration"],
    accent: "violet"
  },
  {
    title: "Local Dominance",
    description: "Strategic placement within geographical search results and localized map ecosystems.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    features: ["GMB Optimization", "Local Citations", "Review Systems"],
    accent: "rose"
  },
  {
    title: "E-commerce Growth",
    description: "Scaling product visibility through specialized schema and shopping feed engineering.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    features: ["Product Schema", "Feed Optimization", "Crawl Budgeting"],
    accent: "amber"
  },
  {
    title: "Intelligence Ops",
    description: "Custom attribution modeling and real-time performance visualization for better ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366d7a?q=80&w=800&auto=format&fit=crop",
    features: ["Custom Dashboards", "ROI Attribution", "Predictive Analytics"],
    accent: "cyan"
  }
];

export const Services = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-24 lg:py-40 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-slate-100 dark:border-slate-900 pb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600 dark:text-blue-400 mb-6">
                Specialized Solutions
              </p>
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Comprehensive <br />
                <span className="font-normal italic text-slate-800 dark:text-slate-200">SEO Ecosystem</span>
              </h2>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-slate-500 dark:text-slate-400 font-light text-lg leading-relaxed"
          >
            End-to-end performance marketing built on technical excellence and data-driven strategy.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <div className="w-5 h-5 text-slate-900 dark:text-white">
                    <Icons.ArrowUpRight />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-2 h-2 rounded-full bg-${service.accent}-500`} />
                  <h3 className="text-2xl font-light tracking-tight text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400">
                        <Icons.Check />
                      </div>
                      <span className="font-medium tracking-tight opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-slate-100 dark:border-slate-900 text-center"
        >
          <button className="group relative text-sm font-bold uppercase tracking-[0.3em] text-slate-900 dark:text-white transition-all hover:tracking-[0.4em]">
            View Methodology
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Preview wrapper
const App = () => (
  <div className="min-h-screen bg-white">
    <Services />
  </div>
);

export default App;