
import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, LucideProps } from 'lucide-react';

interface Feature {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  details: string[];
  demo: string;
}

interface FeatureExplorerProps {
  features: Feature[];
}

const FeatureExplorer: React.FC<FeatureExplorerProps> = ({ features }) => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
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
  );
};

export default FeatureExplorer;
