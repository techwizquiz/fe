/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignUp.css';


const SignUpPage = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const signUp = async (email, password) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
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
    signUp(email, password).then(() => history.push('/home'));

  };


  return (
    <div className={styles.SignUpPage}>

      <form onSubmit={handleSubmit}>

        <div className={styles.SignUp}>
          <section className={styles.SignUpHeader}>
            <p>Sign Up</p>
          </section>

          <section className={styles.SignUpInfo}>
            <label htmlFor="email">email:</label>
            <input id="email" type="email" name="email" value={email} onChange={handleChange} />


            <label htmlFor="password">password:</label>
            <input id="password" type="password" name="password" value={password} onChange={handleChange} />
          </section>

          <section className={styles.SignUpButton}>
            <button className={styles.submitButton}>Submit</button>
          </section>


        </div>
      </form>


    </div >
  );

};

export default SignUpPage;
