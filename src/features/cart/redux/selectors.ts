import {createSelector} from '@reduxjs/toolkit';
import {initialState} from './slice';

const selectDomain = state => state['feature/auth'] || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  auth => auth.loading,
);

export const selectAuthenticated = createSelector(
  [selectDomain],
  auth => auth.authenticated,
);

export const selectSignUpUserEmail = createSelector(
  [selectDomain],
  auth => auth.signUpUserEmail,
);

export const selectCurrentAccount = createSelector(
  [selectDomain],
  auth => auth.currentAccount,
);
