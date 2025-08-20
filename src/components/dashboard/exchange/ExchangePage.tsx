
'use client'
import React, { useState } from 'react';
import SwapSteps from './SwapSteps';
import SecurityCheck from './SecurityCheck';
import CurrencyInput from './CurrencyInput';
import SwapControls from './SwapControls';
import WalletAddressInput from './WalletAddressInput';
import Image from 'next/image';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Animation for dropdown menu
const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for dropdown content
const StyledContent = styled(DropdownMenu.Content)`
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;
  animation-name: ${slideDownAndFade};
  will-change: transform, opacity;
`;

// Mock data
const currencies = {
  eth: {
    symbol: 'ETH',
    name: 'Ethereum',
    tag: 'ETH',
    iconUrl: '/assests/cryptocurrency/eth.png'
  },
  btc: {
    symbol: 'BTC',
    name: 'Bitcoin',
    tag: 'BTC',
    iconUrl: '/assests/cryptocurrency/btc.png'
  },
  usdt: {
    symbol: 'USDT',
    name: 'Tether',
    tag: 'USDT',
    iconUrl: '/assests/cryptocurrency/usdt.png'
  },
  usdc: {
    symbol: 'USDC',
    name: 'USD Coin',
    tag: 'USDC',
    iconUrl: '/assests/cryptocurrency/usdc.png'
  }
};

const ExchangePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [fromCurrency, setFromCurrency] = useState(currencies.eth);
  const [toCurrency, setToCurrency] = useState(currencies.btc);
  const [fromAmount, setFromAmount] = useState('0.1');
  const [toAmount, setToAmount] = useState('≈ $12,954.89');
  const [walletAddress, setWalletAddress] = useState('');
  const [cashback, setCashback] = useState('4.78 USDT');

  const handleCreateExchange = () => {
    // Logic to create exchange would go here
    setCurrentStep(3);
  };

  return (
    <div className="px-3 sm:px-0">
      <div className="max-w-[95%] sm:max-w-[90%] mx-auto">
        {/* Steps indicator */}
        <div className='bg-white  p-5 rounded-lg my-3 sm:my-5'>
          <SwapSteps currentStep={currentStep} />
          
          {/* Security check */}
          <SecurityCheck />

        </div>
        
        {/* Exchange details section */}
        <div className="bg-white rounded-lg p-3 sm:p-6   mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl text-center text-black my-4 sm:my-8 font-medium">Add exchange details</h2>
          <div className='border-b border-gray-200 w-full my-3 sm:my-5'></div>
          
          {/* Exchange Widget */}
          <div className="p-0 sm:p-3 md:p-4">
            {/* You Send */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#F9FAFB] w-full rounded-lg">
                <div className='flex flex-col sm:flex-row items-center w-full border border-gray-100 rounded-lg justify-between'>
                  <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
                    <div className="text-[10px] sm:text-[11px] font-[600] text-gray-500 mb-0 sm:mb-1">You send</div>
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="text-black font-semibold text-xs sm:text-sm text-right w-full bg-transparent outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-1.5 sm:p-2 md:p-3 items-center mt-2 sm:mt-0">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button className="flex items-center w-full justify-between">
                          <div className="flex items-center">
                            <Image src={fromCurrency.iconUrl || "/assests/cryptocurrency/eth.png"} alt={fromCurrency.name} width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                            <span className="font-medium mr-1 sm:mr-2 text-xs sm:text-sm">{fromCurrency.symbol}</span>
                            <span className="bg-[#74D4FF] text-white text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">{fromCurrency.tag}</span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Portal>
                        <StyledContent 
                          className="bg-white rounded-lg shadow-xl min-w-[150px] z-[999999]" 
                          sideOffset={5}
                          align="center"
                          forceMount
                        >
                          <div className="py-1">
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setFromCurrency(currencies.eth)}
                            >
                              <Image src="/assests/cryptocurrency/eth.png" alt="Ethereum" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>ETH</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setFromCurrency(currencies.btc)}
                            >
                              <Image src="/assests/cryptocurrency/btc.png" alt="Bitcoin" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>BTC</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setFromCurrency(currencies.usdt)}
                            >
                              <Image src="/assests/cryptocurrency/usdt.png" alt="Tether" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>USDT</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setFromCurrency(currencies.usdc)}
                            >
                              <Image src="/assests/cryptocurrency/usdc.png" alt="USD Coin" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>USDC</span>
                            </DropdownMenu.Item>
                          </div>
                        </StyledContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center relative z-10" style={{ marginTop: '-12px', marginBottom: '-8px' }}>
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* You Receive */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-[#F9FAFB] w-full rounded-lg">
                <div className='flex flex-col sm:flex-row items-center w-full border border-gray-100 rounded-lg justify-between'>
                  <div className="flex w-full sm:w-[65%] p-2 sm:p-3 mx-0 sm:mx-1 items-center rounded-lg justify-between">
                    <div className="text-[10px] sm:text-[11px] font-[600] text-gray-500 mb-0 sm:mb-1">You receive</div>
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="text-black font-semibold text-xs sm:text-sm text-right w-full bg-transparent outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="flex text-black w-full sm:w-[35%] bg-[#E5E7EB] rounded-lg sm:rounded-none sm:rounded-r-lg p-1.5 sm:p-2 md:p-3 items-center mt-2 sm:mt-0">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <button className="flex items-center w-full justify-between">
                          <div className="flex items-center">
                            <Image src={toCurrency.iconUrl || "/assests/cryptocurrency/btc.png"} alt={toCurrency.name} width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                            <span className="font-medium mr-1 sm:mr-2 text-xs sm:text-sm">{toCurrency.symbol}</span>
                            <span className="bg-[#FF8904] text-white text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">{toCurrency.tag}</span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Portal>
                        <StyledContent 
                          className="bg-white rounded-lg shadow-xl min-w-[150px] z-[999999]" 
                          sideOffset={5}
                          align="center"
                          forceMount
                        >
                          <div className="py-1">
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setToCurrency(currencies.eth)}
                            >
                              <Image src="/assests/cryptocurrency/eth.png" alt="Ethereum" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>ETH</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setToCurrency(currencies.btc)}
                            >
                              <Image src="/assests/cryptocurrency/btc.png" alt="Bitcoin" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>BTC</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setToCurrency(currencies.usdt)}
                            >
                              <Image src="/assests/cryptocurrency/usdt.png" alt="Tether" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>USDT</span>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 outline-none cursor-pointer"
                              onClick={() => setToCurrency(currencies.usdc)}
                            >
                              <Image src="/assests/cryptocurrency/usdc.png" alt="USD Coin" width={20} height={20} className="w-5 h-5 mr-2" />
                              <span>USDC</span>
                            </DropdownMenu.Item>
                          </div>
                        </StyledContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cashback info */}
          <div className="mt-3 sm:mt-4 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            Estimated cashback - <span className="font-medium">{cashback}</span>
          </div>

          <div className='border-b border-gray-200 w-full my-3 sm:my-5'></div>
          
          {/* Wallet address input */}
          <WalletAddressInput 
            value={walletAddress}
            onChange={setWalletAddress}
            placeholder="The recipient's Ethereum address"
          />
          
      
   
          
          {/* Security information */}
  
          
          {/* Create exchange button */}
          <div className="mt-4 sm:mt-6">
            <button 
              onClick={handleCreateExchange}
              className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg transition-colors"
            >
              Create an exchange
            </button>
            
            <div className="text-center text-[10px] sm:text-xs text-gray-500 my-4 sm:my-5">
              By clicking Create an exchange, I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
