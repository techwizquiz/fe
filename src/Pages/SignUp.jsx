/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import styles from './SignUp.css';
import { Avatars } from '../components/populators/Avatars';
import { useSignup } from '../services/SessionProvider';

const SignUpPage = () => {

  // const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const signUp = useSignup();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'avatar') setAvatar(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    signUp(email, password, avatar);
  };

  return (
    <div className={styles.SignUpPage}>

      <form onSubmit={handleSubmit}>

        <div className={styles.SignUp}>
          <section className={styles.SignUpHeader}>
            <p>SIGN UP</p>
          </section>

          <section className={styles.SignUpInfo}>
            <label htmlFor="email">email:</label>
            <input id="email" type="email" name="email" value={email} onChange={handleChange} />

            <br></br>

            <label htmlFor="password">password:</label>
            <input id="password" type="password" name="password" value={password} onChange={handleChange} />
          </section>

          <section className={styles.Avatars}>
            <Avatars onChange={handleChange} />
          </section>

          <section className={styles.SignUpButton}>
            <button className={styles.submitButton}>Submit</button>
            <Link className={styles.link} to="/login">Already have an account? Log in</Link>
          </section>

        </div>
      </form>
      <footer className={styles.footer}>
        Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div >
  );

};

export default SignUpPage;
