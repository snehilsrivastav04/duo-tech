
import React from 'react';
import Container from '../ui/Container';
import IndustryCard from './IndustryCard';

interface Industry {
  name: string;
  useCases: string[];
  icon: React.ReactElement;
}

interface IndustryUseCasesProps {
  industries: Industry[];
}

const IndustryUseCases: React.FC<IndustryUseCasesProps> = ({ industries }) => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Industry-Specific</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored SMS solutions for your business sector
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <IndustryCard 
              key={i}
              industry={industry}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IndustryUseCases;
