import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
  loading: boolean;
  authenticated: boolean;
  signUpUserId: string;
  signUpUserEmail: string;
  forgotPasswordEmail: string;
  currentAccount: any;
}

export const initialState: AuthState = {
  loading: false,
  authenticated: false,
  signUpUserId: '',
  signUpUserEmail: '',
  forgotPasswordEmail: '',
  currentAccount: null,
};

export const authSlice = createSlice({
  name: 'feature/auth',
  initialState,
  reducers: {
    setLoading: state => {
      state.loading = true;
    },
    removeLoading: state => {
      state.loading = false;
    },
    loginUser: state => {
      // Implementation for login user
    },
    loginUserSuccess: state => {
      state.authenticated = true;
    },
    loginUserFail: state => {
      state.authenticated = false;
    },
    setCurrentAccount: (state, action: PayloadAction<any>) => {
      state.currentAccount = action.payload;
    },
    logoutUser: state => {
      state.authenticated = false;
    },
    setSignUpUserEmail: (state, action: PayloadAction<string>) => {
      state.signUpUserEmail = action.payload;
    },
  },
});

export const {actions: authActions} = authSlice;
export default authSlice.reducer;
