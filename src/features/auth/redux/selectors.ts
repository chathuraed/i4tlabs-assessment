import {createSelector} from '@reduxjs/toolkit'; // Adjust the import based on your actual store structure
import {AuthState, initialState} from './slice';

const selectDomain = (state: Record<string, any>) =>
  state['feature/auth'] || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  (auth: AuthState) => auth.loading,
);

export const selectAuthenticated = createSelector(
  [selectDomain],
  (auth: AuthState) => auth.authenticated,
);

export const selectSignUpUserEmail = createSelector(
  [selectDomain],
  (auth: AuthState) => auth.signUpUserEmail,
);

export const selectCurrentAccount = createSelector(
  [selectDomain],
  (auth: AuthState) => auth.currentAccount,
);
