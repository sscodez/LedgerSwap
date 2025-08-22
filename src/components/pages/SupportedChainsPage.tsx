'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SupportedChainsPage = () => {
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  const supportedChains = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: '/assests/cryptocurrency/btc.png',
      color: 'from-orange-400 to-orange-600',
      description: 'The original cryptocurrency and digital gold standard',
      features: ['Proof of Work', 'Store of Value', 'Peer-to-Peer', 'Decentralized'],
      blockTime: '10 minutes',
      consensus: 'Proof of Work',
      totalSupply: '21 Million BTC',
      website: 'bitcoin.org'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      icon: '/assests/cryptocurrency/eth.png',
      color: 'from-blue-400 to-blue-600',
      description: 'Smart contract platform enabling decentralized applications',
      features: ['Smart Contracts', 'DApps', 'DeFi', 'NFTs'],
      blockTime: '12 seconds',
      consensus: 'Proof of Stake',
      totalSupply: 'No Fixed Cap',
      website: 'ethereum.org'
    },
    {
      id: 'tezos',
      name: 'Tezos',
      symbol: 'XTZ',
      icon: '/assests/cryptocurrency/tezos.png',
      color: 'from-blue-500 to-indigo-600',
      description: 'Self-amending blockchain with formal verification',
      features: ['Self-Governance', 'Formal Verification', 'Smart Contracts', 'Energy Efficient'],
      blockTime: '1 minute',
      consensus: 'Liquid Proof of Stake',
      totalSupply: 'Inflationary',
      website: 'tezos.com'
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      icon: '/assests/cryptocurrency/sol.png',
      color: 'from-purple-400 to-purple-600',
      description: 'High-performance blockchain for decentralized apps and crypto',
      features: ['High Throughput', 'Low Fees', 'Fast Transactions', 'Web3 Ready'],
      blockTime: '400ms',
      consensus: 'Proof of History + Proof of Stake',
      totalSupply: '508 Million SOL',
      website: 'solana.com'
    },
    {
      id: 'tron',
      name: 'TRON',
      symbol: 'TRX',
      icon: '/assests/cryptocurrency/tron.png',
      color: 'from-red-400 to-red-600',
      description: 'Decentralized platform for content sharing and entertainment',
      features: ['High TPS', 'DApps', 'Content Sharing', 'Low Cost'],
      blockTime: '3 seconds',
      consensus: 'Delegated Proof of Stake',
      totalSupply: '100 Billion TRX',
      website: 'tron.network'
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      icon: '/assests/cryptocurrency/usdt.png',
      color: 'from-green-400 to-green-600',
      description: 'Leading stablecoin pegged to the US Dollar',
      features: ['Stablecoin', 'USD Pegged', 'Multi-Chain', 'High Liquidity'],
      blockTime: 'Varies by Chain',
      consensus: 'Multi-Chain Support',
      totalSupply: '83+ Billion USDT',
      website: 'tether.to'
    },
    {
      id: 'binance',
      name: 'Binance Coin',
      symbol: 'BNB',
      icon: '/assests/cryptocurrency/binance.png',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Native token of Binance ecosystem and BSC blockchain',
      features: ['Exchange Token', 'BSC Network', 'DeFi', 'Trading Fees'],
      blockTime: '3 seconds',
      consensus: 'Proof of Staked Authority',
      totalSupply: '200 Million BNB',
      website: 'binance.org'
    }
,
    {
      id: 'arbitrum',
      name: 'Arbitrum',
      symbol: 'ARB',
      icon: '/assests/cryptocurrency/arbiturm.png',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Native token of Binance ecosystem and BSC blockchain',
      features: ['Exchange Token', 'BSC Network', 'DeFi', 'Trading Fees'],
      blockTime: '3 seconds',
      consensus: 'Proof of Staked Authority',
      totalSupply: '200 Million BNB',
      website: 'binance.org'
    }
  ];

  const stats = [
    { number: '7+', label: 'Supported Chains' },
    { number: '50+', label: 'Trading Pairs' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#001233] py-16 md:py-24 overflow-hidden">
        <motion.div
          className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] opacity-40 hidden sm:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2 }}
          whileHover={{ rotate: 10, scale: 1.05 }}
        >
          <Image
            src="/assests/landing-page/5.png"
            alt="Holographic element"
            width={300}
            height={300}
            priority
          />
        </motion.div>

        <motion.div
          className="absolute top-[10%] right-[5%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] opacity-40 hidden sm:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ rotate: -10, scale: 1.05 }}
        >
          <Image
            src="/assests/landing-page/3.png"
            alt="Holographic cube"
            width={180}
            height={180}
            priority
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Supported
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Blockchains
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">

              Experience the future of multi-chain DeFi trading.
            </p>
          </motion.div>
        </div>
      </div>


      {/* Supported Chains Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multi-Chain Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access the most popular blockchain networks all in one place.
              Each chain offers unique features and opportunities for your trading strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {supportedChains.map((chain, index) => (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl  border border-gray-100 hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={chain.icon}
                      alt={chain.name}
                      className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">{chain.name}</h3>
                  {/* <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${chain.color}`}>
                    {chain.symbol}
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Chain Features */}



    </div>
  );
};

export default SupportedChainsPage;
