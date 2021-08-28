import { get, post } from './request';

export const postSignup = (email, password) => {
  return post('/api/v1/auth/signup', { email, password });
};

export const postLogin = (email, password) => {
  return post('/api/v1/auth/login', { email, password });
};

export const fetchVerify = () => get('/api/v1/auth/verify');
