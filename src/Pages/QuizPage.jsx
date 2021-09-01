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

        

        <div className={styles.right}>
          <div className={styles.question}>
            <QuestionList className={styles.questionList}/>
          </div>
        </div>
      </div>

    );
  }
}
