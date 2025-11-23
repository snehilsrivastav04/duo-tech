
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      requirements: ''
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-8">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-light text-gray-900">Get Started with IVR</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Business Requirements</label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors duration-300"
                placeholder="Tell us about your current call volume, specific needs, and any integration requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 text-lg font-light tracking-wide uppercase hover:bg-blue-800 transition-colors duration-300"
            >
              Start My Free Trial
            </button>

            <div className="text-center text-sm font-light text-gray-500">
              <span className="font-bold">₹</span>
              Start with just ₹1,000/month after 14-day free trial · No setup fees
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
