import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.homePage}>

        <form>
          <div className={styles.leftHalf}>
            <div className={styles.logIn}>
              <section className={styles.logInHeader}>
                <p>Log In/Sign Up</p>
              </section>

              <section className={styles.logInInfo}>
                <label htmlFor="username">username:</label>
                <input id="userName" type="userName" name="email"
                // value={ } onChange={ } 
                />


                <label htmlFor="password">password:</label>
                <input id="password" type="password" name="password"
                // value={ } onChange={ } 
                />
              </section>

              <section className={styles.logInButton}>
                <button className={styles.submitButton}>Submit</button>
              </section>

            </div>
          </div>
        </form>


        <div className={styles.rightHalf}>
          <div className={styles.quizButtons}>
            <button>Start Quiz</button>
            <button>Submit a Question</button>
            <button>View Questions</button>
          </div>

        </div>

      </div >
    );
  }
}
