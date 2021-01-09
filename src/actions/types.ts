import { AccData, AccSelectedRepo, RepoSelectedData } from '../reducers/types';
import { store } from '../store';

export const FETCH_LIST_REQUEST = 'FETCH_LIST_REQUEST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';
export const FETCH_ACC_REQUEST = 'FETCH_ACC_REQUEST';
export const FETCH_ACC_SUCCESS = 'FETCH_ACC_SUCCESS';
export const FETCH_ACC_FAILURE = 'FETCH_ACC_FAILURE';
export const FETCH_REPO_REQUEST = 'FETCH_REPO_REQUEST';
export const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
export const FETCH_REPO_FAILURE = 'FETCH_REPO_FAILURE';

export type AppDispatch = typeof store.dispatch;
type getNthRandomAccType = (n: number) => Promise<AccData[]>;
type getAccReposType = (username: string) => Promise<AccSelectedRepo[]>;
type getRepoInfoAndReadmeType = (usernameRepo: string) => Promise<RepoSelectedData>;
export interface ServiceFunctions {
    getNthRandomAcc: getNthRandomAccType,
    getAccRepos: getAccReposType,
    getRepoInfoAndReadme: getRepoInfoAndReadmeType,
}

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

export type AccListActionTypes = AccListRequestedAction | AccListLoadedAction | AccListErrorAction;

interface AccRequestedAction {
    type: typeof FETCH_ACC_REQUEST;
}

interface AccLoadedAction {
    type: typeof FETCH_ACC_SUCCESS;
    payload: AccSelectedRepo[];
}

interface AccErrorAction {
    type: typeof FETCH_ACC_FAILURE;
    payload: string;
}

export type AccActionTypes = AccRequestedAction | AccLoadedAction | AccErrorAction;

interface RepoRequestedAction {
    type: typeof FETCH_REPO_REQUEST;
}

interface RepoLoadedAction {
    type: typeof FETCH_REPO_SUCCESS;
    payload: RepoSelectedData;
}

interface RepoErrorAction {
    type: typeof FETCH_REPO_FAILURE;
    payload: string;
}

export type RepoActionTypes = RepoRequestedAction | RepoLoadedAction | RepoErrorAction;

export type Action = AccListActionTypes | AccActionTypes | RepoActionTypes

interface PayloadForActionForSaga {
    api: ServiceFunctions;
    param: number | string;
}
export interface ActionForSaga {
    type: string;
    payload: PayloadForActionForSaga;
}

export type FuncActionForSaga = (api: ServiceFunctions, param: number | string) => ActionForSaga;

export type MakeActionType = (param: number | string) => AppDispatch;
