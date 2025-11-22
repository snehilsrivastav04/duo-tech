import React, { useState, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Users, BarChart2, Mail, MessageSquare, 
  Calendar, Check, Zap, Shield, GitBranch, Server, 
  Clock, Terminal, CreditCard, Database,
  ChevronLeft, ChevronRight, Layers, Cpu, Settings,
  FileText, PieChart, RefreshCw, ShoppingCart, Smartphone, 
  Heart, Book, Star, ArrowRight, Briefcase, Home, Truck, 
  Factory, Hotel, ChevronDown, Bell, TrendingUp
} from 'lucide-react';
import { FaWhatsapp, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import { SiSalesforce, SiHubspot, SiZoho, SiShopify } from 'react-icons/si';
import { motion, useScroll } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';


// Mock components - replace with your actual components


const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`container mx-auto px-6 ${className}`}>{children}</div>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon, 
  iconPosition = 'left',
  onClick 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border border-blue-600',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'border border-transparent text-gray-600 hover:bg-gray-100',
    accent: 'bg-cyan-400 hover:bg-cyan-500 text-blue-900'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            className="flex justify-between items-center w-full text-left py-4"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-lg font-light text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="pb-4"
            >
              <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

const CRMPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  // Data for the page
  const pageData = {
    hero: {
      title: "Transform Your Business with Intelligent CRM",
      subtitle: "Our all-in-one CRM platform helps you build better relationships, streamline processes, and improve profitability",
      ctas: [
        { text: "Get Free Demo", variant: "primary" as const },
        { text: "See Pricing", variant: "outline" as const }
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
        icon: <Briefcase className="w-6 h-6 text-blue-600" />,
        description: "Manage your sales pipeline and close deals faster with intelligent automation",
        features: [
          "Lead & Opportunity Tracking",
          "Sales Forecasting",
          "Pipeline Management",
          "AI-Powered Recommendations"
        ],
        process: [
          "Initial consultation to understand sales workflow",
          "Custom pipeline configuration",
          "Sales team training and onboarding",
          "Performance monitoring and optimization"
        ]
      },
      {
        title: "Marketing Automation",
        icon: <Mail className="w-6 h-6 text-blue-600" />,
        description: "Create targeted campaigns that convert with our marketing tools",
        features: [
          "Email Campaigns",
          "Lead Nurturing",
          "Customer Segmentation",
          "ROI Tracking"
        ],
        process: [
          "Audience analysis and segmentation",
          "Campaign strategy development",
          "Automation workflow setup",
          "Performance analytics implementation"
        ]
      },
      {
        title: "Customer Service",
        icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
        description: "Deliver exceptional service with omnichannel support tools",
        features: [
          "Ticket Management",
          "Live Chat",
          "Knowledge Base",
          "Customer Satisfaction Tracking"
        ],
        process: [
          "Support channel integration",
          "Response template creation",
          "Team training and guidelines",
          "Quality assurance setup"
        ]
      },
      {
        title: "Analytics & Reporting",
        icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
        description: "Get actionable insights with real-time dashboards and reports",
        features: [
          "Custom Dashboards",
          "Sales Performance",
          "Marketing ROI",
          "Forecasting Models"
        ],
        process: [
          "Data source integration",
          "Custom metric definition",
          "Dashboard design and development",
          "Report automation setup"
        ]
      },
      {
        title: "Field Service",
        icon: <Truck className="w-6 h-6 text-blue-600" />,
        description: "Optimize your field operations with mobile workforce tools",
        features: [
          "Job Scheduling",
          "Route Optimization",
          "Mobile Workforce",
          "Inventory Tracking"
        ],
        process: [
          "Field team assessment",
          "Mobile app configuration",
          "Route optimization setup",
          "Real-time tracking implementation"
        ]
      },
      {
        title: "Project Management",
        icon: <Layers className="w-6 h-6 text-blue-600" />,
        description: "Collaborate effectively and deliver projects on time",
        features: [
          "Task Management",
          "Team Collaboration",
          "Time Tracking",
          "Resource Allocation"
        ],
        process: [
          "Project workflow analysis",
          "Team collaboration setup",
          "Time tracking configuration",
          "Resource management implementation"
        ]
      }
    ],
    metrics: [
      {
        value: "45%",
        label: "Increase in Sales",
        icon: <BarChart2 className="w-6 h-6 text-blue-600" />
      },
      {
        value: "30%",
        label: "Faster Response Time",
        icon: <Clock className="w-6 h-6 text-blue-600" />
      },
      {
        value: "3.5x",
        label: "ROI on Marketing",
        icon: <CreditCard className="w-6 h-6 text-blue-600" />
      },
      {
        value: "95%",
        label: "Customer Satisfaction",
        icon: <Heart className="w-6 h-6 text-blue-600" />
      }
    ],
    techStack: {
      platforms: [
        { name: "Salesforce", icon: <SiSalesforce className="w-5 h-5 text-blue-600" /> },
        { name: "HubSpot", icon: <SiHubspot className="w-5 h-5 text-blue-600" /> },
        { name: "Zoho CRM", icon: <SiZoho className="w-5 h-5 text-blue-600" /> },
        { name: "Microsoft Azure", icon: <Server className="w-5 h-5 text-blue-600" /> }
      ],
      integrations: [
        { name: "Email Platforms", icon: <Mail className="w-5 h-5 text-blue-600" /> },
        { name: "Calendar", icon: <Calendar className="w-5 h-5 text-blue-600" /> },
        { name: "WhatsApp", icon: <FaWhatsapp className="w-5 h-5 text-blue-600" /> },
        { name: "Shopify", icon: <SiShopify className="w-5 h-5 text-blue-600" /> }
      ],
      features: [
        { name: "AI & Machine Learning", icon: <Cpu className="w-5 h-5 text-blue-600" /> },
        { name: "Custom Reports", icon: <FileText className="w-5 h-5 text-blue-600" /> },
        { name: "Workflow Automation", icon: <RefreshCw className="w-5 h-5 text-blue-600" /> },
        { name: "API Access", icon: <Terminal className="w-5 h-5 text-blue-600" /> }
      ]
    },
    process: [
      {
        title: "Discovery",
        description: "Understand your business needs and CRM requirements",
        icon: <FaRegLightbulb className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Planning",
        description: "Create a customized CRM implementation plan",
        icon: <FileText className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Configuration",
        description: "Set up and customize your CRM system",
        icon: <Settings className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Data Migration",
        description: "Securely transfer your existing data",
        icon: <Database className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Training",
        description: "Onboard your team with comprehensive training",
        icon: <FaChalkboardTeacher className="w-6 h-6 text-blue-600" />
      },
      {
        title: "Go Live",
        description: "Launch your CRM and start transforming your business",
        icon: <Zap className="w-6 h-6 text-blue-600" />
      }
    ],
    industries: [
      { 
        name: "Retail & E-commerce", 
        icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
        features: [
          "Customer purchase history",
          "Personalized recommendations",
          "Loyalty program integration",
          "Omnichannel support"
        ]
      },
      { 
        name: "Healthcare", 
        icon: <Heart className="w-8 h-8 text-blue-600" />,
        features: [
          "Patient management",
          "Appointment scheduling",
          "HIPAA compliance",
          "Telemedicine integration"
        ]
      },
      { 
        name: "Education", 
        icon: <Book className="w-8 h-8 text-blue-600" />,
        features: [
          "Student lifecycle management",
          "Parent communication",
          "Course enrollment tracking",
          "Alumni relations"
        ]
      },
      { 
        name: "Real Estate", 
        icon: <Home className="w-8 h-8 text-blue-600" />,
        features: [
          "Property management",
          "Lead capture from portals",
          "Document management",
          "Virtual tours integration"
        ]
      },
      { 
        name: "Manufacturing", 
        icon: <Factory className="w-8 h-8 text-blue-600" />,
        features: [
          "Supply chain tracking",
          "Equipment maintenance",
          "Vendor management",
          "Quality control"
        ]
      },
      { 
        name: "Hospitality", 
        icon: <Hotel className="w-8 h-8 text-blue-600" />,
        features: [
          "Guest profile management",
          "Reservation system",
          "Service requests",
          "Feedback collection"
        ]
      },
      { 
        name: "Financial Services", 
        icon: <CreditCard className="w-8 h-8 text-blue-600" />,
        features: [
          "Client portfolio management",
          "Document compliance",
          "Risk assessment",
          "Secure communication"
        ]
      },
      { 
        name: "Professional Services", 
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        features: [
          "Time tracking",
          "Project billing",
          "Resource allocation",
          "Client portals"
        ]
      }
    ],
    features: [
      { name: "Contact Management", icon: <Users className="w-5 h-5 text-blue-600" /> },
      { name: "Lead Scoring", icon: <BarChart2 className="w-5 h-5 text-blue-600" /> },
      { name: "Email Tracking", icon: <Mail className="w-5 h-5 text-blue-600" /> },
      { name: "Task Automation", icon: <RefreshCw className="w-5 h-5 text-blue-600" /> },
      { name: "Document Management", icon: <FileText className="w-5 h-5 text-blue-600" /> },
      { name: "Calendar Sync", icon: <Calendar className="w-5 h-5 text-blue-600" /> },
      { name: "Mobile Access", icon: <Smartphone className="w-5 h-5 text-blue-600" /> },
      { name: "Custom Reports", icon: <PieChart className="w-5 h-5 text-blue-600" /> },
      { name: "Workflow Automation", icon: <GitBranch className="w-5 h-5 text-blue-600" /> },
      { name: "AI Insights", icon: <Cpu className="w-5 h-5 text-blue-600" /> }
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
      },
      {
        quote: "Implementation was seamless and the ongoing support has been exceptional. Our customer retention has improved dramatically.",
        author: "Emily Rodriguez",
        role: "Operations Manager, GrowthInc",
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
        {/* Minimalist Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <Container className="relative pt-32 pb-20 lg:pt-40">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 border border-blue-100"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700">Next-Generation CRM Platform</span>
                </motion.div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  Customer
                  <br />
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Relationship
                  </span>
                  <br />
                  Management
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light max-w-xl">
                  Streamline your customer interactions with our elegant, powerful CRM solution built for modern teams
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  {pageData.hero.ctas.map((cta, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={cta.variant}
                        size="lg"
                        className={`min-w-[180px] text-base ${
                          i === 0 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg shadow-blue-600/30' 
                            : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                        }`}
                      >
                        {cta.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
                >
                  {pageData.hero.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-600 group cursor-default">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-2 group-hover:bg-blue-100 transition-colors">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-base font-light group-hover:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="font-light">10,000+ happy users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="ml-2 font-light">4.9/5 rating</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - CRM Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Main dashboard mockup */}
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Browser chrome */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 ml-4 px-4 py-1 bg-white rounded-md text-xs text-gray-500 font-light">
                      app.duotechsolutions.com/dashboard
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                        <p className="text-sm text-gray-500 font-light">Welcome back, Alex</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Bell className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                          A
                        </div>
                      </div>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[
                        { label: 'Total Leads', value: '2,847', trend: '+12%', color: 'blue' },
                        { label: 'Active Deals', value: '184', trend: '+8%', color: 'green' },
                        { label: 'Revenue', value: '$45.2K', trend: '+24%', color: 'purple' }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                          whileHover={{ y: -4 }}
                          className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default"
                        >
                          <p className="text-xs text-gray-500 font-light mb-1">{stat.label}</p>
                          <p className="text-xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                          <p className={`text-xs font-medium text-${stat.color}-600`}>{stat.trend}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Chart mockup */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm mb-4"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-gray-900">Sales Pipeline</h4>
                        <div className="text-xs text-gray-500 font-light">Last 7 days</div>
                      </div>
                      <div className="flex items-end justify-between h-32 gap-2">
                        {[65, 85, 45, 95, 75, 55, 88].map((height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer"
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent activity */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        {[
                          { name: 'New lead from website', time: '2m ago', icon: Users },
                          { name: 'Deal closed: Acme Corp', time: '1h ago', icon: TrendingUp },
                          { name: 'Meeting scheduled', time: '3h ago', icon: Calendar }
                        ].map((activity, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                              <activity.icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-900 font-light truncate">{activity.name}</p>
                              <p className="text-xs text-gray-500 font-light">{activity.time}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating notification card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="absolute -left-6 top-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[200px] hidden lg:block"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Deal Closed!</p>
                      <p className="text-xs text-gray-600 font-light">TechCorp - $12,500</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating user card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[180px] hidden lg:block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Snehil</p>
                      <p className="text-xs text-gray-500 font-light">just signed up</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Container>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 font-light">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Linear Service List Section */}
        <section className="py-40 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
          <Container>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-32"
            >
              <h2 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
                Our <span className="font-normal text-blue-600">Services</span>
              </h2>
              <p className="text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                Comprehensive CRM solutions tailored to your business needs
              </p>
            </motion.div>

            {/* Services List */}
            <div className="max-w-5xl mx-auto space-y-6">
              {pageData.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.7 }}
                  className="group relative"
                >
                  {/* Subtle side indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 transition-all duration-500 ${
                    expandedService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                  }`} />

                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 transition-all duration-500 hover:border-blue-200 hover:bg-white">
                    <button
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                      className="w-full px-12 py-10 text-left flex items-start justify-between group"
                    >
                      <div className="flex items-start space-x-8 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-blue-600 transition-transform duration-500 group-hover:scale-110">
                          {service.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h3 className="text-3xl font-light text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-3xl">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div className="flex-shrink-0 ml-8 pt-2">
                        <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-500 group-hover:border-blue-600 ${
                          expandedService === index ? 'bg-blue-600 border-blue-600 rotate-180' : ''
                        }`}>
                          <ChevronDown className={`w-5 h-5 transition-colors duration-500 ${
                            expandedService === index ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'
                          }`} />
                        </div>
                      </div>
                    </button>

                    {/* Expanded content */}
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="px-12 py-12">
                          <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
                            {/* Features */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-8 font-medium">
                                Key Features
                              </h4>
                              <ul className="space-y-5">
                                {service.features.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="flex items-start text-gray-700 group/item"
                                  >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 mr-4 group-hover/item:bg-blue-100 transition-colors">
                                      <Check className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <span className="text-lg font-light leading-relaxed">{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>

                            {/* Process */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-8 font-medium">
                                Implementation Process
                              </h4>
                              <ul className="space-y-6">
                                {service.process.map((step, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="flex items-start text-gray-700 group/item"
                                  >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-blue-200 bg-white flex items-center justify-center mt-0.5 mr-4 group-hover/item:border-blue-600 group-hover/item:bg-blue-50 transition-all">
                                      <span className="text-sm text-blue-600 font-normal">{i + 1}</span>
                                    </div>
                                    <span className="text-lg font-light leading-relaxed pt-0.5">{step}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Sticky Showcase Section */}
        {/* Split Screen Features Section */}
        <section className="min-h-screen bg-white relative">
          <div className="lg:grid lg:grid-cols-2 lg:h-screen">
            {/* Left side - Sticky content */}
            <div className="sticky top-0 h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-lg"
              >
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 tracking-tight">
                  Why Choose
                  <br />
                  <span className="font-normal text-blue-600">Our CRM</span>
                </h2>
                <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
                  Experience the difference with our carefully crafted CRM solution designed for modern businesses.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: <Zap className="w-5 h-5" />, text: "Lightning fast performance" },
                    { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security" },
                    { icon: <Settings className="w-5 h-5" />, text: "Easy customization" },
                    { icon: <Users className="w-5 h-5" />, text: "Dedicated support team" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                      className="flex items-center text-gray-700 group cursor-default"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <span className="text-lg font-light group-hover:text-gray-900 transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right side - Scrollable features */}
            <div className="overflow-y-auto h-screen bg-white">
              <div className="py-24 lg:py-32 space-y-40 px-8 lg:px-16">
                {[
                  {
                    icon: <BarChart2 className="w-6 h-6" />,
                    title: "Advanced Analytics",
                    description: "Gain deep insights into your customer behavior and business performance with our powerful analytics tools.",
                    features: ['Real-time dashboards', 'Custom reporting', 'Predictive analytics', 'Performance tracking']
                  },
                  {
                    icon: <RefreshCw className="w-6 h-6" />,
                    title: "Workflow Automation",
                    description: "Automate repetitive tasks and streamline your business processes with intelligent workflow automation.",
                    features: ['Lead routing', 'Email sequences', 'Task assignment', 'Approval workflows']
                  },
                  {
                    icon: <Smartphone className="w-6 h-6" />,
                    title: "Mobile Experience",
                    description: "Access your CRM from anywhere with our fully responsive mobile application designed for on-the-go productivity.",
                    features: ['iOS and Android apps', 'Offline access', 'Push notifications', 'Mobile reporting']
                  }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-lg group"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"
                    >
                      {feature.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
                      {feature.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-4">
                      {feature.features.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                          className="flex items-center text-gray-600 group/item cursor-default"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover/item:bg-blue-100 transition-colors">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-lg font-light group-hover/item:text-gray-900 transition-colors">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section - Reimagined */}
        <section className="py-32 lg:py-40 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <Container>
            {/* Optional header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 lg:mb-24"
            >
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Trusted by <span className="font-normal text-blue-600">thousands</span>
              </h2>
              <p className="text-xl text-gray-500 font-light">Results that speak for themselves</p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto relative z-10">
              {pageData.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="text-center group cursor-default"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg"
                  >
                    {metric.icon}
                  </motion.div>

                  {/* Value */}
                  <motion.p
                    className="text-5xl lg:text-6xl font-light text-gray-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                  >
                    {metric.value}
                  </motion.p>

                  {/* Label */}
                  <p className="text-base lg:text-lg text-gray-500 font-light group-hover:text-gray-700 transition-colors">
                    {metric.label}
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full"
              >
                <span className="text-sm font-medium text-blue-700">Built for Your Industry</span>
              </motion.div>
              <h2 className="text-5xl font-light text-gray-900 mb-6">
                Industry-Specific <span className="text-blue-600 font-semibold">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                Tailored CRM solutions designed to meet the unique challenges and opportunities of your business domain
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
              {pageData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:shadow-md transition-shadow"
                      >
                        <div className="text-blue-600">
                          {industry.icon}
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {industry.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.05 }}
                          className="flex items-start text-sm text-gray-600 group-hover:text-gray-700"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                            <Check className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="font-light leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>

            {/* Optional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-16"
            >
              <p className="text-gray-600 mb-4">Don't see your industry? We can customize a solution for you.</p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg font-medium">
                Request Custom Solution
              </button>
            </motion.div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                What Our <span className="text-blue-600 font-normal">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-blue-100 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(pageData.testimonials[currentTestimonial].rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 font-light leading-relaxed">
                  "{pageData.testimonials[currentTestimonial].quote}"
                </p>
                <div className="text-gray-600">
                  <p className="font-normal text-gray-900">{pageData.testimonials[currentTestimonial].author}</p>
                  <p className="text-sm font-light">{pageData.testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevTestimonial}
                  icon={<ChevronLeft size={20} />}
                >
                  Previous
                </Button>
                <div className="flex gap-2">
                  {pageData.testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentTestimonial ? 'bg-blue-600' : 'bg-blue-200'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextTestimonial}
                  icon={<ChevronRight size={20} />}
                  iconPosition="right"
                >
                  Next
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-blue-50 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Frequently Asked <span className="text-blue-600 font-normal">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Everything you need to know about our CRM solutions
              </p>
            </motion.div>

            <FAQAccordion faqs={pageData.faqs} />
          </Container>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Ready to Transform
                <br />
                <span className="text-blue-600 font-normal">Your Business?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                Join thousands of businesses that trust our CRM solution to drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 min-w-[160px]"
                  icon={<ArrowRight size={20} />}
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 min-w-[160px]"
                >
                  View Demo
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