import api from '@/lib/api';

export type UserProfile = { _id: string; name: string; email: string; phone?: string; country?: string; profilePicture?: string; role?: string };

export async function getProfile() {
  const { data } = await api.get<UserProfile>('/api/users/profile');
  return data;
}

export async function updateProfile(payload: Partial<Pick<UserProfile, 'name' | 'phone' | 'country' | 'profilePicture'>>) {
  const { data } = await api.put<UserProfile>('/api/users/profile', payload);
  return data;
}
