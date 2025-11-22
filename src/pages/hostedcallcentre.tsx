import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Phone, PhoneCall, PhoneIncoming, PhoneOutgoing,
  Users, BarChart2, ChevronRight, ChevronLeft, Check, X,
  Play, MessageSquare, Clock, Shield, Cloud, Server,
  ArrowRight, Star, Headphones, CreditCard, Database,
  BarChart3, Cpu, Globe, FileText, Monitor, MapPin,
  Zap, Target, Workflow, Sparkles, Volume2, Mail,
  Video, MessageCircle, Calendar, Download, Mic,
  Wifi, CloudRain, Bell, Aperture, Rocket, Lightbulb
} from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Minimal color palette
const colors = {
  primary: '#1E40AF',
  primaryLight: '#3B82F6',
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  }
};

// Interactive Dashboard Mockup
const DashboardMockup = () => {
  const [activeCalls, setActiveCalls] = useState([
    { id: 1, number: '+1 (555) 123-4567', status: 'active', duration: '5:23', agent: 'Sarah M.' },
    { id: 2, number: '+1 (555) 987-6543', status: 'on-hold', duration: '2:15', agent: 'Mike R.' },
    { id: 3, number: '+1 (555) 456-7890', status: 'ringing', duration: '0:45', agent: 'Waiting...' }
  ]);

  const stats = [
    { label: 'Active Calls', value: '12', trend: '+2' },
    { label: 'Wait Time', value: '28s', trend: '-5s' },
    { label: 'Satisfaction', value: '98%', trend: '+3%' },
    { label: 'Agents', value: '8/10', trend: 'Available' }
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white font-light text-sm">Live Dashboard</span>
        </div>
        <div className="text-gray-400 text-sm">Now</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-light text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
            <div className="text-green-400 text-xs mt-1">{stat.trend}</div>
          </div>
        ))}
      </div>

      {/* Active Calls */}
      <div className="space-y-3">
        <div className="text-gray-400 text-sm font-light">Active Calls</div>
        {activeCalls.map((call) => (
          <div key={call.id} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
            <div>
              <div className="text-white font-light">{call.number}</div>
              <div className="text-gray-400 text-sm">{call.agent}</div>
            </div>
            <div className="text-right">
              <div className={`text-sm ${
                call.status === 'active' ? 'text-green-400' :
                call.status === 'on-hold' ? 'text-yellow-400' : 'text-blue-400'
              }`}>
                {call.status}
              </div>
              <div className="text-gray-400 text-sm">{call.duration}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-3 mt-6">
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-light">
          New Call
        </button>
        <button className="flex-1 bg-gray-700 text-gray-300 py-2 rounded-lg text-sm font-light">
          Transfer
        </button>
      </div>
    </div>
  );
};

// IVR Flow Mockup
const IVRFlowMockup = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Welcome', description: 'Custom greeting plays' },
    { title: 'Menu Options', description: 'Caller makes selection' },
    { title: 'Smart Routing', description: 'Route to best agent' },
    { title: 'Connect', description: 'Call connected' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
      <div className="text-center mb-6">
        <h3 className="text-lg font-light text-gray-900 mb-2">IVR Flow</h3>
        <p className="text-gray-600 text-sm">Interactive Voice Response System</p>
      </div>

      <div className="relative h-32">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 flex flex-col items-center transition-all ${
              index <= activeStep ? 'text-blue-600' : 'text-gray-400'
            }`}
            style={{ left: `${index * (100 / (steps.length - 1))}%`, transform: 'translateX(-50%)' }}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                index <= activeStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}
              animate={{
                scale: index === activeStep ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 0.5, repeat: index === activeStep ? Infinity : 0 }}
            >
              {index + 1}
            </motion.div>
            <div className="text-center">
              <div className="text-sm font-light whitespace-nowrap">{step.title}</div>
              <div className="text-xs text-gray-500 mt-1">{step.description}</div>
            </div>
          </motion.div>
        ))}
        
        {/* Connecting line */}
        <div className="absolute top-4 left-8 right-8 h-0.5 bg-gray-200 transform -translate-y-1/2">
          <motion.div
            className="h-full bg-blue-600"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

// Analytics Mockup
const AnalyticsMockup = () => {
  const metrics = [
    { label: 'Calls Today', value: '247', change: '+12%' },
    { label: 'Avg Wait Time', value: '28s', change: '-5s' },
    { label: 'First Call Resolution', value: '89%', change: '+3%' },
    { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.2' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-light text-gray-900">Performance Analytics</h3>
        <div className="text-blue-600 text-sm">Real-time</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-light text-gray-900 mb-1">{metric.value}</div>
            <div className="text-gray-600 text-sm mb-1">{metric.label}</div>
            <div className="text-green-500 text-xs">{metric.change}</div>
          </div>
        ))}
      </div>

      {/* Simple bar chart */}
      <div className="space-y-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
          <div key={day} className="flex items-center space-x-3">
            <div className="text-gray-600 text-sm w-8">{day}</div>
            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <motion.div
                className="bg-blue-600 rounded-full h-2"
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * 60 + 40}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <div className="text-gray-900 text-sm w-8 text-right">
              {Math.floor(Math.random() * 100) + 50}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Minimal Background Pattern
const SubtleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(#1E40AF 1px, transparent 1px),
            linear-gradient(90deg, #1E40AF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20" />
    </div>
  );
};

// Minimal Feature Card Component
const MinimalFeatureCard = ({ 
  icon, 
  title, 
  description, 
  index,
  mockup
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  mockup?: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className="relative bg-white border border-gray-200 rounded-xl p-8 transition-all duration-500 hover:shadow-lg hover:border-gray-300 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-500 ${
          isHovered ? 'border-blue-200' : ''
        }`} />
        
        <div className="relative z-10">
          <div className="mb-6">
            <div className={`inline-flex p-3 rounded-lg transition-all duration-500 ${
              isHovered ? 'bg-blue-50 text-blue-600 scale-110' : 'bg-gray-50 text-gray-600'
            }`}>
              {icon}
            </div>
          </div>
          
          <h3 className="text-xl font-light text-gray-900 mb-3 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light mb-6">
            {description}
          </p>
          
          {mockup && (
            <div className="mt-6 transform transition-transform duration-500 group-hover:scale-105">
              {mockup}
            </div>
          )}
          
          <motion.div
            initial={false}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
            className="h-px bg-blue-200 mt-4"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Minimal Stats Component
const MinimalStats = () => {
  const stats = [
    { value: '99.9%', label: 'Uptime SLA', suffix: '' },
    { value: '24', label: 'Hour Setup', suffix: 'h' },
    { value: '1000', label: 'Active Customers', suffix: '+' },
    { value: '50', label: 'Cost Reduction', suffix: '%' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-gray-200">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
            {stat.value}<span className="text-blue-600">{stat.suffix}</span>
          </div>
          <div className="text-gray-500 text-sm font-light tracking-wide">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Process Steps with Mockups
const ProcessWithMockups = () => {
  const steps = [
    {
      step: '01',
      title: 'Sign Up & Configure',
      description: 'Set up your account and customize settings',
      mockup: <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
        <div className="space-y-3">
          {['Company Profile', 'Team Members', 'Call Flows', 'Business Hours'].map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    },
    {
      step: '02',
      title: 'Go Live',
      description: 'Start taking calls immediately',
      mockup: <div className="bg-gray-900 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm">System Active</span>
        </div>
        <div className="text-white text-sm">Ready for incoming calls</div>
      </div>
    },
    {
      step: '03',
      title: 'Analyze & Optimize',
      description: 'Monitor performance and improve',
      mockup: <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Performance</span>
          <span className="text-green-500 text-sm">+24%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-blue-600 rounded-full h-2" style={{ width: '85%' }}></div>
        </div>
      </div>
    }
  ];

  return (
    <div className="relative py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full border-2 border-blue-200 bg-white flex items-center justify-center mx-auto mb-6">
              <span className="text-blue-600 font-light text-lg">{step.step}</span>
            </div>
            
            <h3 className="text-xl font-light text-gray-900 mb-3 tracking-tight">
              {step.title}
            </h3>
            <p className="text-gray-600 font-light mb-6">
              {step.description}
            </p>
            
            <div className="transform transition-transform duration-500 hover:scale-105">
              {step.mockup}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Testimonial Carousel
const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote: "The platform's simplicity and power transformed our customer service. Setup took hours, not days.",
      author: "Sarah Chen",
      role: "Customer Experience Director",
      company: "TechFlow Inc",
      stats: ["98% Satisfaction", "40% Faster Resolution", "50% Cost Save"]
    },
    {
      quote: "Our remote team was operational immediately. The analytics helped us optimize call flows significantly.",
      author: "Michael Rodriguez",
      role: "Operations Manager", 
      company: "Global Support Co",
      stats: ["24h Setup", "60% Efficiency Gain", "4.8/5 Rating"]
    },
    {
      quote: "Enterprise features with startup simplicity. The IVR customization reduced misrouted calls by 70%.",
      author: "Emily Watson",
      role: "CTO",
      company: "Innovate Solutions",
      stats: ["70% Fewer Missed", "85% First Call", "99.9% Uptime"]
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-2xl font-light text-gray-900 mb-8 leading-relaxed tracking-tight max-w-2xl mx-auto">
            "{testimonials[activeTestimonial].quote}"
          </div>
          
          <div className="mb-8">
            <div className="text-gray-900 font-light mb-1">
              {testimonials[activeTestimonial].author}
            </div>
            <div className="text-gray-500 text-sm font-light">
              {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-6 mb-8">
            {testimonials[activeTestimonial].stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 font-light text-sm">{stat}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Feature Showcase Section
const FeatureShowcase = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Zero hardware deployment with enterprise-grade security and automatic scaling",
      features: ["Auto-scaling", "99.9% Uptime", "Global CDN", "Encrypted Storage"],
      mockup: <DashboardMockup />
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Intelligent Routing",
      description: "Smart call distribution based on agent skills, availability, and customer history",
      features: ["Skill-based", "Wait Time", "Customer Priority", "Geographic"],
      mockup: <IVRFlowMockup />
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with live metrics and performance insights",
      features: ["Live Monitoring", "Custom Reports", "Agent Performance", "Trend Analysis"],
      mockup: <AnalyticsMockup />
    }
  ];

  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Powerful <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Everything you need to deliver exceptional customer service
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-white border border-blue-200 shadow-lg' 
                    : 'bg-transparent border border-transparent hover:border-gray-200'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg transition-colors duration-300 ${
                    activeFeature === index ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light mb-3">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.features.map((feat, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-sm">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Mockup */}
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            {features[activeFeature].mockup}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

// Industries Grid
const IndustriesGrid = () => {
  const industries = [
    { 
      name: "Customer Service", 
      icon: <Headphones className="w-6 h-6" />,
      description: "24/7 support with intelligent call routing",
      stats: "98% Satisfaction"
    },
    { 
      name: "Sales", 
      icon: <PhoneOutgoing className="w-6 h-6" />,
      description: "Lead management and conversion optimization",
      stats: "35% More Conversions"
    },
    { 
      name: "Healthcare", 
      icon: <Monitor className="w-6 h-6" />,
      description: "HIPAA compliant patient communication",
      stats: "70% Fewer No-shows"
    },
    { 
      name: "Education", 
      icon: <FileText className="w-6 h-6" />,
      description: "Student and parent communication platform",
      stats: "60% Faster Response"
    },
    { 
      name: "Real Estate", 
      icon: <MapPin className="w-6 h-6" />,
      description: "Lead response and client follow-up",
      stats: "50% More Leads"
    },
    { 
      name: "Finance", 
      icon: <CreditCard className="w-6 h-6" />,
      description: "Secure financial customer support",
      stats: "80% Faster Resolution"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Trusted Across <span className="text-blue-600">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Tailored solutions for diverse business needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-blue-600">{industry.icon}</div>
                </div>
                <h3 className="text-lg font-light text-gray-900">{industry.name}</h3>
              </div>
              
              <p className="text-gray-600 font-light mb-4 leading-relaxed">
                {industry.description}
              </p>
              
              <div className="text-blue-600 font-light text-sm">
                {industry.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

// Security Features
const SecurityFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "All calls and data encrypted with military-grade security"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SOC 2 Compliant",
      description: "Regularly audited for security and availability compliance"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Residency",
      description: "Choose where your data is stored for compliance needs"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Access Controls",
      description: "Role-based permissions and multi-factor authentication"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
              Enterprise <span className="text-blue-400">Security</span>
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Your data is protected with industry-leading security measures
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-blue-900/30 rounded-xl mb-4">
                <div className="text-blue-400">{feature.icon}</div>
              </div>
              <h3 className="text-lg font-light mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['SOC 2', 'GDPR', 'HIPAA', 'PCI DSS'].map((badge, index) => (
              <div key={index}>
                <div className="text-blue-400 font-light text-lg mb-2">{badge}</div>
                <div className="text-gray-400 text-sm">Compliant</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

// Main Page Component
const HostedCallCenterPage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const coreFeatures = [
    {
      icon: <PhoneIncoming className="w-6 h-6" />,
      title: "Inbound & Outbound Calls",
      description: "Handle customer queries and run campaigns seamlessly from one platform",
      mockup: <IVRFlowMockup />
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "IVR System",
      description: "Multi-level interactive voice response with smart routing capabilities",
      mockup: <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
        <div className="text-center">
          <Volume2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-green-600 font-light">IVR Active</div>
        </div>
      </div>
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Management",
      description: "Scale your team with role-based permissions and remote capabilities",
      mockup: <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
        <div className="flex justify-center space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">{i}</span>
            </div>
          ))}
        </div>
      </div>
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with live metrics and performance insights",
      mockup: <AnalyticsMockup />
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <SubtleBackground />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 border border-gray-200 rounded-full">
                <Cloud className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600 font-light tracking-wide">Cloud Call Center Solution</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
                Modern
                <br />
                <span className="text-blue-600">Call Center</span>
                <br />
                Solution
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 leading-relaxed tracking-tight">
                Enterprise-grade communication platform designed for simplicity and scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:border-gray-400 px-8 py-4"
                  icon={<Play className="w-5 h-5" />}
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                {['No Credit Card', '14-Day Trial', '24/7 Support'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <DashboardMockup />
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-light text-gray-700">12 calls active</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <BarChart2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-light text-gray-700">98% satisfaction</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm font-light mb-2 tracking-wide">Scroll to explore</span>
            <div className="w-px h-12 bg-gray-300"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <Container>
          <MinimalStats />
        </Container>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                Core <span className="text-blue-600">Features</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Everything you need to deliver exceptional customer service
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <MinimalFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                mockup={feature.mockup}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                Simple <span className="text-blue-600">Process</span>
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Get started in three straightforward steps
              </p>
            </motion.div>
          </div>

          <ProcessWithMockups />
        </Container>
      </section>

      {/* Industries */}
      <IndustriesGrid />

      {/* Security */}
      <SecurityFeatures />

      {/* Testimonials */}
      <section className="bg-white">
        <Container>
          <TestimonialCarousel />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
                Ready to Transform Your Call Center?
              </h2>
              <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                Join thousands of businesses using our platform to deliver exceptional customer service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:border-gray-500 px-8 py-4"
                  icon={<MessageSquare className="w-5 h-5" />}
                >
                  Contact Sales
                </Button>
              </div>

              <div className="mt-8 text-gray-400 text-sm">
                No credit card required • 14-day free trial • Setup in 24 hours
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                  <p className="text-white font-light">Call Center Platform Demo</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light text-gray-900">Platform Overview</h3>
                  <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 font-light">
                  Watch how our call center platform can transform your customer service operations with powerful features and intuitive interface.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default HostedCallCenterPage;