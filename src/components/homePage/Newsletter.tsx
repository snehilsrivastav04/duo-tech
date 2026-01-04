import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck, Check } from 'lucide-react';

// Mock UI Component to maintain consistency with the rest of the site
const Container = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative flex items-center border-b border-gray-200 dark:border-gray-800 focus-within:border-blue-600 dark:focus-within:border-blue-400 transition-colors duration-500 py-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email address"
            required
            className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 py-4 px-2 focus:outline-none font-light tracking-tight text-lg"
            aria-label="Email address"
            disabled={status === 'success'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="flex-shrink-0 ml-4 p-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 disabled:opacity-50"
            aria-label="Subscribe"
          >
            {status === 'loading' ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full"
              />
            ) : status === 'success' ? (
              <Check className="w-5 h-5 text-green-500" />
            ) : (
              <ArrowRight className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-full left-0 mt-4 text-sm font-medium text-green-600 dark:text-green-400"
            >
              Subscription confirmed. Welcome to the circle.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-full left-0 mt-4 text-sm font-medium text-red-500"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
      
      <p className="mt-16 text-[11px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-600">
        Strict privacy protocols. Read our{' '}
        <a href="#" className="text-gray-900 dark:text-white underline underline-offset-4 hover:text-blue-600 transition-colors">
          Privacy Policy
        </a>
      </p>
    </div>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <Container>
        <div className="relative border border-gray-100 dark:border-gray-900 bg-gray-50/30 dark:bg-gray-900/10 p-8 md:p-20 overflow-hidden rounded-sm">
          {/* Subtle Grid Accent */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="newsletter-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#newsletter-grid)" />
            </svg>
          </div>

          {/* Geometric Corner Accent */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-gray-200 dark:border-gray-800" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side: Editorial Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-10"
            >
              <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-blue-600 mb-6 block">
                  Communication
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                  Curated <span className="font-medium italic">intelligence</span>.
                </h2>
              </div>

              <div className="max-w-md space-y-6">
                <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                  Join our technical circle. We deliver high-signal updates on infrastructure architecture and product evolution. No noise, just the core.
                </p>
                
                <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-600 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800" />
                    ))}
                  </div>
                  <span className="text-xs font-medium tracking-wide">12k+ Engineers Subscribed</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Minimalist Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 h-full flex flex-col justify-center"
            >
              <div className="relative p-1">
                <div className="flex items-center space-x-3 mb-12 text-gray-400 dark:text-gray-500">
                  <Mail size={18} strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium">Weekly Dispatch</span>
                </div>
                
                <NewsletterForm />
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-3 opacity-20">
            <ShieldCheck size={16} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Secured Transmission</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;