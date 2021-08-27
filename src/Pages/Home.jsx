/* eslint-disable max-len */
import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

const Home = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async (email, password) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    return res.json();
  };


  const handleChange = ({ target }) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await postLogin(email, password);
  };


  return (
    <div className={styles.homePage}>

      <div className={styles.leftHalf}>
        <form>
          <div className={styles.logIn}>
            <section className={styles.logInHeader}>
              <p>Log In</p>


            </section>

            <section className={styles.logInInfo}>
              <label htmlFor="email">email:</label>
              <input id="email" type="email" name="email"
                value={email} onChange={handleChange}
              />


              <label htmlFor="password">password:</label>
              <input id="password" type="password" name="password"
                value={password} onChange={handleChange}
              />

              <Link to="/signup">Sign Up</Link>
            </section>

            <section className={styles.logInButton}>
              <button className={styles.submitButton}>Submit</button>
            </section>

          </div>
        </form>
      </div>


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

    </div >
  );

};

export default Home;
