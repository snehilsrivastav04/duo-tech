import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import FeaturesSection from './sections/FeaturesSection';
import ServicesSection from './sections/ServicesSection';
import UseCasesSection from './sections/UseCasesSection';
import CustomerLogosSection from './sections/CustomerLogosSection';
import TestimonialsSection from './sections/TestimonialsSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import DeveloperSection from './sections/DeveloperSection';
import PricingSection from './sections/PricingSection';
import NewsletterSection from './sections/NewsletterSection';

const HomePage: FC = () => {
  return (
    <ParallaxProvider>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection />
      <UseCasesSection />
      <CustomerLogosSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <DeveloperSection />
      <PricingSection />
      <NewsletterSection />
    </ParallaxProvider>
  );
};

export default HomePage;