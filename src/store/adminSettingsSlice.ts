import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminGetPlatformSettings, adminUpdatePlatformSettings } from '@/services/admin';

export type AdminSettingsState = {
  data: {
    key?: string;
    swapFeePercent?: number;
    privacyMode?: boolean;
    autoRefreshDashboard?: boolean;
    notificationSettings?: { alertsEnabled?: boolean };
    loginRateLimitPerHour?: number;
  } | null;
  loading: boolean;
  error: string | null;
  saving: boolean;
};

const initialState: AdminSettingsState = {
  data: null,
  loading: false,
  error: null,
  saving: false,
};

export const fetchAdminSettings = createAsyncThunk('adminSettings/fetch', async () => {
  const data = await adminGetPlatformSettings();
  return data;
});

export const updateAdminSettings = createAsyncThunk(
  'adminSettings/update',
  async (payload: Partial<{ privacyMode: boolean; autoRefreshDashboard: boolean; notificationSettings: { alertsEnabled: boolean }; loginRateLimitPerHour: number; swapFeePercent: number }>) => {
    const data = await adminUpdatePlatformSettings(payload);
    return data;
  }
);

const adminSettingsSlice = createSlice({
  name: 'adminSettings',
  initialState,
  reducers: {
    setLocalSettings(state, action: PayloadAction<AdminSettingsState['data']>) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load admin settings';
      })
      .addCase(updateAdminSettings.pending, (state) => {
        state.saving = true;
        state.error = null;
      })
      .addCase(updateAdminSettings.fulfilled, (state, action) => {
        state.saving = false;
        state.data = action.payload;
      })
      .addCase(updateAdminSettings.rejected, (state, action) => {
        state.saving = false;
        state.error = action.error.message || 'Failed to update admin settings';
      });
  },
});

export const { setLocalSettings } = adminSettingsSlice.actions;
export default adminSettingsSlice.reducer;
