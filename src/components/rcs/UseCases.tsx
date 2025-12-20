import React, { useState } from 'react';
import { ShoppingCart, BarChart2, Globe } from 'lucide-react';

const useCases = [
  {
    title: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Product showcases with instant purchase options',
    features: ['Interactive catalogs', 'Abandoned cart recovery', 'Personalized offers', 'Order tracking']
  },
  {
    title: 'Banking & Finance',
    icon: BarChart2,
    description: 'Secure transaction verification and alerts',
    features: ['Fraud alerts', 'Balance notifications', 'Payment confirmations', 'Loan approvals']
  },
  {
    title: 'Travel & Hospitality',
    icon: Globe,
    description: 'Interactive itineraries and booking management',
    features: ['Booking confirmations', 'Check-in reminders', 'Upgrade offers', 'Local experience guides']
  }
];

export default function UseCases() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="min-h-screen bg-white relative">
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="inline-block mb-4 px-4 py-1 border border-gray-200 rounded-full">
            <span className="text-xs font-light tracking-widest text-gray-500 uppercase">Solutions</span>
          </div>
          <h2 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Industry <span className="font-normal text-blue-900">Solutions</span>
          </h2>
          <p className="text-xl font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Tailored RCS messaging solutions for your business needs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16 border-b border-gray-200">
          <div className="flex gap-2">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const isSelected = selectedIndex === index;
              
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="relative px-8 py-6 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-12 h-12 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isSelected 
                        ? 'bg-blue-900 border-blue-900' 
                        : 'bg-white border-gray-200 hover:border-blue-900/30'
                    }`}>
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${
                        isSelected ? 'text-white' : 'text-gray-400 hover:text-blue-900'
                      }`} />
                    </div>
                    <span className={`text-sm font-light transition-colors duration-300 ${
                      isSelected ? 'text-blue-900' : 'text-gray-500'
                    }`}>
                      {useCase.title}
                    </span>
                  </div>
                  
                  {/* Active Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-900 transition-all duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-0'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isSelected = selectedIndex === index;
            
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isSelected 
                    ? 'opacity-100 block' 
                    : 'opacity-0 hidden'
                }`}
              >
                {/* Description Card */}
                <div className="bg-gray-50 rounded-2xl p-12 mb-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-light text-gray-900 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-lg font-light text-gray-600 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useCase.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-900/30 hover:bg-gray-50/50 transition-all duration-300"
                      style={{
                        animation: isSelected ? `fadeInUp 0.5s ease-out ${featureIndex * 0.1}s both` : 'none'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full border-2 border-blue-900 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-blue-900" />
                        </div>
                        <span className="text-lg font-light text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-32 text-center">
          <p className="text-sm font-light text-gray-400 tracking-wide">
            Custom solutions available for healthcare, education, and more
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}