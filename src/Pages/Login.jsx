import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';
import { useLogin } from '../services/SessionProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const login = useLogin();

  const handleChange = ({ target }) => {
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.homePage}>
      <form onSubmit={handleSubmit}>
        <div className={styles.logIn}>
          <section className={styles.logInHeader}>
            <p>LOG IN</p>
          </section>
          <section className={styles.logInInfo}>
            <label htmlFor="email">email:
              <input id="email" type="email" name="email"
                value={email} onChange={handleChange}
              />
            </label>
            <label htmlFor="password">password:
              <input id="password" type="password" name="password"
                value={password} onChange={handleChange}
              />
            </label>
          </section>
          <section className={styles.logInButton}>
            <button className={styles.submitButton}>Submit</button>
            <Link className={styles.link} to="/signup">Sign Up</Link>
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
