import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { setMetaTags, createOrganizationJsonLD, setJsonLD } from './lib/meta';

// Initialize default meta tags for the site
setMetaTags({
  title: 'Duotech Solutions - Bulk SMS, WhatsApp API, Digital Marketing & Web Development',
  description: 'Duotech Solutions provides Bulk SMS, WhatsApp Business API, IVR, Voice OBD, Digital Marketing, SEO, Web & App Development services in Noida. Transform your business communication today!',
  keywords: 'bulk sms service, whatsapp api, digital marketing, web development, seo services, ivr solutions, voice obd, virtual numbers',
  image: 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
  url: window.location.href,
  canonical: window.location.href,
  author: 'Duotech Solutions'
});

// Set default organization JSON-LD
setJsonLD(createOrganizationJsonLD());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

