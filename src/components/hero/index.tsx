// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';

// const Hero = () => {
//   const [activeTab, setActiveTab] = useState('exchange');

//   return (
//     <section className="relative bg-[#001233] py-10 md:py-16 lg:py-20 overflow-hidden">
//       {/* Holographic Elements - Hidden on mobile, visible on tablets and up */}
//       <div className="absolute top-[10%] left-[5%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] opacity-80 hidden sm:block">
//         <Image
//           src="/assests/landing-page/5.png"
//           alt="Holographic element"
//           width={300}
//           height={300}
//           priority
//         />
//       </div>

//       <div className="absolute top-[10%] right-[5%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] hidden sm:block">
//         <Image
//           src="/assests/landing-page/3.png"
//           alt="Holographic cube"
//           width={180}
//           height={180}
//           priority
//         />
//       </div>

//       <div className="absolute bottom-[15%] right-[15%] w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] hidden sm:block">
//         <Image
//           src="/assests/landing-page/1.png"
//           alt="Holographic diamond"
//           width={150}
//           height={150}
//           priority
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[400] text-white mb-4">
//             Cryptocurrency Marketplace
//           </h1>
//           <p className="text-[14px] font-[700] text-gray-300">
//             Sign-up free. Limit free. Stress free.
//           </p>
//         </div>

//         <div className="max-w-xl mx-auto bg-white py-2 px-2 sm:px-4 text-[13px] rounded-2xl shadow-xl overflow-hidden">
//           {/* Tabs */}
//           <div className="flex border-b text-[16px] font-[500] border-gray-200">
//             <button
//               className={`flex-1 py-3 md:py-4 text-center font-medium text-sm transition-colors ${
//                 activeTab === 'exchange'
//                   ? 'text-blue-600 border-b-2 border-blue-600'
//                   : 'text-gray-400 hover:text-gray-600'
//               }`}
//               onClick={() => setActiveTab('exchange')}
//             >
//               Crypto Exchange
//             </button>
//             <button
//               className={`flex-1 py-3 md:py-4 text-center font-medium text-sm transition-colors ${
//                 activeTab === 'buysell'
//                   ? 'text-blue-600 border-b-2 border-blue-600'
//                   : 'text-gray-400 hover:text-gray-600'
//               }`}
//               onClick={() => setActiveTab('buysell')}
//             >
//               Buy/Sell Crypto
//             </button>
//           </div>

//           {/* Exchange Widget */}
//           <div className="p-3 sm:p-4 md:p-6">
//             {/* You Send */}
//             <div className="mb-6">
//               <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F9FAFB] w-full rounded-lg">
//                 <div className='flex flex-col sm:flex-row items-center w-full sm:w-[98%] border border-gray-100 rounded-lg justify-between'>
//                   <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
//                     <div className="text-[11px] font-[600] text-gray-500 mb-1">You send</div>
//                     <div className="flex items-center">
//                       <input 
//                         type="text" 
//                         defaultValue="≈ $12,954.89" 
//                         className="text-black font-semibold bg-transparent outline-none w-full text-right" 
//                       />
//                     </div>
//                   </div>
//                   <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-2 sm:p-3 items-center mt-2 sm:mt-0">
//                     <button className="flex items-center w-full justify-between">
//                       <div className="flex items-center">
//                         <Image src="/assests/cryptocurrency/eth.png" alt="Ethereum" width={24} height={24} className="mr-2" />
//                         <span className="font-medium mr-2">ETH</span>
//                         <span className="bg-[#74D4FF] text-white text-[11px] px-2 py-1 rounded-full">ETH</span>
//                       </div>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Swap Button */}
//             <div className="flex justify-center relative z-10" style={{ marginTop: '-20px', marginBottom: '-10px' }}>
//               <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-lg">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
//                 </svg>
//               </button>
//             </div>

//             {/* You Receive */}
//             <div className="mb-6">
//               <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#F9FAFB] w-full rounded-lg">
//                 <div className='flex flex-col sm:flex-row items-center w-full sm:w-[98%] border border-gray-100 rounded-lg justify-between'>
//                   <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
//                     <div className="text-[11px] font-[600] text-gray-500 mb-1">You receive</div>
//                     <div className="flex items-center">
//                       <input 
//                         type="text" 
//                         defaultValue="≈ $12,954.89" 
//                         className="text-black font-semibold bg-transparent outline-none w-full text-right" 
//                       />
//                     </div>
//                   </div>
//                   <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-2 sm:p-3 items-center mt-2 sm:mt-0">
//                     <button className="flex items-center w-full justify-between">
//                       <div className="flex items-center">
//                         <Image src="/assests/cryptocurrency/btc.png" alt="Bitcoin" width={24} height={24} className="mr-2" />
//                         <span className="font-medium mr-2">BTC</span>
//                         <span className="bg-[#FF8904] text-white text-[11px] px-2 py-1 rounded-full">BTC</span>
//                       </div>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sign-up Callout */}
//             <div className="mb-6 text-left">
//               <p className="text-[13px] font-[600] text-black">
//                 <span className="cursor-pointer text-blue-800">Sign up</span> to get cashback up to 10.05 USDT
//               </p>
//             </div>

//             {/* Exchange Button */}
//             <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-lg font-medium transition-colors">
//               Exchange
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
