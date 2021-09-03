/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';


const Home = () => {



  return (
  

    <div className={styles.homePage}>
      <div className={styles.rightHalf}>
        <div className={styles.quizButtons}>
         
          <Link to="/quiz/">
            <button>Start Quiz</button>
          </Link>
         
          <Link to="/submit">
            <button>Submit a Question</button>
          </Link>
         
         
          <button>View Questions</button>
        </div>

      </div>
    </div>

  );

};

export default Home;
