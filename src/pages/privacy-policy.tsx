import React, { useState, useEffect, useRef } from "react";
import { setAdvancedMetaTags, setJsonLD, createBreadcrumbJsonLD } from "../lib/meta";

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const sectionRefs = useRef({});

  useEffect(() => {
    setAdvancedMetaTags({
      title: 'Privacy Policy | Duotech Solutions',
      description: 'Read Duotech Solutions\' privacy policy to understand how we collect, use, and protect your personal data.',
      keywords: 'privacy policy, data protection, gdpr, privacy statement',
      image: 'https://www.duotechsolutions.in/images/duotech-og-image.jpg',
      url: window.location.href,
      canonical: 'https://www.duotechsolutions.in/privacy-policy',
      author: 'Duotech Solutions',
      type: 'website'
    });

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'privacy-breadcrumb-json-ld';
    const breadcrumbData = createBreadcrumbJsonLD([
      { name: 'Home', url: 'https://www.duotechsolutions.in/' },
      { name: 'Privacy Policy', url: window.location.href }
    ]);
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const scripts = document.querySelectorAll('#privacy-breadcrumb-json-ld');
      scripts.forEach(script => script.remove());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sectionIds = Object.keys(sectionRefs.current);
      for (const id of sectionIds) {
        const section = sectionRefs.current[id];
        if (section && section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "intro", label: "Introduction" },
    { id: "collection", label: "Data Collection" },
    { id: "usage", label: "How We Use Data" },
    { id: "legal", label: "Legal Basis" },
    { id: "sharing", label: "Sharing" },
    { id: "international", label: "International Transfer" },
    { id: "security", label: "Security" },
    { id: "retention", label: "Retention" },
    { id: "rights", label: "Your Rights" },
    { id: "cookies", label: "Cookies" },
    { id: "thirdparty", label: "Third Parties" },
    { id: "children", label: "Children's Privacy" },
    { id: "changes", label: "Policy Changes" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-8 md:px-12">
          <a href="/" className="text-neutral-600 text-sm mb-6 inline-block hover:text-neutral-900">
            ← Home
          </a>
          <h1 className="text-4xl md:text-5xl text-neutral-900 mb-3 font-normal">
            Privacy Policy
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            How we collect, use, and protect your information
          </p>
          <p className="text-neutral-400 text-sm mt-4">
            Last updated August 26, 2025
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex gap-12 lg:gap-20">
          {/* Sidebar Navigation */}
          <nav className="hidden lg:block w-56 shrink-0 sticky top-8 self-start">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? "text-neutral-900 bg-neutral-100"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-xs text-neutral-500 mb-3">Questions?</p>
              <a href="/contact" className="text-sm text-neutral-900 hover:underline">
                Contact us →
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Introduction */}
            <section 
              ref={el => sectionRefs.current['intro'] = el}
              className="mb-20"
            >
              <div className="bg-white p-8 border border-neutral-200">
                <h2 className="text-2xl text-neutral-900 mb-4 font-normal">
                  Your Privacy Matters
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  At Duo Tech Solutions, we are committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy explains how we 
                  collect, use, disclose, and safeguard your information when you use our services, 
                  visit our website, or interact with us.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  This policy complies with the Information Technology Act, 2000 and the Information 
                  Technology (Reasonable Security Practices and Procedures and Sensitive Personal 
                  Data or Information) Rules, 2011, as well as other applicable Indian laws and 
                  regulations governing data protection.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section 
              ref={el => sectionRefs.current['collection'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Information We Collect
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Personal Information</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <p className="text-neutral-700 mb-4">
                      We collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Register for an account or use our services</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Contact our customer support team</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Subscribe to our newsletters or marketing communications</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Participate in surveys or promotions</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <h4 className="text-neutral-900 mb-2">Types of Personal Information:</h4>
                      <ul className="space-y-2 text-neutral-700 text-sm">
                        <li>• Contact details: Name, email, phone number, address</li>
                        <li>• Business information: Company name, GST details, business registration numbers</li>
                        <li>• KYC documents: PAN card, Aadhaar card, business licenses</li>
                        <li>• Financial information: Payment details, billing address, transaction history</li>
                        <li>• Identity verification: Photographs, signature specimens</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Automatically Collected Information</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <p className="text-neutral-700 mb-4">
                      When you visit our website or use our services, we automatically collect:
                    </p>
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Device information: IP address, browser type, operating system</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Usage data: Pages visited, time spent, features used</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Location data: General geographic location based on IP address</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Log information: Access times, error logs, clickstream data</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Sensitive Personal Information</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <p className="text-neutral-700 mb-4">
                      In accordance with Indian law, we treat the following as sensitive personal 
                      information and implement enhanced protection measures:
                    </p>
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Financial information including bank account and credit card details</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Government identification numbers (PAN, Aadhaar)</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Biometric information where collected for verification</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Health information if relevant to service delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section 
              ref={el => sectionRefs.current['usage'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                How We Use Your Information
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We process your information for specific purposes that help us provide 
                  and improve our services:
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">01</span>
                    <span>Service Delivery: Providing and maintaining our services, processing transactions, and managing your account</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">02</span>
                    <span>Customer Support: Responding to inquiries, troubleshooting, and providing technical assistance</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">03</span>
                    <span>Business Operations: Improving our services, developing new features, and conducting research</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">04</span>
                    <span>Marketing: Sending promotional communications (with your consent), personalized offers, and service updates</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">05</span>
                    <span>Security: Detecting and preventing fraud, unauthorized activities, and security breaches</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">06</span>
                    <span>Legal Compliance: Meeting regulatory requirements, tax obligations, and responding to legal requests</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">07</span>
                    <span>Analytics: Understanding user behavior, measuring service performance, and optimizing user experience</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section 
              ref={el => sectionRefs.current['legal'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Legal Basis for Processing
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We process your personal information based on one or more of the following legal grounds:
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">01</span>
                    <span><strong>Contractual Necessity:</strong> Processing necessary for performing our contract with you</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">02</span>
                    <span><strong>Legal Obligation:</strong> Processing required to comply with Indian laws and regulations</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">03</span>
                    <span><strong>Legitimate Interests:</strong> Processing for our legitimate business interests, balanced against your rights</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400 w-8">04</span>
                    <span><strong>Consent:</strong> Processing based on your explicit consent, which you may withdraw at any time</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    For sensitive personal information, we rely on explicit consent or specific legal 
                    requirements under Indian law.
                  </p>
                </div>
              </div>
            </section>

            {/* Sharing */}
            <section 
              ref={el => sectionRefs.current['sharing'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Information Sharing and Disclosure
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200 mb-6">
                <p className="text-neutral-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information in the following circumstances:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Service Providers</h3>
                  <p className="text-sm text-neutral-600">
                    Trusted partners who help operate our platform (payment processors, cloud hosting, customer support)
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Legal Requirements</h3>
                  <p className="text-sm text-neutral-600">
                    When required by law, court order, or government authorities
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Business Partners</h3>
                  <p className="text-sm text-neutral-600">
                    For specific services you request that involve third-party integration
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Business Transfers</h3>
                  <p className="text-sm text-neutral-600">
                    During mergers, acquisitions, or sale of company assets
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Professional Advisors</h3>
                  <p className="text-sm text-neutral-600">
                    Lawyers, auditors, and consultants bound by confidentiality obligations
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Consent-Based Sharing</h3>
                  <p className="text-sm text-neutral-600">
                    With third parties when you have given explicit consent
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 border border-neutral-200">
                <h3 className="text-neutral-900 mb-3">Data Processing Agreements</h3>
                <p className="text-sm text-neutral-700">
                  All third-party service providers who process personal information on our behalf 
                  are contractually obligated to implement appropriate security measures and use 
                  the information only for the purposes we specify.
                </p>
              </div>
            </section>

            {/* International Transfer */}
            <section 
              ref={el => sectionRefs.current['international'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                International Data Transfers
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Your personal information may be transferred to, stored, and processed in 
                  countries other than India where our service providers operate. We ensure 
                  appropriate safeguards are in place for such transfers:
                </p>
                <ul className="space-y-3 text-neutral-700 mb-6">
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Data transfer agreements incorporating standard contractual clauses</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Service providers located in countries with adequate data protection laws</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Implementation of additional security measures for cross-border transfers</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    By using our services, you consent to the transfer of your information to 
                    countries outside India, subject to the safeguards described in this policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section 
              ref={el => sectionRefs.current['security'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Security Measures
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200 mb-6">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We implement comprehensive security measures to protect your data from 
                  unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Encryption:</strong> End-to-end encryption for data transmission and encryption at rest</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Access Controls:</strong> Role-based access controls, multi-factor authentication, and principle of least privilege</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Network Security:</strong> Firewalls, intrusion detection systems, and regular vulnerability assessments</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Physical Security:</strong> Secure data centers with 24/7 monitoring and access controls</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Security Audits:</strong> Regular internal and external security audits and penetration testing</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Incident Response:</strong> Documented procedures for security incident response and breach notification</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span><strong>Employee Training:</strong> Regular security awareness training and confidentiality agreements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 border-l-2 border-amber-600">
                <p className="text-sm text-neutral-800">
                  <strong>Security Notice:</strong> While we maintain robust security measures, no system 
                  is completely secure. We cannot guarantee absolute protection against all threats. 
                  In the event of a data breach, we will notify affected users and relevant authorities 
                  as required by Indian law.
                </p>
              </div>
            </section>

            {/* Retention */}
            <section 
              ref={el => sectionRefs.current['retention'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Data Retention
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill 
                  the purposes outlined in this policy, unless a longer retention period is 
                  required or permitted by law:
                </p>
                <ul className="space-y-3 text-neutral-700 mb-6">
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>To provide the services you requested and maintain your account</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>To comply with legal obligations and regulatory requirements</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>To resolve disputes, enforce agreements, and protect legal rights</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>To maintain business records for analytical and historical purposes</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-neutral-200">
                  <h4 className="text-neutral-900 mb-3">Specific Retention Periods</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700">
                    <div>
                      <strong>Customer Account Data:</strong> 3 years after account closure
                    </div>
                    <div>
                      <strong>Transaction Records:</strong> 7 years per Indian tax regulations
                    </div>
                    <div>
                      <strong>Marketing Data:</strong> Until consent withdrawal or 2 years of inactivity
                    </div>
                    <div>
                      <strong>Support Communications:</strong> 3 years after resolution
                    </div>
                    <div>
                      <strong>Website Analytics:</strong> 26 months from last activity
                    </div>
                    <div>
                      <strong>Legal Documents:</strong> 10 years or as required by specific laws
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section 
              ref={el => sectionRefs.current['rights'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Your Rights and Choices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Access & Portability</h3>
                  <p className="text-sm text-neutral-600">
                    Request copies of your personal data in a structured, machine-readable format
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Correction</h3>
                  <p className="text-sm text-neutral-600">
                    Update, correct, or amend inaccurate or incomplete information
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Deletion</h3>
                  <p className="text-sm text-neutral-600">
                    Request removal of your data, subject to legal retention requirements
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Restriction</h3>
                  <p className="text-sm text-neutral-600">
                    Limit processing of your data in specific circumstances
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Objection</h3>
                  <p className="text-sm text-neutral-600">
                    Object to processing based on legitimate interests or for direct marketing
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Consent Withdrawal</h3>
                  <p className="text-sm text-neutral-600">
                    Withdraw consent at any time, without affecting prior lawful processing
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 border border-neutral-200 mb-4">
                <h3 className="text-neutral-900 mb-3">Exercising Your Rights</h3>
                <p className="text-sm text-neutral-700 mb-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a href="mailto:privacy@duotech.com" className="underline">
                    privacy@duotech.com
                  </a>
                  . We will respond to your request within 30 days, as required by Indian law.
                </p>
                <p className="text-sm text-neutral-700">
                  <strong>Verification:</strong> For security purposes, we may need to verify your 
                  identity before processing certain requests. We may decline requests that are 
                  frivolous, jeopardize others' privacy, or are extremely impractical.
                </p>
              </div>

              <div className="bg-white p-6 border border-neutral-200">
                <h3 className="text-neutral-900 mb-3">Complaints</h3>
                <p className="text-sm text-neutral-700">
                  If you have concerns about how we handle your personal information, you may 
                  lodge a complaint with the relevant data protection authority in India.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section 
              ref={el => sectionRefs.current['cookies'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Cookies and Tracking Technologies
              </h2>
              
              <div className="space-y-6 mb-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Essential Cookies</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Required for basic site functionality and cannot be disabled
                  </p>
                  <p className="text-xs text-neutral-500">
                    Examples: Session management, security, load balancing
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Help us understand site usage patterns and improve user experience
                  </p>
                  <p className="text-xs text-neutral-500">
                    Examples: Google Analytics, heatmaps, user flow analysis
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Preference Cookies</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Remember your settings and choices for future visits
                  </p>
                  <p className="text-xs text-neutral-500">
                    Examples: Language preferences, font size, regional settings
                  </p>
                </div>
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Marketing Cookies</h3>
                  <p className="text-sm text-neutral-600 mb-2">
                    Used to deliver relevant advertisements and track campaign performance
                  </p>
                  <p className="text-xs text-neutral-500">
                    Examples: Retargeting pixels, conversion tracking, audience segmentation
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 border border-neutral-200">
                <h3 className="text-neutral-900 mb-3">Cookie Management</h3>
                <p className="text-sm text-neutral-700 mb-4">
                  You can control cookies through your browser settings. Most browsers allow 
                  you to refuse cookies or alert you when cookies are being sent. However, 
                  disabling essential cookies may affect website functionality.
                </p>
                <p className="text-sm text-neutral-700">
                  For detailed information about specific cookies we use and opt-out options, 
                  please visit our{" "}
                  <a href="/cookie-policy" className="underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Third Parties */}
            <section 
              ref={el => sectionRefs.current['thirdparty'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Third-Party Links and Services
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Our services may contain links to third-party websites, applications, or 
                  services that are not operated by us. This privacy policy does not apply 
                  to such third-party services.
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We are not responsible for the privacy practices of third parties</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We encourage you to review the privacy policies of any third-party services you use</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Third-party integrations may collect information independently from us</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Your interactions with third parties are governed by their privacy policies</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Children's Privacy */}
            <section 
              ref={el => sectionRefs.current['children'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Children's Privacy
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. 
                  We do not knowingly collect personal information from children.
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We do not target our services to children under 18</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We do not knowingly collect personal information from children</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>If we learn we have collected information from a child, we will delete it promptly</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Parents or guardians may contact us to review or delete their child's information</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Changes */}
            <section 
              ref={el => sectionRefs.current['changes'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Changes to This Policy
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes 
                  in our practices, services, or legal requirements.
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We will post the updated policy on our website with a revised "Last Updated" date</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Material changes will be communicated through email or prominent website notices</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Continued use of our services after changes constitutes acceptance of the updated policy</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We encourage you to review this policy periodically for updates</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    Previous versions of this privacy policy are available upon request.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section 
              ref={el => sectionRefs.current['contact'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Contact Us
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6">
                  If you have any questions, concerns, or requests regarding this privacy 
                  policy or our data practices, please contact us:
                </p>
                <div className="space-y-4 text-sm text-neutral-700">
                  <div>
                    <span className="text-neutral-500">Email</span>
                    <br />
                    <a href="mailto:privacy@duotech.com" className="underline">
                      privacy@duotech.com
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-500">Phone</span>
                    <br />
                    <a href="tel:+919667011681">+91 9667011681</a>
                    <br />
                    <span className="text-neutral-500 text-xs">(Monday-Friday, 9:00 AM - 6:00 PM IST)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Address</span>
                    <br />
                    C30, C Block, Sector 63<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <span className="text-neutral-500">Data Protection Officer</span>
                    <br />
                    <a href="mailto:dpo@duotech.com" className="underline">
                      dpo@duotech.com
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">
                      For data protection inquiries and personal data requests
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <span className="text-neutral-500">Grievance Officer</span>
                    <br />
                    <a href="mailto:grievance@duotech.com" className="underline">
                      grievance@duotech.com
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">
                      As required under the Information Technology Act, 2000
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-neutral-500">
              © 2025 Duo Tech Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-neutral-600 hover:text-neutral-900">
                Privacy
              </a>
              <a href="/terms" className="text-neutral-600 hover:text-neutral-900">
                Terms
              </a>
              <a href="/refund" className="text-neutral-600 hover:text-neutral-900">
                Refund
              </a>
              <a href="/cookie-policy" className="text-neutral-600 hover:text-neutral-900">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;