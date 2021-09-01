import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuestionText.css';


const QuestionText = ({ questionTitle, questionText }) => {
  return (
    <div className={styles.questionText}>
      <p>{questionTitle}</p>
      <pre>{questionText}</pre>
    </div>
  );
};



QuestionText.propTypes = {
  question: PropTypes.object.isRequired,
};

export default QuestionText;
