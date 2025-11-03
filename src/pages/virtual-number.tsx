import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Phone, Check, ArrowRight, ChevronLeft, ChevronRight, 
  Globe, Users, Shield, Server, Clock, Zap, GitBranch,
  Headphones, BarChart2, Mail, MessageSquare, CreditCard,
  MapPin, Voicemail, PhoneForwarded, PhoneIncoming, PhoneOutgoing
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
    title: 'Powerful Virtual Numbers for Your Business',
    subtitle: 'Establish a professional presence anywhere in the world without physical offices',
    features: [
      'Global coverage in 100+ countries',
      'Instant activation',
      'No hardware required',
      'Scalable as your business grows'
    ]
  },
  features: [
    {
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Global Presence',
      description: 'Get local numbers in countries where you want to establish a presence with area codes that build trust',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30'
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Smart Call Routing',
      description: 'Route calls based on timezone, language, or department for optimal customer experience',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with global communication standards',
      gradient: 'from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-900/30'
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Advanced Analytics',
      description: 'Real-time call tracking and performance metrics to optimize your operations',
      gradient: 'from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30'
    },
    {
      icon: <Voicemail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Voicemail Transcription',
      description: 'Automatically convert voicemails to text and forward to email',
      gradient: 'from-orange-100 to-orange-50 dark:from-orange-900/50 dark:to-orange-900/30'
    },
    {
      icon: <PhoneIncoming className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Call Recording',
      description: 'Record calls for quality assurance, training, and compliance purposes',
      gradient: 'from-pink-100 to-pink-50 dark:from-pink-900/50 dark:to-pink-900/30'
    }
  ],
  numberTypes: [
    {
      title: 'Local Numbers',
      icon: <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Numbers with local area codes to establish presence in specific locations',
      features: [
        'Build local trust with area codes',
        'Available in 100+ countries',
        'No geographical restrictions'
      ]
    },
    {
      title: 'Toll-Free Numbers',
      icon: <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Numbers that allow customers to call your business for free',
      features: [
        'Increase call volume from customers',
        'Nationwide coverage',
        'Professional image'
      ]
    },
    {
      title: 'International Numbers',
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
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
      icon: <CreditCard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Operational Flexibility',
      description: 'Add, remove or change numbers instantly as your business needs evolve',
      icon: <GitBranch className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Professional Image',
      description: 'Present a local presence even when operating remotely or internationally',
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: 'Advanced Features',
      description: 'Access capabilities like IVR, call recording, and analytics not available with traditional lines',
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    }
  ],
  howItWorks: [
    {
      step: '1',
      title: 'Select Your Number',
      description: 'Choose from available local, toll-free, or international numbers in our dashboard',
      icon: <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      step: '2',
      title: 'Configure Settings',
      description: 'Set up call routing rules, business hours, voicemail, and other preferences',
      icon: <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      step: '3',
      title: 'Connect Your Team',
      description: 'Forward calls to existing phones or use our mobile/web applications',
      icon: <Headphones className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      step: '4',
      title: 'Go Live',
      description: 'Start receiving calls immediately with your new professional number',
      icon: <PhoneOutgoing className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
      icon: <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Dedicated assistance whenever you need it',
      icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '99.99%',
      label: 'Uptime',
      description: 'Guaranteed reliability for your business',
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: 'Instant',
      label: 'Activation',
      description: 'Get numbers working in minutes',
      icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    }
  ]
};

// Interfaces
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

interface NumberType {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface IndustryUse {
  title: string;
  description: string;
  features: string[];
}

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

// Stats Grid Component
const StatsGrid: React.FC<{ stats: Stat[]; className?: string }> = React.memo(({ stats, className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${className ?? ''}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/90 dark:bg-blue-900/90 p-6 rounded-xl border border-white/20 dark:border-blue-700 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg mr-3">
              {stat.icon}
            </div>
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {stat.value}
            </motion.p>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">{stat.label}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
        </motion.div>
      ))}
    </div>
  );
});

// Number Type Card Component
const NumberTypeCard: React.FC<{ numberType: NumberType }> = ({ numberType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg mr-4">
          {numberType.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{numberType.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{numberType.description}</p>
      <ul className="space-y-2">
        {numberType.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// Benefit Card Component
const BenefitCard: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-800 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
    </motion.div>
  );
};

// How It Works Step Component
const HowItWorksStep: React.FC<{ step: HowItWorksStep; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start space-x-6 p-6 bg-white dark:bg-blue-900/20 rounded-xl border border-gray-200 dark:border-blue-800"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{step.step}</span>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="mr-3 text-blue-600 dark:text-blue-400">
            {step.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
      </div>
    </motion.div>
  );
};

// Industry Use Card Component
const IndustryUseCard: React.FC<{ industry: IndustryUse }> = ({ industry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-blue-900/50 rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{industry.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{industry.description}</p>
      <ul className="space-y-2">
        {industry.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
        {/* Hero Section (kept as requested) */}
        <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="absolute inset-0 flex items-center">
            <Container className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" }}
                    className="inline-block mb-6"
                  >
                    <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                      VIRTUAL NUMBERS SOLUTION
                    </div>
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {virtualNumbersData.hero.title}
                  </h1>
                  
                  <p className="text-xl text-blue-200 mb-8">
                    {virtualNumbersData.hero.subtitle}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {virtualNumbersData.hero.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-white"
                      >
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="accent"
                      size="lg"
                      className="bg-white text-blue-800 hover:bg-blue-50 px-8"
                      icon={<ArrowRight size={20} />}
                    >
                      Get Your Number Now
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-white border-white/30 hover:bg-white/10 px-8"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-sm text-white/70">Virtual Number Dashboard</div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 mb-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-white">Your Numbers</h3>
                          <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full">
                            + Add Number
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          {[
                            { country: 'United States', number: '+1 (415) 555-0199', type: 'Local' },
                            { country: 'United Kingdom', number: '+44 20 7946 0958', type: 'Toll-Free' },
                            { country: 'Germany', number: '+49 30 5678 9101', type: 'Local' }
                          ].map((num, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                              <div>
                                <p className="text-white font-medium">{num.country}</p>
                                <p className="text-blue-200 text-sm">{num.number}</p>
                              </div>
                              <span className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">
                                {num.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4">
                          <p className="text-xs text-blue-200 mb-1">Total Calls</p>
                          <p className="text-2xl font-bold text-white">1,248</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                          <p className="text-xs text-blue-200 mb-1">Avg. Duration</p>
                          <p className="text-2xl font-bold text-white">4:32</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </div>

          <motion.div
            style={{ opacity, y }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white text-center"
            >
              <p className="mb-2">Scroll to explore</p>
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section - Expanded */}
        <section id="features" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] bg-[size:20px_20px] opacity-10 dark:opacity-5" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring" }}
                className="inline-block mb-6"
              >
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-400/30">
                  KEY FEATURES
                </div>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful <span className="text-blue-600 dark:text-blue-400">Virtual Number</span> Capabilities
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Everything you need to establish and manage professional business communications globally
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {virtualNumbersData.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-6 border border-gray-200 dark:border-blue-800 shadow-sm hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white dark:bg-blue-900 rounded-lg mr-4 shadow-sm">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-28 relative"
            >
              <div className="absolute -top-8 left-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 rounded-full" />
              <StatsGrid 
                stats={virtualNumbersData.stats}
                className="bg-gradient-to-b from-white to-blue-50 dark:from-blue-950/50 dark:to-blue-900/30 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-blue-800"
              />
            </motion.div>
          </Container>
        </section>

        {/* Number Types Section */}
        <section id="number-types" className="py-32 bg-gray-50 dark:bg-blue-950/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Virtual Number <span className="text-blue-600 dark:text-blue-400">Types</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Choose the right type of virtual number for your business needs
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
        <section id="benefits" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our <span className="text-blue-600 dark:text-blue-400">Virtual Numbers</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                The strategic advantages of using our virtual number solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {virtualNumbersData.benefits.map((benefit, i) => (
                <BenefitCard key={i} benefit={benefit} />
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-32 bg-gray-50 dark:bg-blue-950/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How Our <span className="text-blue-600 dark:text-blue-400">Virtual Numbers</span> Work
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Get started with professional business numbers in minutes
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
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
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Now
              </Button>
            </motion.div>
          </Container>
        </section>

        {/* Industry Applications Section */}
        <section id="industries" className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-5 dark:opacity-[0.02]" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry <span className="text-blue-600 dark:text-blue-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                How different industries leverage virtual numbers for business growth
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
        <section id="case-studies" className="py-32 bg-gray-50 dark:bg-blue-950/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Virtual Number <span className="text-blue-600 dark:text-blue-400">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                See how businesses are transforming their communications with our solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {virtualNumbersData.caseStudies.map((caseStudy, i) => (
                <CaseStudyCard key={i} caseStudy={caseStudy} index={i} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
              >
                View All Case Studies
              </Button>
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-white dark:bg-blue-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10 dark:opacity-5" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What Our <span className="text-blue-600 dark:text-blue-400">Customers</span> Say
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses using our virtual numbers
              </p>
            </motion.div>

            <TestimonialCarousel testimonials={virtualNumbersData.testimonials} />
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-32 bg-gray-50 dark:bg-blue-950/50">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Virtual Number <span className="text-blue-600 dark:text-blue-400">FAQs</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                Answers to common questions about our virtual number solutions
              </p>
            </motion.div>

            <FAQAccordion faqs={virtualNumbersData.faqs} />
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" />
          </div>

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
                <div className="px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white text-sm font-medium backdrop-blur-sm">
                  READY TO GET STARTED?
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Get Your <span className="text-cyan-300">Virtual Number</span> Today
              </h2>
              <p className="text-xl text-blue-200 mb-12">
                Join thousands of businesses using our virtual numbers to establish their global presence
                and improve customer communications.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 px-12"
                  icon={<ArrowRight size={20} />}
                >
                  Get Started Now
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/30 hover:bg-white/10 px-12"
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