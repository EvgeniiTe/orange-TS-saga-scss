import { call, put, takeEvery } from 'redux-saga/effects';
import { accRequested, accLoaded, accError } from '../actions/index';
import { ActionForSaga } from '../actions/types';

function* getAccPublicRepos(action: ActionForSaga) {
  const { api, param } = action.payload;
  try {
    yield put(accRequested());
    const string: string = <string>param;
    const data = yield call(api.getAccRepos, string);
    yield put(accLoaded(data));
  } catch (error) {
    yield put(accError(error));
  }
}

export function* accSelectedSaga() {
  yield takeEvery('FETCH_ACC_SELECTED', getAccPublicRepos);
}
