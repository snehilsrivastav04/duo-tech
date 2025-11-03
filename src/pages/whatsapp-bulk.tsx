import React, { useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { 
  MessageSquare, Users, BarChart2, Zap, Check,
  ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, 
  Headphones, CreditCard, ThumbsUp, LifeBuoy, Calendar,
  MessageCircle, Image, Video, File, FileText, Aperture,
  Phone, Mail, MapPin, Clock, Send, Download, Mic, Paperclip,
  Star, ArrowLeft
} from 'lucide-react';
import { FaWhatsapp, FaRobot, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useInView } from 'react-intersection-observer';

// WhatsApp brand colors
const whatsappColors = {
  primary: '#25D366',
  dark: '#128C7E',
  light: '#DCF8C6',
  blue: '#34B7F1'
};

// WhatsApp Mockup Component
type WhatsAppMessage = {
  id: number;
  text: string;
  sender: string;
  time: string;
  buttons?: string[];
};

const WhatsAppMockup = ({
  messages,
  autoAnimate = true,
  title = "DuoTech "
}: {
  messages?: WhatsAppMessage[];
  autoAnimate?: boolean;
  title?: string;
}) => {
  const defaultMessages: WhatsAppMessage[] = [
    {
      id: 1,
      text: "Hi there! I'd like to check my order status",
      sender: "customer",
      time: "10:30 AM"
    },
    {
      id: 2,
      text: "Sure! Please share your order ID",
      sender: "bot",
      time: "10:30 AM"
    },
    {
      id: 3,
      text: "Your order #12345 is shipped and will arrive tomorrow. Track here: [link]",
      sender: "bot",
      time: "10:32 AM",
      buttons: ["Track Package", "Contact Support"]
    }
  ];

  const chatMessages = messages || defaultMessages;

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-xs mx-auto lg:max-w-md"
    >
      {/* Phone frame */}
      <div className="relative bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-xl z-10"></div>
        
        {/* Screen */}
        <div className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden h-96">
          {/* WhatsApp header */}
          <div 
            className="h-16 p-3 flex items-center justify-between text-white"
            style={{ backgroundColor: whatsappColors.dark }}
          >
            <div className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-3" />
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
              <div>
                <div className="font-semibold">{title}</div>
                <div className="text-xs opacity-80">Online</div>
              </div>
            </div>
            <div className="flex space-x-3">
              <Phone className="w-5 h-5" />
              <Video className="w-5 h-5" />
            </div>
          </div>
          
          {/* Chat area */}
          <div className="h-64 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-900">
            {chatMessages.map((message: WhatsAppMessage, i: number) => (
              <motion.div
                key={message.id}
                initial={autoAnimate ? { opacity: 0, y: 10 } : false}
                animate={autoAnimate ? { opacity: 1, y: 0 } : false}
                transition={autoAnimate ? { delay: i * 0.2 } : undefined}
                className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'customer' 
                      ? 'bg-green-100 dark:bg-green-900 rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <div className="text-sm dark:text-white">{message.text}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">{message.time}</div>
                  
                  {message.buttons && (
                    <div className="mt-2 space-y-1">
                      {message.buttons.map((button, i) => (
                        <button 
                          key={i}
                          className="block w-full text-left px-3 py-1 text-sm rounded border border-green-200 dark:border-green-700 hover:bg-green-50 dark:hover:bg-green-800"
                          style={{ 
                            color: whatsappColors.dark
                          }}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <Paperclip className="w-5 h-5" />
              </button>
              <input 
                type="text" 
                placeholder="Type a message"
                className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-green-500 dark:text-white"
              />
              <button className="p-2 text-gray-500 dark:text-gray-400">
                <Mic className="w-5 h-5" />
              </button>
              <button 
                className="p-2 rounded-full ml-1"
                style={{ backgroundColor: whatsappColors.primary }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating buttons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -right-5 top-1/4 bg-white p-2 rounded-full shadow-lg"
      >
        <FaWhatsapp className="w-6 h-6" style={{ color: whatsappColors.primary }} />
      </motion.div>
    </motion.div>
  );
};

// WhatsApp Services Data
const whatsappData = {
  hero: {
    title: 'Transform Customer Engagement with WhatsApp Solutions',
    subtitle: 'Enterprise-grade tools to automate conversations, boost sales, and enhance support',
    cta: 'Start Free Trial',
    secondaryCta: 'Schedule Demo'
  },
  features: [
    {
      icon: <FaWhatsapp className="w-10 h-10 text-green-500" />,
      title: 'Bulk Messaging',
      description: 'Send thousands of personalized messages with media attachments in minutes',
      gradient: 'from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30',
      mockup: <WhatsAppMockup 
        messages={[
          {
            id: 1,
            text: "Hi! We have a special offer just for you - 20% off all products this week!",
            sender: "bot",
            time: "10:30 AM"
          },
          {
            id: 2,
            text: "Check out our new collection: [Product Catalog]",
            sender: "bot",
            time: "10:30 AM",
            buttons: ["View Catalog", "Shop Now"]
          }
        ]}
      />
    },
    {
      icon: <FaRobot className="w-10 h-10 text-green-500" />,
      title: 'AI Chatbots',
      description: 'Smart conversational AI that handles 80% of customer queries automatically',
      gradient: 'from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30',
      mockup: <WhatsAppMockup 
        messages={[
          {
            id: 1,
            text: "Hi! How can I help you today?",
            sender: "bot",
            time: "10:30 AM",
            buttons: ["Order Status", "Product Info", "Support"]
          },
          {
            id: 2,
            text: "I want to check my order status",
            sender: "customer",
            time: "10:31 AM"
          },
          {
            id: 3,
            text: "Sure! Please provide your order number",
            sender: "bot",
            time: "10:31 AM"
          }
        ]}
      />
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: 'Team Inbox',
      description: 'Collaborative inbox with assignment, notes and performance tracking',
      gradient: 'from-purple-100 to-purple-50 dark:from-purple-900/50 dark:to-purple-900/30',
      mockup: <WhatsAppMockup 
        messages={[
          {
            id: 1,
            text: "This conversation was assigned to you by Sarah",
            sender: "system",
            time: "10:30 AM"
          },
          {
            id: 2,
            text: "Hi, I need help with my recent purchase",
            sender: "customer",
            time: "10:28 AM"
          },
          {
            id: 3,
            text: "Hi there! I'd be happy to help. Can you share your order number?",
            sender: "agent",
            time: "10:32 AM"
          }
        ]}
      />
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-green-500" />,
      title: 'Conversation Analytics',
      description: 'Real-time dashboards with sentiment analysis and response metrics',
      gradient: 'from-amber-100 to-amber-50 dark:from-amber-900/50 dark:to-amber-900/30',
      mockup: <WhatsAppMockup 
        autoAnimate={false}
        messages={[
          {
            id: 1,
            text: "📊 Performance Report: 98% response rate, 4.8/5 satisfaction",
            sender: "system",
            time: "Today"
          },
          {
            id: 2,
            text: "📈 245 conversations today, 87% resolved automatically",
            sender: "system",
            time: "Today"
          },
          {
            id: 3,
            text: "⭐ Top agent: Maria with 4.9/5 customer rating",
            sender: "system",
            time: "Today"
          }
        ]}
      />
    }
  ],
  businessBenefits: [
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
      title: '3-5x Higher Conversion',
      description: 'WhatsApp messages have significantly higher engagement than email or SMS',
      stat: '3-5x'
    },
    {
      icon: <Headphones className="w-8 h-8 text-green-500" />,
      title: 'Instant Support',
      description: 'Average response time under 90 seconds with automated replies',
      stat: '<90s'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
      title: '80% Cost Reduction',
      description: 'Automation reduces customer service costs dramatically',
      stat: '80%'
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-green-500" />,
      title: '90% Customer Satisfaction',
      description: 'Users prefer WhatsApp for business communication',
      stat: '90%'
    }
  ],
  industries: [
    {
      name: 'E-commerce',
      icon: <ShoppingCart className="w-6 h-6 text-green-500" />,
      useCases: ['Order updates', 'Abandoned cart recovery', 'Product recommendations'],
      stats: '40% higher conversion',
      image: '/images/ecommerce.jpg',
      backContent: 'E-commerce businesses see 3x more engagement via WhatsApp compared to email. Send rich product catalogs, personalized recommendations, and instant support.',
      mockup: '/images/mockups/ecommerce-mockup.png'
    },
    {
      name: 'Healthcare',
      icon: <LifeBuoy className="w-6 h-6 text-green-500" />,
      useCases: ['Appointment reminders', 'Prescription updates', 'Health tips'],
      stats: '70% fewer no-shows',
      image: '/images/healthcare.jpg',
      backContent: 'Healthcare providers reduce missed appointments by 70% with WhatsApp reminders. Securely share test results and provide 24/7 patient support.',
      mockup: '/images/mockups/healthcare-mockup.png'
    },
    {
      name: 'Education',
      icon: <FaChalkboardTeacher className="w-6 h-6 text-green-500" />,
      useCases: ['Class updates', 'Fee reminders', 'Assignment alerts'],
      stats: '60% faster communication',
      image: '/images/education.jpg',
      backContent: 'Educational institutions achieve 90% open rates for important announcements. Parents and students prefer WhatsApp for instant updates.',
      mockup: '/images/mockups/education-mockup.png'
    },
    {
      name: 'Real Estate',
      icon: <FaHandshake className="w-6 h-6 text-green-500" />,
      useCases: ['Property alerts', 'Viewing schedules', 'Document sharing'],
      stats: '50% more leads',
      image: '/images/real-estate.jpg',
      backContent: 'Real estate agents close deals faster with instant property videos and documents via WhatsApp. Automated follow-ups increase lead conversion.',
      mockup: '/images/mockups/realestate-mockup.png'
    },
    {
      name: 'Banking',
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      useCases: ['OTP delivery', 'Fraud alerts', 'Account updates'],
      stats: '80% faster resolution',
      image: '/images/banking.jpg',
      backContent: 'Banks reduce call center volume by 40% with WhatsApp banking. Secure messaging for transactions improves customer trust and satisfaction.',
      mockup: '/images/mockups/banking-mockup.png'
    },
    {
      name: 'Hospitality',
      icon: <Calendar className="w-6 h-6 text-green-500" />,
      useCases: ['Booking confirmations', 'Check-in instructions', 'Special offers'],
      stats: '45% more repeat guests',
      image: '/images/hospitality.jpg',
      backContent: 'Hotels and restaurants increase guest satisfaction with personalized WhatsApp communication. Automated check-in/out and concierge services.',
      mockup: '/images/mockups/hospitality-mockup.png'
    }
  ],
  messageTypes: [
    {
      type: 'Text',
      icon: <MessageCircle className="w-6 h-6 text-green-500" />,
      description: 'Simple yet effective text messages with formatting',
      example: '/images/message-examples/text-message.png'
    },
    {
      type: 'Rich Media',
      icon: <Image className="w-6 h-6 text-green-500" />,
      description: 'Images, videos, PDFs and product catalogs',
      example: '/images/message-examples/media-message.png'
    },
    {
      type: 'Interactive',
      icon: <Aperture className="w-6 h-6 text-green-500" />,
      description: 'Buttons, quick replies and call-to-actions',
      example: '/images/message-examples/interactive-message.png'
    },
    {
      type: 'Templates',
      icon: <FileText className="w-6 h-6 text-green-500" />,
      description: 'Pre-approved messages for notifications',
      example: '/images/message-examples/template-message.png'
    },
    {
      type: 'Documents',
      icon: <File className="w-6 h-6 text-green-500" />,
      description: 'Send contracts, invoices and forms',
      example: '/images/message-examples/document-message.png'
    },
    {
      type: 'Location',
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      description: 'Share business locations and directions',
      example: '/images/message-examples/location-message.png'
    }
  ],
  testimonials: [
    {
      quote: 'Our conversion rates tripled after switching to WhatsApp for customer communication. The read rates are phenomenal compared to email.',
      author: 'Priya Sharma',
      role: 'Marketing Director, UrbanClap',
      rating: 5,
      avatar: '/images/testimonial-1.jpg',
      companyLogo: '/images/logos/urbanclap.png'
    },
    {
      quote: 'We handle 5000+ customer queries daily with just 3 support agents thanks to the WhatsApp chatbot. Response times dropped from hours to minutes.',
      author: 'Raj Patel',
      role: 'CXO',
      rating: 5,
      avatar: '/images/testimonial-2.jpg',
      companyLogo: '/images/logos/policybazaar.png'
    },
    {
      quote: 'Appointment no-shows reduced from 25% to 8% after implementing WhatsApp reminders. Patients love the convenience.',
      author: 'Dr. Ananya Reddy',
      role: 'Healthcare Provider',
      rating: 5,
      avatar: '/images/testimonial-3.jpg',
      companyLogo: '/images/logos/healthcare-provider.png'
    },
    {
      quote: 'WhatsApp automation helped us scale our customer support 10x without adding staff. The analytics dashboard is incredibly insightful.',
      author: 'Vikram Mehta',
      role: 'Operations Head',
      rating: 5,
      avatar: '/images/testimonial-4.jpg',
      companyLogo: '/images/logos/makemytrip.png'
    }
  ],
  faqs: [
    {
      question: 'Is this the official WhatsApp Business API?',
      answer: 'No, we are an official WhatsApp Business Solution Provider (BSP). We provide tools and services to help businesses use WhatsApp effectively.'
    },
    {
      question: 'What messaging limits apply?',
      answer: 'Template messages have daily limits based on quality rating. Session messages (replies within 24h) have no limits.'
    },
    {
      question: 'Can we use our existing number?',
      answer: 'Yes, you can register your current business number after verification. We also provide dedicated numbers if needed.'
    },
    {
      question: 'How do pricing plans work?',
      answer: 'We offer pay-as-you-go and subscription plans based on message volume. Contact us for customized enterprise pricing.'
    },
    {
      question: 'What about data security?',
      answer: 'All messages are end-to-end encrypted. Were GDPR compliant and ISO 27001 certified for data protection.'
    }
  ],
  integrationSteps: [
    {
      step: 1,
      title: 'Create Account',
      description: 'Sign up in minutes with your business details',
      image: '/images/integration/signup.png'
    },
    {
      step: 2,
      title: 'Connect WhatsApp',
      description: 'Verify your business number with our simple process',
      image: '/images/integration/verify.png'
    },
    {
      step: 3,
      title: 'Start Engaging',
      description: 'Send your first campaign or set up automation',
      image: '/images/integration/dashboard.png'
    }
  ]
};

// Animated Counter Component
const Counter = ({ target, duration = 2, suffix }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = target / (duration * 60);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {new Intl.NumberFormat().format(count)}{suffix}
    </span>
  );
};

// Flip Card Component for Industries
const FlipCard = ({ industry }: { industry: typeof whatsappData.industries[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-80 [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full rounded-xl shadow-md"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
              {industry.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {industry.name}
            </h3>
          </div>
          
          <ul className="space-y-2 mb-4">
            {industry.useCases.map((useCase, j) => (
              <li key={j} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{useCase}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto">
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
              <p className="text-green-600 dark:text-green-400 font-medium">{industry.stats}</p>
            </div>
            <div className="text-center text-sm text-green-600 dark:text-green-400 font-medium flex items-center justify-center">
              <span>View details</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-xl opacity-10"
            style={{ backgroundImage: `url(${industry.image})` }}
          />
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full p-4">
              <img src={industry.mockup} alt={industry.name} className="w-full h-full object-contain" />
            </div>
            <p className="relative z-10 text-gray-700 dark:text-gray-300 text-sm">
              {industry.backContent}
            </p>
            <button className="mt-4 text-green-600 dark:text-green-400 text-sm font-medium flex items-center justify-center mx-auto">
              <span>Flip back</span>
              <ChevronLeft className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Testimonial Carousel Component
const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((prev) => 
      prev === whatsappData.testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prev = () => {
    setCurrent((prev) => 
      prev === 0 ? whatsappData.testimonials.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden relative h-96">
        {whatsappData.testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: i === current ? 1 : 0,
              x: `${(i - current) * 100}%`
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg flex flex-col items-center text-center`}
          >
            <div className="flex items-center mb-6">
              <img src={testimonial.companyLogo} alt="Company" className="h-8 mr-4 opacity-80" />
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute -top-6 -left-6 opacity-10">
                <FaWhatsapp className="w-12 h-12 text-green-500" />
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 italic relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
            
            <div className="mt-auto flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-green-400">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        {whatsappData.testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-green-500 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
      
      <button 
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
      
      <button 
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

// FAQ Accordion Component
const FAQAccordion = ({ faqs }: { faqs: typeof whatsappData.faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-500"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.span>
          </button>
          
          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// Message Example Component
const MessageExample = ({ type, example }: { type: string; example: string }) => {
  return (
    <motion.div 
      className="relative bg-white p-4 rounded-2xl shadow-lg border border-gray-200 max-w-xs mx-auto"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
          {/* Replace FaWhatsapp with your logo */}
          <img 
            src="/assets/DS logo ( Blue ) SVG.svg" 
            alt="DuoTech" 
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="text-sm font-medium">DuoTech Solutions</div>
        <div className="ml-auto text-xs text-gray-500">12:05 PM</div>
      </div>
      <img src={example} alt={type} className="rounded-lg w-full" />
    </motion.div>
  );
};

// Main WhatsApp Services Page Component
const WhatsAppServicesPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <ParallaxProvider>
      <MainLayout>
        {/* Hero Section */}
        <section className="relative h-screen bg-gradient-to-br from-green-900 to-green-700 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/whatsapp-pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Animated bubbles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`absolute rounded-full bg-white/10 ${
                i % 3 === 0 ? 'w-6 h-6' : i % 2 === 0 ? 'w-4 h-4' : 'w-2 h-2'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}

          <Container className="h-full flex flex-col justify-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">WhatsApp Business Solution Provider</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                >
                  Enterprise <span className="text-green-300">WhatsApp</span> Solutions
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-green-100 mb-10"
                >
                  Automate customer conversations at scale with our powerful platform
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-green-400 hover:bg-green-500 text-green-900 shadow-lg hover:shadow-green-400/50"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    {whatsappData.hero.cta}
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    {whatsappData.hero.secondaryCta}
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                
                <WhatsAppMockup 
                  title="Customer Support"
                  messages={[
                    {
                      id: 1,
                      text: "Welcome to our Business! How can we help you today?",
                      sender: "bot",
                      time: "10:30 AM",
                      buttons: ["Make a Purchase", "Get Support", "Track Order"]
                    },
                    {
                      id: 2,
                      text: "I'd like to make a purchase",
                      sender: "customer",
                      time: "10:31 AM"
                    },
                    {
                      id: 3,
                      text: "Great! Browse our catalog here: [Link to Catalog]",
                      sender: "bot",
                      time: "10:31 AM"
                    }
                  ]}
                />
              </motion.div>
            </div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-0 right-0 text-center"
            >
              <p className="text-green-200 mb-2">Explore our solutions</p>
              <ArrowRight className="w-6 h-6 mx-auto text-green-200 rotate-90" />
            </motion.div>
          </Container>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Powerful <span className="text-green-600 dark:text-green-400">Features</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate and scale customer conversations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {whatsappData.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8"
                >
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring" }}
                      className="mb-6 inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-900/30 shadow-sm"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="flex-1">
                    {feature.mockup}
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Business Benefits Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-gray-800 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-800 to-transparent"></div>
          
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Measurable <span className="text-green-600 dark:text-green-400">Results</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Transform your customer communication and see real impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {whatsappData.businessBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                  <div className="flex items-center justify-center w-16 h-16 bg-green-50 dark:bg-green-900/30 rounded-full mb-4 mx-auto relative z-10">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 text-center mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Join <span className="text-green-600 dark:text-green-400">10,000+</span> businesses using our platform
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        <Counter target={98} suffix="%" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Message open rate</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        <Counter target={85} suffix="%" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Customer satisfaction</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        <Counter target={500} suffix="M+" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Messages monthly</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                        <Counter target={120} suffix="+" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">Countries served</p>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <WhatsAppMockup 
                    title="Analytics Dashboard"
                    autoAnimate={false}
                    messages={[
                      {
                        id: 1,
                        text: "Your business is growing! 245 new conversations today",
                        sender: "system",
                        time: "Today"
                      },
                      {
                        id: 2,
                        text: "📊 98% customer satisfaction rating this week",
                        sender: "system",
                        time: "Today"
                      },
                      {
                        id: 3,
                        text: "⭐ You've achieved Gold Tier status!",
                        sender: "system",
                        time: "Today"
                      }
                    ]}
                  />
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Message Types Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Rich <span className="text-green-600 dark:text-green-400">Message</span> Types
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Engage customers with interactive and multimedia content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {whatsappData.messageTypes.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                      {message.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {message.type}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {message.description}
                  </p>
                  <MessageExample type={message.type} example={message.example} />
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    See interactive messages in action
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our platform supports all WhatsApp message types including buttons, quick replies, media, and templates for seamless customer interactions.
                  </p>
                  <Button
                    variant="primary"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    View Message Examples
                  </Button>
                </div>
                
                <div>
                  <WhatsAppMockup 
                    title="Interactive Messages"
                    messages={[
                      {
                        id: 1,
                        text: "Which product category are you interested in?",
                        sender: "bot",
                        time: "10:30 AM",
                        buttons: ["Electronics", "Clothing", "Home Goods", "Beauty"]
                      },
                      {
                        id: 2,
                        text: "Check out our summer collection!",
                        sender: "bot",
                        time: "10:31 AM"
                      },
                      {
                        id: 3,
                        text: "[Image: Summer Collection]",
                        sender: "bot",
                        time: "10:31 AM",
                        buttons: ["View Details", "Shop Now"]
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Industries Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Industry <span className="text-green-600 dark:text-green-400">Solutions</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for your specific industry needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whatsappData.industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FlipCard industry={industry} />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Our <span className="text-green-600 dark:text-green-400">Clients</span> Say
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Trusted by leading brands across industries
              </p>
            </div>
            
            <TestimonialCarousel />
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked <span className="text-green-600 dark:text-green-400">Questions</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Everything you need to know about our WhatsApp solutions
                </p>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Still have questions?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Can't find the answer you're looking for?</p>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    className="w-full"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Chat with us
                  </Button>
                </div>
              </div>
              
              <div>
                <FAQAccordion faqs={whatsappData.faqs} />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/whatsapp-pattern.png')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to transform your customer communication?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Join thousands of businesses using our WhatsApp solutions to boost engagement and drive growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-green text-green-700 hover:bg-green-50"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get Started Free
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-white hover:bg-white/10"
                    icon={<MessageSquare className="w-5 h-5" />}
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                
                <WhatsAppMockup 
                  title="Get Started Today"
                  messages={[
                    {
                      id: 1,
                      text: "Welcome! Let's set up your WhatsApp Business account",
                      sender: "bot",
                      time: "Now",
                      buttons: ["Create Account", "Schedule Demo"]
                    },
                    {
                      id: 2,
                      text: "You'll be able to send messages to customers in minutes!",
                      sender: "bot",
                      time: "Now"
                    }
                  ]}
                />
              </motion.div>
            </div>
          </Container>
        </section>
      </MainLayout>
    </ParallaxProvider>
  );
};

export default WhatsAppServicesPage;