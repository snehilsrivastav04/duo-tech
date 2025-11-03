import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Search, TrendingUp, BarChart3, Target, Globe, Zap,
  Check, ArrowRight, MessageSquare, Users, PenTool, Code,
  Shield, Server, FileText, PieChart, Mail, ChevronLeft,
  ChevronRight, LayoutTemplate, Clock, Terminal, Database,
  Smartphone, Heart, Book, ShoppingCart, CreditCard, MapPin,
  Star, Award, Eye, Calendar, FolderOpen, ExternalLink, MousePointer
} from 'lucide-react';
import { FaGoogle, FaRegLightbulb, FaMobile } from 'react-icons/fa';
import { SiGoogleanalytics, SiGooglesearchconsole, SiGoogletagmanager } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/home/FAQAccordion';

const SEOServicesPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Data for the page
  const pageData = {
    hero: {
      title: "Dominate Search Rankings with Expert SEO Services",
      subtitle: "Data-driven SEO strategies that increase visibility, drive qualified traffic, and boost conversions",
      ctas: [
        { text: "Get Free SEO Audit", variant: "primary" },
        { text: "See Case Studies", variant: "outline" }
      ],
      features: [
        "Google #1 Ranking Focus",
        "Transparent Reporting",
        "White-Hat Techniques Only",
        "ROI-Driven Strategies"
      ]
    },
    services: [
      {
        title: "Technical SEO",
        icon: <Code className="w-8 h-8 text-blue-500" />,
        description: "Comprehensive website optimization for search engine crawling and indexing",
        features: [
          "Site Architecture Audit",
          "Indexation Optimization",
          "Core Web Vitals",
          "Structured Data Markup"
        ]
      },
      {
        title: "Content Strategy",
        icon: <FileText className="w-8 h-8 text-green-500" />,
        description: "Creating valuable content that ranks and converts",
        features: [
          "Keyword Research",
          "Content Planning",
          "SEO-Optimized Writing",
          "Content Gap Analysis"
        ]
      },
      {
        title: "On-Page SEO",
        icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
        description: "Optimizing individual pages to rank higher and earn more relevant traffic",
        features: [
          "Meta Tag Optimization",
          "Heading Structure",
          "Internal Linking",
          "Image Optimization"
        ]
      },
      {
        title: "Local SEO",
        icon: <MapPin className="w-8 h-8 text-red-500" />,
        description: "Dominate local search results and Google Maps rankings",
        features: [
          "Google Business Profile",
          "Local Citations",
          "Review Management",
          "Localized Content"
        ]
      },
      {
        title: "E-commerce SEO",
        icon: <ShoppingCart className="w-8 h-8 text-yellow-500" />,
        description: "Specialized SEO for online stores to increase product visibility",
        features: [
          "Product Schema Markup",
          "Category Page Optimization",
          "E-commerce Site Structure",
          "Shopping Feed Optimization"
        ]
      },
      {
        title: "Analytics & Reporting",
        icon: <PieChart className="w-8 h-8 text-indigo-500" />,
        description: "Data-driven insights to measure performance and guide strategy",
        features: [
          "Custom Dashboards",
          "ROI Tracking",
          "Rank Monitoring",
          "Competitor Analysis"
        ]
      }
    ],
    metrics: [
      {
        value: "3-6 Months",
        label: "To First Page Rankings",
        icon: <Calendar className="w-8 h-8 text-blue-500" />
      },
      {
        value: "85%+",
        label: "Client Retention Rate",
        icon: <Heart className="w-8 h-8 text-red-500" />
      },
      {
        value: "200%+",
        label: "Average Traffic Increase",
        icon: <TrendingUp className="w-8 h-8 text-green-500" />
      },
      {
        value: "24/7",
        label: "Rank Monitoring",
        icon: <Eye className="w-8 h-8 text-purple-500" />
      }
    ],
    techStack: {
      analytics: [
        { name: "Google Analytics", icon: <SiGoogleanalytics className="w-6 h-6" /> },
        { name: "Search Console", icon: <SiGooglesearchconsole className="w-6 h-6" /> },
        { name: "Google Tag Manager", icon: <SiGoogletagmanager className="w-6 h-6" /> },
        { name: "Data Studio", icon: <BarChart3 className="w-6 h-6" /> }
      ],
      tools: [
        { name: "SEMrush", icon: <Search className="w-6 h-6" /> },
        { name: "Ahrefs", icon: <TrendingUp className="w-6 h-6" /> },
        { name: "Screaming Frog", icon: <Code className="w-6 h-6" /> },
        { name: "Moz", icon: <BarChart3 className="w-6 h-6" /> }
      ],
      tracking: [
        { name: "Rank Tracking", icon: <Target className="w-6 h-6" /> },
        { name: "Performance Monitoring", icon: <PieChart className="w-6 h-6" /> },
        { name: "Conversion Tracking", icon: <CreditCard className="w-6 h-6" /> },
        { name: "Click Tracking", icon: <MousePointer className="w-6 h-6" /> }
      ]
    },
    process: [
      {
        title: "Discovery & Audit",
        description: "Comprehensive website analysis and goal setting",
        icon: <FaRegLightbulb className="w-6 h-6" />
      },
      {
        title: "Strategy Development",
        description: "Custom SEO roadmap tailored to your business",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "Implementation",
        description: "Technical fixes and on-page optimizations",
        icon: <Code className="w-6 h-6" />
      },
      {
        title: "Content Creation",
        description: "SEO-optimized content development",
        icon: <FileText className="w-6 h-6" />
      },
      {
        title: "Ongoing Optimization",
        description: "Continuous improvements and adjustments",
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        title: "Reporting & Analysis",
        description: "Performance tracking and strategy refinement",
        icon: <BarChart3 className="w-6 h-6" />
      }
    ],
    caseStudies: [
      {
        name: "E-Commerce SEO",
        description: "Increased organic traffic by 247% for online fashion retailer",
        results: ["247% Traffic Growth", "89% Revenue Increase", "Top 3 Keywords: 142"],
        industry: "Fashion E-commerce",
        timeline: "6 Months"
      },
      {
        name: "Local Service Business",
        description: "Drove 100+ qualified leads monthly for plumbing company",
        results: ["Google #1 Ranking", "112 Monthly Leads", "5x ROI in 4 Months"],
        industry: "Home Services",
        timeline: "4 Months"
      },
      {
        name: "SaaS Platform",
        description: "Grew organic sign-ups by 300% for B2B software company",
        results: ["300% Sign-up Increase", "215% Traffic Growth", "30 Keywords #1"],
        industry: "SaaS",
        timeline: "8 Months"
      }
    ],
    deliverables: [
      "Comprehensive SEO Audit",
      "Custom SEO Strategy Document",
      "Keyword Research Report",
      "Technical SEO Implementation",
      "Monthly Performance Reports",
      "Content Optimization",
      "Google Analytics Setup",
      "Ongoing Strategy Refinement"
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer: "Typically 3-6 months for significant results. We usually see initial improvements within 30-60 days, but sustainable SEO requires ongoing effort and patience."
      },
      {
        question: "Do you work with businesses in competitive industries?",
        answer: "Yes, we specialize in competitive markets. Our strategies are tailored to identify unique opportunities even in saturated markets through granular keyword targeting and superior content."
      },
      {
        question: "How do you measure SEO success?",
        answer: "We track key metrics including keyword rankings, organic traffic growth, conversion rates, and ROI. Clients receive monthly reports with transparent data on all performance indicators."
      },
      {
        question: "What's included in your SEO packages?",
        answer: "Our packages include technical SEO, on-page optimization, content strategy, keyword research, analytics setup, and monthly reporting. We customize packages based on specific business needs."
      },
      {
        question: "Do you provide content writing services?",
        answer: "Yes, we have expert SEO content writers who create optimized content that ranks and converts. All content is researched, written, and optimized according to best practices."
      },
      {
        question: "How often will we communicate about progress?",
        answer: "We provide monthly detailed reports and schedule regular check-in calls. Clients also have access to our project management system for ongoing communication and transparency."
      }
    ]
  };

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative h-auto min-h-screen bg-gradient-to-br from-green-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px]" />
          </div>
          
          {/* Floating SEO icons */}
          {[...Array(15)].map((_, i) => (
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
              {[<Search />, <TrendingUp />, <FaGoogle />, <BarChart3 />][i % 4]}
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
                    SEO & SEARCH ENGINE OPTIMIZATION
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
                {/* SEO metrics visualization */}
                <div className="relative w-full max-w-xs sm:max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-600 rounded-[40px] shadow-2xl transform -rotate-2" />
                  <div className="relative bg-white rounded-[30px] p-6 shadow-2xl overflow-hidden border-8 border-white">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-gray-800">SEO Performance</h3>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Organic Traffic</span>
                        <span className="text-sm font-bold text-green-600">+217%</span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Keyword Rankings</span>
                        <span className="text-sm font-bold text-green-600">+142</span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '76%' }}></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Conversion Rate</span>
                        <span className="text-sm font-bold text-green-600">+5.4%</span>
                      </div>
                      <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                        Current Ranking: #1
                      </div>
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
                Comprehensive <span className="text-green-600 dark:text-green-400">SEO Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                End-to-end SEO solutions tailored to your business goals
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
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-900/30 mr-4">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-500 relative overflow-hidden">
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
                Our <span className="text-green-600 dark:text-green-400">SEO Toolkit</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Industry-leading tools and technologies we use to drive results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {category}
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
                Our <span className="text-green-600 dark:text-green-400">SEO Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A structured approach to achieving sustainable SEO results
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-teal-500 -translate-x-1/2 hidden lg:block" />

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
                    <div className="absolute left-1/2 w-6 h-6 bg-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block" />

                    {/* Content */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} mb-8 lg:mb-0`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center mb-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                            {step.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    {/* Step number */}
                    <div className="lg:w-2/12 flex justify-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
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

        {/* Case Studies Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                SEO <span className="text-green-600 dark:text-green-400">Case Studies</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real results we've achieved for businesses across industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.caseStudies.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-r from-green-500 to-teal-600 p-6">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <TrendingUp className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-green-100">{project.industry}</p>
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                        {project.timeline}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="space-y-3">
                      {project.results.map((result, j) => (
                        <div key={j} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-6 text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20"
                      icon={<ExternalLink className="w-4 h-4" />}
                    >
                      View Detailed Case Study
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/50"
                icon={<FolderOpen className="w-5 h-5" />}
              >
                View All Case Studies
              </Button>
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
                What You <span className="text-green-600 dark:text-green-400">Receive</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive deliverables with every SEO engagement
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pageData.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                SEO <span className="text-green-600 dark:text-green-400">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to know about our SEO services
              </p>
            </motion.div>

            <FAQAccordion faqs={pageData.faqs} />
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-gradient-to-r from-green-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px]" />
          </div>

          {/* Floating icons */}
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
              className="absolute rounded-lg bg-white/10 backdrop-blur-sm w-12 h-12 flex items-center justify-center border border-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              <Search className="w-6 h-6 text-white" />
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
                  READY TO GROW YOUR TRAFFIC?
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's Improve Your <span className="text-green-300">Search Rankings</span> Today
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Get a comprehensive SEO audit and customized strategy for your business.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-green-400 hover:bg-green-500 text-gray-900 px-12"
                  icon={<ArrowRight size={20} />}
                  onClick={() => window.location.href = '/contact'}
                >
                  Get SEO Proposal
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 px-12"
                  icon={<MessageSquare size={20} />}
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default SEOServicesPage;