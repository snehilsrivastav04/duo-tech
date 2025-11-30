// DuoTechTermsPage.tsx
import React, { useState, useEffect, useRef } from "react";

const DuoTechTermsPage = () => {
  const [activeSection, setActiveSection] = useState("acceptance");
  const sectionRefs = useRef({});

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
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "services", label: "Services Description" },
    { id: "registration", label: "Registration & Account" },
    { id: "payments", label: "Payments & Billing" },
    { id: "intellectual", label: "Intellectual Property" },
    { id: "user-content", label: "User Content" },
    { id: "prohibited", label: "Prohibited Activities" },
    { id: "termination", label: "Termination" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "indemnification", label: "Indemnification" },
    { id: "governing", label: "Governing Law" },
    { id: "disputes", label: "Dispute Resolution" },
    { id: "changes", label: "Changes to Terms" },
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
            Terms and Conditions
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Legal agreement governing your use of our services
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
            {/* Acceptance of Terms */}
            <section 
              ref={el => sectionRefs.current['acceptance'] = el}
              className="mb-20"
            >
              <div className="bg-white p-8 border border-neutral-200">
                <h2 className="text-2xl text-neutral-900 mb-4 font-normal">
                  Acceptance of Terms
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  By accessing and using the services provided by Duo Tech Solutions ("Company", "we", "us", or "our"), 
                  you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. 
                  These terms constitute a legally binding agreement between you and Duo Tech Solutions.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  If you are entering into this agreement on behalf of a company or other legal entity, 
                  you represent that you have the authority to bind such entity to these terms. If you 
                  do not agree with any part of these terms, you must not use our services.
                </p>
              </div>
            </section>

            {/* Services Description */}
            <section 
              ref={el => sectionRefs.current['services'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Services Description
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Communication Services</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Bulk SMS Services:</strong> Mass messaging solutions for promotional and informational purposes</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Promotional SMS:</strong> Marketing and advertising messages to customer bases</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Transactional SMS:</strong> OTPs, alerts, and critical service notifications</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>WhatsApp Bulk Services:</strong> Business messaging through WhatsApp API</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>IVR Solutions:</strong> Interactive Voice Response systems for customer service</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Voice OBD Services:</strong> Outbound dialing solutions for telemarketing</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Virtual Numbers:</strong> Dedicated numbers for business communications</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Digital Marketing Services</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Email Marketing:</strong> Campaign management and bulk email services</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Social Media Marketing:</strong> Management and promotion across social platforms</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>SEO Services:</strong> Search engine optimization and ranking improvement</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>PPC Advertising:</strong> Pay-per-click campaign management</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Graphic Design:</strong> Creative design services for digital and print media</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Development Services</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Web Development:</strong> Custom website and web application development</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Android App Development:</strong> Mobile application development for Android</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>UI/UX Design:</strong> User interface and experience design services</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>API Integration:</strong> Third-party API integration and development</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-neutral-900 mb-4">Product Solutions</h3>
                  <div className="bg-white p-6 border border-neutral-200">
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>WhatsApp API Solutions:</strong> Official WhatsApp Business API integration</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>SMS Gateway:</strong> Programmable SMS gateway for developers</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>CRM Solutions:</strong> Customer relationship management systems</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span><strong>Source Codes Services:</strong> Custom software and source code development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration & Account */}
            <section 
              ref={el => sectionRefs.current['registration'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Registration & Account
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Account Creation</h3>
                    <p className="mb-4">
                      To access certain services, you must register for an account. You agree to:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Provide accurate, current, and complete information</li>
                      <li>• Maintain and promptly update your account information</li>
                      <li>• Maintain the security of your password and accept all risks of unauthorized access</li>
                      <li>• Notify us immediately of any unauthorized use of your account</li>
                      <li>• Use your account only for lawful purposes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">KYC Verification</h3>
                    <p className="mb-4">
                      For certain services, especially communication services, we require KYC verification:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Business registration documents</li>
                      <li>• GST certification and business proof</li>
                      <li>• Identity proof of authorized signatories</li>
                      <li>• Address proof of business entity</li>
                      <li>• Purpose of using communication services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Account Responsibilities</h3>
                    <p>
                      You are solely responsible for all activities that occur under your account. 
                      We reserve the right to suspend or terminate accounts that violate these terms 
                      or are used for illegal or unauthorized purposes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Payments & Billing */}
            <section 
              ref={el => sectionRefs.current['payments'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Payments & Billing
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Pricing and Fees</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Service pricing is as published on our website or agreed in writing</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>We reserve the right to change prices with 30 days' notice</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>All fees are exclusive of applicable taxes</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Prepaid services must maintain sufficient balance</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Billing Cycles</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>SMS and communication services are charged per message/usage</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Development services may be project-based or hourly</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Digital marketing services may be monthly retainers</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Payment is due as per agreed terms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Refund Policy</h3>
                  <p className="text-neutral-700 mb-3">
                    Refunds are processed as per our refund policy:
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Prepaid SMS credits are generally non-refundable</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Development services refunds are evaluated case-by-case</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Service downtime credits may be provided as service credits</span>
                    </li>
                    <li className="flex">
                      <span className="mr-3">—</span>
                      <span>Refund requests must be submitted in writing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section 
              ref={el => sectionRefs.current['intellectual'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Intellectual Property
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Our Intellectual Property</h3>
                    <p className="mb-4">
                      All intellectual property rights in our services, including but not limited to:
                    </p>
                    <ul className="space-y-2 ml-6 mb-4">
                      <li>• Software, platforms, and source code</li>
                      <li>• Brand names, logos, and trademarks</li>
                      <li>• Documentation, designs, and methodologies</li>
                      <li>• API structures and integration frameworks</li>
                    </ul>
                    <p>
                      are owned by or licensed to Duo Tech Solutions and are protected by copyright, 
                      trademark, and other laws.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Your Intellectual Property</h3>
                    <p className="mb-4">
                      You retain all intellectual property rights in your content, data, and materials. 
                      By using our services, you grant us a limited license to use your content solely 
                      for providing the services to you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Development Work</h3>
                    <p>
                      For custom development projects, intellectual property rights are transferred 
                      upon full payment unless otherwise specified in a separate agreement. Source 
                      code services include transfer of specified rights as per the service agreement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* User Content */}
            <section 
              ref={el => sectionRefs.current['user-content'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                User Content and Responsibilities
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Content Ownership</h3>
                    <p>
                      You are solely responsible for all content, messages, and materials 
                      transmitted through our services, including SMS content, email campaigns, 
                      and uploaded materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Content Guidelines</h3>
                    <p className="mb-4">You agree that your content will not:</p>
                    <ul className="space-y-2 ml-6">
                      <li>• Violate any laws, regulations, or third-party rights</li>
                      <li>• Contain spam, fraudulent, or misleading information</li>
                      <li>• Infringe intellectual property rights</li>
                      <li>• Contain offensive, defamatory, or inappropriate material</li>
                      <li>• Promote illegal activities or harmful content</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Compliance with Regulations</h3>
                    <p className="mb-4">
                      For communication services, you must comply with:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• TRAI regulations for telecom services</li>
                      <li>• DND (Do Not Disturb) registry requirements</li>
                      <li>• WhatsApp Business Policy for WhatsApp services</li>
                      <li>• GDPR and data protection laws where applicable</li>
                      <li>• Local spam and telemarketing regulations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section 
              ref={el => sectionRefs.current['prohibited'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Prohibited Activities
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Strictly Prohibited</h3>
                    <ul className="space-y-3">
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Spamming or unsolicited commercial communications</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Phishing, fraud, or deceptive practices</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Harassment, threats, or abusive content</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Malware distribution or hacking attempts</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Violation of DND registry regulations</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Unauthorized access to systems or data</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3">—</span>
                        <span>Reverse engineering or copying our technology</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 border-l-4 border-red-500">
                    <p className="text-sm text-red-800">
                      <strong>Important:</strong> Violation of prohibited activities may result in 
                      immediate account termination, legal action, and reporting to authorities. 
                      We cooperate fully with law enforcement investigations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section 
              ref={el => sectionRefs.current['termination'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Termination
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-3">By You</h3>
                      <ul className="space-y-2">
                        <li>• May terminate services at any time</li>
                        <li>• Written notice required for account closure</li>
                        <li>• Outstanding fees must be paid</li>
                        <li>• Data export available upon request</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-3">By Us</h3>
                      <ul className="space-y-2">
                        <li>• May suspend or terminate for violation of terms</li>
                        <li>• Non-payment of fees</li>
                        <li>• Illegal or prohibited activities</li>
                        <li>• Security or operational concerns</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Effects of Termination</h3>
                    <ul className="space-y-2">
                      <li>• Immediate cessation of service access</li>
                      <li>• Permanent deletion of data after retention period</li>
                      <li>• Outstanding payments become immediately due</li>
                      <li>• Return of company confidential information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section 
              ref={el => sectionRefs.current['disclaimers'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Disclaimers
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Service Availability</h3>
                    <p>
                      We strive to provide reliable services but do not guarantee uninterrupted 
                      or error-free operation. Services are provided "as is" and "as available" 
                      without warranties of any kind.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Third-Party Services</h3>
                    <p>
                      We are not responsible for third-party services, networks, or platforms 
                      that our services interact with, including telecom carriers, social media 
                      platforms, or API providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Delivery Guarantees</h3>
                    <p>
                      While we maintain high delivery rates, we do not guarantee 100% delivery 
                      of messages through SMS, email, or other communication channels due to 
                      factors beyond our control.
                    </p>
                  </div>

                  <div className="bg-amber-50 p-4 border-l-4 border-amber-500">
                    <p className="text-sm text-amber-800">
                      <strong>Disclaimer:</strong> We are not responsible for business decisions 
                      made based on our services, including marketing campaign results, 
                      SEO rankings, or development project outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section 
              ref={el => sectionRefs.current['liability'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Limitation of Liability
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">General Limitation</h3>
                    <p className="mb-4">
                      To the maximum extent permitted by law, Duo Tech Solutions shall not be liable for:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Indirect, incidental, or consequential damages</li>
                      <li>• Loss of profits, revenue, or data</li>
                      <li>• Business interruption or loss of opportunities</li>
                      <li>• Claims from third parties</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Maximum Liability</h3>
                    <p>
                      Our total liability for any claims shall not exceed the amount paid by you 
                      for the services in the six months preceding the claim.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Exceptions</h3>
                    <p>
                      These limitations do not apply to liability for death or personal injury 
                      caused by negligence, fraud, or any other liability that cannot be excluded by law.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Indemnification */}
            <section 
              ref={el => sectionRefs.current['indemnification'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Indemnification
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless Duo Tech Solutions and its 
                  affiliates, officers, directors, employees, and agents from any claims, 
                  liabilities, damages, losses, and expenses arising from:
                </p>
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Your use of our services</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Your violation of these terms</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Your content and materials</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Your violation of any laws or third-party rights</span>
                  </li>
                  <li className="flex">
                    <span className="mr-3">—</span>
                    <span>Any disputes between you and your customers or users</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section 
              ref={el => sectionRefs.current['governing'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Governing Law and Jurisdiction
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Applicable Law</h3>
                    <p>
                      These terms shall be governed by and construed in accordance with the laws 
                      of India, without regard to its conflict of law principles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Jurisdiction</h3>
                    <p>
                      Any legal actions or proceedings arising out of or relating to these terms 
                      shall be brought exclusively in the courts located in Noida, Uttar Pradesh, 
                      India, and you consent to the personal jurisdiction of such courts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Compliance with Local Laws</h3>
                    <p>
                      You are responsible for compliance with all local laws, regulations, 
                      and rules regarding your use of our services, including data protection 
                      and communication regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section 
              ref={el => sectionRefs.current['disputes'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Dispute Resolution
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Informal Resolution</h3>
                    <p className="mb-4">
                      Before initiating formal proceedings, parties agree to attempt to resolve 
                      disputes informally through negotiation:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Written notice of dispute required</li>
                      <li>• 30-day negotiation period</li>
                      <li>• Senior management involvement if needed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Mediation</h3>
                    <p>
                      If informal resolution fails, parties may agree to mediation through a 
                      mutually acceptable mediator before pursuing litigation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Arbitration</h3>
                    <p className="mb-4">
                      Certain disputes may be resolved through binding arbitration in accordance with:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• The Arbitration and Conciliation Act, 1996</li>
                      <li>• Single arbitrator appointed mutually</li>
                      <li>• Venue in Noida, Uttar Pradesh</li>
                      <li>• English language proceedings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section 
              ref={el => sectionRefs.current['changes'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Changes to Terms
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Modification Rights</h3>
                    <p>
                      We reserve the right to modify these terms at any time. We will provide 
                      notice of material changes through:
                    </p>
                    <ul className="space-y-2 ml-6 mt-3">
                      <li>• Email notification to registered users</li>
                      <li>• Website announcements and banners</li>
                      <li>• In-service notifications</li>
                      <li>• 30-day advance notice for material changes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Acceptance of Changes</h3>
                    <p className="mb-4">
                      Your continued use of our services after changes become effective 
                      constitutes acceptance of the modified terms.
                    </p>
                    <p>
                      If you do not agree to the changes, you must stop using our services 
                      and terminate your account.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Historical Versions</h3>
                    <p>
                      Previous versions of these terms are archived and available upon request. 
                      The "Last Updated" date indicates the effective date of the current terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section 
              ref={el => sectionRefs.current['contact'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Contact Information
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6">
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="space-y-4 text-sm text-neutral-700">
                  <div>
                    <span className="text-neutral-500">Company Name</span>
                    <br />
                    Duo Tech Solutions
                  </div>
                  <div>
                    <span className="text-neutral-500">Email</span>
                    <br />
                    <a href="mailto:legal@duotech.com" className="underline">
                      legal@duotech.com
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-500">Phone</span>
                    <br />
                    <a href="tel:+919667011681">+91 9667011681</a>
                  </div>
                  <div>
                    <span className="text-neutral-500">Address</span>
                    <br />
                    C30, C Block, Sector 63<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
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

export default DuoTechTermsPage;