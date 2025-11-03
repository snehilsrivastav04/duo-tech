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
import VirtualNumberPage from './pages/virtual-number';
import TollFreeNumberNumberPage from './pages/toll-free-number';
import WhatsappbulkPage from './pages/whatsapp-bulk';
import VoiceobdPage from './pages/VoiceOBDPage';
import RcsPage from './pages/rcs';

import EmailmarketingPage from './pages/email-marketing';
import SocialMediaPage from './pages/social-media';
import SeoPage from './pages/seo';
import GraphicsDesignPage from './pages/graphic-design';
import PPCPage from './pages/ppc';

import WebDevHomePage from './pages/web';
import AndroidDevelopmentPage from './pages/android';

import WhatsAppAPIPage from './pages/whatsapp-api';
import SMSGatewayPage from './pages/sms-gateaway';
import CRMPage from './pages/crm';

import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './components/admin/AdminLayout';
import ClientLayout from './components/client/ClientLayout';
import AdminDashboard from './components/admin/Dashboard';
import ClientDashboard from './components/client/Dashboard';
import ClientServices from './components/client/Services';
import ClientInvoices from './components/client/invoices';
import ClientMessages from './components/client/Messages';
import ClientBilling from './components/client/Billing';
import UsersTable from './components/admin/users/UsersTable';
import ProductsTable from './components/admin/products/ProductsTable';
import ServicesTable from './components/admin/services/ServicesTable';
import SettingsForm from './components/admin/settings/SettingsForm';
import ClientSidePage from './pages/ClientSidePage';
import TermsandConditions from './pages/DuoTechTermsPage';

import SmsPricing from './pages/pricing';

import HostedCallCenter from './pages/hostedcallcentre';
import PrivacyPolicyPage from './pages/privacy-policy';
import NotFoundPage from './pages/NotFoundPage';
import Realestate from './pages/realestate';


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
        <Route path="/services/virtual-number" element={<VirtualNumberPage />} />
        <Route path="/services/toll-free-number" element={<TollFreeNumberNumberPage />} />
        <Route path="/services/whatsapp-bulk" element={<WhatsappbulkPage />} />
        <Route path="/services/VoiceOBDPage" element={<VoiceobdPage />} />
        <Route path="/services/rcs" element={<RcsPage />} />

        <Route path="/digital/email-marketing" element={<EmailmarketingPage />} />
        <Route path="/digital/social-media" element={<SocialMediaPage />} />
        <Route path="/digital/seo" element={<SeoPage />} />
        <Route path="/digital/graphic-design" element={<GraphicsDesignPage />} />
        <Route path="/digital/ppc" element={<PPCPage />} />


        <Route path="/development/web" element={<WebDevHomePage />} />
        <Route path="/development/android" element={<AndroidDevelopmentPage />} />
        <Route path="/development/ui-ux" element={<AndroidDevelopmentPage />} /> {/* Replace with correct component */}
        <Route path="/development/api" element={<AndroidDevelopmentPage />} />   {/* Replace with correct component */}


        <Route path="/products/whatsapp-api" element={<WhatsAppAPIPage />} />
        <Route path="/products/sms-gateway" element={<SMSGatewayPage />} />
        <Route path="/products/source-codes" element={<ProductsPage />} />       {/* Replace with correct component */}
        <Route path="/products/crm" element={<CRMPage />} />

        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client-side" element={<ClientSidePage />} />
        <Route path="/terms-and-conditions" element={<TermsandConditions />} />
        <Route path="/sms-pricing" element={<SmsPricing />} />
        <Route path="/services/hosted-call-center" element={<HostedCallCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/realestate" element={<Realestate />} />


        {/* Admin Routes */}
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/users" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <UsersTable />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/services" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <ServicesTable />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/products" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <ProductsTable />
            </AdminLayout>
          </ProtectedRoute>
        } />
        <Route path="/admin/settings" element={
          <ProtectedRoute requiredRole="admin">
            <AdminLayout>
              <SettingsForm />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* Client Routes */}
        <Route path="/client" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <ClientDashboard />
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/services" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <ClientServices />
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/tickets" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <div>Support Tickets</div>
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/invoices" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <ClientInvoices />
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/messages" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <ClientMessages />
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/billing" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <ClientBilling />
            </ClientLayout>
          </ProtectedRoute>
        } />
        <Route path="/client/settings" element={
          <ProtectedRoute requiredRole="user">
            <ClientLayout>
              <div>Settings</div>
            </ClientLayout>
          </ProtectedRoute>
        } />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;