import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { adminListUsers, adminUpdateUserRole } from '@/services/admin';

export type AdminUser = { _id: string; name: string; email: string; role?: 'user' | 'admin' };

type AdminUsersState = {
  items: AdminUser[];
  loading: boolean;
  error: string | null;
  updating: boolean;
};

const initialState: AdminUsersState = {
  items: [],
  loading: false,
  error: null,
  updating: false,
};

export const fetchAdminUsers = createAsyncThunk('adminUsers/fetch', async () => {
  const data = await adminListUsers();
  return data as AdminUser[];
});

export const updateAdminUserRole = createAsyncThunk(
  'adminUsers/updateRole',
  async ({ id, role }: { id: string; role: 'user' | 'admin' }) => {
    const data = await adminUpdateUserRole(id, role);
    return data.user as AdminUser;
  }
);

const adminUsersSlice = createSlice({
  name: 'adminUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminUsers.fulfilled, (state, action: PayloadAction<AdminUser[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAdminUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load users';
      })
      .addCase(updateAdminUserRole.pending, (state) => {
        state.updating = true;
      })
      .addCase(updateAdminUserRole.fulfilled, (state, action: PayloadAction<AdminUser>) => {
        state.updating = false;
        const idx = state.items.findIndex((u) => u._id === action.payload._id);
        if (idx >= 0) state.items[idx] = action.payload;
      })
      .addCase(updateAdminUserRole.rejected, (state, action) => {
        state.updating = false;
        state.error = action.error.message || 'Failed to update user role';
      });
  },
});

export default adminUsersSlice.reducer;
