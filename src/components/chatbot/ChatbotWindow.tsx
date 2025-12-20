import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, DollarSign, Settings, MessageSquare, 
  User, Mail, Phone, ChevronRight, X, Send, Briefcase, Code, 
  Megaphone, PhoneCall, MessageCircle, Database, 
  Smartphone, CreditCard, Globe2, FileText,
  Clock, Check, Bot, 
  Volume2, Mail as MailIcon, Target, Users as UsersIcon, 
  Server, Terminal, Link, Layout, Smartphone as SmartphoneIcon,
  Calendar, Share2, TrendingUp, PenTool, HelpCircle
} from 'lucide-react';

// Define types
interface ServiceItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  questions: string[];
  features: string[];
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  items: ServiceItem[];
}

interface ConversationMessage {
  id: number;
  sender: 'user' | 'bot';
  message: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
}

// Enhanced service data with detailed specifications
const serviceCategories: ServiceCategory[] = [
  {
    id: 'services',
    name: 'Services',
    icon: <Briefcase size={18} />,
    color: 'blue',
    items: [
      {
        name: 'Bulk SMS Services',
        icon: <MessageCircle size={18} />,
        description: 'Send mass SMS campaigns to thousands of recipients',
        questions: [
          'What volume of SMS do you need?',
          'Is it for promotional or transactional purposes?',
          'Do you need API integration?',
          'What countries do you need coverage in?'
        ],
        features: ['High delivery rates', 'Real-time reports', 'DND filtering', 'Scheduling']
      },
      {
        name: 'Promotional SMS',
        icon: <Megaphone size={18} />,
        description: 'Marketing campaigns and promotional broadcasts',
        questions: [
          'What is your target audience size?',
          'Do you need template approval?',
          'Need opt-in management?',
          'Campaign frequency?'
        ],
        features: ['Template management', 'Opt-in tracking', 'Analytics', 'A/B testing']
      },
      {
        name: 'Transactional SMS',
        icon: <Database size={18} />,
        description: 'OTP, alerts, notifications and transactional messages',
        questions: [
          'What types of transactions (OTP, alerts, notifications)?',
          'Expected message volume per day?',
          'Need immediate delivery priority?',
          'Template registration required?'
        ],
        features: ['High priority routing', '99.9% uptime', 'Instant delivery', 'Dedicated routes']
      },
      {
        name: 'WhatsApp Bulk Services',
        icon: <Smartphone size={18} />,
        description: 'Send bulk messages through WhatsApp Business API',
        questions: [
          'Do you have a WhatsApp Business account?',
          'Need template message approval?',
          'Expected monthly message volume?',
          'Interactive buttons or quick replies needed?'
        ],
        features: ['WhatsApp Business API', 'Media sharing', 'Template messages', 'Analytics']
      },
      {
        name: 'IVR Solutions',
        icon: <PhoneCall size={18} />,
        description: 'Interactive Voice Response systems for customer service',
        questions: [
          'What type of IVR (single/multi-level)?',
          'Number of menu options needed?',
          'Need call recording?',
          'CRM integration required?'
        ],
        features: ['Multi-level IVR', 'Call recording', 'CRM integration', 'Real-time monitoring']
      },
      {
        name: 'Voice OBD Services',
        icon: <Volume2 size={18} />,
        description: 'Outbound dialing for telemarketing and surveys',
        questions: [
          'Purpose (telemarketing/surveys/alerts)?',
          'Daily call volume?',
          'Need answer machine detection?',
          'Call recording required?'
        ],
        features: ['Predictive dialer', 'Answer machine detection', 'Call recording', 'Agent monitoring']
      },
      {
        name: 'Virtual Numbers',
        icon: <Phone size={18} />,
        description: 'Toll-free and local virtual phone numbers',
        questions: [
          'Country/region for number?',
          'Need toll-free or local number?',
          'Call forwarding required?',
          'SMS capability needed?'
        ],
        features: ['Toll-free numbers', 'Local numbers', 'Call forwarding', 'SMS enabled']
      }
    ]
  },
  {
    id: 'digital',
    name: 'Digital',
    icon: <Target size={18} />,
    color: 'purple',
    items: [
      {
        name: 'Email Marketing',
        icon: <MailIcon size={18} />,
        description: 'Email campaigns and newsletter management',
        questions: [
          'Current subscriber count?',
          'Email service provider preference?',
          'Need automation workflows?',
          'Template design required?'
        ],
        features: ['Automation', 'A/B testing', 'Analytics', 'Template builder']
      },
      {
        name: 'Social Media Marketing',
        icon: <Share2 size={18} />,
        description: 'Social media management and advertising',
        questions: [
          'Which platforms (Facebook, Instagram, LinkedIn)?',
          'Content creation needed?',
          'Ad budget allocation?',
          'Reporting frequency?'
        ],
        features: ['Content planning', 'Ad management', 'Analytics', 'Community management']
      },
      {
        name: 'SEO Services',
        icon: <TrendingUp size={18} />,
        description: 'Search engine optimization and ranking improvement',
        questions: [
          'Current website URL?',
          'Target keywords?',
          'Need technical SEO audit?',
          'Content creation required?'
        ],
        features: ['Keyword research', 'Technical audit', 'Content optimization', 'Link building']
      },
      {
        name: 'PPC Advertising',
        icon: <CreditCard size={18} />,
        description: 'Pay-per-click advertising campaigns',
        questions: [
          'Platforms (Google Ads, Bing, social)?',
          'Monthly ad budget?',
          'Target conversion actions?',
          'Need landing page optimization?'
        ],
        features: ['Campaign setup', 'Keyword research', 'Bid management', 'Conversion tracking']
      },
      {
        name: 'Graphic Design',
        icon: <PenTool size={18} />,
        description: 'Visual design for marketing materials',
        questions: [
          'Design types needed (logos, banners, social)?',
          'Brand guidelines available?',
          'Timeline for delivery?',
          'Revision rounds needed?'
        ],
        features: ['Logo design', 'Social media graphics', 'Marketing collateral', 'Brand identity']
      }
    ]
  },
  {
    id: 'development',
    name: 'Development',
    icon: <Code size={18} />,
    color: 'green',
    items: [
      {
        name: 'Web Development',
        icon: <Globe2 size={18} />,
        description: 'Custom website and web application development',
        questions: [
          'Type of website (corporate, e-commerce, portal)?',
          'Preferred technology stack?',
          'Timeline for project?',
          'Maintenance required?'
        ],
        features: ['Responsive design', 'CMS integration', 'E-commerce', 'SEO friendly']
      },
      {
        name: 'Android App Development',
        icon: <SmartphoneIcon size={18} />,
        description: 'Native Android mobile applications',
        questions: [
          'App complexity (simple, moderate, complex)?',
          'Target Android versions?',
          'Need Play Store deployment?',
          'Backend integration required?'
        ],
        features: ['Native development', 'Material design', 'API integration', 'Play Store deployment']
      },
      {
        name: 'UI/UX Design',
        icon: <Layout size={18} />,
        description: 'User interface and experience design',
        questions: [
          'Platforms to design for (web, mobile, both)?',
          'Need user research?',
          'Wireframing required?',
          'Prototype development?'
        ],
        features: ['Wireframing', 'Prototyping', 'User testing', 'Design systems']
      },
      {
        name: 'API Integration',
        icon: <Link size={18} />,
        description: 'Third-party API integration services',
        questions: [
          'Which APIs need integration?',
          'Authentication methods?',
          'Data sync requirements?',
          'Error handling needed?'
        ],
        features: ['REST APIs', 'Webhooks', 'Authentication', 'Error handling']
      }
    ]
  },
  {
    id: 'products',
    name: 'Products',
    icon: <ShoppingCart size={18} />,
    color: 'orange',
    items: [
      {
        name: 'WhatsApp API Solutions',
        icon: <MessageSquare size={18} />,
        description: 'Official WhatsApp Business API integration',
        questions: [
          'Current business verification status?',
          'Expected message volume?',
          'Need chatbot integration?',
          'Template message requirements?'
        ],
        features: ['Official API', 'Template messages', 'Media support', 'Analytics']
      },
      {
        name: 'SMS Gateway',
        icon: <Server size={18} />,
        description: 'Bulk SMS gateway with API access',
        questions: [
          'Monthly SMS volume?',
          'Two-way SMS needed?',
          'Sender ID requirements?',
          'Delivery reports needed?'
        ],
        features: ['HTTP API', 'Two-way SMS', 'Delivery reports', 'Sender ID management']
      },
      {
        name: 'CRM Solutions',
        icon: <UsersIcon size={18} />,
        description: 'Customer relationship management system',
        questions: [
          'Number of users?',
          'Current CRM being used?',
          'Integration requirements?',
          'Customization needed?'
        ],
        features: ['Lead management', 'Contact tracking', 'Task automation', 'Reporting']
      },
      {
        name: 'Source Codes',
        icon: <Terminal size={18} />,
        description: 'Ready-to-use software source codes',
        questions: [
          'Technology stack preference?',
          'Project type (e-commerce, cms, etc)?',
          'Need customization?',
          'Documentation required?'
        ],
        features: ['Clean code', 'Documentation', 'Support', 'Customization']
      }
    ]
  }
];

// Conversation flow templates
const conversationFlows: Record<string, ConversationMessage[]> = {
  'Bulk SMS Services': [
    { id: 1, sender: 'bot', message: 'Great choice! Let me gather some details about your Bulk SMS needs.' },
    { id: 2, sender: 'bot', message: 'What approximate volume of SMS messages do you plan to send per month?' },
    { id: 3, sender: 'bot', message: 'Will these be promotional messages, transactional alerts, or both?' },
    { id: 4, sender: 'bot', message: 'Do you need API integration with your existing systems?' },
    { id: 5, sender: 'bot', message: 'Which countries do you need coverage in?' }
  ],
  'IVR Solutions': [
    { id: 1, sender: 'bot', message: 'Excellent! IVR systems can greatly improve customer experience.' },
    { id: 2, sender: 'bot', message: 'What type of IVR do you need? Single-level or multi-level menu?' },
    { id: 3, sender: 'bot', message: 'How many menu options do you anticipate needing?' },
    { id: 4, sender: 'bot', message: 'Should calls be recorded for quality assurance?' },
    { id: 5, sender: 'bot', message: 'Do you need integration with your CRM or other systems?' }
  ],
  'WhatsApp Bulk Services': [
    { id: 1, sender: 'bot', message: 'Perfect! WhatsApp Business API is great for customer engagement.' },
    { id: 2, sender: 'bot', message: 'Do you already have a WhatsApp Business account?' },
    { id: 3, sender: 'bot', message: 'Will you need template message approval for notifications?' },
    { id: 4, sender: 'bot', message: 'What is your expected monthly message volume?' },
    { id: 5, sender: 'bot', message: 'Would you like interactive buttons or quick replies in messages?' }
  ]
};

// Service quick options
const serviceQuickOptions: Record<string, string[]> = {
  'IVR Solutions': [
    'Single-level IVR',
    'Multi-level IVR',
    'Call recording',
    'CRM integration',
    'Custom greetings',
    'Multiple languages'
  ],
  'Bulk SMS Services': [
    'Promotional SMS',
    'Transactional SMS',
    'DND filtering',
    'API access',
    'Scheduling',
    'Reports'
  ],
  'WhatsApp Bulk Services': [
    'Template messages',
    'Media sharing',
    'Quick replies',
    'Analytics',
    'Chatbot integration',
    'Broadcast lists'
  ]
};

// Quick replies
const quickReplies = [
  { text: 'Get pricing quote', icon: <DollarSign size={16} /> },
  { text: 'Technical requirements', icon: <Settings size={16} /> },
  { text: 'Schedule demo', icon: <Calendar size={16} /> },
  { text: 'Speak with sales', icon: <Phone size={16} /> },
  { text: 'View case studies', icon: <FileText size={16} /> },
  { text: 'Check availability', icon: <Clock size={16} /> }
];

const ChatbotWindow: React.FC = () => {
  const [activeView, setActiveView] = useState<'menu' | 'category-details' | 'service-details' | 'conversation' | 'form' | 'confirmation'>('menu');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    requirements: ''
  });
  const [conversation, setConversation] = useState<ConversationMessage[]>([
    { id: 1, sender: 'bot', message: 'Hello! I\'m your DuoTech assistant. How can I help you today?' }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const handleServiceSelect = (service: ServiceItem) => {
    setSelectedService(service);
    const flow = conversationFlows[service.name] || [
      { id: 1, sender: 'bot', message: `Tell me more about your ${service.name.toLowerCase()} requirements.` }
    ];
    
    setConversation(prev => [
      ...prev,
      { id: prev.length + 1, sender: 'user', message: `I'm interested in ${service.name}` },
      ...flow
    ]);
    
    setActiveView('conversation');
    setCurrentQuestionIndex(0);
  };

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setActiveView('category-details');
  };

  const handleBack = () => {
    if (activeView === 'service-details' || activeView === 'category-details') {
      setActiveView('menu');
      setSelectedService(null);
      setSelectedCategory(null);
    } else if (activeView === 'form') {
      setActiveView('service-details');
    } else if (activeView === 'conversation') {
      setActiveView('category-details');
    }
  };

  const addMessage = (message: string, sender: 'user' | 'bot' = 'user') => {
    setConversation(prev => [
      ...prev,
      { id: prev.length + 1, sender, message }
    ]);
  };

  const simulateBotResponse = (message: string) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(message, 'bot');
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    addMessage(reply);
    
    // Simulate bot response based on reply
    setTimeout(() => {
      if (reply.includes('quote') || reply.includes('pricing')) {
        simulateBotResponse('I can help with pricing. What service are you interested in?');
        setActiveView('menu');
      } else if (reply.includes('integration') || reply.includes('technical')) {
        simulateBotResponse('Our technical team can assist with integration. Please share your current setup details.');
        setActiveView('form');
      } else {
        simulateBotResponse('Thanks for sharing! How else can I assist you today?');
      }
    }, 500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveView('confirmation');
    addMessage(`Submitted inquiry for ${selectedService?.name || 'services'}`);
    
    // Send notification
    setTimeout(() => {
      addMessage('Our specialist has been notified and will contact you within 24 hours. Is there anything else I can help with?', 'bot');
    }, 2000);
  };

  const renderServiceDetails = (service: ServiceItem) => {
    const quickOptions = serviceQuickOptions[service.name] || [];
    const category = serviceCategories.find(c => c.items.some(i => i.name === service.name));
    const colorClass = category ? `bg-${category.color}-50 text-${category.color}-600` : 'bg-blue-50 text-blue-600';
    
    return (
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center`}>
            {service.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-light text-gray-900 mb-2">{service.name}</h4>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <h5 className="font-medium text-gray-900 mb-3">Common Requirements</h5>
          <div className="grid grid-cols-2 gap-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Check size={14} className="text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {quickOptions.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-900 mb-3">Quick Options</h5>
            <div className="flex flex-wrap gap-2">
              {quickOptions.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickReply(`Need ${option.toLowerCase()}`)}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <h5 className="font-medium text-gray-900">Typical Questions We Ask:</h5>
          <div className="space-y-3">
            {service.questions.map((question, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-medium text-blue-600">{i + 1}</span>
                </div>
                <p className="text-gray-600">{question}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => setActiveView('conversation')}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <MessageSquare size={18} />
            <span>Start Conversation</span>
          </button>
          <button
            onClick={() => setActiveView('form')}
            className="flex-1 py-3 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="absolute bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-light text-white">DuoTech Assistant</h3>
              <p className="text-blue-100 text-sm">Intelligent service advisor</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
            <X size={18} className="text-white" />
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-100 text-sm">Available now</span>
          </div>
          <div className="text-xs text-blue-200">
            {conversation.length} messages
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="h-[500px] overflow-y-auto">
        <AnimatePresence mode="wait">
          {/* Main Menu */}
          {activeView === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6"
            >
              <div className="mb-8">
                <h4 className="text-lg font-light text-gray-900 mb-4">Explore Our Solutions</h4>
                <div className="space-y-3">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      className="w-full p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg ${category.color === 'blue' ? 'bg-blue-50 text-blue-600' : category.color === 'purple' ? 'bg-purple-50 text-purple-600' : category.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} flex items-center justify-center`}>
                            {category.icon}
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">{category.name}</h5>
                            <p className="text-sm text-gray-500">{category.items.length} solutions</p>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-light text-gray-900 mb-4">Quick Assistance</h4>
                <div className="grid grid-cols-2 gap-3">
                  {quickReplies.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(item.text)}
                      className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 text-left"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{item.text}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Category Details */}
          {activeView === 'category-details' && selectedCategory && (
            <motion.div
              key="category-details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6"
            >
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
              >
                <ChevronRight size={16} className="rotate-180" />
                <span className="text-sm font-medium">Back to categories</span>
              </button>

              <h4 className="text-xl font-light text-gray-900 mb-6">{selectedCategory.name} Solutions</h4>
              
              <div className="space-y-3">
                {selectedCategory.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceSelect(item)}
                    className="w-full p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${selectedCategory.color === 'blue' ? 'bg-blue-50 text-blue-600' : selectedCategory.color === 'purple' ? 'bg-purple-50 text-purple-600' : selectedCategory.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'} flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">{item.name}</h5>
                          <p className="text-sm text-gray-500 truncate max-w-[200px]">{item.description}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Service Details */}
          {activeView === 'service-details' && selectedService && (
            <motion.div
              key="service-details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6"
            >
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
              >
                <ChevronRight size={16} className="rotate-180" />
                <span className="text-sm font-medium">Back to services</span>
              </button>

              {renderServiceDetails(selectedService)}
            </motion.div>
          )}

          {/* Conversation View */}
          {activeView === 'conversation' && (
            <motion.div
              key="conversation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full flex flex-col"
            >
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                >
                  <ChevronRight size={16} className="rotate-180" />
                  <span className="text-sm font-medium">Back</span>
                </button>
                <div className="text-sm text-gray-500">
                  Discussing: {selectedService?.name}
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversation.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        {msg.sender === 'bot' && (
                          <Bot size={14} className="text-gray-400" />
                        )}
                        <span className="text-xs opacity-75">
                          {msg.sender === 'bot' ? 'DuoTech Assistant' : 'You'}
                        </span>
                      </div>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedService?.questions?.slice(currentQuestionIndex, currentQuestionIndex + 3).map((question, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        addMessage(question);
                        setCurrentQuestionIndex(prev => prev + 1);
                        setTimeout(() => {
                          simulateBotResponse('Thank you! Next question...');
                        }, 1000);
                      }}
                      className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your response..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        addMessage(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Form */}
          {activeView === 'form' && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6"
            >
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
              >
                <ChevronRight size={16} className="rotate-180" />
                <span className="text-sm font-medium">Back</span>
              </button>

              <h4 className="text-xl font-light text-gray-900 mb-6">
                Request Quote for {selectedService?.name}
              </h4>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {[
                  { icon: <User size={18} />, name: 'name' as keyof FormData, label: 'Full Name', type: 'text' },
                  { icon: <Mail size={18} />, name: 'email' as keyof FormData, label: 'Email Address', type: 'email' },
                  { icon: <Phone size={18} />, name: 'phone' as keyof FormData, label: 'Phone Number', type: 'tel' },
                  { icon: <Briefcase size={18} />, name: 'company' as keyof FormData, label: 'Company', type: 'text' }
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      {field.icon}
                    </div>
                    <input
                      type={field.type}
                      placeholder={field.label}
                      value={formData[field.name]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                        setFormData(prev => ({ ...prev, [field.name]: e.target.value }))
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                      required
                    />
                  </div>
                ))}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Requirements for {selectedService?.name}
                  </label>
                  <textarea
                    placeholder={`Tell us about your ${selectedService?.name.toLowerCase()} needs...`}
                    value={formData.requirements}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                      setFormData(prev => ({ ...prev, requirements: e.target.value }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                  />
                </div>
                
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit Quote Request</span>
                    <Send size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView('conversation')}
                    className="px-4 py-3 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
                  >
                    Chat First
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Confirmation */}
          {activeView === 'confirmation' && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-light text-gray-900 mb-3">Request Submitted!</h4>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in {selectedService?.name}. Our specialist will contact you within 24 hours.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setActiveView('menu');
                    setFormData({ name: '', email: '', phone: '', company: '', requirements: '' });
                    setSelectedService(null);
                    setSelectedCategory(null);
                  }}
                  className="w-full py-3 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors"
                >
                  Explore More Services
                </button>
                <button
                  onClick={() => setActiveView('conversation')}
                  className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                  Continue Chat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Actions Footer */}
      <div className="border-t border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-600">Online</span>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <HelpCircle size={18} className="text-gray-500" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotWindow;