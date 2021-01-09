import { call, put, takeEvery } from 'redux-saga/effects';
import {
  accListRequested, accListLoaded, accListError,
  accRequested, accLoaded, accError,
  repoRequested, repoLoaded, repoError
} from '../actions/index';
import { ActionForSaga } from '../actions/types';

//
function* getRandomAccs(action: ActionForSaga) {
  const { api, param } = action.payload;
  try {
    yield put(accListRequested());
    const number: number = <number>param;
    const data = yield call(api.getNthRandomAcc, number);
    yield put(accListLoaded(data));
  } catch (error) {
    yield put(accListError(error.toString()));
  }
}

export function* accListSaga() {
  yield takeEvery('FETCH_ACCS_LIST', getRandomAccs);
}

//
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

//
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
