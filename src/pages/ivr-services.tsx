
import { useState, useEffect } from 'react';
import { Phone, Zap, BarChart3, Clock, Shield, Globe, Headphones, Settings, TrendingUp, Users, Building2, Stethoscope, ShoppingCart, Plane, GraduationCap, Home } from 'lucide-react';
import {
  ProgressBar,
  Hero,
  PricingCalculator,
  FeatureExplorer,
  UseCases,
  WhyChooseUs,
  CTA,
  ContactForm
} from '../components/ivr';
import MainLayout from '../components/layout/MainLayout';

const IVRSolutionsPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Phone,
      title: "Multi-Level IVR Menus",
      description: "Create sophisticated call routing with unlimited menu levels. Design complex decision trees that guide callers efficiently to the right destination.",
      details: ["Unlimited nested menus", "Custom voice prompts", "Dynamic menu options", "Time-based routing"],
      demo: "Press 1 for Sales → Press 1 for New Customers → Press 1 for Product A"
    },
    {
      icon: Settings,
      title: "Smart Call Routing",
      description: "Intelligent routing based on caller input, time of day, agent availability, and custom business rules. Route calls exactly where they need to go.",
      details: ["Skills-based routing", "Priority queuing", "Overflow handling", "Geographic routing"],
      demo: "VIP Customer → Route to Senior Agent → If busy → Queue with priority"
    },
    {
      icon: Headphones,
      title: "Live Agent Escalation",
      description: "Seamless transfer to human agents when needed. Pay only when calls connect to live agents - automated interactions are completely free.",
      details: ["Context preservation", "Warm transfers", "Agent status integration", "Callback options"],
      demo: "Automated inquiry → Need help? → Connect to agent → Start billing"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards showing call volumes, menu selections, wait times, abandonment rates, and agent performance metrics.",
      details: ["Live call monitoring", "Custom reports", "Performance KPIs", "Historical trends"],
      demo: "View live: 45 calls active, 12 in queue, 89% satisfaction, Avg wait: 23s"
    },
    {
      icon: Clock,
      title: "24/7 Automated Service",
      description: "Handle routine inquiries, take messages, collect information, and process transactions around the clock without human intervention.",
      details: ["After-hours support", "Holiday coverage", "Self-service options", "Automated callbacks"],
      demo: "3 AM call → Check balance → Process payment → Send confirmation"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Serve global customers with IVR systems in 12+ Indian languages. Automatic language detection and localized experiences included.",
      details: ["12+ Indian languages", "Auto-detection", "Custom translations", "Regional dialects"],
      demo: "Detect Hindi → \"हिंदी के लिए 1 दबाएं\" → Full Hindi menu"
    },
    {
      icon: Zap,
      title: "CRM Integration",
      description: "Connect with your existing systems. Integrate with Salesforce, HubSpot, Zendesk, and custom platforms via API for personalized experiences.",
      details: ["REST API access", "Webhook support", "Database integration", "Custom connectors"],
      demo: "Caller ID → Lookup in CRM → \"Hello John\" → Show account details"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, PCI DSS compliance for payments, complete audit trails and data privacy compliance for Indian regulations.",
      details: ["End-to-end encryption", "PCI DSS Level 1", "GDPR compliant", "Indian data localization"],
      demo: "Enter card → Encrypt data → Secure transmission → Delete after use"
    },
    {
      icon: Users,
      title: "Call Recording & Monitoring",
      description: "Record calls for quality assurance, training, and compliance. Monitor live calls and whisper to agents in real-time.",
      details: ["Automatic recording", "Secure storage", "Live monitoring", "Quality scoring"],
      demo: "Record call → Transcribe → Analyze sentiment → Generate insights"
    },
    {
      icon: TrendingUp,
      title: "Scalable Cloud Infrastructure",
      description: "Handle unlimited concurrent calls with auto-scaling. 99.99% uptime SLA with Indian data centers and instant provisioning.",
      details: ["Auto-scaling", "Indian data centers", "Zero downtime", "Instant deployment"],
      demo: "100 calls → Spike to 1000 → Auto-scale → No degradation"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      industry: "Banking & Finance",
      title: "Account Services & Support",
      examples: [
        "Balance inquiries and transaction history",
        "Card activation and PIN resets",
        "Loan status and payment processing",
        "Fraud alerts and security notifications"
      ],
      benefits: "Reduce branch visits by 60%, handle routine inquiries 24/7, improve security with voice authentication",
      color: "blue"
    },
    {
      icon: Stethoscope,
      industry: "Healthcare",
      title: "Patient Management",
      examples: [
        "Appointment scheduling and reminders",
        "Prescription refill requests",
        "Test results notification",
        "Insurance verification and billing"
      ],
      benefits: "Decrease no-shows by 40%, reduce administrative workload, HIPAA-compliant patient communication",
      color: "green"
    },
    {
      icon: ShoppingCart,
      industry: "E-Commerce & Retail",
      title: "Order & Customer Support",
      examples: [
        "Order status and tracking",
        "Return and exchange processing",
        "Store location and hours",
        "Product availability checks"
      ],
      benefits: "Handle 70% of inquiries automatically, reduce support costs, increase customer satisfaction",
      color: "purple"
    },
    {
      icon: Plane,
      industry: "Travel & Hospitality",
      title: "Reservations & Bookings",
      examples: [
        "Flight and hotel reservations",
        "Booking confirmations and modifications",
        "Check-in and boarding passes",
        "Loyalty program information"
      ],
      benefits: "Process bookings 24/7, handle seasonal spikes, multilingual support for travelers",
      color: "orange"
    },
    {
      icon: GraduationCap,
      industry: "Education",
      title: "Admissions & Student Services",
      examples: [
        "Application status inquiries",
        "Campus tour scheduling",
        "Fee payment and financial aid",
        "Course registration assistance"
      ],
      benefits: "Manage high-volume enrollment periods, provide after-hours support, reduce administrative burden",
      color: "indigo"
    },
    {
      icon: Home,
      industry: "Real Estate",
      title: "Property Inquiries & Showings",
      examples: [
        "Property listing information",
        "Schedule viewing appointments",
        "Mortgage calculator and pre-qualification",
        "Agent connection and callbacks"
      ],
      benefits: "Capture leads 24/7, qualify prospects automatically, maximize agent productivity",
      color: "red"
    },
    {
      icon: Zap,
      industry: "Utilities & Telecom",
      title: "Service Management",
      examples: [
        "Outage reporting and status",
        "Bill payment and account updates",
        "Service activation and changes",
        "Technical support routing"
      ],
      benefits: "Handle emergency calls efficiently, reduce call center volume, improve response times",
      color: "yellow"
    },
    {
      icon: Settings,
      industry: "IT & SaaS",
      title: "Technical Support",
      examples: [
        "Ticket creation and status",
        "Password resets and account recovery",
        "System status and maintenance alerts",
        "Feature requests and billing"
      ],
      benefits: "Triage support requests, reduce L1 support load, provide global 24/7 coverage",
      color: "teal"
    }
  ];

  const demoFlows = [
    { id: 'greeting', label: 'Welcome Greeting', text: '"Thank you for calling. Press 1 for Sales, 2 for Support, 3 for Billing"' },
    { id: 'routing', label: 'Smart Routing', text: '"Based on your account, connecting you to VIP support team..."' },
    { id: 'selfservice', label: 'Self-Service', text: '"Your account balance is ₹12,345. Press 1 to hear recent transactions"' },
    { id: 'callback', label: 'Callback Option', text: '"All agents are busy. Press 1 to keep your place in line, or 2 for a callback"' }
  ];

  const reasons = [
    {
      icon: TrendingUp,
      title: "Cost-Effective Pricing",
      description: "Pay only ₹1 per minute for agent connections. All automated interactions are completely free, dramatically reducing your operational costs.",
      impact: "Save 40-60% on support costs",
      stat: "₹1/min"
    },
    {
      icon: Users,
      title: "Reduce Agent Workload",
      description: "Handle routine inquiries automatically, freeing agents to focus on complex issues that truly require human expertise.",
      impact: "Handle 70% of calls without agents",
      stat: "70%"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call. Provide consistent service at any hour, any day, without staffing night shifts or weekends.",
      impact: "100% availability, zero overtime",
      stat: "24/7"
    },
    {
      icon: BarChart3,
      title: "Improve Customer Experience",
      description: "Eliminate hold times for routine requests. Customers get instant answers without waiting for an available agent.",
      impact: "95% satisfaction rate",
      stat: "95%"
    },
    {
      icon: Shield,
      title: "Data-Driven Insights",
      description: "Understand customer behavior, peak call times, popular menu selections, and optimize your service based on real data.",
      impact: "Make informed business decisions",
      stat: "100%"
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description: "Handle call volume spikes without hiring. Our cloud infrastructure scales automatically to meet demand.",
      impact: "Unlimited concurrent calls",
      stat: "∞"
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-white relative">
        <ProgressBar scrollProgress={scrollProgress} />
        <Hero demoFlows={demoFlows} onShowContactForm={() => setShowContactForm(true)} />
        <PricingCalculator />
        <FeatureExplorer features={features} />
        <UseCases useCases={useCases} />
        <WhyChooseUs reasons={reasons} />
        <CTA onShowContactForm={() => setShowContactForm(true)} />
        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </div>
    </MainLayout>
  );
};

export default IVRSolutionsPage;
