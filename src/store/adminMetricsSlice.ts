import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminGetMetrics, adminGetFeeRevenue } from '@/services/admin';

type Metrics = any; // refine to real type

type FeeRevenue = { days: number; since: string; items: { date: string; totalFees: number }[] };

type AdminMetricsState = {
  metrics: Metrics | null;
  feeRevenue: FeeRevenue | null;
  loading: boolean;
  error: string | null;
};

const initialState: AdminMetricsState = {
  metrics: null,
  feeRevenue: null,
  loading: false,
  error: null,
};

export const fetchAdminMetrics = createAsyncThunk('adminMetrics/fetch', async () => {
  const data = await adminGetMetrics();
  return data as Metrics;
});

export const fetchAdminFeeRevenue = createAsyncThunk('adminMetrics/feeRevenue', async (days?: number) => {
  const data = await adminGetFeeRevenue(days);
  return data as FeeRevenue;
});

const adminMetricsSlice = createSlice({
  name: 'adminMetrics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminMetrics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminMetrics.fulfilled, (state, action: PayloadAction<Metrics>) => {
        state.loading = false;
        state.metrics = action.payload;
      })
      .addCase(fetchAdminMetrics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load metrics';
      })
      .addCase(fetchAdminFeeRevenue.fulfilled, (state, action: PayloadAction<FeeRevenue>) => {
        state.feeRevenue = action.payload;
      });
  },
});

export default adminMetricsSlice.reducer;
