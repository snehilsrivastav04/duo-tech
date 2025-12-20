import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, X, Check, MessageSquare, Image as ImageIcon, Calendar, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const rcsData = {
  hero: {
    title: "RCS Messaging",
    subtitle: "Transform customer engagement with rich, interactive communication",
    cta: "Start Building",
    secondaryCta: "Watch Demo",
    stats: [
      { value: "10×", label: "Engagement Rate" },
      { value: "90%", label: "Open Rate" },
      { value: "5×", label: "Conversion Lift" }
    ]
  }
};

interface RCSMockupProps {
  isPlaying: boolean;
  onPlayToggle: () => void;
}

const RCSMockup: React.FC<RCSMockupProps> = ({ isPlaying, onPlayToggle }) => {
  const messages = [
    { 
      id: 1, 
      sender: "brand", 
      content: "Your appointment is confirmed!",
      time: "10:00 AM",
      type: "confirmation",
      richContent: {
        title: "Appointment Details",
        items: [
          { icon: <Calendar size={16} />, text: "Friday, Dec 15 · 2:00 PM" },
          { icon: <MapPin size={16} />, text: "123 Business Ave, Suite 400" },
          { icon: <MessageSquare size={16} />, text: "Dr. Sarah Chen" }
        ],
        buttons: ["Add to Calendar", "Reschedule"]
      }
    },
    { 
      id: 2, 
      sender: "brand", 
      content: "Your order is ready for pickup",
      time: "10:02 AM",
      type: "order",
      richContent: {
        image: "/api/placeholder/400/200",
        title: "Order #78945",
        subtitle: "Ready for pickup",
        items: [
          { text: "Wireless Earbuds Pro", quantity: 1 },
          { text: "Phone Case", quantity: 2 }
        ],
        total: "$247.98",
        buttons: ["View Order", "Pickup Instructions"]
      }
    },
    { 
      id: 3, 
      sender: "user", 
      content: "Thanks! What are your hours today?",
      time: "10:03 AM",
      type: "text"
    },
    { 
      id: 4, 
      sender: "brand", 
      content: "Here's our weekly special",
      time: "10:05 AM",
      type: "promotion",
      richContent: {
        image: "/api/placeholder/400/250",
        title: "Weekend Special",
        subtitle: "Valid through Sunday",
        description: "Enjoy 30% off all electronics with code WEEKEND30",
        buttons: ["Shop Now", "Save Offer"]
      }
    }
  ];

  return (
    <div className="relative">
      {/* Mockup Container */}
      <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-6 max-w-sm mx-auto">
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-6 px-2">
          <div className="text-sm text-gray-400">10:09</div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <MessageSquare className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Business Name</h3>
              <p className="text-sm text-blue-600">Verified Business</p>
            </div>
          </div>
          <div className="text-gray-400">
            <ChevronRight size={20} />
          </div>
        </div>

        {/* Messages Container */}
        <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto px-2">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] ${message.sender === 'user' ? 'bg-blue-50' : 'bg-gray-50'} rounded-2xl p-4`}>
                {/* Message Time */}
                <div className="text-xs text-gray-400 mb-2">{message.time}</div>
                
                {/* Message Content */}
                {message.type === 'text' && (
                  <p className="text-gray-900">{message.content}</p>
                )}
                
                {/* Rich Message Content */}
                {message.richContent && (
                  <div className="space-y-4">
                    {message.richContent.image && (
                      <div className="rounded-lg overflow-hidden bg-gray-100">
                        <img 
                          src={message.richContent.image} 
                          alt="" 
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{message.richContent.title}</h4>
                      {message.richContent.subtitle && (
                        <p className="text-sm text-gray-600 mb-3">{message.richContent.subtitle}</p>
                      )}
                      {message.richContent.description && (
                        <p className="text-sm text-gray-600 mb-4">{message.richContent.description}</p>
                      )}
                      
                      {/* Items List */}
                      {message.richContent.items && (
                        <div className="space-y-2 mb-4">
                          {message.richContent.items.map((item, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-700">
                              {'icon' in item && item.icon && <span className="mr-2 text-gray-400">{item.icon}</span>}
                              <span>{item.text}</span>
                              {'quantity' in item && item.quantity && (
                                <span className="ml-auto text-gray-900">×{item.quantity}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Total */}
                      {message.richContent.total && (
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200 mb-4">
                          <span className="font-medium text-gray-900">Total</span>
                          <span className="font-medium text-gray-900">{message.richContent.total}</span>
                        </div>
                      )}
                      
                      {/* Buttons */}
                      {message.richContent.buttons && (
                        <div className="space-y-2">
                          {message.richContent.buttons.map((button, i) => (
                            <button
                              key={i}
                              className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              {button}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Simple Text Message */}
                {!message.richContent && message.type === 'text' && (
                  <p className="text-gray-900">{message.content}</p>
                )}
                
                {/* Confirmation Check */}
                {message.type === 'confirmation' && (
                  <div className="flex items-center space-x-2 mt-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-green-600" />
                    </div>
                    <span className="text-sm text-green-600">Confirmed</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-100 pt-4 px-2">
          <div className="flex items-center space-x-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <ImageIcon size={20} className="text-gray-600" />
            </button>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay */}
      <button
        onClick={onPlayToggle}
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      >
        {isPlaying ? (
          <X size={20} className="text-gray-700" />
        ) : (
          <Play size={20} className="text-blue-600" />
        )}
      </button>
    </div>
  );
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Minimalist Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        
        {/* Geometric Shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gray-50 rounded-full" />
      </div>

      <Container className="min-h-screen flex items-center relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
               
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                {rcsData.hero.title}
                <span className="block text-blue-600 font-normal">Reinvented</span>
              </h1>
              
              <p className="text-xl text-gray-600 font-light max-w-lg leading-relaxed">
                {rcsData.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button
                variant="primary"
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-full"
                icon={<ChevronRight size={20} />}
                aria-label="Start building with RCS"
              >
                {rcsData.hero.cta}
              </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-gray-700 border-gray-300 hover:bg-gray-50 px-8 py-4 rounded-full"
                icon={<Play size={20} />}
                onClick={() => setIsPlaying(true)}
                aria-label="Watch RCS demo"
              >
                {rcsData.hero.secondaryCta}
              </Button>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {rcsData.hero.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl font-light text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RCS Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <RCSMockup isPlaying={isPlaying} onPlayToggle={() => setIsPlaying(!isPlaying)} />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-2xl rotate-12"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gray-100 rounded-3xl -rotate-12"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-blue-600/20 to-blue-600/0"></div>
        </motion.div>
      </Container>

      {/* Demo Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X size={20} className="text-gray-700" />
              </button>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900">RCS Messaging in Action</h3>
                <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Play size={24} className="text-white" />
                    </div>
                    <p className="text-gray-600">Unable to load</p>
                  </div>
                </div>
                <p className="text-gray-500 text-center">
                  Experience rich media, suggested replies, and interactive buttons
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
