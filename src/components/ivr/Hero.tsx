
import React, { useState } from 'react';
import { PlayCircle, PauseCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DemoFlow {
  id: string;
  label: string;
  text: string;
}

interface HeroProps {
  demoFlows: DemoFlow[];
  onShowContactForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ demoFlows, onShowContactForm }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeDemo, setActiveDemo] = useState('greeting');

  return (
    <section id="hero" className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 40px)`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 rounded-full">
              <span className="text-xs font-light tracking-widest text-blue-900 uppercase">Complete IVR Solutions</span>
            </div>
            <h1 className="text-6xl font-light text-gray-900 leading-tight tracking-tight">
              Everything You Need for
              <span className="block text-blue-900 font-normal mt-2">Interactive Voice Response</span>
            </h1>
            <p className="text-lg font-light text-gray-600 leading-relaxed">
              Comprehensive IVR solutions with unlimited menu levels, advanced features, and pay-only-for-agent-connections pricing starting at just ₹1 per minute.
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-900 text-white text-sm font-light tracking-wide uppercase hover:bg-blue-800 transition-all duration-300 shadow-lg"
              >
                View Pricing
              </button>
              <Link to="/contact">
              <button 
                onClick={onShowContactForm}
                className="px-8 py-3 border border-gray-300 text-gray-700 text-sm font-light tracking-wide uppercase hover:border-blue-900 hover:text-blue-900 transition-all duration-300"
              >
                Get Started
              </button>
              </Link>
            </div>
          </div>

          {/* Interactive IVR Demo Preview */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-light text-gray-900">Live IVR Flow Demo</h3>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-blue-900 hover:scale-110 transition-transform duration-300"
              >
                {isPlaying ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
              </button>
            </div>
            
            <div className="space-y-4">
              {demoFlows.map((flow, idx) => (
                <button
                  key={flow.id}
                  onClick={() => setActiveDemo(flow.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeDemo === flow.id
                      ? 'border-blue-900 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-light ${
                      activeDemo === flow.id ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-light text-gray-900">{flow.label}</div>
                      {activeDemo === flow.id && (
                        <div className="text-sm font-light text-gray-600 mt-2">
                          {flow.text}
                        </div>
                      )}
                    </div>
                    {activeDemo === flow.id && (
                      <ChevronRight className="text-blue-900" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
