import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
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
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'IVR Solutions & Voice Automation System | Interactive Voice Response | Duotech Solutions',
      description: 'Professional IVR solutions for automated customer service, call routing, and voice automation. Multilingual support, intelligent routing, and 24/7 availability. Contact +91-8800722190.',
      keywords: 'ivr solution, interactive voice response, voice automation, call routing system, ivr system india, auto voice response, ivr services, voice automation software',
      image: 'https://www.duotechsolutions.in/images/ivr-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/ivr-services',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'IVR Services'
    });

    const ivrServiceSchema = createServiceJsonLD({
      name: 'IVR Solutions',
      description: 'Automated interactive voice response systems for customer service, multilingual support, intelligent call routing, and 24/7 availability.',
      image: 'https://www.duotechsolutions.in/images/ivr-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(ivrServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'ivr-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'IVR Services', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#ivr-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

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
