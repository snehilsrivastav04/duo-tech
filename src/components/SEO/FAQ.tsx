import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Minimalist Icons for a Tactile Feel ---
const Icons = {
  Plus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Message: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
};

const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "Sustainable SEO is an investment in digital equity. While technical indexing improvements often surface within 30-60 days, significant organic authority typically matures between 3-6 months. We prioritize 'Quick Wins' early on to fuel long-term momentum."
  },
  {
    question: "Do you work with businesses in competitive industries?",
    answer: "Exclusively. Saturated markets are where our technical precision shines. We move beyond broad keywords to identify high-intent 'content gaps' and technical vulnerabilities in your competitors that generic agencies overlook."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We move past 'Vanity Metrics.' While rankings matter, we focus on organic conversion value, customer acquisition cost reduction, and total share of voice. You receive a live data dashboard, not just a static PDF."
  },
  {
    question: "What's included in your SEO packages?",
    answer: "A full-spectrum operational framework: Technical hygiene audits, semantic content architecture, high-authority link acquisition, and Core Web Vitals optimization. Every strategy is custom-built for your specific business goals."
  },
  {
    question: "Do you provide content writing services?",
    answer: "We provide SEO-engineered content. Our writers collaborate with technical analysts to ensure every piece satisfies both the user's intent and the search engine's algorithm, blending readability with semantic richness."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 lg:py-48 bg-white dark:bg-slate-950 overflow-hidden px-6">
      {/* Architectural Background Layout */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-slate-100 dark:border-slate-900" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <svg width="100%" height="100%">
            <pattern id="faq-dot-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#faq-dot-grid)" />
          </svg>
        </div>
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Sidebar / Conversational Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
                  Radical Transparency
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extralight tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-8">
                Common <span className="font-normal italic text-slate-700 dark:text-slate-300">Inquiries</span> & <br />Expert Insights
              </h2>

              <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12">
                We believe the best partnerships are built on clarity. Here is how we navigate the complexities of modern search.
              </p>

              {/* Humanized Expert Card */}
              <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6 shadow-sm shadow-slate-200/50">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 shadow-sm border border-slate-200 dark:border-slate-700">
                  <div className="w-7 h-7"><Icons.User /></div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Strategist_Active</p>
                  </div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Direct Consultation Available</p>
                  <a href="/contact" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-2 inline-block hover:underline">Connect Now →</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ List: High-Focus Interaction */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative rounded-[2rem] transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-slate-900 dark:bg-white shadow-2xl scale-[1.02]' 
                    : 'bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-100 dark:border-slate-800'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                  className="w-full text-left p-8 md:p-12 flex items-center justify-between gap-6"
                >
                  <span className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-500 ${
                    activeIndex === index ? 'text-white dark:text-slate-900' : 'text-slate-900 dark:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                    activeIndex === index 
                      ? 'border-white/20 dark:border-slate-200 bg-white/10 dark:bg-slate-100 rotate-45' 
                      : 'border-slate-200 dark:border-slate-700'
                  }`}>
                    <div className={`w-5 h-5 ${activeIndex === index ? 'text-white dark:text-slate-900' : 'text-slate-400'}`}>
                      <Icons.Plus />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 md:px-12 pb-12">
                        <div className={`h-px w-full mb-10 ${activeIndex === index ? 'bg-white/10 dark:bg-slate-100' : 'bg-slate-100'}`} />
                        <p className={`text-lg md:text-xl leading-relaxed font-light ${
                          activeIndex === index ? 'text-slate-300 dark:text-slate-500' : 'text-slate-500'
                        }`}>
                          {faq.answer}
                        </p>
                        
                        <div className="mt-10 flex items-center gap-4">
                           <div className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] ${
                             activeIndex === index ? 'bg-white/10 dark:bg-slate-100 text-blue-400 dark:text-blue-600' : 'bg-slate-100'
                           }`}>
                             Protocol Verified
                           </div>
                           <div className={`w-1.5 h-1.5 rounded-full ${activeIndex === index ? 'bg-white/20 dark:bg-slate-200' : 'bg-slate-200'}`} />
                           <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${activeIndex === index ? 'text-white/40 dark:text-slate-400' : 'text-slate-300'}`}>
                             SEO_INTELLIGENCE_04
                           </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Systematic Footer Decor */}
      <div className="mt-32 border-t border-slate-100 dark:border-slate-900 max-w-7xl mx-auto pt-8 flex justify-between items-center opacity-40">
        <p className="text-[9px] font-bold tracking-[0.5em] text-slate-400 uppercase">Knowledge_Base_Sync_v4.2</p>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;