import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Phone, Volume2, Languages, BarChart2, 
  Zap, Shield, GitBranch, Server, 
  Check, ChevronRight, ChevronLeft, 
  Play, Mail, MessageSquare, ArrowRight,
  Circle, CircleDot, Mic, Calendar, Star, ChevronDown, Users, PieChart, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    },
    {
      icon: <Languages className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Reach customers in their preferred language with automated translation",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Real-Time Reports",
      description: "Monitor campaign performance with live analytics dashboard",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "IVR Integration",
      description: "Custom interactive voice response menus for professional customer experience",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Delivery",
      description: "Messages delivered in seconds with 99.9% reliability",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance with global standards",
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
      quote: "Order confirmation calls have significantly improved our customer satisfaction scores. Highly recommended!.",
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
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-8 transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
        {feature.icon}
      </div>
      <h3 className="text-xl font-sans font-regular text-gray-900 dark:text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 font-light">
        {feature.description}
      </p>
    </motion.div>
  );
};

const UseCaseCard = ({ useCase, isActive }: { useCase: any; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-2xl font-sans font-regular text-gray-900 dark:text-white mb-4">
        {useCase.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 font-light">
        {useCase.description}
      </p>
      <ul className="space-y-3">
        {useCase.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 font-light">{feature}</span>
          </li>
        ))}
      </ul>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-12 rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex mb-4">
            {[...Array(voiceOBDData.testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-blue-600 fill-current" />
            ))}
          </div>
          <p className="text-xl font-light text-gray-700 dark:text-gray-300 mb-6">
            "{voiceOBDData.testimonials[currentIndex].quote}"
          </p>
          <div className="flex items-center">
            <img 
              src={voiceOBDData.testimonials[currentIndex].image} 
              alt={voiceOBDData.testimonials[currentIndex].name} 
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-600"
            />
            <div>
              <p className="font-regular text-gray-900 dark:text-white">
                {voiceOBDData.testimonials[currentIndex].name}
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {voiceOBDData.testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 transition-colors border border-gray-200 dark:border-gray-700"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 transition-colors border border-gray-200 dark:border-gray-700"
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4 last:mb-0 border-b border-gray-200 dark:border-gray-700"
    >
      <button
        onClick={() => setExpanded(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-regular text-gray-900 dark:text-white">
          {faq.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0 text-blue-600"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '1rem' : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 font-light text-gray-600 dark:text-gray-300">
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
      className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
          {stat.icon}
        </div>
        <p className="text-4xl font-regular text-gray-900 dark:text-white">
          {stat.value}
        </p>
      </div>
      <p className="text-lg font-regular text-gray-900 dark:text-white mb-1">{stat.label}</p>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">{stat.description}</p>
    </motion.div>
  );
};

// Main Page Component
const VoiceOBDPage = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white">
        <Container>
          <div className="py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-sans font-regular mb-6">
                {voiceOBDData.hero.title}
              </h1>
              <p className="text-xl font-light text-blue-200 mb-12 max-w-2xl mx-auto">
                {voiceOBDData.hero.description}
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="primary" size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Request Demo
                </Button>
                <Button variant="secondary" size="lg" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-sans font-regular text-gray-900 dark:text-white mb-6">
              Successful Campaigns Start Here
            </h2>
            <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform provides all the tools to create, manage, and optimize your voice broadcasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceOBDData.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {voiceOBDData.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-sans font-regular text-gray-900 dark:text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Tailored voice OBD solutions for your specific needs.
            </p>
          </motion.div>

          <div className="flex justify-center gap-2 mb-12 border-b border-gray-200 dark:border-gray-700">
            {Object.keys(voiceOBDData.useCases).map((key) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 font-regular transition-colors relative ${
                  activeTab === key
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {voiceOBDData.useCases[key].title}
                {activeTab === key && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </motion.button>
            ))}
          </div>

          <UseCaseCard useCase={voiceOBDData.useCases[activeTab]} isActive={true} />
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-sans font-regular text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl font-light text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Get started with voice OBD in just 4 simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {voiceOBDData.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-2xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-regular text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-sans font-regular text-gray-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <TestimonialCarousel />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-sans font-regular text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
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
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-blue-900">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-sans font-regular text-white mb-8">
              Transform Your Communication Today
            </h2>
            <p className="text-xl font-light text-blue-200 mb-12">
              Join thousands of businesses using our platform to scale their operations
              and deliver exceptional customer experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                Get Started Now
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-white border-white hover:bg-white/10"
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
