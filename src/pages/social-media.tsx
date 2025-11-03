import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Check, Zap, BarChart2, Users, Clock, 
  MessageSquare, PenTool, Calendar, TrendingUp, Target,
  Lightbulb, Rocket, Award, Globe, Heart, Star
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';
import MainLayout from '../components/layout/MainLayout';


const smmData = {
  services: [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Content Strategy & Planning",
      tagline: "Stories worth sharing",
      description: "Transform your brand narrative into compelling content that resonates with your audience across every platform.",
      fullDescription: "We develop comprehensive content strategies that align with your business objectives and resonate with your target audience. Through deep audience analysis and creative thinking, we craft narratives that engage, inspire, and convert.",
      process: [
        "Audience research & persona mapping",
        "Content pillar development",
        "Editorial calendar creation",
        "Platform-specific optimization"
      ],
      features: [
        "30-day content calendars",
        "Cross-platform strategy",
        "Trend analysis & integration",
        "Performance forecasting"
      ],
      stats: { value: "300%", label: "Avg. Engagement Lift" }
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Creative Content Production",
      tagline: "Visual excellence, every time",
      description: "Eye-catching visuals and compelling copy that stops the scroll and starts conversations.",
      fullDescription: "Our creative team produces stunning visual content and engaging copy that captures attention in crowded feeds. From graphics to videos, every piece is crafted to reflect your brand identity and drive engagement.",
      process: [
        "Creative brief & concept development",
        "Visual identity alignment",
        "Multi-format content creation",
        "Quality assurance & refinement"
      ],
      features: [
        "Custom graphics & animations",
        "Video editing & production",
        "Copywriting & storytelling",
        "Brand-consistent aesthetics"
      ],
      stats: { value: "5.8%", label: "Avg. Engagement Rate" }
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Paid Social Advertising",
      tagline: "Precision-targeted growth",
      description: "Strategic paid campaigns that reach the right people at the right time with the right message.",
      fullDescription: "Maximize your advertising ROI through data-driven targeting, compelling creative, and continuous optimization. We turn ad spend into measurable business results.",
      process: [
        "Audience segmentation & targeting",
        "Ad creative development & testing",
        "Campaign launch & monitoring",
        "Real-time optimization"
      ],
      features: [
        "Advanced audience targeting",
        "A/B testing frameworks",
        "Budget optimization",
        "Conversion tracking & attribution"
      ],
      stats: { value: "8.5x", label: "Avg. ROAS" }
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Analytics & Performance",
      tagline: "Data-driven decisions",
      description: "Comprehensive insights that transform metrics into actionable strategies for continuous growth.",
      fullDescription: "We don't just track numbers—we uncover insights. Our analytics approach identifies what's working, what's not, and where your biggest opportunities lie.",
      process: [
        "KPI framework development",
        "Data collection & analysis",
        "Performance reporting",
        "Strategic recommendations"
      ],
      features: [
        "Custom dashboards",
        "Competitive benchmarking",
        "ROI measurement",
        "Predictive analytics"
      ],
      stats: { value: "2.4M", label: "Monthly Impressions" }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Partnerships",
      tagline: "Authentic voices, amplified reach",
      description: "Strategic collaborations with trusted voices that expand your reach and build credibility.",
      fullDescription: "Connect with influencers who genuinely align with your brand values. We manage the entire partnership lifecycle, from discovery to campaign execution and reporting.",
      process: [
        "Influencer identification & vetting",
        "Outreach & negotiation",
        "Campaign coordination",
        "Performance tracking & reporting"
      ],
      features: [
        "Influencer database access",
        "Contract management",
        "Content approval workflows",
        "ROI tracking"
      ],
      stats: { value: "45%", label: "Avg. Conversion Boost" }
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Community Management",
      tagline: "Building lasting relationships",
      description: "Proactive engagement that transforms followers into brand advocates and builds loyal communities.",
      fullDescription: "Your audience wants to be heard. We monitor, engage, and nurture your community with authentic interactions that strengthen brand loyalty and reputation.",
      process: [
        "Community monitoring & listening",
        "Response protocol development",
        "Proactive engagement strategy",
        "Sentiment analysis & reporting"
      ],
      features: [
        "24/7 monitoring",
        "Comment & DM management",
        "Crisis response protocols",
        "Community growth initiatives"
      ],
      stats: { value: "92%", label: "Response Rate" }
    }
  ],
  platforms: [
    { icon: FaInstagram, name: "Instagram", color: "#E4405F" },
    { icon: FaFacebook, name: "Facebook", color: "#1877F2" },
    { icon: FaLinkedin, name: "LinkedIn", color: "#0A66C2" },
    { icon: FaTwitter, name: "Twitter", color: "#1DA1F2" },
    { icon: FaTiktok, name: "TikTok", color: "#000000" },
    { icon: FaYoutube, name: "YouTube", color: "#FF0000" }
  ]
};

const SocialMediaMarketingPage = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(v => setScrollProgress(v));
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <MainLayout>
      <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 dark:bg-blue-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section - Sequential Reveal */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center min-h-screen py-20">
          <div className="max-w-5xl mx-auto w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-light">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>SOCIAL MEDIA MARKETING</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl font-extralight text-slate-900 dark:text-slate-100 mb-6 leading-[0.95] tracking-tighter"
            >
              Your Story.<br />
              <span className="text-blue-500">Every Platform.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl font-light leading-relaxed"
            >
              We craft compelling narratives that resonate across social channels, 
              turning followers into advocates and engagement into growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <button className="group px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-light shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg font-light transition-all duration-300">
                Explore Our Work
              </button>
            </motion.div>

            {/* Platform Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center gap-6 text-slate-400 dark:text-slate-600"
            >
              <span className="text-sm font-light">We excel on</span>
              <div className="flex items-center gap-4">
                {smmData.platforms.map((platform, i) => {
                  const Icon = platform.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-5 h-5 hover:text-blue-500" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-slate-400 dark:text-slate-600"
          >
            <span className="text-xs font-light mb-2 tracking-wider">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-light tracking-wider uppercase">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-slate-100 mb-6">
              Numbers That Speak Louder
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
              Real metrics from real clients. Here's what strategic social media can achieve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { value: "300%", label: "Avg. Follower Growth", sub: "Within 6 months" },
              { value: "5.8%", label: "Engagement Rate", sub: "Industry avg: 1.5%" },
              { value: "8.5x", label: "Return on Ad Spend", sub: "Across campaigns" },
              { value: "2.4M", label: "Monthly Impressions", sub: "Managed accounts" },
              { value: "92%", label: "Response Rate", sub: "Community engagement" },
              { value: "45%", label: "Conversion Boost", sub: "Through optimization" }
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="text-5xl font-extralight text-blue-600 dark:text-blue-400 mb-3">
                      {metric.value}
                    </div>
                    <div className="text-base text-slate-900 dark:text-slate-100 font-light mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 font-light">
                      {metric.sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Sequential Scroll Narrative */}
      <section id="services" className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-block mb-6">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-light tracking-wider uppercase">What We Do</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
              Full-Spectrum Social Media Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              From strategy to execution, we handle every aspect of your social media presence 
              with precision and creativity.
            </p>
          </motion.div>

          {/* Sequential Service Cards */}
          <div className="max-w-5xl mx-auto space-y-32">
            {smmData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Service Number */}
                <div className="absolute -left-4 md:-left-16 top-0">
                  <span className="text-7xl md:text-9xl font-extralight text-blue-100 dark:text-blue-900/30">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 overflow-hidden">
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                      <div className="p-4 bg-blue-500 rounded-2xl text-white flex-shrink-0">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-light mb-2 tracking-wide">
                          {service.tagline}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light text-slate-900 dark:text-slate-100 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                          {service.description}
                        </p>
                      </div>
                      {/* Stat Badge */}
                      <div className="flex-shrink-0 text-right">
                        <div className="text-3xl font-extralight text-blue-600 dark:text-blue-400">
                          {service.stats.value}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500">
                          {service.stats.label}
                        </div>
                      </div>
                    </div>

                    {/* Full Description */}
                    <p className="text-slate-600 dark:text-slate-400 mb-10 font-light leading-relaxed text-lg">
                      {service.fullDescription}
                    </p>

                    {/* Process & Features Grid */}
                    <div className="grid md:grid-cols-2 gap-10 mb-8">
                      {/* Process */}
                      <div>
                        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-8 h-px bg-blue-400" />
                          Our Process
                        </h4>
                        <div className="space-y-4">
                          {service.process.map((step, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{i + 1}</span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-400 font-light">
                                {step}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-8 h-px bg-blue-400" />
                          Key Features
                        </h4>
                        <div className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                              <p className="text-slate-600 dark:text-slate-400 font-light">
                                {feature}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <button className="group px-8 py-3 border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-light transition-all duration-300 flex items-center gap-2">
                        Learn More About {service.title}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-slate-950 dark:to-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-slate-100 mb-6">
              Our Process
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              A structured approach to social media success, focused on strategy, 
              execution, and continuous optimization.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {['Discover', 'Plan', 'Create', 'Execute', 'Optimize'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-start gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-light text-xl shadow-lg shadow-blue-500/30">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow pt-3">
                  <h3 className="text-2xl font-light text-slate-900 dark:text-slate-100 mb-3">
                    {step}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    {[
                      'Deep dive into your business objectives, target audience, and competitive landscape to build a foundation for success.',
                      'Strategic content planning with editorial calendars, platform selection, and KPI definition tailored to your goals.',
                      'High-quality content production with compelling visuals, engaging copy, and brand-consistent aesthetics.',
                      'Campaign launch with community engagement, real-time monitoring, and proactive audience interaction.',
                      'Performance analysis with data-driven insights and continuous strategy refinement for optimal results.'
                    ][index]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-8">
              <div className="px-6 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-light">
                READY TO BEGIN?
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 dark:text-slate-100 mb-8">
              Let's Build Your Social Presence
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed">
              Schedule a consultation to discuss your goals and explore how our 
              strategic approach can drive meaningful growth for your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-light shadow-lg shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-12 py-4 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg font-light transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20 bg-slate-50 dark:bg-slate-900" />
      </div>
    </MainLayout>
  );
};

export default SocialMediaMarketingPage;