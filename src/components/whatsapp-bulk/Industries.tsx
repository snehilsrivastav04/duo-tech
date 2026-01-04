import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, HeartPulse, GraduationCap, ArrowUpRight, Check } from 'lucide-react';

const industriesData = [
  {
    id: '01',
    name: 'E-commerce',
    tag: 'Retail & Commerce',
    useCases: [
      'Abandoned cart recovery',
      'Order tracking notifications',
      'Personalized product recommendations'
    ],
    icon: <ShoppingBag className="w-5 h-5" />,
    stats: '25% conversion lift',
    description: 'Engage customers with personalized offers and recover revenue through automated retargeting.'
  },
  {
    id: '02',
    name: 'Healthcare',
    tag: 'Medical Services',
    useCases: [
      'Appointment reminders',
      'Secure lab report delivery',
      'Automated health check-ins'
    ],
    icon: <HeartPulse className="w-5 h-5" />,
    stats: '90% fewer no-shows',
    description: 'Streamline patient communication and securely deliver sensitive information at scale.'
  },
  {
    id: '03',
    name: 'Education',
    tag: 'EdTech & Institutions',
    useCases: [
      'Admission inquiry handling',
      'Fee payment reminders',
      'Course material distribution'
    ],
    icon: <GraduationCap className="w-5 h-5" />,
    stats: '50% higher engagement',
    description: 'Modernize the student experience by moving administrative processes to their preferred platform.'
  }
];

export const Industries = () => {
  return (
    <section className="py-32 bg-white dark:bg-[#0b141a] transition-colors duration-500">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Side Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#128C7E] dark:text-[#25D366] block mb-6">
                Market Solutions
              </span>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Trusted by <br />
                <span className="italic font-serif text-[#128C7E] dark:text-[#25D366]">industries</span> worldwide.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light mb-10 max-w-xs">
                From high-growth startups to global enterprises, our WhatsApp solutions are tailored to fit the unique technical needs of every sector.
              </p>
              
              <div className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white cursor-pointer">
                <span className="border-b border-slate-900 dark:border-white pb-1">Explore all sectors</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>

          {/* Industry Grid */}
          <div className="lg:col-span-8 border-t border-slate-100 dark:border-slate-800/50">
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group py-12 border-b border-slate-100 dark:border-slate-800/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Title and Stats */}
                  <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-mono text-[#128C7E] dark:text-[#25D366]">
                        {industry.id}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                        {industry.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl font-light text-slate-900 dark:text-white mb-4">
                      {industry.name}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-white/[0.03] rounded-full border border-slate-100 dark:border-slate-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                        {industry.stats}
                      </span>
                    </div>
                  </div>

                  {/* Description and Use Cases */}
                  <div className="md:col-span-7">
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8">
                      {industry.description}
                    </p>
                    <ul className="space-y-3">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-[#128C7E] dark:text-[#25D366]" />
                          </div>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;