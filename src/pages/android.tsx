import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import Hero from '../components/android/Hero';
import Services from '../components/android/Services';
import Metrics from '../components/android/Metrics';
import TechStack from '../components/android/TechStack';
import Process from '../components/android/Process';
import Industries from '../components/android/Industries';
import Features from '../components/android/Features';
import Deliverables from '../components/android/Deliverables';
import FAQ from '../components/android/FAQ';
import CTA from '../components/android/CTA';

const AndroidDevelopmentPage: React.FC = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'Android App Development Company Noida | Custom Android Development | Duotech Solutions',
      description: 'Professional Android app development services. Native & hybrid app development, App Store optimization, bug fixes, and maintenance. Experienced Android developers in Noida.',
      keywords: 'android app development company, custom android development, android developers, native android app, android application development, app development noida, mobile app development',
      image: 'https://www.duotechsolutions.in/images/android-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/android',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'Android Development'
    });

    const androidServiceSchema = createServiceJsonLD({
      name: 'Android App Development',
      description: 'Custom Android application development services including native apps, hybrid apps, and cross-platform solutions with latest technologies.',
      image: 'https://www.duotechsolutions.in/images/android-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹₹',
      url: window.location.href
    });
    setJsonLD(androidServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'android-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'Android Development', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#android-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Services />
        <Metrics />
        <TechStack />
        <Process />
        <Industries />
        <Features />
        <Deliverables />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default AndroidDevelopmentPage;