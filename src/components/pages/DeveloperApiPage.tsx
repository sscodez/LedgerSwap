'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DeveloperApiPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/markets',
      description: 'Get all available trading pairs',
      response: '{ "markets": [...] }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/ticker/{symbol}',
      description: 'Get ticker information for a specific symbol',
      response: '{ "symbol": "BTC/USD", "price": 45000, ... }'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/orders',
      description: 'Place a new order',
      response: '{ "orderId": "12345", "status": "pending" }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/orders',
      description: 'Get user orders',
      response: '{ "orders": [...] }'
    }
  ];

  const sdks = [
    { name: 'JavaScript/Node.js', icon: '🟨', status: 'Available' },
    { name: 'Python', icon: '🐍', status: 'Available' },
    { name: 'Go', icon: '🔵', status: 'Available' },
    { name: 'Java', icon: '☕', status: 'Coming Soon' },
    { name: 'C#', icon: '🔷', status: 'Coming Soon' },
    { name: 'PHP', icon: '🐘', status: 'Coming Soon' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Developer API
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Build powerful trading applications with our comprehensive REST API
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'documentation', 'sdks', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab === 'sdks' ? 'SDKs' : tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">API Overview</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  LedgerSwap API provides programmatic access to trading functionality, market data, and account management.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance</h3>
                  <p className="text-gray-600 text-sm">Low latency trading with 99.9% uptime guarantee</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
                  <p className="text-gray-600 text-sm">API key authentication with rate limiting protection</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer Friendly</h3>
                  <p className="text-gray-600 text-sm">Comprehensive docs, SDKs, and sandbox environment</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start</h3>
                <div className="bg-gray-900 rounded-lg p-6 mb-6">
                  <code className="text-green-400 text-sm">
                    <div className="mb-2"># Get your API key from the dashboard</div>
                    <div className="mb-2">curl -H "Authorization: Bearer YOUR_API_KEY" \</div>
                    <div className="mb-2 ml-4">https://api.ledgerswap.com/v1/markets</div>
                  </code>
                </div>
                <p className="text-gray-600">
                  Get started in minutes with our RESTful API. Generate your API keys in the dashboard and start building.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'documentation' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">API Documentation</h2>
                <p className="text-gray-600">
                  Complete reference for all available endpoints and parameters
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Available Endpoints</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-900">{endpoint.endpoint}</code>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{endpoint.description}</p>
                      <div className="bg-gray-50 rounded p-3">
                        <code className="text-xs text-gray-700">{endpoint.response}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    All API requests require authentication using API keys. Include your API key in the Authorization header.
                  </p>
                  <div className="bg-gray-900 rounded p-3">
                    <code className="text-green-400 text-xs">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Rate Limits</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Public endpoints: 100 requests/minute</li>
                    <li>• Private endpoints: 60 requests/minute</li>
                    <li>• Trading endpoints: 30 requests/minute</li>
                    <li>• WebSocket connections: 10 per IP</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'sdks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Official SDKs</h2>
                <p className="text-gray-600">
                  Use our official SDKs to integrate LedgerSwap API into your applications
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {sdks.map((sdk, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{sdk.icon}</span>
                        <h3 className="font-semibold text-gray-900">{sdk.name}</h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        sdk.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {sdk.status}
                      </span>
                    </div>
                    {sdk.status === 'Available' && (
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Download
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Code Examples</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JavaScript/Node.js</h4>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        <div>const LedgerSwap = require('ledgerswap-api');</div>
                        <div>const client = new LedgerSwap('YOUR_API_KEY');</div>
                        <div>const markets = await client.getMarkets();</div>
                      </code>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Python</h4>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-green-400 text-sm">
                        <div>import ledgerswap</div>
                        <div>client = ledgerswap.Client('YOUR_API_KEY')</div>
                        <div>markets = client.get_markets()</div>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'pricing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">API Pricing</h2>
                <p className="text-gray-600">
                  Choose the plan that fits your trading volume and requirements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Tier</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$0</div>
                  <p className="text-gray-600 mb-6">Perfect for testing and small projects</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 1,000 API calls/month</li>
                    <li>• Market data access</li>
                    <li>• Basic support</li>
                    <li>• Sandbox environment</li>
                  </ul>
                  <button className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    Get Started
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-600">
                  <div className="text-center mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$99</div>
                  <p className="text-gray-600 mb-6">For professional traders and apps</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• 100,000 API calls/month</li>
                    <li>• Full trading access</li>
                    <li>• Priority support</li>
                    <li>• WebSocket feeds</li>
                    <li>• Advanced analytics</li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Choose Pro
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                  <p className="text-gray-600 mb-6">For high-volume institutional use</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Unlimited API calls</li>
                    <li>• Dedicated infrastructure</li>
                    <li>• 24/7 dedicated support</li>
                    <li>• Custom integrations</li>
                    <li>• SLA guarantees</li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DeveloperApiPage;
