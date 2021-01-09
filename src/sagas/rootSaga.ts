import { all, fork } from 'redux-saga/effects';
import { accListSaga } from './accListSaga';
import { accSelectedSaga } from './accSelectedSaga';
import { repoSelectedSaga } from './repoSelectedSaga';

export function* rootSaga() {
  yield all([
    fork(accListSaga),
    fork(accSelectedSaga),
    fork(repoSelectedSaga)
  ]);
}
