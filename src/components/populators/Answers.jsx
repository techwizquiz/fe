/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSetWinLose } from '../../services/SessionProvider';
import styles from './Answers.css';



const Answers = ({ a, b, c, d, answer }) => {

  const [selectedChoice, setSelectedChoice] = useState(null);

  const { setWinLose, winLose } = useSetWinLose('neutral');
 

  const choice = (e) => {
    console.log('selectedCHOICE', selectedChoice, 'HAHAHAHA', answer);
    // setSeenQuestionIds: add new id to array of ids in state
    if(selectedChoice === answer) {
      setWinLose('win');
    } else {
      setWinLose('lose');
    }
    console.log('helllllo', winLose);
  };


  return (
    <>
      <div className={styles.answersPage}>
        <div className={styles.left}>
          <label><button className={styles.button}  type="radio" name="answer" value="a" onClick={({ target }) => setSelectedChoice(target.value)} key={a}>A: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{a}</pre></button></label> 

          <label><button className={styles.button}  type="radio" name="answer" value="b" onClick={({ target }) => setSelectedChoice(target.value)} key={b}>B: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{b}</pre></button></label> 

          <label><button className={styles.button}  type="radio" name="answer" value="c" onClick={({ target }) => setSelectedChoice(target.value)} key={c}>C: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{c}</pre></button></label> 

          <label><button className={styles.button}  type="radio" name="answer" value="d" onClick={({ target }) => setSelectedChoice(target.value)} key={d}>D: <pre className={winLose === 'win' ?
            styles.win : styles.lose}>{d}</pre></button></label> 
        </div>
        <div className={styles.right}>
          <button onClick={choice} className={styles.submitButton}>Submit</button>
        </div>

      </div>

    </>
  );

};

export default Answers;

