import { useState, useEffect, useRef } from "react";

const RefundPolicyPage = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

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

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "sms-services", label: "SMS Services" },
    { id: "whatsapp-services", label: "WhatsApp Services" },
    { id: "voice-services", label: "Voice Services" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "development", label: "Development Services" },
    { id: "products", label: "Products & APIs" },
    { id: "processing", label: "Refund Processing" },
    { id: "exceptions", label: "Non-Refundable" },
    { id: "cancellation", label: "Cancellation" },
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
            Refund Policy
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Our policy on refunds, cancellations, and service credits
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
              <p className="text-xs text-neutral-500 mb-3">Need Help?</p>
              <a href="/contact" className="text-sm text-neutral-900 hover:underline">
                Contact support →
              </a>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* Overview */}
            <section 
              ref={el => sectionRefs.current['overview'] = el}
              className="mb-20"
            >
              <div className="bg-white p-8 border border-neutral-200">
                <h2 className="text-2xl text-neutral-900 mb-4 font-normal">
                  Refund Policy Overview
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  At Duo Tech Solutions, we strive to provide high-quality services that meet 
                  your expectations. This refund policy outlines the circumstances under which 
                  refunds are provided for our various services.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Please read this policy carefully as refund eligibility varies by service type. 
                  By using our services, you agree to the terms outlined in this refund policy.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 border border-green-200">
                  <h3 className="text-green-900 font-semibold mb-2">Refundable</h3>
                  <p className="text-sm text-green-800">
                    Service downtime, billing errors, undelivered development work
                  </p>
                </div>
                <div className="bg-amber-50 p-6 border border-amber-200">
                  <h3 className="text-amber-900 font-semibold mb-2">Partially Refundable</h3>
                  <p className="text-sm text-amber-800">
                    Project cancellations, service credits for minor issues
                  </p>
                </div>
                <div className="bg-red-50 p-6 border border-red-200">
                  <h3 className="text-red-900 font-semibold mb-2">Non-Refundable</h3>
                  <p className="text-sm text-red-800">
                    Used SMS credits, delivered services, setup fees
                  </p>
                </div>
              </div>
            </section>

            {/* SMS Services */}
            <section 
              ref={el => sectionRefs.current['sms-services'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                SMS Services Refund Policy
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Bulk SMS Credits</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span><strong>Non-Refundable:</strong> Purchased SMS credits cannot be refunded once purchased</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Validity:</strong> SMS credits are valid for 12 months from purchase date</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span><strong>Expiry:</strong> Unused credits expire after validity period without refund</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Service Credits for Downtime</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Major Outage:</strong> Service credits provided for downtime exceeding 4 consecutive hours</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Delivery Issues:</strong> Credits for documented delivery failures due to platform issues</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span><strong>Carrier Issues:</strong> No credits for carrier-specific delivery problems</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Promotional & Transactional SMS</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds for messages rejected by carriers due to content violations</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds for messages blocked by DND registry</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for duplicate billing or system errors</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* WhatsApp Services */}
            <section 
              ref={el => sectionRefs.current['whatsapp-services'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                WhatsApp Business Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">WhatsApp API Services</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span><strong>Setup Fees:</strong> One-time setup and integration fees are non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span><strong>Message Templates:</strong> No refunds for rejected message templates</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Service Issues:</strong> Refunds for prolonged service unavailability</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span><strong>Usage-Based:</strong> Prepaid conversation credits are non-refundable</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">WhatsApp Bulk Messaging</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds for messages not delivered due to user blocking</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds for policy violations leading to account restrictions</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for technical failures preventing message delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Voice Services */}
            <section 
              ref={el => sectionRefs.current['voice-services'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Voice Services Refund Policy
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">IVR Solutions</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span><strong>Development Fees:</strong> Custom IVR development costs are non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Monthly Services:</strong> Pro-rated refunds for unused monthly service periods</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span><strong>Cancellation:</strong> 30-day notice required for service cancellation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Voice OBD Services</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>Prepaid minutes are non-refundable and valid for 6 months</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for system-wide outages affecting service availability</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds for calls not answered or rejected by recipients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Virtual Numbers</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>Number allocation and setup fees are non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Pro-rated refunds for advance payments if cancelled within 7 days</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Number porting fees are non-refundable once process initiates</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Marketing */}
            <section 
              ref={el => sectionRefs.current['digital-marketing'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Digital Marketing Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Monthly Retainer Services</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span><strong>Early Termination:</strong> Pro-rated refunds for unused service months</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span><strong>Work Performed:</strong> No refunds for work already completed and delivered</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span><strong>30-Day Notice:</strong> Written cancellation notice required 30 days in advance</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Performance-Based Services</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds based on campaign performance metrics (SEO rankings, PPC results)</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for non-delivery of agreed-upon services</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Ad spend budgets are non-refundable once campaigns are launched</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Specific Service Types</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">×</span>
                      <span>Email Marketing: No refunds for sent campaigns</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">×</span>
                      <span>Social Media: No refunds for published content</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>Graphic Design: Refunds for undelivered work</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">⚠</span>
                      <span>SEO: Partial refunds for early contract termination</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Development Services */}
            <section 
              ref={el => sectionRefs.current['development'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Development Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Custom Development Projects</h3>
                  <div className="space-y-4 text-neutral-700">
                    <div>
                      <h4 className="font-semibold mb-2">Milestone-Based Payments</h4>
                      <div className="space-y-2 ml-4">
                        <div className="flex items-start">
                          <span className="text-red-500 mr-2 mt-1">×</span>
                          <span>Payments for completed milestones are non-refundable</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>Refunds for milestones not delivered as per agreement</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Project Cancellation</h4>
                      <div className="space-y-2 ml-4">
                        <div className="flex items-start">
                          <span className="text-amber-500 mr-2 mt-1">⚠</span>
                          <span>25% cancellation fee if project is cancelled after commencement</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>Full refund if cancelled within 3 days of agreement signing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Specific Development Services</h3>
                  <div className="grid gap-4 text-sm text-neutral-700">
                    <div className="flex justify-between items-center p-3 bg-neutral-50">
                      <span>Web Development</span>
                      <span className="text-amber-600 font-semibold">Partial Refunds</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-50">
                      <span>Android App Development</span>
                      <span className="text-amber-600 font-semibold">Milestone-Based</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-50">
                      <span>UI/UX Design</span>
                      <span className="text-red-600 font-semibold">Non-Refundable</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-neutral-50">
                      <span>API Integration</span>
                      <span className="text-green-600 font-semibold">Refundable</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Source Code Services</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>Source code delivery is final and non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for undelivered source code as per agreement</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Bug fixes provided instead of refunds for minor issues</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products & APIs */}
            <section 
              ref={el => sectionRefs.current['products'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Products & API Solutions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">SMS Gateway API</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>API setup and integration fees are non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for API service unavailability exceeding 24 hours</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Prepaid API credits are non-refundable but transferable</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">CRM Solutions</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>30-day money-back guarantee for subscription plans</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>No refunds after 30 days of subscription</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Customization fees are non-refundable</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">WhatsApp API Solutions</h3>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">×</span>
                      <span>WhatsApp Business API approval fees are non-refundable</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Refunds for service setup failures</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">⚠</span>
                      <span>Monthly subscriptions can be cancelled with 30-day notice</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Processing */}
            <section 
              ref={el => sectionRefs.current['processing'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Refund Processing
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Refund Request Procedure</h3>
                    <ol className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                        <span>Submit written refund request to info@duotechsolutions.in</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                        <span>Include order details, transaction ID, and reason for refund</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                        <span>Request reviewed within 5-7 business days</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">4</span>
                        <span>Approval/denial notification sent via email</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">5</span>
                        <span>Processing time: 7-10 business days for approved refunds</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Refund Methods</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-neutral-50 p-4">
                        <h4 className="font-semibold mb-2">Original Payment Method</h4>
                        <p>Refunds processed to the original payment source</p>
                      </div>
                      <div className="bg-neutral-50 p-4">
                        <h4 className="font-semibold mb-2">Service Credits</h4>
                        <p>Option to receive refund as service credits with 10% bonus</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Processing Timeline</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Request Review</span>
                        <span className="text-neutral-600">5-7 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Refund Processing</span>
                        <span className="text-neutral-600">7-10 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bank Transfer</span>
                        <span className="text-neutral-600">Additional 3-5 business days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Non-Refundable Items */}
            <section 
              ref={el => sectionRefs.current['exceptions'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Non-Refundable Items & Services
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Strictly Non-Refundable</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Used SMS credits, voice minutes, or WhatsApp conversations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Setup fees, integration costs, and one-time charges</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Digital products and delivered source code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Services already rendered and work completed</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Third-party costs and platform fees</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1">×</span>
                        <span>Custom development work after acceptance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 border-l-4 border-red-500">
                    <p className="text-sm text-red-800">
                      <strong>Important:</strong> No refunds will be provided for services affected by 
                      factors beyond our control, including but not limited to: carrier network issues, 
                      recipient device problems, internet connectivity issues, or force majeure events.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section 
              ref={el => sectionRefs.current['cancellation'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Service Cancellation Policy
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6 text-neutral-700">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Cancellation Procedure</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">1</span>
                        <div>
                          <span className="font-semibold">Written Notice Required</span>
                          <p className="text-sm text-neutral-600 mt-1">
                            Email cancellation request to info@duotechsolutions.in from registered email
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">2</span>
                        <div>
                          <span className="font-semibold">30-Day Notice Period</span>
                          <p className="text-sm text-neutral-600 mt-1">
                            Most services require 30-day advance cancellation notice
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-neutral-200 text-neutral-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">3</span>
                        <div>
                          <span className="font-semibold">Settlement of Dues</span>
                          <p className="text-sm text-neutral-600 mt-1">
                            All outstanding payments must be cleared before cancellation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Immediate Cancellation</h3>
                    <p className="mb-4">
                      We reserve the right to immediately cancel services without refund in cases of:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li>• Terms of service violations</li>
                      <li>• Illegal or prohibited activities</li>
                      <li>• Non-payment of dues</li>
                      <li>• Fraudulent activities</li>
                      <li>• Abuse of services</li>
                    </ul>
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
                Contact for Refund Requests
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6">
                  For refund requests, billing inquiries, or cancellation requests, please contact:
                </p>
                <div className="space-y-4 text-sm text-neutral-700">
                  <div>
                    <span className="text-neutral-500">Billing Department</span>
                    <br />
                    <a href="mailto:info@duotechsolutions.in" className="underline">
                      info@duotechsolutions.in
                    </a>
                  </div>
                  <div>
                    <span className="text-neutral-500">Phone Support</span>
                    <br />
                    <a href="tel:+919667011681">+91 9667011681</a>
                    <br />
                    <span className="text-neutral-500 text-xs">(Monday-Friday, 10:00 AM - 6:00 PM IST)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500">Address</span>
                    <br />
                    C30, C Block, Sector 63<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
                  </div>
                  <div className="pt-4 border-t border-neutral-200">
                    <span className="text-neutral-500">Emergency Support</span>
                    <br />
                    <a href="mailto:support@duotech.com" className="underline">
                      support@duotechsolutions.in
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">
                      For urgent service-related issues affecting refund eligibility
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200">
                  <h3 className="text-blue-900 font-semibold mb-2">Refund Request Requirements</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Include your registered email address</li>
                    <li>• Provide order ID or transaction reference</li>
                    <li>• State clear reason for refund request</li>
                    <li>• Attach supporting documents if applicable</li>
                  </ul>
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

export default RefundPolicyPage;