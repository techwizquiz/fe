import React from 'react';
import { useQuestions } from './QuestionProvider';
import Answers from './Answers';

const AnswersList = () => {
  const answers = useQuestions();

  const answersElements = answers.map((question) => (
    <li key={question}>
      <Answers {...Answers} />
    </li>
  ));

  return <ul>{answersElements}</ul>;
};

export default AnswersList;
