import React, { useState } from 'react';
import { MessageSquare, ShoppingCart, BarChart2, Shield } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Rich Media',
    description: 'Send high-resolution images, videos, GIFs and files',
    details: 'No more compressed media - deliver stunning visuals directly in the message thread with full quality preservation'
  },
  {
    icon: ShoppingCart,
    title: 'Interactive Buttons',
    description: 'Include clickable CTAs for instant actions',
    details: 'Drive conversions with buttons for purchases, bookings, and more without leaving the chat interface'
  },
  {
    icon: BarChart2,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into message performance',
    details: 'Track opens, clicks, conversions and ROI with our comprehensive analytics suite and data visualization'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and compliance',
    details: 'Bank-level security with GDPR, HIPAA and PCI compliance built-in for complete peace of mind'
  }
];

export default function Features() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="min-h-screen bg-white py-32 px-6">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30, 58, 138) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-gray-200 rounded-full">
            <span className="text-xs font-light tracking-widest text-gray-500 uppercase">Features</span>
          </div>
          <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Why Choose <span className="font-normal text-blue-900">RCS</span>
          </h2>
          <p className="text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The next evolution of business messaging with unparalleled engagement
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-1">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Horizontal Divider */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-100" />
                
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left py-10 px-8 transition-all duration-500 ease-out hover:bg-gray-50/50"
                >
                  <div className="flex items-center justify-between gap-8">
                    {/* Icon & Content */}
                    <div className="flex items-center gap-8 flex-1 min-w-0">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full border transition-all duration-500 flex items-center justify-center ${
                        isExpanded 
                          ? 'bg-blue-900 border-blue-900' 
                          : 'bg-white border-gray-200 group-hover:border-blue-900/20'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors duration-500 ${
                          isExpanded ? 'text-white' : 'text-gray-400 group-hover:text-blue-900'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-2xl font-light mb-2 transition-colors duration-500 ${
                          isExpanded ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-base font-light text-gray-500 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Index Number */}
                    <div className={`flex-shrink-0 text-6xl font-extralight transition-colors duration-500 ${
                      isExpanded ? 'text-blue-900/20' : 'text-gray-200 group-hover:text-blue-900/10'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isExpanded ? '200px' : '0',
                      opacity: isExpanded ? 1 : 0
                    }}
                  >
                    <div className="pt-6 pl-20">
                      <div className="max-w-2xl">
                        <p className="text-base font-light text-gray-600 leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
          
          {/* Bottom Border */}
          <div className="h-[1px] bg-gray-100" />
        </div>

        {/* Footer Text */}
        <div className="mt-24 text-center">
          <p className="text-sm font-light text-gray-400 tracking-wide">
            Elevate your messaging experience with enterprise-grade capabilities
          </p>
        </div>
      </div>
    </section>
  );
}