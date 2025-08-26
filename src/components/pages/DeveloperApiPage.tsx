'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '../banner';

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
     

      <Banner title="Developer API" description="Build powerful trading applications with our comprehensive REST API" />


      {/* Navigation Tabs */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['overview', 'documentation',].map((tab) => (
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

          
      

              <div className="bg-white rounded-lg  p-8">
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

              <div className="bg-white rounded-lg  overflow-hidden mb-8">
                <div className="px-6 py-4  border-b">
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

     
      </div>
    </div>
  );
};

export default DeveloperApiPage;
