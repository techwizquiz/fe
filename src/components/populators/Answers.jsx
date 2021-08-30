import React from 'react';
import { useQuestions } from './QuestionProvider';

const Answers = ({ a, b, c, d }) => {
  const answers = useQuestions();
  
  const answersElement = answers.map((answer) => (
    <>
      <button key={answer.a}>{answer.a}</button>
      <button key={answer.b}>{answer.b}</button>
      <button key={answer.c}>{answer.c}</button>
      <button key={answer.d}>{answer.d}</button>
    </>
  ));

  return (
    <>
      {answersElement};
    </>
  );
};

export default Answers;
