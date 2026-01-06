import React, { useState, useEffect, MouseEvent } from 'react';
import { Target, Handshake, Brain, Rocket, Clock, Users, Shield, MessageCircle, ChevronRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('vision');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const values = [
    {
      id: 0,
      icon: <Target className="w-6 h-6" />,
      title: "Purpose-Driven",
      subtitle: "Building meaningful solutions",
      description: "Every feature, every line of code, every design decision is made with clear intention. We build technology that serves humanity, not the other way around.",
      color: "from-blue-900 to-blue-800"
    },
    {
      id: 1,
      icon: <Handshake className="w-6 h-6" />,
      title: "Partnership Mindset",
      subtitle: "Your success fuels our growth",
      description: "We don't just deliver projects—we build lasting partnerships. When you win, we win. This mindset drives us to go beyond expectations.",
      color: "from-indigo-900 to-indigo-800"
    },
    {
      id: 2,
      icon: <Brain className="w-6 h-6" />,
      title: "Continuous Evolution",
      subtitle: "Learning and adapting",
      description: "The digital world never stands still, and neither do we. We invest heavily in learning, experimentation, and staying at the forefront of technology.",
      color: "from-violet-900 to-violet-800"
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6" />,
      title: "Bold Innovation",
      subtitle: "Challenging conventions",
      description: "We take calculated risks to push boundaries and explore what's possible. Innovation isn't just about adopting the latest tech—it's about fundamentally rethinking solutions.",
      color: "from-purple-900 to-purple-800"
    }
  ];

  const milestones = [
    { 
      year: '2022', 
      title: 'The Beginning', 
      summary: 'Our journey starts',
      detail: 'Founded in 2022 with a vision to revolutionize digital communication. DuoTech started with a small, dedicated team and an ambitious goal to make enterprise-grade tools accessible to everyone. We believe in the power of technology to connect people and businesses.',
      impact: 'Launched beta platform',
      icon: <Sparkles className="w-5 h-5" />
    },
    { 
      year: '2023', 
      title: 'First Clients', 
      summary: 'Building trust',
      detail: 'Secured our first wave of forward-thinking partners who believed in our vision. Their feedback shaped our platform into something truly special.',
      impact: 'Onboarded 10+ partners',
      icon: <Users className="w-5 h-5" />
    },
    { 
      year: '2024', 
      title: 'Platform Evolution', 
      summary: 'Expanding capabilities',
      detail: 'Launched multi-channel communication features, expanding beyond SMS to email, voice, and push notifications. Positioned ourselves as a comprehensive solution.',
      impact: 'Processing millions of messages',
      icon: <TrendingUp className="w-5 h-5" />
    },
    { 
      year: '2025', 
      title: 'Future Forward', 
      summary: 'Working continuously on improvements and innovation',
      detail: 'We are continuously working to improve and innovate. Our roadmap for 2025 and beyond focuses on integrating AI-powered insights, expanding our global reach, and developing next-generation communication technologies to stay ahead of the curve and redefine industry standards.',
      impact: 'Industry-leading reliability',
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: '2026',
      title: 'Looking Ahead',
      summary: 'The next chapter',
      detail: 'Our journey continues as we explore new frontiers in communication technology. We are committed to pushing the boundaries of what\'s possible and delivering even more value to our partners.',
      impact: 'Pioneering new technologies',
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const stats = [
    { 
      value: '2022',
      label: 'Founded', 
      icon: <Clock className="w-5 h-5" />,
      detail: 'Building the future',
      trend: '+100% growth'
    },
    { 
      value: '50+',
      label: 'Partners', 
      icon: <Users className="w-5 h-5" />,
      detail: 'Growing rapidly',
      trend: 'Accelerating'
    },
    { 
      value: '99.9%',
      label: 'Uptime', 
      icon: <Shield className="w-5 h-5" />,
      detail: 'Enterprise reliability',
      trend: 'Best-in-class'
    },
    { 
      value: '24/7',
      label: 'Support', 
      icon: <MessageCircle className="w-5 h-5" />,
      detail: 'Always available',
      trend: 'Instant response'
    }
  ];

  const founderTabs = [
    { id: 'vision', label: 'Vision', content: 'Satyam founded DuoTech in 2022 with a singular mission: to make enterprise-grade communication tools accessible to everyone. His vision combines technical excellence with a deep understanding of human connection.' },
    { id: 'background', label: 'Background', content: 'With a background in software engineering and product design, Satyam brings a unique perspective that bridges technology and human experience. His approach focuses on creating solutions that feel both powerful and intuitive.' },
    { id: 'philosophy', label: 'Philosophy', content: 'Believes in building technology that serves people, not the other way around. Every decision at DuoTech is guided by the principle that great technology should feel invisible, natural, and empowering.' }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-100 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-900 to-violet-900 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Hero Section with Interactive Background */}
        <section className="relative overflow-hidden border-b border-gray-100">
          <div 
            className="absolute inset-0 opacity-[0.03] transition-opacity duration-1000"
            onMouseMove={handleMouseMove}
          >
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(30, 58, 138) 1px, transparent 0)`,
                backgroundSize: '48px 48px',
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }} 
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-8 py-32 md:py-40">
            <div className="max-w-3xl">
              <div className="inline-block mb-6 px-3 py-1 border border-gray-200 text-xs tracking-[0.2em] text-gray-500 uppercase animate-fade-in">
                About Us
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Building the future<br />
                of <span className="text-blue-900 relative inline-block group">
                  connection
                  <span className="absolute bottom-0 left-0 w-full h-px bg-blue-900 transform origin-left transition-transform duration-500 group-hover:scale-x-110"></span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-12">
                We craft communication solutions that feel human, intuitive, and powerful. 
                Technology that brings people closer together.
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-12 h-px bg-gradient-to-r from-gray-200 to-transparent animate-pulse" />
                <span className="tracking-wide">Est. 2022</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Stats Grid */}
        <section className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-8 py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 group hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all duration-500 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent transition-opacity duration-500 ${hoveredStat === i ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className="relative">
                    <div className={`text-gray-300 group-hover:text-blue-900 transition-all duration-500 mb-6 transform ${hoveredStat === i ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2 tracking-tight transform transition-transform duration-500 group-hover:translate-x-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mb-2 tracking-wide">
                      {stat.label}
                    </div>
                    <div className={`text-xs font-light transition-all duration-500 ${hoveredStat === i ? 'text-blue-900 opacity-100 translate-y-0' : 'text-gray-400 opacity-0 translate-y-2'}`}>
                      {stat.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Values Section */}
        <section className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="max-w-2xl mb-20">
              <div className="inline-block mb-6 px-3 py-1 border border-gray-200 text-xs tracking-[0.2em] text-gray-500 uppercase">
                Core Values
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                What drives us forward
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                The principles that guide every decision we make
              </p>
            </div>

            {/* Interactive Value Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(i)}
                  className={`text-left p-8 transition-all duration-500 relative overflow-hidden group ${
                    activeValue === i 
                      ? `bg-gradient-to-br ${value.color} text-white shadow-xl scale-105` 
                      : 'bg-white hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {/* Animated background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`p-3 border mb-6 inline-block transition-all duration-500 ${
                      activeValue === i 
                        ? 'border-white/30 text-white transform rotate-6 scale-110' 
                        : 'border-gray-200 text-gray-400 group-hover:border-blue-900 group-hover:text-blue-900'
                    }`}>
                      {value.icon}
                    </div>
                    
                    <h3 className={`text-2xl font-light tracking-tight mb-2 transition-colors duration-500 ${
                      activeValue === i ? 'text-white' : 'text-gray-900'
                    }`}>
                      {value.title}
                    </h3>
                    
                    <p className={`text-sm mb-4 transition-colors duration-500 ${
                      activeValue === i ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {value.subtitle}
                    </p>
                    
                    <div className={`overflow-hidden transition-all duration-700 ${
                      activeValue === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className={`text-sm font-light leading-relaxed ${
                        activeValue === i ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Journey Timeline */}
        <section className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="max-w-2xl mb-20">
              <div className="inline-block mb-6 px-3 py-1 border border-gray-200 text-xs tracking-[0.2em] text-gray-500 uppercase">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Growing together
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Key moments shaping our path forward
              </p>
            </div>

            {/* Timeline with visual connection */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-900 via-violet-900 to-purple-900 opacity-20" />
              
              <div className="space-y-4">
                {milestones.map((milestone, i) => (
                  <button
                    key={i}
                    onClick={() => setExpandedMilestone(expandedMilestone === i ? null : i)}
                    className={`w-full text-left p-8 transition-all duration-500 relative overflow-hidden group ${
                      expandedMilestone === i 
                        ? 'bg-gradient-to-br from-blue-50 to-white border-2 border-blue-900 shadow-lg' 
                        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {/* Animated indicator */}
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-500 ${
                      expandedMilestone === i 
                        ? 'bg-blue-900 scale-150' 
                        : 'bg-gray-300 scale-100'
                    }`} />
                    
                    <div className="flex items-start gap-8 pl-6">
                      <div className="flex-shrink-0 w-32">
                        <div className={`text-3xl font-light tracking-tight transition-all duration-500 ${
                          expandedMilestone === i 
                            ? 'text-blue-900 scale-110' 
                            : 'text-gray-400 group-hover:text-blue-900'
                        }`}>
                          {milestone.year}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 transition-all duration-500 ${
                              expandedMilestone === i 
                                ? 'bg-blue-900 text-white scale-110' 
                                : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-900'
                            }`}>
                              {milestone.icon}
                            </div>
                            <h3 className="text-xl font-light text-gray-900">
                              {milestone.title}
                            </h3>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-gray-300 transition-all duration-500 ${
                            expandedMilestone === i ? 'rotate-90 text-blue-900' : 'group-hover:text-blue-900'
                          }`} />
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-4">
                          {milestone.summary}
                        </p>
                        
                        <div className={`overflow-hidden transition-all duration-700 ${
                          expandedMilestone === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                              {milestone.detail}
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white text-xs transform hover:scale-105 transition-transform duration-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              {milestone.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Founder Section with Tabs */}
        <section className="border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-8 py-32">
            <div className="max-w-2xl mb-20">
              <div className="inline-block mb-6 px-3 py-1 border border-gray-200 text-xs tracking-[0.2em] text-gray-500 uppercase">
                Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                Meet our founder
              </h2>
            </div>

            <div className="items-start">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
                  Satyam Sharma
                </h3>
                <p className="text-blue-900 mb-8 tracking-wide text-sm">
                  Founder & Chief Executive Officer
                </p>
                
                {/* Interactive Tabs */}
                <div className="flex gap-2 mb-6 border-b border-gray-200">
                  {founderTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 text-sm transition-all duration-300 relative ${
                        activeTab === tab.id 
                          ? 'text-blue-900' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900 animate-slide-in" />
                      )}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div className="relative min-h-[120px]">
                  {founderTabs.map((tab) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-500 absolute inset-0 ${
                        activeTab === tab.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4 pointer-events-none'
                      }`}
                    >
                      <p className="text-gray-600 font-light leading-relaxed">
                        {tab.content}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-px bg-gray-100 mt-8">
                  {['Tech Visionary', 'People Champion', 'Innovation Driver'].map((badge, i) => (
                    <div 
                      key={i}
                      className="bg-white px-4 py-2 text-xs text-gray-500 tracking-wide hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient Animation */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative max-w-6xl mx-auto px-8 py-32">
            <div className="max-w-2xl">
              <div className="inline-block mb-6 px-3 py-1 border border-blue-700 text-xs tracking-[0.2em] text-blue-300 uppercase animate-fade-in">
                Let's Work Together
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight leading-tight">
                Ready to transform your communication?
              </h2>
              
              <p className="text-lg text-blue-100 font-light leading-relaxed mb-12">
                Join forward-thinking companies who trust DuoTech to power their 
                most critical communications. Your success story starts here.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="px-8 py-3 bg-white hover:bg-blue-50 text-blue-900 text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Schedule a Demo
                </Link>
                <Link to="/contact" className="px-8 py-3 border border-blue-700 hover:border-blue-600 hover:bg-blue-800/30 text-white text-sm tracking-wide transition-all duration-300 transform hover:scale-105">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
            transform-origin: left;
          }
        `}</style>
      </div>
    </MainLayout>
  );
};

export default AboutPage;