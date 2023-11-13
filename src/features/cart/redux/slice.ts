import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  authenticated: false,
  signUpUserId: '',
  signUpUserEmail: '',
  forgotPasswordEmail: '',
  currentAccount: null,
};

export const cartSlice = createSlice({
  name: 'feature/auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    removeLoading: (state, action) => {
      state.loading = false;
    },
    checkAuthToken: state => {},
    refreshAuthToken: state => {},
    loginUser: state => {},
    loginUserSuccess: (state, action) => {
      state.authenticated = true;
    },
    loginUserFail: (state, action) => {
      state.authenticated = false;
    },
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    logoutUser: (state, action) => {
      state.authenticated = false;
    },
    setSignUpUserEmail: (state, action) => {
      state.signUpUserEmail = action.payload;
    },
  },
});

export const {actions: cartActions} = cartSlice;
