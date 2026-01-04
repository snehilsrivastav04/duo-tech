import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Smile, ShoppingBag, Users, ArrowUpRight } from 'lucide-react';

const businessBenefitsData = [
  {
    id: '01',
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Revenue Growth',
    description: 'Boost conversion rates through personalized commerce and automated retargeting flows.',
    stat: '30%'
  },
  {
    id: '02',
    icon: <Smile className="w-5 h-5" />,
    title: 'Customer Satisfaction',
    description: 'Reduce resolution times with intelligent 24/7 automated support pathways.',
    stat: '24/7'
  },
  {
    id: '03',
    icon: <ShoppingBag className="w-5 h-5" />,
    title: 'User Engagement',
    description: 'Command attention with 98% open rates that outperform traditional email marketing.',
    stat: '98%'
  },
  {
    id: '04',
    icon: <Users className="w-5 h-5" />,
    title: 'Operational Efficiency',
    description: 'Lower overhead costs by automating routine inquiries and repetitive tasks.',
    stat: '40%'
  }
];

export const BusinessBenefits = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0b141a] transition-colors duration-500">
      <div className="container mx-auto px-8">
        {/* Minimalist Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#128C7E] dark:text-[#25D366] block mb-6"
            >
              Performance Metrics
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              The business <span className="italic font-serif text-[#128C7E] dark:text-[#25D366]">advantage</span> that scales with you.
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed font-light"
          >
            Unlock measurable growth through the platform your customers already trust and use daily.
          </motion.p>
        </div>

        {/* Sophisticated Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-100 dark:border-slate-800/50">
          {businessBenefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-10 border-b lg:border-b-0 lg:border-r last:border-r-0 border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle architectural background number */}
              <span className="absolute -bottom-6 -right-4 text-9xl font-black text-slate-900/[0.02] dark:text-white/[0.02] pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                {benefit.id}
              </span>

              {/* Icon Container */}
              <div className="w-12 h-12 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center text-[#128C7E] dark:text-[#25D366] mb-12 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-500">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="mb-8 relative z-10">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-light text-slate-900 dark:text-white tracking-tighter">
                    {benefit.stat}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-4">
                  {benefit.title}
                </h3>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light relative z-10">
                {benefit.description}
              </p>

              {/* Minimal Bottom Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#128C7E] dark:bg-[#25D366] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};