'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ReviewsPage = () => {
  const [selectedRating, setSelectedRating] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Alex Thompson",
      rating: 5,
      date: "2024-01-15",
      title: "Excellent platform for beginners",
      content: "LedgerSwap made my first crypto trading experience incredibly smooth. The interface is intuitive and the customer support is top-notch. I've been using it for 6 months now and couldn't be happier.",
      verified: true,
      location: "United States"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      rating: 5,
      date: "2024-01-12",
      title: "Fast and secure transactions",
      content: "I've tried several crypto exchanges, but LedgerSwap stands out for its speed and security. Transactions are processed almost instantly, and I feel confident about the safety of my funds.",
      verified: true,
      location: "Spain"
    },
    {
      id: 3,
      name: "David Chen",
      rating: 4,
      date: "2024-01-10",
      title: "Great features, competitive fees",
      content: "The trading fees are very competitive compared to other platforms. Love the variety of cryptocurrencies available. The only minor issue is that the mobile experience could be slightly better.",
      verified: true,
      location: "Singapore"
    },
    {
      id: 4,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-08",
      title: "Outstanding customer service",
      content: "Had an issue with a transaction and the support team resolved it within 30 minutes. Their 24/7 support really works! The platform is reliable and user-friendly.",
      verified: true,
      location: "Canada"
    },
    {
      id: 5,
      name: "Michael Brown",
      rating: 4,
      date: "2024-01-05",
      title: "Solid platform with room for improvement",
      content: "Overall a good experience. The security features give me peace of mind, and the trading interface is clean. Would love to see more advanced charting tools in future updates.",
      verified: true,
      location: "United Kingdom"
    },
    {
      id: 6,
      name: "Lisa Wang",
      rating: 5,
      date: "2024-01-03",
      title: "Perfect for crypto newcomers",
      content: "As someone new to cryptocurrency, LedgerSwap's educational resources and simple interface made learning easy. The step-by-step guides are incredibly helpful.",
      verified: true,
      location: "Australia"
    },
    {
      id: 7,
      name: "James Wilson",
      rating: 5,
      date: "2024-01-01",
      title: "Reliable and trustworthy",
      content: "Been using LedgerSwap for over a year now. Never had any security issues or downtime problems. The platform just works, which is exactly what you want from a crypto exchange.",
      verified: true,
      location: "Germany"
    },
    {
      id: 8,
      name: "Emma Davis",
      rating: 4,
      date: "2023-12-28",
      title: "Good variety of cryptocurrencies",
      content: "Impressed by the wide selection of cryptocurrencies available. The exchange rates are fair and the process is straightforward. Customer support could respond a bit faster though.",
      verified: true,
      location: "Netherlands"
    }
  ];

  const stats = [
    { label: "Total Reviews", value: "12,847" },
    { label: "Average Rating", value: "4.8/5" },
    { label: "5-Star Reviews", value: "89%" },
    { label: "Verified Users", value: "100%" }
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 89, count: 11434 },
    { stars: 4, percentage: 8, count: 1028 },
    { stars: 3, percentage: 2, count: 257 },
    { stars: 2, percentage: 1, count: 128 },
    { stars: 1, percentage: 0, count: 0 }
  ];

  const filteredReviews = selectedRating === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(selectedRating));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

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
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See what our users are saying about their LedgerSwap experience
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
     

      {/* Filter Buttons */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {['all', '5', '4', '3', '2', '1'].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedRating === rating
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {rating === 'all' ? 'All Reviews' : `${rating} Stars`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {filteredReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {review.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {review.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No reviews found for the selected rating.</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewsPage;
