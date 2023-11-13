// src/features/appSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AppState {
  loading: boolean;
  errors: Record<string, any>;
}

export const initialState: AppState = {
  loading: false,
  errors: {},
};

export const appSlice = createSlice({
  name: 'feature/app',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    removeLoading: state => {
      state.loading = false;
    },
    setError: (state, action: PayloadAction<{error: any}>) => {
      state.errors = action.payload.error;

      console.log('state.errors', state.errors);
    },
    removeErrors: state => {
      state.errors = {};
    },
  },
});

export const {actions: appActions} = appSlice;
export default appSlice.reducer;
