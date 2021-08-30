/* eslint-disable max-len */
import React from 'react';
import styles from './Answers.css';

const Answers = ({ a, b, c, d }) => {
  return (
    <>
      <button type="radio" className={styles.button} key={a}>{a}</button>
      <button type="radio" className={styles.button} key={b}>{b}</button>
      <button type="radio" className={styles.button} key={c}>{c}</button>
      <button type="radio" className={styles.button} key={d}>{d}</button>
    </>
  );

};

export default Answers;
