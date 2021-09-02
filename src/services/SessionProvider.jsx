/* eslint-disable max-len */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { fetchVerify, postLogin, postSignup } from './auth';
const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [winLose, setWinLose] = useState('neutral');
  const [correct, setCorrect] = useState(null);
  const [incorrect, setIncorrect] = useState(null);

  useEffect(() => {
    fetchVerify()
      .then((user) => setSession(user))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const signup = async (email, password, avatar) => {
    const user = await postSignup(email, password, avatar);
    setSession(user);
    history.push('/dashboard');
  };

  const login = async (email, password) => {
    setSession(await postLogin(email, password));
    history.push('/dashboard');
  };

  return (
    <SessionContext.Provider value={{ session, loading, signup, login, winLose, setWinLose, correct, setCorrect, incorrect, setIncorrect }}>
      {children}
    </SessionContext.Provider>
  );
};

export const PrivateRoute = (props) => {
  const session = useSession();
  const loading = useAuthLoading();
  console.log('s', session);
  if (loading) return <h1>Loading....THIS SHOULD BE A SPINNER!!!</h1>;
  if (!session && !loading) return <Redirect to="/login" />;

  return <Route {...props} />;
};

export const useSession = () => {
  const { session } = useContext(SessionContext);
  return session;
};

export const useAuthLoading = () => {
  const { loading } = useContext(SessionContext);
  return loading;
};

export const useSignup = () => {
  const { signup } = useContext(SessionContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(SessionContext);
  return login;
};

export const useSetWinLose = () => {
  const { setWinLose, winLose } = useContext(SessionContext);
  return { setWinLose, winLose };
};

export const useSetCorrect = () => {
  const { correct, setCorrect } = useContext(SessionContext);
  return { correct, setCorrect };
};

//this is my comment

export const useSetIncorrect = () => {
  const { incorrect, setIncorrect } = useContext(SessionContext);
  return { incorrect, setIncorrect };
};

