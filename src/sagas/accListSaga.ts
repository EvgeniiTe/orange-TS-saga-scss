import { call, put, takeEvery } from 'redux-saga/effects';
import { accListRequested, accListLoaded, accListError } from '../actions/index';
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
