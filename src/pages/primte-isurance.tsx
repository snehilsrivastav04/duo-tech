import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Check, ArrowRight } from 'lucide-react';

const PrimeFinance = () => {
  const [activeService, setActiveService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 1, name: 'New Car Loan', category: 'Vehicle Financing' },
    { id: 2, name: 'Used Car Loan', category: 'Vehicle Financing' },
    { id: 3, name: 'Car Refinance', category: 'Vehicle Financing' },
    { id: 4, name: 'Taxi Car Loan', category: 'Commercial' },
    { id: 5, name: 'Vehicle Loans', category: 'Vehicle Financing' },
    { id: 6, name: 'Commercial Vehicle Loan', category: 'Commercial' },
    { id: 7, name: 'Car BT Top Up Loan', category: 'Vehicle Financing' },
    { id: 8, name: 'Personal Loan', category: 'Personal Finance' },
    { id: 9, name: 'Business Loan', category: 'Business Finance' },
    { id: 10, name: 'Home Loan', category: 'Property Finance' },
    { id: 11, name: 'BT Home Loan', category: 'Property Finance' },
    { id: 12, name: 'Mortgage Loan', category: 'Property Finance' },
    { id: 13, name: 'Vehicle Insurance', category: 'Insurance' },
    { id: 14, name: 'Term Plan', category: 'Insurance' },
    { id: 15, name: 'Investment Plan', category: 'Investment' },
    { id: 16, name: 'Life Insurance', category: 'Insurance' },
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'Discuss your financial needs' },
    { step: '02', title: 'Documentation', desc: 'Submit required documents' },
    { step: '03', title: 'Approval', desc: 'Swift loan processing' },
    { step: '04', title: 'Disbursement', desc: 'Receive your funds' },
  ];

  const features = [
    'Lowest Interest Rates',
    'Quick Approval Process',
    'Dedicated Support',
    'Flexible Terms',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-light">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-light tracking-wider text-red-600">PRIME FINANCE</h1>
              <p className="text-xs tracking-widest text-gray-500 mt-1">AHMEDABAD</p>
            </div>
            <nav className="hidden md:flex items-center space-x-12 text-sm tracking-wide">
              <a href="#services" className="hover:text-red-600 transition-colors duration-300">Services</a>
              <a href="#about" className="hover:text-red-600 transition-colors duration-300">About</a>
              <a href="#contact" className="hover:text-red-600 transition-colors duration-300">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-red-600 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-red-600 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest text-red-600 mb-6">TRUSTED BY 5000+ CUSTOMERS</p>
            <h2 className="text-6xl md:text-7xl font-light leading-tight mb-8">
              Expert Financing<br />
              <span className="text-red-600">For Your Dreams</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mb-12">
              Specialized in used car loans and comprehensive financial solutions across Gujarat
            </p>
            <div className="flex items-center space-x-8">
              <a href="tel:7043086464" className="inline-flex items-center space-x-2 text-sm tracking-wide border border-red-600 text-red-600 px-8 py-4 hover:bg-red-600 hover:text-white transition-all duration-300">
                <Phone className="w-4 h-4" />
                <span>7043086464</span>
              </a>
              <a href="#services" className="text-sm tracking-wide text-gray-900 hover:text-red-600 transition-colors duration-300 inline-flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-widest text-red-600 mb-4">OUR SERVICES</p>
            <h3 className="text-4xl font-light">Comprehensive Financial Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-gray-200">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="bg-white p-8 transition-all duration-500 cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-red-600 transition-transform duration-500 ${hoveredService === service.id ? 'translate-x-0' : '-translate-x-full'}`}></div>
                <div className="relative z-10">
                  <p className={`text-xs tracking-widest mb-3 transition-colors duration-300 ${hoveredService === service.id ? 'text-red-200' : 'text-gray-500'}`}>
                    {service.category}
                  </p>
                  <h4 className={`text-xl font-light tracking-wide transition-colors duration-300 ${hoveredService === service.id ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h4>
                  <div className={`mt-4 w-12 h-px transition-colors duration-300 ${hoveredService === service.id ? 'bg-white' : 'bg-red-600'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-widest text-red-600 mb-4">HOW IT WORKS</p>
            <h3 className="text-4xl font-light">Simple Process</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {processSteps.map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-6 relative">
                  <span className="text-6xl font-light text-gray-100 group-hover:text-red-50 transition-colors duration-300">
                    {item.step}
                  </span>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gray-200"></div>
                  )}
                </div>
                <h4 className="text-xl font-light mb-3">{item.title}</h4>
                <p className="text-sm text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest text-red-200 mb-4">WHY CHOOSE US</p>
              <h3 className="text-4xl font-light mb-8">Excellence in Every Detail</h3>
              <p className="text-lg font-light text-red-100 leading-relaxed">
                Established in 2020, we've built our reputation on transparency, innovation, and unwavering commitment to our clients.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-4 border-b border-red-500 pb-6">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="text-lg font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-widest text-red-600 mb-4">ABOUT US</p>
          <h3 className="text-4xl font-light mb-12">Your Trusted Partner</h3>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Prime Finance is a dependable Car Loan Agency specializing in used car loan financing in Ahmedabad. We understand that purchasing a vehicle is a substantial investment, and our goal is to make the financing process seamless and accessible.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <p className="text-4xl font-light text-red-600 mb-2">5000+</p>
              <p className="text-sm tracking-wide text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-light text-red-600 mb-2">2020</p>
              <p className="text-sm tracking-wide text-gray-600">Established</p>
            </div>
            <div>
              <p className="text-4xl font-light text-red-600 mb-2">15+</p>
              <p className="text-sm tracking-wide text-gray-600">Loan Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-widest text-red-600 mb-4">GET IN TOUCH</p>
              <h3 className="text-4xl font-light mb-12">Let's Connect</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-sm tracking-wide text-gray-500 mb-2">Phone</p>
                    <p className="text-lg font-light">7043086464</p>
                    <p className="text-lg font-light">8000091123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-sm tracking-wide text-gray-500 mb-2">Email</p>
                    <p className="text-lg font-light">primefinance15@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <p className="text-sm tracking-wide text-gray-500 mb-2">Address</p>
                    <p className="text-lg font-light leading-relaxed">
                      13, Third floor, Agrawal Centre<br />
                      Nr. Income Tax Circle, Ashram Road<br />
                      Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 border border-gray-200">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-gray-300 py-4 px-0 focus:border-red-600 focus:outline-none transition-colors duration-300 bg-transparent font-light"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-gray-300 py-4 px-0 focus:border-red-600 focus:outline-none transition-colors duration-300 bg-transparent font-light"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full border-b border-gray-300 py-4 px-0 focus:border-red-600 focus:outline-none transition-colors duration-300 bg-transparent font-light"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full border-b border-gray-300 py-4 px-0 focus:border-red-600 focus:outline-none transition-colors duration-300 bg-transparent font-light resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 text-sm tracking-widest hover:bg-red-700 transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-light tracking-wider text-red-600 mb-2">PRIME FINANCE</p>
          <p className="text-sm text-gray-500 font-light">© 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default PrimeFinance;