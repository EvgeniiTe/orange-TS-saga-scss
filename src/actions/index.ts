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
  AppDispatch,
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

export const getRandomAccs = (serviceFunctions: ServiceFunctions) => {
  return (quantity: number) => async (dispatch: AppDispatch) => {
    dispatch(accListRequested());
    try {
      const data = await serviceFunctions.getNthRandomAcc(quantity);
      dispatch(accListLoaded(data));
    } catch (error) {
      dispatch(accListError(error.toString()));
    }
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

export const getAccPublicRepos = (serviceFunctions: ServiceFunctions) => {
  return (username: string) => async (dispatch: AppDispatch) => {
    dispatch(accRequested());
    try {
      const data = await serviceFunctions.getAccRepos(username);
      dispatch(accLoaded(data));
    } catch (error) {
      dispatch(accError(error));
    }
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

export const getRepoInfoAndReadmeUrl = (serviceFunctions: ServiceFunctions) => {
  return (usernameRepo: string) => async (dispatch: AppDispatch) => {
    dispatch(repoRequested());
    try {
      const data = await serviceFunctions.getRepoInfoAndReadme(usernameRepo);
      dispatch(repoLoaded(data));
    } catch (error) {
      const errMsg = 'It might be something wrong with this repo, try another one';
      dispatch(repoError(errMsg));
    }
  };
};
