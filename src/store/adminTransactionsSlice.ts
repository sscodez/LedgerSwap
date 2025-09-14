import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminListTransactions } from '@/services/admin';

export type Transaction = any; // Replace with precise type if available

type Pagination<T> = {
  page: number;
  limit: number;
  total: number;
  pages: number;
  items: T[];
};

type AdminTransactionsState = {
  data: Pagination<Transaction> | null;
  loading: boolean;
  error: string | null;
};

const initialState: AdminTransactionsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAdminTransactions = createAsyncThunk(
  'adminTransactions/fetch',
  async (params?: { page?: number; limit?: number; status?: string; user?: string; sort?: string; startDate?: string; endDate?: string }) => {
    const data = await adminListTransactions(params);
    return data as Pagination<Transaction>;
  }
);

const adminTransactionsSlice = createSlice({
  name: 'adminTransactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminTransactions.fulfilled, (state, action: PayloadAction<Pagination<Transaction>>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load transactions';
      });
  },
});

export default adminTransactionsSlice.reducer;
