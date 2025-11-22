import React, { useState, useEffect } from 'react';
import { Phone, Zap, BarChart3, Clock, Shield, Globe, Headphones, Settings, TrendingUp, Users, CheckCircle2, Building2, Stethoscope, ShoppingCart, Plane, GraduationCap, Home, PlayCircle, PauseCircle, ChevronDown, ChevronRight, X } from 'lucide-react';

const IVRSolutionsPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<number | null>(null);
  const [activeDemo, setActiveDemo] = useState('greeting');
  const [pricingCalculator, setPricingCalculator] = useState({
    calls: 1000,
    agentCalls: 300,
    callDuration: 3
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateSavings = () => {
    const { calls, agentCalls, callDuration } = pricingCalculator;
    const automatedCalls = calls - agentCalls;
    
    // Traditional cost: ₹3 per minute for all calls
    const traditionalCost = calls * callDuration * 3;
    
    // Our cost: ₹1 per minute for agent calls only, automated calls free
    const ourCost = agentCalls * callDuration * 1;
    
    const savings = traditionalCost - ourCost;
    const savingsPercent = ((savings / traditionalCost) * 100).toFixed(0);
    
    return { traditionalCost, ourCost, savings, savingsPercent, automatedCalls };
  };

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

  const savings = calculateSavings();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      requirements: ''
    });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-blue-900 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 40px)`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 py-20 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full">
                <span className="text-xs font-light tracking-widest text-blue-900 uppercase">Complete IVR Solutions</span>
              </div>
              <h1 className="text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Everything You Need for
                <span className="block text-blue-900 font-normal mt-2">Interactive Voice Response</span>
              </h1>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                Comprehensive IVR solutions with unlimited menu levels, advanced features, and pay-only-for-agent-connections pricing starting at just ₹1 per minute.
              </p>
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-blue-900 text-white text-sm font-light tracking-wide uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg"
                >
                  View Pricing
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="px-8 py-3 border border-gray-300 text-gray-700 text-sm font-light tracking-wide uppercase hover:border-blue-900 hover:text-blue-900 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Interactive IVR Demo Preview */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light text-gray-900">Live IVR Flow Demo</h3>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-blue-900 hover:scale-110 transition-transform duration-300"
                >
                  {isPlaying ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
                </button>
              </div>
              
              <div className="space-y-4">
                {demoFlows.map((flow, idx) => (
                  <button
                    key={flow.id}
                    onClick={() => setActiveDemo(flow.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      activeDemo === flow.id
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-light ${
                        activeDemo === flow.id ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-light text-gray-900">{flow.label}</div>
                        {activeDemo === flow.id && (
                          <div className="text-sm font-light text-gray-600 mt-2">
                            {flow.text}
                          </div>
                        )}
                      </div>
                      {activeDemo === flow.id && (
                        <ChevronRight className="text-blue-900" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section id="pricing" className="bg-blue-900 text-white py-16 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4">Pay Only ₹1/Minute for Agent Connections</h2>
            <p className="text-lg font-light text-blue-100">Calculate your savings with our interactive pricing calculator</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <label className="flex justify-between text-sm font-light mb-2">
                    <span>Total Monthly Calls</span>
                    <span className="text-blue-200">{pricingCalculator.calls.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={pricingCalculator.calls}
                    onChange={(e) => setPricingCalculator({...pricingCalculator, calls: parseInt(e.target.value)})}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-sm font-light mb-2">
                    <span>Calls Connected to Agents</span>
                    <span className="text-blue-200">{pricingCalculator.agentCalls.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={pricingCalculator.calls}
                    step="50"
                    value={pricingCalculator.agentCalls}
                    onChange={(e) => setPricingCalculator({...pricingCalculator, agentCalls: parseInt(e.target.value)})}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                  />
                </div>

                <div>
                  <label className="flex justify-between text-sm font-light mb-2">
                    <span>Average Call Duration (Minutes)</span>
                    <span className="text-blue-200">{pricingCalculator.callDuration}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={pricingCalculator.callDuration}
                    onChange={(e) => setPricingCalculator({...pricingCalculator, callDuration: parseFloat(e.target.value)})}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                  />
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex justify-between text-sm font-light mb-2">
                    <span>Automated Calls (FREE)</span>
                    <span className="text-green-300 font-normal">{savings.automatedCalls.toLocaleString()} calls</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="text-sm font-light text-blue-200 mb-2">Traditional Cost (₹3/min)</div>
                <div className="text-4xl font-light line-through opacity-50">₹{savings.traditionalCost.toLocaleString()}</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-gray-900">
                <div className="text-sm font-light text-gray-600 mb-2">Your Cost with Us (₹1/min)</div>
                <div className="text-5xl font-normal text-blue-900">₹{savings.ourCost.toLocaleString()}</div>
                <div className="text-sm font-light text-gray-500 mt-2">Only for agent calls · Automated calls FREE</div>
              </div>

              <div className="bg-green-500 rounded-lg p-6 text-white">
                <div className="text-sm font-light mb-2">You Save Every Month</div>
                <div className="flex items-baseline gap-4">
                  <div className="text-5xl font-normal">₹{savings.savings.toLocaleString()}</div>
                  <div className="text-2xl font-light">({savings.savingsPercent}%)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-full px-6 py-3">
              <span className="text-green-400 font-bold">₹</span>
              <span className="text-white font-light">Start with just ₹1,000/month · No setup fees · No contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">Interactive Feature Explorer</h2>
          <p className="text-lg font-light text-gray-600 max-w-3xl">
            Click any feature to expand and see a live demo of how it works
          </p>
          <div className="h-px w-24 bg-blue-900 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isExpanded = expandedFeature === idx;
            const isHovered = hoveredService === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredService(idx)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => setExpandedFeature(isExpanded ? null : idx)}
                className={`border border-gray-100 p-8 cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'md:col-span-2 border-blue-900 shadow-xl bg-blue-50' : isHovered ? 'border-blue-300 shadow-lg' : 'hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`transition-all duration-300 ${
                      isExpanded || isHovered ? 'text-blue-900' : 'text-gray-400'
                    }`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-light text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base font-light text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {isExpanded && (
                        <div className="mt-6 space-y-4">
                          <div className="bg-blue-900 text-white p-6 rounded-lg">
                            <div className="text-xs font-light tracking-wider uppercase mb-2 text-blue-200">Live Demo</div>
                            <div className="text-lg font-light">{feature.demo}</div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-3">
                            {feature.details.map((detail, didx) => (
                              <div key={didx} className="flex items-center gap-2 bg-white p-3 rounded">
                                <CheckCircle2 size={16} className="text-blue-900 flex-shrink-0" strokeWidth={2} />
                                <span className="text-sm font-light text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="text-blue-900" size={24} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">Industry Use Cases</h2>
            <p className="text-lg font-light text-gray-600 max-w-3xl">
              Click any industry to explore specific applications and benefits
            </p>
            <div className="h-px w-24 bg-blue-900 mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              const isSelected = selectedUseCase === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedUseCase(isSelected ? null : idx)}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-blue-900 bg-blue-50 shadow-xl'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                >
                  <Icon size={36} className={`mb-4 transition-colors duration-300 ${
                    isSelected ? 'text-blue-900' : 'text-gray-400'
                  }`} strokeWidth={1.5} />
                  <div className="text-xs font-light tracking-wider text-gray-400 uppercase mb-2">
                    {useCase.industry}
                  </div>
                  <h3 className="text-lg font-light text-gray-900">
                    {useCase.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {selectedUseCase !== null && (
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-2 border-blue-900 shadow-xl">
              <button
                onClick={() => setSelectedUseCase(null)}
                className="float-right text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-light tracking-wider text-blue-900 uppercase mb-2">
                    {useCases[selectedUseCase]?.industry}
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-4">
                    {useCases[selectedUseCase]?.title}
                  </h3>
                  <div className="bg-blue-900 text-white p-6 rounded-lg">
                    <div className="text-xs font-light tracking-wider uppercase mb-2 text-blue-200">Business Impact</div>
                    <p className="text-base font-light">{useCases[selectedUseCase]?.benefits}</p>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-light tracking-wider text-gray-400 uppercase mb-4">Common Applications</div>
                  <div className="space-y-3">
                    {useCases[selectedUseCase]?.examples.map((example, eidx) => (
                      <div 
                        key={eidx} 
                        className="flex items-start gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs flex-shrink-0">
                          {eidx + 1}
                        </div>
                        <span className="text-base font-light text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="reasons" className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">Why Choose Our IVR Solution</h2>
          <p className="text-lg font-light text-gray-600 max-w-3xl">
            Discover the strategic advantages that set our solution apart
          </p>
          <div className="h-px w-24 bg-blue-900 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="group p-8 border border-gray-100 hover:border-blue-900 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon size={32} className="text-blue-900 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <div className="text-2xl font-light text-blue-900">{reason.stat}</div>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-base font-light text-gray-600 leading-relaxed mb-4">
                  {reason.description}
                </p>
                <div className="text-sm font-light text-blue-900 border-t border-gray-100 pt-4">
                  {reason.impact}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-light mb-6">Ready to Transform Your Customer Experience?</h2>
          <p className="text-xl font-light text-blue-100 mb-8 max-w-2xl mx-auto">
            Start with our IVR solution today and provide exceptional customer service while reducing costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setShowContactForm(true)}
              className="px-8 py-4 bg-white text-blue-900 text-lg font-light tracking-wide uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white text-white text-lg font-light tracking-wide uppercase hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Detailed Pricing
            </button>
          </div>
          <div className="mt-8 text-blue-200 font-light">
            <span className="font-bold">₹</span>
            Start with just ₹1,000/month · 14-day free trial · No credit card required
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-light text-gray-900">Get Started with IVR</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Business Requirements</label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                    placeholder="Tell us about your current call volume, specific needs, and any integration requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 text-lg font-light tracking-wide uppercase hover:bg-blue-800 transition-colors duration-300"
                >
                  Start My Free Trial
                </button>

                <div className="text-center text-sm font-light text-gray-500">
                  <span className="font-bold">₹</span>
                  Start with just ₹1,000/month after 14-day free trial · No setup fees
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IVRSolutionsPage;