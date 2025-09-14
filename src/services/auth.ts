import api from '../lib/api';

export type SignInPayload = { email: string; password: string };
export type AuthResponse = { _id: string; name: string; email: string; token: string; role?: string };

export async function signIn(payload: SignInPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/api/auth/signin', payload);
  return data;
}

export async function adminSignIn(payload: SignInPayload): Promise<AuthResponse> {
  const { data } = await api.post<AuthResponse>('/api/auth/admin/signin', payload);
  return data;
}

export async function getProfile() {
  const { data } = await api.get('/api/users/profile');
  return data;
}
