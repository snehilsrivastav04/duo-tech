
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageSquare, Smartphone, Zap, Shield, Clock, 
  Check, ArrowRight, Mail, Hash, BarChart2,
  Code, Server, Users, Globe, CreditCard, Calendar,
  FileText, Lock, Download, Copy, Play,
  GitBranch,
  RefreshCw, 
  TestTube2,
  Link,
  Send,
  Route,
  Inbox,
  CheckCircle,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
} from 'lucide-react';
import { FaWhatsapp, FaGoogle, FaSms } from 'react-icons/fa';
import { SiZapier, SiShopify, SiWordpress, SiHubspot, SiZoho } from 'react-icons/si';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD, createFAQJsonLD } from '../lib/meta';
import {
  ApiDashboard,
  FeaturesGrid,
  FinalCta,
  Hero,
  IndustryUseCases,
  Metrics,
  SmsTypes,
  Templates,
  Workflow,
} from '../components/sms';

// Data for SMS Gateway Page
const smsData = {
  hero: {
    title: "Powerful SMS Gateway for Instant Business Communication",
    subtitle: "Send OTPs, offers, updates, alerts, reminders — with 99.99% delivery and blazing-fast routing.",
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Get API Docs",
    phoneContent: [
      { type: "otp", text: "Your OTP is 457812. Valid for 5 mins. - MyApp" },
      { type: "alert", text: "Alert: Your order #12345 has shipped! Track at example.com/track" },
      { type: "promo", text: "FLASH SALE! 50% OFF today only. Shop now: example.com/sale" }
    ]
  },
  features: [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "OTP & 2FA Verification",
      description: "Secure authentication with instant delivery",
      color: "text-purple-500"
    },
    {
      icon: <FaSms className="w-6 h-6" />,
      title: "Promotional Bulk SMS",
      description: "Reach thousands instantly with offers",
      color: "text-blue-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Transactional Updates",
      description: "Order confirmations & alerts",
      color: "text-green-500"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Reminders",
      description: "Reduce no-shows with timely SMS",
      color: "text-orange-500"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "SMS Campaign Analytics",
      description: "Track opens, clicks & conversions",
      color: "text-cyan-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Unicode Support",
      description: "Send in any language",
      color: "text-red-500"
    }
  ],
  smsTypes: {
    transactional: {
      title: "Transactional SMS",
      description: "Time-sensitive notifications like OTPs, alerts, and order updates that are delivered 24/7 even to DND numbers.",
      features: [
        "DLT-compliant templates",
        "High priority routing",
        "Instant delivery",
        "DND bypass"
      ],
      examples: [
        "Your OTP is 784512 - MyApp",
        "Your order #123 has shipped! Track: bit.ly/track123",
        "Your payment of ₹1500 was successful"
      ]
    },
    promotional: {
      title: "Promotional SMS",
      description: "Marketing messages, offers and promotions delivered to non-DND numbers between 9AM-9PM as per TRAI regulations.",
      features: [
        "Bulk sending",
        "Personalization",
        "Link tracking",
        "NDND filtering"
      ],
      examples: [
        "FLASH SALE! 50% OFF today - Shop now",
        "Hi [Name], your exclusive offer awaits!",
        "Refer friends & get ₹500 credit!"
      ]
    }
  },
  apiFeatures: [
    {
      title: "RESTful API",
      description: "Simple integration with JSON payloads",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Webhook Support",
      description: "Real-time delivery callbacks",
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: "Retry Logic",
      description: "Automatic resend attempts",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      title: "Sandbox Mode",
      description: "Test before going live",
      icon: <TestTube2 className="w-8 h-8" />
    }
  ],
  dashboardFeatures: [
    "Campaign management",
    "Delivery reports",
    "Contact management",
    "Bulk CSV upload",
    "DLT template management",
    "Real-time analytics"
  ],
  workflow: [
    {
      step: 1,
      title: "Connect",
      description: "Via API or dashboard",
      icon: <Link className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Submit",
      description: "Numbers & message content",
      icon: <Send className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Route",
      description: "Auto-select best channel",
      icon: <Route className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Deliver",
      description: "Through SMSC partners",
      icon: <Inbox className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Confirm",
      description: "Get delivery reports",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ],
  industries: [
    {
      name: "E-commerce",
      useCases: ["Order confirmations", "Shipping updates", "OTP logins"],
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      name: "Healthcare",
      useCases: ["Appointment reminders", "Medicine alerts", "Test results"],
      icon: <HeartPulse className="w-8 h-8" />
    },
    {
      name: "Banking",
      useCases: ["OTP authentication", "Fraud alerts", "Payment confirmations"],
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      name: "Education",
      useCases: ["Exam alerts", "Fee reminders", "Class updates"],
      icon: <GraduationCap className="w-8 h-8" />
    }
  ],
  metrics: [
    {
      value: "99.9%",
      label: "Delivery Rate",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      value: "<2s",
      label: "Avg. Delivery Time",
      icon: <Zap className="w-8 h-8" />
    },
    {
      value: "99.99%",
      label: "API Uptime",
      icon: <Server className="w-8 h-8" />
    },
    {
      value: "1M+",
      label: "Monthly Volume",
      icon: <BarChart2 className="w-8 h-8" />
    }
  ],
  securityFeatures: [
    "TRAI DLT compliance",
    "End-to-end encryption",
    "Sender ID verification",
    "Opt-out management",
    "Audit logs"
  ],
  integrations: [
    { name: "Zoho", icon: <SiZoho className="w-8 h-8" /> },
    { name: "HubSpot", icon: <SiHubspot className="w-8 h-8" /> },
    { name: "Shopify", icon: <SiShopify className="w-8 h-8" /> },
    { name: "WordPress", icon: <SiWordpress className="w-8 h-8" /> },
    { name: "Zapier", icon: <SiZapier className="w-8 h-8" /> }
  ],
  templates: [
    {
      name: "OTP Template",
      content: "Your OTP is {123456}. Valid for {5} minutes. Do not share with anyone.",
      type: "transactional"
    },
    {
      name: "Order Update",
      content: "Hi {Customer}, your order #{OrderID} has been {shipped}. Track here: {URL}",
      type: "transactional"
    },
    {
      name: "Promo Offer",
      content: "Hi {Name}, enjoy {20%} off on your next purchase! Use code {OFFER20}. Valid till {date}",
      type: "promotional"
    }
  ],
  faqs: [
    {
      question: "How fast are messages delivered?",
      answer: "Most messages are delivered within 2 seconds, with our high-priority routing ensuring critical messages like OTPs are delivered instantly."
    },
    {
      question: "What's the difference between transactional and promotional SMS?",
      answer: "Transactional SMS are time-sensitive notifications (OTPs, alerts) delivered 24/7. Promotional SMS are marketing messages sent 9AM-9PM to non-DND numbers only."
    },
    {
      question: "Is your service DLT compliant?",
      answer: "Yes, we're fully compliant with TRAI DLT regulations. We'll help you register your sender ID and templates."
    }
  ]
};

const SMSGatewayPage = () => {
  useEffect(() => {
    // Set comprehensive SEO meta tags for SMS Services page
    setAdvancedMetaTags({
      title: 'Bulk SMS Gateway Service Provider India | 99.9% Delivery Rate | Duotech Solutions',
      description: 'Best SMS gateway service in India with 99.9% delivery rate. Send bulk SMS, OTPs, promotional messages, transactional alerts. DLT compliant. API integration in minutes. Call +91-8800722190.',
      keywords: 'sms gateway india, bulk sms service provider, sms api, transactional sms, promotional sms, otp delivery, dlt compliant sms, sms marketing, sms gateway api, best sms provider india, sms service noida',
      image: 'https://www.duotechsolutions.in/images/sms-gateway-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/sms-services',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'SMS Services'
    });

    // Service Schema for SMS Gateway
    const smsServiceSchema = createServiceJsonLD({
      name: 'Bulk SMS Gateway Service',
      description: 'Professional SMS gateway service with 99.9% delivery rate, DLT compliance, and instant API integration. Send OTPs, promotional messages, transactional alerts, and bulk SMS campaigns.',
      image: 'https://www.duotechsolutions.in/images/sms-gateway-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(smsServiceSchema);

    // Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'sms-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'SMS Services', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    // FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'sms-faq-json-ld';
    const faqData = createFAQJsonLD([
      {
        question: 'What is the SMS delivery rate?',
        answer: 'Duotech Solutions provides 99.9% SMS delivery rate with average delivery time of less than 2 seconds.'
      },
      {
        question: 'Is your SMS gateway DLT compliant?',
        answer: 'Yes, our SMS gateway is fully TRAI DLT compliant with proper sender ID verification and opt-out management.'
      },
      {
        question: 'Can I send SMS at scale?',
        answer: 'Yes, our platform can handle 1M+ messages monthly with 99.99% API uptime and no throttling.'
      },
      {
        question: 'How quickly can I integrate the SMS API?',
        answer: 'You can integrate our SMS API in minutes with detailed documentation, code samples, and dedicated support.'
      }
    ]);
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    return () => {
      const scripts = document.querySelectorAll('#sms-breadcrumb-json-ld, #sms-faq-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <MainLayout>
      <Hero data={smsData.hero} />
      <FeaturesGrid features={smsData.features} />
      <SmsTypes data={smsData.smsTypes} />
      <ApiDashboard apiFeatures={smsData.apiFeatures} dashboardFeatures={smsData.dashboardFeatures} />
      <Workflow workflow={smsData.workflow} />
      <IndustryUseCases industries={smsData.industries} />
      <Metrics metrics={smsData.metrics} />
      <Templates templates={smsData.templates} />
      <FinalCta />
    </MainLayout>
  );
};

export default SMSGatewayPage;
