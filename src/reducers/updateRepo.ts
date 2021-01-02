import {
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE,
  Action
} from '../actions/types';
import { RepoSelectedState, State } from './types';

const initialState: RepoSelectedState = {
  data: null,
  loading: false,
  error: null,
};

export const updateRepo = (state: State, action: Action): RepoSelectedState => {
  if (state === undefined) {
    return initialState;
  }

  if (state.repoSelected === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_REPO_REQUEST:
      return {
        data: null,
        loading: true,
        error: null,
      };
    case FETCH_REPO_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_REPO_FAILURE:
      return {
        data: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.repoSelected;
  }
};
