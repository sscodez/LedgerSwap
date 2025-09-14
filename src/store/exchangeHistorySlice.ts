import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExchangeHistoryItem, createExchangeHistory, getExchangeHistory } from '@/services/exchangeHistory';

type ExchangeHistoryState = {
  items: ExchangeHistoryItem[];
  loading: boolean;
  error: string | null;
  creating: boolean;
};

const initialState: ExchangeHistoryState = {
  items: [],
  loading: false,
  error: null,
  creating: false,
};

export const fetchExchangeHistory = createAsyncThunk('exchangeHistory/fetch', async () => {
  const data = await getExchangeHistory();
  return data as ExchangeHistoryItem[];
});

export const addExchangeHistory = createAsyncThunk(
  'exchangeHistory/create',
  async (payload: Partial<ExchangeHistoryItem>) => {
    const data = await createExchangeHistory(payload);
    return data as ExchangeHistoryItem;
  }
);

const exchangeHistorySlice = createSlice({
  name: 'exchangeHistory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeHistory.fulfilled, (state, action: PayloadAction<ExchangeHistoryItem[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExchangeHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load exchange history';
      })
      .addCase(addExchangeHistory.pending, (state) => {
        state.creating = true;
      })
      .addCase(addExchangeHistory.fulfilled, (state, action: PayloadAction<ExchangeHistoryItem>) => {
        state.creating = false;
        state.items.unshift(action.payload);
      })
      .addCase(addExchangeHistory.rejected, (state, action) => {
        state.creating = false;
        state.error = action.error.message || 'Failed to add exchange history';
      });
  },
});

export default exchangeHistorySlice.reducer;
