
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/CRM/Hero';
import Services from '../components/CRM/Services';
import WhyChooseUs from '../components/CRM/WhyChooseUs';
import Metrics from '../components/CRM/Metrics';
import Industries from '../components/CRM/Industries';
import FAQ from '../components/CRM/FAQ';
import FinalCTA from '../components/CRM/FinalCTA';

const CRMPage: React.FC = () => {
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
