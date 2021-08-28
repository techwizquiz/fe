/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchQuestions } from '../../services/FetchQuestion';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);


  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => {
  const { questions } = useContext(QuestionContext);
  return questions;
};
