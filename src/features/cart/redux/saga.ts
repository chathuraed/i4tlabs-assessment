import {cartActions} from './slice';
import {call, put, takeLatest} from 'redux-saga/effects';
import AuthService from './services/authService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {appActions} from '../app/slice';
import {SIGN_UP_STEP} from './constants';
import {Alert} from 'react-native';
import AppService from '../app/services/appService';

export function* loginUserGenerator({payload}) {
  try {
    yield put(appActions.setLoading('Logging in...'));
    yield put(appActions.removeErrors());

    const response = yield call(AuthService.loginUser, {
      email: payload.email,
      password: payload.password,
      rememberMe: payload.rememberMe,
    });

    if (response.status === 200) {
      let data = yield call([response, 'json']);

      AppService.accessToken = data.token;
      AppService.refreshToken = data.refreshToken;
      AppService.rememberMe = payload.rememberMe ? 'true' : 'false';

      console.log('payload.rememberMe', payload.rememberMe);
      console.log('data.token', data.token);
      console.log('data.refreshToken', data.refreshToken);

      yield call(AsyncStorage.setItem, 'authToken', data.token);
      yield call(AsyncStorage.setItem, 'refreshToken', data.refreshToken);
      yield call(AsyncStorage.setItem, 'loginTimestamp', Date.now().toString());

      if (payload.rememberMe) {
        yield call(AsyncStorage.setItem, 'rememberMe', 'true');
      }

      const accountReponse = yield call(AuthService.getAccount);
      if (accountReponse.status === 200) {
        let accountData = yield call([accountReponse, 'json']);
        yield put(authActions.setCurrentAccount(accountData));
      }

      yield put(authActions.loginUserSuccess());
      yield put(
        appActions.navigateToLocation({
          screen: 'App',
        }),
      );
    } else if (response.status === 400) {
      let data = yield call([response, 'json']);

      yield put(
        appActions.setError({
          error: {
            title: '',
            message: data.Message,
          },
        }),
      );
    }
  } catch (error) {
    yield put(
      appActions.setError({
        error: {
          title: '',
          message: 'Something went wrong.',
        },
      }),
    );
  } finally {
    yield put(appActions.removeLoading());
  }
}

export function* cartSaga() {
  // yield takeLatest(cartActions.loginUser.type, loginUserGenerator);
}

export default cartSaga;
