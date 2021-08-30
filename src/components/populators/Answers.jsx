/* eslint-disable max-len */
import React from 'react';
import { useQuestions } from './QuestionProvider';
import styles from './Answers.css';

const Answers = ({ a, b, c, d }) => {
  const answers = useQuestions();
  
  const answersElement = answers.map((answer) => (
    <>
      <button type="radio" className={styles.button} key={answer.a}>{answer.a}</button>
      <button type="radio" className={styles.button} key={answer.b}>{answer.b}</button>
      <button type="radio" className={styles.button} key={answer.c}>{answer.c}</button>
      <button type="radio" className={styles.button} key={answer.d}>{answer.d}</button>
    </>
  ));

  return (
    <>
      {answersElement};
    </>
  );
};

export default Answers;
