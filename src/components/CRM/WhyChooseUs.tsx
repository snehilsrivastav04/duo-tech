import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, RefreshCw, Smartphone, Check, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Advanced Analytics",
    description: "Deep insights into customer behavior and business performance with predictive modeling.",
    list: ['Real-time dashboards', 'Custom reporting', 'Predictive analytics']
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Workflow Automation",
    description: "Streamline operations with intelligent routing and automated approval sequences.",
    list: ['Lead routing', 'Email sequences', 'Task assignment']
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Experience",
    description: "Access your enterprise data from anywhere with our native iOS and Android apps.",
    list: ['Offline access', 'Push notifications', 'Mobile reporting']
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-32 bg-white text-[#0F172A] overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFC] -z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Header Content */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-900/40 mb-8 block"
            >
              Excellence Defined
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8"
            >
              Why the world's best <br />
              <span className="italic font-serif text-blue-800">choose us.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 font-light leading-relaxed mb-12 max-w-md"
            >
              We don't just provide a CRM; we offer a framework for institutional growth and refined customer intelligence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                      {feature.icon}
                    </div>
                    <div className="h-[1px] flex-grow bg-slate-100" />
                  </div>
                  
                  <h3 className="text-xl font-medium mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-500 font-light leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-400">
                        <Check className="w-3 h-3 text-blue-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Final CTA Card inside grid */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#0F172A] p-8 rounded-2xl text-white flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-light mb-4">Ready to elevate your standards?</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                    Connect with our implementation team to start your digital transformation.
                  </p>
                </div>
                <a 
                  href="/contact"
                  className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase hover:gap-4 transition-all"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;