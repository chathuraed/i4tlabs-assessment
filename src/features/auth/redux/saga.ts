import {put, call} from 'redux-saga/effects';
import AuthService from '../services/authService';
import {appActions} from '../../app/slice';

interface LoginPayload {
  username: string;
  password: string;
}

interface ResponseType {
  status: number;
  json: () => Promise<any>;
}

export function* loginUserGenerator({payload}: {payload: LoginPayload}) {
  try {
    yield put(appActions.setLoading());
    yield put(appActions.removeErrors());

    const response: ResponseType = yield call(AuthService.loginUser, {
      username: payload.username,
      password: payload.password,
    });

    if (response.status === 200) {
      let data: any = yield call([response, 'json']);
      console.log('request', data);

      return {data};
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
