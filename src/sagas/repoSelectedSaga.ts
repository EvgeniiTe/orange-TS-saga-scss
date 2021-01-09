import { call, put, takeEvery } from 'redux-saga/effects';
import { repoRequested, repoLoaded, repoError } from '../actions/index';
import { ActionForSaga } from '../actions/types';

function* getRepoInfoAndReadmeUrl(action: ActionForSaga) {
  const { api, param } = action.payload;
  try {
    yield put(repoRequested());
    const string: string = <string>param;
    const data = yield call(api.getRepoInfoAndReadme, string);
    yield put(repoLoaded(data));
  } catch (error) {
    yield put(repoError(error.toString()));
  }
}

export function* repoSelectedSaga() {
  yield takeEvery('FETCH_REPO_SELECTED', getRepoInfoAndReadmeUrl);
}
