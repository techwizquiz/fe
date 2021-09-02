import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthLoading, useSession } from '../services/SessionProvider.jsx';
import styles from './Header.css';
import monster from '../../assets/png/004-monster.png';
import youngWizard from '../../assets/png/054-wizard.png';
import goblin from '../../assets/png/031-goblin.png';
import skullWizard from '../../assets/png/045-wizard.png';
import octopus from '../../assets/png/034-sea-monster.png';

const Header = () => {
  const user = useSession();
  const loading = useAuthLoading();


  if(loading) return (
    <h1>...Loading</h1>
  );

  console.log('user', user);
  
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <p>Tech Wiz Quiz</p>        
      </div>

      {user ? 
        <div>
          <img src={user?.avatar}></img>
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
