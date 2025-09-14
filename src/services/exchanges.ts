import api from '@/lib/api';

export type CreateExchangeRequest = {
  fromCurrency: string;
  toCurrency: string;
  sendAmount?: number;
  receiveAmount?: number;
  fees?: number;
  cashback?: number;
  walletAddress?: string;
  status?: 'pending' | 'completed' | 'failed';
};

export type CreateExchangeResponse = {
  exchangeId: string;
  record: any;
};

export async function createExchange(payload: CreateExchangeRequest) {
  const { data } = await api.post<CreateExchangeResponse>('/api/exchanges', payload);
  return data;
}
