import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Mail,
  Zap, Shield, Server, Globe,
  Users, Code, MessageCircle, Phone, Send,
  Check, Star, Play, BarChart3, GitBranch,
  Clock, Globe2, Terminal, LayoutTemplate, PenTool
} from 'lucide-react';
import { FaWhatsapp, FaSms, FaRegLightbulb } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import Container from '../ui/Container';
import Button from '../ui/Button';
import LogoCarousel from './LogoCarousel';
import CaseStudyCard from './CaseStudyCard';
import FAQAccordion from './FAQAccordion';
import { homeData } from '../../data/homeData';
import ErrorBoundary from '../errors/ErrorBoundary';
import ServiceCard from './ServiceCard';

// Simple Testimonial Carousel Component
const TestimonialCarousel: FC<{ testimonials: any[] }> = ({ testimonials }) => (
  <div class="max-w-4xl mx-auto">
    <div class="grid gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-light">
              {testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="font-light text-gray-900 dark:text-white">{testimonial.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
            "{testimonial.quote}"
          </p>
          <div className="flex gap-1 mt-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// Simple Newsletter Form Component
const NewsletterForm: FC = () => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
    <form className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 bg-transparent border-0 text-white placeholder-blue-200/60 focus:outline-none focus:ring-0"
      />
      <Button
        type="submit"
        className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 font-light rounded-lg transition-all duration-300 whitespace-nowrap"
      >
        Subscribe
      </Button>
    </form>
  </div>
);

// Simple Use Case Card Component
const UseCaseCard: FC<{ useCase: any }> = ({ useCase }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300"
  >
    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
      {useCase.icon}
    </div>
    <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
      {useCase.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
      {useCase.description}
    </p>
    <ul className="space-y-2">
      {useCase.features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
          <Check className="w-4 h-4 text-green-500" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

// Simple Developer Section Component
const DeveloperSection: FC = () => (
  <section className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-light mb-6">
            <Code className="w-4 h-4" />
            <span>For Developers</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-6 leading-tight">
            Built for <span className="font-light text-blue-600 dark:text-blue-400">developers</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light mb-8 leading-relaxed">
            Clean, intuitive APIs and comprehensive documentation to get you up and running in minutes.
          </p>
          <div className="space-y-4 mb-8">
            {[
              'RESTful API with predictable resource-oriented URLs',
              'JSON requests and responses with standard HTTP response codes',
              'Authentication via API keys',
              'Comprehensive documentation with code samples'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 dark:text-gray-300 font-light">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/docs">
              <Button className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-light rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 inline-flex items-center gap-2">
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/api-keys">
              <Button className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-light rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                Get API Keys
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="font-mono text-sm">
              <div className="text-blue-200">// Send SMS in one request</div>
              <div className="mt-4">
                <div className="text-blue-200">fetch(<span className="text-green-400">'https://api.example.com/sms'</span>, { '{' }</div>
                <div className="ml-4">method: <span className="text-green-400">'POST'</span>,</div>
                <div className="ml-4">headers: { '{' }</div>
                <div className="ml-8">Authorization: <span className="text-green-400">'Bearer your_api_key'</span>,</div>
                <div className="ml-8">Content-Type: <span className="text-green-400">'application/json'</span></div>
                <div className="ml-4">{'}'}</div>
                <div className="ml-4">body: JSON.stringify({ '{' }</div>
                <div className="ml-8">to: <span className="text-green-400">'+1234567890'</span>,</div>
                <div className="ml-8">message: <span className="text-green-400">'Your verification code is 123456'</span></div>
                <div className="ml-4">{'}'})</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

// Features Section Component
const FeaturesSection: FC = () => (
  <section className="py-40 bg-gray-50 dark:bg-gray-900">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Why choose <span className="font-light text-blue-600 dark:text-blue-400">our platform</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto">
          Enterprise-grade features designed for scale and reliability
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {homeData.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-light text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

// Stats Section Component
const StatsSection: FC = () => (
  <section className="py-24 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {homeData.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl lg:text-4xl font-light text-gray-900 dark:text-white mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-light text-gray-600 dark:text-gray-400 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500 font-light">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

const ServicesSection: FC = () => (
    <section id="services" className="py-40 bg-white dark:bg-gray-950 relative overflow-hidden">
    <Container className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 dark:text-white mb-8 leading-tight">
          Comprehensive <span className="font-light text-blue-600 dark:text-blue-400">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-extralight max-w-2xl mx-auto leading-relaxed">
          End-to-end communication and digital solutions for your business
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {homeData.services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <Link to="/services">
          <Button
            variant="primary"
            size="lg"
            className="px-10 py-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-light text-sm tracking-wide rounded-full shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center gap-2.5"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-light">
          Not sure what you need?{' '}
          <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 border-b border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600">
            Get a free consultation
          </Link>
        </p>
      </motion.div>
    </Container>
  </section>
);

const HeroSection: FC = () => (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 overflow-hidden flex items-center justify-center">
    {/* Ultra-subtle paper texture */}
    <div
      className="absolute inset-0 opacity-[0.008]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L100 0 L100 100 L0 100 L0 0 Z' fill='none' stroke='%23000' stroke-width='0.5' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
      }}
    />

    {/* Minimal geometric elements */}
    <motion.div
      animate={{ 
        rotate: [0, 180, 360],
        scale: [1, 1.02, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute top-1/4 left-1/4 w-96 h-96 border border-gray-100 dark:border-gray-800 rounded-full opacity-20"
    />
    
    <motion.div
      animate={{ 
        rotate: [360, 180, 0],
        scale: [1.02, 1, 1.02]
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-gray-100 dark:border-gray-800 rounded-full opacity-15"
    />

    <Container className="relative z-10 px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Sophisticated badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-3 mb-20 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-600 dark:text-gray-400 text-sm font-light tracking-wider"
        >
          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
          <span>Enterprise Communication Platform</span>
        </motion.div>

        {/* Elegant typography */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 dark:text-white leading-[1.15] tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Build <span className="text-blue-600 dark:text-blue-400">connections</span>
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="block mt-4"
          >
            that <span className="text-blue-600 dark:text-blue-400">scale</span> your vision
          </motion.span>
        </motion.h1>

        {/* Refined sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Real-time SMS, WhatsApp, Voice & Email – secure, compliant, and engineered for global scale
        </motion.p>

        {/* Sophisticated CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/get-started">
            <Button className="group px-12 py-4 bg-blue-600 dark:bg-blue-500 text-white font-normal text-sm tracking-wide rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>

          <Link to="/demo">
            <Button className="px-12 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-normal text-sm tracking-wide rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300">
              Schedule Demo
            </Button>
          </Link>
        </motion.div>

        {/* Minimal trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 flex flex-wrap justify-center items-center gap-x-12 gap-y-5 text-sm text-gray-500 dark:text-gray-500 font-light"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>GDPR & ISO 27001</span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-3">
            <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>99.99% Uptime</span>
          </div>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>150+ Countries</span>
          </div>
        </motion.div>
      </div>
    </Container>

    {/* Elegant scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center text-xs text-gray-400 dark:text-gray-600 font-light tracking-widest uppercase"
      >
        <span>Explore</span>
        <ArrowRight className="w-4 h-4 mt-3 rotate-90" />
      </motion.div>
    </motion.div>
  </section>
);

export {
    HeroSection,
    ServicesSection,
    StatsSection,
    FeaturesSection,
    DeveloperSection,
    UseCaseCard,
    NewsletterForm,
    TestimonialCarousel,
};