import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Smartphone, Check, Zap, Shield, 
  GitBranch, Server, Users, Clock, Terminal,
  ArrowRight, ChevronLeft, ChevronRight, Mail,
  Code, LayoutTemplate, ShoppingCart, BarChart2
} from 'lucide-react';
import { FaWhatsapp, FaGoogle, FaSms, FaRegLightbulb } from 'react-icons/fa';
import { SiShopify, SiWordpress, SiZoho, SiHubspot, SiSalesforce } from 'react-icons/si';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import FAQAccordion from '../components/home/FAQAccordion';

// WhatsApp Brand Colors (add dark mode variants)
const whatsappColors = {
  primary: '#25D366',
  secondary: '#128C7E',
  dark: '#075E54',
  light: '#DCF8C6',
  accent: '#34B7F1',
  darkMode: {
    primary: '#1FA959',
    secondary: '#0F7A6C',
    dark: '#063E38',
    light: '#1E2D40',
    accent: '#2D9DCF'
  }
};

// Data for the WhatsApp API page
const whatsappData = {
  hero: {
    title: "Automated. Verified. 24/7 WhatsApp Conversations.",
    subtitle: "Seamless WhatsApp API integration for support, marketing, and sales.",
    ctaPrimary: "Book Free Demo",
    ctaSecondary: "See Pricing",
    features: [
      "Get Green Tick Verification",
      "99.9% Delivery Rate",
      "AI-Powered Chatbots",
      "CRM Integration"
    ]
  },
  capabilities: [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Auto Replies & Smart Bots",
      description: "Automate responses to common questions with AI-powered bots"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Cart Abandonment Reminders",
      description: "Recover lost sales with personalized WhatsApp reminders"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Order Updates & Invoices",
      description: "Send real-time order confirmations and payment receipts"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Booking Confirmations",
      description: "Automate appointment scheduling and reminders"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Broadcast Campaigns",
      description: "Send approved template messages to your audience"
    },
    {
      icon: <FaRegLightbulb className="w-8 h-8" />,
      title: "AI-Powered FAQs",
      description: "Natural language processing for customer queries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Agent Handover",
      description: "Seamlessly transfer to human agents when needed"
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Media & Catalog Support",
      description: "Send images, videos, PDFs and product catalogs"
    }
  ],
  useCases: {
    categories: [
      { name: "E-commerce", icon: <ShoppingCart className="w-5 h-5" /> },
      { name: "Customer Support", icon: <MessageSquare className="w-5 h-5" /> },
      { name: "Services", icon: <Clock className="w-5 h-5" /> },
      { name: "Education", icon: <FaRegLightbulb className="w-5 h-5" /> },
      { name: "Finance", icon: <BarChart2 className="w-5 h-5" /> }
    ],
    examples: {
      "E-commerce": [
        "COD payment confirmations",
        "Shipping updates with tracking",
        "Personalized product recommendations",
        "Post-purchase feedback collection"
      ],
      "Customer Support": [
        "Instant ticket creation",
        "Automated issue resolution",
        "Live agent transfer",
        "Customer satisfaction surveys"
      ],
      "Services": [
        "Appointment scheduling",
        "Booking confirmations",
        "Service reminders",
        "Feedback collection"
      ],
      "Education": [
        "Assignment reminders",
        "Course updates",
        "Fee payment reminders",
        "Parent-teacher communication"
      ],
      "Finance": [
        "Account statements",
        "Payment reminders",
        "Fraud alerts",
        "Investment updates"
      ]
    }
  },
  integrations: {
    crms: [
      { name: "Zoho", icon: <SiZoho className="w-8 h-8" /> },
      { name: "HubSpot", icon: <SiHubspot className="w-8 h-8" /> },
      { name: "Salesforce", icon: <SiSalesforce className="w-8 h-8" /> }
    ],
    platforms: [
      { name: "Shopify", icon: <SiShopify className="w-8 h-8" /> },
      { name: "WooCommerce", icon: <SiWordpress className="w-8 h-8" /> },
      { name: "WordPress", icon: <SiWordpress className="w-8 h-8" /> }
    ],
    channels: [
      { name: "Webhooks", icon: <GitBranch className="w-8 h-8" /> },
      { name: "REST APIs", icon: <Terminal className="w-8 h-8" /> },
      { name: "Dialogflow", icon: <MessageSquare className="w-8 h-8" /> }
    ]
  },
  howItWorks: [
    {
      step: 1,
      title: "Connect Meta Business Account",
      description: "Link your Facebook Business Manager to get started"
    },
    {
      step: 2,
      title: "Get Verified",
      description: "We help you get WhatsApp Business API approval"
    },
    {
      step: 3,
      title: "Setup Webhook",
      description: "Configure your callback URL for real-time messaging"
    },
    {
      step: 4,
      title: "Configure Auto Flows",
      description: "Set up your chatbot and automation rules"
    },
    {
      step: 5,
      title: "Go Live",
      description: "Start messaging customers within minutes"
    }
  ],
  metrics: [
    {
      value: "3s",
      label: "Avg. Response Time",
      description: "Lightning fast automated replies"
    },
    {
      value: "95%",
      label: "Bot Accuracy Rate",
      description: "AI understands customer intent"
    },
    {
      value: "99.2%",
      label: "Template Delivery Rate",
      description: "High reliability messaging"
    },
    {
      value: "500K+",
      label: "Monthly Conversations",
      description: "Scalable infrastructure"
    }
  ],
  features: [
    "Verified Green Tick Setup",
    "Session & Template Messages",
    "Click-to-Chat Ads Integration",
    "Media, Buttons & Lists Support",
    "Payment Links via Razorpay/Stripe",
    "Webhooks & Detailed Logs",
    "Smart Retry Logic",
    "Error Handling & Alerts"
  ],
  deliverables: [
    "Ready-to-use WhatsApp API",
    "Pre-approved message templates",
    "AI chatbot setup (Dialogflow or custom)",
    "Admin dashboard with analytics",
    "Comprehensive API documentation",
    "Secure end-to-end deployment",
    "Onboarding & training support",
    "24/7 technical assistance"
  ],
  testimonials: [
    {
      quote: "Our customer response times improved from hours to seconds after implementing this WhatsApp solution. The automated flows handle 80% of queries without human intervention.",
      author: "Priya Sharma",
      role: "Head of CX, UrbanKart",
      rating: 5
    },
    {
      quote: "Getting the green tick verification was seamless with their help. Now our messages have much higher open and conversion rates.",
      author: "Rahul Mehta",
      role: "Founder, HealthFit",
      rating: 5
    },
    {
      quote: "The Shopify integration saved us hundreds of hours. Order confirmations and shipping updates are now fully automated.",
      author: "Neha Patel",
      role: "E-commerce Manager, TrendStyle",
      rating: 4
    }
  ],
  faqs: [
    {
      question: "What's the difference between WhatsApp Business App vs API?",
      answer: "The Business App is for small businesses with basic features. The API is for medium/large businesses needing automation, higher limits, and CRM integrations."
    },
    {
      question: "Can I use this with my Shopify store?",
      answer: "Yes! We have direct Shopify integration for order updates, abandoned cart reminders, and customer support."
    },
    {
      question: "How do I get the green tick verification?",
      answer: "We guide you through the entire process including business verification, compliance checks, and submitting to Meta for approval."
    },
    {
      question: "What happens after 24 hours?",
      answer: "After 24 hours of customer's last message, you can only send template messages until they initiate contact again."
    },
    {
      question: "Do you provide chatbot integration?",
      answer: "Yes, we offer both Dialogflow integration and custom chatbot solutions tailored to your business needs."
    }
  ],
  pricing: {
    starter: {
      price: "₹3,999",
      period: "month",
      features: [
        "1,000 template messages",
        "Basic chatbot setup",
        "Email support",
        "CRM integration (1 platform)"
      ],
      cta: "Start Now"
    },
    professional: {
      price: "₹9,999",
      period: "month",
      popular: true,
      features: [
        "5,000 template messages",
        "Advanced AI chatbot",
        "Priority support",
        "CRM integration (3 platforms)",
        "WhatsApp Green Tick assistance"
      ],
      cta: "Get Started"
    },
    enterprise: {
      price: "Custom",
      period: "",
      features: [
        "Unlimited messages",
        "Custom chatbot development",
        "24/7 dedicated support",
        "Multi-CRM integration",
        "Custom analytics dashboard",
        "API access"
      ],
      cta: "Contact Sales"
    }
  }
};

// Floating WhatsApp Particles Component
const WhatsAppParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            x: [null, Math.random() * 100 - 50],
            y: [null, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className={`absolute rounded-full ${
            i % 3 === 0 ? 'bg-green-400' : i % 2 === 0 ? 'bg-green-300' : 'bg-white'
          } ${i % 3 === 0 ? 'w-3 h-3' : i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

// WhatsApp Phone Mockup Component
const WhatsAppMockup = () => {
  const messages = [
    {
      id: 1,
      text: "Hi there! I'd like to check my order status",
      sender: "customer",
      time: "10:30 AM"
    },
    {
      id: 2,
      text: "Sure! Please share your order ID",
      sender: "bot",
      time: "10:30 AM"
    },
    {
      id: 3,
      
      text: "Your order #12345 is shipped and will arrive tomorrow. Track here: [link]",
      sender: "bot",
      time: "10:32 AM",
      buttons: ["Track Package", "Contact Support"]
    }
  ];

  const [activeMessage, setActiveMessage] = useState(0);

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-xs mx-auto lg:max-w-md"
    >
      {/* Phone frame */}
      <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden h-96">
          {/* WhatsApp header */}
          <div 
            className="h-16 p-3 flex items-center justify-between text-white"
            style={{ backgroundColor: whatsappColors.dark }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
              <div>
                <div className="font-semibold">Business Name</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Chat area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-900">
            {messages.map((message, i) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'customer' 
                      ? 'bg-green-100 dark:bg-green-900 rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="text-sm dark:text-white">{message.text}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">{message.time}</div>
                  
                  {message.buttons && (
                    <div className="mt-2 space-y-1">
                      {message.buttons.map((button, i) => (
                        <button 
                          key={i}
                          className="block w-full text-left px-3 py-1 text-sm rounded border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-800"
                          style={{ 
                            color: whatsappColors.dark
                          }}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
              </button>
              <input 
                type="text" 
                placeholder="Type a message"
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-white"
              />
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating buttons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -right-5 top-1/4 bg-white p-2 rounded-full shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" style={{ color: whatsappColors.primary }} />
      </motion.div>
    </motion.div>
  );
};

// Capability Grid Component
const CapabilityGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whatsappData.capabilities.map((capability, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 group cursor-default"
        >
          <div 
            className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: whatsappColors.light }}
          >
            {React.cloneElement(capability.icon, { 
              className: "w-6 h-6",
              style: { color: whatsappColors.dark }
            })}
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{capability.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{capability.description}</p>
          
          {/* Hover effect border */}
          <motion.div 
            className="absolute inset-0 rounded-xl border-2 pointer-events-none"
            initial={{ opacity: 0, borderColor: whatsappColors.light }}
            whileHover={{ opacity: 1, borderColor: whatsappColors.primary }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Use Cases Tabs Component
const UseCasesTabs = () => {
  const [activeTab, setActiveTab] = useState("E-commerce");
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      {/* Tabs */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-gray-200 dark:border-gray-700">
        {whatsappData.useCases.categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`px-6 py-4 flex items-center space-x-2 whitespace-nowrap ${activeTab === category.name 
              ? 'border-b-2 font-medium text-gray-900 dark:text-white' 
              : 'text-gray-500 hover:text-gray-700'}`}
            style={{ 
              borderBottomColor: activeTab === category.name ? whatsappColors.primary : 'transparent' 
            }}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Tab content */}
      <div className="p-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {(whatsappData.useCases.examples as Record<string, string[]>)[activeTab].map((example: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start"
            >
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: whatsappColors.primary }} />
              <span className="text-gray-700 dark:text-gray-300">{example}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Integration Grid Component
const IntegrationGrid = () => {
  return (
    <div className="space-y-8">
      {/* CRM Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">CRM Integrations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.crms.map((crm, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(crm.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{crm.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Platform Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">E-commerce Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.platforms.map((platform, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(platform.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Channel Integrations */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Integration Channels</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {whatsappData.integrations.channels.map((channel, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700"
            >
              {React.cloneElement(channel.icon, { className: "w-10 h-10 mb-2" })}
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{channel.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// How It Works Timeline Component
const HowItWorks = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600 transform translate-x-1/2"></div>
      
      <div className="space-y-12">
        {whatsappData.howItWorks.map((step, i) => (
          <div key={i} className="relative pl-16">
            {/* Step number */}
            <div 
              className="absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold z-10"
              style={{ backgroundColor: whatsappColors.primary }}
            >
              {step.step}
            </div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Metrics Component
const Metrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {whatsappData.metrics.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center"
        >
          <div className="relative inline-flex mb-4">
            <div 
              className="absolute inset-0 rounded-full opacity-20 animate-ping"
              style={{ backgroundColor: whatsappColors.primary }}
            />
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: whatsappColors.primary }}
            >
              {metric.value}
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{metric.label}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

// Features Checklist Component
const FeaturesChecklist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          WhatsApp Business Features
        </h3>
        <ul className="space-y-3">
          {whatsappData.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start"
            >
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: whatsappColors.primary }} />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          What You Get
        </h3>
        <ul className="space-y-3">
          {whatsappData.deliverables.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start"
            >
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" style={{ color: whatsappColors.primary }} />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Testimonials Component with WhatsApp UI
const WhatsAppTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === whatsappData.testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? whatsappData.testimonials.length - 1 : prev - 1));
  };
  
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Testimonial in WhatsApp-style bubble */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg relative"
      >
        {/* WhatsApp bubble tail */}
        <div className="absolute -left-3 top-6 w-6 h-6 overflow-hidden">
          <div className="w-6 h-6 bg-white dark:bg-gray-800 transform rotate-45 origin-bottom-right shadow-sm"></div>
        </div>
        
        {/* Rating stars */}
        <div className="flex mb-3">
          {[...Array(whatsappData.testimonials[currentIndex].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-800 dark:text-gray-200 mb-4">"{whatsappData.testimonials[currentIndex].quote}"</p>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white">{whatsappData.testimonials[currentIndex].author}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{whatsappData.testimonials[currentIndex].role}</p>
          </div>
        </div>
      </motion.div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

// Pricing Component
const Pricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.starter.price}</span>
          <span className="text-gray-500 ml-1">/{whatsappData.pricing.starter.period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.starter.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:border-green-500 hover:text-green-600"
        >
          {whatsappData.pricing.starter.cta}
        </Button>
      </motion.div>
      
      {/* Professional Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 relative"
        style={{ borderColor: whatsappColors.primary }}
      >
        {/* Popular badge */}
        <div 
          className="absolute top-0 right-6 transform -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
        >
          MOST POPULAR
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.professional.price}</span>
          <span className="text-gray-500 ml-1">/{whatsappData.pricing.professional.period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.professional.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="primary"
          className="w-full"
          style={{ backgroundColor: whatsappColors.primary }}
        >
          {whatsappData.pricing.professional.cta}
        </Button>
      </motion.div>
      
      {/* Enterprise Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
        <div className="flex items-end mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{whatsappData.pricing.enterprise.price}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {whatsappData.pricing.enterprise.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          variant="outline"
          className="w-full border-gray-300 hover:border-green-500 hover:text-green-600"
        >
          {whatsappData.pricing.enterprise.cta}
        </Button>
      </motion.div>
    </div>
  );
};

// WhatsAppAPIPage Component
const WhatsAppAPIPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden dark:bg-gray-900"
        style={{ 
          backgroundColor: whatsappColors.dark
        }}
      >
        <WhatsAppParticles />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <span className="text-sm font-medium">WhatsApp Business API Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {whatsappData.hero.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-lg">
                {whatsappData.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {whatsappData.hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 px-8"
                >
                  {whatsappData.hero.ctaSecondary}
                </Button>
              </div>
              
              <ul className="space-y-2">
                {whatsappData.hero.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center"
                  >
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    <span className="text-white/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <WhatsAppMockup />
          </div>
        </Container>
      </section>
      
      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What You Can Do With <span className="text-green-500">WhatsApp API</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features to automate customer conversations at scale
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsappData.capabilities.map((capability, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 group cursor-default"
              >
                <div 
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: whatsappColors.light }}
                >
                  {React.cloneElement(capability.icon, { 
                    className: "w-6 h-6",
                    style: { color: whatsappColors.dark }
                  })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{capability.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{capability.description}</p>
                
                {/* Hover effect border */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 pointer-events-none"
                  initial={{ opacity: 0, borderColor: whatsappColors.light }}
                  whileHover={{ opacity: 1, borderColor: whatsappColors.primary }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Supported <span className="text-green-500">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for your industry needs
            </p>
          </motion.div>
          
          <UseCasesTabs />
        </Container>
      </section>
      
      {/* Integrations Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Seamless <span className="text-green-500">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Connect with your existing tech stack in minutes
            </p>
          </motion.div>
          
          <IntegrationGrid />
        </Container>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="text-green-500">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with WhatsApp Business API in 5 simple steps
            </p>
          </motion.div>
          
          <HowItWorks />
        </Container>
      </section>
      
      {/* Metrics Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Results That <span className="text-green-500">Matter</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proven metrics from our existing customers
            </p>
          </motion.div>
          
          <Metrics />
        </Container>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete <span className="text-green-500">Features</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need for successful WhatsApp automation
            </p>
          </motion.div>
          
          <FeaturesChecklist />
        </Container>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our <span className="text-green-500">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>
          
          <WhatsAppTestimonials />
        </Container>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, <span className="text-green-500">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Plans that scale with your business needs
            </p>
          </motion.div>
          
          <Pricing />
        </Container>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about WhatsApp Business API
            </p>
          </motion.div>
          
          <FAQAccordion faqs={whatsappData.faqs} />
        </Container>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: whatsappColors.dark }}
      >
        <WhatsAppParticles />
        
        <Container>
          <motion.div
            style={{ scale }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div 
                className="px-6 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-white/20"
              >
                READY TO GET STARTED?
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Customer Engagement with <span className="text-green-300">WhatsApp</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses using our WhatsApp API solutions to automate conversations and boost sales.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-12"
                icon={<ArrowRight size={20} />}
              >
                Get Started Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 px-12"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default WhatsAppAPIPage;