import axios from 'axios';

const apiBase = 'https://api.github.com';
const authorId = 60003920;

const getResource = async (url) => {
  const res = await axios.get(`${apiBase}${url}`);

  if (!res.status === 200) {
    throw new Error(`Could not fetch ${apiBase}${url}}`
                + `, recieved ${res.status}`);
  }

  return res.data;
};

const randId = (min, max) => {
  const left = Math.ceil(min);
  const right = Math.floor(max);
  return Math.floor(Math.random() * (right - left)) + left;
};

const getRandomAcc = async () => {
  let res;
  try {
    res = await getResource(`/user/${randId(1, authorId)}`);
  } catch {
    res = await getResource(`/user/${authorId}`);
  }
  return res;
};

export const getNthRandomAcc = async (n) => {
  const list = [];

  for (let i = 0; i < n; i += 1) {
    list.push(getRandomAcc());
  }

  const result = await Promise.all(list);
  return result;
};

export const getAccRepos = async (username) => {
  const repos = await getResource(`/users${username}/repos`);
  return repos;
};

export const getRepoInfoAndReadme = async (usernameRepo) => {
  const repoInfo = await getResource(`/repos${usernameRepo}`);
  const readme = await getResource(`/repos${usernameRepo}/readme`);
  return {
    repoInfo,
    readme
  };
};
