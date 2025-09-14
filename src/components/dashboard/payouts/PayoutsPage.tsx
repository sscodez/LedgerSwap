'use client'
import React, { useEffect, useMemo, useState } from 'react';
import WithdrawalSection from './WithdrawalSection';
import PayoutFilters, { DateRange } from './PayoutFilters';
import PayoutHistoryTable from './PayoutHistoryTable';
import RewardsBanner from '../WelcomeBanner';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchPayouts } from '@/store/payoutsSlice';

// Helper to format date/time
const formatDate = (iso?: string) => {
  if (!iso) return { date: '—', time: '' };
  const d = new Date(iso);
  const date = d.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
  const time = d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  return { date, time };
};

const PayoutsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((s) => s.payouts);
  // Map API items to the UI shape expected by PayoutHistoryTable
  const mapped = useMemo(() => {
    return (items || []).map((p) => {
      const { date, time } = formatDate(p.createdAt);
      const status = (p.status || 'pending').toLowerCase();
      const statusLabel = status === 'finished' || status === 'completed' ? 'Finished' : status === 'pending' ? 'Pending' : (status.charAt(0).toUpperCase() + status.slice(1));
      return {
        id: p._id,
        amount: `${Number(p.amount ?? 0).toFixed(2)} USDT`,
        date,
        time,
        status: statusLabel,
        address: p.address,
        fee: '0.5%',
      };
    });
  }, [items]);

  const [payouts, setPayouts] = useState(mapped);
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

  // Load payouts on mount
  useEffect(() => {
    dispatch(fetchPayouts());
  }, []);

  // Keep local filtered state in sync when API items change
  useEffect(() => {
    setPayouts(mapped);
  }, [mapped]);

  const handleFilterChange = (filter: { type: string; value: string | any }) => {
    const newFilters = { ...activeFilters, [filter.type]: filter.value };
    setActiveFilters(newFilters);
    
    // Apply filters to the data
    let filteredPayouts = [...mapped];
    
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
    setPayouts(mapped); // Reset to latest data
  };

  return (
    <div className="px-3 overflow-auto sm:px-4 md:px-6">
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
