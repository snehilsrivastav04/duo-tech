import React, { useState, useRef, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { 
  Phone, PhoneCall,  PhoneIncoming, PhoneOutgoing,
  Users, BarChart2, Zap, Check, Headphones, Cloud, Server,
  ArrowRight, ChevronLeft, ChevronRight, CreditCard, Shield,
  ThumbsUp, Calendar, MessageCircle, FileText, Aperture, Play,
  Mail, MapPin, Clock, Download, Mic, Database, Volume2,
  Star, ArrowLeft, ChevronDown, ChevronUp, HelpCircle, X,
  MessageSquare, Video, File, Image, Map, Bell, Globe,
  Cpu, Workflow, Box, ZapIcon, Sparkles, Target, BarChart3,
  Lightbulb, Rocket, Scale, Wifi, WifiOff, CloudRain, Monitor
} from 'lucide-react';
import { 
  FaPhoneAlt, FaHeadset, FaChartLine, FaCloud, FaUserFriends,
  FaCogs, FaTools, FaMobile, FaDesktop, FaLaptop, FaDatabase,
  FaShieldAlt, FaSync, FaExpand, FaCompress, FaRegClock,
  FaMoneyBillWave, FaRegSmile, FaRegChartBar, FaCog,
  FaRandom, FaRegCheckCircle, FaRegPaperPlane, FaRegStar,
  FaRegComments, FaRegEnvelope, FaRegLightbulb
} from 'react-icons/fa';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useInView } from 'react-intersection-observer';

// Call center brand colors
const callCenterColors = {
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  dark: '#1E40AF',
  light: '#DBEAFE',
  secondary: '#6366F1',
  accent: '#8B5CF6',
  success: '#10B981',
  warning: '#F59E0B',
  gradient: 'linear-gradient(135deg, #2563EB 0%, #6366F1 50%, #8B5CF6 100%)'
};

// Animated Background Elements
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1
          }}
        />
      ))}
      
      {/* Pulse rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 2, 1],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3
          }}
          className="absolute inset-0 m-auto rounded-full border-2 border-white"
          style={{
            width: 100 * (i + 1),
            height: 100 * (i + 1),
          }}
        />
      ))}
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute text-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: Math.random() * 10 + 10
          }}
        >
          {Math.random() > 0.5 ? '●' : '◆'}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Feature Icon Component
const AnimatedFeatureIcon = ({ icon, color = callCenterColors.primary }: { icon: React.ReactNode; color?: string }) => {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute -inset-3 bg-current opacity-10 rounded-xl"
      />
      <motion.div
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute -inset-2 bg-current opacity-5 rounded-lg"
      />
      <div 
        className="relative p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center"
        style={{ color }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

// Interactive Dashboard Mockup Component
const InteractiveDashboardMockup = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [calls, setCalls] = useState([
    { id: 1, caller: "+1 (555) 123-4567", status: "in-progress", duration: "5:12", agent: "Maria R." },
    { id: 2, caller: "+1 (555) 987-6543", status: "on-hold", duration: "2:45", agent: "James W." },
    { id: 3, caller: "+1 (555) 456-7890", status: "ringing", duration: "0:15", agent: "Sarah J." },
    { id: 4, caller: "+1 (555) 234-5678", status: "completed", duration: "3:22", agent: "Robert K." },
  ]);

  const stats = [
    { label: "Active Calls", value: "24", change: "+3", icon: <Phone className="w-4 h-4" /> },
    { label: "Waiting", value: "5", change: "-2", icon: <Clock className="w-4 h-4" /> },
    { label: "Agents Available", value: "12/15", change: "+2", icon: <Users className="w-4 h-4" /> },
    { label: "Avg Wait Time", value: "28s", change: "-5s", icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const metrics = [
    { label: "Calls Today", value: "247", trend: "up" },
    { label: "First Call Resolution", value: "89%", trend: "up" },
    { label: "Customer Satisfaction", value: "4.8/5", trend: "up" },
    { label: "Avg Handle Time", value: "4m 12s", trend: "down" },
  ];

  return (
    <motion.div 
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-md mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Dashboard header with tabs */}
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Call Center Dashboard</h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                <span className="text-xs text-gray-400">Live • 12 agents active</span>
              </div>
            </div>
          </div>
          <div className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">PRO</div>
        </div>
        
        <div className="flex space-x-2 border-b border-gray-700">
          {['dashboard', 'calls', 'agents', 'analytics'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-xs font-medium rounded-t-md transition-colors ${
                activeTab === tab 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 p-4 bg-gray-900">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gray-800 p-3 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-400">{stat.label}</div>
              <div className="text-gray-500">{stat.icon}</div>
            </div>
            <div className="flex items-baseline">
              <div className="text-lg font-bold text-white mr-2">{stat.value}</div>
              <div className="text-xs text-green-400">{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Active calls list */}
      <div className="p-4 bg-gray-900">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-400">Active Calls</div>
          <div className="text-xs text-blue-400">View all</div>
        </div>
        <div className="space-y-2">
          {calls.map((call, i) => (
            <motion.div
              key={call.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 + 0.4 }}
              className="bg-gray-800 p-3 rounded-lg"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="text-white font-medium">{call.caller}</div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  call.status === "in-progress" ? "bg-blue-500/20 text-blue-300" :
                  call.status === "on-hold" ? "bg-yellow-500/20 text-yellow-300" :
                  call.status === "ringing" ? "bg-green-500/20 text-green-300" :
                  "bg-gray-500/20 text-gray-300"
                }`}>
                  {call.status.replace('-', ' ')}
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="text-gray-400">{call.agent}</div>
                <div className="text-gray-400">{call.duration}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Performance metrics */}
      <div className="p-4 bg-gray-800">
        <div className="text-sm font-medium text-gray-400 mb-3">Performance Metrics</div>
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric, i) => (
            <div key={i} className="bg-gray-900 p-3 rounded-lg">
              <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
              <div className="flex items-center">
                <div className="text-white font-bold mr-2">{metric.value}</div>
                <div className={`text-xs ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {metric.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick actions */}
      <div className="p-4 bg-gray-900 flex justify-between border-t border-gray-800">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-blue-500 rounded-lg shadow-lg"
        >
          <PhoneIncoming className="w-5 h-5 text-white" />
        </motion.button>
        <button className="p-3 bg-gray-800 rounded-lg">
          <PhoneOutgoing className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 bg-gray-800 rounded-lg">
          <Users className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 bg-gray-800 rounded-lg">
          <BarChart2 className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {/* Live pulse indicator */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
      />
    </motion.div>
  );
};

// Animated IVR Flow Component
const IVRFlowDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: "Welcome Message", description: "Custom greeting plays for all callers" },
    { title: "Menu Options", description: "Callers select from configured options" },
    { title: "Smart Routing", description: "Calls directed based on selection and rules" },
    { title: "Agent Connect", description: "Caller connected to most appropriate agent" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Interactive IVR Flow</h3>
        <p className="text-gray-600 dark:text-gray-300">Visualize how calls flow through your system</p>
      </div>
      
      <div className="relative h-48">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {steps.map((_, i) => (
            <motion.path
              key={i}
              d={`M ${i * (100/(steps.length-1))} 30, ${(i+1) * (100/(steps.length-1))} 30`}
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
              stroke={i < activeStep ? callCenterColors.primary : "#E5E7EB"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: i < activeStep ? 1 : 0 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            />
          ))}
        </svg>
        
        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={`absolute flex flex-col items-center transition-all ${
              i <= activeStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
            }`}
            style={{ left: `${i * (100/(steps.length-1))}%`, transform: 'translateX(-50%)' }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
          >
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg ${
                i <= activeStep 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}
              animate={{ 
                scale: i === activeStep ? [1, 1.1, 1] : 1,
                boxShadow: i === activeStep ? 
                  `0 0 0 6px ${callCenterColors.primary}20` : 
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              transition={{ duration: 0.5, repeat: i === activeStep ? Infinity : 0 }}
            >
              {i + 1}
            </motion.div>
            <div className="text-center">
              <div className="text-sm font-medium whitespace-nowrap">{step.title}</div>
              <div className="text-xs mt-1 max-w-[120px]">{step.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          Live call progressing through IVR
        </motion.div>
      </div>
    </div>
  );
};

// Pricing Tabs Component
const PricingSection = () => {
  type BillingCycle = 'monthly' | 'annual';
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [activePlan, setActivePlan] = useState('professional');

  const plans: Record<BillingCycle, {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
    saving?: string;
  }[]> = {
    monthly: [
      {
        name: 'Starter',
        price: 'inr 20,000',
        period: 'per agent/month',
        description: 'Perfect for small teams getting started',
        features: ['Up to 5 agents', '1000 call minutes', 'Basic IVR', 'Email support'],
        cta: 'Get Started',
        popular: false
      },
      {
        name: 'Professional',
        price: 'inr 50,000',
        period: 'per agent/month',
        description: 'Ideal for growing businesses',
        features: ['Unlimited agents', '5000 call minutes', 'Advanced IVR', 'Call recording', 'Priority support'],
        cta: 'Try Free for 14 Days',
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'tailored pricing',
        description: 'For large organizations with complex needs',
        features: ['Unlimited everything', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'Premium support'],
        cta: 'Contact Sales',
        popular: false
      }
    ],
    annual: [
      {
        name: 'Starter',
        price: 'inr 20,000',
        period: 'per agent/month',
        description: 'Perfect for small teams getting started',
        features: ['Up to 5 agents', '1000 call minutes', 'Basic IVR', 'Email support'],
        cta: 'Get Started',
        popular: false,
        saving: '17%'
      },
      {
        name: 'Professional',
        price: 'inr 50,000',
        period: 'per agent/month',
        description: 'Ideal for growing businesses',
        features: ['Unlimited agents', '5000 call minutes', 'Advanced IVR', 'Call recording', 'Priority support'],
        cta: 'Try Free for 14 Days',
        popular: true,
        saving: '18%'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: 'tailored pricing',
        description: 'For large organizations with complex needs',
        features: ['Unlimited everything', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'Premium support'],
        cta: 'Contact Sales',
        popular: false
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, Transparent <span className="text-blue-600 dark:text-blue-400">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No hidden fees. Start with a free trial and upgrade when you're ready.
            </p>
          </motion.div>
          
          {/* Billing toggle */}
          <motion.div 
            className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'annual' 
                  ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Annual <span className="text-green-500 ml-1">(Save up to 20%)</span>
            </button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[billingCycle].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20 scale-105' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              onMouseEnter={() => setActivePlan(plan.name.toLowerCase())}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {plan.saving && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    Save {plan.saving}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/agent</span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{plan.period}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-3">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'accent' : 'outline'}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'text-gray-900 dark:text-white'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">All plans include</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {['99.9% Uptime SLA', '24/7 Support', 'No setup fees', 'Free migration', 'Security compliance'].map((item, i) => (
              <div key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                <Check className="w-5 h-5 text-blue-500 mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// Comparison Table Component
const ComparisonTable = () => {
  const features = [
    {
      name: 'Cloud-Based Infrastructure',
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      name: 'Unlimited Calling',
      starter: false,
      professional: '5000 mins',
      enterprise: true
    },
    {
      name: 'IVR System',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Custom'
    },
    {
      name: 'Call Recording',
      starter: false,
      professional: true,
      enterprise: true
    },
    {
      name: 'Real-Time Analytics',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Premium'
    },
    {
      name: 'Integrations',
      starter: '2 included',
      professional: '5 included',
      enterprise: 'Unlimited'
    },
    {
      name: 'Support',
      starter: 'Email',
      professional: 'Priority',
      enterprise: 'Dedicated'
    },
    {
      name: 'SLA Guarantee',
      starter: false,
      professional: '99.9%',
      enterprise: '99.99%'
    }
  ];

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Features</th>
              <th className="text-center py-4 px-6 font-medium text-gray-900 dark:text-white">Starter</th>
              <th className="text-center py-4 px-6 font-medium text-gray-900 dark:text-white">Professional</th>
              <th className="text-center py-4 px-6 font-medium text-gray-900 dark:text-white">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/50' : ''}>
                <td className="py-4 px-6 text-gray-900 dark:text-white">{feature.name}</td>
                <td className="py-4 px-6 text-center">
                  {feature.starter === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : feature.starter ? (
                    <span className="text-gray-700 dark:text-gray-300">{feature.starter}</span>
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.professional === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : feature.professional ? (
                    <span className="text-gray-700 dark:text-gray-300">{feature.professional}</span>
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {feature.enterprise === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : feature.enterprise ? (
                    <span className="text-gray-700 dark:text-gray-300">{feature.enterprise}</span>
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Enhanced with more data and features
const callCenterData = {
  hero: {
    title: 'Cloud-Based Hosted Call Centre Solution',
    subtitle: 'Zero hardware dependency with scalable, secure, and fully customizable operations',
    cta: 'Start Free Trial',
    secondaryCta: 'Schedule Demo',
    highlights: [
      'No setup fees',
      '24/7 support',
      '99.9% uptime SLA',
      'Enterprise-grade security'
    ]
  },
  features: [
    {
      icon: <FaCloud className="w-10 h-10" />,
      title: 'Cloud-Hosted Platform',
      description: 'No physical servers or costly hardware required. Deploy instantly from anywhere with our secure cloud infrastructure.',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30',
      mockup: <InteractiveDashboardMockup />
    },
    {
      icon: <PhoneIncoming className="w-10 h-10" />,
      title: 'Inbound & Outbound Calling',
      description: 'Manage customer queries and run outbound campaigns seamlessly from one platform with advanced call routing.',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30',
      mockup: <IVRFlowDemo />
    },
    {
      icon: <Volume2 className="w-10 h-10" />,
      title: 'IVR System',
      description: 'Multi-level IVR with welcome messages and smart routing to appropriate agents or departments.',
      gradient: 'from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30',
      mockup: <div>IVR Visual Demo</div>
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Live Agent Transfer',
      description: 'Instantly transfer calls to the right agent or department with full context and call history.',
      gradient: 'from-amber-100 to-amber-50 dark:from-amber-900/50 dark:to-amber-900/30',
      mockup: <div>Agent Transfer UI</div>
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboards with live metrics, agent performance, and customer satisfaction tracking.',
      gradient: 'from-rose-100 to-rose-50 dark:from-rose-900/50 dark:to-rose-900/30',
      mockup: <div>Analytics Dashboard</div>
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, SOC 2 compliance, and enterprise-grade security measures for your data.',
      gradient: 'from-indigo-100 to-indigo-50 dark:from-indigo-900/50 dark:to-indigo-900/30',
      mockup: <div>Security Features</div>
    }
  ],
  allFeatures: [
    {
      category: 'Call Management',
      features: [
        'Inbound & Outbound Calling',
        'IVR (Interactive Voice Response)',
        'Live Agent Transfer',
        'Call Flow Control',
        'Custom Hold Music & Announcements',
        'Auto Dialer & Predictive Dialer',
        'Call Recording & Monitoring',
        'Call Queuing & Routing',
        'Voicemail Detection & Routing',
        'Call Conferencing'
      ],
      icon: <PhoneCall className="w-8 h-8 text-blue-500" />
    },
    {
      category: 'Analytics & Reporting',
      features: [
        'Live Dashboard & Analytics',
        'Real-time Performance Tracking',
        'Call Volume Reports',
        'Agent Performance Metrics',
        'Custom Report Builder',
        'Historical Data Analysis',
        'Export to CSV/Excel',
        'Custom KPI Tracking',
        'Speech Analytics',
        'Customer Satisfaction Metrics'
      ],
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />
    },
    {
      category: 'Administration',
      features: [
        'Scalable User Access',
        'Role-based Permissions',
        'Multi-channel Integration',
        'CRM Integrations',
        'API Access',
        'Data Security & Privacy',
        'End-to-end Encryption',
        'Single Sign-On (SSO)',
        'Customizable Workspaces',
        'Audit Logs & Compliance'
      ],
      icon: <Server className="w-8 h-8 text-blue-500" />
    }
  ],
  businessBenefits: [
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: 'Cost-Effective',
      description: 'Save on IT infrastructure and maintenance costs with our cloud-based solution',
      stat: '40% Savings'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Anywhere Access',
      description: 'Enable remote or hybrid call center teams with full functionality from any location',
      stat: '100% Remote'
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-blue-500" />,
      title: 'Higher Productivity',
      description: 'Automated dialers and real-time analytics boost agent efficiency and performance',
      stat: '60% Faster'
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-500" />,
      title: 'Scalable & Flexible',
      description: 'Adapt quickly as your business grows or changes with our elastic infrastructure',
      stat: 'Unlimited Scale'
    }
  ],
  industries: [
    {
      name: 'Customer Service',
      icon: <Headphones className="w-6 h-6 text-blue-500" />,
      useCases: ['24/7 support', 'Issue resolution', 'Customer satisfaction', 'Multi-channel support'],
      stats: '45% faster resolution',
      image: '/images/customer-service.jpg',
      backContent: 'Customer service centers reduce wait times by 60% and improve first-call resolution with intelligent call routing and agent tools. Our solution integrates with your CRM to provide agents with full customer context.',
      mockup: '/images/mockups/customer-service-mockup.png'
    },
    {
      name: 'Sales',
      icon: <PhoneOutgoing className="w-6 h-6 text-blue-500" />,
      useCases: ['Lead generation', 'Appointment setting', 'Sales conversions', 'Customer follow-up'],
      stats: '35% more conversions',
      image: '/images/sales.jpg',
      backContent: 'Sales teams increase conversion rates with predictive dialing, call scripting, and seamless CRM integration for better lead management. Track performance with real-time analytics and coaching tools.',
      mockup: '/images/mockups/sales-mockup.png'
    },
    {
      name: 'Healthcare',
      icon: <Monitor className="w-6 h-6 text-blue-500" />,
      useCases: ['Appointment reminders', 'Patient follow-ups', 'Telehealth services', 'Prescription updates'],
      stats: '70% fewer no-shows',
      image: '/images/healthcare.jpg',
      backContent: 'Healthcare providers improve patient engagement with automated reminders, reduce no-shows, and enable telehealth consultations. HIPAA-compliant with secure messaging and data protection.',
      mockup: '/images/mockups/healthcare-mockup.png'
    },
    {
      name: 'Education',
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      useCases: ['Student inquiries', 'Parent communication', 'Emergency alerts', 'Admissions support'],
      stats: '60% faster communication',
      image: '/images/education.jpg',
      backContent: 'Educational institutions streamline communication with parents and students through automated messaging and efficient call handling. Send updates, reminders, and emergency notifications instantly.',
      mockup: '/images/mockups/education-mockup.png'
    },
    {
      name: 'Real Estate',
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      useCases: ['Lead response', 'Property inquiries', 'Appointment scheduling', 'Client follow-up'],
      stats: '50% more leads',
      image: '/images/real-estate.jpg',
      backContent: 'Real estate agencies capture more leads with instant response systems and automated follow-ups. Integrate with property databases to provide immediate information to potential buyers.',
      mockup: '/images/mockups/real-estate-mockup.png'
    },
    {
      name: 'Financial Services',
      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
      useCases: ['Customer support', 'Account inquiries', 'Fraud alerts', 'Payment reminders'],
      stats: '80% faster resolution',
      image: '/images/finance.jpg',
      backContent: 'Banks and financial institutions provide secure customer support with identity verification and transaction details. PCI compliant with advanced security measures for sensitive financial data.',
      mockup: '/images/mockups/finance-mockup.png'
    }
  ],
  testimonials: [
    {
      quote: 'Switching to Duotech\'s hosted call center reduced our setup costs by 65% and improved our customer satisfaction scores dramatically. The analytics alone have been worth the investment.',
      author: 'Michael Chen',
      role: 'Operations Director, TechSupport Inc.',
      rating: 5,
      avatar: '/images/testimonial-1.jpg',
      companyLogo: '/images/logos/techsupport.png',
      stats: ['-65% setup costs', '+40% customer satisfaction', '-30% wait times']
    },
    {
      quote: 'The scalability of this solution allowed us to handle seasonal peaks without any infrastructure changes. A game-changer for our e-commerce business during holiday seasons.',
      author: 'Sarah Johnson',
      role: 'Customer Service Manager, RetailGiant',
      rating: 5,
      avatar: '/images/testimonial-2.jpg',
      companyLogo: '/images/logos/retailgiant.png',
      stats: ['+300% capacity during peaks', '-40% operational costs', '+85% agent efficiency']
    },
    {
      quote: 'Implementation was seamless, and our remote teams were operational within days. The analytics have helped us optimize our call flows and reduce handle times significantly.',
      author: 'David Martinez',
      role: 'IT Director, FinanceCorp',
      rating: 5,
      avatar: '/images/testimonial-3.jpg',
      companyLogo: '/images/logos/financecorp.png',
      stats: ['-55% implementation time', '-25% average handle time', '+90% agent adoption']
    },
    {
      quote: 'The IVR customization options have allowed us to create a truly branded experience for our customers. The reduction in misrouted calls has been remarkable.',
      author: 'Emily Watson',
      role: 'CXO, HealthPlus',
      rating: 5,
      avatar: '/images/testimonial-4.jpg',
      companyLogo: '/images/logos/healthplus.png',
      stats: ['-70% misrouted calls', '+45% first-call resolution', '+4.8/5 customer rating']
    }
  ],
  faqs: [
    {
      question: 'Is there any hardware required?',
      answer: 'No, our solution is completely cloud-based. All you need is an internet connection and devices for your agents (computers and headsets). We provide a web-based softphone that works on any modern browser, or you can use our mobile apps for iOS and Android.'
    },
    {
      question: 'How quickly can we get set up?',
      answer: 'Most customers are operational within 24-48 hours. The setup process involves configuring your call flows, uploading contacts, and training agents. Our onboarding team will guide you through each step and provide extensive documentation and training materials.'
    },
    {
      question: 'Can we use our existing phone numbers?',
      answer: 'Yes, we support number porting from most providers. We can also provide new numbers in various area codes if needed. The porting process typically takes 7-10 business days, but we can set you up with temporary numbers in the meantime.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer flexible per-agent pricing with volume discounts. There are no setup fees or long-term contracts required. You can choose monthly or annual billing, with discounts available for annual commitments. All plans include 24/7 support and our 99.9% uptime SLA.'
    },
    {
      question: 'What about data security?',
      answer: 'We employ enterprise-grade security including encryption, SOC 2 compliance, and regular security audits to protect your data. All calls are encrypted in transit, and we offer additional security features like IP whitelisting, two-factor authentication, and single sign-on (SSO) for enterprise customers.'
    },
    {
      question: 'Can we integrate with our existing CRM?',
      answer: 'Yes, we offer pre-built integrations for popular CRMs like Salesforce, HubSpot, and Zendesk, as well as a robust API for custom integrations. Our integration capabilities include screen pops, click-to-call, and automatic logging of call activities in your CRM.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 support via phone, email, and chat for all customers. Enterprise plans include a dedicated account manager and SLAs for response times. We also offer extensive documentation, video tutorials, and regular training webinars.'
    }
  ],
  integrationSteps: [
    {
      step: 1,
      title: 'Sign Up',
      description: 'Create your account and provide business details',
      image: '/images/integration/signup.png',
      details: ['Create account', 'Select plan', 'Provide business info', 'Verify email']
    },
    {
      step: 2,
      title: 'Configure',
      description: 'Set up your call flows, IVR, and agent permissions',
      image: '/images/integration/configure.png',
      details: ['Design call flows', 'Set up IVR', 'Add agents', 'Configure permissions']
    },
    {
      step: 3,
      title: 'Go Live',
      description: 'Add agents and start taking calls in minutes',
      image: '/images/integration/go-live.png',
      details: ['Train agents', 'Port numbers', 'Test system', 'Go live']
    }
  ]
};

// Animated Counter Component
const Counter = ({ target, duration = 2, suffix, prefix }: { target: number; duration?: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="inline-block">
      {prefix}{new Intl.NumberFormat().format(count)}{suffix}
    </span>
  );
};

// Enhanced with animations and interactions
const FlipCard = ({ industry }: { industry: typeof callCenterData.industries[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="h-80 [perspective:1000px] cursor-pointer group"
      whileHover={{ y: -5 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full rounded-xl shadow-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
              {industry.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {industry.name}
            </h3>
          </div>
          
          <ul className="space-y-2 mb-4">
            {industry.useCases.map((useCase, j) => (
              <motion.li 
                key={j} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: j * 0.1 }}
              >
                <Check className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
              </motion.li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium">{industry.stats}</p>
            </div>
            <motion.div 
              className="text-center text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>View details</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </motion.div>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-10"
            style={{ backgroundImage: `url(${industry.image})` }}
          />
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full p-4">
              <img src={industry.mockup} alt={industry.name} className="w-full h-full object-contain" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {industry.backContent}
            </p>
            <motion.button 
              className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center justify-center mx-auto"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Flip back</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Testimonial Carousel with stats
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const testimonials = callCenterData.testimonials;
  
  const next = () => {
    setCurrent((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prev = () => {
    setCurrent((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden relative h-96">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: i === current ? 1 : 0,
              x: `${(i - current) * 100}%`
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex flex-col items-center text-center`}
          >
            <div className="flex items-center mb-6">
              <img src={testimonial.companyLogo} alt="Company" className="h-8 mr-4 opacity-80" />
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute -top-6 -left-6 opacity-10">
                <FaPhoneAlt className="w-12 h-12 text-blue-500" />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
            
            {/* Stats */}
            {testimonial.stats && (
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {testimonial.stats.map((stat, j) => (
                  <div key={j} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {stat}
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-auto flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-400">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

// Enhanced FAQ with search functionality
const FAQAccordion = ({ faqs }: { faqs: typeof callCenterData.faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search box */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-500"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No FAQs found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

// Integration Process Component
const IntegrationProcess = () => {
  const steps = callCenterData.integrationSteps;
  
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Simple <span className="text-blue-600 dark:text-blue-400">Integration</span> Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Get up and running in just a few steps with our seamless onboarding process
        </p>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-16 bottom-16 w-1 bg-blue-200 dark:bg-blue-900/30 transform -translate-x-1/2"></div>
        
        <div className="space-y-12 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start gap-8`}
            >
              {/* Step number */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold relative z-10">
                  {step.step}
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute -inset-3 bg-blue-500 rounded-full opacity-20"
                />
              </div>
              
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                
                <ul className={`inline-flex flex-col space-y-2 ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-center text-gray-700 dark:text-gray-300">
                      {i % 2 === 0 ? (
                        <>
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span>{detail}</span>
                        </>
                      ) : (
                        <>
                          <span>{detail}</span>
                          <Check className="w-5 h-5 text-green-500 ml-2" />
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button
          variant="accent"
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          icon={<ArrowRight className="w-5 h-5" />}
        >
          Start Your Integration
        </Button>
      </div>
    </div>
  );
};

// Security Features Component
const SecurityFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'End-to-End Encryption',
      description: 'All calls and data are encrypted in transit and at rest with industry-standard protocols.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'SOC 2 Compliance',
      description: 'Our systems are regularly audited to maintain SOC 2 Type II compliance for security and availability.'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Data Residency Options',
      description: 'Choose where your data is stored with multiple geographic regions available for compliance needs.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Access Controls',
      description: 'Role-based permissions, 2FA, and SSO ensure only authorized personnel can access sensitive data.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Audit Logs',
      description: 'Comprehensive logging of all system activities for security monitoring and compliance reporting.'
    },
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Security',
      description: 'Enterprise-grade security measures including DDoS protection, firewalls, and intrusion detection.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise-Grade <span className="text-blue-600 dark:text-blue-400">Security</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your data is protected with industry-leading security measures and compliance certifications
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'SOC 2 Compliant', icon: <Shield className="w-8 h-8 mx-auto text-blue-500" /> },
              { label: 'GDPR Ready', icon: <Globe className="w-8 h-8 mx-auto text-blue-500" /> },
              { label: 'HIPAA Compatible', icon: <FileText className="w-8 h-8 mx-auto text-blue-500" /> },
              { label: 'PCI DSS Level 1', icon: <CreditCard className="w-8 h-8 mx-auto text-blue-500" /> },
            ].map((item, i) => (
              <div key={i}>
                <div className="mb-3">{item.icon}</div>
                <div className="font-medium text-gray-900 dark:text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// Main Call Center Page Component
const HostedCallCenterPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden flex items-center">
          <AnimatedBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          <Container className="relative z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <FaCloud className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Cloud-Based Call Center Solution</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  Hosted <span className="text-blue-300">Call Center</span> Solution
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-xl text-blue-100 mb-8"
                >
                  Zero hardware dependency with scalable, secure, and fully customizable operations. Access from anywhere, anytime.
                </motion.p>
                
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="grid grid-cols-2 gap-3 mb-10"
                >
                  {callCenterData.hero.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-blue-100">
                      <Check className="w-5 h-5 text-green-300 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </motion.ul>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-blue-500/30"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    {callCenterData.hero.cta}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    icon={<Play className="w-5 h-5" />}
                    onClick={() => setVideoModalOpen(true)}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                
                <InteractiveDashboardMockup />
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-5 -left-5 bg-white p-3 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-800">12 agents active</span>
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-5 -right-5 bg-white p-3 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <BarChart2 className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-gray-800">+24% efficiency</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-0 right-0 text-center hidden lg:block"
            >
              <p className="text-blue-200 mb-2">Scroll to explore</p>
              <ArrowRight className="w-6 h-6 mx-auto text-blue-200 rotate-90" />
            </motion.div>
          </Container>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-white dark:bg-gray-800 shadow-sm relative z-20">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 1000, suffix: '+', label: 'Active Customers' },
                { number: 99.9, suffix: '%', label: 'Uptime SLA' },
                { number: 24, suffix: 'h', label: 'Setup Time' },
                { number: 50, suffix: '%', label: 'Cost Reduction' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful <span className="text-blue-600 dark:text-blue-400">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage customer communications efficiently with enterprise-grade capabilities
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {callCenterData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
                >
                  <AnimatedFeatureIcon icon={feature.icon} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Learn More
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* All Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Complete <span className="text-blue-600 dark:text-blue-400">Feature Set</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {callCenterData.allFeatures.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                        {category.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {category.features.map((feature, j) => (
                        <motion.li 
                          key={j} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                        >
                          <Check className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Business <span className="text-blue-600 dark:text-blue-400">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                How our hosted call center solution transforms your customer service operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {callCenterData.businessBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all"
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {benefit.description}
                  </p>
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {benefit.stat}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats Section */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Join <span className="text-blue-600 dark:text-blue-400">1,000+</span> businesses using our platform
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
                  { value: 45, suffix: '%', label: 'Faster Resolution' },
                  { value: 60, suffix: '%', label: 'Cost Reduction' },
                  { value: 85, suffix: '%', label: 'Agent Productivity' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Security Section */}
        <SecurityFeatures />

        {/* Industries Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Industry <span className="text-blue-600 dark:text-blue-400">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for different industries and use cases
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {callCenterData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FlipCard industry={industry} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Integration Process */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <Container>
            <IntegrationProcess />
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our <span className="text-blue-600 dark:text-blue-400">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Trusted by businesses of all sizes across various industries
              </p>
            </motion.div>
            
            <TestimonialCarousel />
          </Container>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Comparison Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <Container>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Plan <span className="text-blue-600 dark:text-blue-400">Comparison</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our plans stack up against each other
                </p>
              </motion.div>
            </div>
            
            <ComparisonTable />
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Everything you need to know about our hosted call center solution
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Still have questions?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Can't find the answer you're looking for?</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Chat with us
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <FAQAccordion faqs={callCenterData.faqs} />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/call-center-pattern.png')] opacity-10" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Call Center?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get started with our cloud-based solution and experience the difference in customer service efficiency.
                </p>
                
                <div className="space-y-4 mb-8">
                  {['No setup fees or long-term contracts', 'Free 14-day trial with full features', '24/7 support during your trial'].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="w-6 h-6 text-blue-300 mr-3" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    icon={<Phone className="w-5 h-5" />}
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Start Your Free Trial
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start Free Trial
                  </Button>
                  
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    No credit card required. Get started in minutes.
                  </p>
                </form>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Video Modal */}
        <AnimatePresence>
          {videoModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setVideoModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                      </div>
                      <p className="text-white font-medium">Call Center Solution Demo</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setVideoModalOpen(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Product Demo</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Watch how our hosted call center solution can transform your customer service operations with powerful features and intuitive interface.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MainLayout>
    </ParallaxProvider>
  );
};

// Helper components
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default HostedCallCenterPage;