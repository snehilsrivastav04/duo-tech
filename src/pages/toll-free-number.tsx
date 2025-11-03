import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { 
  Phone, Check, ArrowRight, Zap, Shield, 
  GitBranch, Server, Users, Clock, Globe,
  BarChart2, Headphones, Settings, Bell, Mail,
  Play, Star, Award, TrendingUp, MapPin,
  Calendar, Video, MessageSquare, PieChart,
  ChevronDown, ChevronUp, HelpCircle, X,
  ShoppingCart
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FeatureComparisonTable from '../components/home/FeatureComparisonTable';
import FAQAccordion from '../components/home/FAQAccordion';
import LogoCarousel from '../components/home/LogoCarousel';

// Images (replace with your actual image paths)
const tollFreeImages = {
  hero: '/images/tollfree-hero.jpg',
  dashboard: '/images/tollfree-dashboard.jpg',
  features: '/images/tollfree-features.jpg',
  workflow: '/images/tollfree-workflow.png',
  integration: '/images/tollfree-integration.jpg',
  customers: '/images/tollfree-customers.jpg',
  analytics: '/images/tollfree-analytics-dash.png',
  support: '/images/tollfree-support-team.jpg',
  mobileApp: '/images/tollfree-mobile-app.png'
};

// Customer logos
const customerLogos = [
  { name: 'TechCorp', logo: '/logos/techcorp.svg' },
  { name: 'Innova', logo: '/logos/innova.svg' },
  { name: 'GlobalSoft', logo: '/logos/globalsoft.svg' },
  { name: 'DataSystems', logo: '/logos/datasystems.svg' },
  { name: 'CloudNine', logo: '/logos/cloudnine.svg' },
  { name: 'MarketLead', logo: '/logos/marketlead.svg' },
  { name: 'ServicePro', logo: '/logos/servicepro.svg' },
  { name: 'RetailGiant', logo: '/logos/retailgiant.svg' }
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp',
    role: 'Customer Service Director',
    content: 'Since implementing their toll-free service, our call volume increased by 42% and customer satisfaction scores are at an all-time high.',
    rating: 5,
    image: '/testimonials/sarah-johnson.jpg'
  },
  {
    name: 'Michael Chen',
    company: 'GlobalSoft',
    role: 'Marketing Director',
    content: 'The call tracking and analytics have been invaluable for our marketing campaigns. We can now directly attribute 28% of our revenue to specific ad channels.',
    rating: 5,
    image: '/testimonials/michael-chen.jpg'
  },
  {
    name: 'Jessica Williams',
    company: 'ServicePro',
    role: 'Operations Manager',
    content: 'Setup was incredibly easy, and their support team helped us customize our IVR to perfectly match our business needs. The ROI was evident within the first month.',
    rating: 4,
    image: '/testimonials/jessica-williams.jpg'
  }
];

// Available toll-free numbers
const availableNumbers = [
  { number: '888-123-4567', price: 49, popularity: 'high' },
  { number: '877-987-6543', price: 39, popularity: 'medium' },
  { number: '866-555-1234', price: 29, popularity: 'low' },
  { number: '855-321-7654', price: 59, popularity: 'high' },
  { number: '844-246-8101', price: 45, popularity: 'medium' },
  { number: '833-999-0000', price: 69, popularity: 'high' }
];

// NumberSelector Component
const NumberSelector: React.FC<{
  numbers: Array<{ number: string; price: number; popularity: string }>;
  selectedNumber: { number: string; price: number; popularity: string };
  onSelectNumber: (number: { number: string; price: number; popularity: string }) => void;
}> = ({ numbers, selectedNumber, onSelectNumber }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {numbers.map((num) => (
        <motion.div
          key={num.number}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
            selectedNumber.number === num.number
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
          }`}
          onClick={() => onSelectNumber(num)}
        >
          <div className="text-lg font-bold text-gray-900 dark:text-white">{num.number}</div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              ${num.price} setup
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              num.popularity === 'high' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                : num.popularity === 'medium'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            }`}>
              {num.popularity}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// PricingCalculator Component
const PricingCalculator: React.FC = () => {
  const [minutes, setMinutes] = useState(1000);
  const [numbers, setNumbers] = useState(1);
  const [recording, setRecording] = useState(false);

  const calculatePrice = () => {
    const basePrice = 29;
    const minutePrice = minutes > 1000 ? (minutes - 1000) * 0.03 : 0;
    const numberPrice = (numbers - 1) * 10;
    const recordingPrice = recording ? 15 : 0;
    return basePrice + minutePrice + numberPrice + recordingPrice;
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-white">Monthly Minutes</label>
        <input
          type="range"
          min="500"
          max="10000"
          step="500"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-white">
          <span>{minutes} min</span>
          <span>{minutes > 1000 ? `$${(minutes - 1000) * 0.03}/mo extra` : 'Included'}</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-white">Number of Toll-Free Numbers</label>
        <select
          value={numbers}
          onChange={(e) => setNumbers(Number(e.target.value))}
          className="w-full p-2 rounded bg-white/10 border border-white/20 text-white"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} number{num > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="recording"
          checked={recording}
          onChange={(e) => setRecording(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="recording" className="text-white">Call Recording Storage (+$15/mo)</label>
      </div>

      <div className="pt-4 border-t border-white/20">
        <div className="flex justify-between items-center text-white">
          <span className="text-lg font-semibold">Estimated Monthly Cost:</span>
          <span className="text-2xl font-bold">${calculatePrice()}/mo</span>
        </div>
      </div>
    </div>
  );
};

// StatsCounter Component
const StatsCounter: React.FC<{
  endValue: number;
  label: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}> = ({ endValue, label, suffix = '', decimals = 0, duration = 2, className = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="text-3xl md:text-4xl font-bold">
        {count.toFixed(decimals)}
        {suffix}
      </div>
      <div className="text-sm md:text-base opacity-80 mt-1">{label}</div>
    </div>
  );
};

// TestimonialCard Component
const TestimonialCard: React.FC<{
  testimonial: {
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
    image: string;
  };
}> = ({ testimonial }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 flex-shrink-0"></div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
    </motion.div>
  );
};

// Data for the page
const tollFreeData = {
  features: [
    {
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Nationwide Coverage',
      description: 'Reach customers across your entire country with a single memorable number',
      details: 'Access to all major area codes with guaranteed availability. No hidden coverage limitations.',
      stats: '99.9% uptime guarantee'
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: '24/7 Customer Support',
      description: 'Professional call handling with customizable IVR and call routing',
      details: 'Multi-level IVR systems, call queuing, intelligent routing based on time, location, or caller history.',
      stats: 'Average answer time: < 18 seconds'
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Advanced Analytics',
      description: 'Detailed call reports and real-time performance metrics',
      details: 'Call source tracking, conversion metrics, peak hour analysis, and custom report generation.',
      stats: '30+ analytics metrics tracked'
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Easy Management',
      description: 'User-friendly portal for complete control over your toll-free service',
      details: 'Drag-and-drop call flow designer, real-time adjustments, team permission controls.',
      stats: 'Setup in under 15 minutes'
    },
    {
      icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Unlimited Call Forks',
      description: 'Route calls to multiple destinations simultaneously or sequentially',
      details: 'Create complex call routing scenarios based on time of day, caller location, or department.',
      stats: 'Up to 10 simultaneous call paths'
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Reliability',
      description: 'Redundant systems and failover protection for business-critical communications',
      details: 'Automatic failover, geographic redundancy, and 99.999% SLA for enterprise plans.',
      stats: '99.999% uptime SLA'
    }
  ],
  benefits: [
    {
      title: 'Professional Image',
      description: 'Establish credibility and trust with a professional toll-free presence',
      stat: '78% of consumers trust businesses with toll-free numbers more'
    },
    {
      title: 'Increased Call Volume',
      description: 'Remove cost barriers for customers to call your business',
      stat: 'Businesses report 30-50% increase in inbound calls'
    },
    {
      title: 'Brand Recognition',
      description: 'Create memorable vanity numbers that reinforce your brand',
      stat: 'Vanity numbers are 60% more memorable than standard numbers'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Provide convenient, cost-free communication for your customers',
      stat: '92% of customers prefer toll-free support lines'
    },
    {
      title: 'Campaign Tracking',
      description: 'Measure marketing ROI with dedicated numbers for each campaign',
      stat: 'Track calls from 25+ marketing channels'
    },
    {
      title: 'Global Expansion',
      description: 'Support international toll-free numbers in 40+ countries',
      stat: 'Available in 40+ countries worldwide'
    }
  ],
  useCases: [
    {
      title: 'Customer Service',
      icon: <Headphones className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Provide exceptional customer support with a dedicated toll-free line',
      features: [
        'Multi-level IVR systems',
        'Call queuing and routing',
        'Call recording for quality assurance',
        'Integration with CRM systems',
        'Customer satisfaction surveys',
        'Callback requests'
      ],
      stats: '35% faster resolution time'
    },
    {
      title: 'Sales & Marketing',
      icon: <BarChart2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Track campaign performance and boost conversions',
      features: [
        'Unique numbers for each campaign',
        'Call tracking and attribution',
        'Real-time call analytics',
        'Integration with marketing tools',
        'Lead scoring based on call behavior',
        'ROI calculation per channel'
      ],
      stats: '28% higher conversion rate'
    },
    {
      title: 'Emergency Services',
      icon: <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Provide immediate assistance with 24/7 availability',
      features: [
        'Priority call routing',
        'Geo-based call distribution',
        'Failover and redundancy',
        'Instant call notifications',
        'Multi-language support',
        'Disaster recovery protocols'
      ],
      stats: 'Answer 99% of calls in under 20 seconds'
    },
    {
      title: 'E-commerce Support',
      icon: <ShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Handle order inquiries and support for online businesses',
      features: [
        'Order status integration',
        'Payment support specialists',
        'Returns and exchanges',
        'Shipping information',
        'Cross-sell opportunities',
        'Customer retention programs'
      ],
      stats: '23% larger average order value'
    }
  ],
  workflowSteps: [
    {
      title: 'Number Selection',
      description: 'Choose from available toll-free numbers or request a custom vanity number',
      icon: '1',
      details: 'Browse our inventory of available numbers or request a custom vanity number that matches your brand. Our number recommendation engine suggests the most effective options.',
      time: '2 minutes',
      image: '/images/number-selection.png'
    },
    {
      title: 'Account Setup',
      description: 'Configure your call handling rules and IVR in our management portal',
      icon: '2',
      details: 'Use our intuitive setup wizard to configure call routing, business hours, holiday schedules, and IVR menus. No technical expertise required.',
      time: '5 minutes',
      image: '/images/account-setup.png'
    },
    {
      title: 'Call Routing',
      description: 'Set up how calls should be distributed to your team or departments',
      icon: '3',
      details: 'Create sophisticated routing rules based on time of day, caller location, department, or agent skills. Set up failover options for after-hours calls.',
      time: '3 minutes',
      image: '/images/call-routing.png'
    },
    {
      title: 'Go Live',
      description: 'Start receiving calls immediately after activation',
      icon: '4',
      details: 'Your number is active immediately after configuration. Test your setup with our simulation tool before going live with customers.',
      time: 'Instant',
      image: '/images/go-live.png'
    },
    {
      title: 'Monitor & Optimize',
      description: 'Use analytics to improve call handling and customer experience',
      icon: '5',
      details: 'Access real-time dashboards and historical reports to identify trends, measure agent performance, and optimize your call handling strategies.',
      time: 'Ongoing',
      image: '/images/monitor-optimize.png'
    }
  ],
  faqs: [
    {
      question: 'What is a toll-free number?',
      answer: 'A toll-free number is a telephone number that enables callers to reach businesses without being charged for the call. The business pays for incoming calls instead. These numbers typically start with prefixes like 800, 888, 877, 866, 855, 844, or 833.'
    },
    {
      question: 'How long does it take to get a toll-free number?',
      answer: 'Most numbers are activated instantly. Vanity number requests may take 1-2 business days for approval and activation. Number porting from another provider typically takes 7-10 business days.'
    },
    {
      question: 'Can I keep my existing toll-free number?',
      answer: 'Yes, we can port your existing toll-free number to our service with minimal downtime. The process typically takes 7-10 business days and we handle all the paperwork and coordination with your previous provider.'
    },
    {
      question: 'What call features are included?',
      answer: 'All plans include call forwarding, IVR, call recording, analytics, and 24/7 support. Advanced features like custom IVR, call queuing, CRM integration, and advanced analytics are available in higher tiers.'
    },
    {
      question: 'How are calls billed?',
      answer: 'You pay only for incoming call minutes with no hidden fees. Rates vary by destination and service tier. We offer per-minute billing with volume discounts, or unlimited monthly plans for high-volume users.'
    },
    {
      question: 'Can I use my toll-free number internationally?',
      answer: 'Yes, we offer international toll-free numbers in over 40 countries. You can manage all your numbers through a single dashboard, with consolidated billing and reporting.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate with all major CRM platforms including Salesforce, HubSpot, and Zoho. We also support integration with helpdesk software, marketing automation platforms, and custom APIs for advanced workflows.'
    },
    {
      question: 'Do you offer vanity number services?',
      answer: 'Yes, we offer custom vanity numbers that spell words relevant to your business (e.g., 1-800-FLOWERS). Our team will help you find available options and handle the special reservation process.'
    }
  ],
  featureComparison: {
    headers: ['Feature', 'Starter', 'Professional', 'Enterprise'],
    rows: [
      ['Monthly Price', '$29', '$79', 'Custom'],
      ['Included Minutes', '1,000/mo', '5,000/mo', 'Unlimited'],
      ['Toll-Free Numbers', '1', '3', 'Unlimited'],
      ['Call Recording', 'Basic (100 hours)', 'Advanced (500 hours)', 'Unlimited'],
      ['IVR Levels', '2', '5', 'Unlimited'],
      ['Simultaneous Calls', '10', '50', '100+'],
      ['Analytics', 'Basic', 'Advanced', 'Custom'],
      ['CRM Integrations', '1 included', '5 included', 'Unlimited'],
      ['Support', 'Email', '24/5 Phone & Email', '24/7 Dedicated Manager'],
      ['SLA Guarantee', '99.9%', '99.95%', '99.999%']
    ]
  },
  stats: [
    { value: 25000, label: 'Active Numbers', suffix: '+' },
    { value: 40, label: 'Countries Supported', suffix: '+' },
    { value: 99.9, label: 'Uptime', suffix: '%', decimal: 1 },
    { value: 12, label: 'Avg. Setup Time', suffix: 'mins' }
  ]
};

const TollFreeNumbersPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const [activeTab, setActiveTab] = useState<'features' | 'benefits' | 'pricing'>('features');
  const [selectedNumber, setSelectedNumber] = useState(availableNumbers[0]);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Particle animation for hero background
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: [null, Math.random() * 100 + 'vw'],
              y: [null, Math.random() * 100 + 'vh'],
              transition: {
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section with Particle Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
          <ParticleBackground />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-950/90 z-0" />
          
          <Container className="relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
                >
                  <Phone className="mr-2" /> PROFESSIONAL TOLL-FREE SERVICE
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Premium <span className="text-cyan-300">Toll-Free Numbers</span> for Business Growth
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  Establish credibility, increase call volume by up to 50%, and provide exceptional customer service with our feature-rich toll-free solutions.
                </p>

                <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h3 className="text-white font-semibold mb-3">Try Our Number Selector</h3>
                  <NumberSelector 
                    numbers={availableNumbers} 
                    selectedNumber={selectedNumber}
                    onSelectNumber={setSelectedNumber}
                  />
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-white">One-time setup: ${selectedNumber.price}</span>
                    <Button
                      variant="primary"
                      size="md"
                      className="bg-cyan-500 hover:bg-cyan-600"
                    >
                      Reserve This Number
                    </Button>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-600 shadow-lg shadow-cyan-500/25"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Your Number Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    onClick={() => setShowVideoModal(true)}
                    icon={<Play className="w-5 h-5" />}
                  >
                    Watch Demo
                  </Button>
                </motion.div>

                <div className="mt-8 flex items-center justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-900" />
                    ))}
                  </div>
                  <p className="ml-3 text-blue-200 text-sm">
                    <span className="font-semibold">1,243 businesses</span> joined last week
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      rotate: [0, 3, 0],
                      y: [0, -15, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl"
                  />
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 p-2 shadow-2xl">
                    <img 
                      src={tollFreeImages.dashboard} 
                      alt="Toll-Free Dashboard" 
                      className="w-full h-auto rounded-lg" 
                    />
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                    >
                      <div className="bg-black/40 rounded-full p-4 cursor-pointer">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    animate={{
                      rotate: [0, -5, 0],
                      y: [0, 15, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 2
                    }}
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
                  />
                </div>
              </motion.div>
            </div>
          </Container>

          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-center"
            >
              <p className="mb-2 text-sm">Scroll to explore</p>
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tollFreeData.stats.map((stat, index) => (
                <StatsCounter
                  key={index}
                  endValue={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  decimals={stat.decimal}
                  duration={2}
                  className="text-white text-center"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Features/Benefits Tabs Section */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02] pointer-events-none" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Your Business Needs <span className="text-blue-600 dark:text-blue-400">Toll-Free Numbers</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Professional communication solutions designed to grow your business and enhance customer experience
              </p>
            </motion.div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 shadow-inner">
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'features'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Key Features
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'benefits'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Business Benefits
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === 'pricing'
                      ? 'bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  Pricing & Plans
                </button>
              </div>
            </div>

            {activeTab === 'features' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tollFreeData.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                      className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg w-fit mb-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {feature.details}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'benefits' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {tollFreeData.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-bold text-xl">
                          {i + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {benefit.description}
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {benefit.stat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <FeatureComparisonTable 
                    headers={tollFreeData.featureComparison.headers}
                    rows={tollFreeData.featureComparison.rows}
                  />
                  <div className="text-center mt-8">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      View Detailed Pricing
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">Pricing Calculator</h3>
                  <PricingCalculator />
                </motion.div>
              </div>
            )}
          </Container>
        </section>

        {/* Use Cases Section with Staggered Animation */}
        <section className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Toll-Free Number <span className="text-blue-600 dark:text-blue-400">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Versatile solutions for businesses of all sizes and industries
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {tollFreeData.useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">
                      {useCase.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {useCase.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-1">
                        {useCase.stats}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Our <span className="text-blue-600 dark:text-blue-400">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Join thousands of satisfied businesses using our toll-free solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <LogoCarousel logos={customerLogos} />
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gray-50 dark:bg-gray-800">
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
                Everything you need to know about our toll-free number service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <FAQAccordion faqs={tollFreeData.faqs} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="mb-6 max-w-2xl mx-auto">
                  Our team is ready to help you find the perfect toll-free solution for your business needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-blue text-blue-600 hover:bg-gray-100"
                    icon={<Headphones className="w-5 h-5" />}
                  >
                    Contact Support
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Live Chat
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Your Toll-Free Number?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of businesses that trust our toll-free service to grow their customer base and improve communication.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue text-blue-600 hover:bg-gray-100 shadow-lg"
                  icon={<Phone className="w-5 h-5" />}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Schedule a Demo
                </Button>
              </div>
              <p className="mt-6 text-blue-100 text-sm">
                No credit card required • Setup in minutes • 30-day money-back guarantee
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setShowVideoModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-4xl aspect-video relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Toll-Free Service Demo Video</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default TollFreeNumbersPage;