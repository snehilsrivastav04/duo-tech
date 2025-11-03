// PrivacyPolicyPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  LockClosedIcon,
  EyeIcon,
  TrashIcon,
  ServerIcon,
  UserIcon,
  ChartBarIcon,
  CogIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowRight,
  ChevronRight,
  Check,
  FileText,
  Shield,
  Lock,
  ClipboardList,
  Mail,
  User,
  Database,
  BarChart3,
  Settings,
  Globe,
} from "lucide-react";

const PrivacyPolicyPage: React.FC = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("privacy");

  const policyLinks = [
    { id: "terms", name: "Terms & Conditions", icon: <FileText className="w-5 h-5" /> },
    { id: "privacy", name: "Privacy Policy", icon: <Shield className="w-5 h-5" /> },
    { id: "refund", name: "Refund Policy", icon: <Lock className="w-5 h-5" /> },
    { id: "service", name: "Service Level Agreement", icon: <ClipboardList className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-blue-50 dark:from-blue-950 dark:to-blue-900 text-slate-800 dark:text-slate-200 min-h-screen">
      {/* Header/Navigation would be imported from MainLayout in a real app */}
      
      {/* ========== HERO ========== */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Duo Tech Solutions
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-2">
                Privacy Policy
              </p>
              <p className="text-sm opacity-70 flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                Last updated: Tuesday, 26 August 2025
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                to="/" 
                className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* ========== SIDEBAR NAVIGATION ========== */}
        <aside className="lg:w-1/4">
          <div className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-blue-800 sticky top-24">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <DocumentTextIcon className="w-5 h-5 mr-2 text-blue-600" />
              Policy Documents
            </h2>
            <nav>
              <ul className="space-y-2">
                {policyLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => setActiveSidebarItem(link.id)}
                      className={`w-full text-left flex items-center px-4 py-3 rounded-lg transition-all ${
                        activeSidebarItem === link.id
                          ? "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 font-medium"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-blue-800/50"
                      }`}
                    >
                      <span className="mr-3 opacity-70">{link.icon}</span>
                      {link.name}
                      {activeSidebarItem === link.id && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-blue-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Contact our support team for any questions about our policies.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Contact Support <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </aside>

        {/* ========== MAIN CONTENT ========== */}
        <main className="lg:w-3/4">
          {/* Introduction */}
          <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-l-4 border-blue-500 rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <ShieldCheckIcon className="h-8 w-8 text-blue-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                  Your Privacy Matters
                </h2>
                <p className="text-blue-700 dark:text-blue-300">
                  At Duo Tech Solutions, we are committed to protecting your privacy and ensuring
                  the security of your personal information. This policy outlines how we collect,
                  use, and safeguard your data.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Information We Collect */}
            <Section icon={Database} title="Information We Collect">
              <p className="mb-4">We collect information to provide better services to our users. The types of information we collect include:</p>
              
              <h3 className="font-semibold text-lg mt-6 mb-3 text-gray-900 dark:text-white">Personal Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Contact information (name, email address, phone number)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Business information (company name, address, GST details)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>KYC documents for verification purposes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Payment and billing information</span>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mt-6 mb-3 text-gray-900 dark:text-white">Usage Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Service usage data (SMS sent, calls made, etc.)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Log information (IP address, browser type, access times)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Device information for mobile services</span>
                </li>
              </ul>
            </Section>

            {/* 2. How We Use Information */}
            <Section icon={BarChart3} title="How We Use Your Information">
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To process transactions and send related information</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To send administrative messages and service updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To respond to your comments, questions, and requests</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To detect, prevent, and address technical issues and fraud</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>To comply with legal obligations and regulatory requirements</span>
                </li>
              </ul>
            </Section>

            {/* 3. Information Sharing */}
            <Section icon={User} title="Information Sharing and Disclosure">
              <p className="mb-4">We do not sell your personal information. We may share information with:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Service Providers:</strong> Trusted third parties who assist us in operating our services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Business Partners:</strong> When necessary for providing specific services you request</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Legal Authorities:</strong> When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">Note:</span> We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
                </p>
              </div>
            </Section>

            {/* 4. Data Security */}
            <Section icon={LockClosedIcon} title="Data Security">
              <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Encryption of data in transit using SSL/TLS protocols</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Secure storage with encryption at rest</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Regular security assessments and vulnerability testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Access controls and authentication mechanisms</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Employee training on data protection practices</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  <span className="font-semibold">Important:</span> While we implement robust security measures, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </Section>

            {/* 5. Data Retention */}
            <Section icon={ServerIcon} title="Data Retention">
              <p className="mb-4">We retain your personal information only for as long as necessary:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>To fulfill the purposes we collected it for</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>To satisfy any legal, accounting, or reporting requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>To support business operations and service improvements</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">Retention Periods:</span> We typically retain customer data for 3 years after account termination to comply with legal obligations and resolve disputes. Transaction data is retained for 7 years as required by Indian tax laws.
                </p>
              </div>
            </Section>

            {/* 6. Your Rights */}
            <Section icon={UserIcon} title="Your Data Protection Rights">
              <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Access
                  </h4>
                  <p className="text-sm">The right to access and receive copies of your personal information</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                    <CogIcon className="w-4 h-4 mr-2" />
                    Correction
                  </h4>
                  <p className="text-sm">The right to correct inaccurate or incomplete information</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Deletion
                  </h4>
                  <p className="text-sm">The right to request deletion of your personal data</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center">
                    <ChartBarIcon className="w-4 h-4 mr-2" />
                    Portability
                  </h4>
                  <p className="text-sm">The right to receive your data in a structured, machine-readable format</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@duotech.com" className="font-semibold underline">privacy@duotech.com</a>. We will respond to your request within 30 days.
                </p>
              </div>
            </Section>

            {/* 7. Cookies and Tracking */}
            <Section icon={ChartBarIcon} title="Cookies and Tracking Technologies">
              <p className="mb-4">We use cookies and similar tracking technologies to track activity on our service:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Essential Cookies:</strong> Required for the basic functions of the website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>
            </Section>

            {/* 8. International Data Transfers */}
            <Section icon={Globe} title="International Data Transfers">
              <p className="mb-4">Your information may be transferred to and processed in countries other than your own:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>We primarily store data in India but may use service providers in other countries</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>We ensure appropriate safeguards are in place for international transfers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>We comply with applicable data protection laws regarding international transfers</span>
                </li>
              </ul>
            </Section>

            {/* 9. Children's Privacy */}
            <Section icon={ExclamationTriangleIcon} title="Children's Privacy">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                <p>
                  Our service is not intended for individuals under the age of 18 ("Children"). We do not knowingly collect
                  personal information from children. If you are a parent or guardian and believe your child has provided
                  us with personal information, please contact us immediately.
                </p>
              </div>
            </Section>

            {/* 10. Policy Updates */}
            <Section icon={CogIcon} title="Changes to This Policy">
              <p className="mb-4">We may update our Privacy Policy from time to time:</p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>We will notify you of any changes by posting the new policy on this page</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>We will update the "Last updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>You are advised to review this policy periodically for any changes</span>
                </li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Changes to this policy are effective when they are posted on this page.
                </p>
              </div>
            </Section>

            {/* 11. Contact Information */}
            <Section icon={Mail} title="Contact Us">
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">By email:</span> privacy@duotech.com<br />
                  <span className="font-semibold">By phone:</span> +91 9667011681<br />
                  <span className="font-semibold">By mail:</span> C30, C Block, Sector 63, Noida, UP, 201301
                </p>
              </div>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">Data Protection Officer:</span> For concerns regarding data protection, you may contact our Data Protection Officer at dpo@duotech.com.
                </p>
              </div>
            </Section>
          </div>
        </main>
      </div>

      {/* ========== CONTACT / FOOTER ========== */}
      <footer className="bg-slate-100 dark:bg-blue-950 border-t border-gray-200 dark:border-blue-800 mt-16">
        <div className="container mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <MapPinIcon className="h-5 w-5 text-blue-600 mr-2" />
              Our Location
            </h3>
            <address className="not-italic space-y-2 text-slate-700 dark:text-slate-300">
              <p className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>C30, C Block, Sector 63, Noida, UP, 201301</span>
              </p>
              <p className="flex items-center space-x-2">
                <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600" />
                <a href="tel:+919667011681" className="hover:underline">
                  +91 9667011681
                </a>
                <span className="text-slate-400">·</span>
                <a href="tel:+918920323014" className="hover:underline">
                  8920323014
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                <a href="mailto:info@duotech.com" className="hover:underline">
                  info@duotech.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5 text-blue-600" />
                <span>Mon – Sat: 9 AM – 6 PM (IST)</span>
              </p>
            </address>
          </div>

          <div className="flex flex-col items-center justify-center md:items-end">
            <p className="text-center md:text-right text-slate-500 dark:text-slate-400 text-sm mb-4">
              © 2025 Duo Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ---------- Re-usable helpers ---------- */
interface SectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ icon: Icon, title, children }) => (
  <section className="bg-white dark:bg-blue-900/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-blue-800">
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <div className="text-slate-700 dark:text-slate-300 space-y-3">{children}</div>
  </section>
);

export default PrivacyPolicyPage;