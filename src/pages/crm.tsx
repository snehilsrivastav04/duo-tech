
import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD } from '../lib/meta';
import Hero from '../components/CRM/Hero';
import Services from '../components/CRM/Services';
import WhyChooseUs from '../components/CRM/WhyChooseUs';
import Metrics from '../components/CRM/Metrics';
import Industries from '../components/CRM/Industries';
import FAQ from '../components/CRM/FAQ';
import FinalCTA from '../components/CRM/FinalCTA';

const CRMPage: React.FC = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'CRM Software Solutions India | Customer Relationship Management | Duotech Solutions',
      description: 'Cloud-based CRM software for sales, marketing, and customer support. Lead tracking, pipeline management, automation, and analytics. Integrated with SMS/WhatsApp. Try free demo.',
      keywords: 'crm software, customer relationship management, sales crm, crm solution india, lead management, sales automation, crm platform, business crm',
      image: 'https://www.duotechsolutions.in/images/crm-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/crm',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'CRM Services'
    });

    const crmServiceSchema = createServiceJsonLD({
      name: 'CRM Software Solutions',
      description: 'Comprehensive CRM platform with lead tracking, sales pipeline management, customer support, automation, and integrated communication tools.',
      image: 'https://www.duotechsolutions.in/images/crm-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(crmServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'crm-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'CRM', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#crm-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Metrics />
        <Industries />
        <FAQ />
        <FinalCTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default CRMPage;
