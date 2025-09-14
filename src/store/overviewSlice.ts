import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Overview, getOverview } from '@/services/overview';

type OverviewState = {
  data: Overview | null;
  loading: boolean;
  error: string | null;
};

const initialState: OverviewState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchOverview = createAsyncThunk('overview/fetch', async () => {
  const data = await getOverview();
  return data as Overview;
});

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOverview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOverview.fulfilled, (state, action: PayloadAction<Overview>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load overview';
      });
  },
});

export default overviewSlice.reducer;
