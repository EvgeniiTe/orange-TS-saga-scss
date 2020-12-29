import { updateAccList } from './updateAccList';
import { updateAcc } from './updateAcc';
import { updateRepo } from './updateRepo';

import { AccListState, AccSelectedState, RepoSelectedState } from './types';

export const reducer = (state: AccListState | AccSelectedState | RepoSelectedState, action) => {
  return {
    accList: updateAccList(state, action),
    accSelected: updateAcc(state, action),
    repoSelected: updateRepo(state, action),
  };
};
