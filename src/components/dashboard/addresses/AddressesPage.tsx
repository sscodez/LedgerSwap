'use client'
import React, { useState } from 'react';
import AddressFilters from './AddressFilters';
import AddressList from './AddressList';
import AddWalletAddressModal from '../../modal/AddWalletAddressModal';
import type { CryptoSymbol } from '../../../components/icons/crypto/CryptoIcon';
import Image from 'next/image';
import CopyButton from '@/components/shared/CopyButton';
// Define the Address interface here to match the one in AddressList.tsx
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

// Mock data for demonstration
const mockAddresses: Address[] = [
  {
    id: '1',
    coin: { name: 'Ethereum', symbol: 'ETH', iconType: 'eth', tag: 'ETH' },
    network: 'Ethereum',
    label: 'John',
    address: '0xa2234sadjk4487343s9'
  },
  {
    id: '2',
    coin: { name: 'Solana', symbol: 'SOL', iconType: 'sol', tag: 'SOL' },
    network: 'Solana',
    label: 'Monika',
    address: '0xa2234sadjk4487343s7'
  },
  {
    id: '3',
    coin: { name: 'Tether', symbol: 'USDT', iconType: 'usdt', tag: 'TRX' },
    network: 'Tron',
    label: 'Alex',
    address: '0xa2234sadjk4487343s9'
  }
];

const AddressesPage: React.FC = () => {
  const [addresses, setAddresses] = useState(mockAddresses);
  const [filteredAddresses, setFilteredAddresses] = useState(mockAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    coin: '',
    network: '',
    search: ''
  });

  const handleSearch = (query: string) => {
    setActiveFilters({ ...activeFilters, search: query });
    
    if (!query) {
      applyFilters({ ...activeFilters, search: '' });
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = addresses.filter(
      addr => addr.address.toLowerCase().includes(lowerQuery) || 
              addr.label.toLowerCase().includes(lowerQuery)
    );
    
    setFilteredAddresses(filtered);
  };

  const handleFilterChange = (filter: { type: string; value: string }) => {
    const newFilters = { ...activeFilters, [filter.type]: filter.value };
    setActiveFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters: { coin: string; network: string; search: string }) => {
    applyFiltersToAddresses(addresses, filters);
  };

  const handleClearFilters = () => {
    setActiveFilters({ coin: '', network: '', search: '' });
    setFilteredAddresses(addresses);
  };

  const handleAddAddress = (data: { coin: string; address: string; label: string }) => {
    // Map coin IDs to the format expected by Address interface
    const coinMap: Record<string, { name: string; symbol: string; iconType: CryptoSymbol; tag: string; network: string }> = {
      'eth': { name: 'Ethereum', symbol: 'ETH', iconType: 'eth', tag: 'ETH', network: 'Ethereum' },
      'sol': { name: 'Solana', symbol: 'SOL', iconType: 'sol', tag: 'SOL', network: 'Solana' },
      'usdt': { name: 'Tether', symbol: 'USDT', iconType: 'usdt', tag: 'TRX', network: 'Tron' }
    };

    const coinInfo = coinMap[data.coin] || coinMap['eth'];
    
    const newAddress: Address = {
      id: Date.now().toString(),
      coin: {
        name: coinInfo.name,
        symbol: coinInfo.symbol,
        iconType: coinInfo.iconType,
        tag: coinInfo.tag
      },
      network: coinInfo.network,
      label: data.label,
      address: data.address
    };

    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    
    // Apply current filters to include the new address if it matches
    applyFiltersToAddresses(updatedAddresses, activeFilters);
    setIsModalOpen(false);
  };

  const applyFiltersToAddresses = (addressList: Address[], filters: { coin: string; network: string; search: string }) => {
    let filtered = [...addressList];
    
    if (filters.coin) {
      filtered = filtered.filter(addr => addr.coin.symbol === filters.coin);
    }
    
    if (filters.network) {
      filtered = filtered.filter(addr => addr.network === filters.network);
    }
    
    if (filters.search) {
      const lowerQuery = filters.search.toLowerCase();
      filtered = filtered.filter(
        addr => addr.address.toLowerCase().includes(lowerQuery) || 
                addr.label.toLowerCase().includes(lowerQuery)
      );
    }
    
    setFilteredAddresses(filtered);
  };

  return (
    <div className="px-4 overflow-auto  sm:px-6 md:px-8">
      <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl text-[#021735] font-medium">My Addresses</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-xs sm:text-sm w-auto sm:w-auto justify-center sm:justify-start"
        >
         <Image src="/assests/icons/contact_page.png" alt="Add" width={10} height={14}  />
          Add a new address
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-3 sm:p-4 md:p-6">
          <AddressFilters 
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          
          <AddressList addresses={filteredAddresses} />
        </div>
      </div>
      
      <AddWalletAddressModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddAddress}
      />
    </div>
  );
};

export default AddressesPage;
