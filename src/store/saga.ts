import {fork} from 'redux-saga/effects';
import appSaga from '../features/app/saga';
import authSaga from '../features/auth/redux/saga';
import cartSaga from '../features/cart/redux/saga';

export default function* rootSaga() {
  yield fork(appSaga);
  yield fork(authSaga);
  yield fork(cartSaga);
}
