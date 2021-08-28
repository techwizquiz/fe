import React, { Component } from 'react';
import styles from './QuizPage.css';
import QuestionList from '../components/populators/QuestionList';

export default class QuizPage extends Component {
  render() {
    return (
      <div className={styles.quizPage}>
        <div className={styles.left}>
          <button className={styles.choiceButton}>Choice 1</button>
          <button className={styles.choiceButton}>Choice 2</button>
          <button className={styles.choiceButton}>Choice 3</button>
          <button className={styles.choiceButton}>Choice 4</button>
        </div>

        <div className={styles.middle}>
          <button className={styles.submitButton}>Submit</button>
        </div>

        <div className={styles.right}>
          <div>
            <p>Level:</p>
          </div>
          <div className={styles.question}>
            <QuestionList />
          </div>
          <div>
            <p>Correct:</p>
            <p>Incorrect:</p>
          </div>
        </div>
      </div>

    );
  }
}
