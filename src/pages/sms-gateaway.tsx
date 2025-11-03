import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, Smartphone, Zap, Shield, Clock, 
  Check, ArrowRight, Mail, Hash, BarChart2,
  Code, Server, Users, Globe, CreditCard, Calendar,
  FileText, Lock, Download, Copy, Play,
  GitBranch,
  RefreshCw, 
  TestTube2,
  Link,
  Send,
  Route,
  Inbox,
  CheckCircle,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
} from 'lucide-react';
import { FaWhatsapp, FaGoogle, FaSms } from 'react-icons/fa';
import { SiZapier, SiShopify, SiWordpress, SiHubspot, SiZoho } from 'react-icons/si';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import TabSwitcher from '../components/ui/TabSwitcher';
import CodeSnippet from '../components/sms/CodeSnippet';
import MetricCard from '../components/sms/MetricCard';
import IndustryCard from '../components/sms/IndustryCard';
import TemplateCard from '../components/sms/TemplateCard';
import FAQAccordion from '../components/home/FAQAccordion';

// Data for SMS Gateway Page
const smsData = {
  hero: {
    title: "Powerful SMS Gateway for Instant Business Communication",
    subtitle: "Send OTPs, offers, updates, alerts, reminders — with 99.99% delivery and blazing-fast routing.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Get API Docs",
    phoneContent: [
      { type: "otp", text: "Your OTP is 457812. Valid for 5 mins. - MyApp" },
      { type: "alert", text: "Alert: Your order #12345 has shipped! Track at example.com/track" },
      { type: "promo", text: "FLASH SALE! 50% OFF today only. Shop now: example.com/sale" }
    ]
  },
  features: [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "OTP & 2FA Verification",
      description: "Secure authentication with instant delivery",
      color: "text-purple-500"
    },
    {
      icon: <FaSms className="w-6 h-6" />,
      title: "Promotional Bulk SMS",
      description: "Reach thousands instantly with offers",
      color: "text-blue-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Transactional Updates",
      description: "Order confirmations & alerts",
      color: "text-green-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Reminders",
      description: "Reduce no-shows with timely SMS",
      color: "text-orange-500"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "SMS Campaign Analytics",
      description: "Track opens, clicks & conversions",
      color: "text-cyan-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Unicode Support",
      description: "Send in any language",
      color: "text-red-500"
    }
  ],
  smsTypes: {
    transactional: {
      title: "Transactional SMS",
      description: "Time-sensitive notifications like OTPs, alerts, and order updates that are delivered 24/7 even to DND numbers.",
      features: [
        "DLT-compliant templates",
        "High priority routing",
        "Instant delivery",
        "DND bypass"
      ],
      examples: [
        "Your OTP is 784512 - MyApp",
        "Your order #123 has shipped! Track: bit.ly/track123",
        "Your payment of ₹1500 was successful"
      ]
    },
    promotional: {
      title: "Promotional SMS",
      description: "Marketing messages, offers and promotions delivered to non-DND numbers between 9AM-9PM as per TRAI regulations.",
      features: [
        "Bulk sending",
        "Personalization",
        "Link tracking",
        "NDND filtering"
      ],
      examples: [
        "FLASH SALE! 50% OFF today - Shop now",
        "Hi [Name], your exclusive offer awaits!",
        "Refer friends & get ₹500 credit!"
      ]
    }
  },
  apiFeatures: [
    {
      title: "RESTful API",
      description: "Simple integration with JSON payloads",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Webhook Support",
      description: "Real-time delivery callbacks",
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: "Retry Logic",
      description: "Automatic resend attempts",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Sandbox Mode",
      description: "Test before going live",
      icon: <TestTube2 className="w-8 h-8" />
    }
  ],
  dashboardFeatures: [
    "Campaign management",
    "Delivery reports",
    "Contact management",
    "Bulk CSV upload",
    "DLT template management",
    "Real-time analytics"
  ],
  workflow: [
    {
      step: 1,
      title: "Connect",
      description: "Via API or dashboard",
      icon: <Link className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Submit",
      description: "Numbers & message content",
      icon: <Send className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Route",
      description: "Auto-select best channel",
      icon: <Route className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Deliver",
      description: "Through SMSC partners",
      icon: <Inbox className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Confirm",
      description: "Get delivery reports",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ],
  industries: [
    {
      name: "E-commerce",
      useCases: ["Order confirmations", "Shipping updates", "OTP logins"],
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      name: "Healthcare",
      useCases: ["Appointment reminders", "Medicine alerts", "Test results"],
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      name: "Banking",
      useCases: ["OTP authentication", "Fraud alerts", "Payment confirmations"],
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      name: "Education",
      useCases: ["Exam alerts", "Fee reminders", "Class updates"],
      icon: <GraduationCap className="w-8 h-8" />
    }
  ],
  metrics: [
    {
      value: "99.9%",
      label: "Delivery Rate",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      value: "<2s",
      label: "Avg. Delivery Time",
      icon: <Zap className="w-8 h-8" />
    },
    {
      value: "99.99%",
      label: "API Uptime",
      icon: <Server className="w-8 h-8" />
    },
    {
      value: "1M+",
      label: "Monthly Volume",
      icon: <BarChart2 className="w-8 h-8" />
    }
  ],
  securityFeatures: [
    "TRAI DLT compliance",
    "End-to-end encryption",
    "Sender ID verification",
    "Opt-out management",
    "Audit logs"
  ],
  integrations: [
    { name: "Zoho", icon: <SiZoho className="w-8 h-8" /> },
    { name: "HubSpot", icon: <SiHubspot className="w-8 h-8" /> },
    { name: "Shopify", icon: <SiShopify className="w-8 h-8" /> },
    { name: "WordPress", icon: <SiWordpress className="w-8 h-8" /> },
    { name: "Zapier", icon: <SiZapier className="w-8 h-8" /> }
  ],
  templates: [
    {
      name: "OTP Template",
      content: "Your OTP is {123456}. Valid for {5} minutes. Do not share with anyone.",
      type: "transactional"
    },
    {
      name: "Order Update",
      content: "Hi {Customer}, your order #{OrderID} has been {shipped}. Track here: {URL}",
      type: "transactional"
    },
    {
      name: "Promo Offer",
      content: "Hi {Name}, enjoy {20%} off on your next purchase! Use code {OFFER20}. Valid till {date}",
      type: "promotional"
    }
  ],
  faqs: [
    {
      question: "How fast are messages delivered?",
      answer: "Most messages are delivered within 2 seconds, with our high-priority routing ensuring critical messages like OTPs are delivered instantly."
    },
    {
      question: "What's the difference between transactional and promotional SMS?",
      answer: "Transactional SMS are time-sensitive notifications (OTPs, alerts) delivered 24/7. Promotional SMS are marketing messages sent 9AM-9PM to non-DND numbers only."
    },
    {
      question: "Is your service DLT compliant?",
      answer: "Yes, we're fully compliant with TRAI DLT regulations. We'll help you register your sender ID and templates."
    }
  ]
};

interface PhoneMockupProps {
  message: {
    type: string;
    text: string;
  };
  small?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ message, small }) => {
  return (
    <div className={`relative ${small ? 'scale-75' : ''}`}>
      <div className="bg-gray-900 rounded-[3rem] p-2 shadow-xl">
        <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-4 h-[600px]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl" />
          
          {/* Message content */}
          <div className="mt-12 p-4">
            <div className={`p-4 rounded-lg max-w-[80%] ${
              message.type === 'otp' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100' :
              message.type === 'alert' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-900 dark:text-yellow-100' :
              'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            }`}>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SMSGatewayPage = () => {
  const [activeTab, setActiveTab] = useState<'transactional' | 'promotional'>('transactional');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Auto-rotate messages in phone mockup
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => 
        prev === smsData.hero.phoneContent.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section - No dark mode needed as it's already dark */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden min-h-screen flex items-center">
        {/* Floating message bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute rounded-full bg-white/10 ${
                i % 3 === 0 ? 'w-6 h-6' : i % 2 === 0 ? 'w-4 h-4' : 'w-2 h-2'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
              >
                <Zap className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">INSTANT MESSAGING</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Deliver Your Message <span className="text-cyan-300">Instantly</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 max-w-lg">
                {smsData.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-blue-900"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {smsData.hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  icon={<Code className="w-5 h-5" />}
                >
                  {smsData.hero.ctaSecondary}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <PhoneMockup message={smsData.hero.phoneContent[currentMessageIndex]} />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              >
                <ArrowRight className="w-6 h-6 text-white rotate-90 mb-2" />
                <span className="text-sm text-white/80">Live Preview</span>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need for <span className="text-blue-600 dark:text-blue-400">Effective SMS Communication</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our platform provides all the tools to send, track and optimize your SMS campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {smsData.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                  {React.cloneElement(feature.icon, { className: `w-6 h-6 ${feature.color}` })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SMS Types Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Types of <span className="text-blue-600">SMS We Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right SMS type for your business needs
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <TabSwitcher
              tabs={[
                { id: 'transactional', label: 'Transactional SMS' },
                { id: 'promotional', label: 'Promotional SMS' }
              ]}
              activeTab={activeTab}
              onChange={(tabId) => setActiveTab(tabId as 'transactional' | 'promotional')}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeTab + '-left'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {smsData.smsTypes[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {smsData.smsTypes[activeTab].description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {smsData.smsTypes[activeTab].features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">Example Messages</span>
                  <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="space-y-2">
                  {smsData.smsTypes[activeTab].examples.map((example, i) => (
                    <div key={i} className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600 text-sm font-mono">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              key={activeTab + '-right'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PhoneMockup 
                      message={{
                        type: activeTab,
                        text: smsData.smsTypes[activeTab].examples[0]
                      }} 
                      small
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Best for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTab === 'transactional' ? (
                      <>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OTP Verification</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Order Updates</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Account Alerts</span>
                      </>
                    ) : (
                      <>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Sales Promotions</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Newsletters</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Lead Generation</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* API & Dashboard Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Developer-Friendly <span className="text-blue-600 dark:text-blue-400">Integration</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Powerful tools for developers and marketers alike
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Code className="w-6 h-6 mr-3 text-blue-600" />
                API Access
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {smsData.apiFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <CodeSnippet />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <BarChart2 className="w-6 h-6 mr-3 text-blue-600" />
                Dashboard Features
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
                <ul className="space-y-3">
                  {smsData.dashboardFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 mb-4">
                    <div className="h-4 bg-gray-600/30 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-600/30 rounded mb-2 w-1/2"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-800/30 rounded-lg p-3">
                      <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                      <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="bg-blue-800/30 rounded-lg p-3">
                      <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                      <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="bg-blue-800/30 rounded-lg p-3">
                      <div className="h-20 bg-blue-700/30 rounded mb-2"></div>
                      <div className="h-3 bg-blue-700/30 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                  <div className="bg-blue-800/30 rounded-lg p-3 h-40"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              icon={<Download className="w-5 h-5" />}
            >
              Download Full API Documentation
            </Button>
          </div>
        </Container>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Our <span className="text-blue-600">SMS Gateway</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps from message creation to delivery
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {smsData.workflow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Industry-Specific</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored SMS solutions for your business sector
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smsData.industries.map((industry, i) => (
              <IndustryCard 
                key={i}
                industry={industry}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics Section - No dark mode needed as it's already dark */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-300">Performance</span> Metrics
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Numbers that prove our reliability and speed
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smsData.metrics.map((metric, i) => (
              <MetricCard 
                key={i}
                metric={metric}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Templates Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready-to-Use <span className="text-blue-600">Message Templates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started quickly with our pre-approved templates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {smsData.templates.map((template, i) => (
              <TemplateCard 
                key={i}
                template={template}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              icon={<Download className="w-5 h-5" />}
            >
              Download Full Template Pack
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA - No dark mode needed as it's already has a gradient background */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            style={{ scale }}
            className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 shadow-2xl overflow-hidden relative text-center"
          >
            <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Your Business with SMS?
              </h2>
              <p className="text-xl text-blue-100 mb-10">
                Start sending messages in minutes with our reliable SMS gateway platform.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 px-8"
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default SMSGatewayPage;