import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Phone, Check, ArrowRight, ChevronLeft, ChevronRight, 
  Globe, Users, Shield, Server, Clock, Zap, GitBranch,
  Headphones, BarChart2, Mail, MessageSquare, CreditCard,
  MapPin, Voicemail, PhoneForwarded, PhoneIncoming, PhoneOutgoing,
  Star
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import FeatureGrid from '../components/home/FeatureGrid';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FAQAccordion from '../components/home/FAQAccordion';
import TestimonialCarousel from '../components/home/TestimonialCarousel';

// Data for the Virtual Numbers page
const virtualNumbersData = {
  hero: {
    title: 'Virtual Numbers for Modern Business',
    subtitle: 'Establish professional global presence with intelligent communication solutions',
    features: [
      'Global coverage in 100+ countries',
      'Instant activation',
      'No hardware required',
      'Scalable as your business grows'
    ]
  },
  features: [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Presence',
      description: 'Get local numbers in countries where you want to establish a presence with area codes that build trust',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6" />,
      title: 'Smart Call Routing',
      description: 'Route calls based on timezone, language, or department for optimal customer experience',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with global communication standards',
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Advanced Analytics',
      description: 'Real-time call tracking and performance metrics to optimize your operations',
    },
    {
      icon: <Voicemail className="w-6 h-6" />,
      title: 'Voicemail Transcription',
      description: 'Automatically convert voicemails to text and forward to email',
    },
    {
      icon: <PhoneIncoming className="w-6 h-6" />,
      title: 'Call Recording',
      description: 'Record calls for quality assurance, training, and compliance purposes',
    }
  ],
  numberTypes: [
    {
      title: 'Local Numbers',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Numbers with local area codes to establish presence in specific locations',
      features: [
        'Build local trust with area codes',
        'Available in 100+ countries',
        'No geographical restrictions'
      ]
    },
    {
      title: 'Toll-Free Numbers',
      icon: <Phone className="w-8 h-8" />,
      description: 'Numbers that allow customers to call your business for free',
      features: [
        'Increase call volume from customers',
        'Nationwide coverage',
        'Professional image'
      ]
    },
    {
      title: 'International Numbers',
      icon: <Globe className="w-8 h-8" />,
      description: 'Numbers from other countries to support global operations',
      features: [
        'Establish international presence',
        'Reduce customer calling costs',
        'Local language support'
      ]
    }
  ],
  benefits: [
    {
      title: 'Cost Efficiency',
      description: 'Eliminate expensive hardware and reduce international call costs by up to 70%',
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      title: 'Operational Flexibility',
      description: 'Add, remove or change numbers instantly as your business needs evolve',
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: 'Professional Image',
      description: 'Present a local presence even when operating remotely or internationally',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Advanced Features',
      description: 'Access capabilities like IVR, call recording, and analytics not available with traditional lines',
      icon: <Server className="w-8 h-8" />
    }
  ],
  howItWorks: [
    {
      step: '1',
      title: 'Select Your Number',
      description: 'Choose from available local, toll-free, or international numbers in our dashboard',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Configure Settings',
      description: 'Set up call routing rules, business hours, voicemail, and other preferences',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Connect Your Team',
      description: 'Forward calls to existing phones or use our mobile/web applications',
      icon: <Headphones className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Go Live',
      description: 'Start receiving calls immediately with your new professional number',
      icon: <PhoneOutgoing className="w-6 h-6" />
    }
  ],
  industries: [
    {
      title: 'E-commerce',
      description: 'Provide local support numbers for each market you serve',
      features: [
        'Local presence in customer markets',
        'Dedicated numbers for order tracking',
        '24/7 customer support'
      ]
    },
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant communication for patient consultations',
      features: [
        'Secure call recording',
        'Appointment reminders',
        'After-hours answering service'
      ]
    },
    {
      title: 'Real Estate',
      description: 'Track lead sources with unique numbers for each property',
      features: [
        'Local numbers for each listing',
        'Call tracking by property',
        'Automated lead qualification'
      ]
    },
    {
      title: 'Financial Services',
      description: 'Secure communication with clients worldwide',
      features: [
        'Encrypted call recording',
        'Compliance archiving',
        'Multi-factor authentication'
      ]
    }
  ],
  caseStudies: [
    {
      title: 'E-commerce Expansion to Europe',
      challenge: 'Online retailer needed local presence in 5 European countries without physical offices',
      solution: 'Implemented virtual numbers with local area codes and multilingual IVR in each market',
      results: 'Increased customer trust and call conversion rates by 65% while reducing support costs',
      metrics: ['65% increase in conversions', '5 new markets entered', '40% lower support costs'],
      logo: '/logos/ecommerce-expansion.svg'
    },
    {
      title: 'Tech Support Scalability',
      challenge: 'Growing SaaS company needed to scale support operations globally',
      solution: 'Deployed virtual numbers with intelligent routing based on language and timezone',
      results: 'Improved customer satisfaction while reducing support costs by 40%',
      metrics: ['95% customer satisfaction', '24/7 global coverage', '40% cost reduction'],
      logo: '/logos/tech-support.svg'
    },
    {
      title: 'Healthcare Provider Network',
      challenge: 'Medical group needed HIPAA-compliant communication across multiple locations',
      solution: 'Virtual numbers with encrypted call recording and secure messaging',
      results: 'Achieved full compliance while improving patient access to care',
      metrics: ['100% compliance', '30% faster response times', 'Secure patient data'],
      logo: '/logos/healthcare-provider.svg'
    }
  ],
  faqs: [
    {
      question: 'How quickly can I get a virtual number?',
      answer: 'Most numbers are activated instantly. For certain countries requiring verification, activation typically takes 1-2 business days.'
    },
    {
      question: 'Can I port my existing business number?',
      answer: 'Yes, we can port most existing business numbers to our platform. The process typically takes 7-10 business days to complete.'
    },
    {
      question: 'What call features are included?',
      answer: 'All plans include call forwarding, voicemail, business hours settings, and basic analytics. Advanced features like IVR menus, call recording, and CRM integrations are available as add-ons.'
    },
    {
      question: 'How does call quality compare to traditional phones?',
      answer: 'We use Tier-1 carriers with HD voice technology to ensure call quality that meets or exceeds traditional landline quality.'
    },
    {
      question: 'Can I use virtual numbers for SMS?',
      answer: 'Yes, many of our virtual numbers support both voice and SMS capabilities, allowing you to communicate with customers through their preferred channel.'
    },
    {
      question: 'How many devices can receive calls from one virtual number?',
      answer: 'You can route calls to an unlimited number of devices simultaneously, with advanced options for sequential ringing, time-based routing, and more.'
    }
  ],
  testimonials: [
    {
      quote: 'The virtual numbers transformed our international expansion. We established local presence in 8 countries without any physical offices, and our customer response rates improved dramatically.',
      author: 'Sarah Johnson',
      role: 'Director of Operations, Global Retail',
      rating: 5,
    },
    {
      quote: 'As a distributed team, virtual numbers give us the flexibility to work from anywhere while maintaining professional local numbers in all our markets. The call analytics help us optimize our support operations.',
      author: 'Michael Chen',
      role: 'CTO, SaaS Platform',
      rating: 5,
    },
    {
      quote: 'We reduced our communication costs by 60% while improving our customer service metrics. The ability to record and analyze calls has been invaluable for training our team.',
      author: 'Emma Rodriguez',
      role: 'Customer Support Manager',
      rating: 4,
    },
  ],
  stats: [
    {
      value: '100+',
      label: 'Countries',
      description: 'Covered with local and toll-free numbers',
      icon: <Globe className="w-8 h-8" />
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Dedicated assistance whenever you need it',
      icon: <Clock className="w-8 h-8" />
    },
    {
      value: '99.99%',
      label: 'Uptime',
      description: 'Guaranteed reliability for your business',
      icon: <Server className="w-8 h-8" />
    },
    {
      value: 'Instant',
      label: 'Activation',
      description: 'Get numbers working in minutes',
      icon: <Zap className="w-8 h-8" />
    }
  ]
};

// Minimalist Stats Grid Component
const StatsGrid: React.FC<{ stats: any[]; className?: string }> = React.memo(({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ${className ?? ''}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center group"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500">
                <div className="text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
              </div>
            </div>
            <motion.p
              className="text-5xl font-light text-gray-900 dark:text-white mb-3 tracking-tight"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {stat.value}
            </motion.p>
            <p className="text-lg font-normal text-gray-600 dark:text-gray-400 mb-2">
              {stat.label}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {stat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

// Minimalist Number Type Card Component
const NumberTypeCard: React.FC<{ numberType: any }> = ({ numberType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 h-full"
    >
      <div className="flex items-start mb-6">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500 mr-5">
          <div className="text-blue-600 dark:text-blue-400">
            {numberType.icon}
          </div>
        </div>
        <h3 className="text-2xl font-normal text-gray-900 dark:text-white pt-2 tracking-tight">
          {numberType.title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {numberType.description}
      </p>
      <ul className="space-y-4">
        {numberType.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center group/item">
            <div className="w-6 h-6 flex items-center justify-center mr-4">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Minimalist Benefit Card Component
const BenefitCard: React.FC<{ benefit: any }> = ({ benefit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 h-full text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500">
          <div className="text-blue-600 dark:text-blue-400">
            {benefit.icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-4 tracking-tight">
        {benefit.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {benefit.description}
      </p>
    </motion.div>
  );
};

// Minimalist How It Works Step Component
const HowItWorksStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start space-x-8 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 group"
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 flex items-center justify-center transition-colors duration-500">
        <span className="text-2xl font-light text-blue-600 dark:text-blue-400">{step.step}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-blue-600 dark:text-blue-400">
            {step.icon}
          </div>
          <h3 className="text-xl font-normal text-gray-900 dark:text-white tracking-tight">
            {step.title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

// Minimalist Industry Use Card Component
const IndustryUseCard: React.FC<{ industry: any }> = ({ industry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 h-full"
    >
      <h3 className="text-xl font-normal text-gray-900 dark:text-white mb-4 tracking-tight">
        {industry.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {industry.description}
      </p>
      <ul className="space-y-4">
        {industry.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-center group/item">
            <div className="w-6 h-6 flex items-center justify-center mr-4">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover/item:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors duration-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Virtual Numbers Page Component
const VirtualNumbersPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section - Minimalist Design */}
        <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#0000_74%,#0ea5e9_75%,#0000_76%,#0000_89%,#0ea5e9_90%)] bg-[size:100px_100px]" />
          </div>
          
          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 40 - 20],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute rounded-full bg-blue-600/5 dark:bg-blue-400/5 ${
                i % 4 === 0 ? 'w-24 h-24' : i % 3 === 0 ? 'w-16 h-16' : i % 2 === 0 ? 'w-12 h-12' : 'w-8 h-8'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}

          <Container className="h-full flex items-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:pr-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center mb-8 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/30"
                >
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide">
                    Virtual Numbers Solution
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
                  {virtualNumbersData.hero.title.split(' ').map((word, i) => (
                    <span key={i} className={i === virtualNumbersData.hero.title.split(' ').length - 1 ? "font-normal text-blue-600 dark:text-blue-400" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl">
                  {virtualNumbersData.hero.subtitle}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-16">
                  {virtualNumbersData.hero.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-400 group"
                    >
                      <div className="w-6 h-6 flex items-center justify-center mr-4">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-normal text-base transition-all duration-300"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Your Number Now
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg font-normal text-base transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Dashboard Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md">
                  {/* Main dashboard container */}
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Virtual Numbers</div>
                    </div>

                    {/* Numbers List */}
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-normal text-gray-900 dark:text-white mb-4">Your Numbers</h3>
                      {[
                        { country: 'United States', number: '+1 (415) 555-0199', type: 'Local' },
                        { country: 'United Kingdom', number: '+44 20 7946 0958', type: 'Toll-Free' },
                        { country: 'Germany', number: '+49 30 5678 9101', type: 'Local' }
                      ].map((num, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <div>
                            <p className="text-gray-900 dark:text-white font-normal">{num.country}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{num.number}</p>
                          </div>
                          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                            {num.type}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Calls</p>
                        <p className="text-2xl font-light text-gray-900 dark:text-white">1,248</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Avg. Duration</p>
                        <p className="text-2xl font-light text-gray-900 dark:text-white">4:32</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-600/5 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Key Features
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Powerful <span className="font-normal text-blue-600 dark:text-blue-400">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Everything you need to establish and manage professional business communications globally
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {virtualNumbersData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-500 h-full"
                >
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-500 mr-5">
                      <div className="text-blue-600 dark:text-blue-400">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-normal text-gray-900 dark:text-white pt-1 tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-28"
            >
              <StatsGrid stats={virtualNumbersData.stats} />
            </motion.div>
          </Container>
        </section>

        {/* Number Types Section */}
        <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Number Types
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Choose Your <span className="font-normal text-blue-600 dark:text-blue-400">Number Type</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Select the right virtual number solution for your specific business needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {virtualNumbersData.numberTypes.map((numberType, i) => (
                <NumberTypeCard key={i} numberType={numberType} />
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Benefits
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Strategic <span className="font-normal text-blue-600 dark:text-blue-400">Advantages</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Why businesses choose our virtual number solutions for their communication needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {virtualNumbersData.benefits.map((benefit, i) => (
                <BenefitCard key={i} benefit={benefit} />
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Process
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                How It <span className="font-normal text-blue-600 dark:text-blue-400">Works</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Get started with professional business numbers in just a few simple steps
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {virtualNumbersData.howItWorks.map((step, i) => (
                <HowItWorksStep key={i} step={step} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 text-center"
            >
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-normal text-base transition-all duration-300"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Now
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Industry Applications Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Applications
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Industry <span className="font-normal text-blue-600 dark:text-blue-400">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                How different industries leverage virtual numbers for business growth and efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {virtualNumbersData.industries.map((industry, i) => (
                <IndustryUseCard key={i} industry={industry} />
              ))}
            </div>
          </Container>
        </section>

        {/* Case Studies Section */}
        <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Success Stories
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Client <span className="font-normal text-blue-600 dark:text-blue-400">Case Studies</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                See how businesses are transforming their communications with our virtual number solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {virtualNumbersData.caseStudies.map((caseStudy, i) => (
                <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Testimonials
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Client <span className="font-normal text-blue-600 dark:text-blue-400">Feedback</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Hear from businesses that have transformed their communications with our solutions
              </p>
            </motion.div>

            <TestimonialCarousel testimonials={virtualNumbersData.testimonials} />
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-28 bg-white dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  FAQ
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                Common <span className="font-normal text-blue-600 dark:text-blue-400">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Answers to frequently asked questions about our virtual number solutions
              </p>
            </motion.div>

            <FAQAccordion faqs={virtualNumbersData.faqs} />
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block mb-4">
                <div className="h-px w-16 bg-blue-600 dark:bg-blue-400 mb-3 mx-auto"></div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-light">
                  Get Started
                </h3>
              </div>
              <h2 className="text-5xl font-light text-gray-900 dark:text-white mb-8 tracking-tight">
                Ready to Transform Your <span className="font-normal text-blue-600 dark:text-blue-400">Communications?</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Join thousands of businesses using our virtual numbers to establish global presence and improve customer communications
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-normal text-base transition-all duration-300"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-12 py-4 rounded-lg font-normal text-base transition-all duration-300"
                >
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default VirtualNumbersPage;