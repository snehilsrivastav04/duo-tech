import { FC } from 'react';
import {
  Zap, Shield, GitBranch, Server, Users, Clock, Globe2, Terminal, Code, LayoutTemplate, Phone, Mail, PenTool, Globe
} from 'lucide-react';
import { FaWhatsapp, FaSms, FaRegLightbulb } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  textClass: string;
  descClass: string;
}

interface CustomerLogo {
  name: string;
  logo: string;
}

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: string[];
  logo: string;
}

interface FeatureComparison {
  headers: string[];
  rows: string[][];
  competitors: string[][];
}

interface FAQ {
  question: string;
  answer: string;
}

interface UseCase {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface HomeData {
  features: Feature[];
  customerLogos: CustomerLogo[];
  caseStudies: CaseStudy[];
  featureComparison: FeatureComparison;
  faqs: FAQ[];
  useCases: UseCase[];
  services: Service[];
  testimonials: Testimonial[];
  stats: Stat[];
}

export const homeData: HomeData = {
  features: [
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 99.9% uptime guarantee',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60',
      textClass: 'text-yellow-700 dark:text-yellow-300',
      descClass: 'text-blue-600 dark:text-blue-200',
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Enterprise Security',
      description: 'End-to-end encryption and compliance with global standards',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60',
      textClass: 'text-blue-700 dark:text-blue-300',
      descClass: 'text-blue-600 dark:text-blue-200',
    },
    {
      icon: <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Seamless Integration',
      description: 'Connect with your existing tools in minutes',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60',
      textClass: 'text-blue-700 dark:text-blue-300',
      descClass: 'text-blue-600 dark:text-blue-200',
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: 'Global Infrastructure',
      description: '150+ countries with local data centers for low latency',
      gradient: 'from-blue-500 to-cyan-500 dark:from-blue-900/80 dark:to-cyan-900/60',
      textClass: 'text-blue-700 dark:text-blue-300',
      descClass: 'text-blue-600 dark:text-blue-200',
    }
  ],
  customerLogos: [
    { name: 'TechCorp', logo: '/logos/techcorp.svg' },
    { name: 'Innova', logo: '/logos/innova.svg' },
    { name: 'GlobalSoft', logo: '/logos/globalsoft.svg' },
    { name: 'DataSystems', logo: '/logos/datasystems.svg' },
    { name: 'CloudNine', logo: '/logos/cloudnine.svg' },
    { name: 'NextWave', logo: '/logos/nextwave.svg' },
    { name: 'DigitalFirst', logo: '/logos/digitalfirst.svg' }
  ],
  caseStudies: [
    {
      title: 'E-commerce Platform Scaling',
      challenge: 'A leading e-commerce site needed to handle 10x traffic during holiday sales',
      solution: 'Implemented our auto-scaling infrastructure with global CDN',
      results: '300% faster load times, 99.99% uptime during peak',
      metrics: ['3s → 0.8s load time', '99.99% uptime', '40% conversion increase'],
      logo: '/logos/ecom-case.svg'
    },
    {
      title: 'Fintech Compliance Solution',
      challenge: 'Financial startup needed secure global messaging with audit trails',
      solution: 'Deployed our encrypted communication platform with full logging',
      results: 'Achieved regulatory compliance in 12 countries',
      metrics: ['100% audit compliance', '50% cost reduction', '30 markets served'],
      logo: '/logos/fintech-case.svg'
    }
  ],
  featureComparison: {
    headers: ['Feature', 'Starter', 'Professional', 'Enterprise'],
    rows: [
      ['API Requests', '10,000/mo', '50,000/mo', 'Unlimited'],
      ['Support', 'Email', 'Priority', '24/7 Dedicated'],
      ['Uptime SLA', '99.9%', '99.95%', '99.99%'],
      ['Max Users', '10', '50', 'Unlimited'],
      ['Analytics', 'Basic', 'Advanced', 'Custom'],
      ['Security', 'Standard', 'Enhanced', 'Enterprise']
    ],
    competitors: [
      ['Competitor A', '5,000/mo', '25,000/mo', 'Contact'],
      ['Competitor B', 'Unlimited', 'Unlimited', 'Unlimited']
    ]
  },
  faqs: [
    {
      question: 'How quickly can I get started?',
      answer: 'Most customers are up and running in under 15 minutes with our quick-start guides and pre-built templates.'
    },
    {
      question: 'What regions do you support?',
      answer: 'We have data centers in North America, Europe, Asia, and Australia with 150+ points of presence worldwide.'
    },
    {
      question: 'Can I upgrade or downgrade plans?',
      answer: 'Yes, you can change plans at any time with no downtime or service interruption.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Our enterprise team can design fully custom solutions tailored to your specific requirements.'
    }
  ],
  useCases: [
    {
      title: 'For Developers',
      icon: <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Powerful APIs and SDKs with comprehensive documentation to integrate in minutes',
      features: ['REST API', 'Webhooks', 'Client SDKs', 'Sandbox Environment']
    },
    {
      title: 'For Product Teams',
      icon: <LayoutTemplate className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Pre-built UI components and templates to accelerate your product development',
      features: ['React Components', 'Design System', 'Templates', 'Custom Themes']
    },
    {
      title: 'For Startups',
      icon: <FaRegLightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      description: 'Scalable infrastructure that grows with you from MVP to global scale',
      features: ['Free Tier', 'Pay-as-you-grow', 'Startup Discounts', 'Mentorship']
    }
  ],
  services: [
    {
        title: 'MoneySaver Export Account',
        icon: <Globe className="w-6 h-6" />,
        description: 'Open a virtual account in 200+ countries, save up to 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments',
        features: ['Receive international wire transfers with ease with a smart account'],
        cta: 'Sign Up',
        ctaLink: '#',
        bgColor: 'bg-white',
        textColor: 'text-black',
        iconColor: 'text-black'
    },
    {
        title: 'Turbo UPI',
        icon: <Zap className="w-6 h-6" />,
        description: 'Experience a 5X faster checkout, achieve a 10% success rate boost, all without any redirections to UPI apps.',
        features: ['Get India\'s fastest one-step UPI payment solution for businesses'],
        cta: 'Sign Up',
        ctaLink: '#',
        bgColor: 'bg-gray-100',
        textColor: 'text-black',
        iconColor: 'text-black'
    }
  ],
  testimonials: [
    {
      quote: 'This platform transformed our business operations. The API integration was seamless and the performance is outstanding.',
      author: 'Vaibhav Jain',
      role: 'CTO',
      rating: 5,
    },
    {
      quote: 'We reduced our operational costs by 40% while improving delivery times. The analytics dashboard is incredibly insightful.',
      author: 'Swapnil Kumar',
      role: 'Product Director',
      rating: 5,
    },
    {
      quote: 'The customer support team is exceptional. They helped us migrate our legacy systems with zero downtime.',
      author: 'Neeraj Laishram',
      role: 'Engineering Lead',
      rating: 4,
    },
  ],
  stats: [
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Guaranteed reliability for your business',
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '2.5B+',
      label: 'Requests',
      description: 'Processed every month across our network',
      icon: <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '150+',
      label: 'Countries',
      description: 'With local infrastructure for low latency',
      icon: <Globe2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Expert help whenever you need it',
      icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
  ],
};
