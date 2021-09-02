/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSetCorrect, useSetIncorrect, useSetWinLose } from '../../services/SessionProvider';
import styles from './Answers.css';
import grimReaper from '../../../assets/png/032-grim-reaper.png';
import smilingWizard from '../../../assets/png/068-wizard.png';
import { fetchQuestions, fetchRandomQuestions } from '../../services/FetchQuestion';
import { useSetQuestions } from './QuestionProvider';



const Answers = ({ a, b, c, d, answer, explanation }) => {
  const setQuestions = useSetQuestions();
  const [selectedChoice, setSelectedChoice] = useState('');
  const { winLose, setWinLose } = useSetWinLose('neutral');
  const { correct, setCorrect } = useSetCorrect(correct);
  const { incorrect, setIncorrect } = useSetIncorrect(incorrect);
  const [round, setRound] = useState('active');

  const choice = () => {
    if(selectedChoice === '') {
      return;
    }
 
    if(selectedChoice === answer) {
      setWinLose('win');
      setCorrect((count) => count + 1);
    } else {
      setWinLose('lose');
      setIncorrect((count) => count + 1);
    }

    setRound('inactive');
    setSelectedChoice('');
  };
  

  const handleNewQuestion = () => {
    fetchQuestions().then((questionArr) => {
      return fetchRandomQuestions(questionArr);
    }).then(setQuestions);

    setRound('active');
    setWinLose('neutral');
  };

  return (
    <>
      <div className={styles.answersPage}>
        
        <div className={styles.left}>
          <label><button className={styles.button} type="radio" name="answer" value="a" onClick={({ target }) => setSelectedChoice(target.value)} key={a}>A: <pre className={styles.pre}>{a}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="b" onClick={({ target }) => setSelectedChoice(target.value)} key={b}>B: <pre className={styles.pre}>{b}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="c" onClick={({ target }) => setSelectedChoice(target.value)} key={c}>C: <pre className={styles.pre}>{c}</pre></button></label>

          <label><button className={styles.button} type="radio" name="answer" value="d" onClick={({ target }) => setSelectedChoice(target.value)} key={d}>D: <pre className={styles.pre}>{d}</pre></button></label>
        </div>
        
        <div className={styles.middle}>
          <div className={winLose === 'neutral' ? styles.hidden : styles.rightWrongAvatar}>
            {winLose === 'win' ? 
              <>
                <h1>Correct</h1> 
                
              </> : 
              <>
                <h1>Incorrect</h1>
                
              </>
            }
            <img src={winLose === 'win' ? smilingWizard : grimReaper} />
          </div>

          <button onClick={choice} className={round === 'active' ? styles.submitButton : styles.disabledButton}>Submit<br></br>{selectedChoice.toUpperCase()}</button>

          <button className={styles.nextQuestion} onClick={handleNewQuestion} id="submitButton">Next Question</button>
          <div className={styles.scores}>
            <p>correct: {correct}</p>
            <p>incorrect: {incorrect}</p>
          </div>
        </div>
        <div className={winLose === 'neutral' ? styles.hidden : styles.right}>
          <p className={styles.explanation}>{explanation}</p>
        </div>

      </div>

    </>
  );

};

export default Answers;

