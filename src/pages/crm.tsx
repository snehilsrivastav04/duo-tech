import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Users, BarChart2, Mail, Phone, MessageSquare, 
  Calendar, Check, Zap, Shield, GitBranch, Server, 
  Clock, Terminal, Globe, CreditCard, Database,
  ChevronLeft, ChevronRight, Download, Layers, Cpu, Settings,
  ShieldCheck, Bell, MapPin, Camera, User, FileText, PieChart, 
  RefreshCw, ShoppingCart, Smartphone, Heart, Book, Star, ArrowRight,
  Building, Briefcase, Home, Truck, Factory, Coffee, Utensils, Hotel
} from 'lucide-react';
import { FaGoogle, FaWhatsapp, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import { SiSalesforce, SiHubspot, SiZoho, SiShopify } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/home/FAQAccordion';

const CRMPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [activeTab, setActiveTab] = useState<'features' | 'integrations'>('features');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Data for the page
  const pageData = {
    hero: {
      title: "Transform Your Business with Intelligent CRM",
      subtitle: "Our all-in-one CRM platform helps you build better relationships, streamline processes, and improve profitability",
      ctas: [
        { text: "Get Free Demo", variant: "primary" },
        { text: "See Pricing", variant: "outline" }
      ],
      features: [
        "360° Customer View",
        "Sales Automation",
        "Marketing Tools",
        "AI-Powered Insights"
      ]
    },
    services: [
      {
        title: "Sales CRM",
        icon: <Briefcase className="w-8 h-8 text-blue-500" />,
        description: "Manage your sales pipeline and close deals faster with intelligent automation",
        features: [
          "Lead & Opportunity Tracking",
          "Sales Forecasting",
          "Pipeline Management",
          "AI-Powered Recommendations"
        ]
      },
      {
        title: "Marketing Automation",
        icon: <Mail className="w-8 h-8 text-purple-500" />,
        description: "Create targeted campaigns that convert with our marketing tools",
        features: [
          "Email Campaigns",
          "Lead Nurturing",
          "Customer Segmentation",
          "ROI Tracking"
        ]
      },
      {
        title: "Customer Service",
        icon: <MessageSquare className="w-8 h-8 text-green-500" />,
        description: "Deliver exceptional service with omnichannel support tools",
        features: [
          "Ticket Management",
          "Live Chat",
          "Knowledge Base",
          "Customer Satisfaction Tracking"
        ]
      },
      {
        title: "Analytics & Reporting",
        icon: <BarChart2 className="w-8 h-8 text-yellow-500" />,
        description: "Get actionable insights with real-time dashboards and reports",
        features: [
          "Custom Dashboards",
          "Sales Performance",
          "Marketing ROI",
          "Forecasting Models"
        ]
      },
      {
        title: "Field Service",
        icon: <Truck className="w-8 h-8 text-orange-500" />,
        description: "Optimize your field operations with mobile workforce tools",
        features: [
          "Job Scheduling",
          "Route Optimization",
          "Mobile Workforce",
          "Inventory Tracking"
        ]
      },
      {
        title: "Project Management",
        icon: <Layers className="w-8 h-8 text-red-500" />,
        description: "Collaborate effectively and deliver projects on time",
        features: [
          "Task Management",
          "Team Collaboration",
          "Time Tracking",
          "Resource Allocation"
        ]
      }
    ],
    metrics: [
      {
        value: "45%",
        label: "Increase in Sales",
        icon: <BarChart2 className="w-8 h-8 text-blue-500" />
      },
      {
        value: "30%",
        label: "Faster Response Time",
        icon: <Clock className="w-8 h-8 text-green-500" />
      },
      {
        value: "3.5x",
        label: "ROI on Marketing",
        icon: <CreditCard className="w-8 h-8 text-yellow-500" />
      },
      {
        value: "95%",
        label: "Customer Satisfaction",
        icon: <Heart className="w-8 h-8 text-red-500" />
      }
    ],
    techStack: {
      platforms: [
        { name: "Salesforce", icon: <SiSalesforce className="w-6 h-6 text-blue-500" /> },
        { name: "HubSpot", icon: <SiHubspot className="w-6 h-6 text-orange-500" /> },
        { name: "Zoho CRM", icon: <SiZoho className="w-6 h-6 text-red-500" /> },
        { name: "Microsoft Azure", icon: <Server className="w-6 h-6 text-blue-600" /> }
      ],
      integrations: [
        { name: "Email Platforms", icon: <Mail className="w-6 h-6" /> },
        { name: "Calendar", icon: <Calendar className="w-6 h-6" /> },
        { name: "WhatsApp", icon: <FaWhatsapp className="w-6 h-6 text-green-500" /> },
        { name: "Shopify", icon: <SiShopify className="w-6 h-6" /> }
      ],
      features: [
        { name: "AI & Machine Learning", icon: <Cpu className="w-6 h-6" /> },
        { name: "Custom Reports", icon: <FileText className="w-6 h-6" /> },
        { name: "Workflow Automation", icon: <RefreshCw className="w-6 h-6" /> },
        { name: "API Access", icon: <Terminal className="w-6 h-6" /> }
      ]
    },
    process: [
      {
        title: "Discovery",
        description: "Understand your business needs and CRM requirements",
        icon: <FaRegLightbulb className="w-6 h-6" />
      },
      {
        title: "Planning",
        description: "Create a customized CRM implementation plan",
        icon: <FileText className="w-6 h-6" />
      },
      {
        title: "Configuration",
        description: "Set up and customize your CRM system",
        icon: <Settings className="w-6 h-6" />
      },
      {
        title: "Data Migration",
        description: "Securely transfer your existing data",
        icon: <Database className="w-6 h-6" />
      },
      {
        title: "Training",
        description: "Onboard your team with comprehensive training",
        icon: <FaChalkboardTeacher className="w-6 h-6" />
      },
      {
        title: "Go Live",
        description: "Launch your CRM and start transforming your business",
        icon: <Zap className="w-6 h-6" />
      }
    ],
    industries: [
      { 
        name: "Retail & E-commerce", 
        icon: <ShoppingCart className="w-8 h-8" />,
        features: [
          "Customer purchase history",
          "Personalized recommendations",
          "Loyalty program integration",
          "Omnichannel support"
        ]
      },
      { 
        name: "Healthcare", 
        icon: <Heart className="w-8 h-8" />,
        features: [
          "Patient management",
          "Appointment scheduling",
          "HIPAA compliance",
          "Telemedicine integration"
        ]
      },
      { 
        name: "Education", 
        icon: <Book className="w-8 h-8" />,
        features: [
          "Student lifecycle management",
          "Parent communication",
          "Course enrollment tracking",
          "Alumni relations"
        ]
      },
      { 
        name: "Real Estate", 
        icon: <Home className="w-8 h-8" />,
        features: [
          "Property management",
          "Lead capture from portals",
          "Document management",
          "Virtual tours integration"
        ]
      },
      { 
        name: "Manufacturing", 
        icon: <Factory className="w-8 h-8" />,
        features: [
          "Supply chain tracking",
          "Equipment maintenance",
          "Vendor management",
          "Quality control"
        ]
      },
      { 
        name: "Hospitality", 
        icon: <Hotel className="w-8 h-8" />,
        features: [
          "Guest profile management",
          "Reservation system",
          "Service requests",
          "Feedback collection"
        ]
      },
      { 
        name: "Financial Services", 
        icon: <CreditCard className="w-8 h-8" />,
        features: [
          "Client portfolio management",
          "Document compliance",
          "Risk assessment",
          "Secure communication"
        ]
      },
      { 
        name: "Professional Services", 
        icon: <Briefcase className="w-8 h-8" />,
        features: [
          "Time tracking",
          "Project billing",
          "Resource allocation",
          "Client portals"
        ]
      }
    ],
    features: [
      { name: "Contact Management", icon: <Users className="w-5 h-5" /> },
      { name: "Lead Scoring", icon: <BarChart2 className="w-5 h-5" /> },
      { name: "Email Tracking", icon: <Mail className="w-5 h-5" /> },
      { name: "Task Automation", icon: <RefreshCw className="w-5 h-5" /> },
      { name: "Document Management", icon: <FileText className="w-5 h-5" /> },
      { name: "Calendar Sync", icon: <Calendar className="w-5 h-5" /> },
      { name: "Mobile Access", icon: <Smartphone className="w-5 h-5" /> },
      { name: "Custom Reports", icon: <PieChart className="w-5 h-5" /> },
      { name: "Workflow Automation", icon: <GitBranch className="w-5 h-5" /> },
      { name: "AI Insights", icon: <Cpu className="w-5 h-5" /> }
    ],
    deliverables: [
      "Custom CRM Implementation",
      "Data Migration Services",
      "User Training Sessions",
      "Dedicated Account Manager",
      "24/7 Technical Support",
      "Regular System Updates"
    ],
    testimonials: [
      {
        quote: "Our sales team's productivity increased by 40% within the first month of using this CRM. The automation features saved us countless hours.",
        author: "Sarah Johnson",
        role: "Sales Director, TechCorp",
        rating: 5
      },
      {
        quote: "The customer service tools helped us reduce response times and improve our satisfaction ratings significantly. Highly recommended!",
        author: "Michael Chen",
        role: "Customer Support Manager, ServicePro",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "How long does CRM implementation take?",
        answer: "Implementation typically takes 2-6 weeks depending on complexity. We offer rapid deployment for basic setups in as little as 5 business days."
      },
      {
        question: "Can we customize the CRM to our specific needs?",
        answer: "Absolutely! Our CRM is highly customizable with configurable fields, workflows, dashboards, and reports to match your business processes."
      },
      {
        question: "Is training included with CRM implementation?",
        answer: "Yes, we provide comprehensive training for administrators and end-users, along with detailed documentation and video tutorials."
      },
      {
        question: "How secure is our data in your CRM?",
        answer: "We use enterprise-grade security with encryption, regular backups, and role-based access controls. Our systems are SOC 2 Type II compliant."
      },
      {
        question: "Can the CRM integrate with our existing tools?",
        answer: "Yes, our platform offers native integrations with popular business tools and a robust API for custom integrations with your existing systems."
      },
      {
        question: "What ongoing support do you provide?",
        answer: "We offer 24/7 technical support, regular system updates, and dedicated account management to ensure your CRM continues to meet your evolving needs."
      }
    ]
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % pageData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + pageData.testimonials.length) % pageData.testimonials.length);
  };

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative h-auto min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/circuit-pattern.svg')] bg-[size:100px_100px]" />
          </div>
          
          {/* Floating CRM elements */}
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
              {[<Users />, <BarChart2 />, <Mail />, <MessageSquare />][i % 4]}
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
                    CUSTOMER RELATIONSHIP MANAGEMENT
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
                      className={`${i === 0 ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-white text-white hover:bg-white/10'}`}
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
                {/* CRM dashboard mockup */}
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl shadow-2xl transform rotate-1" />
                  <div className="relative bg-gray-900 rounded-2xl p-3 shadow-2xl overflow-hidden border-8 border-gray-900">
                    {/* Dashboard header */}
                    <div className="h-12 flex items-center justify-between px-4 bg-gray-800 rounded-t-lg">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-xs text-gray-400 font-medium">CRM Dashboard</div>
                      <div className="w-6" />
                    </div>
                    
                    {/* Dashboard content */}
                    <div className="h-[500px] bg-gray-800 rounded-b-lg overflow-hidden relative">
                      {/* Animated dashboard elements */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute inset-0 p-4 grid grid-cols-2 gap-4"
                      >
                        {/* Stats cards */}
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="bg-blue-900/50 rounded-lg p-3 border border-blue-700/30"
                        >
                          <div className="text-xs text-blue-300 mb-1">New Leads</div>
                          <div className="text-xl font-bold text-white">1,248</div>
                          <div className="text-xs text-green-400 mt-1">↑ 12% this month</div>
                        </motion.div>
                        
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                          className="bg-purple-900/50 rounded-lg p-3 border border-purple-700/30"
                        >
                          <div className="text-xs text-purple-300 mb-1">Deals Closed</div>
                          <div className="text-xl font-bold text-white">84</div>
                          <div className="text-xs text-green-400 mt-1">↑ 8% this month</div>
                        </motion.div>
                        
                        {/* Graph */}
                        <motion.div
                          className="col-span-2 bg-gray-700/50 rounded-lg p-3 border border-gray-600/30"
                          initial={{ scale: 0.95 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-gray-300">Sales Performance</div>
                            <div className="text-xs text-blue-400">Last 6 Months</div>
                          </div>
                          <div className="h-32 relative">
                            {/* Graph line */}
                            <motion.div 
                              className="absolute bottom-0 left-0 w-full h-px bg-gray-600/50"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1 }}
                            />
                            {/* Data points */}
                            {[30, 45, 60, 75, 90, 110].map((value, i) => (
                              <motion.div
                                key={i}
                                className="absolute bottom-0 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-sm"
                                initial={{ height: 0 }}
                                animate={{ height: `${value}px` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                style={{
                                  width: '12%',
                                  left: `${15 + i * 15}%`
                                }}
                              />
                            ))}
                          </div>
                        </motion.div>
                        
                        {/* Recent activity */}
                        <motion.div
                          className="col-span-2 bg-gray-700/50 rounded-lg p-3 border border-gray-600/30 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="text-xs text-gray-300 mb-2">Recent Activity</div>
                          <div className="space-y-3">
                            {[
                              { name: "Sarah Johnson", action: "closed deal", amount: "$12,500" },
                              { name: "Michael Chen", action: "scheduled meeting", time: "Tomorrow 10AM" },
                              { name: "Emma Wilson", action: "added new lead", company: "TechCorp" }
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                className="flex items-center text-xs"
                                initial={{ x: 20 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.9 + i * 0.1 }}
                              >
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2">
                                  <User className="w-3 h-3 text-blue-300" />
                                </div>
                                <div className="text-gray-300">
                                  <span className="text-white">{item.name}</span> {item.action}{' '}
                                  {item.amount && <span className="text-green-400">{item.amount}</span>}
                                  {item.time && <span className="text-yellow-400"> {item.time}</span>}
                                  {item.company && <span className="text-blue-300"> {item.company}</span>}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
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
                Comprehensive <span className="text-blue-600 dark:text-blue-400">CRM Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                End-to-end CRM modules to transform every customer interaction
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
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-900/30 mr-4 group-hover:rotate-6 transition-transform">
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
                Our <span className="text-blue-600 dark:text-blue-400">Technology</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Flexible CRM solutions built on the most trusted platforms
              </p>
            </motion.div>

            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'features'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Key Features
                </button>
                <button
                  onClick={() => setActiveTab('integrations')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'integrations'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Integrations
                </button>
              </div>
            </div>

            {activeTab === 'features' ? (
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Email & Calendar",
                    description: "Seamless integration with Gmail, Outlook, and other email providers",
                    icon: <Mail className="w-8 h-8 text-blue-500" />
                  },
                  {
                    name: "Communication Tools",
                    description: "Connect with WhatsApp, Slack, Microsoft Teams, and more",
                    icon: <MessageSquare className="w-8 h-8 text-green-500" />
                  },
                  {
                    name: "E-commerce Platforms",
                    description: "Sync with Shopify, WooCommerce, Magento, and other storefronts",
                    icon: <ShoppingCart className="w-8 h-8 text-purple-500" />
                  },
                  {
                    name: "Payment Processors",
                    description: "Integrate Stripe, PayPal, Razorpay for seamless transactions",
                    icon: <CreditCard className="w-8 h-8 text-yellow-500" />
                  },
                  {
                    name: "Marketing Tools",
                    description: "Connect with Mailchimp, HubSpot, Google Ads, and more",
                    icon: <BarChart2 className="w-8 h-8 text-red-500" />
                  },
                  {
                    name: "Custom API Access",
                    description: "Build custom integrations with our developer-friendly API",
                    icon: <Terminal className="w-8 h-8 text-cyan-500" />
                  }
                ].map((integration, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-900/30 mr-4">
                        {integration.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{integration.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{integration.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </Container>
        </section>

        {/* Implementation Process Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our <span className="text-blue-600 dark:text-blue-400">Implementation Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful CRM deployment
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 -translate-x-1/2 lg:block hidden" />

              <div className="space-y-16 lg:space-y-0">
                {pageData.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative flex flex-col lg:flex-row items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:min-h-[150px]`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full -translate-x-1/2 top-1/2 lg:block hidden z-10" />

                    {/* Content */}
                    <div className={`lg:w-5/12 ${i % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
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
                    <div className="lg:w-2/12 flex justify-center items-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg z-10">
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

        {/* Industries Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry-Specific <span className="text-blue-600 dark:text-blue-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tailored CRM solutions for your business domain
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:rotate-6 transition-transform">
                        {industry.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{industry.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {industry.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful <span className="text-blue-600 dark:text-blue-400">CRM Features</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage customer relationships effectively
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
                  className="flex items-center bg-white dark:bg-gray-800 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
                >
                  <div className="mr-3 text-blue-500">
                    {feature.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Deliverables Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
                Complete package delivered with every CRM implementation
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

        {/* Testimonials Carousel Section */}
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

            <div className="relative max-w-3xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(pageData.testimonials[currentTestimonial].rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl text-white mb-6">"{pageData.testimonials[currentTestimonial].quote}"</p>
                <div className="text-blue-100">
                  <p className="font-bold">{pageData.testimonials[currentTestimonial].author}</p>
                  <p className="text-sm">{pageData.testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>

              <div className="flex justify-between mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={prevTestimonial}
                  icon={<ChevronLeft size={20} />}
                >
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                  onClick={nextTestimonial}
                  icon={<ChevronRight size={20} />}
                >
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {pageData.testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i === currentTestimonial ? 'bg-cyan-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
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
                Everything you need to know about our CRM solutions
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

          {/* Floating CRM icons */}
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
              {[<Users />, <Mail />, <BarChart2 />, <MessageSquare />][i % 4]}
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
                  READY TO TRANSFORM YOUR BUSINESS?
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's Build Your <span className="text-cyan-300">CRM Solution</span> Today
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Starting from just $49/user/month. Get a free consultation and demo.
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

export default CRMPage;