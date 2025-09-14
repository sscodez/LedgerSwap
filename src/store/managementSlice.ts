import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminListChains, adminSetChainEnabled, adminListTokens, adminSetTokenEnabled } from '@/services/admin';

type Chain = any; // refine types

type Token = any; // refine types

type ManagementState = {
  chains: Chain[];
  tokens: Token[];
  loadingChains: boolean;
  loadingTokens: boolean;
  error: string | null;
  saving: boolean;
};

const initialState: ManagementState = {
  chains: [],
  tokens: [],
  loadingChains: false,
  loadingTokens: false,
  error: null,
  saving: false,
};

export const fetchAdminChains = createAsyncThunk('management/fetchChains', async () => {
  const data = await adminListChains();
  return data as Chain[];
});

export const setAdminChainEnabled = createAsyncThunk(
  'management/setChainEnabled',
  async ({ key, enabled }: { key: string; enabled: boolean }) => {
    const data = await adminSetChainEnabled(key, enabled);
    return data as Chain;
  }
);

export const fetchAdminTokens = createAsyncThunk('management/fetchTokens', async () => {
  const data = await adminListTokens();
  return data as Token[];
});

export const setAdminTokenEnabled = createAsyncThunk(
  'management/setTokenEnabled',
  async ({ key, enabled }: { key: string; enabled: boolean }) => {
    const data = await adminSetTokenEnabled(key, enabled);
    return data as Token;
  }
);

const managementSlice = createSlice({
  name: 'management',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminChains.pending, (state) => {
        state.loadingChains = true;
        state.error = null;
      })
      .addCase(fetchAdminChains.fulfilled, (state, action: PayloadAction<Chain[]>) => {
        state.loadingChains = false;
        state.chains = action.payload;
      })
      .addCase(fetchAdminChains.rejected, (state, action) => {
        state.loadingChains = false;
        state.error = action.error.message || 'Failed to load chains';
      })
      .addCase(setAdminChainEnabled.fulfilled, (state, action: PayloadAction<Chain>) => {
        const idx = state.chains.findIndex((c: any) => c.key === (action.payload as any).key);
        if (idx >= 0) state.chains[idx] = action.payload;
      })
      .addCase(fetchAdminTokens.pending, (state) => {
        state.loadingTokens = true;
        state.error = null;
      })
      .addCase(fetchAdminTokens.fulfilled, (state, action: PayloadAction<Token[]>) => {
        state.loadingTokens = false;
        state.tokens = action.payload;
      })
      .addCase(fetchAdminTokens.rejected, (state, action) => {
        state.loadingTokens = false;
        state.error = action.error.message || 'Failed to load tokens';
      })
      .addCase(setAdminTokenEnabled.fulfilled, (state, action: PayloadAction<Token>) => {
        const idx = state.tokens.findIndex((t: any) => t.key === (action.payload as any).key);
        if (idx >= 0) state.tokens[idx] = action.payload;
      });
  },
});

export default managementSlice.reducer;
