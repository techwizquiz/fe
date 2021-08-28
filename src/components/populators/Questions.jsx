import React from 'react';
import PropTypes from 'prop-types';


const Question = ({ question }) => (

  <p src={question.questionText}></p>

);



Question.propTypes = {
  question: PropTypes.object.isRequired,
};

console.log(Question);

export default Question;
