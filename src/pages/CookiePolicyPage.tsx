import { useState, useEffect, useRef } from "react";

const CookiePolicyPage = () => {
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
    { id: "what-are-cookies", label: "What Are Cookies" },
    { id: "types-of-cookies", label: "Types of Cookies" },
    { id: "cookies-we-use", label: "Cookies We Use" },
    { id: "third-party-cookies", label: "Third-Party Cookies" },
    { id: "purpose-of-cookies", label: "Purpose of Cookies" },
    { id: "cookie-management", label: "Cookie Management" },
    { id: "do-not-track", label: "Do Not Track" },
    { id: "updates", label: "Policy Updates" },
    { id: "contact", label: "Contact" },
  ];

  const cookieTable = [
    {
      name: "__cf_bm",
      provider: "Cloudflare",
      purpose: "Bot management and security",
      expiry: "30 minutes",
      type: "Essential"
    },
    {
      name: "_ga",
      provider: "Google Analytics",
      purpose: "Distinguishing users",
      expiry: "2 years",
      type: "Analytics"
    },
    {
      name: "_gid",
      provider: "Google Analytics",
      purpose: "Distinguishing users",
      expiry: "24 hours",
      type: "Analytics"
    },
    {
      name: "_gat",
      provider: "Google Analytics",
      purpose: "Throttling request rate",
      expiry: "1 minute",
      type: "Analytics"
    },
    {
      name: "session_id",
      provider: "Duo Tech",
      purpose: "Maintaining user session",
      expiry: "Session",
      type: "Essential"
    },
    {
      name: "user_preferences",
      provider: "Duo Tech",
      purpose: "Storing user preferences",
      expiry: "1 year",
      type: "Preferences"
    },
    {
      name: "marketing_campaign",
      provider: "Facebook Pixel",
      purpose: "Tracking campaign performance",
      expiry: "90 days",
      type: "Marketing"
    }
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
            Cookie Policy
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            How we use cookies and similar tracking technologies
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
              <p className="text-xs text-neutral-500 mb-3">Cookie Settings</p>
              <button 
                onClick={() => {
                  // This would typically open a cookie preferences modal
                  console.log("Open cookie settings");
                }}
                className="text-sm text-neutral-900 hover:underline"
              >
                Manage preferences →
              </button>
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
                  Cookie Policy Overview
                </h2>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  This Cookie Policy explains how Duo Tech Solutions ("we", "us", "our") uses cookies 
                  and similar tracking technologies when you visit our website or use our services. 
                  This policy should be read alongside our Privacy Policy.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  By using our website and services, you consent to the use of cookies as described 
                  in this policy, unless you have disabled them in your browser settings.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 border border-blue-200">
                  <h3 className="text-blue-900 font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-sm text-blue-800">
                    Required for website functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="bg-green-50 p-6 border border-green-200">
                  <h3 className="text-green-900 font-semibold mb-2">Optional Cookies</h3>
                  <p className="text-sm text-green-800">
                    You can manage these through cookie preferences or browser settings.
                  </p>
                </div>
              </div>
            </section>

            {/* What Are Cookies */}
            <section 
              ref={el => sectionRefs.current['what-are-cookies'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                What Are Cookies?
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Cookies are small text files that are placed on your computer, smartphone, or other 
                  device when you visit a website. They are widely used to make websites work more 
                  efficiently and provide information to the website owners.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-neutral-600">🍪</span>
                    </div>
                    <h4 className="font-semibold mb-2">Small Text Files</h4>
                    <p className="text-sm text-neutral-600">Stored on your device</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-neutral-600">📝</span>
                    </div>
                    <h4 className="font-semibold mb-2">Website Memory</h4>
                    <p className="text-sm text-neutral-600">Remember your preferences</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-neutral-600">⚙️</span>
                    </div>
                    <h4 className="font-semibold mb-2">Various Purposes</h4>
                    <p className="text-sm text-neutral-600">Functionality, analytics, marketing</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Cookies */}
            <section 
              ref={el => sectionRefs.current['types-of-cookies'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-lg px-3 py-1 text-sm font-semibold mr-4">
                      Essential
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Strictly Necessary Cookies</h3>
                      <p className="text-neutral-700">
                        These cookies are essential for the website to function properly. They enable 
                        core functionality such as security, network management, and accessibility. 
                        You cannot opt-out of these cookies.
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-sm text-blue-800">
                      <strong>Examples:</strong> Session management, load balancing, security cookies
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 text-green-800 rounded-lg px-3 py-1 text-sm font-semibold mr-4">
                      Preferences
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Functionality Cookies</h3>
                      <p className="text-neutral-700">
                        These cookies allow the website to remember choices you make and provide 
                        enhanced, more personal features. They may be set by us or by third-party 
                        providers whose services we have added to our pages.
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <p className="text-sm text-green-800">
                      <strong>Examples:</strong> Language preferences, font size, region settings
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-purple-100 text-purple-800 rounded-lg px-3 py-1 text-sm font-semibold mr-4">
                      Analytics
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Performance Cookies</h3>
                      <p className="text-neutral-700">
                        These cookies help us understand how visitors interact with our website by 
                        collecting and reporting information anonymously. They help us improve how 
                        our website works.
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="text-sm text-purple-800">
                      <strong>Examples:</strong> Google Analytics, heatmaps, user behavior tracking
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start mb-4">
                    <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 text-sm font-semibold mr-4">
                      Marketing
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Targeting/Advertising Cookies</h3>
                      <p className="text-neutral-700">
                        These cookies are used to make advertising messages more relevant to you. 
                        They perform functions like preventing the same ad from continuously reappearing, 
                        ensuring that ads are properly displayed, and in some cases selecting 
                        advertisements based on your interests.
                      </p>
                    </div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded">
                    <p className="text-sm text-amber-800">
                      <strong>Examples:</strong> Facebook Pixel, Google Ads, retargeting cookies
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies We Use */}
            <section 
              ref={el => sectionRefs.current['cookies-we-use'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Detailed Cookie Information
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-3 px-4 font-semibold text-neutral-700">Cookie Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-neutral-700">Provider</th>
                        <th className="text-left py-3 px-4 font-semibold text-neutral-700">Purpose</th>
                        <th className="text-left py-3 px-4 font-semibold text-neutral-700">Expiry</th>
                        <th className="text-left py-3 px-4 font-semibold text-neutral-700">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTable.map((cookie, index) => (
                        <tr key={index} className="border-b border-neutral-100">
                          <td className="py-3 px-4 font-mono text-neutral-800">{cookie.name}</td>
                          <td className="py-3 px-4 text-neutral-700">{cookie.provider}</td>
                          <td className="py-3 px-4 text-neutral-700">{cookie.purpose}</td>
                          <td className="py-3 px-4 text-neutral-700">{cookie.expiry}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              cookie.type === 'Essential' ? 'bg-blue-100 text-blue-800' :
                              cookie.type === 'Analytics' ? 'bg-purple-100 text-purple-800' :
                              cookie.type === 'Preferences' ? 'bg-green-100 text-green-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {cookie.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200">
                  <p className="text-sm text-neutral-700">
                    <strong>Note:</strong> This list is not exhaustive and may be updated periodically. 
                    We strive to keep this information accurate and current.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section 
              ref={el => sectionRefs.current['third-party-cookies'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Third-Party Cookies
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  We work with third-party service providers who may also set cookies on our website. 
                  These third parties help us to improve our website and provide better services to you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Analytics Providers</h3>
                    <div className="space-y-3 text-neutral-700">
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>Google Analytics:</strong> Tracks website traffic and user behavior</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>Hotjar:</strong> Provides heatmaps and user session recordings</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>Microsoft Clarity:</strong> Analyzes user interactions and website performance</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg text-neutral-900 mb-3">Advertising Partners</h3>
                    <div className="space-y-3 text-neutral-700">
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>Facebook Pixel:</strong> Tracks conversions and optimizes ads</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>Google Ads:</strong> Tracks advertising campaign performance</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-neutral-400 mr-3 mt-1">•</span>
                        <span><strong>LinkedIn Insight Tag:</strong> Tracks LinkedIn ad conversions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 border-l-4 border-yellow-500">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Third-party cookies are subject to the respective 
                      privacy policies of these providers. We encourage you to review their policies 
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Purpose of Cookies */}
            <section 
              ref={el => sectionRefs.current['purpose-of-cookies'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Purpose of Using Cookies
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-neutral-100 rounded-lg p-3 mr-4">
                      <span className="text-neutral-600 text-lg">🔒</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Security</h3>
                      <p className="text-neutral-700">
                        Protect our website and users from malicious activities, detect fraud, 
                        and prevent unauthorized access.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-neutral-100 rounded-lg p-3 mr-4">
                      <span className="text-neutral-600 text-lg">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Performance</h3>
                      <p className="text-neutral-700">
                        Monitor and improve website performance, optimize loading times, and 
                        ensure smooth user experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-neutral-100 rounded-lg p-3 mr-4">
                      <span className="text-neutral-600 text-lg">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Personalization</h3>
                      <p className="text-neutral-700">
                        Remember your preferences and settings to provide a customized experience 
                        tailored to your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-neutral-100 rounded-lg p-3 mr-4">
                      <span className="text-neutral-600 text-lg">📊</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Analytics</h3>
                      <p className="text-neutral-700">
                        Understand how users interact with our website, identify areas for 
                        improvement, and make data-driven decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-neutral-100 rounded-lg p-3 mr-4">
                      <span className="text-neutral-600 text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-2">Marketing</h3>
                      <p className="text-neutral-700">
                        Deliver relevant advertisements, measure campaign effectiveness, and 
                        understand user interests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookie Management */}
            <section 
              ref={el => sectionRefs.current['cookie-management'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Managing Your Cookie Preferences
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Browser Settings</h3>
                  <p className="text-neutral-700 mb-4">
                    Most web browsers allow you to control cookies through their settings. 
                    You can usually find these settings in the "Options" or "Preferences" 
                    menu of your browser.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-neutral-50 p-4">
                      <h4 className="font-semibold mb-2">Chrome</h4>
                      <p>Settings → Privacy and Security → Cookies and other site data</p>
                    </div>
                    <div className="bg-neutral-50 p-4">
                      <h4 className="font-semibold mb-2">Firefox</h4>
                      <p>Options → Privacy & Security → Cookies and Site Data</p>
                    </div>
                    <div className="bg-neutral-50 p-4">
                      <h4 className="font-semibold mb-2">Safari</h4>
                      <p>Preferences → Privacy → Cookies and website data</p>
                    </div>
                    <div className="bg-neutral-50 p-4">
                      <h4 className="font-semibold mb-2">Edge</h4>
                      <p>Settings → Cookies and site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Cookie Consent Tool</h3>
                  <p className="text-neutral-700 mb-4">
                    When you first visit our website, you will see a cookie consent banner that 
                    allows you to:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border border-neutral-300 mr-3"></div>
                      <span>Accept all cookies</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border border-neutral-300 mr-3"></div>
                      <span>Reject non-essential cookies</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border border-neutral-300 mr-3"></div>
                      <span>Customize your preferences</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <button 
                      onClick={() => console.log("Open cookie preferences")}
                      className="text-neutral-900 hover:underline text-sm"
                    >
                      Update your cookie preferences anytime →
                    </button>
                  </div>
                </div>

                <div className="bg-white p-6 border border-neutral-200">
                  <h3 className="text-lg text-neutral-900 mb-3">Opt-Out Tools</h3>
                  <p className="text-neutral-700 mb-4">
                    You can opt-out of certain types of cookies through third-party tools:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-neutral-400 mr-2 mt-1">•</span>
                      <span>
                        <strong>Google Analytics:</strong>{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout" className="underline" target="_blank" rel="noopener noreferrer">
                          Google Analytics Opt-out Browser Add-on
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neutral-400 mr-2 mt-1">•</span>
                      <span>
                        <strong>Network Advertising Initiative:</strong>{" "}
                        <a href="https://optout.networkadvertising.org" className="underline" target="_blank" rel="noopener noreferrer">
                          NAI Consumer Opt-Out
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neutral-400 mr-2 mt-1">•</span>
                      <span>
                        <strong>Digital Advertising Alliance:</strong>{" "}
                        <a href="https://optout.aboutads.info" className="underline" target="_blank" rel="noopener noreferrer">
                          DAA Consumer Choice Page
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 border border-blue-200">
                  <h3 className="text-blue-900 mb-3">Important Note</h3>
                  <p className="text-sm text-blue-800">
                    Disabling certain cookies may affect the functionality of our website. 
                    Essential cookies cannot be disabled as they are necessary for the website 
                    to function properly.
                  </p>
                </div>
              </div>
            </section>

            {/* Do Not Track */}
            <section 
              ref={el => sectionRefs.current['do-not-track'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Do Not Track Signals
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed mb-6">
                  Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites 
                  indicating that you do not want to be tracked. Currently, there is no standard for 
                  how websites should respond to these signals.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  We do not currently respond to DNT browser signals or mechanisms. However, we provide 
                  you with the ability to manage your cookie preferences through the methods described 
                  in this policy.
                </p>
                <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200">
                  <p className="text-sm text-neutral-700">
                    <strong>Note:</strong> As industry standards evolve and DNT signals become more 
                    standardized, we may update our approach to responding to these signals in future 
                    versions of this policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section 
              ref={el => sectionRefs.current['updates'] = el}
              className="mb-20"
            >
              <h2 className="text-2xl text-neutral-900 mb-6 font-normal">
                Updates to This Cookie Policy
              </h2>
              
              <div className="bg-white p-8 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed mb-6">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices, services, or legal requirements.
                </p>
                <div className="space-y-4 text-neutral-700">
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We will post the updated policy on our website with a revised "Last Updated" date</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Material changes will be communicated through our website or email notifications</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>We encourage you to review this policy periodically for updates</span>
                  </div>
                  <div className="flex">
                    <span className="mr-4 text-neutral-400">•</span>
                    <span>Continued use of our website after changes constitutes acceptance of the updated policy</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    Previous versions of this Cookie Policy are available upon request.
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
                  If you have any questions, concerns, or requests regarding this Cookie Policy 
                  or our use of cookies, please contact us:
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
                      For data protection inquiries including cookie-related questions
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200">
                  <h3 className="text-neutral-900 mb-2">Cookie Preference Management</h3>
                  <p className="text-sm text-neutral-700">
                    To update your cookie preferences or withdraw consent, please use the 
                    cookie settings tool on our website or contact us at the email above.
                  </p>
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

export default CookiePolicyPage;