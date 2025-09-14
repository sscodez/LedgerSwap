import api from '@/lib/api';

export type Address = { _id: string; label?: string; address: string; network?: string; coin?: string };

export async function createAddress(payload: Partial<Address>) {
  const { data } = await api.post<Address>('/api/addresses', payload);
  return data;
}

export async function getAddresses() {
  const { data } = await api.get<Address[]>('/api/addresses');
  return data;
}

export async function deleteAddress(id: string) {
  const { data } = await api.delete<{ success?: boolean; message?: string }>(`/api/addresses/${id}`);
  return data;
}
