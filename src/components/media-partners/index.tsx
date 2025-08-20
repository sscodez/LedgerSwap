'use client'
import React, { useState } from 'react';
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
      logo:  '/assests/landing-page/media-partners/bitfinex.png',
      description: 'Crypto is sent directly to your wallet, we don\'t store it on our service.'
    }
  ];

  // All partners that appear in the logo row
  const allPartners = [
    { id: 1, name: 'Binance', logo: '/assests/landing-page/media-partners/binance.png' },
    { id: 2, name: 'Conflux', logo: '/assests/landing-page/media-partners/conflux.png' },
    { id: 3, name: '1inch', logo: '/assests/landing-page/media-partners/1inch.png' },
    { id: 4, name: 'OKX', logo: '/assests/landing-page/media-partners/okx.png' },
    { id: 5, name: 'HTX', logo: '/assests/landing-page/media-partners/huobi.png' },
    { id: 6, name: 'Bitfinex', logo: '/assests/landing-page/media-partners/bitfinex.png' },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? featuredPartners.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === featuredPartners.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <p className="text-gray-300 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Publications</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins text-black font-semibold mb-4 sm:mb-6 md:mb-8">
            Our Media <span className="text-blue-600">Partners</span>
          </h2>
        </div>

        {/* Featured Partners Slider */}
        <div className="mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto w-full sm:w-[90%]">
          <div className="overflow-x-auto pb-4 sm:pb-0 hide-scrollbar">
            <div 
              className="flex flex-nowrap gap-4 sm:gap-5"
            >
              {featuredPartners.map((partner) => (
                <div key={partner.id} className="w-[280px] sm:w-[320px] md:w-[350px] border mx-2 sm:mx-3 md:mx-5 rounded-xl sm:rounded-2xl h-auto sm:h-60 border-gray-200 flex-shrink-0">
                  <div className="flex flex-col items-start p-4 sm:p-6 md:p-8">
                    <div className="w-full flex justify-center mb-4 sm:mb-6">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150}
                        height={28}
                        className="max-w-[120px] sm:max-w-[150px] md:max-w-[171px]"
                      />
                    </div>
                    <div className="w-full mt-2 sm:mt-4 text-center">
                      <p className="text-gray-700 text-sm sm:text-base">{partner.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Logo Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {allPartners.map((partner) => (
            <div key={partner.id} className="w-[140px] sm:w-[180px] md:w-[200px] border rounded-lg border-gray-300 h-[80px] sm:h-[100px] md:h-[120px] flex items-center justify-center p-2 sm:p-3 md:p-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={20}
                className="max-w-full max-h-[40px] sm:max-h-[50px] md:max-h-[60px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MediaPartners;
