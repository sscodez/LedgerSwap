import React from 'react';
import { CryptoIcon, Icon } from '../../../components/icons';
import type { CryptoSymbol } from '../../../components/icons/crypto/CryptoIcon';
import Image from 'next/image';

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
      <CryptoIcon symbol={type} size={20} />

      <p className=" mx-2 font-bold whitespace-nowrap text-[13px] text-black">
        {label}
      </p>
      
      {tag && (
        <span className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${getTagBgColor()} text-white`}>
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
      <div className="mr-2 flex items-center justify-center rounded-[5px] p-1 bg-gray-100">
        <CryptoIcon symbol={cryptoSymbol} size={20} />
      </div>
    );
  }
  
  // Fallback for unsupported networks
  return <div className="w-5 h-5 mr-2 bg-gray-200 rounded-full"></div>;
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
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-black/20">
              <th className="py-4 px-6 text-left text-[13px] font-medium text-gray-500">Coin</th>
              <th className="py-4 px-6 text-left text-[13px] font-medium text-gray-500">Network</th>
              <th className="py-4 px-6 text-left text-[13px] font-medium text-gray-500">Label</th>
              <th className="py-4 px-6 text-left text-[13px] font-medium text-gray-500">Addresses</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((item) => (
              <tr 
                key={item.id} 
                className="border-b border-black/20 hover:bg-gray-50 last:border-b-0"
              >
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <CoinIcon type={item.coin.iconType} tag={item.coin.tag} label={item.coin.symbol} />
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <NetworkIcon network={item.network} />
                    <span className='text-black/90 text-[13px]'>{item.network}</span>
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-[13px] text-gray-700">
                  {item.label}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-[13px]">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-mono truncate max-w-[200px]">{item.address}</span>
                    <button
                      onClick={() => copyAddress(item.address)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                      aria-label="Copy address"
                    >
                <Image src={"/assests/icons/file_copy.svg"} alt="Copy" width={15} height={15}   />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {addresses.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <CoinIcon type={item.coin.iconType} tag={item.coin.tag} label={item.coin.symbol} />
              </div>
              <div className="text-[13px] text-gray-700 font-medium">
                {item.label}
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-gray-500 text-[13px] mb-1">Network</div>
                <div className="flex items-center">
                  <NetworkIcon network={item.network} />
                  <span className='text-black/90 text-[13px]'>{item.network}</span>
                </div>
              </div>
              
              <div>
                <div className="text-gray-500 text-[13px] mb-1">Address</div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-mono text-[13px] truncate block max-w-[80%]">
                    {item.address}
                  </span>
                  <button
                    onClick={() => copyAddress(item.address)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                    aria-label="Copy address"
                  >
                    <Icon name="AccountBalanceWallet" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddressList;
