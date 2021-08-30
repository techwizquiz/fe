import React, { Component } from 'react';
import styles from './QuizPage.css';
import QuestionList from '../components/populators/QuestionList';
import AnswersList from '../components/populators/AnswersList';



export default class QuizPage extends Component {
  render() {
    return (
      <div className={styles.quizPage}>
        <div className={styles.left}>
          <AnswersList className={styles.choiceButton} />
        </div>

        <div className={styles.middle}>
          <button className={styles.submitButton}>Submit</button>
        </div>

        <div className={styles.right}>
          <div>
            <p>Level: </p>
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
