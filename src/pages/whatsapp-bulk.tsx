import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import { setAdvancedMetaTags, setJsonLD, createServiceJsonLD, createBreadcrumbJsonLD, createFAQJsonLD } from '../lib/meta';
import {
  Hero,
  Features,
  BusinessBenefits,
  Industries,
  MessageTypes,
  FAQ,
  CTA,
} from '../components/whatsapp-bulk';

const WhatsAppServicesPage: React.FC = () => {
  useEffect(() => {
    // Set comprehensive SEO meta tags for WhatsApp Bulk Services
    setAdvancedMetaTags({
      title: 'WhatsApp Bulk Messaging Service | Official WhatsApp Business API | Duotech Solutions',
      description: 'Send bulk WhatsApp messages with official WhatsApp Business API. Interactive buttons, media messaging, verified badge. Engage customers effectively. Contact +91-8800722190 for best WhatsApp marketing solution.',
      keywords: 'whatsapp bulk messaging, whatsapp business api, whatsapp marketing, whatsapp api provider india, bulk whatsapp service, whatsapp business solution, whatsapp campaign management, message api',
      image: 'https://www.duotechsolutions.in/images/whatsapp-bulk-og.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/whatsapp-bulk',
      author: 'Duotech Solutions',
      type: 'website',
      category: 'WhatsApp Services'
    });

    // Service Schema for WhatsApp Bulk
    const whatsappServiceSchema = createServiceJsonLD({
      name: 'WhatsApp Bulk Messaging Service',
      description: 'Official WhatsApp Business API for bulk messaging with interactive buttons, media support, and verified badge. Perfect for marketing campaigns, notifications, and customer engagement.',
      image: 'https://www.duotechsolutions.in/images/whatsapp-bulk-og.jpg',
      areaServed: 'IN',
      priceRange: '₹₹₹',
      url: window.location.href
    });
    setJsonLD(whatsappServiceSchema);

    // Breadcrumb Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'whatsapp-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Services', url: 'https://www.duotechsolutions.in/services' },
      { name: 'WhatsApp Bulk', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    // FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'whatsapp-faq-json-ld';
    const faqData = createFAQJsonLD([
      {
        question: 'What is WhatsApp Business API?',
        answer: 'WhatsApp Business API is the official platform by Meta that allows businesses to send and receive messages at scale with verified badges and enhanced features.'
      },
      {
        question: 'Can I send marketing messages via WhatsApp?',
        answer: 'Yes, with proper consent and templates approved by WhatsApp, you can send promotional messages, product updates, and marketing campaigns.'
      },
      {
        question: 'How many messages can I send per day?',
        answer: 'There is no daily limit. Our platform can handle unlimited messaging volume based on your business needs and WhatsApp rate limits.'
      },
      {
        question: 'Is WhatsApp Bulk messaging compliant?',
        answer: 'Yes, all our WhatsApp services comply with GDPR, local regulations, and WhatsApp\'s policies. We ensure proper consent management.'
      }
    ]);
    faqScript.textContent = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    return () => {
      const scripts = document.querySelectorAll('#whatsapp-breadcrumb-json-ld, #whatsapp-faq-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Features />
        <BusinessBenefits />
        <MessageTypes />
        <Industries />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default WhatsAppServicesPage;