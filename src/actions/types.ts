import { AccData } from '../reducers/types';

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const FETCH_ACC_REQUEST = 'FETCH_ACC_REQUEST';
export const FETCH_ACC_SUCCESS = 'FETCH_ACC_SUCCESS';
export const FETCH_ACC_FAILURE = 'FETCH_ACC_FAILURE';
export const FETCH_REPO_REQUEST = 'FETCH_REPO_REQUEST';
export const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
export const FETCH_REPO_FAILURE = 'FETCH_REPO_FAILURE';

interface AccListRequestedAction {
    type: typeof FETCH_LIST_REQUEST;
}

interface AccListLoadedAction {
    type: typeof FETCH_LIST_SUCCESS;
    payload: AccData[];
}

interface AccListErrorAction {
    type: typeof FETCH_LIST_FAILURE;
    payload: string;
}
