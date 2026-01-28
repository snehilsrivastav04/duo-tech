import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Search, Target, BarChart2, TrendingUp, 
  Users, Zap, Globe, Clock, CheckCircle2, ArrowDown,
  Sparkles, LineChart, MousePointer, ShoppingCart, ChevronDown, ChevronUp
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import { Link } from 'react-router-dom';

const digitalMarketingData = {
  services: [
    {
      icon: <Search className="w-5 h-5" />,
      title: "Search Engine Optimization",
      shortTitle: "SEO",
      description: "Dominate search results and drive sustainable organic traffic through technical excellence and strategic content.",
      stats: { value: "+425%", label: "Organic Traffic Growth" },
      process: [
        "Technical site audit and optimization",
        "Strategic keyword research and mapping",
        "Content optimization and creation",
        "Authoritative link building campaigns"
      ]
    },
    {
      icon: <MousePointer className="w-5 h-5" />,
      title: "Pay-Per-Click Advertising",
      shortTitle: "PPC",
      description: "Immediate visibility with precisely targeted ad campaigns across Google, Bing, and social platforms.",
      stats: { value: "6.2x", label: "Average ROAS" },
      process: [
        "Campaign strategy and structure",
        "Audience targeting and segmentation",
        "Ad creative development and testing",
        "Continuous bid optimization"
      ]
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Social Media Marketing",
      shortTitle: "SMM",
      description: "Build engaged communities and amplify your brand presence across all major social platforms.",
      stats: { value: "+380%", label: "Engagement Rate" },
      process: [
        "Platform strategy development",
        "Content calendar planning",
        "Community management",
        "Influencer partnerships"
      ]
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Content Marketing",
      shortTitle: "Content",
      description: "Compelling narratives and strategic content that educates, engages, and converts your audience.",
      stats: { value: "3.5x", label: "Lead Generation" },
      process: [
        "Content strategy and planning",
        "Editorial calendar management",
        "Multi-format content creation",
        "Distribution and amplification"
      ]
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Conversion Rate Optimization",
      shortTitle: "CRO",
      description: "Transform visitors into customers through data-driven testing and user experience refinement.",
      stats: { value: "+127%", label: "Conversion Rate" },
      process: [
        "User behavior analysis",
        "A/B and multivariate testing",
        "Landing page optimization",
        "Funnel refinement"
      ]
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Analytics & Reporting",
      shortTitle: "Analytics",
      description: "Comprehensive data analysis and actionable insights to guide strategic decisions and measure success.",
      stats: { value: "Real-time", label: "Performance Dashboards" },
      process: [
        "Custom dashboard development",
        "KPI tracking and monitoring",
        "Attribution modeling",
        "Monthly performance reviews"
      ]
    }
  ]
};

const DigitalMarketingPage = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'Digital Marketing Services India | SEO, PPC, Social Media | Duotech Solutions',
      description: 'Complete digital marketing solutions including SEO, PPC, social media marketing, email marketing, and content marketing. Grow your business online with proven strategies.',
      keywords: 'digital marketing services, seo services, ppc advertising, social media marketing, email marketing, digital marketing agency noida, online marketing',
      image: 'https://www.duotechsolutions.in/images/digital-marketing-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/digital-marketing',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'Digital Marketing'
    });

    const digitalMarketingSchema = createServiceJsonLD({
      name: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions including SEO, PPC, social media marketing, email campaigns, content marketing, and analytics.',
      image: 'https://www.duotechsolutions.in/images/digital-marketing-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(digitalMarketingSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'digital-marketing-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'Digital Marketing', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#digital-marketing-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const [expandedService, setExpandedService] = useState(null);
  const [activeShowcase, setActiveShowcase] = useState(0);

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);

  return (
    <MainLayout>
    <div className="bg-white min-h-screen font-light">
      {/* Subtle Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-blue-900 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: headerOpacity }}
        className="relative min-h-screen flex items-center justify-center px-8 py-32 overflow-hidden"
      >
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1e3a8a 1px, transparent 1px),
                            linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Floating Geometric Element */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-40 right-20 w-80 h-80 border border-gray-100 rounded-full hidden lg:block"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Minimalist Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 border border-gray-200">
              <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
              <span className="text-xs tracking-[0.25em] text-gray-500 uppercase">Digital Excellence</span>
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl text-blue-900 mb-12 tracking-tight leading-[0.95]"
          >
            Growth Through
            <br />
            Strategic Design
          </motion.h1>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-px bg-gray-300 mx-auto mb-12"
          />

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-600 mb-20 max-w-3xl mx-auto leading-relaxed"
          >
            Sophisticated digital marketing that transforms data into decisions,
            visitors into customers, and investments into measurable returns.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/contact" className="group px-10 py-5 bg-blue-900 text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-blue-800 flex items-center gap-3">
              Begin Your Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="px-10 py-5 border border-blue-900 text-blue-900 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-blue-50">
              Explore Approach
            </Link>
          </motion.div>

          {/* Minimalist Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-16 mt-32"
          >
            {[
              { value: "500+", label: "Campaigns" },
              { value: "$50M+", label: "Managed Spend" },
              { value: "4.8x", label: "Average ROI" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl text-blue-900 mb-2">{stat.value}</div>
                <div className="w-8 h-px bg-gray-300 mx-auto mb-2" />
                <div className="text-xs text-gray-500 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* Services List Section */}
      <section className="py-32 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="w-16 h-px bg-gray-300 mb-8" />
            <h2 className="text-5xl md:text-6xl text-blue-900 mb-8 tracking-tight">
              Integrated Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              A comprehensive suite of digital marketing solutions designed to work 
              in harmony, amplifying your brand and accelerating growth.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="space-y-px bg-gray-100">
            {digitalMarketingData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white"
              >
                {/* Service Header */}
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full px-12 py-10 flex items-center justify-between hover:bg-gray-50 transition-colors duration-500 group"
                >
                  <div className="flex items-center gap-8 flex-1">
                    {/* Icon */}
                    <div className="text-blue-900 transition-transform duration-500 group-hover:scale-110">
                      {service.icon}
                    </div>

                    {/* Title and Description */}
                    <div className="flex-1 text-left">
                      <h3 className="text-2xl md:text-3xl text-blue-900 mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats and Expand Icon */}
                  <div className="flex items-center gap-12">
                    <div className="text-right hidden md:block">
                      <div className="text-3xl text-blue-900 mb-1">{service.stats.value}</div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase">{service.stats.label}</div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-12 pb-10 pt-4 border-t border-gray-100">
                        <div className="ml-13 pl-8 border-l border-gray-200">
                          <h4 className="text-sm text-gray-500 tracking-wider uppercase mb-6">
                            Our Process
                          </h4>
                          <ul className="space-y-4">
                            {service.process.map((step, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4"
                              >
                                <div className="w-6 h-6 border border-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-blue-900">{i + 1}</span>
                                </div>
                                <span className="text-gray-700 leading-relaxed">{step}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Showcase Section */}
      <section className="py-32 px-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24 text-center"
          >
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl text-blue-900 mb-8 tracking-tight">
              Our Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A systematic, data-driven approach that transforms strategy 
              into measurable results.
            </p>
          </motion.div>

          {/* Showcase Grid */}
          <div className="grid lg:grid-cols-2 gap-px bg-gray-200">
            {[
              {
                phase: "01",
                title: "Discovery & Analysis",
                description: "Deep dive into your business ecosystem, competitive landscape, and growth opportunities.",
                details: [
                  "Comprehensive market research",
                  "Competitive intelligence gathering",
                  "Audience profiling and segmentation",
                  "Goal alignment workshops"
                ]
              },
              {
                phase: "02",
                title: "Strategic Planning",
                description: "Develop a comprehensive roadmap tailored to your unique objectives and market position.",
                details: [
                  "Channel strategy development",
                  "Budget allocation optimization",
                  "KPI framework definition",
                  "Timeline and milestone planning"
                ]
              },
              {
                phase: "03",
                title: "Creative Execution",
                description: "Launch campaigns with precision, creativity, and technical excellence.",
                details: [
                  "Campaign architecture setup",
                  "Content and creative production",
                  "Technical implementation",
                  "Quality assurance testing"
                ]
              },
              {
                phase: "04",
                title: "Continuous Optimization",
                description: "Relentless refinement through testing, analysis, and data-driven improvements.",
                details: [
                  "A/B and multivariate testing",
                  "Performance monitoring",
                  "Strategic pivots and adjustments",
                  "Scale winning initiatives"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setActiveShowcase(index)}
                className={`bg-white p-12 transition-all duration-500 ${
                  activeShowcase === index ? 'bg-blue-900' : 'hover:bg-gray-50'
                }`}
              >
                <div className={`text-6xl mb-8 transition-colors duration-500 ${
                  activeShowcase === index ? 'text-white' : 'text-gray-200'
                }`}>
                  {phase.phase}
                </div>
                
                <h3 className={`text-2xl md:text-3xl mb-4 tracking-tight transition-colors duration-500 ${
                  activeShowcase === index ? 'text-white' : 'text-blue-900'
                }`}>
                  {phase.title}
                </h3>
                
                <p className={`text-lg mb-8 leading-relaxed transition-colors duration-500 ${
                  activeShowcase === index ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {phase.description}
                </p>

                <div className={`w-12 h-px mb-8 transition-colors duration-500 ${
                  activeShowcase === index ? 'bg-blue-300' : 'bg-gray-300'
                }`} />

                <ul className="space-y-3">
                  {phase.details.map((detail, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm transition-colors duration-500 ${
                        activeShowcase === index ? 'text-blue-100' : 'text-gray-600'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-500 ${
                        activeShowcase === index ? 'bg-blue-300' : 'bg-gray-400'
                      }`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="w-16 h-px bg-gray-300 mb-8" />
            <h2 className="text-5xl md:text-6xl text-blue-900 tracking-tight">
              Why Partner With Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-100">
            {[
              "Transparent, measurable ROI on every investment",
              "Unified cross-channel strategic approach",
              "Real-time performance tracking and insights",
              "Dedicated team of certified specialists",
              "Comprehensive reporting with actionable data",
              "Scalable solutions that grow with your business"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white p-10 flex items-start gap-4 hover:bg-gray-50 transition-colors duration-500"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <div className="mb-16">
              <div className="inline-flex items-center gap-4 px-6 py-3 border border-gray-200">
                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                <span className="text-xs tracking-[0.25em] text-gray-500 uppercase">Let's Connect</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl text-blue-900 mb-12 tracking-tight leading-tight">
              Ready to Elevate
              <br />
              Your Digital Presence?
            </h2>

            <div className="w-24 h-px bg-gray-300 mx-auto mb-12" />

            <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed max-w-2xl mx-auto">
              Schedule a strategic consultation to explore how our approach 
              can transform your digital marketing performance.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="group px-12 py-5 bg-blue-900 text-white text-sm tracking-widest uppercase transition-all duration-500 hover:bg-blue-800 flex items-center gap-3">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="px-12 py-5 border border-blue-900 text-blue-900 text-sm tracking-widest uppercase transition-all duration-500 hover:bg-blue-50">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-32 bg-white" />
    </div>
    </MainLayout>
  );
};

export default DigitalMarketingPage;