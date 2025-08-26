import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import CopyButton from '@/components/shared/CopyButton';
import { BsInfoCircle } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";

interface WithdrawalSectionProps {
  balance: {
    amount: number;
    currency: string;
    network?: string;
    tag?: string;
  };
  address: string;
  minWithdrawal: number;
}

// Define available cryptocurrencies
const availableCryptos = [
  { symbol: 'USDT', name: 'Tether', image: '/assests/cryptocurrency/usdt.png', tag: 'USDT' },
  { symbol: 'BTC', name: 'Bitcoin', image: '/assests/cryptocurrency/btc.png', tag: 'BTC' },
  { symbol: 'ETH', name: 'Ethereum', image: '/assests/cryptocurrency/eth.png', tag: 'ETH' },
  { symbol: 'SOL', name: 'Solana', image: '/assests/cryptocurrency/sol.png', tag: 'SOL' },
  { symbol: 'USDC', name: 'USD Coin', image: '/assests/cryptocurrency/usdc.png', tag: 'USDC' },
  { symbol: 'LTC', name: 'Litecoin', image: '/assests/cryptocurrency/ltc.png', tag: 'LTC' },
  { symbol: 'XMR', name: 'Monero', image: '/assests/cryptocurrency/xmr.png', tag: 'XMR' },
  { symbol: 'XRP', name: 'Ripple', image: '/assests/cryptocurrency/xrp.png', tag: 'XRP' },
  { symbol: 'XLM', name: 'Stellar', image: '/assests/cryptocurrency/xlm.png', tag: 'XLM' },
  { symbol: 'XDC', name: 'XinFin', image: '/assests/cryptocurrency/xdc.png', tag: 'XDC' },
  { symbol: 'MIOTA', name: 'IOTA', image: '/assests/cryptocurrency/miota.png', tag: 'MIOTA' }
];

// Define available networks
const availableNetworks = [
  { id: 'SOL', name: 'Solana', image: '/assests/cryptocurrency/sol.png' },
  { id: 'BTC', name: 'Bitcoin', image: '/assests/cryptocurrency/btc.png' },
  { id: 'ETH', name: 'Ethereum', image: '/assests/cryptocurrency/eth.png' },
  { id: 'BSC', name: 'Binance Smart Chain', image: '/assests/cryptocurrency/binance.png' },
  { id: 'TRON', name: 'Tron', image: '/assests/cryptocurrency/tron.png' },
  { id: 'ARB', name: 'Arbitrum', image: '/assests/cryptocurrency/arbiturm.png' },
  { id: 'XRP', name: 'Ripple Network', image: '/assests/cryptocurrency/xrp.png' },
  { id: 'XLM', name: 'Stellar Network', image: '/assests/cryptocurrency/xlm.png' },
  { id: 'XDC', name: 'XinFin Network', image: '/assests/cryptocurrency/xdc.png' },
  { id: 'IOTA', name: 'IOTA Network', image: '/assests/cryptocurrency/miota.png' }
];

const WithdrawalSection: React.FC<WithdrawalSectionProps> = ({
  balance,
  address,
  minWithdrawal
}) => {
  const [selectedCrypto, setSelectedCrypto] = useState(availableCryptos[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(availableNetworks[0]);
  const [isCryptoDropdownOpen, setIsCryptoDropdownOpen] = useState(false);
  const [isNetworkDropdownOpen, setIsNetworkDropdownOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(address);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  // Copy address to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    // Could add toast notification here
  };

  // Validate wallet address based on selected cryptocurrency
  const validateWalletAddress = (address: string) => {
    setWalletAddress(address);

    // Basic validation patterns for different cryptocurrencies
    const validationPatterns: { [key: string]: { regex: RegExp, message: string } } = {
      BTC: {
        regex: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/,
        message: 'Invalid Bitcoin address format'
      },
      ETH: {
        regex: /^0x[a-fA-F0-9]{40}$/,
        message: 'Invalid Ethereum address format'
      },
      XRP: {
        regex: /^r[0-9a-zA-Z]{24,34}$/,
        message: 'Invalid Ripple address format'
      },
      XLM: {
        regex: /^G[A-Z0-9]{55}$/,
        message: 'Invalid Stellar address format'
      },
      XDC: {
        regex: /^xdc[a-fA-F0-9]{40}$/,
        message: 'Invalid XinFin address format'
      },
      MIOTA: {
        regex: /^[A-Z9]{90}$/,
        message: 'Invalid IOTA address format'
      },
      // Default pattern for other cryptocurrencies
      default: {
        regex: /^[a-zA-Z0-9]{25,90}$/,
        message: 'Invalid wallet address format'
      }
    };

    // Get validation pattern for selected crypto or use default
    const pattern = validationPatterns[selectedCrypto.symbol] || validationPatterns.default;

    // Validate address
    if (address.trim() === '') {
      setIsAddressValid(false);
      setValidationMessage('Wallet address cannot be empty');
    } else if (!pattern.regex.test(address)) {
      setIsAddressValid(false);
      setValidationMessage(pattern.message);
    } else {
      setIsAddressValid(true);
      setValidationMessage('');
    }
  };

  // Handle cryptocurrency selection
  const handleCryptoSelect = (crypto: typeof availableCryptos[0]) => {
    setSelectedCrypto(crypto);
    setIsCryptoDropdownOpen(false);
  };

  // Handle network selection
  const handleNetworkSelect = (network: typeof availableNetworks[0]) => {
    setSelectedNetwork(network);
    setIsNetworkDropdownOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mb-6 sm:mb-8">
      <div className="flex items-center mb-2">
        {/* Crypto Icon */}
        <p className='font-bold text-black text-sm sm:text-base'>0 {selectedCrypto.symbol} <span className='bg-[#FF8904] font-medium text-[10px] sm:text-[11px] py-0.5 sm:py-1 px-1.5 sm:px-2 text-white rounded-full ml-1'>{selectedCrypto.tag}</span> withdrawal</p>
        {/* Balance Amount */}
      </div>

      {/* Network information */}
      <div className="mb-4 sm:mb-6">
        <p className="text-gray-600 text-[12px] sm:text-[13px]">
          This {selectedCrypto.symbol} address in {selectedNetwork.name} network will be used to receive requested withdrawals.
        </p>
      </div>

      {/* Withdrawal address */}
      <p className='font-medium text-black text-sm sm:text-base my-4'>Withdrawal Address</p>
      <div className={`bg-gray-100 rounded-lg py-2 sm:py-3 px-3 sm:px-4 flex flex-col mb-4 sm:mb-6 ${!isAddressValid ? 'border-2 border-red-500' : ''}`}>
      
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => validateWalletAddress(e.target.value)}
            className="font-mono bg-transparent text-gray-700 w-full mr-2 sm:mr-4 text-xs sm:text-sm focus:outline-none"
            placeholder={`Enter ${selectedCrypto.name} wallet address...`}
          />
          <CopyButton textToCopy={walletAddress} />
        </div>
        {!isAddressValid && (
          <div className="text-red-500 text-xs mt-1">
            {validationMessage}
          </div>
        )}
        {isAddressValid && walletAddress && (
          <div className="text-green-500 text-xs mt-1">
            Valid {selectedCrypto.name} address
          </div>
        )}
      </div>

      {/* Network Dropdown */}
      <div className="relative w-full mb-4 sm:mb-6">
        <button
          onClick={() => {
            setIsNetworkDropdownOpen(!isNetworkDropdownOpen);
            setIsCryptoDropdownOpen(false);
          }}
          className="flex items-center w-full bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-3 sm:py-4 transition-colors"
        >
          <Image
            src={selectedNetwork.image}
            alt={selectedNetwork.name}
            width={40}
            height={40}
            className="w-6 h-6 sm:w-7 sm:h-7 mr-2"
          />
          <span className="font-medium text-black text-sm sm:text-base">{selectedNetwork.name}</span>
          <IoChevronDownOutline className="ml-2" />
        </button>

        {isNetworkDropdownOpen && (
          <div className="absolute z-10 mt-1 text-black p-2 bg-white border border-gray-200 w-full rounded-lg shadow-lg py-1 ">
            {availableNetworks.map((network) => (
              <button
                key={network.id}
                className="flex text-black items-center w-full px-3 py-4  border-b border-gray-200 text-left hover:bg-gray-100 transition-colors"
                onClick={() => handleNetworkSelect(network)}
              >
                <Image
                  src={network.image}
                  alt={network.name}
                  width={24}
                  height={24}
                  className="w-5 h-5 mr-2"
                />
                <span className="text-sm text-black">{network.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Support link */}
      <div className="flex flex-wrap justify-center items-center  sm:justify-end mb-4 sm:mb-6">
        <span className="text-[12px] sm:text-[13px] text-gray-600 mr-1 sm:mr-2">Need to change payout address?</span>
        <a href="#" className="text-[12px] sm:text-[13px] text-blue-600 font-medium">Contact support.</a>
      </div>

      <div className='border-b border-gray-200 rounded-lg mb-4 sm:mb-6 w-full'></div>

      {/* Withdrawal action */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start text-gray-500 w-full sm:w-auto">
          <div className='flex items-center mb-2 w-full justify-between sm:mb-3'>
            {/* Cryptocurrency Dropdown */}
            <div className="relative mr-2 sm:mr-3">
              <button
                onClick={() => {
                  setIsCryptoDropdownOpen(!isCryptoDropdownOpen);
                  setIsNetworkDropdownOpen(false);
                }}
                className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 transition-colors"
              >
                <Image
                  src={selectedCrypto.image}
                  alt={selectedCrypto.name}
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-7 sm:h-7 mr-2"
                />
                <span className="font-medium text-sm sm:text-base">{selectedCrypto.symbol}</span>
                <IoChevronDownOutline className="ml-2" />
              </button>

              {isCryptoDropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-48">
                  {availableCryptos.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      className="flex items-center w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors"
                      onClick={() => handleCryptoSelect(crypto)}
                    >
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-sm">{crypto.name}</span>
                      <span className="text-xs text-gray-500 ml-1">({crypto.symbol})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>



            <div className="ml-3 my-4 sm:my-0 sm:ml-4">
              <div className="flex text-black items-center">
                <span className="text-2xl sm:text-3xl font-semibold">{balance.amount}</span>
                <span className="ml-1 sm:ml-2 font-semibold text-lg sm:text-xl">{selectedCrypto.symbol}</span>
              </div>
            </div>
          </div>
          <div className='flex rounded-full items-center border-gray-200 border-2 px-2 py-1 text-xs sm:text-sm max-w-full'>
            <BsInfoCircle className='mr-1' />
            <span>Minimum withdrawal is {minWithdrawal} {selectedCrypto.symbol}</span>
          </div>
        </div>
        <button
          className={`px-6 sm:px-8 py-4 sm:py-3 text-xs sm:text-sm rounded-lg font-semibold w-full sm:w-auto mt-2 sm:mt-0 ${balance.amount >= minWithdrawal
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            } transition-colors`}
          disabled={balance.amount < minWithdrawal}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawalSection;
