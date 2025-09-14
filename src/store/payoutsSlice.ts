import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Payout, createPayout, getPayouts } from '@/services/payouts';

type PayoutsState = {
  items: Payout[];
  loading: boolean;
  error: string | null;
  creating: boolean;
};

const initialState: PayoutsState = {
  items: [],
  loading: false,
  error: null,
  creating: false,
};

export const fetchPayouts = createAsyncThunk('payouts/fetch', async () => {
  const data = await getPayouts();
  return data as Payout[];
});

export const addPayout = createAsyncThunk('payouts/create', async (payload: Partial<Payout>) => {
  const data = await createPayout(payload);
  return data as Payout;
});

const payoutsSlice = createSlice({
  name: 'payouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayouts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPayouts.fulfilled, (state, action: PayloadAction<Payout[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPayouts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load payouts';
      })
      .addCase(addPayout.pending, (state) => {
        state.creating = true;
      })
      .addCase(addPayout.fulfilled, (state, action: PayloadAction<Payout>) => {
        state.creating = false;
        state.items.unshift(action.payload);
      })
      .addCase(addPayout.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error.message || 'Failed to create payout';
      });
  },
});

export default payoutsSlice.reducer;
