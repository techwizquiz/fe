import { get, post } from './Request';

export const postSignup = (email, password) => {
  return post('/api/v1/auth/signup', { email, password });
};

export const postLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchVerify = () => {
  console.log('get', get('/api/v1/auth/verify'));
  return get('/api/v1/auth/verify');
};
