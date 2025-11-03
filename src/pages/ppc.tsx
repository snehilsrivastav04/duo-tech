import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Check, Zap, 
  BarChart2, Search, Monitor, Smartphone, DollarSign,
  Target, Clipboard, Settings, TrendingUp, Filter,
  Download, Mail, Clock, Users, Layout, PieChart
} from 'lucide-react';
import { FaGoogle, FaFacebook, FaLinkedin, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Data for the PPC page
const ppcData = {
  hero: {
    title: "High-Converting Ads That Maximize ROI",
    subtitle: "We turn ad spend into real growth using data-backed strategy, copywriting, and A/B testing.",
    ctaPrimary: "Get a Free Audit",
    ctaSecondary: "View Case Studies",
    stats: [
      { value: "6.2x", label: "Average ROAS" },
      { value: "₹35", label: "Cost Per Lead" },
      { value: "12.8%", label: "Conversion Rate" }
    ]
  },
  services: [
    {
      title: "Google Ads",
      description: "Search, Display, and Shopping campaigns that drive qualified traffic.",
      icon: <FaGoogle className="w-8 h-8 text-blue-600" />,
      features: ["Keyword research", "Quality Score optimization", "Smart bidding"]
    },
    {
      title: "Facebook & Instagram Ads",
      description: "Highly targeted social campaigns that convert.",
      icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
      features: ["Lookalike audiences", "Creative testing", "Lead gen forms"]
    },
    {
      title: "YouTube Pre-Roll Ads",
      description: "Video ads that capture attention and drive action.",
      icon: <FaYoutube className="w-8 h-8 text-blue-600" />,
      features: ["5-15 second ads", "Custom audiences", "Brand lift measurement"]
    },
    {
      title: "Retargeting Campaigns",
      description: "Bring back visitors who didn't convert.",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      features: ["Cross-platform retargeting", "Dynamic product ads", "Frequency capping"]
    },
    {
      title: "LinkedIn Ads",
      description: "B2B lead generation that delivers.",
      icon: <FaLinkedin className="w-8 h-8 text-blue-600" />,
      features: ["Account-based marketing", "Sponsored content", "Message ads"]
    },
    {
      title: "Ad Copywriting",
      description: "Persuasive messaging that converts.",
      icon: <Clipboard className="w-8 h-8 text-blue-600" />,
      features: ["A/B testing", "Emotional triggers", "Benefit-focused"]
    }
  ],
  metrics: [
    { value: 1200, suffix: "+", label: "Campaigns Managed", icon: <BarChart2 className="w-8 h-8" /> },
    { value: 6.2, suffix: "x", label: "Average ROAS", icon: <DollarSign className="w-8 h-8" /> },
    { value: 35, prefix: "₹", label: "Cost Per Lead", icon: <TrendingUp className="w-8 h-8" /> },
    { value: 12.8, suffix: "%", label: "Conversion Rate", icon: <PieChart className="w-8 h-8" /> }
  ],
  process: [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "Deep dive into your business goals and target audience.",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Keyword & Audience Research",
      description: "Identify high-intent keywords and build custom audiences.",
      icon: <Filter className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Campaign Setup",
      description: "Structure campaigns for optimal performance.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "4",
      title: "A/B Testing",
      description: "Test creatives, copy, and landing pages.",
      icon: <Layout className="w-6 h-6" />
    },
    {
      step: "5",
      title: "Launch & Optimize",
      description: "Monitor and refine campaigns weekly.",
      icon: <Monitor className="w-6 h-6" />
    }
  ],
  adExamples: [
    {
      type: "Search Ad",
      platform: "Google",
      ctr: "5.8%",
      cpc: "₹45",
      image: "/ads/search-ad-example.jpg"
    },
    {
      type: "Display Ad",
      platform: "Google",
      ctr: "1.2%",
      cpc: "₹12",
      image: "/ads/display-ad-example.jpg"
    },
    {
      type: "Carousel Ad",
      platform: "Facebook",
      ctr: "8.3%",
      cpc: "₹68",
      image: "/ads/carousel-ad-example.jpg"
    },
    {
      type: "Video Ad",
      platform: "YouTube",
      ctr: "15.2%",
      cpc: "₹92",
      image: "/ads/video-ad-example.jpg"
    }
  ],
  caseStudies: [
    {
      title: "E-commerce Brand Scaling",
      challenge: "Struggling with ₹100+ cost per acquisition",
      solution: "Restructured campaign strategy with audience segmentation",
      results: "5.8x ROAS, scaled from ₹30k/mo to ₹5L+",
      metrics: ["78% decrease in CPA", "320% increase in conversions"]
    },
    {
      title: "B2B SaaS Lead Generation",
      challenge: "Low quality leads from broad targeting",
      solution: "Implemented account-based marketing on LinkedIn",
      results: "42% lower CPL with 2x more demos booked",
      metrics: ["65% open rate on message ads", "35% conversion to trial"]
    }
  ],
  testimonials: [
    {
      quote: "They took our ad spend from money pit to profit center. 6x ROAS in 90 days!",
      author: "Rahul Sharma",
      role: "CMO, UrbanKart",
      rating: 5
    },
    {
      quote: "Our leads went up 300% while cutting cost per lead in half. Incredible work.",
      author: "Priya Patel",
      role: "Growth Lead, SaaSify",
      rating: 5
    },
    {
      quote: "Finally found a team that understands performance marketing. Worth every rupee.",
      author: "Amit Joshi",
      role: "Founder, HealthPlus",
      rating: 5
    }
  ],
  platforms: [
    { name: "Google Ads", icon: <FaGoogle className="w-8 h-8" />, ctr: "3-5%" },
    { name: "Facebook Ads", icon: <FaFacebook className="w-8 h-8" />, ctr: "1-3%" },
    { name: "Instagram Ads", icon: <FaFacebook className="w-8 h-8" />, ctr: "1.5-4%" },
    { name: "LinkedIn Ads", icon: <FaLinkedin className="w-8 h-8" />, ctr: "0.5-2%" },
    { name: "YouTube Ads", icon: <FaYoutube className="w-8 h-8" />, ctr: "5-15%" },
    { name: "TikTok Ads", icon: <FaTiktok className="w-8 h-8" />, ctr: "3-8%" },
    { name: "Twitter Ads", icon: <FaTwitter className="w-8 h-8" />, ctr: "1-3%" }
  ],
  pricing: {
    starter: {
      price: "₹25,000",
      description: "Perfect for businesses getting started with PPC",
      features: [
        "1 Campaign Platform",
        "10 Ad Variations",
        "Weekly Optimization",
        "Monthly Reports",
        "Up to ₹50k Ad Spend"
      ],
      cta: "Get Started"
    },
    pro: {
      price: "₹75,000",
      description: "For growing businesses scaling ad spend",
      features: [
        "3 Campaign Platforms",
        "Unlimited Ad Variations",
        "Bi-Weekly Optimization",
        "Weekly Reports",
        "Up to ₹3L Ad Spend",
        "A/B Testing"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    enterprise: {
      price: "Custom",
      description: "For brands spending ₹5L+/month on ads",
      features: [
        "All Platforms",
        "Dedicated Account Manager",
        "Daily Optimization",
        "Custom Reporting",
        "Unlimited Ad Spend",
        "Landing Page Design"
      ],
      cta: "Contact Sales"
    }
  },
  faqs: [
    {
      question: "What platforms do you run ads on?",
      answer: "We specialize in Google Ads (Search, Display, Shopping), Meta Ads (Facebook, Instagram), LinkedIn, YouTube, and TikTok. We'll recommend the best platforms for your specific goals."
    },
    {
      question: "What's your minimum ad budget?",
      answer: "We work with businesses spending at least ₹25,000/month on ad spend. For smaller budgets, we recommend our starter consulting package."
    },
    {
      question: "When will I see results?",
      answer: "Most campaigns start showing meaningful data within 7-14 days. Significant optimization and scaling typically begins after 30 days once we have enough conversion data."
    },
    {
      question: "Do you provide landing pages?",
      answer: "Yes! Our premium packages include high-converting landing page design and A/B testing. This is often the missing piece for campaign success."
    }
  ],
  resources: [
    {
      title: "PPC Audit Checklist",
      description: "34-point checklist to audit your current campaigns",
      icon: <Download className="w-6 h-6" />,
      cta: "Download Now"
    },
    {
      title: "Ad Copy Template Bundle",
      description: "50+ proven templates for every platform",
      icon: <Clipboard className="w-6 h-6" />,
      cta: "Get Templates"
    },
    {
      title: "ROI Calculator",
      description: "Forecast your potential return from PPC",
      icon: <DollarSign className="w-6 h-6" />,
      cta: "Calculate Now"
    }
  ]
};

// Counter Component
const Counter = ({ value, prefix = "", suffix = "", label, icon }: { value: number; prefix?: string; suffix?: string; label: string; icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          {icon}
        </div>
        <motion.p
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            {value}
          </motion.span>
          {suffix}
        </motion.p>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300">{label}</p>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep = ({ step, title, description, icon }: { step: string; title: string; description: string; icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
    >
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {step}
      </div>
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

// Ad Example Component
const AdExample = ({ type, platform, ctr, cpc, image }: { type: string; platform: string; ctr: string; cpc: string; image: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={`${type} example`} 
        className="w-full h-64 object-cover"
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
          >
            <div className="text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">{type}</span>
                <span className="text-sm bg-blue-600 px-2 py-1 rounded">{platform}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>CTR: {ctr}</span>
                <span>CPC: {cpc}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Platform Card Component
const PlatformCard = ({ name, icon, ctr }: { name: string; icon: React.ReactNode; ctr: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
    >
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">Avg. CTR: {ctr}</p>
    </motion.div>
  );
};

// Pricing Card Component
const PricingCard = ({ plan, price, description, features, cta, popular = false }: { plan: string; price: string; description: string; features: string[]; cta: string; popular?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border ${popular ? 'border-blue-500 transform hover:scale-[1.02]' : 'border-gray-200 dark:border-gray-700'} transition-all`}
    >
      {popular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
        {price !== "Custom" && <span className="text-gray-500 dark:text-gray-400">/month</span>}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={popular ? "primary" : "outline"}
        size="lg"
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
};

// Resource Card Component
const ResourceCard = ({ title, description, icon, cta }: { title: string; description: string; icon: React.ReactNode; cta: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <Button variant="outline" className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
        {cta}
      </Button>
    </motion.div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === ppcData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? ppcData.testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex mb-4">
          {[...Array(ppcData.testimonials[currentIndex].rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-xl text-gray-900 dark:text-white mb-6">"{ppcData.testimonials[currentIndex].quote}"</p>
        <div className="text-gray-700 dark:text-gray-300">
          <p className="font-bold">{ppcData.testimonials[currentIndex].author}</p>
          <p className="text-sm">{ppcData.testimonials[currentIndex].role}</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </button>
        <div className="flex items-center space-x-2">
          {ppcData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

// PPC Page Component
const PPCPage = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-800/30 to-transparent" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <p className="text-white text-sm font-medium">GET LEADS ON AUTOPILOT</p>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {ppcData.hero.title}
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                {ppcData.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  variant="accent"
                  size="lg"
                  className="bg-white text-blue-800 hover:bg-blue-100 px-8"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  {ppcData.hero.ctaPrimary}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 px-8"
                >
                  {ppcData.hero.ctaSecondary}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-6">
                {ppcData.hero.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-blue-200 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-10 bg-gray-100 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <img 
                  src="/images/ppc-dashboard-mockup.jpg" 
                  alt="PPC Dashboard" 
                  className="w-full h-auto mt-10"
                />
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-8 right-8 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>ROAS: 6.2x</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-yellow-400 rounded-full shadow-xl flex items-center justify-center"
              >
                <DollarSign className="w-8 h-8 text-yellow-800" />
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/10 to-transparent" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">PPC Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive paid media solutions across all major platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ppcData.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 p-8 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')] opacity-10 dark:opacity-5" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Proven <span className="text-blue-600 dark:text-blue-400">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real results from our managed campaigns
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppcData.metrics.map((metric, i) => (
              <Counter 
                key={i}
                value={metric.value}
                prefix={metric.prefix || ""}
                suffix={metric.suffix || ""}
                label={metric.label}
                icon={metric.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A strategic approach to maximizing your ad performance
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {ppcData.process.map((step, i) => (
                <ProcessStep
                  key={i}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Ad Examples Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              High-Performing <span className="text-blue-600 dark:text-blue-400">Ad Examples</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See real ads we've created with performance metrics
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {ppcData.adExamples.map((ad, i) => (
              <AdExample
                key={i}
                type={ad.type}
                platform={ad.platform}
                ctr={ad.ctr}
                cpc={ad.cpc}
                image={ad.image}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Real <span className="text-blue-600 dark:text-blue-400">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how we've transformed our clients' ad performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ppcData.caseStudies.map((caseStudy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{caseStudy.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">CHALLENGE</h4>
                    <p className="text-gray-700 dark:text-gray-300">{caseStudy.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">SOLUTION</h4>
                    <p className="text-gray-700 dark:text-gray-300">{caseStudy.solution}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">RESULTS</h4>
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{caseStudy.results}</p>
                    <ul className="space-y-2">
                      {caseStudy.metrics.map((metric, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-8 py-4 border-t border-gray-100 dark:border-gray-600">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400">
                    View Full Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
            >
              View All Case Studies
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 dark:opacity-5" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Client <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </motion.div>
          
          <TestimonialCarousel />
        </Container>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Platforms We <span className="text-blue-600 dark:text-blue-400">Specialize In</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're experts in all major advertising platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ppcData.platforms.map((platform, i) => (
              <PlatformCard
                key={i}
                name={platform.name}
                icon={platform.icon}
                ctr={platform.ctr}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, <span className="text-blue-600 dark:text-blue-400">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No hidden fees. Cancel anytime.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              plan="Starter"
              price={ppcData.pricing.starter.price}
              description={ppcData.pricing.starter.description}
              features={ppcData.pricing.starter.features}
              cta={ppcData.pricing.starter.cta}
            />
            <PricingCard
              plan="Professional"
              price={ppcData.pricing.pro.price}
              description={ppcData.pricing.pro.description}
              features={ppcData.pricing.pro.features}
              cta={ppcData.pricing.pro.cta}
              popular={ppcData.pricing.pro.popular}
            />
            <PricingCard
              plan="Enterprise"
              price={ppcData.pricing.enterprise.price}
              description={ppcData.pricing.enterprise.description}
              features={ppcData.pricing.enterprise.features}
              cta={ppcData.pricing.enterprise.cta}
            />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our PPC services
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {ppcData.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button className="w-full flex justify-between items-center p-6 text-left">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform" />
                </button>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Free <span className="text-blue-600 dark:text-blue-400">Resources</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Download our free PPC tools and templates
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ppcData.resources.map((resource, i) => (
              <ResourceCard
                key={i}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                cta={resource.cta}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-800/30 to-transparent" />
        
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
              <div className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium">
                READY TO GET STARTED?
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Stop Wasting Ad Spend. Let's Build <span className="text-cyan-300">Winning Campaigns</span>.
            </h2>
            
            <p className="text-xl text-blue-200 mb-12">
              Get a free audit of your current campaigns and discover how we can improve your results.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="accent"
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-100 px-12"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10 px-12"
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default PPCPage;