import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  PenTool, LayoutTemplate, ShoppingCart, Image, 
  Film, BookOpen, Mail, Smartphone, Zap, 
  ArrowRight, ChevronLeft, ChevronRight, Check, Users,
  Palette, HelpCircle, Star, Sparkles, Award, Target, Clock, Heart
} from 'lucide-react';
import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import ParallaxImage from '../components/ui/ParallaxImage';

const GraphicsDesignPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'branding' | 'digital' | 'print' | 'motion'>('branding');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Custom SVG graphics
  const GraphicElements = {
    Blob1: () => (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-20 w-72 h-72 opacity-30 text-blue-400">
        <path fill="currentColor" d="M45.7,-58.3C62.7,-50.4,82.2,-42.9,88.5,-29.2C94.8,-15.5,87.9,4.5,79.3,21.9C70.7,39.3,60.4,54.2,46.2,63.7C32,73.2,14,77.4,-1.1,78.9C-16.2,80.5,-32.3,79.4,-44.3,70.4C-56.3,61.4,-64.1,44.5,-70.8,27.1C-77.5,9.7,-83.1,-8.3,-79.3,-23.3C-75.5,-38.3,-62.3,-50.4,-47.3,-59C-32.3,-67.6,-15.1,-72.8,0.3,-73.2C15.7,-73.6,31.3,-69.3,45.7,-58.3Z" transform="translate(100 100)" />
      </svg>
    ),
    Blob2: () => (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-20 -left-20 w-64 h-64 opacity-40 text-purple-500">
        <path fill="currentColor" d="M38.2,-58.3C51.8,-50.4,66.5,-42.9,74.9,-30.7C83.3,-18.5,85.5,-1.6,80.6,11.9C75.7,25.4,63.8,35.5,51.1,43.2C38.4,50.9,24.9,56.2,10.9,59.8C-3.1,63.4,-17.6,65.3,-29.3,60.3C-41,55.3,-49.8,43.4,-57.9,30.2C-66,17,-73.4,2.6,-71.7,-10.3C-70,-23.2,-59.2,-34.5,-46.9,-42.6C-34.5,-50.6,-20.7,-55.3,-6.3,-56.9C8,-58.5,24.6,-57,38.2,-58.3Z" transform="translate(100 100)" />
      </svg>
    ),
    CircleGrid: () => (
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-10">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="5" fill="currentColor" className="text-cyan-400"/>
          <circle cx="100" cy="50" r="5" fill="currentColor" className="text-cyan-400"/>
          <circle cx="150" cy="50" r="5" fill="currentColor" className="text-cyan-400"/>
          <circle cx="200" cy="50" r="5" fill="currentColor" className="text-cyan-400"/>
          <circle cx="250" cy="50" r="5" fill="currentColor" className="text-cyan-400"/>
          <circle cx="50" cy="100" r="5" fill="currentColor" className="text-purple-500"/>
          <circle cx="100" cy="100" r="5" fill="currentColor" className="text-purple-500"/>
          <circle cx="150" cy="100" r="5" fill="currentColor" className="text-purple-500"/>
          <circle cx="200" cy="100" r="5" fill="currentColor" className="text-purple-500"/>
          <circle cx="250" cy="100" r="5" fill="currentColor" className="text-purple-500"/>
          <circle cx="50" cy="150" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="100" cy="150" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="150" cy="150" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="200" cy="150" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="250" cy="150" r="5" fill="currentColor" className="text-blue-500"/>
          <circle cx="50" cy="200" r="5" fill="currentColor" className="text-pink-500"/>
          <circle cx="100" cy="200" r="5" fill="currentColor" className="text-pink-500"/>
          <circle cx="150" cy="200" r="5" fill="currentColor" className="text-pink-500"/>
          <circle cx="200" cy="200" r="5" fill="currentColor" className="text-pink-500"/>
          <circle cx="250" cy="200" r="5" fill="currentColor" className="text-pink-500"/>
          <circle cx="50" cy="250" r="5" fill="currentColor" className="text-yellow-400"/>
          <circle cx="100" cy="250" r="5" fill="currentColor" className="text-yellow-400"/>
          <circle cx="150" cy="250" r="5" fill="currentColor" className="text-yellow-400"/>
          <circle cx="200" cy="250" r="5" fill="currentColor" className="text-yellow-400"/>
          <circle cx="250" cy="250" r="5" fill="currentColor" className="text-yellow-400"/>
        </svg>
      </div>
    )
  };

  // Updated and expanded sample data
  const designServices = {
    branding: [
      {
        id: 1,
        title: "Logo Design",
        description: "Distinctive logos that embody your brand's essence",
        features: ["5 initial concepts", "Unlimited revisions", "Vector & raster files", "Brand guidelines"],
        image: "/images/design/logo-design.jpg",
        examples: ["/images/portfolio/logo1.jpg", "/images/portfolio/logo2.jpg", "/images/portfolio/logo3.jpg"],
        icon: <PenTool className="w-8 h-8" />
      },
      {
        id: 2,
        title: "Brand Identity",
        description: "Comprehensive visual systems for consistent branding",
        features: ["Color palette", "Typography system", "Brand patterns", "Style guide"],
        image: "/images/design/brand-identity.jpg",
        examples: ["/images/portfolio/brand1.jpg", "/images/portfolio/brand2.jpg", "/images/portfolio/brand3.jpg"],
        icon: <Palette className="w-8 h-8" />
      },
      {
        id: 8,
        title: "Brand Strategy",
        description: "Strategic direction for cohesive brand development",
        features: ["Market research", "Positioning strategy", "Voice & tone", "Visual direction"],
        image: "/images/design/brand-strategy.jpg",
        examples: ["/images/portfolio/strategy1.jpg", "/images/portfolio/strategy2.jpg"],
        icon: <Target className="w-8 h-8" />
      }
    ],
    digital: [
      {
        id: 3,
        title: "Social Media Graphics",
        description: "Engaging visuals optimized for all platforms",
        features: ["Post templates", "Story designs", "Cover photos", "Animated content"],
        image: "/images/design/social-media.jpg",
        examples: ["/images/portfolio/social1.jpg", "/images/portfolio/social2.jpg", "/images/portfolio/social3.jpg"],
        icon: <FaInstagram className="w-8 h-8" />
      },
      {
        id: 4,
        title: "Web & App UI",
        description: "Intuitive interfaces with seamless user experiences",
        features: ["Wireframes", "High-fidelity mockups", "Interactive prototypes", "Design systems"],
        image: "/images/design/web-ui.jpg",
        examples: ["/images/portfolio/ui1.jpg", "/images/portfolio/ui2.jpg", "/images/portfolio/ui3.jpg"],
        icon: <LayoutTemplate className="w-8 h-8" />
      },
      {
        id: 9,
        title: "Digital Ads",
        description: "High-converting advertisements for digital platforms",
        features: ["Banner ads", "Google display ads", "Social media ads", "Retargeting graphics"],
        image: "/images/design/digital-ads.jpg",
        examples: ["/images/portfolio/ads1.jpg", "/images/portfolio/ads2.jpg"],
        icon: <ShoppingCart className="w-8 h-8" />
      }
    ],
    print: [
      {
        id: 5,
        title: "Business Stationery",
        description: "Professional print materials for lasting impressions",
        features: ["Business cards", "Letterheads", "Envelopes", "Presentation folders"],
        image: "/images/design/stationery.jpg",
        examples: ["/images/portfolio/print1.jpg", "/images/portfolio/print2.jpg", "/images/portfolio/print3.jpg"],
        icon: <BookOpen className="w-8 h-8" />
      },
      {
        id: 6,
        title: "Packaging Design",
        description: "Eye-catching packaging that stands out",
        features: ["Structural design", "Label design", "3D mockups", "Print-ready files"],
        image: "/images/design/packaging.jpg",
        examples: ["/images/portfolio/packaging1.jpg", "/images/portfolio/packaging2.jpg", "/images/portfolio/packaging3.jpg"],
        icon: <ShoppingCart className="w-8 h-8" />
      },
      {
        id: 10,
        title: "Brochures & Catalogs",
        description: "Informative and visually appealing print materials",
        features: ["Layout design", "Typography", "Image selection", "Print preparation"],
        image: "/images/design/brochures.jpg",
        examples: ["/images/portfolio/brochure1.jpg", "/images/portfolio/brochure2.jpg"],
        icon: <BookOpen className="w-8 h-8" />
      }
    ],
    motion: [
      {
        id: 7,
        title: "Motion Graphics",
        description: "Dynamic animations that captivate audiences",
        features: ["Animated logos", "Explainer videos", "Social media animations", "Transition effects"],
        image: "/images/design/motion-graphics.jpg",
        examples: ["/images/portfolio/motion1.jpg", "/images/portfolio/motion2.jpg", "/images/portfolio/motion3.jpg"],
        icon: <Film className="w-8 h-8" />
      },
      {
        id: 11,
        title: "UI Animations",
        description: "Subtle animations that enhance user experience",
        features: ["Micro-interactions", "Loading animations", "Transition effects", "Prototyping"],
        image: "/images/design/ui-animations.jpg",
        examples: ["/images/portfolio/ui-anim1.jpg", "/images/portfolio/ui-anim2.jpg"],
        icon: <Smartphone className="w-8 h-8" />
      }
    ]
  };

  const portfolioItems = [
    { id: 1, title: "Organic Food Branding", category: "branding", image: "/images/portfolio/brand1.jpg", featured: true },
    { id: 2, title: "Tech Startup UI", category: "digital", image: "/images/portfolio/ui1.jpg", featured: true },
    { id: 3, title: "Luxury Packaging", category: "print", image: "/images/portfolio/packaging1.jpg", featured: true },
    { id: 4, title: "Fitness App Design", category: "digital", image: "/images/portfolio/app1.jpg" },
    { id: 5, title: "Restaurant Identity", category: "branding", image: "/images/portfolio/brand2.jpg" },
    { id: 6, title: "Book Cover Design", category: "print", image: "/images/portfolio/print1.jpg" },
    { id: 7, title: "Product Launch Animation", category: "motion", image: "/images/portfolio/motion1.jpg" },
    { id: 8, title: "E-commerce Website", category: "digital", image: "/images/portfolio/ecom1.jpg" },
    { id: 9, title: "Corporate Branding", category: "branding", image: "/images/portfolio/brand3.jpg" },
  ];

  const stats = [
    { value: "250+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Heart className="w-8 h-8" /> },
    { value: "15+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { value: "50+", label: "Industries Served", icon: <Target className="w-8 h-8" /> },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business goals and audience",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Research",
      description: "Analyzing market trends and competitors",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Concepting",
      description: "Creating initial designs and moodboards",
      icon: <PenTool className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Design",
      description: "Crafting polished visual solutions",
      icon: <Image className="w-6 h-6" />,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Delivery",
      description: "Providing final assets and support",
      icon: <Mail className="w-6 h-6" />,
      color: "from-indigo-400 to-blue-500"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Creative Director",
      image: "/images/team/alex.jpg",
      social: { behance: "#", dribbble: "#", instagram: "#" },
      specialties: ["Brand Strategy", "Art Direction"]
    },
    {
      id: 2,
      name: "Lisa Wong",
      role: "Senior UI/UX Designer",
      image: "/images/team/lisa.jpg",
      social: { behance: "#", dribbble: "#", instagram: "#" },
      specialties: ["User Interface", "Experience Design"]
    },
    {
      id: 3,
      name: "James Carter",
      role: "Motion Graphics Specialist",
      image: "/images/team/james.jpg",
      social: { behance: "#", dribbble: "#", instagram: "#" },
      specialties: ["Animation", "Visual Effects"]
    },
    {
      id: 4,
      name: "Maya Patel",
      role: "Brand Designer",
      image: "/images/team/maya.jpg",
      social: { behance: "#", dribbble: "#", instagram: "#" },
      specialties: ["Identity Design", "Typography"]
    }
  ];

  const faqs = [
    {
      question: "What is the typical timeline for a branding project?",
      answer: "A complete branding project typically takes 4-6 weeks, depending on complexity and revisions."
    },
    {
      question: "Do you provide source files?",
      answer: "Yes, we provide all source files (AI, PSD, etc.) along with final deliverables."
    },
    {
      question: "Can you handle rush projects?",
      answer: "Yes, we offer expedited services for urgent projects. Contact us for details."
    },
    {
      question: "How do you handle revisions?",
      answer: "We include a specific number of revision rounds in each package and are flexible to accommodate additional needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We've worked with clients across various industries including tech, healthcare, fashion, food & beverage, and non-profit."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section - Enhanced with graphics */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10 z-0" />
        <GraphicElements.Blob1 />
        <GraphicElements.Blob2 />
        
        <Container className="relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Award-winning design studio
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Visual Design
                </span>{" "}
                That <br />Inspires Action
              </h1>
              <p className="text-xl text-blue-100 max-w-md">
                We craft stunning visual identities that elevate brands, engage audiences, and drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start a Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-lg mx-auto"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
              <ParallaxImage
                src="/images/design/hero-design.jpg"
                alt="Graphic Design Work"
                className="rounded-2xl shadow-2xl w-full relative z-10 border-2 border-white/20"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-24 h-24 opacity-20"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-0 right-0 text-center text-white/80 z-10"
        >
          <p className="mb-2 text-sm">Scroll to explore</p>
          <ArrowRight className="w-6 h-6 mx-auto rotate-90 animate-bounce" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-800 relative overflow-hidden">
        <GraphicElements.CircleGrid />
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section - Enhanced with new Motion category */}
      <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <GraphicElements.Blob1 />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm mb-4">
              <Palette className="w-4 h-4 mr-2" />
              Our Creative Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Design Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Drive Growth</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              Tailored creative solutions for your brand's success across all platforms and mediums
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex-wrap gap-2 justify-center shadow-inner">
              {[
                { id: 'branding', label: 'Branding', icon: <PenTool className="w-5 h-5" /> },
                { id: 'digital', label: 'Digital', icon: <Smartphone className="w-5 h-5" /> },
                { id: 'print', label: 'Print', icon: <LayoutTemplate className="w-5 h-5" /> },
                { id: 'motion', label: 'Motion', icon: <Film className="w-5 h-5" /> }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full text-sm font-medium flex items-center transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices[activeTab].map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0"></div>
                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <ParallaxImage
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                        >
                          View Examples
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                      onClick={() => setSelectedProject(service.id)}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Section - Improved masonry layout */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/30 relative overflow-hidden">
        <GraphicElements.Blob2 />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm mb-4">
              <Award className="w-4 h-4 mr-2" />
              Featured Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Creative Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              Discover our transformative design projects that have helped brands stand out and succeed
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg break-inside-avoid"
                onClick={() => setSelectedProject(item.id)}
              >
                {item.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
                <ParallaxImage
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-end">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs bg-white text-gray-800 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              View Full Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Process Section - Enhanced timeline */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <GraphicElements.CircleGrid />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              How We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Magic</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              A proven approach for exceptional results that transforms ideas into impactful visual solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-400 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col items-center text-center ${i % 2 === 0 ? 'lg:mt-0' : 'lg:mt-20'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-6 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 z-10 hidden lg:block"></div>
                  
                  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-6 relative z-20 lg:mx-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}>
                      {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="text-5xl font-bold text-gray-200 dark:text-gray-700 mt-4">
                    {i + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section - New addition */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
        <GraphicElements.Blob1 />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-4">
              <Users className="w-4 h-4 mr-2" />
              Creative Minds
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Talented Team</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-4">
              A diverse team of creative professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <ParallaxImage
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full border-4 border-white/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-200 mb-4">{member.role}</p>
                
                <div className="flex justify-center space-x-2 mb-4">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.social.behance} className="text-white hover:text-cyan-400 transition-colors">
                    <FaBehance className="w-5 h-5" />
                  </a>
                  <a href={member.social.dribbble} className="text-white hover:text-pink-500 transition-colors">
                    <FaDribbble className="w-5 h-5" />
                  </a>
                  <a href={member.social.instagram} className="text-white hover:text-purple-400 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section - Enhanced with animations */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              Common Questions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
              Everything you need to know about our design process and services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 ml-9">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
                We're here to help. Get in touch and our team will be happy to answer any questions you might have.
              </p>
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                icon={<Mail className="w-5 h-5" />}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section - Enhanced with graphics */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <GraphicElements.Blob1 />
        <GraphicElements.Blob2 />
        <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-4">
              <Star className="w-4 h-4 mr-2" />
              Let's Create Together
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Your Vision into Reality?
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Let's collaborate to create stunning designs that elevate your brand and captivate your audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                icon={<PenTool className="w-5 h-5" />}
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/40 hover:bg-white/10 backdrop-blur-sm"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <ParallaxImage
                  src="/images/portfolio/project-detail.jpg"
                  alt="Project Detail"
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Project Title
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Details</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Client:</span>
                          <span className="text-gray-900 dark:text-white font-medium">Client Name</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Category:</span>
                          <span className="text-gray-900 dark:text-white font-medium">Branding</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Date:</span>
                          <span className="text-gray-900 dark:text-white font-medium">Jan 15, 2023</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Services:</span>
                          <span className="text-gray-900 dark:text-white font-medium">Logo Design, Brand Identity</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Adobe Illustrator', 'Photoshop', 'Figma', 'After Effects'].map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      variant="primary"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      View Live Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default GraphicsDesignPage;