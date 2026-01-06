import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Heart, Book, Home, 
  Factory, Hotel, CreditCard, Briefcase, 
  ArrowUpRight 
} from 'lucide-react';

const industries = [
  {
    name: "Retail & E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    icon: <ShoppingCart className="w-4 h-4" />,
    features: ["Personalized Journeys", "Loyalty Integration", "Omnichannel Flow"]
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    icon: <Heart className="w-4 h-4" />,
    features: ["Patient Management", "HIPAA Compliance", "Telemedicine"]
  },
  {
    name: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800",
    icon: <Book className="w-4 h-4" />,
    features: ["Student Lifecycle", "Campus Automation", "Alumni Relations"]
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    icon: <Home className="w-4 h-4" />,
    features: ["Property Tracking", "Lead Capture", "Document Flow"]
  },
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    icon: <Factory className="w-4 h-4" />,
    features: ["Supply Chain", "Vendor Management", "Quality Control"]
  },
  {
    name: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    icon: <Hotel className="w-4 h-4" />,
    features: ["Guest Profiles", "Reservation Flow", "Feedback Loop"]
  },
  {
    name: "Financial Services",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: <CreditCard className="w-4 h-4" />,
    features: ["Portfolio Management", "Risk Assessment", "Secure Comms"]
  },
  {
    name: "Professional Services",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    icon: <Briefcase className="w-4 h-4" />,
    features: ["Time Tracking", "Resource Allocation", "Client Portals"]
  }
];

const Industries = () => {
  return (
    <section className="relative py-32 bg-white text-[#0F172A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-900/40 mb-6 block"
            >
              Industry Excellence
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-light tracking-tight leading-[1.1]"
            >
              Solutions tailored to <br />
              <span className="italic font-serif text-blue-800">your domain.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light max-w-sm text-lg leading-relaxed md:text-right"
          >
            We deploy specialized frameworks designed for the unique complexities of your specific industry.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
          {industries.map((industry, i) => (
            <motion.a
              key={i}
              href="/contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white overflow-hidden aspect-[4/5] cursor-pointer block"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/80 group-hover:bg-blue-900/40 transition-colors duration-500" />
              </div>

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-8 h-8 rounded-full border border-blue-900/20 flex items-center justify-center text-blue-900 bg-white/50 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all">
                    {industry.icon}
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-white transition-colors">
                    {industry.name}
                  </h3>
                  <div className="space-y-2 overflow-hidden">
                    {industry.features.map((feature, j) => (
                      <motion.p 
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (j * 0.05) }}
                        className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-blue-50 transition-colors"
                      >
                        {feature}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Custom Solution Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 bg-[#F8FAFC] border border-slate-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-md">
            <h4 className="text-2xl font-light mb-2">Bespoke Architecture</h4>
            <p className="text-slate-500 font-light text-sm">
              If your industry requires a unique set of parameters, our engineers will construct a custom environment specifically for you.
            </p>
          </div>
          <a 
            href="/contact"
            className="inline-block px-10 py-4 bg-[#0F172A] text-white text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10"
          >
            Request Custom Solution
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Industries;