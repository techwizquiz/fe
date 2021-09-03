import React from 'react';
import { useQuestions } from './QuestionProvider';
import QuestionText from './QuestionText';
import styles from './QuestionList.css';

const QuestionList = () => {
  const questions = useQuestions();
  // const questionElements = questions.map((question) => (
  //   <p key={question.questionText}>
  //     <QuestionText {...question} />
  //   </p>
  // ));

  return <QuestionText {...questions} className={styles.questionText}/>;
};

export default QuestionList;
