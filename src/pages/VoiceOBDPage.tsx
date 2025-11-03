import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Phone, Volume2, Languages, BarChart2, 
  Zap, Shield, GitBranch, Server, 
  Check, ChevronRight, ChevronLeft, 
  Play, Mail, MessageSquare, ArrowRight,
  Circle, CircleDot, Mic, Calendar, Star, ChevronDown, Users, PieChart, Download
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Data for the page
const voiceOBDData = {
  hero: {
    title: "Reach Thousands Instantly with Voice OBD",
    description: "Automate your customer communication with our powerful voice broadcasting platform. Deliver personalized messages at scale with 99.9% reliability.",
    ctaButtons: [
      { text: "Request Demo", variant: "primary" },
      { text: "Contact Us", variant: "secondary" }
    ]
  },
  features: [
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "High-Volume Calls",
      description: "Handle thousands of simultaneous calls with our robust infrastructure",
      gradient: "from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30"
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Reach customers in their preferred language with automated translation",
      gradient: "from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Real-Time Reports",
      description: "Monitor campaign performance with live analytics dashboard",
      gradient: "from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-900/30"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "IVR Integration",
      description: "Custom interactive voice response menus for professional customer experience",
      gradient: "from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Delivery",
      description: "Messages delivered in seconds with 99.9% reliability",
      gradient: "from-yellow-100 to-yellow-50 dark:from-yellow-900/50 dark:to-yellow-900/30"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance with global standards",
      gradient: "from-red-100 to-red-50 dark:from-red-900/50 dark:to-red-900/30"
    }
  ],
  useCases: {
    healthcare: {
      title: "Healthcare",
      description: "Automated appointment reminders, prescription notifications, and health awareness campaigns delivered directly to patients via voice calls.",
      image: "/images/healthcare-voice.jpg",
      features: [
        "HIPAA-compliant messaging",
        "Multi-language support",
        "Automated follow-ups",
        "Integration with EHR systems"
      ],
      benefits: [
        "Reduce no-show rates by up to 40%",
        "Improve patient engagement",
        "Automate routine communications"
      ]
    },
    education: {
      title: "Education",
      description: "School notifications, exam alerts, and parent-teacher communication through automated voice broadcasts.",
      image: "/images/education-voice.jpg",
      features: [
        "Bulk messaging to parents",
        "Multi-language options",
        "Attendance alerts",
        "Emergency notifications"
      ],
      benefits: [
        "Increase parent engagement",
        "Ensure critical messages are received",
        "Reduce administrative workload"
      ]
    },
    retail: {
      title: "Retail",
      description: "Promotional campaigns, order confirmations, and delivery updates via voice calls to enhance customer engagement.",
      image: "/images/retail-voice.jpg",
      features: [
        "Personalized offers",
        "Order status updates",
        "Feedback collection",
        "Loyalty program alerts"
      ],
      benefits: [
        "Boost sales with targeted promotions",
        "Improve customer satisfaction",
        "Reduce call center volume"
      ]
    },
    logistics: {
      title: "Logistics",
      description: "Delivery notifications, OTP verification, and customer support through automated voice solutions.",
      image: "/images/logistics-voice.jpg",
      features: [
        "Real-time delivery updates",
        "OTP verification calls",
        "Customer feedback surveys",
        "Driver coordination"
      ],
      benefits: [
        "Reduce failed delivery attempts",
        "Improve customer experience",
        "Streamline operations"
      ]
    }
  },
  howItWorks: [
    {
      step: 1,
      title: "Upload Your Contacts",
      description: "Import your contact list or connect to your CRM",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Record Your Message",
      description: "Upload audio files or use our text-to-speech service",
      icon: <Mic className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Schedule Your Campaign",
      description: "Set date/time or trigger based on events",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Launch & Monitor",
      description: "Track performance in real-time with our dashboard",
      icon: <BarChart2 className="w-6 h-6" />
    }
  ],
  testimonials: [
    {
      name: "Dr. Sarah Johnson",
      role: "Hospital Administrator",
      quote: "Our patient no-show rate dropped by 40% after implementing voice OBD reminders. The system pays for itself.",
      rating: 5,
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Raj Patel",
      role: "E-commerce Owner",
      quote: "Order confirmation calls have significantly improved our customer satisfaction scores. Highly recommended!",
      rating: 5,
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Maria Gonzalez",
      role: "School Principal",
      quote: "Parent engagement has never been higher since we started using voice broadcasts for important announcements.",
      rating: 4,
      image: "/images/testimonial-3.jpg"
    }
  ],
  faqs: [
    {
      question: "How quickly can I start a voice OBD campaign?",
      answer: "You can launch your first campaign within minutes of signing up. Our intuitive interface guides you through the simple setup process."
    },
    {
      question: "What languages are supported?",
      answer: "We support over 50 languages with natural-sounding text-to-speech voices, or you can upload your own recordings in any language."
    },
    {
      question: "Can I target specific demographics?",
      answer: "Yes, our segmentation tools allow you to target contacts by location, language, age group, and other custom parameters."
    },
    {
      question: "How are calls billed?",
      answer: "We offer both pay-as-you-go pricing and volume discounts. You only pay for completed calls to valid numbers."
    }
  ],
  stats: [
    {
      value: "99.9%",
      label: "Uptime",
      description: "Guaranteed reliability for your business",
      icon: <Server className="w-8 h-8" />
    },
    {
      value: "10M+",
      label: "Calls Daily",
      description: "Processed across our global network",
      icon: <Phone className="w-8 h-8" />
    },
    {
      value: "50+",
      label: "Languages",
      description: "Supported for voice broadcasts",
      icon: <Languages className="w-8 h-8" />
    },
    {
      value: "24/7",
      label: "Support",
      description: "Expert help whenever you need it",
      icon: <Users className="w-8 h-8" />
    }
  ]
};

// Components
const FeatureCard = ({ feature, index }: { feature: typeof voiceOBDData.features[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden relative`}
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 dark:bg-black/20 rounded-full blur-xl" />
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 relative z-10">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 relative z-10">
        {feature.description}
      </p>
    </motion.div>
  );
};

const UseCaseCard = ({ useCase, isActive }: { useCase: any; isActive: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-96 w-full perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/50 dark:to-gray-900" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {useCase.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Click to see benefits
              </span>
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden rotate-y-180">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/50 dark:to-gray-900" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why {useCase.title}?
              </h3>
              <ul className="space-y-3">
                {useCase.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                Click to see features
              </span>
              <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 rotate-180" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === voiceOBDData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? voiceOBDData.testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
        >
          <div className="flex mb-4">
            {[...Array(voiceOBDData.testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
            "{voiceOBDData.testimonials[currentIndex].quote}"
          </p>
          <div className="flex items-center">
            <img 
              src={voiceOBDData.testimonials[currentIndex].image} 
              alt={voiceOBDData.testimonials[currentIndex].name} 
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                {voiceOBDData.testimonials[currentIndex].name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {voiceOBDData.testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center space-x-2">
          {voiceOBDData.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-6 bg-blue-600 dark:bg-blue-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, index, expanded, setExpanded }: { 
  faq: typeof voiceOBDData.faqs[0]; 
  index: number; 
  expanded: number | null; 
  setExpanded: (index: number | null) => void 
}) => {
  const isOpen = expanded === index;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4 last:mb-0"
    >
      <button
        onClick={() => setExpanded(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all text-left group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0 text-blue-600 dark:text-blue-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-2 text-gray-600 dark:text-gray-300">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: typeof voiceOBDData.stats[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/20 rounded-full blur-xl" />
      <div className="flex items-center mb-4 relative z-10">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
          {stat.icon}
        </div>
        <motion.p
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {stat.value}
        </motion.p>
      </div>
      <p className="text-lg font-medium text-gray-900 dark:text-white mb-1 relative z-10">{stat.label}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 relative z-10">{stat.description}</p>
    </motion.div>
  );
};

// Main Page Component
const VoiceOBDPage = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        {/* Animated wave background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-64 bg-blue-600"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundImage: 'url(/images/wave-pattern.svg)',
              backgroundSize: '1200px 100%',
              opacity: 0.15
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30" />

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium border border-white/20"
            >
              Voice Outbound Dialing
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {voiceOBDData.hero.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              {voiceOBDData.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {voiceOBDData.hero.ctaButtons.map((button, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-medium shadow-lg ${
                    button.variant === "primary"
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "bg-transparent border-2 border-white text-white hover:bg-white/10"
                  }`}
                >
                  {button.text}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Phone illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute right-0 bottom-0 hidden lg:block z-0"
          >
            <div className="relative w-96 h-auto">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl" />
              <img 
                src="/images/phone-illustration.png" 
                alt="Voice OBD illustration" 
                className="relative z-10 w-full h-auto"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer z-20"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity }}
            className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
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
                <ChevronRight className="w-6 h-6 mx-auto rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-500/30">
                POWERFUL FEATURES
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Successful Campaigns</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform provides all the tools to create, manage, and optimize your voice broadcasts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceOBDData.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Businesses <span className="text-blue-600 dark:text-blue-400">Worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of companies using our voice OBD solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {voiceOBDData.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Industry <span className="text-blue-600 dark:text-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tailored voice OBD solutions for your specific needs
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(voiceOBDData.useCases).map((key) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {voiceOBDData.useCases[key].title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:pr-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {voiceOBDData.useCases[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {voiceOBDData.useCases[activeTab].description}
              </p>
              <ul className="space-y-3 mb-8">
                {voiceOBDData.useCases[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg shadow-blue-500/30 flex items-center">
                Learn More <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </motion.div>

            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/30" />
                <img 
                  src={voiceOBDData.useCases[activeTab].image} 
                  alt={voiceOBDData.useCases[activeTab].title} 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium">Voice OBD in {voiceOBDData.useCases[activeTab].title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How It <span className="text-blue-600 dark:text-blue-400">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with voice OBD in just 4 simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {voiceOBDData.howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl mb-4 relative">
                      {step.step}
                      <div className="absolute -bottom-2 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45 border-b border-r border-gray-100 dark:border-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Real-Time <span className="text-blue-600 dark:text-blue-400">Analytics</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Monitor your voice campaigns with our intuitive dashboard that provides actionable insights and performance metrics.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <BarChart2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Live Call Tracking</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      See real-time delivery status and call outcomes
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PieChart className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Performance Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Detailed reports on answer rates, duration, and more
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Download className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Export Reports</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Download data for further analysis in Excel or CSV
                    </p>
                  </div>
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg shadow-blue-500/30 flex items-center">
                View Sample Reports <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
                <img 
                  src="/images/dashboard-preview.jpg" 
                  alt="Voice OBD Dashboard" 
                  className="w-full h-auto"
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50 dark:bg-blue-950/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
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
              Everything you need to know about our voice OBD services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {voiceOBDData.faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                faq={faq}
                index={index}
                expanded={expandedFaq}
                setExpanded={setExpandedFaq}
              />
            ))}
          </div>
        </div>
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
              Transform Your <span className="text-cyan-300">Communication</span> Today
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Join thousands of businesses using our platform to scale their operations
              and deliver exceptional customer experiences.
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
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default VoiceOBDPage;