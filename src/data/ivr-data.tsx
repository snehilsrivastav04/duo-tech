
import { Zap, Shield, Clock, Users, Menu, Mic, Headphones, MessageSquare, PieChart, ShoppingCart, Phone, Database, Bell, Globe } from 'lucide-react';

// Enhanced IVR Service Data with Case Studies
export const ivrData = {
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
