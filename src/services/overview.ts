import api from '@/lib/api';

export type Overview = {
  accountBalance: number;
  transactionVolume90days: number;
  currentTransactionFee: number;
};

export async function getOverview() {
  const { data } = await api.get<Overview>('/api/overview');
  return data;
}
