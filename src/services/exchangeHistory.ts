import api from '@/lib/api';

export type ExchangeHistoryItem = {
  _id: string;
  from?: any;
  to?: any;
  network?: string;
  status?: string;
  createdAt?: string;
};

export async function createExchangeHistory(payload: Partial<ExchangeHistoryItem>) {
  const { data } = await api.post<ExchangeHistoryItem>('/api/exchange-history', payload);
  return data;
}

export async function getExchangeHistory() {
  const { data } = await api.get<ExchangeHistoryItem[]>('/api/exchange-history');
  return data;
}
