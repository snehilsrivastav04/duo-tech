import React, { useState } from 'react';
import { Globe, PhoneForwarded, Shield, BarChart2, Voicemail, PhoneIncoming } from 'lucide-react';

const featuresData = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Get local numbers in countries where you want to establish a presence with area codes that build trust',
    details: 'Cover 150+ countries with instant provisioning and local compliance support'
  },
  {
    icon: PhoneForwarded,
    title: 'Smart Call Routing',
    description: 'Route calls based on timezone, language, or department for optimal customer experience',
    details: 'Advanced IVR systems with intelligent distribution and priority queuing'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance with global communication standards',
    details: 'SOC 2 Type II certified with end-to-end TLS encryption'
  },
  {
    icon: BarChart2,
    title: 'Advanced Analytics',
    description: 'Real-time call tracking and performance metrics to optimize your operations',
    details: 'Customizable dashboards with export capabilities and API access'
  },
  {
    icon: Voicemail,
    title: 'Voicemail Transcription',
    description: 'Automatically convert voicemails to text and forward to email',
    details: 'AI-powered transcription in 40+ languages with sentiment analysis'
  },
  {
    icon: PhoneIncoming,
    title: 'Call Recording',
    description: 'Record calls for quality assurance, training, and compliance purposes',
    details: 'Secure cloud storage with searchable transcripts and compliance controls'
  }
];

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="relative bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37, 99, 235) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
              Capabilities
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Built for<br />
            <span className="font-normal text-blue-600">Modern Business</span>
          </h2>
          
          <p className="text-gray-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Enterprise-grade communication infrastructure designed for simplicity and scale
          </p>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto space-y-1">
          {featuresData.map((feature, i) => {
            const Icon = feature.icon;
            const isExpanded = expandedIndex === i;
            
            return (
              <div
                key={i}
                onMouseEnter={() => setExpandedIndex(i)}
                onMouseLeave={() => setExpandedIndex(null)}
                className="group relative"
              >
                {/* Divider */}
                <div className="h-px bg-gray-100 group-hover:bg-blue-100 transition-colors duration-500"></div>
                
                {/* Feature Content */}
                <div className="py-8 px-6 cursor-default">
                  <div className="flex items-start gap-8">
                    {/* Icon */}
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-500
                      ${isExpanded 
                        ? 'bg-blue-600 text-white scale-110' 
                        : 'bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }
                    `}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`
                        text-2xl font-light mb-3 tracking-tight transition-all duration-500
                        ${isExpanded ? 'text-blue-600' : 'text-gray-900 group-hover:text-gray-700'}
                      `}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      
                      {/* Expanded Details */}
                      <div className={`
                        overflow-hidden transition-all duration-500
                        ${isExpanded ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}
                      `}>
                        <div className="pt-2 pb-4">
                          <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
                          </div>
                          <p className="text-sm text-gray-500 mt-4 font-light">
                            {feature.details}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Number Indicator */}
                    <div className={`
                      flex-shrink-0 text-7xl font-extralight transition-all duration-500
                      ${isExpanded ? 'text-blue-200' : 'text-gray-100 group-hover:text-gray-200'}
                    `}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Final divider */}
          <div className="h-px bg-gray-100"></div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-500 mb-6 font-light">
            Discover how these features work together
          </p>
          <button className="
            group inline-flex items-center gap-3 px-8 py-4
            border border-gray-200 rounded-full
            hover:border-blue-600 hover:bg-blue-50
            transition-all duration-500
          ">
            <span className="text-sm uppercase tracking-wider text-gray-700 group-hover:text-blue-600 transition-colors">
              View Documentation
            </span>
            <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-blue-600 flex items-center justify-center group-hover:bg-blue-600 transition-all">
              <span className="text-xs text-gray-400 group-hover:text-white">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}