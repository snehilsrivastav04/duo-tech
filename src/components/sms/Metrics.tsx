
import React from 'react';
import Container from '../ui/Container';
import MetricCard from './MetricCard';

interface Metric {
  value: string;
  label: string;
  icon: React.ReactElement;
}

interface MetricsProps {
  metrics: Metric[];
}

const Metrics: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="text-cyan-300">Performance</span> Metrics
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Numbers that prove our reliability and speed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard 
              key={i}
              metric={metric}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Metrics;
