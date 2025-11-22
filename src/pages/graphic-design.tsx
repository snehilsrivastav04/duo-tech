import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  PenTool, LayoutTemplate, BookOpen, 
  Film, Smartphone, ArrowRight, Check, 
  Palette, Sparkles, Award, Target, Clock, Heart,
  Plus, Minus
} from 'lucide-react';

const GraphicsDesignPage = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedService, setExpandedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Design services data
  const designServices = {
    branding: [
      {
        id: 1,
        title: "Logo Design",
        description: "Distinctive logos that embody your brand's essence with timeless sophistication",
        features: ["5 initial concepts", "Unlimited revisions", "Vector files", "Brand guidelines"],
        icon: <PenTool className="w-5 h-5" />,
        color: "from-blue-900 to-blue-700"
      },
      {
        id: 2,
        title: "Brand Identity",
        description: "Comprehensive visual systems that create cohesive brand experiences",
        features: ["Color palette", "Typography system", "Brand patterns", "Complete style guide"],
        icon: <Palette className="w-5 h-5" />,
        color: "from-gray-800 to-gray-600"
      }
    ],
    digital: [
      {
        id: 3,
        title: "UI/UX Design",
        description: "Intuitive interfaces crafted for seamless user experiences",
        features: ["User research", "Wireframes & prototypes", "Design systems", "Usability testing"],
        icon: <LayoutTemplate className="w-5 h-5" />,
        color: "from-blue-900 to-blue-700"
      },
      {
        id: 4,
        title: "Web Design",
        description: "Digital experiences that captivate and convert visitors",
        features: ["Responsive design", "Performance optimization", "CMS integration", "Analytics setup"],
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-gray-800 to-gray-600"
      }
    ],
    print: [
      {
        id: 5,
        title: "Print Design",
        description: "Tangible materials that leave lasting impressions",
        features: ["Business stationery", "Marketing collateral", "Packaging design", "Print production"],
        icon: <BookOpen className="w-5 h-5" />,
        color: "from-blue-900 to-blue-700"
      }
    ],
    motion: [
      {
        id: 6,
        title: "Motion Graphics",
        description: "Dynamic animations that bring stories to life",
        features: ["Brand animations", "Explainer videos", "Social media content", "UI micro-interactions"],
        icon: <Film className="w-5 h-5" />,
        color: "from-gray-800 to-gray-600"
      }
    ]
  };

  const portfolioItems = [
    { id: 1, title: "Organic Food Brand", category: "Branding", year: "2024" },
    { id: 2, title: "Tech Startup UI", category: "Digital", year: "2024" },
    { id: 3, title: "Luxury Packaging", category: "Print", year: "2024" },
    { id: 4, title: "Fitness App", category: "Digital", year: "2023" },
    { id: 5, title: "Restaurant Identity", category: "Branding", year: "2023" },
    { id: 6, title: "Editorial Design", category: "Print", year: "2023" },
  ];

  const stats = [
    { value: "250+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
    { value: "15+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
    { value: "50+", label: "Industries Served", icon: <Target className="w-5 h-5" /> },
  ];

  const processSteps = [
    { 
      title: "Discover", 
      description: "We immerse ourselves in your brand, understanding your vision, values, and objectives through in-depth research and strategic planning.",
      number: "01" 
    },
    { 
      title: "Design", 
      description: "Our creative team develops sophisticated visual concepts that align with your brand strategy and resonate with your target audience.",
      number: "02" 
    },
    { 
      title: "Refine", 
      description: "Through collaborative feedback and iterative improvements, we perfect every detail to ensure the design exceeds expectations.",
      number: "03" 
    },
    { 
      title: "Deliver", 
      description: "We provide comprehensive brand assets, guidelines, and ongoing support to ensure successful implementation across all touchpoints.",
      number: "04" 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50"
        initial={{ scaleX: 0 }}
      >
        <motion.div 
          className="h-full bg-blue-900 origin-left"
          style={{ scaleX: scrollProgress / 100 }}
        />
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="refined-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="0.5" fill="#1e3a8a"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#refined-grid)" />
          </svg>
        </div>
        
        {/* Subtle geometric accent */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-900/[0.02] blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600"
              >
                <Sparkles className="w-4 h-4" />
                <span>Award-winning design studio</span>
              </motion.div>

              <motion.h1 
                className="text-7xl sm:text-8xl lg:text-9xl font-extralight text-gray-900 leading-[0.95] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                Design
                <br />
                <span className="text-blue-900">Excellence</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl text-gray-500 max-w-3xl font-light leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                We create refined visual identities and digital experiences through minimalist aesthetics, strategic thinking, and meticulous attention to detail.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <button className="group px-8 py-4 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-full hover:border-blue-900 hover:text-blue-900 transition-all duration-300">
                  View Portfolio
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Refined scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-xs tracking-widest text-gray-400 uppercase">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center w-14 h-14 mb-6 text-blue-900"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-5xl font-extralight text-gray-900 mb-3">{stat.value}</div>
                <div className="text-sm text-gray-500 font-light tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={sectionRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-20">
              <motion.h2 
                className="text-6xl sm:text-7xl font-extralight text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-500 font-light max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Specialized design solutions tailored to elevate your brand across every touchpoint
              </motion.p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-start mb-16 border-b border-gray-200">
              {[
                { id: 'branding', label: 'Branding' },
                { id: 'digital', label: 'Digital' },
                { id: 'print', label: 'Print' },
                { id: 'motion', label: 'Motion' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ y: -2 }}
                  className={`relative px-8 py-4 text-sm font-light tracking-wide transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-900'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-2">
              {designServices[activeTab].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`group cursor-pointer border border-gray-100 hover:border-gray-200 transition-all duration-300 ${
                      expandedService === service.id ? 'bg-gray-50' : 'bg-white'
                    }`}
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-6 flex-1">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}
                          >
                            {service.icon}
                          </motion.div>
                          
                          <div className="flex-1 pt-1">
                            <h3 className="text-2xl font-light text-gray-900 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-blue-900 group-hover:text-blue-900 transition-colors flex-shrink-0 ml-4"
                        >
                          {expandedService === service.id ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </motion.div>
                      </div>

                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 pl-20 border-t border-gray-200 mt-6">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center text-gray-600 font-light"
                                >
                                  <Check className="w-4 h-4 text-blue-900 mr-3 flex-shrink-0" />
                                  {feature}
                                </motion.div>
                              ))}
                            </div>
                            <motion.button
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="px-6 py-3 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 text-sm"
                            >
                              Get Started
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-20">
              <h2 className="text-6xl sm:text-7xl font-extralight text-gray-900 mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-500 font-light max-w-2xl">
                A thoughtful approach to creating exceptional design solutions
              </p>
            </div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start space-x-8 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-blue-900 flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300"
                  >
                    <span className="text-2xl font-extralight text-blue-900 group-hover:text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </motion.div>

                  <div className="pt-4 flex-1">
                    <h3 className="text-3xl font-light text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-20">
              <h2 className="text-6xl sm:text-7xl font-extralight text-gray-900 mb-6">
                Selected Work
              </h2>
              <p className="text-xl text-gray-500 font-light max-w-2xl">
                A curated collection of recent projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(item.id)}
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-6 border border-gray-100">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-gray-900/5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-7xl font-extralight text-gray-300">
                        {item.title.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-light text-gray-900 text-xl mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-gray-400 font-light">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <button className="px-8 py-4 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 inline-flex items-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-6xl sm:text-7xl font-extralight mb-8 leading-tight">
              Let's Create
              <br />
              Something Remarkable
            </h2>
            <p className="text-xl text-blue-100 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Ready to elevate your brand with sophisticated design? We'd love to hear about your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2">
                <PenTool className="w-4 h-4" />
                <span>Start a Project</span>
              </button>
              <button className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-12">
              <div className="flex justify-between items-start mb-12">
                <h3 className="text-4xl font-extralight text-gray-900">
                  {portfolioItems.find(p => p.id === selectedProject)?.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-100">
                  <div className="text-8xl font-extralight text-gray-300">
                    {portfolioItems.find(p => p.id === selectedProject)?.title.charAt(0)}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  <div>
                    <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-4">Overview</h4>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                      A sophisticated design solution that establishes a distinctive visual identity and creates meaningful connections with the target audience through refined aesthetics and strategic thinking.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm tracking-widest text-gray-400 uppercase mb-6">Details</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 font-light">Category</span>
                        <span className="text-gray-900">
                          {portfolioItems.find(p => p.id === selectedProject)?.category}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 font-light">Year</span>
                        <span className="text-gray-900">
                          {portfolioItems.find(p => p.id === selectedProject)?.year}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-500 font-light">Services</span>
                        <span className="text-gray-900">Brand Identity, Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default GraphicsDesignPage;