import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/virtual-numbers/Hero';
import Features from '../components/virtual-numbers/Features';
import StatsGrid from '../components/virtual-numbers/StatsGrid';
import NumberTypes from '../components/virtual-numbers/NumberTypes';
import Benefits from '../components/virtual-numbers/Benefits';
import HowItWorks from '../components/virtual-numbers/HowItWorks';
import IndustryApplications from '../components/virtual-numbers/IndustryApplications';
import CaseStudies from '../components/virtual-numbers/CaseStudies';
import Testimonials from '../components/virtual-numbers/Testimonials';
import FAQ from '../components/virtual-numbers/FAQ';
import CTA from '../components/virtual-numbers/CTA';

const VirtualNumbersPage: React.FC = () => {
  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Features />
        <StatsGrid />
        <NumberTypes />
        <Benefits />
        <HowItWorks />
        <IndustryApplications />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default VirtualNumbersPage;
