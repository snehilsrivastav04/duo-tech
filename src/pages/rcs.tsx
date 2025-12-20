import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/rcs/Hero';
import Features from '../components/rcs/Features';
import Parallax from '../components/rcs/Parallax';
import CustomerLogos from '../components/rcs/CustomerLogos';
import UseCases from '../components/rcs/UseCases';
import Testimonials from '../components/rcs/Testimonials';
import FAQ from '../components/rcs/FAQ';
import CTA from '../components/rcs/CTA';

const RcsPage: React.FC = () => {
  return (
    <ParallaxProvider>
      <MainLayout>
        <Hero />
        <Features />
        <Parallax />
        <CustomerLogos />
        <UseCases />
        <Testimonials />
        <FAQ />
        <CTA />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default RcsPage;
