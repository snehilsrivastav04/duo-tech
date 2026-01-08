import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Custom Minimalist Icons for Consistency ---
const Icons = {
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  MessageSquare: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
};

const FinalCTA = () => {
    const { scrollYProgress } = useScroll();
    // Subtle parallax for the inner content
    const yRange = useTransform(scrollYProgress, [0.8, 1], [0, -40]);

    return (
        <section className="relative py-32 lg:py-48 bg-white dark:bg-slate-950 overflow-hidden px-6">
            {/* Architectural Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Image Background - High Key */}
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
                    alt="Infrastructure" 
                    className="w-full h-full object-cover opacity-[0.03] grayscale"
                />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="cta-grid-light" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#cta-grid-light)" />
                    </svg>
                </div>

                {/* Light Accents - Softer for White Background */}
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-600/10 rounded-full blur-[140px] -translate-y-1/2" />
            </div>

            {/* Floating Technical Elements */}
            <div className="absolute inset-0 hidden lg:block overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute p-4 border border-slate-200 dark:border-white/5 rounded-2xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm"
                        style={{
                            left: `${10 + i * 20}%`,
                            top: `${20 + (i % 2) * 40}%`,
                            scale: 0.8 + i * 0.1
                        }}
                    >
                        <div className="w-6 h-6 text-slate-300 dark:text-slate-600">
                            <Icons.Search />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    style={{ y: yRange }}
                    className="relative bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-24 text-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                    {/* Interior Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-slate-50/50 dark:from-white/[0.05] to-transparent pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <span className="w-8 h-px bg-blue-600 dark:bg-blue-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">
                                Growth Acceleration
                            </span>
                            <span className="w-8 h-px bg-blue-600 dark:bg-blue-500" />
                        </div>

                        <h2 className="text-4xl md:text-7xl font-extralight tracking-tight leading-[1.1] text-slate-900 dark:text-white mb-8">
                            Scale Your <span className="font-normal italic text-slate-700 dark:text-slate-200">Digital Authority</span> <br />
                            Starting Today
                        </h2>

                        <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
                            Deploy our technical SEO framework to transform your search presence 
                            into a measurable competitive advantage.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="group flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white active:scale-95 shadow-xl shadow-slate-200/50 dark:shadow-none"
                            >
                                Get SEO Proposal
                                <div className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                    <Icons.ArrowRight />
                                </div>
                            </button>
                            
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="group flex items-center gap-4 px-10 py-5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/5 active:scale-95"
                            >
                                <div className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors">
                                    <Icons.MessageSquare />
                                </div>
                                Consultation
                            </button>
                        </div>
                    </motion.div>

                    {/* Version Tag */}
                    <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 opacity-50">
                        <p className="text-[9px] font-bold tracking-[0.5em] text-slate-400 dark:text-white uppercase">
                            Operational_Protocol_v4.2
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;