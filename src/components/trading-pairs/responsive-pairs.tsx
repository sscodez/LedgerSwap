// 'use client'
// import React from 'react';
// import Image from 'next/image';

// const cryptoPairs = [
//   {
//     id: 1,
//     fromCoin: { symbol: 'ETH', name: 'Ethereum', badge: 'ETH' },
//     toCoin: { symbol: 'SOL', name: 'Solana', badge: 'SOL' }
//   },
//   {
//     id: 2,
//     fromCoin: { symbol: 'USDC', name: 'USD Coin', badge: 'USDC' },
//     toCoin: { symbol: 'ETH', name: 'Ethereum', badge: 'ETH' }
//   },
//   {
//     id: 3,
//     fromCoin: { symbol: 'BTC', name: 'Bitcoin', badge: 'BTC' },
//     toCoin: { symbol: 'SOL', name: 'Solana', badge: 'SOL' }
//   },
//   {
//     id: 4,
//     fromCoin: { symbol: 'LTC', name: 'Litecoin', badge: 'LTC' },
//     toCoin: { symbol: 'BTC', name: 'Bitcoin', badge: 'BTC' }
//   },
//   {
//     id: 5,
//     fromCoin: { symbol: 'XMR', name: 'Monero', badge: 'XMR' },
//     toCoin: { symbol: 'USDT', name: 'Tether', badge: 'TRX' }
//   }
// ];

// const fiatPairs = [
//   {
//     id: 1,
//     fromCoin: { symbol: 'ETH', name: 'Ethereum', badge: 'ETH' },
//     toCoin: { symbol: 'USD', name: 'US Dollar', badge: 'USD' }
//   },
//   {
//     id: 2,
//     fromCoin: { symbol: 'SOL', name: 'Solana', badge: 'SOL' },
//     toCoin: { symbol: 'EUR', name: 'Euro', badge: 'EUR' }
//   },
//   {
//     id: 3,
//     fromCoin: { symbol: 'ETH', name: 'Ethereum', badge: 'ETH' },
//     toCoin: { symbol: 'USD', name: 'US Dollar', badge: 'USD' }
//   },
//   {
//     id: 4,
//     fromCoin: { symbol: 'USDT', name: 'Tether', badge: 'TRX' },
//     toCoin: { symbol: 'EUR', name: 'Euro', badge: 'EUR' }
//   },
//   {
//     id: 5,
//     fromCoin: { symbol: 'USDT', name: 'Tether', badge: 'ETH' },
//     toCoin: { symbol: 'EUR', name: 'Euro', badge: 'EUR' }
//   }
// ];

// const CoinBadge = ({ symbol, badge }: { symbol: string; badge: string }) => {
//   const renderCoinIcon = (symbol: string) => {
//     const supportedTokens = ['BTC', 'ETH', 'SOL', 'USDT', 'USDC', 'LTC', 'XMR', 'USD', 'EUR'];
//     const lowerSymbol = symbol.toLowerCase();
    
//     if (supportedTokens.includes(symbol)) {
//       return (
//         <Image 
//           src={`/assests/cryptocurrency/${lowerSymbol}.png`}
//           alt={symbol}
//           width={28}
//           height={28}
//           className="rounded-full"
//         />
//       );
//     }
//     return null;
//   };

//   const getFallbackColor = (symbol: string) => {
//     switch (symbol) {
//       case 'BTC': return 'bg-orange-500 text-white';
//       case 'ETH': return 'bg-blue-500 text-white';
//       case 'SOL': return 'bg-purple-500 text-white';
//       case 'USDC': return 'bg-teal-500 text-white';
//       case 'USDT': return 'bg-green-500 text-white';
//       case 'LTC': return 'bg-gray-500 text-white';
//       case 'XMR': return 'bg-orange-700 text-white';
//       case 'USD': return 'bg-blue-200 text-blue-800';
//       case 'EUR': return 'bg-blue-200 text-blue-800';
//       default: return 'bg-gray-200 text-gray-800';
//     }
//   };

//   const iconComponent = renderCoinIcon(symbol);

//   const getBadgeColor = (symbol: string) => {
//     switch (symbol) {
//       case 'BTC': return 'bg-orange-500';
//       case 'ETH': return 'bg-blue-500';
//       case 'SOL': return 'bg-purple-500';
//       case 'USDC': return 'bg-teal-500';
//       case 'USDT': return 'bg-green-500';
//       case 'LTC': return 'bg-gray-500';
//       case 'XMR': return 'bg-orange-700';
//       case 'USD': return 'bg-blue-200';
//       case 'EUR': return 'bg-blue-200';
//       default: return 'bg-gray-200';
//     }
//   };

//   return (
//     <div className="flex items-center group cursor-pointer">
//       <div className="relative h-6 w-6 sm:h-8 sm:w-8">
//         {iconComponent ? (
//           <div className="h-6 w-6 sm:h-8 sm:w-8">
//             {iconComponent}
//           </div>
//         ) : (
//           <div className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center text-xs font-bold ${getFallbackColor(symbol)}`}>
//             {symbol === 'USD' ? '$' : 
//              symbol === 'EUR' ? '€' : 
//              symbol.charAt(0)}
//           </div>
//         )}
//       </div>
//       <span className="ml-1 sm:ml-2 text-sm sm:text-base font-medium text-white hover:text-black group-hover:text-black transition-colors">{symbol}</span>
//       <span className={`ml-1 sm:ml-2 text-xs px-1 sm:px-2 py-0.5 rounded-full bg-opacity-20 bg-gray-500 text-white hover:bg-opacity-100 group-hover:bg-opacity-100 ${getBadgeColor(badge)} transition-colors`}>
//         {badge}
//       </span>
//     </div>
//   );
// };

// interface Coin {
//   symbol: string;
//   name: string;
//   badge: string;
// }

// interface PairRowProps {
//   id: number;
//   fromCoin: Coin;
//   toCoin: Coin;
//   price?: string;
// }

// const PairRow = ({ id, fromCoin, toCoin, price }: PairRowProps) => (
//   <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 bg-[#0A1E56] hover:bg-[#ffffff] hover:text-black text-white transition-colors rounded-xl mb-2 sm:mb-3 group">
//     <div className="flex items-center">
//       <span className="text-gray-400 group-hover:text-black mr-1 sm:mr-3 text-sm sm:text-base">{id}</span>
//       <CoinBadge symbol={fromCoin.symbol} badge={fromCoin.badge} />
//     </div>
    
//     <div className="flex hover:text-white items-center mx-1 sm:mx-2">
//       <div className="w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center rounded-full">
//         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="sm:w-4 sm:h-4">
//           <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       </div>
//     </div>
    
//     <div className="flex items-center flex-grow">
//       <CoinBadge symbol={toCoin.symbol} badge={toCoin.badge} />
//     </div>
    
//     {price && (
//       <div className="mr-2 sm:mr-4 text-xs sm:text-sm text-gray-300 group-hover:text-black transition-colors hidden sm:block">
//         {/* {price} */}
//       </div>
//     )}
    
//     <svg
//       className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-black transition-colors"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 6l6 6-6 6" />
//     </svg>
//   </div>
// );

// interface PriceData {
//   symbol: string;
//   usdPrice?: string;
//   eurPrice?: string;
//   cryptoRatio?: { symbol: string; ratio: number };
// }

// const TradingPairs = () => {
//   // Static price data - this would be fetched from an API in a real implementation

//   // Mock data for prices
//   const staticPriceData: { [key: string]: PriceData } = {
//     'BTC': {
//       symbol: 'BTC',
//       usdPrice: '$42,680.50',
//       eurPrice: '€39,215.30',
//       cryptoRatio: { symbol: 'ETH', ratio: 15.3 }
//     },
//     'ETH': {
//       symbol: 'ETH',
//       usdPrice: '$2,784.25',
//       eurPrice: '€2,550.10',
//       cryptoRatio: { symbol: 'SOL', ratio: 12.7 }
//     },
//     'SOL': {
//       symbol: 'SOL',
//       usdPrice: '$219.75',
//       eurPrice: '€201.85'
//     },
//     'USDC': {
//       symbol: 'USDC',
//       usdPrice: '$1.00',
//       eurPrice: '€0.92'
//     },
//     'USDT': {
//       symbol: 'USDT',
//       usdPrice: '$1.00',
//       eurPrice: '€0.92'
//     },
//     'LTC': {
//       symbol: 'LTC',
//       usdPrice: '$87.30',
//       eurPrice: '€80.15'
//     },
//     'XMR': {
//       symbol: 'XMR',
//       usdPrice: '$175.90',
//       eurPrice: '€161.65'
//     }
//   };

//   // Function to get the price for a pair
//   const getPairPrice = (fromSymbol: string, toSymbol: string): string | undefined => {
//     // Get price data for the from currency
//     const fromData = staticPriceData[fromSymbol];
    
//     if (!fromData) return undefined;
    
//     if (toSymbol === 'USD' && fromData.usdPrice) {
//       return fromData.usdPrice;
//     } else if (toSymbol === 'EUR' && fromData.eurPrice) {
//       return fromData.eurPrice;
//     } else if (staticPriceData[toSymbol] && fromData.cryptoRatio?.symbol === toSymbol) {
//       return `1 ${fromSymbol} ≈ ${fromData.cryptoRatio.ratio.toFixed(4)} ${toSymbol}`;
//     } else if (fromSymbol === 'ETH' && toSymbol === 'SOL') {
//       return `1 ETH ≈ 12.7 SOL`; 
//     } else if (fromSymbol === 'BTC' && toSymbol === 'SOL') {
//       return `1 BTC ≈ 194.2 SOL`;
//     } else if (fromSymbol === 'LTC' && toSymbol === 'BTC') {
//       return `1 LTC ≈ 0.0022 BTC`;
//     } else if (fromSymbol === 'XMR' && toSymbol === 'USDT') {
//       return `1 XMR ≈ 175.9 USDT`;
//     }
    
//     return undefined;
//   };

//   return (
//     <section className="bg-[#001233] py-8 sm:py-12 md:py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
//           <span className="text-white">Top pairs on </span>
//           <span className="text-blue-500">InterledgerSwap</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//           <div>
//             <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Crypto-to-crypto</h3>
//             <div>
//               {cryptoPairs.map(pair => (
//                 <PairRow 
//                   key={pair.id}
//                   id={pair.id}
//                   fromCoin={pair.fromCoin}
//                   toCoin={pair.toCoin}
//                   price={getPairPrice(pair.fromCoin.symbol, pair.toCoin.symbol)}
//                 />
//               ))}
//             </div>
//           </div>
          
//           <div className="mt-6 md:mt-0">
//             <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Fiat-to-crypto</h3>
//             <div>
//               {fiatPairs.map(pair => (
//                 <PairRow 
//                   key={pair.id}
//                   id={pair.id}
//                   fromCoin={pair.fromCoin}
//                   toCoin={pair.toCoin}
//                   price={getPairPrice(pair.fromCoin.symbol, pair.toCoin.symbol)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TradingPairs;
