import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Target, BarChart2, TrendingUp, 
  Users, Zap, Globe, Clock, CheckCircle2, ArrowDown,
  Sparkles, LineChart, MousePointer, ShoppingCart
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const digitalMarketingData = {
  services: [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Engine Optimization",
      shortTitle: "SEO",
      description: "Dominate search results and drive organic traffic",
      stats: { value: "+425%", label: "Organic Traffic" }
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: "Pay-Per-Click Advertising",
      shortTitle: "PPC",
      description: "Immediate visibility with targeted ad campaigns",
      stats: { value: "6.2x", label: "Average ROAS" }
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Media Marketing",
      shortTitle: "SMM",
      description: "Build community and amplify brand presence",
      stats: { value: "+380%", label: "Engagement" }
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Content Marketing",
      shortTitle: "Content",
      description: "Compelling narratives that convert",
      stats: { value: "3.5x", label: "Lead Gen" }
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Rate Optimization",
      shortTitle: "CRO",
      description: "Turn visitors into customers",
      stats: { value: "+127%", label: "Conversions" }
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      shortTitle: "Analytics",
      description: "Data-driven insights for growth",
      stats: { value: "Real-time", label: "Dashboards" }
    }
  ],
  process: [
    {
      phase: "01",
      title: "Discovery",
      description: "Deep dive into your business goals, target audience, and competitive landscape",
      activities: ["Stakeholder interviews", "Market analysis", "Competitor research", "Goal setting"]
    },
    {
      phase: "02",
      title: "Strategy",
      description: "Develop comprehensive roadmap aligned with your objectives",
      activities: ["Channel selection", "Budget allocation", "KPI definition", "Timeline planning"]
    },
    {
      phase: "03",
      title: "Execution",
      description: "Launch campaigns with precision and creativity",
      activities: ["Campaign setup", "Content creation", "Ad deployment", "Technical implementation"]
    },
    {
      phase: "04",
      title: "Optimization",
      description: "Continuous refinement for maximum performance",
      activities: ["A/B testing", "Performance monitoring", "Strategy adjustment", "Scaling winners"]
    },
    {
      phase: "05",
      title: "Growth",
      description: "Scale successful strategies and expand reach",
      activities: ["Budget expansion", "New channel testing", "Advanced tactics", "Market expansion"]
    }
  ],
  benefits: [
    "Measurable ROI on every dollar spent",
    "Unified cross-channel strategy",
    "Real-time performance tracking",
    "Expert team dedicated to your success",
    "Transparent reporting and insights",
    "Scalable solutions for growth"
  ]
};

const DigitalMarketingPage = () => {
  const { scrollYProgress } = useScroll();
  const [activePhase, setActivePhase] = useState(0);

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <MainLayout>
    <div className="bg-white min-h-screen">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-px bg-slate-900 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-40 right-20 w-64 h-64 border border-slate-200 rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-40 left-20 w-48 h-48 border border-slate-200"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-200">
              <div className="w-1.5 h-1.5 bg-slate-900" />
              <span className="text-xs tracking-[0.2em] text-slate-600 font-light">DIGITAL MARKETING</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl font-light text-slate-900 mb-8 tracking-tight leading-[0.9]"
          >
            Growth<br />
            by Design.
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-px bg-slate-300 mx-auto mb-8"
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 mb-16 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Strategic digital marketing that transforms data into decisions,
            clicks into customers, and investments into measurable growth.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="group px-10 py-4 bg-slate-900 text-white font-light text-sm tracking-wide transition-all duration-300 flex items-center gap-3 hover:gap-4">
              START YOUR JOURNEY
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-10 py-4 border border-slate-900 text-slate-900 font-light text-sm tracking-wide transition-all duration-300 hover:bg-slate-50">
              VIEW OUR APPROACH
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-12 mt-24"
          >
            {[
              { value: "500+", label: "Campaigns Launched" },
              { value: "$50M+", label: "Ad Spend Managed" },
              { value: "4.8x", label: "Average ROI" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-light text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-slate-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="w-12 h-px bg-slate-300 mb-8" />
            <h2 className="text-5xl font-light text-slate-900 mb-6">
              Full-Spectrum Services
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Integrated digital marketing solutions that work together 
              to amplify your brand and accelerate growth.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {digitalMarketingData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white p-10 hover:bg-slate-50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 text-slate-900 group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-slate-900 mb-3 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 font-light mb-8 group-hover:text-slate-300 transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-6 border-t border-slate-200 group-hover:border-slate-700 transition-colors duration-500">
                    <div className="text-2xl font-light text-slate-900 group-hover:text-white transition-colors duration-500">
                      {service.stats.value}
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-500">
                      {service.stats.label}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flowchart */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <div className="w-12 h-px bg-slate-300 mx-auto mb-8" />
            <h2 className="text-5xl font-light text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              A systematic approach to digital marketing excellence,
              from strategy to measurable results.
            </p>
          </motion.div>

          {/* Desktop Flowchart */}
          <div className="hidden lg:block max-w-7xl mx-auto">
            <div className="relative">
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                {digitalMarketingData.process.slice(0, -1).map((_, index) => (
                  <motion.line
                    key={index}
                    x1={`${(index * 20) + 10}%`}
                    y1="50%"
                    x2={`${((index + 1) * 20) + 10}%`}
                    y2="50%"
                    stroke="#e2e8f0"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                ))}
              </svg>

              {/* Process Nodes */}
              <div className="relative z-10 flex justify-between items-center">
                {digitalMarketingData.process.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex flex-col items-center w-1/5"
                    onMouseEnter={() => setActivePhase(index)}
                  >
                    {/* Phase Number Circle */}
                    <div className={`w-20 h-20 border-2 flex items-center justify-center mb-6 transition-all duration-300 ${
                      activePhase === index 
                        ? 'bg-slate-900 border-slate-900' 
                        : 'bg-white border-slate-300'
                    }`}>
                      <span className={`text-xl font-light transition-colors duration-300 ${
                        activePhase === index ? 'text-white' : 'text-slate-900'
                      }`}>
                        {phase.phase}
                      </span>
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-xl font-light text-slate-900 mb-3 text-center">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 font-light text-center leading-relaxed mb-6 px-2">
                      {phase.description}
                    </p>

                    {/* Activities */}
                    <AnimatePresence>
                      {activePhase === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-white border border-slate-200 p-4 mt-4"
                        >
                          <ul className="space-y-2">
                            {phase.activities.map((activity, i) => (
                              <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                <div className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Flowchart */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {digitalMarketingData.process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connecting Line */}
                {index < digitalMarketingData.process.length - 1 && (
                  <div className="absolute left-10 top-20 bottom-0 w-px bg-slate-200" />
                )}

                <div className="flex gap-6">
                  {/* Phase Circle */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-slate-900 border-2 border-slate-900 flex items-center justify-center">
                      <span className="text-xl font-light text-white">
                        {phase.phase}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-light text-slate-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="w-12 h-px bg-slate-300 mb-8" />
              <h2 className="text-4xl font-light text-slate-900 mb-6">
                Why Choose Us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-px bg-slate-200">
              {digitalMarketingData.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-8 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-900 flex-shrink-0 mt-1" />
                  <span className="text-lg text-slate-600 font-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-slate-200">
                <div className="w-1.5 h-1.5 bg-slate-900" />
                <span className="text-xs tracking-[0.2em] text-slate-600 font-light">READY TO BEGIN?</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 leading-tight">
              Let's Build Your<br />Digital Presence
            </h2>

            <div className="w-20 h-px bg-slate-300 mx-auto mb-8" />

            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Schedule a consultation to discuss your goals and discover 
              how our strategic approach can drive measurable growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-12 py-4 bg-slate-900 text-white font-light text-sm tracking-wide transition-all duration-300 flex items-center gap-3 hover:gap-4">
                SCHEDULE CONSULTATION
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-12 py-4 border border-slate-900 text-slate-900 font-light text-sm tracking-wide transition-all duration-300 hover:bg-slate-50">
                VIEW CASE STUDIES
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20 bg-slate-50" />
    </div>
    </MainLayout>
  );
};

export default DigitalMarketingPage;