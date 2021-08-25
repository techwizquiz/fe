import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <p>Tech Wiz Quiz</p>        
        </div>

        <div className={styles.headerNavLinks}>
          <p>Home</p>
          <p>Log In</p>
        </div>

      </div>
    );
  }
}
