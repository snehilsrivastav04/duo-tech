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
        <section className="relative h-auto min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/circuit-pattern.svg')] bg-[size:100px_100px]" />
          </div>
          
          {/* Floating app icons */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 80 - 40],
                x: [0, Math.random() * 80 - 40],
                rotate: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute rounded-lg bg-white/10 backdrop-blur-sm ${
                i % 3 === 0 ? 'w-16 h-16' : i % 2 === 0 ? 'w-12 h-12' : 'w-10 h-10'
              } flex items-center justify-center`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              {[<FaWhatsapp />, <FaGooglePlay />, <FaAndroid />, <SiFirebase />][i % 4]}
            </motion.div>
          ))}

          <Container className="h-full flex items-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  className="inline-block mb-8"
                >
                  <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    ANDROID DEVELOPMENT EXPERTS
                  </div>
                </motion.div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {pageData.hero.title}
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  {pageData.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  {pageData.hero.ctas.map((cta, i) => (
                    <Button
                      key={i}
                      variant={cta.variant as any}
                      size="lg"
                      className={`${i === 0 ? 'bg-green-500 hover:bg-green-600' : 'border-white text-white hover:bg-white/10'}`}
                    >
                      {cta.text}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {pageData.hero.features.map((feature, i) => (
                    <div key={i} className="flex items-center bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Phone mockup with sliding screens */}
                <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-[60px] shadow-2xl transform rotate-1" />
                  <div className="relative bg-gray-900 rounded-[50px] p-2 shadow-2xl overflow-hidden border-8 border-gray-900">
                    <div className="h-10 flex items-center justify-center relative">
                      <div className="absolute left-4 w-4 h-4 bg-gray-700 rounded-full" />
                      <div className="w-24 h-1 bg-gray-700 rounded-full" />
                    </div>
                    <div className="h-[600px] bg-gray-800 rounded-[40px] overflow-hidden relative">
                      <motion.div
                        animate={{ y: [0, -1800] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="h-[2400px]"
                      >
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={`h-[600px] flex items-center justify-center ${i % 2 === 0 ? 'bg-indigo-900/30' : 'bg-gray-800'}`}>
                            <div className="text-center p-8">
                              <div className="text-2xl font-bold text-white mb-4">App Screen {i+1}</div>
                              <div className="text-gray-400">Beautifully designed interface</div>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive <span className="text-blue-600 dark:text-blue-400">Android Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                End-to-end solutions from concept to Play Store deployment
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-900/30 mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px]" />
          </div>

          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pageData.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      {metric.icon}
                    </div>
                  </div>
                  <motion.p
                    className="text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {metric.value}
                  </motion.p>
                  <p className="text-lg font-medium text-white/90">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Tech Stack Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-blue-600 dark:text-blue-400">Technology Stack</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Modern tools and frameworks we use to build high-quality Android apps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(pageData.techStack).map(([category, items], i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-4">
                    {items.map((tech, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ x: 5 }}
                        className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        <div className="flex-shrink-0 mr-3">
                          {tech.icon}
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Development Process Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-blue-600 dark:text-blue-400">Development Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Transparent workflow from initial concept to final deployment
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 -translate-x-1/2 hidden lg:block" />

              <div className="space-y-16 lg:space-y-0">
                {pageData.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block" />

                    {/* Content */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="lg:w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    {/* Empty spacer */}
                    <div className="lg:w-5/12 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Project Showcase Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-blue-600 dark:text-blue-400">Android Projects</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Featured apps we've built for clients across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                    {/* Phone mockup placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-56 bg-gray-900 rounded-lg border-4 border-gray-900 overflow-hidden shadow-lg">
                        <div className="h-6 flex items-center justify-center relative bg-gray-900">
                          <div className="absolute left-2 w-2 h-2 bg-gray-700 rounded-full" />
                          <div className="w-8 h-1 bg-gray-700 rounded-full" />
                        </div>
                        <div className="h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{project.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                      <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{project.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, j) => (
                        <span key={j} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <Code className="inline mr-1 w-4 h-4" /> {project.platform}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View All Projects
              </Button>
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industries We <span className="text-blue-600 dark:text-blue-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Custom Android solutions tailored for your business domain
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {pageData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{industry.name}</h3>
                </motion.div>
              ))}
            </div>
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

        {/* Testimonials Section */}
        <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] bg-[size:100px_100px]" />
          </div>

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Client <span className="text-cyan-300">Testimonials</span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pageData.testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl text-white mb-6">"{testimonial.quote}"</p>
                  <div className="text-blue-100">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
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