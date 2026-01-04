import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, MapPin, CreditCard, FileText, Camera, User, 
  MessageSquare, PieChart, RefreshCw, Database, ArrowUpRight
} from 'lucide-react';

/**
 * Modern minimalist Features component
 * Design Philosophy: 
 * - Technical Grid: A 2-column asymmetric layout for a sophisticated feel
 * - High Contrast: Slate 900 backgrounds with electric blue/white accents
 * - Engineering Aesthetic: Using monospaced subtitles and structural borders
 */

const featuresData = [
  { name: "Push Notifications", desc: "Real-time engagement via FCM with high-delivery rates.", icon: <Bell size={20} /> },
  { name: "Geo-Location", desc: "Precise tracking and geofencing using Google Maps SDK.", icon: <MapPin size={20} /> },
  { name: "In-App Purchases", desc: "Secure billing integration for subscriptions and digital goods.", icon: <CreditCard size={20} /> },
  { name: "PDF Generation", desc: "Dynamic report and invoice generation directly on-device.", icon: <FileText size={20} /> },
  { name: "Camera Integration", desc: "Advanced image processing and custom scanner overlays.", icon: <Camera size={20} /> },
  { name: "Social Login", desc: "One-tap authentication with Google, Apple, and GitHub.", icon: <User size={20} /> },
  { name: "In-App Chat", desc: "Low-latency WebSocket messaging with media attachments.", icon: <MessageSquare size={20} /> },
  { name: "Analytics", desc: "Deep event tracking and user behavior data visualization.", icon: <PieChart size={20} /> },
  { name: "Real-Time Sync", desc: "Persistent bi-directional data flow with offline support.", icon: <RefreshCw size={20} /> },
  { name: "Offline Mode", desc: "Robust local storage architectures using SQLite & Room.", icon: <Database size={20} /> }
];

const Features = () => {
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
                  Capabilities
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 dark:text-white leading-[0.95]">
                Complex <br />
                <span className="italic font-normal text-slate-300 dark:text-slate-700 text-4xl md:text-6xl">system features.</span>
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
              We integrate sophisticated modules that elevate user experience while maintaining high performance benchmarks.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 overflow-hidden">
          {featuresData.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white dark:bg-[#020617] p-10 flex gap-8 items-start hover:bg-slate-50 dark:hover:bg-white/[0.01] transition-all duration-500"
            >
              <div className="flex-shrink-0 p-4 bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 rounded-2xl border border-slate-100 dark:border-slate-800">
                {feature.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-300 dark:text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    (MOD_0{i + 1})
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-4">
                  {feature.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Documentation <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Footer */}
        <div className="mt-20 p-12 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-slate-800 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold tracking-widest uppercase">Cross-Platform Ready</h4>
              <p className="text-xs text-slate-500 font-light">All features are built with modular architecture for easy scaling across iOS and Web.</p>
           </div>
           <div className="flex gap-12 grayscale opacity-40">
              <span className="text-[10px] font-bold tracking-widest uppercase">Firebase</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">AWS S3</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Stripe</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Twilio</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Features;