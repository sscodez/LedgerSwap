import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, getProfile, updateProfile } from '@/services/users';

export type UsersState = {
  profile: UserProfile | null;
  loading: boolean;
  saving: boolean;
  error: string | null;
};

const initialState: UsersState = {
  profile: null,
  loading: false,
  saving: false,
  error: null,
};

export const fetchUserProfile = createAsyncThunk('users/profile', async () => {
  const data = await getProfile();
  return data as UserProfile;
});

export const saveUserProfile = createAsyncThunk(
  'users/saveProfile',
  async (payload: Partial<Pick<UserProfile, 'name' | 'phone' | 'country' | 'profilePicture'>>) => {
    const data = await updateProfile(payload);
    return data as UserProfile;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLocalProfile(state, action: PayloadAction<UserProfile | null>) {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load user profile';
      })
      .addCase(saveUserProfile.pending, (state) => {
        state.saving = true;
      })
      .addCase(saveUserProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
        state.saving = false;
        state.profile = action.payload;
      })
      .addCase(saveUserProfile.rejected, (state, action) => {
        state.saving = false;
        state.error = action.error.message || 'Failed to update user profile';
      });
  },
});

export const { setLocalProfile } = usersSlice.actions;
export default usersSlice.reducer;
