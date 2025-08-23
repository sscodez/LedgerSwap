'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MediaPartners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Featured partners that appear in the main slider
  const featuredPartners = [
    {
      id: 1,
      name: 'Gate.io',
      logo: '/assests/landing-page/media-partners/gateio.png',
      description: 'Crypto is sent directly to your wallet, we don\'t store it on our service.'

    },
    {
      id: 2,
      name: 'Conflux',
      logo: '/assests/landing-page/media-partners/conflux.png',
      description: 'Crypto is sent directly to your wallet, we don\'t store it on our service.'
    },
    {
      id: 3,
      name: 'Bitfinex',
      logo: '/assests/landing-page/media-partners/bitfinex.png',
      description: 'Crypto is sent directly to your wallet, we don\'t store it on our service.'
    }
  ];

  // All partners that appear in the logo row
  const allPartners = [
    {
      id: 1, name: 'Binance', logo: '/assests/landing-page/media-partners/binance.png', icon_width: 150,
      icon_height: 40,
    },
    {
      id: 2, name: 'Conflux', logo: '/assests/landing-page/media-partners/conflux.png', icon_width: 130,
    },
    {
      id: 3, name: '1inch', logo: '/assests/landing-page/media-partners/1inch.png', icon_width: 120,
      icon_height: 40,
    },
    {
      id: 4, name: 'OKX', logo: '/assests/landing-page/media-partners/okx.png', icon_width: 90,
      icon_height: 40,
    },
    {
      id: 5, name: 'HTX', logo: '/assests/landing-page/media-partners/huobi.png', icon_width: 90,
      icon_height: 40,
    },
    {
      id: 6, name: 'Bitfinex', logo: '/assests/landing-page/media-partners/bitfinex.png', icon_width: 120,
      icon_height: 40,
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === featuredPartners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-12 md:py-16 bg-white mb-0 md:mb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-left">
          <p className="text-gray-400 text-center md:text-left font-medium mb-1 text-sm">Publications</p>
          <h2 className="text-3xl text-center md:text-left md:text-4xl text-black font-semibold">
            Our Media <span className="text-blue-600">Partners</span>
          </h2>
        </div>
        <br />

        {/* Featured Partners Slider */}
        <div className="mb-12 md:mb-16 relative my-8 max-w-8xl mx-auto">
          <div className="overflow-hidden mb-8">
            <div className="flex">
              {featuredPartners.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`w-full transition-opacity duration-500 ${index === activeSlide ? 'block' : 'hidden'}`}
                >
                  <div className="grid grid-cols-1  md:grid-cols-3 gap-10">
                    {featuredPartners.map((p, i) => {
                      // Calculate relative index for carousel effect
                      const relativeIndex = (i - activeSlide + featuredPartners.length) % featuredPartners.length;
                      return (
                        <div
                          key={p.id}
                          className="bg-white rounded-2xl border     border-gray-200 px-4 pt-6 pb-20 "
                        >
                          <div className="flex justify-start mb-4">
                            <Image
                              src={p.logo}
                              alt={p.name}
                              width={120}
                              height={40}
                              className="h-8 object-contain"
                            />
                          </div>
                          <p className="text-gray-700 text-left text-[13px]">{p.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredPartners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full ${index === activeSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <br /><br />

        {/* Partners Logo Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3  my-5 md:grid-cols-6 gap-6">
          {allPartners.map((partner) => (
            <div
              key={partner.id}
              className="flex border border-gray-200 p-4 rounded-lg items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner?.icon_width ?? 120}
                height={partner?.icon_height ?? 40}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default MediaPartners;
