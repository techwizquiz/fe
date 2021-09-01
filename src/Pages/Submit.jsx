/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Submit.css';
import { useHistory } from 'react-router-dom';

const Submit = () => {

  const history = useHistory();
  const [questionTitle, setQuestionTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [choiceA, setChoiceA] = useState('');
  const [choiceB, setChoiceB] = useState('');
  const [choiceC, setChoiceC] = useState('');
  const [choiceD, setChoiceD] = useState('');
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState('');
  const [explanation, setExplanation] = useState('');
  const [level, setLevel] = useState(1);


  const submitQuestion = async (level, questionTitle, question, answer, choiceA, choiceB, choiceC, choiceD, explanation, language) => {

    const res = await fetch(`${process.env.API_URL}/api/v1/questions`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level, questionTitle, questionText: question, answer, a: choiceA, b: choiceB, c: choiceC, d: choiceD, explanation, language })

    });
    console.log(res);
    return res.json();
  };

  const correctAnswer = (choice) => {
    if (choice.id === 'correct-A') {
      return 'a';
    } else if (choice.id === 'correct-B') {
      return 'b';
    } else if (choice.id === 'correct-C') {
      return 'c';
    } else if (choice.id === 'correct-D') {
      return 'd';
    } else return 'user has not chosen';
  };

  const handleChange = ({ target }) => {
    if (target.name === 'question') setQuestion(target.value);
    // if (target.name === 'correct') setAnswer(correctAnswer(choice));
    if (target.name === 'question-title') setQuestionTitle(target.value);
    if (target.name === 'possible-A') setChoiceA(target.value);
    if (target.name === 'possible-B') setChoiceB(target.value);
    if (target.name === 'possible-C') setChoiceC(target.value);
    if (target.name === 'possible-D') setChoiceD(target.value);
    if (target.name === 'language') setLanguage(target.value);
    if (target.name === 'explanation') setExplanation(target.value);
    if (target.name === 'level') setLevel(target.value);

    if (target.id === 'a') setAnswer(target.value);
    if (target.id === 'b') setAnswer(target.value);
    if (target.id === 'c') setAnswer(target.value);
    if (target.id === 'd') setAnswer(target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(level, questionTitle, question, answer, choiceA, choiceB, choiceC, choiceD, explanation, language);
    submitQuestion(level, questionTitle, question, answer, choiceA, choiceB, choiceC, choiceD, explanation, language).then(() => history.push('/home'));
  };


  return (
    <div className={styles.submitPage}>
      <form onSubmit={handleSubmit}>
        <div className={styles.submit}>

          <div className={styles.fix}>
            <label>Question:</label>
            <input name="question" onChange={handleChange} value={question} className={styles.question}></input>
          </div>

          <div className={styles.fix}>
            <label>Question Title:</label>
            <input name="question-title" onChange={handleChange} value={questionTitle} className={styles.question}></input>
          </div>

          <div className={styles.fix}>
            <label>Possible Answer:</label>
            <input name="possible-A" onChange={handleChange} value={choiceA}></input>
          </div>

          <div className={styles.fix}>
            <label>Correct Answer?</label>
            <input type="radio" id="a" name="correct" value="a" onChange={handleChange} ></input>
          </div>


          <div className={styles.fix}>
            <label>Possible Answer:</label>
            <input name="possible-B" onChange={handleChange} value={choiceB}></input>
          </div>

          <div className={styles.fix}>
            <label>Correct Answer?</label>
            <input type="radio" id="b" name="correct" value="b" onChange={handleChange}></input>
          </div>


          <div className={styles.fix}>
            <label>Possible Answer:</label>
            <input name="possible-C" onChange={handleChange} value={choiceC}></input>
          </div>

          <div className={styles.fix}>
            <label>Correct Answer?</label>
            <input type="radio" id="c" name="correct" value="c" onChange={handleChange}></input>
          </div>


          <div className={styles.fix}>
            <label>Possible Answer:</label>
            <input name="possible-D" onChange={handleChange} value={choiceD}></input>
          </div>

          <div className={styles.fix}>
            <label>Correct Answer?</label>
            <input type="radio" id="d" name="correct" value="d" onChange={handleChange}></input>
          </div>

          <div className={styles.fix}>
            <label>Programming Language:</label>
            <input name="language" onChange={handleChange} value={language}></input>
          </div>

          <div className={styles.fix}>
            <label>Explanation:</label>
            <input name="explanation" onChange={handleChange} value={explanation}></input>
          </div>

          <div className={styles.fix}>
            <label>Level:</label>
            <input name="level" onChange={handleChange} value={level}></input>
          </div>


          <button>Submit</button>

        </div>
      </form>
    </div >
  );
};
export default Submit;
