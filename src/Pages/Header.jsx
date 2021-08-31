import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <p>Tech Wiz Quiz</p>        
        </div>

        <div className={styles.headerNavLinks}>
          <Link className={styles.link} to="/home/">
            <p>Home</p>
          </Link>
          <p>Log Out</p>
        </div>

      </div>
    );
  }
}
