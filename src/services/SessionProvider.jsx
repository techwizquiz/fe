import React, { createContext, useState } from 'react';

const SessionContext = createContext();

export const sessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  const postSignUp = async (email, password) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    return res.json();
  };

  const signup = async (email, password) => {
    const user = await postSignUp(email, password);
  };

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSignup = () => {
  const { signup } = useContext(SessionContext);
  return signup;
};

