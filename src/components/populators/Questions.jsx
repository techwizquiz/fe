import React from 'react';
import PropTypes from 'prop-types';


const Question = ({ questionText }) => {
  console.log(questionText); return (


    <p>{questionText}</p>

  );
};



Question.propTypes = {
  question: PropTypes.object.isRequired,
};

export default Question;
