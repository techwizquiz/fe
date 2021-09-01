/* eslint-disable max-len */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignUp.css';
import { Avatars } from '../components/populators/Avatars';

const SignUpPage = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('monster');

  const signUp = async (email, password, avatar) => {
    const res = await fetch(`${process.env.API_URL}/api/v1/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, avatar }),
      credentials: 'include',
    });
    return res.json();
  };

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'avatar') setAvatar(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signUp(email, password, avatar).then(() => history.push('/home'));

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

          <section>
            <Avatars onChange={handleChange} />
          </section>

          <section className={styles.SignUpButton}>
            <button className={styles.submitButton}>Submit</button>
          </section>

          {/* <div>
            Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div> */}

        </div>
      </form>
      <footer className={styles.footer}>
        Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div >
  );

};

export default SignUpPage;
