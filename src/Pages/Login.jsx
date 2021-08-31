import React, { useState, } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.css';
// import { useLogin } from '../services/SessionProvider';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const login = useLogin();

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
    postLogin(email, password).then(() => history.push('/home'));

  };


  return (
    <div className={styles.homePage}>

      <div className={styles.leftHalf}>
        <form onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Login;