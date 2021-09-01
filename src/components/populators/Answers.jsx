/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSetCorrect, useSetIncorrect, useSetWinLose } from '../../services/SessionProvider';
import styles from './Answers.css';


const Answers = ({ a, b, c, d, answer, explanation }) => {

  const [selectedChoice, setSelectedChoice] = useState();
  const { winLose, setWinLose } = useSetWinLose('neutral');
  const { correct, setCorrect } = useSetCorrect(correct);
  const { incorrect, setIncorrect } = useSetIncorrect(incorrect);
  const [round, setRound] = useState('active');

  const choice = () => {
 
    if(selectedChoice === answer) {
      setWinLose('win');
      setCorrect((count) => count + 1);
    } else {
      setWinLose('lose');
      setIncorrect((count) => count + 1);
    }

    setRound('inactive');

    alert(explanation);
  };



  return (
    <>
      <div className={styles.answersPage}>
        <div className={styles.left}>
          <label><button className={styles.button} type="radio" name="answer" value="a" onClick={({ target }) => setSelectedChoice(target.value)} key={a}>A: <pre className={winLose === 'neutral' ? styles.neutral : `${winLose === 'win' ?
            styles.win : styles.lose}`}>{a}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="b" onClick={({ target }) => setSelectedChoice(target.value)} key={b}>B: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{b}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="c" onClick={({ target }) => setSelectedChoice(target.value)} key={c}>C: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{c}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="d" onClick={({ target }) => setSelectedChoice(target.value)} key={d}>D: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{d}</pre></button></label>
        </div>
        <div className={styles.right}>
          <button onClick={choice} className={round === 'active' ? styles.submitButton : styles.disabledButton}>Submit</button>

          <button className={styles.nextQuestion} onClick={() => window.location.reload(false)} id="submitButton">Next Question</button>
          <div className={styles.scores}>
            <p>correct: {correct}</p>
            <p>incorrect: {incorrect}</p>
          </div>
        </div>

      </div>

    </>
  );

};

export default Answers;

