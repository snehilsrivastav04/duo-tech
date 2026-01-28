import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import Hero from '../components/website/Hero';
import Services from '../components/website/Services';
import WhyChooseUs from '../components/website/WhyChooseUs';
import TechStack from '../components/website/TechStack';
import Workflow from '../components/website/Workflow';
import Industries from '../components/website/Industries';
import GlobalReach from '../components/website/GlobalReach';
import FAQ from '../components/website/FAQ';
import FinalCTA from '../components/website/FinalCTA';
import ErrorBoundary from '../components/website/ErrorBoundary';

const WebDevHomePage: React.FC = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'Web Development Company Noida | Custom Web Development Services | Duotech Solutions',
      description: 'Professional web development services in Noida. Custom websites, e-commerce platforms, responsive design, and modern technology stack. SEO optimized. Get free consultation.',
      keywords: 'web development company noida, custom web development, website development services, responsive web design, e-commerce development, web design agency, website designing',
      image: 'https://www.duotechsolutions.in/images/web-dev-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/web-development',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'Web Development'
    });

    const webServiceSchema = createServiceJsonLD({
      name: 'Web Development Services',
      description: 'Custom web development services including responsive websites, e-commerce platforms, progressive web apps, and modern technology solutions.',
      image: 'https://www.duotechsolutions.in/images/web-dev-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹₹',
      url: window.location.href
    });
    setJsonLD(webServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'web-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'Web Development', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#web-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          <Hero />
          <Services />
          <WhyChooseUs />
          <TechStack />
          <Workflow />
          <Industries />
          <GlobalReach />
          <FAQ />
          <FinalCTA />
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default WebDevHomePage;
