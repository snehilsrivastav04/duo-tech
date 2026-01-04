import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

/**
 * Modern minimalist FAQ component
 * Design Philosophy: 
 * - Structural grid: Clean borders and consistent spacing
 * - Editorial typography: Large headings and light-weight body text
 * - Architectural detail: Subtle line animations and monochromatic palette
 */

const faqsData = [
  {
    question: "What platforms do you work with?",
    answer: "We are platform-agnostic, prioritizing the right tool for the objective. Our expertise ranges from enterprise WordPress and Shopify ecosystems to high-performance custom React/Next.js architectures and robust headless CMS solutions."
  },
  {
    question: "How long does a typical project take?",
    answer: "Our methodology is structured to deliver quality without compromise. A typical high-performance website lifecycle spans 4–8 weeks, while complex, logic-heavy web applications generally require a 3–6 month development window."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes. We offer enterprise-grade managed hosting solutions via AWS and Vercel, combined with proactive maintenance packages that include security patching, performance monitoring, and iterative technical updates."
  },
  {
    question: "Can I update the website myself?",
    answer: "Absolutely. We architect our solutions with the end-user in mind, integrating intuitive content management interfaces that allow your team to manage text, imagery, and structural components without touching a line of code."
  },
  {
    question: "What about SEO and mobile optimization?",
    answer: "These are not 'add-ons' but core technical requirements. Every project we ship features semantic HTML, optimized asset loading for Core Web Vitals, and a fluid, responsive architecture designed for all modern device resolutions."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
                  Information
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Commonly <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">asked questions.</span>
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
              Transparent answers to help you understand our technical standards and project workflows.
            </motion.p>
          </div>
        </div>

        {/* FAQ Grid/Accordion */}
        <div className="border-t border-slate-100 dark:border-slate-800">
          {faqsData.map((faq, index) => (
            <div 
              key={index}
              className="group border-b border-slate-100 dark:border-slate-800"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-10 flex items-start justify-between text-left group-hover:bg-slate-50/50 dark:group-hover:bg-white/[0.01] transition-all duration-300 px-4"
              >
                <div className="flex gap-8 items-start">
                  <span className="text-[10px] font-mono text-slate-400 mt-2 tabular-nums">
                    (0{index + 1})
                  </span>
                  <h3 className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className="mt-2 text-slate-300 dark:text-slate-700 group-hover:text-blue-600 transition-colors">
                  {activeIndex === index ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-12 pl-20 pr-12">
                      <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12 p-12 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Still have questions?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light">Get a personalized consultation for your specific project needs.</p>
            </div>
          </div>
          <button className="px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
            Contact Engineering
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;