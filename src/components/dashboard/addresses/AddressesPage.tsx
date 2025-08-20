'use client'
import React, { useState } from 'react';
import AddressFilters from './AddressFilters';
import AddressList from './AddressList';
import Link from 'next/link';
import type { CryptoSymbol } from '../../../components/icons/crypto/CryptoIcon';
import Image from 'next/image';

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
    let filtered = [...addresses];
    
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

  const handleClearFilters = () => {
    setActiveFilters({ coin: '', network: '', search: '' });
    setFilteredAddresses(addresses);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-[#021735] font-medium">My Addresses</h1>
        <Link 
          href="/dashboard/addresses/new"
          className="flex items-center gap-2 px-4 py-2 text-blue-600  rounded-md hover:bg-blue-700 transition-colors text-sm"
        >
         <Image src="/assests/icons/contact_page.png" alt="Add" width={15} height={15} />
          Add a new addresses
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 md:p-6">
          <AddressFilters 
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          
          <AddressList addresses={filteredAddresses} />
        </div>
      </div>
    </div>
  );
};

export default AddressesPage;
