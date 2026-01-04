import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
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
