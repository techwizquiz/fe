import React from 'react';
import { useQuestions } from './QuestionProvider';

const QuestionLevel = ({ level }) => {
  const qLevel = useQuestions();

  const levelElement = qLevel.map((level) => (
    <p>{level.level}</p>
  ));
    
  return (
    { levelElement }
  );
};

export default QuestionLevel;
