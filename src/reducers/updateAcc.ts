import {
  FETCH_ACC_REQUEST,
  FETCH_ACC_SUCCESS,
  FETCH_ACC_FAILURE,
  Action
} from '../actions/types';
import { AccSelectedState, State } from './types';

const initialState: AccSelectedState = {
  data: [],
  loading: false,
  error: null,
};

export const updateAcc = (state: State, action: Action): AccSelectedState => {
  if (state === undefined) {
    return initialState;
  }

  if (state.accSelected === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_ACC_REQUEST:
      return {
        data: [],
        loading: true,
        error: null,
      };
    case FETCH_ACC_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_ACC_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
