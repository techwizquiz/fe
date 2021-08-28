import React from 'react';
import { useQuestions } from './QuestionProvider';
import Question from './Questions';

const QuestionList = () => {
  const questions = useQuestions();

  const questionElements = questions.map((question) => (
    <li key={question.question}>
      <Question {...question} />
    </li>
  ));

  return <ul>{questionElements}</ul>;
};

export default QuestionList;

