import axios from 'axios';
import { AccData, AccSelectedRepo, RepoSelectedData, RepoInfo, Readme } from '../reducers/types';

const apiBase = 'https://api.github.com';
const authorId = 60003920;

const getResource = async (url: string):
Promise<any> => {
  const res = await axios.get(`${apiBase}${url}`);

  if (!(res.status === 200)) {
    throw new Error(`Could not fetch ${apiBase}${url}}`
                + `, recieved ${res.status}`);
  }

  return res.data;
};

const randId = (min: number, max: number | 60003920) => {
  const left = Math.ceil(min);
  const right = Math.floor(max);
  return Math.floor(Math.random() * (right - left)) + left;
};

const getRandomAcc = async (): Promise<AccData> => {
  let res;
  try {
    res = await getResource(`/user/${randId(1, authorId)}`);
  } catch {
    res = await getResource(`/user/${authorId}`);
  }
  return res;
};

export const getNthRandomAcc = async (n: number): Promise<AccData[]> => {
  const list = [];

  for (let i = 0; i < n; i += 1) {
    list.push(getRandomAcc());
  }

  const result = await Promise.all(list);
  return result;
};

export const getAccRepos = async (username: string): Promise<AccSelectedRepo[]> => {
  const repos = await getResource(`/users${username}/repos`);
  return repos;
};

export const getRepoInfoAndReadme = async (usernameRepo: string): Promise<RepoSelectedData> => {
  const repoInfoAny = await getResource(`/repos${usernameRepo}`);
  const readmeAny = await getResource(`/repos${usernameRepo}/readme`);
  const repoInfo: RepoInfo = <RepoInfo>repoInfoAny;
  const readme: Readme = <Readme>readmeAny;
  return {
    repoInfo,
    readme
  };
};
