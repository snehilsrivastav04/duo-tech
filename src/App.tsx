import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';

import IvrServicesPage from './pages/ivr-services';
import SmsServicesPage from './pages/sms-services';
import WhatsappbulkPage from './pages/whatsapp-bulk';
import VoiceobdPage from './pages/VoiceOBDPage';
import RcsPage from './pages/rcs';


import SeoPage from './pages/seo';
import GraphicsDesignPage from './pages/graphic-design';

import DigitalMarketingPage from './pages/DigitalMarketingPage';

import WebDevHomePage from './pages/web';
import AndroidDevelopmentPage from './pages/android';

import CRMPage from './pages/crm';

import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import TermsandConditions from './pages/DuoTechTermsPage';

import SmsPricing from './pages/pricing';

import PrivacyPolicyPage from './pages/privacy-policy';
import RefundPolicyPage from './pages/RefundPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import Realestate from './pages/realestate';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';


const ProtectedRoute: React.FC<{ 
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user';
}> = ({ children, requiredRole }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const user = useAuthStore(state => state.user);

  if (!isAuthenticated || (requiredRole && user?.role !== requiredRole)) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  // Test backend API connection on mount
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ivr" element={<IvrServicesPage />} />
        <Route path="/services/bulk-sms" element={<SmsServicesPage />} />
        <Route path="/services/transactional-sms" element={<SmsServicesPage />} />
        <Route path="/services/whatsapp-bulk" element={<WhatsappbulkPage />} />
        <Route path="/services/VoiceOBDPage" element={<VoiceobdPage />} />
        <Route path="/services/rcs" element={<RcsPage />} />

        <Route path="/digital/seo" element={<SeoPage />} />
        <Route path="/digital/graphic-design" element={<GraphicsDesignPage />} />
  
        <Route path="/digital/digital-marketing" element={<DigitalMarketingPage />} />


        <Route path="/development/web" element={<WebDevHomePage />} />
        <Route path="/development/android" element={<AndroidDevelopmentPage />} />
        <Route path="/development/ui-ux" element={<AndroidDevelopmentPage />} /> {/* Replace with correct component */}
        <Route path="/development/api" element={<AndroidDevelopmentPage />} />   {/* Replace with correct component */}


        <Route path="/products/source-codes" element={<ProductsPage />} />       {/* Replace with correct component */}
        <Route path="/products/crm" element={<CRMPage />} />

        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/terms-and-conditions" element={<TermsandConditions />} />
        <Route path="/sms-pricing" element={<SmsPricing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;