import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Mic, Headphones, MessageSquare, PieChart, ShoppingCart, Check, ShieldCheck, Zap } from 'lucide-react';

/**
 * Modern Architectural Features Section
 * Design Philosophy: 
 * - Sticky Narrative: Left-side content scrolls while right-side imagery remains pinned.
 * - Technical Clarity: Use of monospaced tags, structured benefit lists, and high-fidelity visuals.
 * - Dynamic Highlighting: Active state transitions based on scroll position.
 */

const ivrFeatures = [
  {
    id: 'feature-menus',
    title: 'Multi-level IVR Menus',
    description: 'Create sophisticated call flows with unlimited menu levels and conditional routing based on caller input, time of day, or caller ID.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    icon: <Menu className="w-5 h-5" />,
    benefits: ['Reduce call transfers by 60%', 'Personalized journeys', 'Time-based routing'],
    tag: 'ROUTING_ENGINE'
  },
  {
    id: 'feature-voice',
    title: 'Voice Recognition',
    description: 'Implement natural language processing to understand caller intent without requiring button presses, creating a more natural interaction.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop',
    icon: <Mic className="w-5 h-5" />,
    benefits: ['85% accuracy in commands', 'Supports 20+ languages', 'Continuous AI learning'],
    tag: 'NLP_PROTOCOL'
  },
  {
    id: 'feature-queuing',
    title: 'Call Queuing',
    description: 'Manage high call volumes effectively with customizable hold music, position announcements, and estimated wait times.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    icon: <Headphones className="w-5 h-5" />,
    benefits: ['Reduce abandoned calls', 'Callback options', 'VIP priority queuing'],
    tag: 'QUEUE_MGMT'
  },
  {
    id: 'feature-sms',
    title: 'Omnichannel SMS',
    description: 'Seamlessly transition between voice and text communication, sending follow-up information via SMS after IVR interactions.',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop',
    icon: <MessageSquare className="w-5 h-5" />,
    benefits: ['35% CSAT increase', 'Two-way conversations', 'Automated triggers'],
    tag: 'SMS_GATEWAY'
  },
  {
    id: 'feature-surveys',
    title: 'Automated Surveys',
    description: 'Gather valuable customer feedback through post-call surveys with real-time analytics and sentiment analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    icon: <PieChart className="w-5 h-5" />,
    benefits: ['Higher response rates', 'Customizable logic', 'Sentiment analysis'],
    tag: 'DATA_ANALYTICS'
  },
  {
    id: 'feature-payments',
    title: 'PCI-Level Payments',
    description: 'Securely accept payments via IVR with PCI-compliant systems that support credit cards, ACH, and digital wallets.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    icon: <ShoppingCart className="w-5 h-5" />,
    benefits: ['Reduce processing costs', 'Tokenization ready', 'Multi-currency'],
    tag: 'SECURE_PAY'
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.feature-block');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          current = index;
        }
      });
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="relative bg-white dark:bg-[#020617] py-40 overflow-hidden">
      {/* Structural Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-slate-900 dark:bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left Side: Scrolling Content */}
          <div className="lg:col-span-6 space-y-40">
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-blue-600" />
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-blue-600">
                  Capabilities
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.9] mb-8">
                Precision <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700">Engineering.</span>
              </h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-light max-w-md">
                We provide the modular components required to build a world-class customer experience, fully integrated into your existing stack.
              </p>
            </div>

            {ivrFeatures.map((feature, i) => (
              <motion.div
                key={feature.id}
                className="feature-block pt-20 border-t border-slate-100 dark:border-slate-800 last:mb-60"
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20% 0% -40% 0%" }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{feature.tag}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-light text-slate-900 dark:text-white mb-6 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-10 max-w-lg">
                  {feature.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Check size={10} />
                      </div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Visuals */}
          <div className="lg:col-span-6 hidden lg:block">
            <div className="sticky top-40 h-[600px] w-full">
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={ivrFeatures[activeIndex].image} 
                      alt={ivrFeatures[activeIndex].title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 mix-blend-multiply opacity-60" />
                  </motion.div>
                </AnimatePresence>

                {/* Overlays */}
                <div className="absolute top-10 right-10 flex gap-4">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Enterprise_Ready</span>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10">
                  <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                     <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1.5">
                           {[1,2,3].map(d => <div key={d} className="w-1.5 h-1.5 rounded-full bg-white/30" />)}
                        </div>
                        <Zap size={14} className="text-blue-400" />
                     </div>
                     <div className="space-y-2">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                              className="h-full bg-blue-500" 
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2, repeat: Infinity }}
                           />
                        </div>
                        <div className="flex justify-between text-[8px] font-mono text-white/50 uppercase tracking-widest">
                           <span>Processing_Core</span>
                           <span>99.9%_Uptime</span>
                        </div>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;