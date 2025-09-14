import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminListFlaggedAddresses } from '@/services/admin';

type FlaggedAddress = any; // refine as needed

interface Pagination<T> {
  page: number;
  limit: number;
  total: number;
  pages: number;
  items: T[];
}

type AdminFlaggedAddressesState = {
  data: Pagination<FlaggedAddress> | null;
  loading: boolean;
  error: string | null;
};

const initialState: AdminFlaggedAddressesState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAdminFlaggedAddresses = createAsyncThunk(
  'adminFlagged/fetch',
  async (params?: { page?: number; limit?: number; coin?: string; network?: string; q?: string; sort?: string }) => {
    const data = await adminListFlaggedAddresses(params);
    return data as Pagination<FlaggedAddress>;
  }
);

const adminFlaggedAddressesSlice = createSlice({
  name: 'adminFlagged',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminFlaggedAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminFlaggedAddresses.fulfilled, (state, action: PayloadAction<Pagination<FlaggedAddress>>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAdminFlaggedAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load flagged addresses';
      });
  },
});

export default adminFlaggedAddressesSlice.reducer;
