import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, BarChart, Zap, Shield, Users, Clock, 
  Palette, Send, ArrowRight, ChevronLeft, ChevronRight, 
  CheckCircle, Star, Globe, Check, ChevronDown, Rocket, 
  Target, Brain, Settings, LayoutDashboard
} from 'lucide-react';
import { FaShoppingBag, FaWordpress, FaGoogle, FaSlack, FaSalesforce, FaShopify } from 'react-icons/fa';
import { SiHubspot, SiMailchimp, SiZapier } from 'react-icons/si';

// Assuming these components exist
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Type definitions for data structure
interface Stat {
  value: string;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

interface Integration {
  name: string;
  logo: React.ReactNode;
  description: string;
}

interface Metric {
  title: string;
  value: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface WhyChoose {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FlowStep {
  step: string;
  description: string;
}

interface LeadTool {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface EmailMarketingData {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    stats: Stat[];
  };
  features: Feature[];
  integrations: Integration[];
  metrics: Metric[];
  testimonials: Testimonial[];
  pricing: PricingPlan[];
  blogPosts: BlogPost[];
  faqs: FAQ[];
  whyChoose: WhyChoose[];
  flowSteps: FlowStep[];
  leadTools: LeadTool[];
}

// Data for email marketing platform
const emailMarketingData: EmailMarketingData = {
  hero: {
    title: "Supercharge Your Email Marketing",
    subtitle: "Build stunning campaigns, automate workflows, and skyrocket conversions with AI-powered tools",
    cta: "Start Free Trial",
    secondaryCta: "Book a Demo",
    stats: [
      { value: "98%", label: "Email Deliverability" },
      { value: "4x", label: "Click-Through Rates" },
      { value: "25%", label: "Revenue Boost" },
      { value: "75k+", label: "Active Users" },
      { value: "24/7", label: "Support" }
    ]
  },
  features: [
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Visual Email Builder",
      description: "Craft stunning emails effortlessly",
      details: "Design responsive, branded templates with our drag-and-drop editor, featuring real-time previews and AI-driven design suggestions."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Automation",
      description: "Personalize at scale",
      details: "Create dynamic workflows for welcome series, abandoned carts, and re-engagement with AI-optimized triggers."
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      title: "Advanced Analytics",
      description: "Track performance in real-time",
      details: "Gain insights with detailed dashboards, A/B testing, and predictive analytics for campaign optimization."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Smart Segmentation",
      description: "Target precisely",
      details: "Segment audiences by behavior, demographics, and AI-predicted engagement for hyper-personalized campaigns."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Secure & Compliant",
      description: "Stay safe and trusted",
      details: "Ensure deliverability with GDPR, CCPA compliance, SPF/DKIM, and end-to-end encryption."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "Optimal Scheduling",
      description: "Send at the right time",
      details: "Maximize opens with AI-driven send time optimization and global time zone support."
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      title: "Landing Pages",
      description: "Boost conversions",
      details: "Create high-converting landing pages that integrate seamlessly with your email campaigns."
    }
  ],
  integrations: [
    { name: "Shopify", logo: <FaShopify className="w-10 h-10 text-gray-600" />, description: "Sync e-commerce data" },
    { name: "Salesforce", logo: <FaSalesforce className="w-10 h-10 text-gray-600" />, description: "Integrate CRM" },
    { name: "HubSpot", logo: <SiHubspot className="w-10 h-10 text-gray-600" />, description: "Enhance automation" },
    { name: "WordPress", logo: <FaWordpress className="w-10 h-10 text-gray-600" />, description: "Capture leads" },
    { name: "Slack", logo: <FaSlack className="w-10 h-10 text-gray-600" />, description: "Real-time notifications" },
    { name: "Google Analytics", logo: <FaGoogle className="w-10 h-10 text-gray-600" />, description: "Track with GA4" },
    { name: "Zapier", logo: <SiZapier className="w-10 h-10 text-gray-600" />, description: "Connect 5000+ apps" },
    { name: "Mailchimp", logo: <SiMailchimp className="w-10 h-10 text-gray-600" />, description: "Migrate seamlessly" }
  ],
  metrics: [
    { title: "Open Rates", value: "40%", description: "AI-optimized subject lines boost engagement." },
    { title: "Conversions", value: "28%", description: "Personalized campaigns drive results." },
    { title: "Time Saved", value: "50+ hrs", description: "Automation streamlines workflows." },
    { title: "ROI Increase", value: "300%", description: "Maximize returns with smart tools." }
  ],
  testimonials: [
    { quote: "The AI automation doubled our conversions in weeks!", author: "Priya Sharma", role: "Marketing Head", company: "ShopIndia", rating: 5 },
    { quote: "The visual builder is intuitive and saves us hours.", author: "Rahul Mehta", role: "E-commerce Lead", company: "TrendBazaar", rating: 4 },
    { quote: "Integrations made scaling our campaigns a breeze.", author: "Anita Desai", role: "CMO", company: "GrowFast", rating: 5 },
    { quote: "Analytics gave us insights we never had before.", author: "Vikram Singh", role: "Digital Strategist", company: "TechTrend", rating: 4 },
    { quote: "Support team is incredible, always there for us.", author: "Neha Gupta", role: "CEO", company: "BrandBuzz", rating: 5 }
  ],
  pricing: [
    {
      name: "Basic",
      price: "₹1,250/mo",
      features: ["500 subscribers", "Basic templates", "Standard analytics", "Email support", "5 campaigns/mo"],
      cta: "Choose Basic"
    },
    {
      name: "Pro",
      price: "₹3,250/mo",
      features: ["10,000 subscribers", "Advanced templates", "Automation workflows", "Priority support", "A/B testing", "Unlimited campaigns"],
      cta: "Choose Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited subscribers", "Custom templates", "Dedicated manager", "API access", "Premium integrations", "Advanced AI tools"],
      cta: "Contact Sales"
    }
  ],
  blogPosts: [
    { title: "Email Marketing Trends 2025", excerpt: "Discover strategies to stay ahead.", image: "/images/blog1.jpg", date: "May 25, 2025", readTime: "6 min" },
    { title: "Perfect Subject Lines", excerpt: "Boost opens with these tips.", image: "/images/blog2.jpg", date: "April 30, 2025", readTime: "5 min" },
    { title: "Automation Mastery", excerpt: "Streamline your campaigns.", image: "/images/blog3.jpg", date: "April 5, 2025", readTime: "7 min" },
    { title: "AI in Email Marketing", excerpt: "Leverage AI for better results.", image: "/images/blog4.jpg", date: "March 15, 2025", readTime: "8 min" }
  ],
  faqs: [
    { question: "What makes your platform unique?", answer: "Our AI-driven tools, intuitive builder, and extensive integrations set us apart." },
    { question: "Is there a free trial?", answer: "Yes, enjoy a 14-day trial with all Pro features, no credit card needed." },
    { question: "How secure is your platform?", answer: "We ensure GDPR, CCPA compliance, and use SPF/DKIM and encryption." },
    { question: "Can I automate campaigns?", answer: "Yes, create advanced workflows for drip campaigns, triggers, and more." },
    { question: "What integrations are available?", answer: "Shopify, Salesforce, HubSpot, WordPress, Slack, and 5000+ via Zapier." },
    { question: "How does AI improve campaigns?", answer: "AI optimizes send times, subject lines, and predicts audience engagement." },
    { question: "Can I migrate from another platform?", answer: "Yes, we offer seamless migration with dedicated support." },
    { question: "What support options are available?", answer: "24/7 email, chat, and phone support for Pro and Enterprise plans." }
  ],
  whyChoose: [
    { icon: <Rocket className="w-8 h-8 text-purple-500" />, title: "Lightning Fast", description: "Send campaigns in seconds with our optimized infrastructure." },
    { icon: <Brain className="w-8 h-8 text-purple-500" />, title: "AI-Driven", description: "Leverage AI for smarter campaigns and better results." },
    { icon: <Users className="w-8 h-8 text-purple-500" />, title: "Customer-Centric", description: "24/7 support to ensure your success." },
    { icon: <Globe className="w-8 h-8 text-purple-500" />, title: "Global Reach", description: "Reach audiences worldwide with localized campaigns." }
  ],
  flowSteps: [
    { step: "Design", description: "Create stunning emails with our visual builder." },
    { step: "Segment", description: "Target audiences with smart segmentation." },
    { step: "Automate", description: "Set up AI-driven workflows." },
    { step: "Send", description: "Schedule with optimal timing." },
    { step: "Analyze", description: "Track performance with real-time analytics." }
  ],
  leadTools: [
    { icon: <Target className="w-8 h-8 text-purple-500" />, title: "Lead Scoring", description: "Prioritize high-value leads with AI-driven scoring." },
    { icon: <Settings className="w-8 h-8 text-purple-500" />, title: "CRM Integration", description: "Sync leads with your CRM for seamless management." },
    { icon: <Brain className="w-8 h-8 text-purple-500" />, title: "AI Insights", description: "Predict lead behavior with advanced analytics." }
  ]
};

// Ripple Button Component
const RippleButton: React.FC<{
  variant: string;
  className: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  ariaLabel: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;  // Add this line
}> = ({ variant, className, children, icon, ariaLabel, onClick }) => {  // Add onClick here
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples([...ripples, { x, y, id: Date.now() }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== Date.now())), 600);
    onClick?.(e);  // Add this line to call the passed onClick handler
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`relative overflow-hidden rounded-lg px-6 py-3 font-semibold flex items-center justify-center ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      aria-label={ariaLabel}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full w-20 h-20 animate-ripple"
          style={{ left: ripple.x - 40, top: ripple.y - 40 }}
        />
      ))}
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsHovered(!isHovered)}
      aria-label={`View details for ${feature.title}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl" />
      <div className="relative flex items-center mb-4">
        <div className="p-3 bg-purple-100/50 dark:bg-purple-900/50 rounded-lg mr-4">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {feature.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 min-h-[80px]">
        {isHovered ? feature.details : feature.description}
      </p>
      <motion.a
        href="#features"
        className="text-purple-500 dark:text-purple-400 flex items-center mt-4"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-hidden={!isHovered}
      >
        Learn More <ArrowRight className="w-4 h-4 ml-1" />
      </motion.a>
    </motion.div>
  );
};

// Integration Card Component
const IntegrationCard: React.FC<{ integration: Integration }> = ({ integration }) => (
  <motion.div
    className="flex flex-col items-center text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4">{integration.logo}</div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {integration.name}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {integration.description}
    </p>
  </motion.div>
);

// Metric Card Component
const MetricCard: React.FC<{ metric: Metric }> = ({ metric }) => (
  <motion.div
    className="bg-gradient-to-br from-purple-50/80 to-indigo-50/80 dark:from-purple-900/50 dark:to-indigo-900/50 backdrop-blur-md rounded-xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-4xl font-bold text-purple-500 dark:text-purple-300 mb-2">
      {metric.value}
    </h3>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {metric.title}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {metric.description}
    </p>
  </motion.div>
);

// Pricing Card Component
const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => (
  <motion.div
    className={`relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border ${plan.highlighted ? 'border-purple-500 shadow-2xl' : 'border-gray-200/50 dark:border-gray-700/50 shadow-lg'}`}
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {plan.highlighted && (
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {plan.name}
    </h3>
    <p className="text-3xl font-bold text-purple-500 dark:text-purple-300 mb-4">
      {plan.price}
    </p>
    <ul className="space-y-3 mb-6">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <RippleButton
      variant={plan.highlighted ? "accent" : "outline"}
      className={plan.highlighted ? "w-full bg-purple-500 text-white hover:bg-purple-600" : "w-full text-purple-500 border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/50"}
      ariaLabel={`Choose ${plan.name} plan`}
    >
      {plan.cta}
    </RippleButton>
  </motion.div>
);

// Blog Post Card Component
const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.div
    className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {post.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {post.excerpt}
      </p>
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </motion.div>
);

// Why Choose Card Component
const WhyChooseCard: React.FC<{ item: WhyChoose }> = ({ item }) => (
  <motion.div
    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg text-center"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-3 bg-purple-100/50 dark:bg-purple-900/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
      {item.icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {item.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {item.description}
    </p>
  </motion.div>
);

// FAQ Accordion Component
const FAQAccordion: React.FC<{ faq: FAQ; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle FAQ: ${faq.question}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ChevronDown className="w-5 h-5 text-purple-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Flowchart Step Component
const FlowchartStep: React.FC<{ step: FlowStep; index: number }> = ({ step, index }) => (
  <motion.div
    className="relative flex items-center"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
  >
    <div className="p-4 bg-purple-100/50 dark:bg-purple-900/50 rounded-full w-12 h-12 flex items-center justify-center mr-4">
      <span className="text-purple-500 font-bold">{index + 1}</span>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        {step.step}
      </h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {step.description}
      </p>
    </div>
    {index < emailMarketingData.flowSteps.length - 1 && (
      <div className="absolute top-1/2 left-full w-8 h-0.5 bg-purple-500/50 dark:bg-purple-400/50 transform -translate-y-1/2" />
    )}
  </motion.div>
);

// Lead Tool Card Component
const LeadToolCard: React.FC<{ tool: LeadTool }> = ({ tool }) => (
  <motion.div
    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="p-3 bg-purple-100/50 dark:bg-purple-900/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
      {tool.icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
      {tool.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {tool.description}
    </p>
  </motion.div>
);

// Main HomePage Component
const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? emailMarketingData.testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === emailMarketingData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <MainLayout>
      <style>
        {`
          @keyframes ripple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(4); opacity: 0; }
          }
          .animate-ripple {
            animation: ripple 0.6s linear;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-indigo-500 text-white overflow-hidden">
        <motion.div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] opacity-10 bg-cover" style={{ y: parallax1 }} />
        <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" style={{ y: parallax2 }} />
        <Container className="min-h-screen flex items-center py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {emailMarketingData.hero.title}
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                {emailMarketingData.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <RippleButton
                  variant="accent"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg shadow-lg"
                  icon={<ArrowRight size={20} />}
                  ariaLabel="Start free trial"
                >
                  {emailMarketingData.hero.cta}
                </RippleButton>
                <RippleButton
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg"
                  ariaLabel="Book a demo"
                >
                  {emailMarketingData.hero.secondaryCta}
                </RippleButton>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl">
                {emailMarketingData.hero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm opacity-80">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-purple-400/20 rounded-full blur-3xl opacity-50" />
              <div className="relative">
                <img
                  src="/images/email-dashboard.png"
                  alt="Email Marketing Dashboard"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </Container>
        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-0 right-0 text-center z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-8 h-8 mx-auto rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-24 bg-gray-50 dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why <span className="text-purple-500 dark:text-purple-400">Choose Us</span>?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Discover why thousands of businesses trust our platform to drive their email marketing success.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailMarketingData.whyChoose.map((item, index) => (
              <WhyChooseCard key={index} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Powerful <span className="text-purple-500 dark:text-purple-400">Features</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Everything you need to create, send, and optimize high-impact email campaigns.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailMarketingData.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* How Email Marketing Works Section */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              How <span className="text-purple-500 dark:text-purple-400">Email Marketing</span> Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              A simple, effective process to engage your audience and drive results.
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-8">
            {emailMarketingData.flowSteps.map((step, index) => (
              <FlowchartStep key={index} step={step} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Success Metrics Section */}
      <section id="metrics" className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Proven <span className="text-purple-500 dark:text-purple-400">Results</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Real-world impact for businesses like yours.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailMarketingData.metrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>
        </Container>
      </section>

      {/* Lead Management & AI Tools Section */}
      <section id="lead-management" className="py-24 bg-gray-50 dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              AI-Powered <span className="text-purple-500 dark:text-purple-400">Lead Management</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Turn leads into customers with intelligent tools designed for growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emailMarketingData.leadTools.map((tool, index) => (
              <LeadToolCard key={index} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Seamless <span className="text-purple-500 dark:text-purple-400">Integrations</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Connect with tools you already use to streamline your workflow.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {emailMarketingData.integrations.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-700 to-indigo-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our <span className="text-indigo-300">Customers</span> Say
            </h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              Hear from businesses thriving with our platform.
            </p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(emailMarketingData.testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6">"{emailMarketingData.testimonials[currentTestimonial].quote}"</p>
                <div>
                  <p className="font-semibold">{emailMarketingData.testimonials[currentTestimonial].author}</p>
                  <p className="text-sm opacity-80">{emailMarketingData.testimonials[currentTestimonial].role}, {emailMarketingData.testimonials[currentTestimonial].company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-6 space-x-4">
              <RippleButton
                variant="outline"
                className="p-2 bg-white/10 hover:bg-white/20"
                ariaLabel="Previous testimonial"
                onClick={handlePrevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </RippleButton>
              <RippleButton
                variant="outline"
                className="p-2 bg-white/10 hover:bg-white/20"
                ariaLabel="Next testimonial"
                onClick={handleNextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </RippleButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Affordable <span className="text-purple-500 dark:text-purple-400">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Choose a plan tailored to your business needs, priced in INR.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emailMarketingData.pricing.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Latest <span className="text-purple-500 dark:text-purple-400">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Explore tips and trends to elevate your email marketing strategy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailMarketingData.blogPosts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <RippleButton
              variant="outline"
              className="text-purple-500 border-purple-500 hover:bg-purple-50/50 dark:hover:bg-purple-900/50"
              ariaLabel="View all blog posts"
            >
              View All Posts
            </RippleButton>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="text-purple-500 dark:text-purple-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Find answers to common queries about our platform.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {emailMarketingData.faqs.map((faq, index) => (
              <FAQAccordion key={index} faq={faq} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your <span className="text-indigo-300">Email Marketing</span>?
            </h2>
            <p className="text-lg mb-8">
              Join thousands of businesses and start your free trial today.
            </p>
            <RippleButton
              variant="accent"
              className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 text-lg shadow-lg"
              icon={<Send size={20} />}
              ariaLabel="Start free trial now"
            >
              Get Started Now
            </RippleButton>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default React.memo(HomePage);