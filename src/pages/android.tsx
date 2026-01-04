import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/android/Hero';
import Services from '../components/android/Services';
import Metrics from '../components/android/Metrics';
import TechStack from '../components/android/TechStack';
import Process from '../components/android/Process';
import Industries from '../components/android/Industries';
import Features from '../components/android/Features';
import Deliverables from '../components/android/Deliverables';
import FAQ from '../components/android/FAQ';
import CTA from '../components/android/CTA';

const AndroidDevelopmentPage: React.FC = () => {
  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Services />
        <Metrics />
        <TechStack />
        <Process />
        <Industries />
        <Features />
        <Deliverables />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default AndroidDevelopmentPage;