import React from 'react';
import PropTypes from 'prop-types';


const QuestionText = ({ questionTitle, questionText }) => {
  return (
    <div>
      <p>{questionTitle}</p>
      <p>{questionText}</p>
    </div>
  );
};



QuestionText.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionText;
