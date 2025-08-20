'use client'
import React, { useState } from 'react';
import WithdrawalSection from './WithdrawalSection';
import PayoutFilters, { DateRange } from './PayoutFilters';
import PayoutHistoryTable from './PayoutHistoryTable';
import RewardsBanner from '../WelcomeBanner';

// Mock data for demonstration
const mockPayoutHistory = [
  {
    id: '1',
    amount: '200.00 USDT',
    date: '1 Aug 2025',
    time: '10:05',
    status: 'Pending',
    address: '0xa2234sadjk4487343s9',
    fee: '0.5%'
  },
  {
    id: '2',
    amount: '200.00 USDT',
    date: '5 Jun 2025',
    time: '01:45',
    status: 'Finished',
    address: '0xa2234sadjk4487343s7',
    fee: '0.5%'
  },
  {
    id: '3',
    amount: '200.00 USDT',
    date: '30 Jan 2025',
    time: '02:00',
    status: 'Finished',
    address: '0xa2234sadjk4487343s9',
    fee: '0.5%'
  }
];

const PayoutsPage: React.FC = () => {
  const [payouts, setPayouts] = useState(mockPayoutHistory);
  interface Filters {
    period: string;
    status: string;
    dateRange: DateRange | null;
  }

  const [activeFilters, setActiveFilters] = useState<Filters>({
    period: 'all',
    status: '',
    dateRange: null
  });

  const handleFilterChange = (filter: { type: string; value: string | any }) => {
    const newFilters = { ...activeFilters, [filter.type]: filter.value };
    setActiveFilters(newFilters);
    
    // Apply filters to the data
    let filteredPayouts = [...mockPayoutHistory];
    
    // Filter by status
    if (newFilters.status) {
      filteredPayouts = filteredPayouts.filter(payout => payout.status === newFilters.status);
    }
    
    // Filter by period
    if (newFilters.period && newFilters.period !== 'all') {
      const today = new Date();
      let startDate: Date;
      
      switch(newFilters.period) {
        case 'month':
          startDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
          break;
        case 'week':
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
          break;
        case 'yesterday':
          startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
          break;
        default:
          startDate = new Date(0); // Beginning of time
      }
      
      filteredPayouts = filteredPayouts.filter(payout => {
        const payoutDate = parsePayoutDate(payout.date, payout.time);
        return payoutDate >= startDate;
      });
    }
    
    // Filter by date range
    if (newFilters.dateRange && newFilters.dateRange.startDate && newFilters.dateRange.endDate) {
      const startDate = new Date(newFilters.dateRange.startDate);
      const endDate = new Date(newFilters.dateRange.endDate);
      
      filteredPayouts = filteredPayouts.filter(payout => {
        const payoutDate = parsePayoutDate(payout.date, payout.time);
        return payoutDate >= startDate && payoutDate <= endDate;
      });
    }
    
    setPayouts(filteredPayouts);
  };
  
  // Helper function to parse payout date strings
  const parsePayoutDate = (dateStr: string, timeStr: string): Date => {
    // Example format: "1 Aug 2025" and "10:05"
    const [day, month, year] = dateStr.split(' ');
    const [hour, minute] = timeStr.split(':');
    
    const monthMap: {[key: string]: number} = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    return new Date(
      parseInt(year),
      monthMap[month],
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
  };

  const handleClearFilters = () => {
    setActiveFilters({
      period: 'all',
      status: '',
      dateRange: null
    });
    setPayouts(mockPayoutHistory); // Reset to original data
  };

  return (
    <div className="px-3 sm:px-4 md:px-6">
      <RewardsBanner />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 sm:mt-8 mb-4 sm:mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl text-black font-medium">Payouts</h1>
        
        {/* Guides dropdown */}
        <div className="relative group">
          {/* Placeholder for guides dropdown */}
        </div>
      </div>
      
      {/* Withdrawal Section */}
      <WithdrawalSection
        balance={{ 
          amount: 1350, 
          currency: 'USDT',
          network: 'SOL',
          tag: 'BTC'
        }}
        address="0xa3234sadjk4487343s3"
        minWithdrawal={150}
      />
      
      {/* Payout History Section */}
      <div className="mb-3 sm:mb-5">
        <h2 className="text-xl sm:text-2xl text-black font-medium">Payout History</h2>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-3 sm:p-4 md:p-6">
          <PayoutFilters
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
          
          <PayoutHistoryTable payouts={payouts} />
        </div>
      </div>
    </div>
  );
};

export default PayoutsPage;
