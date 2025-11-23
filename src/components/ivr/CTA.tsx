
import React from 'react';

interface CTAProps {
  onShowContactForm: () => void;
}

const CTA: React.FC<CTAProps> = ({ onShowContactForm }) => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-light mb-6">Ready to Transform Your Customer Experience?</h2>
        <p className="text-xl font-light text-blue-100 mb-8 max-w-2xl mx-auto">
          Start with our IVR solution today and provide exceptional customer service while reducing costs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onShowContactForm}
            className="px-8 py-4 bg-white text-blue-900 text-lg font-light tracking-wide uppercase hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Start Free Trial
          </button>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white text-white text-lg font-light tracking-wide uppercase hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            View Detailed Pricing
          </button>
        </div>
        <div className="mt-8 text-blue-200 font-light">
          <span className="font-bold">₹</span>
          Start with just ₹1,000/month · 14-day free trial · No credit card required
        </div>
      </div>
    </section>
  );
};

export default CTA;
