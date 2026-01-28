import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import Hero from '../components/rcs/Hero';
import Features from '../components/rcs/Features';
import Parallax from '../components/rcs/Parallax';
import CustomerLogos from '../components/rcs/CustomerLogos';
import UseCases from '../components/rcs/UseCases';
import FAQ from '../components/rcs/FAQ';
import CTA from '../components/rcs/CTA';

const RcsPage: React.FC = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'RCS Messaging Service India | Rich Communication Services | Duotech Solutions',
      description: 'RCS messaging platform with rich media support, interactive elements, and high engagement. Reach customers with SMS alternative offering better experience. Contact us for RCS integration.',
      keywords: 'rcs messaging, rich communication services, rcs platform, rcs gateway, messaging api, sms alternative, interactive messaging, rcs india',
      image: 'https://www.duotechsolutions.in/images/rcs-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/rcs',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'RCS Services'
    });

    const rcsServiceSchema = createServiceJsonLD({
      name: 'RCS Messaging Service',
      description: 'Rich Communication Services with advanced media support, interactive cards, and higher engagement rates compared to traditional SMS.',
      image: 'https://www.duotechsolutions.in/images/rcs-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(rcsServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'rcs-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'RCS', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#rcs-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Features />
        <Parallax />
        <CustomerLogos />
        <UseCases />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default RcsPage;
