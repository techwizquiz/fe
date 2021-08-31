import React from 'react';
import PropTypes from 'prop-types';


const QuestionText = ({ questionTitle, questionText }) => {
  return (
    <div>
      <p>{questionTitle}</p>
      <pre>{questionText}</pre>
    </div>
  );
};



QuestionText.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionText;
