import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { 
  Code, Globe, LayoutTemplate, ShoppingCart, PenTool,
  ArrowRight, Mail, ChevronLeft, ChevronRight, Check,
  Zap, Shield, GitBranch, Server, Users, Clock, Terminal,
  Smartphone, Figma, Database, Cpu, GitPullRequest, 
  Search, BarChart2, Type,  Tablet, Monitor,
  Cloud, Download, LifeBuoy, Globe2, MapPin
} from 'lucide-react';
import { FaWordpress, FaShopify, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVuedotjs, 
  SiPython, SiPhp, SiLaravel, SiWebflow, SiWix, SiFirebase,
  SiAew, SiCloudflare, SiMongodb } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import LogoCarousel from '../components/home/LogoCarousel';
import CaseStudyCard from '../components/home/CaseStudyCard';
import FAQAccordion from '../components/home/FAQAccordion';
import InteractiveGlobe from '../components/home/InteractiveGlobe';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import WorkflowTimeline from '../components/home/WorkflowTimeline';
import TechStackGrid from '../components/home/TechStackGrid';
import ServiceFeatureCard from '../components/home/ServiceFeatureCard';
import IndustrySolutionsGrid from '../components/home/IndustrySolutionsGrid';

// Data file for maintainability
const webDevData = {
  hero: {
    title: "Custom Websites. Lightning Fast. Pixel Perfect.",
    subtitle: "From WordPress to React, from Shopify to Laravel — we build beautiful, blazing-fast websites that convert.",
    ctaPrimary: "Get a Free Mockup",
    ctaSecondary: "See Our Work",
    stats: [
      { value: "2.5s", label: "Avg. Load Time" },
      { value: "95+", label: "Lighthouse Score" },
      { value: "240+", label: "Projects Delivered" }
    ]
  },
  services: [
    {
      icon: <Figma className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Strategic design thinking with modern, trend-based interfaces",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern frameworks for interactive, responsive experiences",
      features: ["React/Vue", "Next.js", "Tailwind CSS", "Performance Optimization"],
      gradient: "from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable server architecture and API development",
      features: ["Node.js/Python", "REST/GraphQL", "Database Design", "Authentication"],
      gradient: "from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store development and optimization",
      features: ["Shopify/WooCommerce", "Payment Gateways", "Inventory Systems", "Checkout Flows"],
      gradient: "from-red-100 to-red-50 dark:from-red-900/50 dark:to-red-900/30"
    },
    {
      icon: <FaWordpress className="w-8 h-8" />,
      title: "CMS Development",
      description: "Content management systems tailored to your needs",
      features: ["WordPress", "Webflow", "Custom CMS", "Editor Experience"],
      gradient: "from-yellow-100 to-yellow-50 dark:from-yellow-900/50 dark:to-yellow-900/30"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Website Optimization",
      description: "Performance, security and SEO enhancements",
      features: ["Speed Optimization", "Security Hardening", "SEO Setup", "Accessibility"],
      gradient: "from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-900/30"
    }
  ],
  whyChooseUs: [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Strategic Design",
      description: "Every pixel serves a purpose in our conversion-focused designs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Blazing Fast",
      description: "Average load times under 2.5s with optimized assets"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Fully Responsive",
      description: "Perfect rendering on all devices and screen sizes"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO-Ready",
      description: "Built-in SEO best practices from day one"
    },
    {
      icon: <GitPullRequest className="w-6 h-6" />,
      title: "Scalable Code",
      description: "Modular architecture that grows with your business"
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Real human assistance when you need it"
    }
  ],
  techStack: {
    frontend: [
      { name: "React", icon: <FaReact className="w-8 h-8" /> },
      { name: "Vue", icon: <SiVuedotjs className="w-8 h-8" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> }
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
      { name: "Python", icon: <SiPython className="w-8 h-8" /> },
      { name: "PHP", icon: <SiPhp className="w-8 h-8" /> },
      { name: "Laravel", icon: <SiLaravel className="w-8 h-8" /> },
      { name: "Express", icon: <Terminal className="w-8 h-8" /> }
    ],
    cms: [
      { name: "WordPress", icon: <FaWordpress className="w-8 h-8" /> },
      { name: "Shopify", icon: <FaShopify className="w-8 h-8" /> },
      { name: "Webflow", icon: <SiWebflow className="w-8 h-8" /> },
      { name: "Wix", icon: <SiWix className="w-8 h-8" /> },
      { name: "Custom CMS", icon: <LayoutTemplate className="w-8 h-8" /> }
    ],
    infra: [
      { name: "Vercel", icon: <SiNextdotjs className="w-8 h-8" /> },
      { name: "AWS", icon: <SiAew className="w-8 h-8" /> },
      { name: "Cloudflare", icon: <SiCloudflare className="w-8 h-8" /> },
      { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> }
    ]
  },
  caseStudies: [
    {
      title: "E-commerce Platform Redesign",
      challenge: "Fashion brand needed modern redesign to reduce bounce rates",
      solution: "Implemented React storefront with Shopify backend",
      results: "Increased conversions by 110% with 1.8s load time",
      metrics: ["110% conversion boost", "1.8s load time", "Mobile-first design"],
      logo: "/logos/fashion-brand.svg",
      platform: "React + Shopify",
      industry: "Fashion E-commerce"
    },
    {
      title: "Educational Portal Development",
      challenge: "Online learning platform required scalable course system",
      solution: "Custom Laravel backend with Vue.js frontend",
      results: "Handled 10x user growth with 99.99% uptime",
      metrics: ["10x user capacity", "99.99% uptime", "Interactive lessons"],
      logo: "/logos/edtech.svg",
      platform: "Vue.js + Laravel",
      industry: "EdTech"
    },
    {
      title: "Corporate Website Revamp",
      challenge: "Enterprise needed modern design reflecting their brand",
      solution: "WordPress VIP with custom React components",
      results: "Achieved 95+ Lighthouse score across all pages",
      metrics: ["95+ score", "3x faster", "WCAG compliant"],
      logo: "/logos/corporate.svg",
      platform: "WordPress + React",
      industry: "Corporate"
    }
  ],
  workflow: [
    {
      title: "Discovery",
      description: "Understand your goals, audience and requirements",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Wireframing",
      description: "Create UX flows and information architecture",
      icon: <LayoutTemplate className="w-6 h-6" />
    },
    {
      title: "UI Design",
      description: "Pixel-perfect mockups in your brand style",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      title: "Development",
      description: "Build with clean, maintainable code",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Testing",
      description: "Cross-browser and device testing",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Launch",
      description: "Deployment and performance optimization",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Support",
      description: "Ongoing maintenance and updates",
      icon: <LifeBuoy className="w-6 h-6" />
    }
  ],
  industries: [
    {
      name: "E-commerce",
      description: "High-converting online stores",
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      name: "SaaS",
      description: "Web applications and dashboards",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      name: "Education",
      description: "Learning platforms and portals",
      icon: <Type className="w-8 h-8" />
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions",
      icon: <LifeBuoy className="w-8 h-8" />
    },
    {
      name: "Portfolios",
      description: "Showcase creative work",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      name: "Local Business",
      description: "Service-based websites",
      icon: <MapPin className="w-8 h-8" />
    }
  ],
  faqs: [
    {
      question: "What platforms do you work with?",
      answer: "We're platform-agnostic! From WordPress to custom React applications, we choose the best technology for your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary based on complexity. A basic website takes 4-6 weeks, while complex web applications may take 3-6 months."
    },
    {
      question: "Do you provide hosting and maintenance?",
      answer: "Yes, we offer managed hosting solutions and maintenance packages to keep your site secure and up-to-date."
    },
    {
      question: "Can I update the website myself?",
      answer: "Absolutely! We build with user-friendly CMS options or provide training for custom solutions."
    },
    {
      question: "What about SEO and mobile optimization?",
      answer: "Both are included standard in all our projects. We ensure your site ranks well and works perfectly on all devices."
    }
  ],
  testimonials: [
    {
      quote: "Our new website increased leads by 180% while cutting bounce rates in half. The team delivered beyond our expectations.",
      author: "Sarah Johnson",
      role: "Marketing Director, FashionCo",
      rating: 5
    },
    {
      quote: "From complex API integrations to pixel-perfect designs, they handled every detail with expertise. Truly a partnership.",
      author: "Michael Chen",
      role: "CTO, EduTech Startup",
      rating: 5
    },
    {
      quote: "After struggling with slow load times, they optimized our site to load in 1.8s. Our conversions have never been higher.",
      author: "David Wilson",
      role: "E-commerce Manager",
      rating: 5
    }
  ],
  pricing: {
    basic: {
      price: "$2,499",
      features: [
        "Custom WordPress Website",
        "5-7 Page Design",
        "Mobile Responsive",
        "Basic SEO Setup",
        "1 Month Support"
      ],
      bestFor: "Small businesses, startups"
    },
    professional: {
      price: "$5,999",
      features: [
        "Custom React/Next.js Site",
        "10-15 Page Design",
        "CMS Integration",
        "Advanced SEO",
        "3 Months Support",
        "Performance Optimization"
      ],
      bestFor: "Growing businesses, professionals"
    },
    enterprise: {
      price: "$12,999+",
      features: [
        "Custom Web Application",
        "Unlimited Pages",
        "E-commerce Functionality",
        "API Integrations",
        "6 Months Support",
        "Dedicated Team"
      ],
      bestFor: "Large businesses, complex needs"
    }
  },
  globalReach: [
    { country: "USA", clients: 45 },
    { country: "Canada", clients: 28 },
    { country: "UK", clients: 32 },
    { country: "Australia", clients: 18 },
    { country: "India", clients: 56 },
    { country: "Germany", clients: 22 }
  ]
};

// Error Boundary (same as before)
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Please try refreshing the page or contact support if the problem persists.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Testimonial Carousel Component (updated design)
const TestimonialCarousel: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === webDevData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? webDevData.testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
      >
        <div className="flex mb-4">
          {[...Array(webDevData.testimonials[currentIndex].rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-xl text-gray-800 dark:text-gray-100 mb-6">"{webDevData.testimonials[currentIndex].quote}"</p>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="font-bold">{webDevData.testimonials[currentIndex].author}</p>
          <p className="text-sm">{webDevData.testimonials[currentIndex].role}</p>
        </div>
      </motion.div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        <div className="flex items-center space-x-2">
          {webDevData.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-blue-600 dark:bg-blue-400 w-4' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
});

// Pricing Cards Component
const PricingCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {Object.entries(webDevData.pricing).map(([plan, details], i) => (
        <motion.div
          key={plan}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
            plan === 'professional' ? 'ring-2 ring-blue-500 transform hover:scale-[1.02]' : ''
          }`}
        >
          {plan === 'professional' && (
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MOST POPULAR
            </div>
          )}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 capitalize">{plan}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">{details.price}</span>
            {details.price.includes('+') && (
              <span className="text-gray-500 dark:text-gray-400 ml-1">starting at</span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{details.bestFor}</p>
          <ul className="space-y-3 mb-8">
            {details.features.map((feature, j) => (
              <li key={j} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            variant={plan === 'professional' ? 'primary' : 'outline'}
            size="lg"
            className={`w-full ${plan === 'professional' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' : 'border-gray-300 dark:border-gray-700'}`}
          >
            Get Started
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

// Main HomePage Component
const WebDevHomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10 dark:opacity-5" />
              <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
                  >
                    We Build Websites That Build Businesses
                  </motion.div>
                  
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    {webDevData.hero.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
                    {webDevData.hero.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-16">
                    <Button
                      variant="primary"
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      {webDevData.hero.ctaPrimary}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {webDevData.hero.ctaSecondary}
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-8">
                    {webDevData.hero.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mr-3">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20, rotate: 2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative hidden lg:block"
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    
                    {/* Floating device mockups */}
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-white dark:from-blue-900 dark:to-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
                      className="absolute top-1/3 right-1/4 w-40 h-64 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-t-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity, delay: 0.8 }}
                      className="absolute bottom-1/4 right-1/3 w-48 h-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    />
                    
                    {/* Interactive globe */}
                    <div className="p-12">
                      <InteractiveGlobe />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>

          {/* Services Section */}
          <section id="services" className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/dot-pattern.svg')] bg-[size:20px_20px] opacity-10 dark:opacity-5" />
              <div className="absolute top-1/3 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
            </div>

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
                  transition={{ type: "spring" }}
                  className="inline-block mb-6"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white text-sm font-bold tracking-wide shadow-lg shadow-blue-400/30">
                    OUR SERVICES
                  </div>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Web Solutions</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  End-to-end services to take your digital presence to the next level
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webDevData.services.map((service, i) => (
                  <ServiceFeatureCard key={i} service={service} index={i} />
                ))}
              </div>
            </Container>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Why <span className="text-blue-600 dark:text-blue-400">Choose Us</span>?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We go beyond just building websites - we create digital experiences that convert
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {webDevData.whyChooseUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                      {React.cloneElement(item.icon, { className: "w-6 h-6 text-blue-600 dark:text-blue-400" })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Tech Stack Section */}
          <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Our <span className="text-blue-600 dark:text-blue-400">Technology Stack</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We use modern, battle-tested technologies to build future-proof solutions
                </p>
              </motion.div>

              <TechStackGrid techStack={webDevData.techStack} />
            </Container>
          </section>

          {/* Case Studies Section */}
          <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Recent <span className="text-blue-600 dark:text-blue-400">Projects</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how we've helped businesses transform their digital presence
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {webDevData.caseStudies.map((caseStudy, i) => (
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

          {/* Workflow Section */}
          <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Our <span className="text-blue-600 dark:text-blue-400">Process</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  A transparent, collaborative approach to building your perfect website
                </p>
              </motion.div>

              <WorkflowTimeline workflow={webDevData.workflow} />
            </Container>
          </section>

          {/* UI/UX Showcase Section */}
          <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Design <span className="text-blue-600 dark:text-blue-400">Showcase</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how we transform outdated designs into modern, high-converting experiences
                </p>
              </motion.div>

              <BeforeAfterSlider />
            </Container>
          </section>

          {/* Industries Section */}
          <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Solutions for <span className="text-blue-600 dark:text-blue-400">Every Industry</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Customized web solutions tailored to your specific business needs
                </p>
              </motion.div>

              <IndustrySolutionsGrid industries={webDevData.industries} />
            </Container>
          </section>

          {/* Pricing Section */}
          <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Simple, <span className="text-blue-600 dark:text-blue-400">Transparent</span> Pricing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  No hidden fees. Quality work at fair prices.
                </p>
              </motion.div>

              <PricingCards />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Need something custom?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    We offer completely custom solutions tailored to your specific requirements and budget.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/50"
                  >
                    Get a Custom Quote
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>

          {/* Testimonials Section */}
          <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Don't just take our word for it - hear from our satisfied customers
                </p>
              </motion.div>

              <TestimonialCarousel />
            </Container>
          </section>

          {/* Global Reach Section */}
          <section className="py-32 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  We Work <span className="text-blue-600 dark:text-blue-400">Globally</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Serving clients across multiple continents with localized solutions
                </p>
              </motion.div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Based in India, Serving Worldwide
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      We've delivered projects for clients in over 15 countries, with a focus on quality and timely delivery regardless of location.
                    </p>
                    <ul className="space-y-3">
                      {webDevData.globalReach.map((country, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-3">
                            <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">{country.country}</span>
                          <span className="ml-auto bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
                            {country.clients}+ clients
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 lg:h-96">
                    <InteractiveGlobe withMarkers={true} />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* FAQ Section */}
          <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Everything you need to know about our web development services
                </p>
              </motion.div>

              <FAQAccordion faqs={webDevData.faqs} />
            </Container>
          </section>

          {/* Final CTA Section */}
          <section className="py-32 bg-gradient-to-br from-blue-600 to-cyan-500 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise-pattern.png')] opacity-10" />
              <div className="absolute top-1/4 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
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
                  Let's Build Something <span className="text-cyan-200">Amazing</span> Together
                </h2>
                <p className="text-xl text-blue-100 mb-12">
                  Whether you need a simple website or a complex web application, we have the expertise to bring your vision to life.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-white hover:bg-gray-100 text-blue-600 px-12 shadow-lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white/30 hover:bg-white/10 px-12"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            </Container>
          </section>
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default WebDevHomePage;