'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'trading', label: 'Trading' },
    { id: 'security', label: 'Security' },
    { id: 'market', label: 'Market Analysis' },
    { id: 'education', label: 'Education' },
    { id: 'news', label: 'News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Market Volatility",
      excerpt: "Learn how to navigate the ups and downs of crypto markets and make informed trading decisions.",
      category: "education",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
      image: "/assests/blog/crypto-volatility.jpg"
    },
    {
      id: 2,
      title: "Top 5 Security Tips for Crypto Traders",
      excerpt: "Essential security practices every cryptocurrency trader should follow to protect their assets.",
      category: "security",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "7 min read",
      featured: true,
      image: "/assests/blog/security-tips.jpg"
    },
    {
      id: 3,
      title: "Bitcoin vs Ethereum: A Comprehensive Comparison",
      excerpt: "Explore the key differences between the two largest cryptocurrencies and their use cases.",
      category: "education",
      author: "Alex Johnson",
      date: "2024-01-10",
      readTime: "8 min read",
      featured: false,
      image: "/assests/blog/btc-vs-eth.jpg"
    },
    {
      id: 4,
      title: "Market Analysis: Q1 2024 Crypto Trends",
      excerpt: "Our analysts break down the major trends shaping the cryptocurrency market this quarter.",
      category: "market",
      author: "Emily Watson",
      date: "2024-01-08",
      readTime: "6 min read",
      featured: false,
      image: "/assests/blog/market-trends.jpg"
    },
    {
      id: 5,
      title: "How to Use Dollar-Cost Averaging in Crypto",
      excerpt: "A beginner's guide to implementing DCA strategy for long-term cryptocurrency investing.",
      category: "trading",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "4 min read",
      featured: false,
      image: "/assests/blog/dca-strategy.jpg"
    },
    {
      id: 6,
      title: "LedgerSwap Announces New Trading Pairs",
      excerpt: "We're excited to announce support for 10 new cryptocurrency trading pairs on our platform.",
      category: "news",
      author: "LedgerSwap Team",
      date: "2024-01-03",
      readTime: "3 min read",
      featured: false,
      image: "/assests/blog/new-pairs.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              LedgerSwap Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest cryptocurrency news, trading tips, and market insights
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Featured Article</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(cat => cat.id === selectedCategory)?.label} Articles`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <span className="text-white text-sm">Article Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {categories.find(cat => cat.id === post.category)?.label}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                        <div>
                          <p className="text-xs font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and never miss important crypto news and trading insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-none outline-none"
              />
              <motion.button
                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
