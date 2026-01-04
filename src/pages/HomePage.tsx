
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainLayout from '../components/layout/MainLayout';
import Hero from '../components/homePage/Hero';
import Features from '../components/homePage/Features';
import Services from '../components/homePage/Services';
import CustomerLogos from '../components/homePage/CustomerLogos';
import CaseStudies from '../components/homePage/CaseStudies';
import UseCases from '../components/homePage/UseCases';
import Integration from '../components/homePage/Integration';
import WhyChooseUs from '../components/homePage/WhyChooseUs';
import Testimonials from '../components/homePage/Testimonials';
import FAQ from '../components/homePage/FAQ';
import Newsletter from '../components/homePage/Newsletter';
import CTA from '../components/homePage/CTA';

// Error Boundary
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <MainLayout>
            <Hero />
            <Features />
            <Services />
            <CustomerLogos />
            <CaseStudies />
            <UseCases />
            <Integration />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Newsletter />
            <CTA />
        </MainLayout>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default HomePage;
