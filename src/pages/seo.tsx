import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
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
