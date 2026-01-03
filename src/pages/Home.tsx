import { FC } from 'react';
import { ChevronRight, CheckCircle, Smartphone, Megaphone, PhoneCall, Code, Mail, BarChart2, Briefcase, Zap, Shield, TrendingUp, Settings, Users, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: FC = () => (
  <section className="relative pt-40 pb-24 text-center bg-gradient-to-br from-white to-gray-50">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `repeating-linear-gradient(0deg, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #e5e7eb 0px, #e5e7eb 1px, transparent 1px, transparent 40px)` }} />
    <div className="container mx-auto px-4 relative">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} 
        className="text-5xl md:text-7xl font-light text-gray-900 leading-tight tracking-tight">
        All-in-One Communication &<br />
        <span className="text-blue-900 font-normal">Digital Growth Platform</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }} 
        className="max-w-3xl mx-auto mt-6 text-lg font-light text-gray-600">
        Bulk SMS, WhatsApp API, IVR, Digital Marketing & Custom Development to Grow Your Business Faster
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }} 
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link to="/contact" className="px-8 py-4 bg-blue-900 text-white font-normal tracking-wide hover:bg-blue-800 transition-all duration-300 shadow-lg rounded-full flex items-center gap-2">
          Get Free Demo <ArrowRight size={18} />
        </Link>
        <Link to="/contact" className="px-8 py-4 border border-gray-300 text-gray-700 font-light tracking-wide hover:border-blue-900 hover:text-blue-900 transition-all duration-300 rounded-full">
          Talk to an Expert
        </Link>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }} 
        className="mt-12 flex justify-center gap-x-8 text-sm font-light text-gray-500">
        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-900" /> 99.9% Delivery Rate</div>
        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-900" /> DLT & WhatsApp Official API</div>
        <div className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-900" /> Trusted by 500+ Businesses</div>
      </motion.div>
    </div>
  </section>
);

const ServicesOverview: FC = () => {
  const categories = [
    { name: 'Communication', icon: <PhoneCall size={24} />, services: ['Bulk SMS', 'WhatsApp API', 'IVR Solutions', 'Voice OBD', 'Virtual Numbers'] },
    { name: 'Digital Marketing', icon: <Megaphone size={24} />, services: ['Email Marketing', 'Social Media', 'SEO/PPC', 'Graphic Design'] },
    { name: 'Development', icon: <Code size={24} />, services: ['Web Development', 'App Development', 'UI/UX Design', 'API Integration'] },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">A Complete Toolkit for Business Growth</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-light">Instantly see everything you can achieve with our integrated platform.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {categories.map(cat => (
            <motion.div 
              key={cat.name} 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="inline-block p-4 bg-blue-100 text-blue-900 rounded-full mb-4">{cat.icon}</div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">{cat.name}</h3>
              <ul className="space-y-2 text-gray-600 font-light">
                {cat.services.map(s => <li key={s}>{s}</li>)}
              </ul>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-blue-900 font-normal group">
                Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
};

const UseCases: FC = () => {
  const cases = [
    { title: 'Marketing Campaigns', desc: 'Promotional SMS, WhatsApp Bulk', icon: <Megaphone /> },
    { title: 'OTP & Alerts', desc: 'Transactional SMS, Voice OBD', icon: <Shield /> },
    { title: 'Customer Support', desc: 'IVR & Virtual Numbers', icon: <Users /> },
    { title: 'Business Growth', desc: 'SEO, PPC, Social Media', icon: <TrendingUp /> },
    { title: 'Automation', desc: 'CRM, API Integration', icon: <Settings /> },
  ];
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900">How Our Clients Use Duo Tech</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-light">Helping customers see themselves using your service.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-4">
          {cases.map(c => (
            <motion.div key={c.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} viewport={{ once: true }} className="p-6 text-center rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-blue-900 w-12 h-12 mx-auto mb-4 flex items-center justify-center">{c.icon}</div>
              <h3 className="font-normal text-gray-900">{c.title}</h3>
              <p className="text-sm font-light text-gray-500 mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Products: FC = () => {
    const products = [
        { name: 'WhatsApp API Solutions', desc: 'Engage customers with our official WhatsApp Business API.', features:["Verified Badge", "Interactive Buttons"], cta: 'Request Demo' },
        { name: 'SMS Gateway', desc: 'High-speed, reliable SMS delivery for all your needs.', features:["99.9% Uptime", "Real-time Reports"], cta: 'Explore Gateway' },
        { name: 'CRM Solutions', desc: 'Manage leads and customer interactions seamlessly.', features:["Lead Tracking", "Task Automation"], cta: 'Learn More' },
        { name: 'Ready-Made Source Codes', desc: 'Jumpstart your projects with our production-ready code.', features:["Fully Customizable", "Lifetime Updates"], cta: 'Browse Codes' },
    ];

  return (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-900">More Than a Service, We Build Products</h2>
                <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-light">Powerful, ready-to-use products that differentiate your business.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {products.map(p => (
                    <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col">
                        <h3 className="text-2xl font-normal text-gray-900 mb-3">{p.name}</h3>
                        <p className="text-gray-600 font-light flex-grow">{p.desc}</p>
                        <div className="my-6 space-y-2">
                            {p.features.map(f => <div key={f} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle size={14} className="text-blue-900"/>{f}</div>)}
                        </div>
                        <Link to="/contact" className="mt-auto inline-flex items-center gap-2 text-blue-900 font-normal group w-fit">
                            {p.cta} <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
};

const WhyChooseUs: FC = () => {
    const points = [
        { title: 'Instant Delivery & High Speed', icon: <Zap /> },
        { title: 'Secure & Compliant', icon: <Shield /> },
        { title: 'Real-time Analytics & Reports', icon: <BarChart2 /> },
        { title: 'Custom API & White-Label Options', icon: <Code /> },
        { title: '24/7 Technical Support', icon: <Users /> },
    ];
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-900">Why Partner with Duo Tech?</h2>
                     <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-light">The features that make us a reliable partner for your growth.</p>
                </div>
                <div className="grid md:grid-cols-5 gap-8">
                    {points.map(p => (
                         <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} viewport={{ once: true }} className="text-center p-4">
                            <div className="text-blue-900 w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-white rounded-full shadow-md">{p.icon}</div>
                            <h3 className="font-normal text-gray-800">{p.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
};

const HowItWorks: FC = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-4xl font-light text-gray-900">Get Started in 3 Simple Steps</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center relative">
                {/* Dotted line connector */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
                    <svg width="100%" height="100%"><line x1="0" y1="50%" x2="100%" y2="50%" strokeDasharray="5,5" stroke="#cbd5e1" strokeWidth="2"/></svg>
                </div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.5 }} viewport={{ once: true }} className="bg-white p-6 z-10">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 text-blue-900 rounded-full text-2xl font-light">1</div>
                    <h3 className="text-xl font-normal text-gray-900">Sign Up / Contact Us</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }} className="bg-white p-6 z-10">
                     <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 text-blue-900 rounded-full text-2xl font-light">2</div>
                    <h3 className="text-xl font-normal text-gray-900">Choose Service/Product</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }} className="bg-white p-6 z-10">
                     <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-blue-100 text-blue-900 rounded-full text-2xl font-light">3</div>
                    <h3 className="text-xl font-normal text-gray-900">Launch & Grow</h3>
                </motion.div>
            </div>
        </div>
    </section>
);

const Testimonials: FC = () => {
    const reviews = [
        { name: "Aarav Patel", company: "RealEstate Growth", text: "The WhatsApp API solution streamlined our client communication, leading to a 50% increase in lead conversion. A game-changer!" },
        { name: "Priya Sharma", company: "Fintech Secure", text: "Reliable OTP delivery and 99.9% uptime have been critical for our operations. Duo Tech delivers on its promises."}, 
        { name: "Vikram Singh", company: "E-commerce Express", text: "The bulk SMS campaigns are incredibly effective for our flash sales. We see an immediate spike in traffic and sales every time."}
    ]
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light text-gray-900">Trusted by Businesses Like Yours</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((r, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2, duration: 0.5 }} viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-yellow-400 fill-current"/>)}</div>
                            <p className="text-gray-600 font-light mb-6">"{r.text}"</p>
                            <div>
                                <p className="font-normal text-gray-900">{r.name}</p>
                                <p className="text-sm text-gray-500 font-light">{r.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
};

const LeadCapture: FC = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="bg-blue-900 rounded-2xl p-16 text-center relative overflow-hidden">
                 <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full"/>
                 <div className="absolute -top-4 -left-20 w-40 h-40 bg-white/5 rounded-full"/>
                <h2 className="text-4xl font-light text-white">Ready to Grow Your Business?</h2>
                <p className="max-w-2xl mx-auto mt-4 text-blue-200 font-light">Tell us about your project and one of our experts will get back to you shortly.</p>
                <form className="max-w-xl mx-auto mt-10 grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="p-3 rounded-lg bg-white/90 border-transparent focus:ring-2 focus:ring-blue-300"/>
                    <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/90 border-transparent focus:ring-2 focus:ring-blue-300"/>
                    <input type="tel" placeholder="Phone" className="p-3 rounded-lg bg-white/90 border-transparent focus:ring-2 focus:ring-blue-300"/>
                    <select className="p-3 rounded-lg bg-white/90 border-transparent focus:ring-2 focus:ring-blue-300 text-gray-500">
                        <option>Interested In...</option>
                        <option>Bulk SMS</option>
                        <option>WhatsApp API</option>
                        <option>IVR</option>
                        <option>Digital Marketing</option>
                    </select>
                    <textarea placeholder="Message" rows={3} className="sm:col-span-2 p-3 rounded-lg bg-white/90 border-transparent focus:ring-2 focus:ring-blue-300"></textarea>
                    <button type="submit" className="sm:col-span-2 py-4 bg-white text-blue-900 font-normal tracking-wide hover:bg-gray-200 transition-all duration-300 shadow-lg rounded-lg">
                        Get Free Consultation
                    </button>
                </form>
            </div>
        </div>
    </section>
);

const HomePage: FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <ServicesOverview />
      <UseCases />
      <Products />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <LeadCapture />
    </div>
  );
};

export default HomePage;
