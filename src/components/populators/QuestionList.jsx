import React from 'react';
import { useQuestions } from './QuestionProvider';
import QuestionText from './QuestionText';

const QuestionList = () => {
  const questions = useQuestions();

  const questionElements = questions.map((question) => (
    <p key={question.questionText}>
      <QuestionText {...question} />
    </p>
  ));

  return <p>{questionElements}</p>;
};

export default QuestionList;

