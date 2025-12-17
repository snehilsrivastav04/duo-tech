import { FC } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import ErrorBoundary from '../components/errors/ErrorBoundary';
import HeroSection from '../components/home/sections/HeroSection';
import ServicesSection from '../components/home/sections/ServicesSection';
import StatsSection from '../components/home/sections/StatsSection';
import FeaturesSection from '../components/home/sections/FeaturesSection';
import CustomerLogosSection from '../components/home/sections/CustomerLogosSection';
import CaseStudiesSection from '../components/home/sections/CaseStudiesSection';
import UseCasesSection from '../components/home/sections/UseCasesSection';
import TestimonialsSection from '../components/home/sections/TestimonialsSection';
import FAQSection from '../components/home/sections/FAQSection';
import DeveloperSection from '../components/home/sections/DeveloperSection';
import NewsletterSection from '../components/home/sections/NewsletterSection';

const HomePage: FC = () => {

  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <ServicesSection />
          <CustomerLogosSection />
          <CaseStudiesSection />
          <UseCasesSection />
          <TestimonialsSection />
          <FAQSection />
          <DeveloperSection />
          <NewsletterSection />
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default HomePage;
