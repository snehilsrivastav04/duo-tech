
import { 
  MessageSquare, ShoppingCart, BarChart2, Clock, Zap, Users, LayoutTemplate, GitBranch, Terminal, Code, Smartphone, Briefcase, Mail, Search, Rocket, Box, ArrowUpRight
} from 'lucide-react';
import { FaRegLightbulb } from 'react-icons/fa';
import { SiShopify, SiWordpress, SiZoho, SiHubspot, SiSalesforce } from 'react-icons/si';

// WhatsApp Brand Colors (add dark mode variants)
export const whatsappColors = {
  primary: '#25D366',
  secondary: '#128C7E',
  dark: '#075E54',
  light: '#DCF8C6',
  accent: '#34B7F1',
  darkMode: {
    primary: '#1FA959',
    secondary: '#0F7A6C',
    dark: '#063E38',
    light: '#1E2D40',
    accent: '#2D9DCF'
  }
};

// Data for the WhatsApp API page
export const whatsappData = {
  hero: {
    title: "Automated. Verified. 24/7 WhatsApp Conversations.",
    subtitle: "Seamless WhatsApp API integration for support, marketing, and sales.",
    ctaPrimary: "Book Free Demo",
    ctaSecondary: "See Pricing",
    features: [
      "Get Green Tick Verification",
      "99.9% Delivery Rate",
      "AI-Powered Chatbots",
      "CRM Integration"
    ]
  },
  capabilities: [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Auto Replies & Smart Bots",
      description: "Automate responses to common questions with AI-powered bots"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Cart Abandonment Reminders",
      description: "Recover lost sales with personalized WhatsApp reminders"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Order Updates & Invoices",
      description: "Send real-time order confirmations and payment receipts"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Booking Confirmations",
      description: "Automate appointment scheduling and reminders"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Broadcast Campaigns",
      description: "Send approved template messages to your audience"
    },
    {
      icon: <FaRegLightbulb className="w-8 h-8" />,
      title: "AI-Powered FAQs",
      description: "Natural language processing for customer queries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Agent Handover",
      description: "Seamlessly transfer to human agents when needed"
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Media & Catalog Support",
      description: "Send images, videos, PDFs and product catalogs"
    }
  ],
  useCases: {
    categories: [
      { name: "E-commerce", icon: <ShoppingCart className="w-5 h-5" /> },
      { name: "Customer Support", icon: <MessageSquare className="w-5 h-5" /> },
      { name: "Services", icon: <Clock className="w-5 h-5" /> },
      { name: "Education", icon: <FaRegLightbulb className="w-5 h-5" /> },
      { name: "Finance", icon: <BarChart2 className="w-5 h-5" /> }
    ],
    examples: {
      "E-commerce": [
        "COD payment confirmations",
        "Shipping updates with tracking",
        "Personalized product recommendations",
        "Post-purchase feedback collection"
      ],
      "Customer Support": [
        "Instant ticket creation",
        "Automated issue resolution",
        "Live agent transfer",
        "Customer satisfaction surveys"
      ],
      "Services": [
        "Appointment scheduling",
        "Booking confirmations",
        "Service reminders",
        "Feedback collection"
      ],
      "Education": [
        "Assignment reminders",
        "Course updates",
        "Fee payment reminders",
        "Parent-teacher communication"
      ],
      "Finance": [
        "Account statements",
        "Payment reminders",
        "Fraud alerts",
        "Investment updates"
      ]
    }
  },
  integrations: {
    crms: [
      { name: "Zoho", icon: <SiZoho className="w-8 h-8" /> },
      { name: "HubSpot", icon: <SiHubspot className="w-8 h-8" /> },
      { name: "Salesforce", icon: <SiSalesforce className="w-8 h-8" /> }
    ],
    platforms: [
      { name: "Shopify", icon: <SiShopify className="w-8 h-8" /> },
      { name: "WooCommerce", icon: <SiWordpress className="w-8 h-8" /> },
      { name: "WordPress", icon: <SiWordpress className="w-8 h-8" /> }
    ],
    channels: [
      { name: "Webhooks", icon: <GitBranch className="w-8 h-8" /> },
      { name: "REST APIs", icon: <Terminal className="w-8 h-8" /> },
      { name: "Dialogflow", icon: <MessageSquare className="w-8 h-8" /> }
    ]
  },
  howItWorks: [
    {
      step: 1,
      title: "Connect Meta Business Account",
      description: "Link your Facebook Business Manager to get started"
    },
    {
      step: 2,
      title: "Get Verified",
      description: "We help you get WhatsApp Business API approval"
    },
    {
      step: 3,
      title: "Setup Webhook",
      description: "Configure your callback URL for real-time messaging"
    },
    {
      step: 4,
      title: "Configure Auto Flows",
      description: "Set up your chatbot and automation rules"
    },
    {
      step: 5,
      title: "Go Live",
      description: "Start messaging customers within minutes"
    }
  ],
  metrics: [
    {
      value: "3s",
      label: "Avg. Response Time",
      description: "Lightning fast automated replies"
    },
    {
      value: "95%",
      label: "Bot Accuracy Rate",
      description: "AI understands customer intent"
    },
    {
      value: "99.2%",
      label: "Template Delivery Rate",
      description: "High reliability messaging"
    },
    {
      value: "500K+",
      label: "Monthly Conversations",
      description: "Scalable infrastructure"
    }
  ],
  features: [
    "Verified Green Tick Setup",
    "Session & Template Messages",
    "Click-to-Chat Ads Integration",
    "Media, Buttons & Lists Support",
    "Payment Links via Razorpay/Stripe",
    "Webhooks & Detailed Logs",
    "Smart Retry Logic",
    "Error Handling & Alerts"
  ],
  deliverables: [
    "Ready-to-use WhatsApp API",
    "Pre-approved message templates",
    "AI chatbot setup (Dialogflow or custom)",
    "Admin dashboard with analytics",
    "Comprehensive API documentation",
    "Secure end-to-end deployment",
    "Onboarding & training support",
    "24/7 technical assistance"
  ],
  testimonials: [
    {
      quote: "Our customer response times improved from hours to seconds after implementing this WhatsApp solution. The automated flows handle 80% of queries without human intervention.",
      author: "Priya Sharma",
      role: "Head of CX, UrbanKart",
      rating: 5
    },
    {
      quote: "Getting the green tick verification was seamless with their help. Now our messages have much higher open and conversion rates.",
      author: "Rahul Mehta",
      role: "Founder, HealthFit",
      rating: 5
    },
    {
      quote: "The Shopify integration saved us hundreds of hours. Order confirmations and shipping updates are now fully automated.",
      author: "Neha Patel",
      role: "E-commerce Manager, TrendStyle",
      rating: 4
    }
  ],
  faqs: [
    {
      question: "What's the difference between WhatsApp Business App vs API?",
      answer: "The Business App is for small businesses with basic features. The API is for medium/large businesses needing automation, higher limits, and CRM integrations."
    },
    {
      question: "Can I use this with my Shopify store?",
      answer: "Yes! We have direct Shopify integration for order updates, abandoned cart reminders, and customer support."
    },
    {
      question: "How do I get the green tick verification?",
      answer: "We guide you through the entire process including business verification, compliance checks, and submitting to Meta for approval."
    },
    {
      question: "What happens after 24 hours?",
      answer: "After 24 hours of customer's last message, you can only send template messages until they initiate contact again."
    },
    {
      question: "Do you provide chatbot integration?",
      answer: "Yes, we offer both Dialogflow integration and custom chatbot solutions tailored to your business needs."
    }
  ],
  pricing: {
    starter: {
      price: "₹3,999",
      period: "month",
      features: [
        "1,000 template messages",
        "Basic chatbot setup",
        "Email support",
        "CRM integration (1 platform)"
      ],
      cta: "Start Now"
    },
    professional: {
      price: "₹9,999",
      period: "month",
      popular: true,
      features: [
        "5,000 template messages",
        "Advanced AI chatbot",
        "Priority support",
        "CRM integration (3 platforms)",
        "WhatsApp Green Tick assistance"
      ],
      cta: "Get Started"
    },
    enterprise: {
      price: "Custom",
      period: "",
      features: [
        "Unlimited messages",
        "Custom chatbot development",
        "24/7 dedicated support",
        "Multi-CRM integration",
        "Custom analytics dashboard",
        "API access"
      ],
      cta: "Contact Sales"
    }
  }
};
