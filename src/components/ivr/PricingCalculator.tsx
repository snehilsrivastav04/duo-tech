
import React, { useState, useMemo } from 'react';

const PricingCalculator = () => {
  const [pricingCalculator, setPricingCalculator] = useState({
    calls: 1000,
    agentCalls: 300,
    callDuration: 3
  });

  const savings = useMemo(() => {
    const { calls, agentCalls, callDuration } = pricingCalculator;
    const automatedCalls = calls - agentCalls;
    
    const traditionalCost = calls * callDuration * 3;
    const ourCost = agentCalls * callDuration * 1;
    
    const savings = traditionalCost - ourCost;
    const savingsPercent = traditionalCost > 0 ? ((savings / traditionalCost) * 100).toFixed(0) : 0;
    
    return { traditionalCost, ourCost, savings, savingsPercent, automatedCalls };
  }, [pricingCalculator]);

  return (
    <section id="pricing" className="bg-blue-900 text-white py-16 border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light mb-4">Pay Only ₹1/Minute for Agent Connections</h2>
          <p className="text-lg font-light text-blue-100">Calculate your savings with our interactive pricing calculator</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/10 backdrop-blur rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-sm font-light mb-2">
                  <span>Total Monthly Calls</span>
                  <span className="text-blue-200">{pricingCalculator.calls.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={pricingCalculator.calls}
                  onChange={(e) => setPricingCalculator({...pricingCalculator, calls: parseInt(e.target.value)})}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-light mb-2">
                  <span>Calls Connected to Agents</span>
                  <span className="text-blue-200">{pricingCalculator.agentCalls.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={pricingCalculator.calls}
                  step="50"
                  value={pricingCalculator.agentCalls}
                  onChange={(e) => setPricingCalculator({...pricingCalculator, agentCalls: parseInt(e.target.value)})}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm font-light mb-2">
                  <span>Average Call Duration (Minutes)</span>
                  <span className="text-blue-200">{pricingCalculator.callDuration}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={pricingCalculator.callDuration}
                  onChange={(e) => setPricingCalculator({...pricingCalculator, callDuration: parseFloat(e.target.value)})}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-300"
                />
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between text-sm font-light mb-2">
                  <span>Automated Calls (FREE)</span>
                  <span className="text-green-300 font-normal">{savings.automatedCalls.toLocaleString()} calls</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="text-sm font-light text-blue-200 mb-2">Traditional Cost (₹3/min)</div>
              <div className="text-4xl font-light line-through opacity-50">₹{savings.traditionalCost.toLocaleString()}</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-gray-900">
              <div className="text-sm font-light text-gray-600 mb-2">Your Cost with Us (₹1/min)</div>
              <div className="text-5xl font-normal text-blue-900">₹{savings.ourCost.toLocaleString()}</div>
              <div className="text-sm font-light text-gray-500 mt-2">Only for agent calls · Automated calls FREE</div>
            </div>

            <div className="bg-green-500 rounded-lg p-6 text-white">
              <div className="text-sm font-light mb-2">You Save Every Month</div>
              <div className="flex items-baseline gap-4">
                <div className="text-5xl font-normal">₹{savings.savings.toLocaleString()}</div>
                <div className="text-2xl font-light">({savings.savingsPercent}%)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-full px-6 py-3">
            <span className="text-green-400 font-bold">₹</span>
            <span className="text-white font-light">Start with just ₹1,000/month · No setup fees · No contracts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
