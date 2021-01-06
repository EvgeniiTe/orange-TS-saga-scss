import { combineReducers } from 'redux';
import { updateAccList } from './updateAccList';
import { updateAcc } from './updateAcc';
import { updateRepo } from './updateRepo';

export const rootReducer = combineReducers({
  accList: updateAccList,
  accSelected: updateAcc,
  repoSelected: updateRepo,
});

export type RootState = typeof rootReducer;
