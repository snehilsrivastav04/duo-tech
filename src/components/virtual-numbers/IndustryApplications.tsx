import React, { useState } from 'react';
import { Check, Building2, Heart, Home, TrendingUp, ArrowRight } from 'lucide-react';

const industriesData = [
  {
    title: 'E-commerce',
    icon: Building2,
    description: 'Provide local support numbers for each market you serve',
    features: [
      'Local presence in customer markets',
      'Dedicated numbers for order tracking',
      '24/7 customer support'
    ],
    metric: '47% increase in customer trust',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Healthcare',
    icon: Heart,
    description: 'HIPAA-compliant communication for patient consultations',
    features: [
      'Secure call recording',
      'Appointment reminders',
      'After-hours answering service'
    ],
    metric: '99.9% compliance rating',
    color: 'from-rose-500 to-pink-500'
  },
  {
    title: 'Real Estate',
    icon: Home,
    description: 'Track lead sources with unique numbers for each property',
    features: [
      'Local numbers for each listing',
      'Call tracking by property',
      'Automated lead qualification'
    ],
    metric: '3x better lead conversion',
    color: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Financial Services',
    icon: TrendingUp,
    description: 'Secure communication with clients worldwide',
    features: [
      'Encrypted call recording',
      'Compliance archiving',
      'Multi-factor authentication'
    ],
    metric: 'Bank-grade security',
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function IndustryApplications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industriesData[activeIndex];
  const ActiveIcon = activeIndustry.icon;

  return (
    <section className="relative bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(37, 99, 235) 1px, transparent 1px), linear-gradient(to bottom, rgb(37, 99, 235) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
              Industry Solutions
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight max-w-3xl">
            Built for Your
            <br />
            <span className="font-normal text-blue-600">Industry</span>
          </h2>
          
          <p className="text-gray-500 text-lg font-light max-w-2xl leading-relaxed">
            Tailored communication solutions designed for the unique challenges of your sector
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
          {/* Tab Navigation */}
          <div className="space-y-2">
            {industriesData.map((industry, i) => {
              const Icon = industry.icon;
              const isActive = activeIndex === i;
              
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    w-full text-left p-6 rounded-xl transition-all duration-500
                    ${isActive 
                      ? 'bg-gray-50 border-l-4 border-blue-600' 
                      : 'border-l-4 border-transparent hover:bg-gray-50/50'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500
                      ${isActive 
                        ? 'bg-blue-600 scale-110' 
                        : 'bg-gray-100'
                      }
                    `}>
                      <Icon className={`
                        w-5 h-5 transition-colors duration-500
                        ${isActive ? 'text-white' : 'text-gray-400'}
                      `} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`
                        text-lg font-light tracking-tight transition-colors duration-500
                        ${isActive ? 'text-gray-900' : 'text-gray-600'}
                      `}>
                        {industry.title}
                      </h3>
                    </div>

                    {isActive && (
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Panel */}
          <div className="relative min-h-[500px]">
            <div 
              key={activeIndex}
              className="absolute inset-0 animate-fadeIn"
            >
              {/* Icon & Title */}
              <div className="mb-8">
                <div className={`
                  inline-flex w-20 h-20 rounded-2xl items-center justify-center mb-6
                  bg-gradient-to-br ${activeIndustry.color}
                `}>
                  <ActiveIcon className="w-9 h-9 text-white" />
                </div>
                
                <h3 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
                  {activeIndustry.title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Metric */}
              <div className="mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeIndustry.color}`}></div>
                  <span className="text-sm font-light text-gray-700">
                    {activeIndustry.metric}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mb-10 bg-gradient-to-r ${activeIndustry.color} opacity-20`}></div>

              {/* Features */}
              <div className="mb-12">
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6 font-light">
                  Key Capabilities
                </h4>
                <ul className="space-y-5">
                  {activeIndustry.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-4 group"
                      style={{ 
                        animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                      }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 group-hover:bg-blue-50 transition-colors duration-300">
                        <Check className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="
                group inline-flex items-center gap-3 px-8 py-4
                border border-gray-200 rounded-full
                hover:border-blue-600 hover:bg-blue-50
                transition-all duration-500
              ">
                <span className="text-sm uppercase tracking-wider text-gray-700 group-hover:text-blue-600 transition-colors">
                  View Case Study
                </span>
                <div className="w-5 h-5 rounded-full border border-gray-300 group-hover:border-blue-600 flex items-center justify-center group-hover:bg-blue-600 transition-all">
                  <span className="text-xs text-gray-400 group-hover:text-white">→</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center pt-16 border-t border-gray-200">
          <p className="text-gray-500 mb-6 font-light">
            Don't see your industry? We support businesses across all sectors
          </p>
          <button className="
            group inline-flex items-center gap-3 px-8 py-4
            bg-gray-900 rounded-full
            hover:bg-blue-600
            transition-all duration-500
          ">
            <span className="text-sm uppercase tracking-wider text-white transition-colors">
              Explore All Solutions
            </span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}