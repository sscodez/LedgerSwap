import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Address, createAddress, deleteAddress, getAddresses } from '@/services/addresses';

type AddressesState = {
  items: Address[];
  loading: boolean;
  error: string | null;
  creating: boolean;
  deleting: string | null; // id being deleted
};

const initialState: AddressesState = {
  items: [],
  loading: false,
  error: null,
  creating: false,
  deleting: null,
};

export const fetchAddresses = createAsyncThunk('addresses/fetch', async () => {
  const data = await getAddresses();
  return data as Address[];
});

export const addAddress = createAsyncThunk('addresses/create', async (payload: Partial<Address>) => {
  const data = await createAddress(payload);
  return data as Address;
});

export const removeAddress = createAsyncThunk('addresses/delete', async (id: string) => {
  await deleteAddress(id);
  return id;
});

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action: PayloadAction<Address[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load addresses';
      })
      .addCase(addAddress.pending, (state) => {
        state.creating = true;
      })
      .addCase(addAddress.fulfilled, (state, action: PayloadAction<Address>) => {
        state.creating = false;
        state.items.unshift(action.payload);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error.message || 'Failed to create address';
      })
      .addCase(removeAddress.pending, (state, action) => {
        state.deleting = action.meta.arg;
      })
      .addCase(removeAddress.fulfilled, (state, action: PayloadAction<string>) => {
        state.deleting = null;
        state.items = state.items.filter((a) => a._id !== action.payload);
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.deleting = null;
        state.error = action.error.message || 'Failed to delete address';
      });
  },
});

export default addressesSlice.reducer;
