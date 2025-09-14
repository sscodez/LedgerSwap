import api from '@/lib/api';

// Users
export async function adminListUsers() {
  const { data } = await api.get('/api/admin/users');
  return data;
}

export async function adminUpdateUserRole(id: string, role: 'user' | 'admin') {
  const { data } = await api.put(`/api/admin/users/${id}/role`, { role });
  return data;
}

// Transactions
export async function adminListTransactions(params?: {
  page?: number;
  limit?: number;
  status?: string;
  user?: string;
  sort?: string;
  startDate?: string;
  endDate?: string;
}) {
  const { data } = await api.get('/api/admin/transactions', { params });
  return data;
}

// Flagged addresses
export async function adminListFlaggedAddresses(params?: {
  page?: number;
  limit?: number;
  coin?: string;
  network?: string;
  q?: string;
  sort?: string;
}) {
  const { data } = await api.get('/api/admin/flagged-addresses', { params });
  return data;
}

// Metrics
export async function adminGetMetrics() {
  const { data } = await api.get('/api/admin/metrics');
  return data;
}

// Platform settings
export async function adminGetPlatformSettings() {
  const { data } = await api.get('/api/admin/settings');
  return data as {
    key: string;
    swapFeePercent: number;
    privacyMode?: boolean;
    autoRefreshDashboard?: boolean;
    notificationSettings?: { alertsEnabled?: boolean };
    loginRateLimitPerHour?: number;
  };
}

export async function adminUpdatePlatformSettings(payload: Partial<{
  privacyMode: boolean;
  autoRefreshDashboard: boolean;
  notificationSettings: { alertsEnabled: boolean };
  loginRateLimitPerHour: number;
}>) {
  const { data } = await api.put('/api/admin/settings', payload);
  return data;
}

export async function adminUpdateSwapFeePercent(swapFeePercent: number) {
  const { data } = await api.put('/api/admin/settings/swap-fee', { swapFeePercent });
  return data;
}

// Fees revenue
export async function adminGetFeeRevenue(days?: number) {
  const { data } = await api.get('/api/admin/fees/revenue', { params: { days } });
  return data;
}

// Trade activity
export async function adminListTradeActivity(params?: {
  page?: number;
  limit?: number;
  walletAddress?: string;
  network?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  sort?: string;
}) {
  const { data } = await api.get('/api/admin/activity', { params });
  return data;
}

// Admin disputes
export async function adminListDisputes() {
  const { data } = await api.get('/api/admin/disputes');
  return data;
}

export async function adminUpdateDisputeStatus(id: string, status: string) {
  const { data } = await api.put(`/api/admin/disputes/${id}/status`, { status });
  return data;
}

export async function adminReplyToDispute(id: string, message: string) {
  const { data } = await api.post(`/api/admin/disputes/${id}/reply`, { message });
  return data;
}

// Management: chains & tokens
export async function adminListChains() {
  const { data } = await api.get('/api/admin/management/chains');
  return data;
}

export async function adminSetChainEnabled(key: string, enabled: boolean) {
  const { data } = await api.put(`/api/admin/management/chains/${key}/enabled`, { enabled });
  return data;
}

export async function adminListTokens() {
  const { data } = await api.get('/api/admin/management/tokens');
  return data;
}

export async function adminSetTokenEnabled(key: string, enabled: boolean) {
  const { data } = await api.put(`/api/admin/management/tokens/${key}/enabled`, { enabled });
  return data;
}
