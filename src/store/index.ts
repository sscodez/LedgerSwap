import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import authReducer, { AuthState } from './authSlice';
import adminSettingsReducer from './adminSettingsSlice';
import adminUsersReducer from './adminUsersSlice';
import adminTransactionsReducer from './adminTransactionsSlice';
import adminFlaggedReducer from './adminFlaggedAddressesSlice';
import adminMetricsReducer from './adminMetricsSlice';
import adminDisputesReducer from './adminDisputesSlice';
import managementReducer from './managementSlice';
import addressesReducer from './addressesSlice';
import exchangeHistoryReducer from './exchangeHistorySlice';
import exchangeReducer from './exchangeSlice';
import overviewReducer from './overviewSlice';
import payoutsReducer from './payoutsSlice';
import usersReducer from './usersSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminSettings: adminSettingsReducer,
    adminUsers: adminUsersReducer,
    adminTransactions: adminTransactionsReducer,
    adminFlagged: adminFlaggedReducer,
    adminMetrics: adminMetricsReducer,
    adminDisputes: adminDisputesReducer,
    management: managementReducer,
    addresses: addressesReducer,
    exchangeHistory: exchangeHistoryReducer,
    exchange: exchangeReducer,
    overview: overviewReducer,
    payouts: payoutsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

