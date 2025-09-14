import api from '@/lib/api';

export type Payout = { _id: string; amount: number; address: string; status?: string; createdAt?: string };

export async function createPayout(payload: Partial<Payout>) {
  const { data } = await api.post<Payout>('/api/payouts', payload);
  return data;
}

export async function getPayouts() {
  const { data } = await api.get<Payout[]>('/api/payouts');
  return data;
}
