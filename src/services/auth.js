import { get, post } from './Request';

export const postSignup = (email, password, avatar) => {
  return post('/api/v1/auth/signup', { email, password, avatar });
};

export const postLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchVerify = async () => {
  const res = await get('/api/v1/auth/verify');
  console.log('res', res);
  return res;
};

export const getLogout = () => {
  return get('/api/v1/auth/logout');
};
