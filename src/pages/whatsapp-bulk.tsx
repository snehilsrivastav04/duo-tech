import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
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