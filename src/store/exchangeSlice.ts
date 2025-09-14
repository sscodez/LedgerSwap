import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Currency = {
  name: string;
  fullName: string;
  icon: string;
  color: string;
};

export type ExchangeState = {
  sendCurrency: Currency | null;
  receiveCurrency: Currency | null;
  sendAmount: string | null;
  receiveAmount: string | null;
  currentExchangeId?: string | null;
};

const initialState: ExchangeState = {
  sendCurrency: null,
  receiveCurrency: null,
  sendAmount: null,
  receiveAmount: null,
  currentExchangeId: null,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeState(
      state,
      action: PayloadAction<{
        sendCurrency: Currency;
        receiveCurrency: Currency;
        sendAmount: string;
        receiveAmount: string;
      }>
    ) {
      state.sendCurrency = action.payload.sendCurrency;
      state.receiveCurrency = action.payload.receiveCurrency;
      state.sendAmount = action.payload.sendAmount;
      state.receiveAmount = action.payload.receiveAmount;
    },
    clearExchangeState(state) {
      state.sendCurrency = null;
      state.receiveCurrency = null;
      state.sendAmount = null;
      state.receiveAmount = null;
      state.currentExchangeId = null;
    },
    setCurrentExchangeId(state, action: PayloadAction<string | null>) {
      state.currentExchangeId = action.payload;
    },
  },
});

export const { setExchangeState, clearExchangeState, setCurrentExchangeId } = exchangeSlice.actions;
export default exchangeSlice.reducer;
