/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthLoading, useSession } from '../services/SessionProvider.jsx';
import styles from './Header.css';

const Header = () => {

  const session = useSession();
  const loading = useAuthLoading();

 

  if (loading && !session) return (
    <h1>...Loading</h1>
  );

  let imgSrc;

  if (session && !session?.user?.avatar) {
    imgSrc = session.avatar;
  } else {
    imgSrc = session?.user?.avatar;
  }

  

  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <p>Tech Wiz Quiz</p>
      </div>

      {session ?
        <div className={styles.icon}>
          <img src={`../assets/png/${imgSrc}.png`}></img>
        </div> :
        null
      }

      <div className={styles.headerNavLinks}>
        <Link className={styles.link} to="/home/">
          <p>Home</p>
        </Link>
      </div>

    </div>
  );

};
export default Header;
