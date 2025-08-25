import React from 'react';
import { CryptoIcon, Icon } from '../../../components/icons';
import type { CryptoSymbol } from '../../../components/icons/crypto/CryptoIcon';
import Image from 'next/image';
import CopyButton from '@/components/shared/CopyButton';

interface Address {
  id: string;
  coin: {
    name: string;
    symbol: string;
    iconType: CryptoSymbol;
    tag?: string;
  };
  network: string;
  label: string;
  address: string;
}

const CoinIcon: React.FC<{ type: CryptoSymbol; tag?: string; label: string }> = ({ type, tag, label }) => {
  // Get tag background color based on coin type
  const getTagBgColor = () => {
    switch (type) {
      case 'eth': return 'bg-blue-400';
      case 'sol': return 'bg-purple-400';
      case 'usdt': return 'bg-red-400';
      case 'btc': return 'bg-orange-400';
      default: return 'bg-gray-400';
    }
  };
  
  return (
    <div className="flex items-center">
      <CryptoIcon symbol={type} size={18} className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />

      <p className="mx-1.5 sm:mx-2 font-bold whitespace-nowrap text-[11px] sm:text-[13px] text-black">
        {label}
      </p>
      
      {tag && (
        <span className={`ml-1 px-1 sm:px-1.5 py-0.5 text-[10px] sm:text-xs rounded-full ${getTagBgColor()} text-white`}>
          {tag}
        </span>
      )}
    </div>
  );
};

const NetworkIcon: React.FC<{ network: string }> = ({ network }) => {
  // Map of supported networks to their crypto symbols
  const networkToCrypto: Record<string, CryptoSymbol> = {
    'ethereum': 'eth',
    'solana': 'sol',
    'tron': 'usdt' // Using USDT icon for Tron network
  };
  
  const networkKey = network.toLowerCase();
  const cryptoSymbol = networkToCrypto[networkKey];
  
  if (cryptoSymbol) {
    return (
      <div className="mr-1.5 sm:mr-2 flex items-center justify-center rounded-[4px] sm:rounded-[5px] p-0.5 sm:p-1 bg-gray-100">
        <CryptoIcon symbol={cryptoSymbol} size={18} className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]" />
      </div>
    );
  }
  
  // Fallback for unsupported networks
  return <div className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 bg-gray-200 rounded-full"></div>;
};

interface AddressListProps {
  addresses: Address[];
}

const AddressList: React.FC<AddressListProps> = ({ addresses }) => {
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    // Could add a toast notification here
  };

  return (
    <>
      {/* Table view for tablet and desktop */}
      <div className=" my-2 overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-black/20">
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left text-[12px] sm:text-[13px] font-medium text-gray-500">Coin</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left text-[12px] sm:text-[13px] font-medium text-gray-500">Network</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left text-[12px] sm:text-[13px] font-medium text-gray-500">Label</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left text-[12px] sm:text-[13px] font-medium text-gray-500">Addresses</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((item) => (
              <tr 
                key={item.id} 
                className="border-b border-black/20 hover:bg-gray-50 last:border-b-0"
              >
                <td className="py-3 sm:py-4 px-3 sm:px-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <CoinIcon type={item.coin.iconType} tag={item.coin.tag} label={item.coin.symbol} />
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <NetworkIcon network={item.network} />
                    <span className='text-black/90 text-[12px] sm:text-[13px]'>{item.network}</span>
                  </div>
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6 whitespace-nowrap text-[12px] sm:text-[13px] text-gray-700">
                  {item.label}
                </td>
                <td className="py-3 sm:py-4 px-3 sm:px-6 whitespace-nowrap text-[12px] sm:text-[13px]">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-mono truncate max-w-[150px] sm:max-w-[200px]">{item.address}</span>
                   <CopyButton textToCopy={item.address} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

 
    </>
  );
};

export default AddressList;
