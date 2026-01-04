import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Shield, 
  ShoppingCart, 
  Database, 
  Bell, 
  Globe, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const useCases = [
  {
    title: 'Customer Support',
    icon: <Phone className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1200',
    description: 'Transform support centers with intelligent routing and NLP-driven self-service.',
    features: ['24/7 AI Automation', 'Multi-language Support', 'Sentiment Analysis'],
    color: 'bg-blue-600'
  },
  {
    title: 'Healthcare',
    icon: <Shield className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    description: 'HIPAA-compliant voice gateways for appointments and prescription refills.',
    features: ['Appointment Scheduling', 'Refill Management', 'Emergency Dispatch'],
    color: 'bg-emerald-600'
  },
  {
    title: 'Banking & Fintech',
    icon: <Database className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1550565118-3d1428df73e1?auto=format&fit=crop&q=80&w=1200',
    description: 'Secure financial portals with voice biometrics and real-time fraud detection.',
    features: ['Voice Biometrics', 'Fraud Detection', 'Real-time Ledgers'],
    color: 'bg-slate-800'
  },
  {
    title: 'E-commerce',
    icon: <ShoppingCart className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    description: 'Automate order tracking and personalized promotional loyalty campaigns.',
    features: ['Order Tracking', 'Returns Workflow', 'Loyalty Calls'],
    color: 'bg-orange-600'
  },
  {
    title: 'Hospitality',
    icon: <Bell className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    description: 'Elevate guest experiences with automated concierge and smart booking.',
    features: ['Smart Room Service', 'Booking Engines', 'Guest Surveys'],
    color: 'bg-amber-600'
  },
  {
    title: 'Public Sector',
    icon: <Globe className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=1200',
    description: 'Mass notification systems and streamlined public service request portals.',
    features: ['Mass Notifications', 'Service Requests', 'Tax Payments'],
    color: 'bg-purple-600'
  }
];

const UseCases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Industry Verticals
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
              Specialized Solutions
            </h3>
          </div>
          
          {/* Controls */}
          <div className="flex gap-3">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative overflow-visible">
          <motion.div 
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * (320 + 24)}px)` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {useCases.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex-shrink-0 w-[320px] h-[480px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl transition-all duration-500 ${
                  currentIndex === idx ? 'ring-4 ring-blue-500/20 scale-105 z-10' : 'opacity-60 grayscale-[0.5]'
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Status Color Bar */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${item.color}`} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                      {item.icon}
                    </div>
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                    
                    {/* Expandable Details for Active Slide */}
                    <AnimatePresence>
                      {currentIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-200 text-xs mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.features.slice(0, 2).map((f, i) => (
                              <div key={i} className="flex items-center gap-1.5 py-1 px-2.5 bg-white/10 rounded-lg text-[10px] text-white border border-white/10">
                                <Check size={10} />
                                {f}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {useCases.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === i ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default UseCases;