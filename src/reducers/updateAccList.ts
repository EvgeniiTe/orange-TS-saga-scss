import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  Action
} from '../actions/types';
import { AccListState, State } from './types';

const initialState: AccListState = {
  data: [],
  loading: true,
  error: null,
};

export const updateAccList = (state: State, action: Action): AccListState => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return initialState;
    case FETCH_LIST_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_LIST_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.accList;
  }
};
