import React from 'react';
import PropTypes from 'prop-types';


const Question = ({ level, questionTitle, questionText, a, b, c, d, }) => {
  return (
    <div>
      <p>{level}</p>
      <p>{questionTitle}</p>
      <p>{questionText}</p>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <p>{d}</p>
    </div>
  );
};



Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
