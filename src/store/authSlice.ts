import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  token: string | null;
  user: { _id: string; name: string; email: string; role?: string } | null;
};

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess(
      state,
      action: PayloadAction<{ token: string; user: { _id: string; name: string; email: string; role?: string } }>
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signOut(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { signInSuccess, signOut } = authSlice.actions;
export default authSlice.reducer;
