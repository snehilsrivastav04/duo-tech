import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD, createFAQJsonLD } from '../lib/meta';
import Hero from '../components/SEO/Hero';
import Services from '../components/SEO/Services';
import Metrics from '../components/SEO/Metrics';
import TechStack from '../components/SEO/TechStack';
import Process from '../components/SEO/Process';
import CaseStudies from '../components/SEO/CaseStudies';
import Deliverables from '../components/SEO/Deliverables';
import FAQ from '../components/SEO/FAQ';
import FinalCTA from '../components/SEO/FinalCTA';

const SEOServicesPage: React.FC = () => {
  useEffect(() => {
    setAdvancedMetaTags({
      title: 'SEO Services India | Search Engine Optimization | Duotech Solutions',
      description: 'Professional SEO services to boost your website rankings on Google. Organic traffic growth, keyword optimization, link building, and technical SEO. Get free SEO audit now.',
      keywords: 'seo services india, search engine optimization, seo agency, organic seo, google ranking, keyword optimization, link building, seo noida, best seo services',
      image: 'https://www.duotechsolutions.in/images/seo-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/seo',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'SEO Services'
    });

    const seoServiceSchema = createServiceJsonLD({
      name: 'SEO Services',
      description: 'Comprehensive SEO services including on-page optimization, technical SEO, link building, content strategy, and monthly reporting for sustainable organic growth.',
      image: 'https://www.duotechsolutions.in/images/seo-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹',
      url: window.location.href
    });
    setJsonLD(seoServiceSchema);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'seo-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'SEO Services', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#seo-breadcrumb-json-ld');
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
        <CaseStudies />
        <Deliverables />
        <FAQ />
        <FinalCTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default SEOServicesPage;
