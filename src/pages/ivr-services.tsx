import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';

import ErrorBoundary from '../components/ui/ErrorBoundary';
import {
  Hero,
  Stats,
  WhyChooseUs,
  Features,
  AdvancedFeatures,
  UseCases,
  CTA,
  Flowchart,
} from '../components/ivr';

const IVRPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          <Hero />
          <Stats />
          <WhyChooseUs />
          <Features />
          <AdvancedFeatures />
          <section
            id="how-it-works"
            className="py-32 bg-white dark:bg-blue-950"
            aria-labelledby="how-it-works-title"
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2
                  id="how-it-works-title"
                  className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  How It <span className="text-blue-600 dark:text-blue-400">Works</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-blue-200 max-w-2xl mx-auto">
                  A simplified step-by-step process of our IVR service.
                </p>
              </div>
              <Flowchart />
            </div>
          </section>
          <UseCases />
          <CTA />
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default IVRPage;
