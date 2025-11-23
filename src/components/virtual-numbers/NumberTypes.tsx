import React, { useState } from 'react';
import { MapPin, Phone, Globe, ArrowRight } from 'lucide-react';

const numberTypesData = [
  {
    title: 'Local Numbers',
    icon: MapPin,
    description: 'Numbers with local area codes to establish presence in specific locations',
    features: [
      'Build local trust with area codes',
      'Available in 100+ countries',
      'No geographical restrictions'
    ],
    badge: 'Most Popular'
  },
  {
    title: 'Toll-Free Numbers',
    icon: Phone,
    description: 'Numbers that allow customers to call your business for free',
    features: [
      'Increase call volume from customers',
      'Nationwide coverage',
      'Professional image'
    ],
    badge: 'Enterprise'
  },
  {
    title: 'International Numbers',
    icon: Globe,
    description: 'Numbers from other countries to support global operations',
    features: [
      'Establish international presence',
      'Reduce customer calling costs',
      'Local language support'
    ],
    badge: 'Global'
  }
];

export default function NumberTypes() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-light">
              Number Types
            </span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          
          <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight max-w-3xl">
            The Right Number for
            <br />
            <span className="font-normal text-blue-600">Every Need</span>
          </h2>
          
          <p className="text-gray-500 text-lg font-light max-w-2xl leading-relaxed">
            Three distinct solutions designed to match your business goals and customer expectations
          </p>
        </div>

        {/* Number Type Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
          {numberTypesData.map((type, i) => {
            const Icon = type.icon;
            const isHovered = hoveredIndex === i;
            
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  bg-white p-12 relative overflow-hidden group cursor-default
                  transition-all duration-700
                  ${isHovered ? 'lg:-translate-y-2' : ''}
                `}
              >
                {/* Background gradient on hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent
                  transition-opacity duration-700
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="mb-8">
                    <span className={`
                      inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-wider
                      transition-all duration-500
                      ${isHovered 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-500'
                      }
                    `}>
                      {type.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center
                      transition-all duration-500
                      ${isHovered 
                        ? 'bg-blue-600 scale-110' 
                        : 'bg-gray-100'
                      }
                    `}>
                      <Icon className={`
                        w-7 h-7 transition-colors duration-500
                        ${isHovered ? 'text-white' : 'text-gray-400'}
                      `} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-3xl font-light mb-4 tracking-tight
                    transition-colors duration-500
                    ${isHovered ? 'text-blue-600' : 'text-gray-900'}
                  `}>
                    {type.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-10 min-h-[3rem]">
                    {type.description}
                  </p>

                  {/* Divider */}
                  <div className={`
                    h-px mb-8 transition-all duration-500
                    ${isHovered 
                      ? 'bg-gradient-to-r from-blue-200 via-blue-300 to-transparent' 
                      : 'bg-gray-200'
                    }
                  `}></div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {type.features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`
                          flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                          transition-all duration-500
                          ${isHovered 
                            ? 'bg-blue-100 ring-2 ring-blue-200' 
                            : 'bg-gray-100'
                          }
                        `}>
                          <div className={`
                            w-1.5 h-1.5 rounded-full transition-colors duration-500
                            ${isHovered ? 'bg-blue-600' : 'bg-gray-400'}
                          `}></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className={`
                    group/btn flex items-center gap-3 text-sm uppercase tracking-wider
                    transition-all duration-500
                    ${isHovered ? 'text-blue-600' : 'text-gray-400'}
                  `}>
                    <span>Learn More</span>
                    <ArrowRight className={`
                      w-4 h-4 transition-transform duration-500
                      ${isHovered ? 'translate-x-2' : ''}
                    `} />
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-blue-600
                  transition-all duration-700
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-light mb-6">
            Need help choosing? Our team can recommend the best solution for your needs
          </p>
          <button className="
            group inline-flex items-center gap-3 px-8 py-4
            border border-gray-200 rounded-full
            hover:border-blue-600 hover:bg-blue-50
            transition-all duration-500
          ">
            <span className="text-sm uppercase tracking-wider text-gray-700 group-hover:text-blue-600 transition-colors">
              Talk to an Expert
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