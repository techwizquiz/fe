import React, { Component } from 'react';
import styles from './AboutUs.css';
import tpain from '../../assets/png/tpain.jpg';
import zach from '../../assets/png/zach.jpg';
import cpain from '../../assets/png/cpain.png';
import angel from '../../assets/png/angel.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div className={styles.aboutUs}>



        <div>
          <h1 className={styles.header}>About Us</h1>

          <div className={styles.rows}>
            <div>
              <h2>Zach</h2>
              <img src={zach} />
              <div>Description</div>
              <div>GITHUB</div>
              <div>LinkedIn</div>
            </div>
            <div>
              <h2>Christiane</h2>
              <img src={cpain} />
              <div>Description</div>
              <div>GITHUB</div>
              <div>LinkedIn</div>
            </div>
            <div>
              <h2>Taylor</h2>
              <img src={tpain} />
              <div>Description</div>
              <div>GITHUB</div>
              <div>LinkedIn</div>
            </div>
            <div>
              <h2>Angel</h2>
              <img src={angel} />
              <div>Description</div>
              <div>GITHUB</div>
              <div>LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
