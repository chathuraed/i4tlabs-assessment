import {createSelector} from '@reduxjs/toolkit';
import {AppState, initialState} from './slice'; // Assuming your slice exports AppState

const selectDomain = (state: Record<string, any>) =>
  state['feature/app'] || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  (app: AppState) => app.loading,
);

export const selectErrors = createSelector(
  [selectDomain],
  (app: AppState) => app.errors,
);
