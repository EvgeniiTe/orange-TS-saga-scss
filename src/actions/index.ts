import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  AccListActionTypes,
  FETCH_ACC_REQUEST,
  FETCH_ACC_SUCCESS,
  FETCH_ACC_FAILURE,
  AccActionTypes,
  FETCH_REPO_REQUEST,
  FETCH_REPO_SUCCESS,
  FETCH_REPO_FAILURE,
  RepoActionTypes,
  ServiceFunctions
} from './types';
import { AccData, AccSelectedRepo, RepoSelectedData } from '../reducers/types';

// accList
export const accListRequested = (): AccListActionTypes => {
  return { type: FETCH_LIST_REQUEST };
};

export const accListLoaded = (accList: AccData[]): AccListActionTypes => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: accList,
  };
};

export const accListError = (error: string): AccListActionTypes => {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
};

export const actionForAccListSaga = (api: ServiceFunctions, param: number | string) => {
  return {
    type: 'FETCH_ACCS_LIST',
    payload: { api, param },
  };
};

// accSelected
export const accRequested = (): AccActionTypes => {
  return { type: FETCH_ACC_REQUEST };
};

export const accLoaded = (acc: AccSelectedRepo[]): AccActionTypes => {
  return {
    type: FETCH_ACC_SUCCESS,
    payload: acc,
  };
};

export const accError = (error: string): AccActionTypes => {
  return {
    type: FETCH_ACC_FAILURE,
    payload: error,
  };
};

export const actionForAccSelectedSaga = (api: ServiceFunctions, param: number | string) => {
  return {
    type: 'FETCH_ACC_SELECTED',
    payload: { api, param },
  };
};

// repoSelected
export const repoRequested = (): RepoActionTypes => {
  return { type: FETCH_REPO_REQUEST };
};

export const repoLoaded = (repo: RepoSelectedData): RepoActionTypes => {
  return {
    type: FETCH_REPO_SUCCESS,
    payload: repo,
  };
};

export const repoError = (error: string): RepoActionTypes => {
  return {
    type: FETCH_REPO_FAILURE,
    payload: error,
  };
};

export const actionForRepoSelectedSaga = (api: ServiceFunctions, param: number | string) => {
  return {
    type: 'FETCH_REPO_SELECTED',
    payload: { api, param },
  };
};
