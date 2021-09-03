import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthLoading, useSession } from '../services/SessionProvider.jsx';
import styles from './Header.css';
// import monster from '../../assets/png/monster.png';
// import youngWizard from '../../assets/png/youngWizard.png';
// import goblin from '../../assets/png/goblin.png';
// import skullWizard from '../../assets/png/skullWizard.png';
// import chimera from '../../assets/png/chimera.png';

const Header = () => {
  const user = useSession();
  const loading = useAuthLoading();


  if (loading) return (
    <h1>...Loading</h1>
  );

  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <p>Tech Wiz Quiz</p>
      </div>

      {user ?
        <div className={styles.icon}>
          <img src={`../assets/png/${user?.user.avatar}.png`}></img>
        </div> :
        null
      }

      <div className={styles.headerNavLinks}>
        <Link className={styles.link} to="/home/">
          <p>Home</p>
        </Link>
        <p>Log Out</p>
      </div>

    </div>
  );
};
export default Header;
