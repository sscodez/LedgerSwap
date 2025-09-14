import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminListDisputes, adminReplyToDispute, adminUpdateDisputeStatus } from '@/services/admin';

type Dispute = any; // refine to exact type if available

type AdminDisputesState = {
  items: Dispute[];
  loading: boolean;
  error: string | null;
  processing: boolean;
};

const initialState: AdminDisputesState = {
  items: [],
  loading: false,
  error: null,
  processing: false,
};

export const fetchAdminDisputes = createAsyncThunk('adminDisputes/fetch', async () => {
  const data = await adminListDisputes();
  return data as Dispute[];
});

export const updateAdminDisputeStatus = createAsyncThunk(
  'adminDisputes/updateStatus',
  async ({ id, status }: { id: string; status: string }) => {
    await adminUpdateDisputeStatus(id, status);
    return { id, status };
  }
);

export const replyToAdminDispute = createAsyncThunk(
  'adminDisputes/reply',
  async ({ id, message }: { id: string; message: string }) => {
    const data = await adminReplyToDispute(id, message);
    return { id, reply: data };
  }
);

const adminDisputesSlice = createSlice({
  name: 'adminDisputes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminDisputes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminDisputes.fulfilled, (state, action: PayloadAction<Dispute[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAdminDisputes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load disputes';
      })
      .addCase(updateAdminDisputeStatus.pending, (state) => {
        state.processing = true;
      })
      .addCase(updateAdminDisputeStatus.fulfilled, (state, action: PayloadAction<{ id: string; status: string }>) => {
        state.processing = false;
        const d = state.items.find((x: any) => x._id === action.payload.id);
        if (d) d.status = action.payload.status;
      })
      .addCase(updateAdminDisputeStatus.rejected, (state, action) => {
        state.processing = false;
        state.error = action.error.message || 'Failed to update dispute status';
      })
      .addCase(replyToAdminDispute.pending, (state) => {
        state.processing = true;
      })
      .addCase(replyToAdminDispute.fulfilled, (state) => {
        state.processing = false;
      })
      .addCase(replyToAdminDispute.rejected, (state, action) => {
        state.processing = false;
        state.error = action.error.message || 'Failed to reply to dispute';
      });
  },
});

export default adminDisputesSlice.reducer;
