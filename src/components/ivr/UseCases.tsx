
import React, { useState } from 'react';
import { X, LucideProps } from 'lucide-react';

interface UseCase {
  icon: React.ElementType<LucideProps>;
  industry: string;
  title: string;
  examples: string[];
  benefits: string;
  color: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

const UseCases: React.FC<UseCasesProps> = ({ useCases }) => {
  const [selectedUseCase, setSelectedUseCase] = useState<number | null>(null);

  return (
    <section id="usecases" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-4">Industry Use Cases</h2>
          <p className="text-lg font-light text-gray-600 max-w-3xl">
            Click any industry to explore specific applications and benefits
          </p>
          <div className="h-px w-24 bg-blue-900 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            const isSelected = selectedUseCase === idx;
            
            return (
              <button
                key={idx}
                onClick={() => setSelectedUseCase(isSelected ? null : idx)}
                className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-blue-900 bg-blue-50 shadow-xl'
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                <Icon size={36} className={`mb-4 transition-colors duration-300 ${
                  isSelected ? 'text-blue-900' : 'text-gray-400'
                }`} strokeWidth={1.5} />
                <div className="text-xs font-light tracking-wider text-gray-400 uppercase mb-2">
                  {useCase.industry}
                </div>
                <h3 className="text-lg font-light text-gray-900">
                  {useCase.title}
                </h3>
              </button>
            );
          })}
        </div>

        {selectedUseCase !== null && useCases[selectedUseCase] && (
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-2 border-blue-900 shadow-xl">
            <button
              onClick={() => setSelectedUseCase(null)}
              className="float-right text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-light tracking-wider text-blue-900 uppercase mb-2">
                  {useCases[selectedUseCase]?.industry}
                </div>
                <h3 className="text-3xl font-light text-gray-900 mb-4">
                  {useCases[selectedUseCase]?.title}
                </h3>
                <div className="bg-blue-900 text-white p-6 rounded-lg">
                  <div className="text-xs font-light tracking-wider uppercase mb-2 text-blue-200">Business Impact</div>
                  <p className="text-base font-light">{useCases[selectedUseCase]?.benefits}</p>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-light tracking-wider text-gray-400 uppercase mb-4">Common Applications</div>
                <div className="space-y-3">
                  {useCases[selectedUseCase]?.examples.map((example, eidx) => (
                    <div 
                      key={eidx} 
                      className="flex items-start gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs flex-shrink-0">
                        {eidx + 1}
                      </div>
                      <span className="text-base font-light text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCases;
