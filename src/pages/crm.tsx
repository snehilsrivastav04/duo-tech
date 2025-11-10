import React, { useState, useMemo } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Users, BarChart2, Mail, MessageSquare, 
  Calendar, Check, Zap, Shield, GitBranch, Server, 
  Clock, Terminal, CreditCard, Database,
  ChevronLeft, ChevronRight, Layers, Cpu, Settings,
  FileText, PieChart, RefreshCw, ShoppingCart, Smartphone, 
  Heart, Book, Star, ArrowRight, Briefcase, Home, Truck, 
  Factory, Hotel, ChevronDown
} from 'lucide-react';
import { FaWhatsapp, FaRegLightbulb, FaChalkboardTeacher } from 'react-icons/fa';
import { SiSalesforce, SiHubspot, SiZoho, SiShopify } from 'react-icons/si';
import { motion, useScroll } from 'framer-motion';

// Mock components - replace with your actual components
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white">
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-gray-900">CRM</div>
          <nav className="hidden md:flex space-x-8">
            {['Features', 'Services', 'Industries', 'Pricing', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-blue-600 font-light transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
    <main>{children}</main>
  </div>
);

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
        <section className="relative min-h-screen bg-white overflow-hidden pt-20">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
          </div>

          {/* Accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

          <Container className="relative min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
                  Customer
                  <br />
                  <span className="text-blue-600 font-normal">Relationship</span>
                  <br />
                  Management
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                  Streamline your customer interactions with our elegant, powerful CRM solution
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  {pageData.hero.ctas.map((cta, i) => (
                    <Button
                      key={i}
                      variant={cta.variant}
                      size="lg"
                      className={`min-w-[160px] ${
                        i === 0 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600' 
                          : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {cta.text}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {pageData.hero.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-lg font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Linear Service List Section */}
        <section className="py-32 bg-blue-50 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Our <span className="text-blue-600 font-normal">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Comprehensive CRM solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {pageData.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connecting line */}
                  {index < pageData.services.length - 1 && (
                    <div className="absolute left-6 top-20 bottom-0 w-px bg-blue-200 z-0" />
                  )}

                  <div 
                    className={`relative bg-white rounded-lg border border-blue-100 transition-all duration-300 hover:shadow-lg ${
                      expandedService === index ? 'shadow-lg' : 'shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                      className="w-full p-8 text-left flex items-start justify-between hover:bg-blue-50/50 transition-colors rounded-lg"
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-light text-gray-900 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 font-light leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className={`transform transition-transform duration-300 ${
                        expandedService === index ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      </div>
                    </button>

                    {/* Expanded content */}
                    {expandedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-8 pb-8 border-t border-blue-100"
                      >
                        <div className="grid md:grid-cols-2 gap-8 pt-6">
                          <div>
                            <h4 className="text-lg font-normal text-gray-900 mb-4">Key Features</h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                  <Check className="w-4 h-4 text-blue-600 mr-3" />
                                  <span className="font-light">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-normal text-gray-900 mb-4">Implementation Process</h4>
                            <ul className="space-y-3">
                              {service.process.map((step, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                                    <span className="text-xs text-blue-600 font-medium">{i + 1}</span>
                                  </div>
                                  <span className="font-light leading-relaxed">{step}</span>
                                </li>
                              ))}
                            </ul>
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
        <section className="min-h-screen bg-white relative overflow-hidden">
          <div className="sticky top-0 h-screen flex">
            {/* Left side - Sticky content */}
            <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <div className="max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-light text-gray-900 mb-6">
                    Why Choose
                    <br />
                    <span className="text-blue-600 font-normal">Our CRM</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                    Experience the difference with our carefully crafted CRM solution designed for modern businesses.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Zap className="w-5 h-5" />, text: "Lightning fast performance" },
                      { icon: <Shield className="w-5 h-5" />, text: "Enterprise-grade security" },
                      { icon: <Settings className="w-5 h-5" />, text: "Easy customization" },
                      { icon: <Users className="w-5 h-5" />, text: "Dedicated support team" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          {item.icon}
                        </div>
                        <span className="font-light">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side - Scrollable features */}
            <div className="flex-1 overflow-y-auto">
              <div className="py-32 space-y-32">
                {/* Feature 1 */}
                <div className="px-12">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <BarChart2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Advanced Analytics</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      Gain deep insights into your customer behavior and business performance with our powerful analytics tools.
                    </p>
                    <ul className="space-y-3">
                      {['Real-time dashboards', 'Custom reporting', 'Predictive analytics', 'Performance tracking'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-blue-600 mr-3" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Feature 2 */}
                <div className="px-12">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <RefreshCw className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Workflow Automation</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      Automate repetitive tasks and streamline your business processes with intelligent workflow automation.
                    </p>
                    <ul className="space-y-3">
                      {['Lead routing', 'Email sequences', 'Task assignment', 'Approval workflows'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-blue-600 mr-3" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Feature 3 */}
                <div className="px-12">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                      <Smartphone className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">Mobile Experience</h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      Access your CRM from anywhere with our fully responsive mobile application designed for on-the-go productivity.
                    </p>
                    <ul className="space-y-3">
                      {['iOS and Android apps', 'Offline access', 'Push notifications', 'Mobile reporting'].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <Check className="w-4 h-4 text-blue-600 mr-3" />
                          <span className="font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {pageData.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {metric.icon}
                  </div>
                  <motion.p
                    className="text-4xl font-light text-gray-900 mb-2"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {metric.value}
                  </motion.p>
                  <p className="text-gray-600 font-light">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="py-32 bg-blue-50 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Industry-Specific <span className="text-blue-600 font-normal">Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Tailored CRM solutions for your business domain
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pageData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg font-normal text-gray-900">{industry.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.features.map((feature, j) => (
                      <li key={j} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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