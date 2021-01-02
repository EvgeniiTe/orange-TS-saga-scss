import { combineReducers, Reducer } from 'redux';
import { updateAccList } from './updateAccList';
import { updateAcc } from './updateAcc';
import { updateRepo } from './updateRepo';

import { State } from './types';
import { Action } from '../actions/types';

const reducer = (
  state: State,
  action: Action
): State => {
  return {
    accList: updateAccList(state, action),
    accSelected: updateAcc(state, action),
    repoSelected: updateRepo(state, action),
  };
};

export const rootReducer = combineReducers(reducer);

export type RootState = ReturnType<typeof rootReducer>;
