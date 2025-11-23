
import React from 'react';
import { LucideProps } from 'lucide-react';

interface Reason {
  icon: React.ElementType<LucideProps>;
  title: string;
  description: string;
  impact: string;
  stat: string;
}

interface WhyChooseUsProps {
  reasons: Reason[];
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ reasons }) => {
  return (
    <section id="reasons" className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <h2 className="text-5xl font-light text-gray-900 mb-4">Why Choose Our IVR Solution</h2>
        <p className="text-lg font-light text-gray-600 max-w-3xl">
          Discover the strategic advantages that set our solution apart
        </p>
        <div className="h-px w-24 bg-blue-900 mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;
          return (
            <div
              key={idx}
              className="group p-8 border border-gray-100 hover:border-blue-900 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <Icon size={32} className="text-blue-900 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <div className="text-2xl font-light text-blue-900">{reason.stat}</div>
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-base font-light text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>
              <div className="text-sm font-light text-blue-900 border-t border-gray-100 pt-4">
                {reason.impact}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
