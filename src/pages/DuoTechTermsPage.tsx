// DuoTechTermsPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CurrencyRupeeIcon,
  IdentificationIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  ShieldExclamationIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowRight,
  ChevronRight,
  Check,
  FileText,
  Shield,
  Lock,
  ClipboardList,
} from "lucide-react";

const DuoTechTermsPage: React.FC = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState("terms");

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
                Terms &amp; Conditions for SMS &amp; Voice Services
              </p>
              <p className="text-sm opacity-70 flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
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
          {/* Warning Banner */}
          <div className="bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 border-l-4 border-rose-500 rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <ExclamationTriangleIcon className="h-8 w-8 text-rose-500 shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-rose-800 dark:text-rose-200">
                  User Warning
                </h2>
                <p className="text-rose-700 dark:text-rose-300">
                  By continuing to use any Duo Tech Solutions service you{" "}
                  <strong>automatically accept</strong> every clause below.
                  Non-compliance may lead to <strong>instant account suspension</strong>{" "}
                  without refund.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* 1. Charges */}
            <Section icon={CurrencyRupeeIcon} title="Call & SMS Charges">
              <Table
                headers={["✅ Chargeable", "❌ Non-Chargeable"]}
                rows={[
                  ["Successfully answered calls", "Unanswered / dropped calls"],
                  ["Successfully delivered SMS", "Failed SMS (network errors)"],
                ]}
              />
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  <span className="font-semibold">💡 Auto-refund:</span> Credits for failed events are refunded
                  within 24 h. <br />
                  <span className="font-semibold">📜 Disputes:</span> Telecom operator logs are final.
                </p>
              </div>
            </Section>

            {/* 2. Payments */}
            <Section icon={CurrencyRupeeIcon} title="Payments">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>100 % advance before service activation.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Setup / integration charges are non-refundable.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>GST &amp; taxes as per Indian law.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Payments only via Bank Transfer, UPI, NEFT, IMPS, or gateways.</span>
                </li>
              </ul>
            </Section>

            {/* 3. KYC */}
            <Section icon={IdentificationIcon} title="Account Setup & KYC">
              <p className="mb-4 font-medium">Upload these documents:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>KYC ID – Aadhaar / PAN / Passport / Driving License</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Business Proof – GST / MSME / Incorporation Certificate</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Address Proof – Utility bill or rent agreement (≤ 3 months)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Signed Consent Declaration</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Activation within 1 working day after verification.
                </p>
              </div>
            </Section>

            {/* 4. Service Hours */}
            <Section icon={ClockIcon} title="Service Hours & Usage">
              <p className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                Campaigns allowed only between{" "}
                <strong>9:00 AM – 9:00 PM IST</strong> per TRAI rules. Any attempt to
                bypass may lead to <strong>immediate suspension without refund</strong>.
              </p>
            </Section>

            {/* 5. DND Compliance */}
            <Section icon={ShieldCheckIcon} title="DND & Government Rules">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Do NOT send promotional messages to DND numbers without written consent.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Maintain consent records for audits.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>All penalties due to misuse are the client's responsibility.</span>
                </li>
              </ul>
            </Section>

            {/* 6. Data & Privacy */}
            <Section icon={ShieldCheckIcon} title="Data, Privacy & Security">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Client is responsible for the accuracy & legality of contact lists.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Inform recipients if calls are recorded.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Do not transmit malware, phishing links, or fraudulent content.</span>
                </li>
              </ul>
            </Section>

            {/* 7. Fair Use */}
            <Section icon={ExclamationTriangleIcon} title="Fair Use & Prohibited Activities">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
                <p>
                  Services must NOT be used for spam, phishing, scams, fake job offers,
                  loan frauds, or objectionable content. Political campaigns require
                  Election Commission authorization.
                </p>
              </div>
            </Section>

            {/* 8. Service Quality */}
            <Section icon={DevicePhoneMobileIcon} title="Service Quality & Limitations">
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                Delivery depends on operator networks. We are not liable for network
                congestion, downtime, force-majeure events, or TRAI/operator
                filtering.
              </p>
            </Section>

            {/* 9. Complaints / Suspension */}
            <Section icon={ExclamationTriangleIcon} title="Complaints & Suspension">
              <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
                <p>
                  Complaints of spam or fraud may result in immediate service pause or
                  termination without refund. Blacklisted numbers may require extra
                  compliance checks for reinstatement.
                </p>
              </div>
            </Section>

            {/* 10. Refunds */}
            <Section icon={CurrencyRupeeIcon} title="Refund & Cancellation">
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500">
                <p>
                  Once credits are added or services activated, <strong>no refunds</strong>{" "}
                  are provided. Unused credits roll over while the account remains active.
                  Setup / verification charges are non-refundable.
                </p>
              </div>
            </Section>

            {/* 11. Liability */}
            <Section icon={ShieldCheckIcon} title="Liability & Indemnity">
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                Client indemnifies Duo Tech Solutions against all claims, penalties,
                damages, and expenses arising from misuse or non-compliance.
              </p>
            </Section>

            {/* 12. Modifications */}
            <Section icon={ClockIcon} title="Modifications & Updates">
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                We may update pricing, features, or terms with 7 days' notice.
                Continued use after changes implies acceptance.
              </p>
            </Section>

            {/* 13. Termination */}
            <Section icon={ExclamationTriangleIcon} title="Account Termination">
              <p className="font-medium mb-2">We may terminate accounts immediately and without refund for:</p>
              <ul className="space-y-2 bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg border-l-4 border-rose-500">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Fraud, spam, or illegal activity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Violation of TRAI / DND guidelines</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Failure to provide valid KYC</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span>Payment default</span>
                </li>
              </ul>
            </Section>

            {/* 14. Governing Law */}
            <Section icon={BuildingOffice2Icon} title="Governing Law & Jurisdiction">
              <p className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                These terms are governed by Indian law. Disputes subject to Noida,
                Uttar Pradesh jurisdiction.
              </p>
            </Section>
          </div>

          {/* Acceptance Button */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Accept Terms & Conditions</h3>
            <p className="mb-4 opacity-90">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors">
              I Accept
            </button>
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
                <a href="tel:+918800722190" className="hover:underline">
                  +91 8800722190
                </a>
                <span className="text-slate-400">·</span>
                <a href="tel:+918800707381" className="hover:underline">
                  8800707381
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                <a href="mailto:info@duotechsolutions.in" className="hover:underline">
                  info@duotechsolutions.in
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

interface TableProps {
  headers: [string, string];
  rows: string[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-blue-800">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-blue-800">
      <thead className="bg-gray-50 dark:bg-blue-900/50">
        <tr>
          {headers.map((h, i) => (
            <th 
              key={h} 
              className={`px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300 ${i === 0 ? 'rounded-tl-lg' : ''} ${i === headers.length - 1 ? 'rounded-tr-lg' : ''}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-blue-900/30 divide-y divide-gray-200 dark:divide-blue-800">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-blue-900/40">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-gray-700 dark:text-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DuoTechTermsPage;