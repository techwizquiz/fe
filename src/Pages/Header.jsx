/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthLoading, useSession } from '../services/SessionProvider.jsx';
import styles from './Header.css';

const Header = () => {

  const user = useSession();
  const loading = useAuthLoading();

  if(loading && !user) return (
    <h1>...Loading</h1>
  );

  console.log('header user', user);

  // const logOut = useLogout();

  // const handleSubmit = (e) => {
  //   e.preventDefault;
  //   logOut();
  // };

  // const avatarRef = React.useRef();

  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <p>Tech Wiz Quiz</p>        
      </div>

      {user ? 
        <div>
          <img src={`../assets/png/${user?.user?.avatar}.png`}></img>
          {/* <img ref={avatarRef} src={`../assets/png/${user?.user?.avatar}.png`}></img> */}
        </div> :
        null
      } 

      <div className={styles.headerNavLinks}>
        <Link className={styles.link} to="/home/">
          <p>Home</p>
        </Link>
        {/* {user ? 
          <form onSubmit={handleSubmit}>
            <button>Log out</button>
          </form> :
          null
        } */}

      </div>

    </div>
  );
  
};
export default Header;
