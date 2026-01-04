import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Code, LayoutTemplate, BarChart2, PenTool,
  ArrowRight, Check, Zap, Shield, GitBranch, Server, 
  Clock, Terminal, MessageSquare, Mail, Users, Globe,
  ChevronLeft, ChevronRight, Download, Layers, Cpu, Settings,
  Database, ShieldCheck, Bell, MapPin, CreditCard,
  Camera, User, FileText, PieChart, RefreshCw,
  ShoppingCart, Smartphone, Heart,Book, // Add Heart here
  Star // Make sure Star is also imported
} from 'lucide-react';
import { FaGooglePlay, FaAndroid, FaFire, FaRegLightbulb, FaWhatsapp } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiReact, SiMongodb, SiNodedotjs, SiStripe, SiTwilio } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/home/FAQAccordion';

const AndroidDevelopmentPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [activeTab, setActiveTab] = useState<'native' | 'cross'>('native');

  // Data for the page
  const pageData = {
    hero: {
      title: "Build Powerful Android Apps for the Future",
      subtitle: "We create scalable, fast, and feature-rich Android applications for startups, businesses, and visionaries",
      ctas: [
        { text: "Get a Free App Audit", variant: "primary" },
        { text: "See Our Work", variant: "outline" }
      ],
      features: [
        "100% Custom Development",
        "Google Play Ready",
        "4.7+ Average Rating",
        "Crash-Free Experience"
      ]
    },
    services: [
      {
        title: "Native Android Development",
        icon: <FaAndroid className="w-8 h-8 text-green-500" />,
        description: "High-performance apps using Kotlin and Java with Material Design principles",
        features: [
          "Kotlin-first approach",
          "Jetpack Components",
          "Material Design 3",
          "Android 14 Ready"
        ]
      },
      {
        title: "Cross-Platform Apps",
        icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
        description: "Single codebase for Android and iOS using Flutter framework",
        features: [
          "Flutter 3.0+",
          "Custom Widgets",
          "Platform Channels",
          "60fps Performance"
        ]
      },
      {
        title: "UI/UX Design",
        icon: <PenTool className="w-8 h-8 text-purple-500" />,
        description: "Pixel-perfect interfaces that follow Google's design guidelines",
        features: [
          "Figma Prototypes",
          "Motion Design",
          "Dark/Light Mode",
          "Accessibility Ready"
        ]
      },
      {
        title: "Backend Integration",
        icon: <Server className="w-8 h-8 text-orange-500" />,
        description: "Secure cloud infrastructure for your app's backend needs",
        features: [
          "Firebase Services",
          "REST/GraphQL APIs",
          "Real-time Database",
          "Serverless Functions"
        ]
      },
      {
        title: "Advanced Features",
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        description: "Implement complex functionality with ease",
        features: [
          "In-App Purchases",
          "Push Notifications",
          "Biometric Auth",
          "AR/VR Integration"
        ]
      },
      {
        title: "Play Store Deployment",
        icon: <FaGooglePlay className="w-8 h-8 text-red-500" />,
        description: "Full publishing support including store optimization",
        features: [
          "ASO Strategy",
          "Screenshot Prep",
          "Release Management",
          "Closed Testing"
        ]
      }
    ],
    metrics: [
      {
        value: "<2s",
        label: "App Load Time",
        icon: <Zap className="w-8 h-8 text-blue-500" />
      },
      {
        value: "99.9%",
        label: "Crash-Free Sessions",
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />
      },
      {
        value: "4.7+",
        label: "Avg. App Store Rating",
        icon: <BarChart2 className="w-8 h-8 text-yellow-500" />
      },
      {
        value: "100K+",
        label: "App Installs",
        icon: <Download className="w-8 h-8 text-purple-500" />
      }
    ],
    techStack: {
      frontend: [
        { name: "Kotlin", icon: <SiKotlin className="w-6 h-6" /> },
        { name: "Java", icon: <FaAndroid className="w-6 h-6" /> },
        { name: "Flutter", icon: <SiFlutter className="w-6 h-6" /> },
        { name: "Jetpack Compose", icon: <Layers className="w-6 h-6" /> }
      ],
      backend: [
        { name: "Firebase", icon: <SiFirebase className="w-6 h-6" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
        { name: "GraphQL", icon: <Database className="w-6 h-6" /> }
      ],
      devops: [
        { name: "GitHub Actions", icon: <GitBranch className="w-6 h-6" /> },
        { name: "Play Console", icon: <FaGooglePlay className="w-6 h-6" /> },
        { name: "Fastlane", icon: <Terminal className="w-6 h-6" /> },
        { name: "CI/CD Pipelines", icon: <RefreshCw className="w-6 h-6" /> }
      ],
      apis: [
        { name: "Google Maps", icon: <MapPin className="w-6 h-6" /> },
        { name: "Razorpay", icon: <CreditCard className="w-6 h-6" /> },
        { name: "Stripe", icon: <SiStripe className="w-6 h-6" /> },
        { name: "Twilio", icon: <SiTwilio className="w-6 h-6" /> }
      ]
    },
    process: [
      {
        title: "Discovery",
        description: "Requirement gathering & planning",
        icon: <FaRegLightbulb className="w-6 h-6" />
      },
      {
        title: "Design",
        description: "Wireframing & UI mockups",
        icon: <PenTool className="w-6 h-6" />
      },
      {
        title: "Development",
        description: "Coding & implementation",
        icon: <Code className="w-6 h-6" />
      },
      {
        title: "Testing",
        description: "QA & performance optimization",
        icon: <Settings className="w-6 h-6" />
      },
      {
        title: "Deployment",
        description: "Play Store submission",
        icon: <FaGooglePlay className="w-6 h-6" />
      },
      {
        title: "Maintenance",
        description: "Updates & support",
        icon: <Cpu className="w-6 h-6" />
      }
    ],
    projects: [
      {
        name: "E-Commerce App",
        description: "Complete shopping solution with AR product preview",
        features: ["Payment Gateway", "Order Tracking", "Wishlist", "Reviews"],
        platform: "Kotlin + Firebase",
        rating: 4.8
      },
      {
        name: "Fitness Tracker",
        description: "Workout planner with AI recommendations",
        features: ["Health Data", "Video Guides", "Progress Charts", "Community"],
        platform: "Flutter + Node.js",
        rating: 4.9
      },
      {
        name: "Food Delivery",
        description: "Restaurant ordering system with real-time tracking",
        features: ["Live Tracking", "Chat Support", "Multi-Payment", "Promotions"],
        platform: "Kotlin + MongoDB",
        rating: 4.7
      }
    ],
    industries: [
      { name: "E-commerce", icon: <ShoppingCart className="w-6 h-6" /> },
      { name: "Healthcare", icon: <Heart className="w-6 h-6" /> },
      { name: "Education", icon: <Book className="w-6 h-6" /> },
      { name: "Finance", icon: <CreditCard className="w-6 h-6" /> },
      { name: "Social", icon: <Users className="w-6 h-6" /> },
      { name: "Travel", icon: <MapPin className="w-6 h-6" /> }
    ],
    features: [
      { name: "Push Notifications", icon: <Bell className="w-5 h-5" /> },
      { name: "Geo-Location", icon: <MapPin className="w-5 h-5" /> },
      { name: "In-App Purchases", icon: <CreditCard className="w-5 h-5" /> },
      { name: "PDF Generation", icon: <FileText className="w-5 h-5" /> },
      { name: "Camera Integration", icon: <Camera className="w-5 h-5" /> },
      { name: "Social Login", icon: <User className="w-5 h-5" /> },
      { name: "In-App Chat", icon: <MessageSquare className="w-5 h-5" /> },
      { name: "Analytics", icon: <PieChart className="w-5 h-5" /> },
      { name: "Real-Time Sync", icon: <RefreshCw className="w-5 h-5" /> },
      { name: "Offline Mode", icon: <Database className="w-5 h-5" /> }
    ],
    deliverables: [
      "Full Source Code",
      "Admin Dashboard",
      "API Documentation",
      "Design Files (Figma)",
      "6 Months Support",
      "Play Store Upload"
    ],
    testimonials: 
     [
  {
    quote: "The team delivered an app that exceeded our expectations. The code quality was exceptional and the UI was flawless.",
    author: "Rahul Sharma",
    role: "CEO",
    rating: 5
  },
  {
    quote: "Our app saw 3x more engagement after their redesign. The performance optimizations made a huge difference.",
    author: "Priya Singh",
    role: "Product Manager",
    rating: 5
  }
],

    faqs: [
      {
        question: "How long does Android app development take?",
        answer: "Typically 3-6 months depending on complexity. We deliver MVP in 8-12 weeks."
      },
      {
        question: "Do you provide maintenance after launch?",
        answer: "Yes, we offer 6 months free support and optional annual maintenance plans."
      },
      {
        question: "Can you migrate my existing app to newer Android versions?",
        answer: "Absolutely! We specialize in app modernization and compatibility updates."
      },
      {
        question: "What's your pricing model?",
        answer: "We offer fixed-price projects for defined scope and hourly rates for ongoing work."
      }
    ]
  };

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
  {/* Minimal background pattern */}
  <div className="absolute inset-0 opacity-[0.02]">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_74%,#0ea5e9_75%,#0000_76%,#0000_89%,#0ea5e9_90%)] bg-[size:100px_100px]" />
  </div>
  
  {/* Subtle floating elements */}
  {[...Array(8)].map((_, i) => (
    <motion.div
      key={i}
      animate={{
        y: [0, Math.random() * 40 - 20],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 8 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className={`absolute rounded-full bg-blue-600/5 dark:bg-blue-400/5 ${
        i % 4 === 0 ? 'w-24 h-24' : i % 3 === 0 ? 'w-16 h-16' : i % 2 === 0 ? 'w-12 h-12' : 'w-8 h-8'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  ))}

  <Container className="h-full flex items-center relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:pr-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/30"
        >
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
            Android Development Experts
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
          {pageData.hero.title.split(' ').map((word, i) => (
            <span key={i} className={i === pageData.hero.title.split(' ').length - 1 ? "font-normal text-blue-600 dark:text-blue-400" : ""}>
              {word}{' '}
            </span>
          ))}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl">
          {pageData.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {pageData.hero.ctas.map((cta, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant={cta.variant as any}
                size="lg"
                className={`
                  ${i === 0 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                  px-8 py-4 rounded-lg font-normal text-base transition-all duration-300
                `}
              >
                {cta.text}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-3">
          {pageData.hero.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center text-gray-600 dark:text-gray-400 group"
            >
              <div className="w-6 h-6 flex items-center justify-center mr-4">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Phone Mockup - Fixed Version */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative w-80">
          {/* Phone Frame */}
          <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-900">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="relative bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-[2rem] overflow-hidden h-[520px]">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-6 pb-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">9:41</div>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h3>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">+</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="px-6 mb-6 grid grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">128</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Downloads</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">4.8</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Rating</div>
                </div>
              </div>

              {/* Feature List */}
              <div className="px-6 space-y-3 mb-6">
                {['Analytics', 'Notifications', 'Settings', 'Profile'].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg ${
                        index === 0 ? 'bg-blue-100 dark:bg-blue-900' : 
                        index === 1 ? 'bg-green-100 dark:bg-green-900' :
                        index === 2 ? 'bg-purple-100 dark:bg-purple-900' :
                        'bg-orange-100 dark:bg-orange-900'
                      } flex items-center justify-center mr-3`}>
                        <div className={`w-2 h-2 rounded-full ${
                          index === 0 ? 'bg-blue-500' : 
                          index === 1 ? 'bg-green-500' :
                          index === 2 ? 'bg-purple-500' :
                          'bg-orange-500'
                        }`}></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                    <div className="text-gray-400">›</div>
                  </div>
                ))}
              </div>

              {/* Progress Section */}
              <div className="px-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Storage</span>
                  <span className="text-gray-900 dark:text-white font-medium">65%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-around py-3">
                  {['🏠', '📊', '🔔', '👤'].map((icon, index) => (
                    <div
                      key={index}
                      className={`p-2 rounded-lg ${
                        index === 0 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-400'
                      }`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/10 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600/5 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  </Container>
</section>

        {/* Services Section */}
       {/* Services Section */}
<section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <div className="inline-block mb-4">
        <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
        <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
          Our Expertise
        </h3>
      </div>
      <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
        Comprehensive <span className="font-normal text-blue-600 dark:text-blue-400">Android Services</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        End-to-end solutions from concept to Play Store deployment and beyond
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pageData.services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 h-full flex flex-col">
            {/* Icon and Title */}
            <div className="flex items-start mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-blue-700/30 transition-all duration-500 mr-5">
                <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-normal text-gray-900 dark:text-white pt-1 tracking-tight">
                {service.title}
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            
            {/* Features List */}
            <ul className="space-y-4">
              {service.features.map((feature, j) => (
                <motion.li 
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                  className="flex items-center group/item"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
        </motion.div>
      ))}
    </div>
  </Container>
</section>

{/* Metrics Section */}
<section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
  {/* Subtle background pattern */}
  <div className="absolute inset-0 opacity-[0.02]">
    <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_74%,#0ea5e9_75%,#0000_76%,#0000_89%,#0ea5e9_90%)] bg-[size:80px_80px]" />
  </div>

  <Container>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {pageData.metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                  {metric.icon}
                </div>
              </div>
            </div>
            
            {/* Metric Value */}
            <motion.p
              className="text-5xl font-light text-gray-900 dark:text-white mb-3 tracking-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
            >
              {metric.value}
            </motion.p>
            
            {/* Metric Label */}
            <p className="text-lg font-normal text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
              {metric.label}
            </p>
          </div>
          
          {/* Subtle hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </motion.div>
      ))}
    </div>
  </Container>
</section>

{/* Tech Stack Section */}
<section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <div className="inline-block mb-4">
        <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
        <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
          Technology
        </h3>
      </div>
      <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
        Our <span className="font-normal text-blue-600 dark:text-blue-400">Technology Stack</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Modern tools and frameworks we leverage to build exceptional Android applications
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Object.entries(pageData.techStack).map(([category, items], i) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 h-full">
            {/* Category Title */}
            <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-8 capitalize tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            
            {/* Tech Items */}
            <div className="space-y-4">
              {items.map((tech, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + j * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 group/item"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300 font-normal">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </Container>
</section>

        {/* Development Process Section */}
        <section className="py-40 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <Container>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-8 px-5 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-900/30"
              >
               
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
                From idea to
                <br />
                <span className="font-normal text-blue-600 dark:text-blue-400">reality</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                A transparent, collaborative approach that transforms your vision into exceptional software
              </p>
            </motion.div>

            {/* Process Steps - Horizontal Flow */}
            <div className="max-w-7xl mx-auto">
              {/* Desktop: Horizontal Timeline */}
              <div className="hidden lg:block relative">
                {/* Connecting line */}
                <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700 to-transparent"></div>

                <div className="grid grid-cols-6 gap-8">
                  {pageData.process.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-dark-900 shadow-lg z-10 group-hover:bg-blue-500 transition-colors"
                      />

                      {/* Content */}
                      <div className="pt-32">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white dark:group-hover:from-blue-600 dark:group-hover:to-blue-700 transition-all duration-500"
                        >
                          {step.icon}
                        </motion.div>

                        {/* Step number */}
                        <div className="text-6xl font-light text-gray-200 dark:text-dark-700 mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          0{i + 1}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-light text-center leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile/Tablet: Vertical Timeline */}
              <div className="lg:hidden space-y-12">
                {pageData.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="relative pl-20 group"
                  >
                    {/* Vertical line */}
                    {i < pageData.process.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-blue-300 to-transparent dark:from-blue-700"></div>
                    )}

                    {/* Timeline dot */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-dark-900 shadow-lg group-hover:bg-blue-500 transition-colors"
                    />

                    {/* Step number */}
                    <div className="text-5xl font-light text-gray-200 dark:text-dark-700 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      0{i + 1}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white dark:group-hover:from-blue-600 dark:group-hover:to-blue-700 transition-all duration-500"
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-24"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 font-light mb-6">
                Ready to see how we can bring your project to life?
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-base shadow-lg shadow-blue-600/30"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Your Project
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </section>
        {/* Project Showcase Section */}
        <section className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <div className="inline-block mb-4">
        <div className="h-px w-12 bg-blue-600 dark:bg-blue-400 mb-2"></div>
        <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-light">
          Our Work
        </h3>
      </div>
      <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
        Android <span className="font-normal text-blue-600 dark:text-blue-400">Projects</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Featured applications we've crafted for clients across diverse industries
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {pageData.projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500"
        >
          {/* Project number indicator */}
          <div className="absolute top-6 left-6 z-10">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium rounded-full">
              {i + 1}
            </div>
          </div>
          
          {/* Phone mockup with refined styling */}
          <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
            <div className="w-32 h-56 bg-gray-900 rounded-2xl border-4 border-gray-900 overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-500">
              <div className="h-5 flex items-center justify-center relative bg-gray-900">
                <div className="absolute left-3 w-1 h-1 bg-gray-700 rounded-full" />
                <div className="w-10 h-0.5 bg-gray-700 rounded-full" />
                <div className="absolute right-3 w-2 h-2 bg-gray-700 rounded-full" />
              </div>
              <div className="h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-center px-2">
                  <span className="text-white font-medium text-xs block">{project.name}</span>
                  <div className="mt-2 flex justify-center">
                    <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                    <div className="w-1 h-1 bg-white/50 rounded-full mx-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 dark:bg-blue-400/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </div>
          
          {/* Content area */}
          <div className="p-7">
            <div className="flex justify-between items-start mb-5">
              <h3 className="text-xl font-normal text-gray-900 dark:text-white tracking-tight">{project.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{project.rating}</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.features.slice(0, 3).map((feature, j) => (
                <span 
                  key={j} 
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                <Code className="w-4 h-4 mr-2" />
                {project.platform}
              </div>
              <div className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-center mt-20"
    >
      <Button
        variant="outline"
        size="lg"
        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-normal tracking-wide group"
        icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
      >
        View All Projects
      </Button>
    </motion.div>
  </Container>
</section>

        {/* Industries Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <div className="inline-block mb-4">
        <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
        <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
          Expertise Across Sectors
        </h3>
      </div>
      <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
        Industries We <span className="font-normal text-blue-600 dark:text-blue-400">Serve</span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Tailored Android solutions designed for your specific business domain and requirements
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {pageData.industries.map((industry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="group relative"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 flex flex-col items-center text-center h-full">
            {/* Icon container with refined styling */}
            <div className="relative mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-blue-700/30 transition-all duration-500">
                <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-500">
                  {industry.icon}
                </div>
              </div>
              
              {/* Subtle decorative element */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Industry name with refined typography */}
            <h3 className="font-normal text-gray-900 dark:text-white text-lg tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {industry.name}
            </h3>
            
            {/* Subtle hover indicator */}
            <div className="mt-4 w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transform group-hover:scale-x-150 transition-all duration-500"></div>
          </div>
          
          {/* Background glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-blue-600/5 dark:bg-blue-400/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
        </motion.div>
      ))}
    </div>

    {/* Decorative background elements */}
    <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl -z-10"></div>
  </Container>
</section>

        {/* App Features Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful <span className="text-blue-600 dark:text-blue-400">App Features</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Advanced functionality we can implement in your Android app
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {pageData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center bg-white dark:bg-gray-800 px-4 py-3 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mr-2 text-blue-500">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Deliverables Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What You <span className="text-blue-600 dark:text-blue-400">Get</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Complete package delivered with every project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {pageData.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <Check className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-800 dark:text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

      

        {/* FAQ Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about our Android development services
              </p>
            </motion.div>

            <FAQAccordion faqs={pageData.faqs} />
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-[size:100px_100px]" />
          </div>

          {/* Floating phone icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 60 - 30],
                x: [0, Math.random() * 60 - 30],
                rotate: [0, Math.random() * 15 - 7.5]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute rounded-lg bg-white/10 backdrop-blur-sm w-12 h-20 flex items-center justify-center border border-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <Smartphone className="w-6 h-6 text-white" />
            </motion.div>
          ))}

          <Container className="relative z-10">
            <motion.div
              style={{ scale }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                  READY TO BUILD YOUR APP?
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's Create Your <span className="text-cyan-300">Android App</span> Today
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Starting from just ₹3999. Get a free consultation and project estimate.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-12"
                  icon={<ArrowRight size={20} />}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 px-12"
                  icon={<MessageSquare size={20} />}
                >
                  Chat With Us
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default AndroidDevelopmentPage;