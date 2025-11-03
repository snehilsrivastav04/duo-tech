import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ParallaxProvider, Parallax, useParallax } from 'react-scroll-parallax';
import { Phone, ArrowRight, Mail, ChevronLeft, ShoppingCart, ChevronRight, Check, Zap, Shield, Clock, Users, Headphones, Voicemail, Mic, Menu, MessageSquare, Bell, Calendar, HelpCircle, Database, Globe, PieChart, Star } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Enhanced IVR Service Data with Case Studies
const ivrData = {
  hero: {
    title: 'Transform Your Customer Interactions with Intelligent IVR Solutions',
    subtitle: 'Powerful, scalable, and customizable Interactive Voice Response systems to enhance customer experience and operational efficiency.',
    cta: 'Get Started with IVR',
    demo: 'Schedule Demo',
    video: '/videos/ivr-demo.mp4',
  },
  stats: [
    { value: '90%', label: 'Call Resolution Rate', id: 'stats-resolution' },
    { value: '24/7', label: 'Customer Support', id: 'stats-support' },
    { value: '50%', label: 'Cost Reduction', id: 'stats-cost' },
    { value: '99.9%', label: 'Uptime Guarantee', id: 'stats-uptime' },
  ],
  whyChoose: [
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'High Reliability',
      description: '99.99% uptime with global infrastructure ensures your IVR system is always available.',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30',
      id: 'why-reliability',
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'Secure Communications',
      description: 'End-to-end encryption and compliance with GDPR, HIPAA, PCI DSS, and other standards.',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30',
      id: 'why-security',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'Quick Setup',
      description: 'Get your IVR system up and running in under 15 minutes with our intuitive setup guides.',
      gradient: 'from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-900/30',
      id: 'why-setup',
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      title: 'Enterprise Scalability',
      description: 'Easily scale from small businesses to enterprise-level operations with zero downtime.',
      gradient: 'from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30',
      id: 'why-scalability',
    },
  ],
  features: [
    {
      title: 'Multi-level IVR Menus',
      description: 'Create sophisticated call flows with unlimited menu levels and conditional routing based on caller input, time of day, or caller ID.',
      image: '/images/ivr/multilevel-ivr.jpg',
      icon: <Menu className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        'Reduce call transfers by 60%',
        'Personalized customer journeys',
        'Time-based routing options',
      ],
      id: 'feature-menus',
    },
    {
      title: 'Voice Recognition',
      description: 'Implement natural language processing to understand caller intent without requiring button presses, creating a more natural interaction.',
      image: '/images/ivr/voice-recognition.jpg',
      icon: <Mic className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        '85% accuracy in voice commands',
        'Supports 20+ languages',
        'Continuous learning improves accuracy',
      ],
      id: 'feature-voice',
    },
    {
      title: 'Call Queuing',
      description: 'Manage high call volumes effectively with customizable hold music, position announcements, and estimated wait times.',
      image: '/images/ivr/call-queuing.jpg',
      icon: <Headphones className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        'Reduce abandoned calls by 40%',
        'Callback option available',
        'Priority queuing for VIP customers',
      ],
      id: 'feature-queuing',
    },
    {
      title: 'SMS Integration',
      description: 'Seamlessly transition between voice and text communication, sending follow-up information via SMS after IVR interactions.',
      image: '/images/ivr/sms-integration.jpg',
      icon: <MessageSquare className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        'Increase customer satisfaction by 35%',
        'Two-way SMS conversations',
        'Automated text responses',
      ],
      id: 'feature-sms',
    },
    {
      title: 'Automated Surveys',
      description: 'Gather valuable customer feedback through post-call surveys with real-time analytics and sentiment analysis.',
      image: '/images/ivr/automated-surveys.jpg',
      icon: <PieChart className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        '30% higher response rates',
        'Customizable survey logic',
        'Integration with analytics platforms',
      ],
      id: 'feature-surveys',
    },
    {
      title: 'Payment Processing',
      description: 'Securely accept payments via IVR with PCI-compliant systems that support credit cards, ACH, and digital wallets.',
      image: '/images/ivr/payment-processing.jpg',
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" aria-hidden="true" />,
      benefits: [
        'Reduce payment processing costs',
        'Tokenization for recurring payments',
        'Multi-currency support',
      ],
      id: 'feature-payments',
    },
  ],
  useCases: [
    {
      title: 'Customer Support',
      icon: <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Streamline support with intelligent call routing and self-service options that resolve common issues automatically.',
      features: ['24/7 Automated Support', 'Multi-language IVR', 'CRM Integration', 'Sentiment Analysis'],
      industries: ['Telecom', 'Utilities', 'Financial Services', 'Retail'],
      id: 'use-support',
    },
    {
      title: 'Healthcare',
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Automate appointment management and patient communications with HIPAA-compliant IVR systems.',
      features: ['Appointment Reminders', 'Prescription Refills', 'Patient Surveys', 'Telehealth Scheduling'],
      industries: ['Hospitals', 'Clinics', 'Pharmacies', 'Insurance Providers'],
      id: 'use-healthcare',
    },
    {
      title: 'E-commerce',
      icon: <ShoppingCart className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Enhance order management and customer service with integrated IVR solutions.',
      features: ['Order Tracking', 'Returns Processing', 'Promotional Campaigns', 'Customer Feedback'],
      industries: ['Online Retail', 'Marketplaces', 'Subscription Services', 'Logistics'],
      id: 'use-ecommerce',
    },
    {
      title: 'Banking',
      icon: <Database className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Secure financial transactions and account management through voice authentication.',
      features: ['Balance Checks', 'Fund Transfers', 'Fraud Alerts', 'Loan Applications'],
      industries: ['Retail Banking', 'Credit Unions', 'Investment Firms', 'Fintech'],
      id: 'use-banking',
    },
    {
      title: 'Hospitality',
      icon: <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Improve guest experience with automated reservation management and concierge services.',
      features: ['Room Booking', 'Service Requests', 'Wake-up Calls', 'Local Information'],
      industries: ['Hotels', 'Restaurants', 'Travel Agencies', 'Event Venues'],
      id: 'use-hospitality',
    },
    {
      title: 'Government',
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />,
      description: 'Deliver critical information and services to citizens through accessible IVR systems.',
      features: ['Public Announcements', 'Service Requests', 'Payment Processing', 'Emergency Alerts'],
      industries: ['Municipalities', 'Public Safety', 'Transportation', 'Social Services'],
      id: 'use-government',
    },
  ],
  advancedFeatures: [
    {
      title: 'AI-Powered Call Routing',
      description: 'Our intelligent routing system analyzes caller history and intent to connect them with the most appropriate agent or department.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      benefits: [
        'Reduces misrouted calls by 75%',
        'Learns from historical data',
        'Integrates with CRM systems',
      ],
      id: 'advanced-routing',
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor call center performance with dashboards that update in real-time, showing IVR effectiveness and caller behavior patterns.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      benefits: [
        'Customizable reporting',
        'Identifies IVR bottlenecks',
        'Measures customer satisfaction',
      ],
      id: 'advanced-analytics',
    },
    {
      title: 'Omnichannel Integration',
      description: 'Connect your IVR with other communication channels for seamless transitions between voice, chat, email, and social media.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      benefits: [
        'Unified customer journey',
        'Context preservation across channels',
        'Increased first-contact resolution',
      ],
      id: 'advanced-omnichannel',
    },
    {
      title: 'Disaster Recovery',
      description: 'Automatic failover systems ensure your IVR remains operational during outages or high-traffic events.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      benefits: [
        'Geographically redundant systems',
        'Automatic traffic rerouting',
        'Minimal service interruption',
      ],
      id: 'advanced-recovery',
    },
  ],
  flowchart: {
    title: 'How Our IVR Service Works',
    steps: [
      {
        step: '1. Call Initiation',
        description: 'Customer dials your dedicated number or receives an automated outbound call from your system.',
        id: 'flow-initiation',
      },
      {
        step: '2. Authentication',
        description: 'Optional secure authentication via PIN, voice recognition, or two-factor authentication.',
        id: 'flow-authentication',
      },
      {
        step: '3. Intelligent Routing',
        description: 'Our AI analyzes the call purpose and routes to the appropriate menu or agent based on business rules.',
        id: 'flow-routing',
      },
      {
        step: '4. Self-Service',
        description: 'Callers complete transactions or get information through automated systems without agent assistance.',
        id: 'flow-self-service',
      },
      {
        step: '5. Seamless Transfer',
        description: 'When needed, calls are transferred to live agents with full context of the IVR interaction.',
        id: 'flow-transfer',
      },
      {
        step: '6. Post-Call Actions',
        description: 'Automated follow-ups, surveys, or information sent via SMS/email based on call outcome.',
        id: 'flow-postcall',
      },
    ],
  },
  testimonials: [
    {
      quote: 'Implementing this IVR reduced our call center costs by 40% while improving customer satisfaction scores. The ROI was evident within the first quarter.',
      author: 'Sarah Johnson',
      role: 'Customer Service Director, FinTech Corp',
      avatar: '/images/avatars/sarah-johnson.jpg',
      id: 'testimonial-sarah',
    },
    {
      quote: 'The natural language processing understands our customers better than our previous system. We\'ve seen a 30% reduction in misrouted calls.',
      author: 'Michael Chen',
      role: 'IT Manager, HealthPlus',
      avatar: '/images/avatars/michael-chen.jpg',
      id: 'testimonial-michael',
    },
    {
      quote: 'Setting up holiday hours and special menus is so intuitive. What used to take our team days now takes minutes with this IVR platform.',
      author: 'David Rodriguez',
      role: 'Operations Lead, RetailChain',
      avatar: '/images/avatars/david-rodriguez.jpg',
      id: 'testimonial-david',
    },
  ],
  caseStudies: [
    {
      id: 'case-retail',
      title: 'Global Retail Chain',
      industry: 'Retail',
      challenge: 'High call volume with long wait times',
      solution: 'Implemented multi-level IVR with AI routing',
      results: [
        '40% reduction in wait times',
        '25% increase in customer satisfaction',
        '30% decrease in operational costs',
      ],
      logo: '/images/case-studies/retail-logo.png',
      quote: 'The IVR system transformed our customer service operations.',
      author: 'Jane Smith, Retail Operations Manager',
    },
    {
      id: 'case-healthcare',
      title: 'Regional Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Complex appointment scheduling process',
      solution: 'HIPAA-compliant IVR with voice recognition',
      results: [
        '50% faster appointment booking',
        '20% increase in patient satisfaction',
        'Automated reminder system reduced no-shows by 35%',
      ],
      logo: '/images/case-studies/healthcare-logo.png',
      quote: 'Patients love the seamless booking experience.',
      author: 'Dr. Michael Lee, Clinic Director',
    },
    {
      id: 'case-banking',
      title: 'National Bank',
      industry: 'Banking',
      challenge: 'Secure transaction processing over phone',
      solution: 'PCI-compliant IVR with voice authentication',
      results: [
        '60% faster transaction processing',
        'Enhanced security with voice biometrics',
        '45% reduction in fraud attempts',
      ],
      logo: '/images/case-studies/bank-logo.png',
      quote: 'Our customers feel safer with the new IVR system.',
      author: 'Emma Brown, Banking Operations Head',
    },
  ],
};

// Interfaces
interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface WhyChoose {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

interface UseCase {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  industries: string[];
}

interface FlowchartStep {
  id: string;
  step: string;
  description: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  quote: string;
  author: string;
}

// Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center" role="alert">
            <p className="text-xl text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

// Pinned Image Component with Optimized Parallax
const PinnedImage: React.FC<{ features: Feature[]; activeIndex: number }> = ({ features, activeIndex }) => {
  const { ref } = useParallax({ speed: -10 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="sticky top-20 h-[600px] rounded-2xl overflow-hidden shadow-xl lg:block hidden" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start mb-4"
            >
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg mr-4">
                {features[activeIndex].icon}
              </div>
              <h3 className="text-2xl font-bold">{features[activeIndex].title}</h3>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="space-y-2"
            >
              {features[activeIndex].benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  className="flex items-start"
                >
                  <Check className="w-5 h-5 text-green-400 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Why Choose Card Component
const WhyChooseCard: React.FC<{ whyChoose: WhyChoose }> = ({ whyChoose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl bg-gradient-to-br ${whyChoose.gradient} shadow-md hover:shadow-lg transition-all`}
      role="region"
      aria-labelledby={whyChoose.id}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-white/50 dark:bg-blue-800/50 rounded-lg mr-3 shadow-sm">
          {whyChoose.icon}
        </div>
        <h3 id={whyChoose.id} className="text-xl font-bold text-gray-900 dark:text-white">{whyChoose.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{whyChoose.description}</p>
    </motion.div>
  );
};

// Use Case Card Component
const UseCaseCard: React.FC<{ useCase: UseCase }> = ({ useCase }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
      role="region"
      aria-labelledby={useCase.id}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4 shadow-sm">
          {useCase.icon}
        </div>
        <h3 id={useCase.id} className="text-xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{useCase.description}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
        <ul className="space-y-2">
          {useCase.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Ideal For:</h4>
        <div className="flex flex-wrap gap-2">
          {useCase.industries.map((industry, i) => (
            <span key={i} className="px-3 py-1 bg-blue-100/50 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              {industry}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Flowchart Component with Enhanced Animation
const Flowchart: React.FC<{ steps: FlowchartStep[] }> = ({ steps }) => {
  return (
    <div className="relative" role="list">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/30 to-blue-600 dark:from-blue-400/30 dark:to-blue-400" aria-hidden="true" />
      {steps.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1 }}
          className="flex items-start mb-12 last:mb-0 group"
          role="listitem"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-bold text-lg mr-4 shadow-lg group-hover:scale-110 transition-transform">
            {step.step.split('.')[0]}
          </div>
          <div className="pt-1">
            <h3 id={step.id} className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.step}</h3>
            <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Testimonial Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm"
      role="region"
      aria-labelledby={testimonial.id}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.author}'s avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          loading="lazy"
        />
        <div>
          <h4 id={testimonial.id} className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
      <div className="flex space-x-1" aria-label="5 star rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" aria-hidden="true" />
        ))}
      </div>
    </motion.div>
  );
};

// Case Study Component
const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
      role="region"
      aria-labelledby={caseStudy.id}
    >
      <div className="flex items-center mb-4">
        <img
          src={caseStudy.logo}
          alt={`${caseStudy.title} logo`}
          className="w-12 h-12 object-contain mr-4"
          loading="lazy"
        />
        <h3 id={caseStudy.id} className="text-xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Industry:</strong> {caseStudy.industry}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Challenge:</strong> {caseStudy.challenge}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Solution:</strong> {caseStudy.solution}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Results:</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, i) => (
            <li key={i} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-700 dark:text-gray-300">{result}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{caseStudy.quote}"</p>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.author}</p>
    </motion.div>
  );
};

// Main IVRServicePage Component
const IVRServicePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted email:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  }, [email]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px' }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          {/* Hero Section with Enhanced Parallax */}
          <section className="relative min-h-[800px] bg-gradient-to-b from-blue-900 to-blue-700" aria-labelledby="hero-title">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:60px_60px] opacity-10" aria-hidden="true" />
            <Parallax
              style={{ height: '800px' }}
              layers={[
                {
                  speed: -20,
                  children: (
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
                      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob" />
                    </div>
                  ),
                },
                {
                  speed: -10,
                  expanded: false,
                  children: (
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/ivr/hero-poster.jpg"
                      aria-hidden="true"
                    >
                      <source src={ivrData.hero.video} type="video/mp4" />
                    </video>
                  ),
                },
              ]}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Container className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white max-w-4xl px-4 mx-auto"
                  >
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' }}
                      className="inline-block mb-8"
                    >
                      <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                        ENTERPRISE-GRADE IVR SOLUTIONS
                      </div>
                    </motion.div>
                    <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="block"
                      >
                        Intelligent Voice
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="block text-cyan-300"
                      >
                        Response Systems
                      </motion.span>
                    </h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-12"
                    >
                      {ivrData.hero.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="flex flex-wrap justify-center gap-4"
                    >
                      <Button
                        variant="accent"
                        size="lg"
                        className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-8 sm:px-12 shadow-lg hover:shadow-cyan-500/20 transition-all"
                        icon={<ArrowRight size={20} />}
                        onClick={() => window.location.href = '/contact'}
                        aria-label="Get Started with IVR"
                      >
                        {ivrData.hero.cta}
                      </Button>
                      <Button
                        variant="ghost"
                        size="lg"
                        className="text-white border-white/30 hover:bg-white/10 px-8 sm:px-12 shadow-lg hover:shadow-white/10 transition-all"
                        onClick={() => window.location.href = '/demo'}
                        aria-label="Schedule a Demo"
                      >
                        {ivrData.hero.demo}
                      </Button>
                    </motion.div>
                  </motion.div>
                </Container>
              </div>
            </Parallax>
            {/* ... rest of the section ... */}
          </section>

          {/* Stats Section */}
          <section id="stats" className="py-16 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="stats-title">
            <Container>
              <h2 id="stats-title" className="sr-only">IVR Service Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {ivrData.stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                    role="region"
                    aria-labelledby={stat.id}
                  >
                    <div id={stat.id} className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Why Choose IVR Section */}
          <section id="why-choose" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="why-choose-title">
            <motion.div
              initial={{ y: 0, x: -100 }}
              animate={{ y: -40, x: 100 }}
              transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring' }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg">
                    WHY CHOOSE US
                  </div>
                </motion.div>
                <h2 id="why-choose-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Our <span className="text-blue-600 dark:text-blue-400">IVR Service</span> Stands Out
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Discover the benefits of our cutting-edge IVR solutions designed for modern businesses.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ivrData.whyChoose.map((item) => (
                  <WhyChooseCard key={item.id} whyChoose={item} />
                ))}
              </div>
            </Container>
          </section>

          {/* IVR Features Section with Pinned Image */}
          <section id="features" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="features-title">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" aria-hidden="true" />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="features-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Advanced IVR <span className="text-blue-600 dark:text-blue-400">Features</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Comprehensive features to streamline your customer interactions and reduce operational costs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  {ivrData.features.map((feature, i) => (
                    <motion.div
                      key={feature.id}
                      ref={(el) => (featureRefs.current[i] = el)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ delay: i * 0.1 }}
                      className="mb-16 last:mb-0 group"
                      role="region"
                      aria-labelledby={feature.id}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4 shadow-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-700 transition-colors">
                          {feature.icon}
                        </div>
                        <h3 id={feature.id} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                <PinnedImage features={ivrData.features} activeIndex={activeIndex} />
              </div>
            </Container>
          </section>

          {/* Advanced Features Section */}
          <section id="advanced-features" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="advanced-features-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="advanced-features-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Enterprise <span className="text-blue-600 dark:text-blue-400">Capabilities</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Powerful features designed for large-scale operations and mission-critical communications.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ivrData.advancedFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-blue-900/50 rounded-xl p-8 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-all"
                    role="region"
                    aria-labelledby={feature.id}
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">{feature.icon}</div>
                      <h3 id={feature.id} className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Use Cases Section */}
          <section id="use-cases" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden" aria-labelledby="use-cases-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="use-cases-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  IVR <span className="text-blue-600 dark:text-blue-400">Use Cases</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Tailored IVR solutions for various industries and business needs.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.useCases.map((useCase) => (
                  <UseCaseCard key={useCase.id} useCase={useCase} />
                ))}
              </div>
            </Container>
          </section>

          {/* Case Studies Section */}
          <section id="case-studies" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="case-studies-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="case-studies-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Success <span className="text-blue-600 dark:text-blue-400">Stories</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Real-world examples of how our IVR solutions drive business success.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ivrData.caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            </Container>
          </section>

          {/* Flowchart Section */}
          <section id="flowchart" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="flowchart-title">
            <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-[size:20px_20px] opacity-10 dark:opacity-5" aria-hidden="true" />
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="flowchart-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  How Our <span className="text-blue-600 dark:text-blue-400">IVR</span> Works
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  A seamless process to deliver exceptional customer experiences.
                </p>
              </motion.div>
              <div className="max-w-2xl mx-auto">
                <Flowchart steps={ivrData.flowchart.steps} />
              </div>
            </Container>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="py-32 bg-gray-50 dark:bg-blue-950/50 relative overflow-hidden" aria-labelledby="testimonials-title">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  Trusted by businesses of all sizes across industries.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ivrData.testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </Container>
          </section>

          {/* CTA Section */}
          <section id="cta" className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden" aria-labelledby="cta-title">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" aria-hidden="true" />
            </div>
            <Container>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center max-w-3xl mx-auto"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    READY TO TRANSFORM YOUR COMMUNICATIONS?
                  </div>
                </motion.div>
                <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
                  Elevate Your <span className="text-cyan-300">Customer Experience</span> Today
                </h2>
                <p className="text-lg sm:text-xl text-blue-200 mb-12">
                  Join thousands of businesses using our IVR solutions to enhance customer satisfaction and reduce costs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-8 sm:px-12 shadow-lg hover:shadow-cyan-500/20 transition-all"
                    icon={<ArrowRight size={20} />}
                    onClick={() => window.location.href = '/contact'}
                    aria-label="Get Started with IVR"
                  >
                    Get Started Now
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10 px-8 sm:px-12 shadow-lg hover:shadow-white/10 transition-all"
                    onClick={() => window.location.href = '/demo'}
                    aria-label="Schedule a Demo"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>

          {/* Newsletter Section */}
          <section id="newsletter" className="py-16 bg-white dark:bg-blue-950 border-t border-gray-200 dark:border-blue-900" aria-labelledby="newsletter-title">
            <Container>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 id="newsletter-title" className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Subscribe to our newsletter for the latest IVR features and industry insights.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" aria-label="Newsletter subscription">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/50 dark:text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-label="Email address"
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                      </Button>
                    </form>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-green-600 dark:text-green-400"
                        role="alert"
                      >
                        Thank you for subscribing!
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" aria-hidden="true" />
                      <div className="absolute inset-4 bg-blue-500/20 rounded-full animate-pulse delay-100" aria-hidden="true" />
                      <div className="absolute inset-8 bg-blue-500/30 rounded-full animate-pulse delay-200" aria-hidden="true" />
                      <div className="absolute inset-12 bg-blue-500/40 rounded-full flex items-center justify-center">
                        <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default IVRServicePage;