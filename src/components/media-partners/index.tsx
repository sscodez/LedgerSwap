'use client'
import React from 'react';

const MediaPartners = () => {
  return (
    <section className="py-12 md:py-16 bg-white md:mb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl text-black font-semibold">
            Why Choose <span className="text-blue-600">LedgerSwap</span>
          </h2>
          <p className="text-[#B0B0B0] mt-2 max-w-2xl">Decentralized by design. Built for privacy, security, and transparency.</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 – Non-Custodial */}
          <div className="bg-[#001233] shadow-2xl rounded-2xl p-6 border border-transparent hover:scale-[1.01] transition-transform">
            <h3 className="text-white text-xl font-semibold mb-2">Non-Custodial</h3>
            <p className="text-[#B0B0B0] text-sm">Crypto is always sent directly to your wallet. We never store funds on our service.</p>
          </div>

          {/* Card 2 – Privacy First */}
          <div className="bg-[#001233] shadow-2xl rounded-2xl p-6 border border-transparent hover:scale-[1.01] transition-transform">
            <h3 className="text-white text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-[#B0B0B0] text-sm">No KYC required. Your identity stays private while you trade freely.</p>
          </div>

          {/* Card 3 – Security Built-In */}
          <div className="bg-[#001233] shadow-2xl rounded-2xl p-6 border border-transparent hover:scale-[1.01] transition-transform">
            <h3 className="text-white text-xl font-semibold mb-2">Security Built-In</h3>
            <p className="text-[#B0B0B0] text-sm">Multi-chain security standards with transparency features to protect your swaps.</p>
          </div>

          {/* Card 4 – Transparency */}
          <div className="bg-[#001233] shadow-2xl rounded-2xl p-6 border border-transparent hover:scale-[1.01] transition-transform">
            <h3 className="text-white text-xl font-semibold mb-2">Transparency</h3>
            <p className="text-[#B0B0B0] text-sm">Every transaction is verifiable on-chain. Proof of volume and liquidity at your fingertips.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
